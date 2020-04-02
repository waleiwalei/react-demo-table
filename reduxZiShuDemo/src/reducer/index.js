import {createStore, combineReducers, applyMiddleware} from 'redux';
// import {thunk} from 'redux-thunk';
import todos from './todos';
import visibilityFilter from './visibilityFilter';


const rootReducer = combineReducers({
    todos,
    visibilityFilter
})

export default createStore(
    rootReducer,
    // applyMiddleware(thunk)
)