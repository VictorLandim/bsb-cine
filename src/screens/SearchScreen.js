import React, { Component } from 'react';
import { StyleSheet, Text, View, Picker, Button, StatusBar } from 'react-native';
import { getMoviesForPlace, getPlacesForMovie } from '../logic/movie';
import { ScreenContainer } from '../components/ScreenContainer';
import { Logo } from '../components/Logo';

class SearchScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedMovie: '',
            selectedPlace: '',

            selectedMovieData: null,
            loading: false
        };
        this.onGo = this.onGo.bind(this);
    }

    renderOptions = optionArr => optionArr.map((e, i) => <Picker.Item key={i} label={e.title} value={e.url} />);

    onGo() {
        const { selectedMovie, selectedPlace } = this.state;
        const { navigate } = this.props.navigation;
        this.setState({ loading: true }, async () => {
            if (selectedMovie) {
                console.log(selectedMovie);
                let placeOptions = await getPlacesForMovie(selectedMovie);
                console.log(placeOptions);
                placeOptions = placeOptions.schedule.map((e, i) => ({ ...e, key: '' + i }));
                navigate('PlaceListScreen', { placeOptions });
            } else if (selectedPlace) {
                const movieOptions = await getMoviesForPlace(selectedPlace);
                movieOptions = movieOptions.map((e, i) => ({ ...e, key: i }));
                navigate('MovieListScreen', { movieOptions });
            } else {
                console.log('error!');
            }
        });
    }

    renderContent() {
        const { movieOptions, placeOptions } = this.props.navigation.getParam('options', []);

        return (
            <View>
                <Text style={styles.label}>Escolher filme</Text>

                <Picker
                    selectedValue={this.state.selectedMovie}
                    style={{ height: 60, width: 200 }}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({ selectedPlace: '', selectedMovie: itemValue })
                    }
                >
                    {this.renderOptions(movieOptions)}
                </Picker>

                <Text style={styles.center}>Ou</Text>

                <Text style={styles.label}>Escolher cinema</Text>

                <Picker
                    selectedValue={this.state.selectedPlace}
                    style={{ height: 60, width: 200 }}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({ selectedMovie: '', selectedPlace: itemValue })
                    }
                >
                    {this.renderOptions(placeOptions)}
                </Picker>
                <Button
                    onPress={this.onGo}
                    title="Buscar"
                    color="#e91e63"
                    disabled={
                        this.state.loading || (this.state.selectedMovie === '' && this.state.selectedPlace === '')
                    }
                />
            </View>
        );
    }

    renderLogo() {
        return <Logo />;
    }

    render() {
        return (
            <ScreenContainer>
                <StatusBar barStyle="light-content" backgroundColor="#1B2327" />
                {this.renderLogo()}
                {this.renderContent()}
            </ScreenContainer>
        );
    }
}

const styles = StyleSheet.create({
    label: {
        fontSize: 20,
        textAlign: 'left',
        margin: 10,
        color: '#fff'
    },
    center: {
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10
    }
});

export default SearchScreen;
