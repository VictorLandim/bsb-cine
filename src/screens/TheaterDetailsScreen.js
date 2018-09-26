import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    ScrollView, FlatList, View, Text,
} from 'react-native';
import { ScreenContainer } from '../components/ScreenContainer';
import { WHITE, PINK } from '../config/colors';
import { fetchTheaterDetails } from '../actions';
import { Spinner } from '../components/Spinner';
import { HeaderRightDate } from '../components/Header';

class TheaterDetailsScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        headerTintColor: WHITE,
        headerStyle: {
            backgroundColor: PINK,
        },
        title: 'Detalhes do cinema',
        headerRight: <HeaderRightDate />,
    });

    componentWillMount() {
        const { dispatch, navigation } = this.props;
        const { key, url } = navigation.state.params.selectedTheater;
        dispatch(fetchTheaterDetails(key, url));
    }

    renderDetails() {
        const { isLoadingdetails, details } = this.props;
        const detailsExist = Object.keys(details).length > 0;

        if (isLoadingdetails || !detailsExist) return <Spinner size={50} color={PINK} />;

        return <Text>{JSON.stringify(details || {})}</Text>;

        // if (detailsExist) {
        return (
            <View style={{ flex: 1 }}>
                {/* <FlatList
                        keyExtractor={item => `${JSON.stringify(item)}`}
                        data={schedule}
                        ListHeaderComponent={() => (
                            <MovieHeader key={movieInfo.genre} {...movieInfo} color={BLUE} />
                        )}
                        renderItem={({ item }) => (
                            <ScheduleCard animation="slide" key={item.name} schedule={item} />
                        )}
                    /> */}
                {JSON.stringify(details || {})}
            </View>
        );
        // }

        return null;
    }

    render() {
        return <ScreenContainer>{this.renderDetails()}</ScreenContainer>;
    }
}

TheaterDetailsScreen.propTypes = {
    dispatch: PropTypes.func,
    navigation: PropTypes.object,
    details: PropTypes.any,
    isLoadingdetails: PropTypes.bool,
};

const mapStateToProps = ({ theater }, { navigation }) => ({
    isLoadingDetails: theater.isLoadingDetails,
    details: theater.details[navigation.state.params.selectedTheater.key] || {},
});

export default connect(mapStateToProps)(TheaterDetailsScreen);
