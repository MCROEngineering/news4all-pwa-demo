import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { history } from 'utils/history';

import reducer from './reducer';

const logger = createLogger({
  collapsed: true,
  logger: console,
});

// create the store

const routersMiddleware = routerMiddleware(history);

const middleware = [
  thunk,
  routersMiddleware,
];

const middlewareToBeUsed = process.env.NODE_ENV === 'development' ? [...middleware, logger] : middleware;

const enhancers = [
  applyMiddleware(...middlewareToBeUsed),
];

/* Enable redux dev tools only in development.
 * We suggest using the standalone React Native Debugger extension:
 * https://github.com/jhen0409/react-native-debugger
 */
/* eslint-disable */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable no-undef */

const enhancer = composeEnhancers(...enhancers);

// create the store
const store = createStore(
  reducer,
  {},
  enhancer
);

if (module.hot) {
  module.hot.accept('./reducer', () => {
    store.replaceReducer(reducer);
  });
}

persistStore(store);

export default store;

