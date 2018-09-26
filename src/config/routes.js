import React from 'React';
import { createStackNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
    HomeScreen,
    MovieListScreen,
    TheaterListScreen,
    MovieDetailsScreen,
    TheaterDetailsScreen,
} from '../screens';
import { PINK, BLUE, LIGHT_GRAY } from './colors';
import TransitionConfiguration from './transitions';

const theaterNavigator = createStackNavigator(
    {
        TheaterListScreen: {
            screen: TheaterListScreen,
        },
        TheaterDetailsScreen: {
            screen: TheaterDetailsScreen,
        },
    },
    {
        transitionConfig: TransitionConfiguration,
    },
);

const movieNavigator = createStackNavigator(
    {
        MovieListScreen: {
            screen: MovieListScreen,
        },
        MovieDetailsScreen: {
            screen: MovieDetailsScreen,
        },
    },
    {
        transitionConfig: TransitionConfiguration,
    },
);

const searchNavigator = createMaterialBottomTabNavigator(
    {
        TheatersNavigator: {
            screen: theaterNavigator,
            navigationOptions: {
                tabBarLabel: 'Cinemas',
                tabBarColor: PINK,
                tabBarIcon: ({ tintColor }) => (
                    <MaterialCommunityIcons name="theater" color={tintColor} size={26} />
                ),
            },
        },
        MoviesNavigator: {
            screen: movieNavigator,
            navigationOptions: {
                tabBarLabel: 'Filmes',
                tabBarColor: BLUE,
                tabBarIcon: ({ tintColor }) => (
                    <MaterialCommunityIcons name="movie" color={tintColor} size={26} />
                ),
            },
        },
    },
    {
        shifting: true,
        initialRouteName: 'MoviesNavigator',
        activeColor: '#f0edf6',
        inactiveColor: LIGHT_GRAY,
        barStyle: { backgroundColor: '#694fad' },
        animationEnabled: false,
        backBehavior: 'none',
    },
);

const homeNavigator = createStackNavigator(
    {
        HomeScreen: {
            screen: HomeScreen,
            navigationOptions: {
                header: null,
            },
        },
        SearchScreen: {
            screen: searchNavigator,
            navigationOptions: {
                headerLeft: null,
                header: null,
            },
        },
    },
    {
        mode: 'card',
        transitionConfig: TransitionConfiguration,
    },
);

export default homeNavigator;
