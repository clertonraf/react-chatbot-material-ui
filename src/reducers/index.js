import {combineReducers } from 'redux';
import watsonReducer from './watsonReducer';
import dialogReducer from './dialogReducer';

const allReducers = combineReducers(
    {
        watsonReducer: watsonReducer,
        dialogReducer: dialogReducer 
    }
);

export default allReducers;