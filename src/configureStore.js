import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const loggerMiddleware = createLogger();

const configureStore = preloadedState => {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(
      applyMiddleware(thunkMiddleware, loggerMiddleware)
    )
  );
};

export default configureStore;
