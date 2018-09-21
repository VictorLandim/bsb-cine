import React from 'React';
import { createStackNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { PlaceListScreen, MovieListScreen, HomeScreen } from '../screens';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { PINK, BLUE, LIGHT_GRAY } from './colors';

const placesNavigator = createStackNavigator({
    PlaceOptions: {
        screen: PlaceListScreen
    },
    PlaceDetailsScreen: {
        screen: () => null
    }
});

const moviesNavigator = createStackNavigator({
    MovieOptions: {
        screen: MovieListScreen
    },
    MovieDetailsScreen: {
        screen: () => null
    }
});

const searchNavigator = createMaterialBottomTabNavigator(
    {
        PlaceListScreen: {
            screen: placesNavigator,
            navigationOptions: {
                tabBarLabel: 'Cinemas',
                tabBarColor: PINK,
                tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name="theater" color={tintColor} size={26} />
            }
        },
        MovieListScreen: {
            screen: moviesNavigator,
            navigationOptions: {
                tabBarLabel: 'Filmes',
                tabBarColor: BLUE,
                tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name="movie" color={tintColor} size={26} />
            }
        }
    },
    {
        shifting: true,
        initialRouteName: 'PlaceListScreen',
        activeColor: '#f0edf6',
        inactiveColor: LIGHT_GRAY,
        barStyle: { backgroundColor: '#694fad' },
        animationEnabled: false,
        backBehavior: 'none'
    }
);

const homeNavigator = createStackNavigator(
    {
        HomeScreen: {
            screen: HomeScreen,
            navigationOptions: {
                header: null
            }
        },
        SearchScreen: {
            screen: searchNavigator,
            navigationOptions: {
                headerLeft: null,
                header: null
            }
        }
    },
    {
        mode: 'modal'
    }
);

export default homeNavigator;
