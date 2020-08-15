import { applyMiddleware, compose, createStore, Store as ReduxStore } from 'redux';
import { createLogger } from 'redux-logger';

import reducers, { initialState } from './rootReducer';

const dev: boolean = process.env.NODE_ENV !== 'production';

export type Store = ReduxStore<typeof initialState>;

const middlewares = dev ? [createLogger()] : [];
const store = createStore(reducers, initialState, compose(applyMiddleware(...middlewares)));

export default store;
