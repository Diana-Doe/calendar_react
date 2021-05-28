import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import {eventsReducer, usersReducer} from './reducers'

const logger = require('redux-logger').createLogger({ collapsed: true });
const middleware = [thunk, logger];

const rootReducer = combineReducers({
    events: eventsReducer,
    users: usersReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
);