import logger from 'redux-logger';
import {createStore, applyMiddleware} from 'redux'; 
import allReducers from './reducers';
import thunk from 'redux-thunk';

export default createStore(allReducers,applyMiddleware(logger,thunk));