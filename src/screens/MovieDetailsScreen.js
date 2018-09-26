import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ScrollView, FlatList, View } from 'react-native';
import { ScreenContainer } from '../components/ScreenContainer';
import { BLUE, WHITE } from '../config/colors';
import { fetchMovieDetails } from '../actions';
import { Spinner } from '../components/Spinner';
import { MovieHeader } from '../components/MovieHeader';
import { ScheduleCard } from '../components/ScheduleCard';
import { HeaderRightDate } from '../components/Header';

class MovieDetailsScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        headerTintColor: WHITE,
        headerStyle: {
            backgroundColor: BLUE,
        },
        title: 'Detalhes do filme',
        headerRight: <HeaderRightDate />,
    });

    componentWillMount() {
        const { dispatch, navigation } = this.props;
        const { key, url } = navigation.state.params.selectedMovie;
        dispatch(fetchMovieDetails(key, url));
    }

    renderMovieDetails() {
        const { isLoadingdetails, details } = this.props;
        const detailsExist = Object.keys(details).length > 0;

        if (isLoadingdetails || !detailsExist) return <Spinner size={50} color={BLUE} />;

        if (detailsExist) {
            const { schedule, ...movieInfo } = details;
            return (
                <View style={{ flex: 1 }}>
                    <FlatList
                        keyExtractor={item => `${JSON.stringify(item)}`}
                        data={schedule}
                        ListHeaderComponent={() => (
                            <MovieHeader key={movieInfo.genre} {...movieInfo} color={BLUE} />
                        )}
                        renderItem={({ item }) => (
                            <ScheduleCard animation="scale" key={item.name} schedule={item} />
                        )}
                    />
                </View>
            );
        }

        return null;
    }

    render() {
        return <ScreenContainer>{this.renderMovieDetails()}</ScreenContainer>;
    }
}

MovieDetailsScreen.propTypes = {
    dispatch: PropTypes.func,
    navigation: PropTypes.object,
    details: PropTypes.any,
    isLoadingdetails: PropTypes.bool,
};

const mapStateToProps = ({ movie }, { navigation }) => ({
    isLoadingDetails: movie.isLoadingDetails,
    details: movie.details[navigation.state.params.selectedMovie.key] || {},
});

export default connect(mapStateToProps)(MovieDetailsScreen);
