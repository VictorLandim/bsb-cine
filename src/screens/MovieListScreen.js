import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ScreenContainer } from '../components/ScreenContainer';
import { SelectionList } from '../components/SelectionList';
import { BLUE, WHITE, BLACK } from '../config/colors';
import { HeaderRightDate } from '../components/Header';
import { Spinner } from '../components/Spinner';
import { fetchMovieOptions } from '../actions';

class MovieListScreen extends React.Component {
    static navigationOptions = {
        title: 'Escolher filme',
        headerTintColor: WHITE,
        headerStyle: {
            backgroundColor: BLUE,
        },
        headerRight: <HeaderRightDate />,
    };

    componentWillMount() {
        const { options, dispatch } = this.props;

        if (!options || options.length === 0) {
            dispatch(fetchMovieOptions());
        }
    }

    onItemPress = (selectedMovie) => {
        const { navigation } = this.props;
        navigation.navigate('MovieDetailsScreen', { selectedMovie });
    };

    render() {
        const { options, isLoading } = this.props;
        return (
            <ScreenContainer backgroundColor={BLACK}>
                {isLoading ? (
                    <Spinner />
                ) : (
                    <SelectionList
                        iconColor={BLUE}
                        onItemPress={item => this.onItemPress(item)}
                        data={options}
                    />
                )}
            </ScreenContainer>
        );
    }
}

MovieListScreen.propTypes = {
    options: PropTypes.array,
    isLoading: PropTypes.bool,
    navigation: PropTypes.object,
};

const mapStateToProps = ({ movie }) => ({
    options: movie.options,
    isLoading: movie.isLoadingOptions,
});

export default connect(mapStateToProps)(MovieListScreen);
