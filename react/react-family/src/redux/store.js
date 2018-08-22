import {createStore, applyMiddleware} from 'redux';
import combineReducers from './reducers.js';
import thunkMiddleware from 'redux-thunk';

export default createStore(
	combineReducers, 
	applyMiddleware(thunkMiddleware)
);

