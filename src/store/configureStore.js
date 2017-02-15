import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas/';
import events from '../store/reducers/events';


export default function configureStore() {
  const reducer = combineReducers({
    events,
  });
  const sagaMiddleware = createSagaMiddleware();
  const initialState = {};

  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators or immutablejs support
      }) : compose;
  /* eslint-enable */

  const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware),
  );
  const store = createStore(reducer, initialState, enhancer);

  sagaMiddleware.run(sagas);

  console.log(process.env.NODE_ENV);
  return store;
}