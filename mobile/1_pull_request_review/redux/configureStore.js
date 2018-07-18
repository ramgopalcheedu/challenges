import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import { reducer as form } from 'redux-form';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import user from './modules/user';
import dictionary from './modules/dictionary';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  user,
  dictionary,
});

const configureStore = initialState => {
  const composeEnhancers = typeof window === 'object'
    /* eslint-disable no-underscore-dangle */
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

  const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware),
  );

  const store = createStore(
    reducer,
    enhancer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk)),
  );
  sagaMiddleware.run(sagas);
  return store;
};

export default configureStore;
