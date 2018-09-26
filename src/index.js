import React from 'react';
import { Provider } from 'react-redux';
import MainNavigator from './config/routes';
import store from './config/store';

const App = () => (
    <Provider store={store}>
        <MainNavigator screenProps={this.props} />
    </Provider>
);

export default App;
