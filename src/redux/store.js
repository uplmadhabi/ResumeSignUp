import { createStore, combineReducers,applyMiddleware} from 'redux';
import LoginReducer from './reducers/LoginReducer';
import logger from 'redux-logger'

const rootReducer = combineReducers({
  login: LoginReducer,
  
});

export const store = createStore(rootReducer,applyMiddleware(logger));