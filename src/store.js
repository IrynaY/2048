import { createStore, compose } from 'redux';

import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => (
  createStore(
    reducer,
    composeEnhancers(),
  )
);

const store = configureStore();

export default store;
