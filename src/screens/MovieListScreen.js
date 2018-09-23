import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { ScreenContainer } from '../components/ScreenContainer';
import { SelectionList } from '../components/SelectionList';
import { BLUE, WHITE, BLACK } from '../config/colors';

class MovieListScreen extends React.Component {
    static navigationOptions = {
        title: 'Escolher filme',
        headerTintColor: WHITE,
        headerStyle: {
            backgroundColor: BLUE,
        },
    };

    onItemPress = (selectedMovie) => {
        const { navigation } = this.props;
        navigation.navigate('MovieDetailsScreen', { selectedMovie });
    };

    render() {
        const { movieOptions } = this.props;
        return (
            <ScreenContainer backgroundColor={BLACK}>
                <SelectionList
                    iconColor={BLUE}
                    onItemPress={item => this.onItemPress(item)}
                    data={movieOptions}
                />
            </ScreenContainer>
        );
    }
}

const mapStateToProps = ({ movieOptions }) => ({ movieOptions });

export default connect(mapStateToProps)(MovieListScreen);
