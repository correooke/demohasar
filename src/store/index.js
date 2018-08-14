import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = store => next => action => {
    console.log(action.type);
    return next(action);
};

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk, logger)));

export default store;