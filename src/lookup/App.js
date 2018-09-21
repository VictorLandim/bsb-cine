import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import AppWithNavigationState from './src/navigators/RootNavigator';
import FirebaseInit from './src/config/FirebaseInit';
import reducers from './src/reducers';

class App extends Component {
    componentWillMount() {
        FirebaseInit();
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <AppWithNavigationState />
            </Provider>
        );
    }
}

export default App;
