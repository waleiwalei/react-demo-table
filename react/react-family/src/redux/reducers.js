import counter from './reducers/counter';
import userInfo from './reducers/userInfo';
import {combineReducers} from 'redux';

/*export default function combineReducers(state = {}, action) {
    return {
        counter: counter(state.counter, action),
        userInfo: userInfo(state.userInfo, action)
    }
}*/

//combineReducers -- redux的优化
export default combineReducers({
	counter,
	userInfo
});