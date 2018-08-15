import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import reducers from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = store => next => action => {
    console.log(action.type);
    return next(action);
};

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk, promiseMiddleware, logger)));

export default store;