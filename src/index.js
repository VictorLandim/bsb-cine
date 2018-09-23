import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';
import MainNavigator from './config/routes';
import store from './config/store';

EStyleSheet.build({
    $black: '#1B2327',
    $white: '#eceff1',
    $pink: '#c51162',
    $pink2: '#f50057',
    $pink3: '#e91e63',
});

const App = () => (
    <Provider store={store}>
        <MainNavigator screenProps={this.props} />
    </Provider>
);

export default App;
