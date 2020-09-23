import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { todoReducer } from './reducers/todoReducer';
import { userReducer } from './reducers/userReducer';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  todoReducer,
  userReducer
});

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);