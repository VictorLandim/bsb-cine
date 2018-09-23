import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
import { ScreenContainer } from '../components/ScreenContainer';
import { BLUE, WHITE } from '../config/colors';
import { fetchMovieDetails } from '../actions';
import { Loader } from '../components/common/Loader';
import { MovieHeader } from '../components/MovieHeader';
import { ScheduleCard } from '../components/ScheduleCard';

class MovieDetailsScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        headerTintColor: WHITE,
        headerStyle: {
            backgroundColor: BLUE,
        },
        title: navigation.state.params.selectedMovie.title || 'Filme',
    });

    componentWillMount() {
        const { dispatch, navigation } = this.props;
        const { url } = navigation.state.params.selectedMovie;
        dispatch(fetchMovieDetails(url));
    }

    renderMovieDetails() {
        const { movieDetails, isLoadingMovieDetails } = this.props;
        const { schedule, ...movieInfo } = movieDetails;
        console.log(movieInfo);
        if (isLoadingMovieDetails) return <Loader size={20} color={BLUE} />;

        if (Object.keys(movieDetails).length > 0) {
            return (
                <ScrollView style={{ flex: 1 }}>
                    <MovieHeader {...movieInfo} color={BLUE} />
                    {schedule.map((e, i) => (
                        <ScheduleCard schedule={e} />
                    ))}
                </ScrollView>
            );
        }
    }

    render() {
        return <ScreenContainer>{this.renderMovieDetails()}</ScreenContainer>;
    }
}

MovieDetailsScreen.propTypes = {
    dispatch: PropTypes.func,
    navigation: PropTypes.object,
    movieDetails: PropTypes.any,
    isLoadingMovieDetails: PropTypes.bool,
};

const mapStateToProps = ({ isLoadingMovieDetails, movieDetails }) => ({
    isLoadingMovieDetails,
    movieDetails,
});

export default connect(mapStateToProps)(MovieDetailsScreen);
