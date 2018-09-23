import React from 'react';
import { connect } from 'react-redux';
import { ScreenContainer } from '../components/ScreenContainer';
import { SelectionList } from '../components/SelectionList';
import { PINK, WHITE, BLACK } from '../config/colors';

class TheaterListScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        headerTintColor: WHITE,
        headerStyle: {
            backgroundColor: PINK,
        },
        title: 'Escolher cinema',
    });

    onItemPress = () => {};

    render() {
        const { theaterOptions } = this.props;
        return (
            <ScreenContainer backgroundColor={BLACK}>
                <SelectionList
                    iconColor={PINK}
                    onItemPress={this.onItemPress}
                    data={theaterOptions}
                />
            </ScreenContainer>
        );
    }
}

const mapStateToProps = ({ theaterOptions }) => ({ theaterOptions });

export default connect(mapStateToProps)(TheaterListScreen);
