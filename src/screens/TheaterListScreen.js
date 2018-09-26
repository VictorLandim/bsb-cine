import React from 'react';
import { connect } from 'react-redux';
import { ScreenContainer } from '../components/ScreenContainer';
import { SelectionList } from '../components/SelectionList';
import { Spinner } from '../components/Spinner';
import { PINK, WHITE, BLACK } from '../config/colors';
import { fetchTheaterOptions } from '../actions';

class TheaterListScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        headerTintColor: WHITE,
        headerStyle: {
            backgroundColor: PINK,
        },
        title: 'Escolher cinema',
    });

    componentWillMount() {
        const { options, dispatch } = this.props;

        if (!options || options.length === 0) {
            dispatch(fetchTheaterOptions());
        }
    }

    onItemPress = (selectedTheater) => {
        const { navigation } = this.props;
        navigation.navigate('TheaterDetailsScreen', { selectedTheater });
    };

    render() {
        const { options, isLoading } = this.props;

        return (
            <ScreenContainer backgroundColor={BLACK}>
                {isLoading ? (
                    <Spinner />
                ) : (
                    <SelectionList iconColor={PINK} onItemPress={this.onItemPress} data={options} />
                )}
            </ScreenContainer>
        );
    }
}

const mapStateToProps = ({ theater }) => ({
    options: theater.options,
    isLoading: theater.isLoadingOptions,
});

export default connect(mapStateToProps)(TheaterListScreen);
