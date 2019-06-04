import { applyMiddleware, compose, createStore } from 'redux';

import todoApp from './domains/todo/combinedReducers';
import createMiddleware from './middleware';

const middleware = createMiddleware();
const rootReducer = todoApp;

const composeEnhancers = (
 process.env.NODE_ENV === 'development' &&
 window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose;

const store = createStore(
 rootReducer,
 composeEnhancers(applyMiddleware(...middleware))
);

export default store;
