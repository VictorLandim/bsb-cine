import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers';
import routeSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
if (process.env.NODE_ENV === 'development') {
    middleware.push(logger);
}

const store = createStore(reducers, applyMiddleware(...middleware));
sagaMiddleware.run(routeSaga);

export default store;
