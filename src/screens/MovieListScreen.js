import React from 'react';
import { Alert } from 'react-native';
import { ScreenContainer } from '../components/ScreenContainer';
import { SelectionList } from '../components/SelectionList';
import { BLUE, WHITE } from '../config/colors';

class MovieListScreen extends React.Component {
    static navigationOptions = {
        headerTintColor: WHITE,
        headerStyle: {
            backgroundColor: BLUE
        },
        title: 'Escolher filme'
    };

    constructor(props) {
        super(props);
    }

    onItemPress = () => Alert.alert('Clicked');
    render() {
        const { movieOptions } = this.props.navigation.getParam('options', []);
        return (
            <ScreenContainer>
                <SelectionList iconColor={BLUE} onItemPress={this.onItemPress} data={movieOptions} />
            </ScreenContainer>
        );
    }
}

export default MovieListScreen;
