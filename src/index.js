import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import MainNavigator from './config/routes';

EStyleSheet.build({
    $black: '#1B2327',
    $white: '#eceff1',
    $pink: '#c51162',
    $pink2: '#f50057',
    $pink3: '#e91e63'
});

export default () => <MainNavigator screenProps={this.props} />;
