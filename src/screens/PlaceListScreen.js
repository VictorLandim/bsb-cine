import React from 'react';
import { ScreenContainer } from '../components/ScreenContainer';
import { SelectionList } from '../components/SelectionList';
import { PINK, WHITE } from '../config/colors';

class PlaceListScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        headerTintColor: WHITE,
        headerStyle: {
            backgroundColor: PINK
        },
        title: 'Escolher cinema'
    });

    constructor(props) {
        super(props);

        console.log(props);
    }

    onItemPress = () => {};
    render() {
        const { placeOptions } = this.props.navigation.getParam('options', []);
        return (
            <ScreenContainer>
                <SelectionList iconColor={PINK} onItemPress={this.onItemPress} data={placeOptions} />
            </ScreenContainer>
        );
    }
}

export default PlaceListScreen;
