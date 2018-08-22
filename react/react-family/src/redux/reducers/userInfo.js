import {GET_USER_INFO_REQUEST, GET_USER_INFO_SUCCESS, GET_USER_INFO_FAIL} from '../actions/userInfo.js';


const initState = {
	isLoading : false,
	userInfo : {},
	errMsg : ''
}

export default function reducer(state = initState, action) {
	console.log('action here', action);
	//switch的是action.type !!!
	switch(action.type) {
		case GET_USER_INFO_REQUEST: {
			return {
				...state,
				isLoading: true,
				userInfo: {},
				errMsg: ''
			}
		}
		case GET_USER_INFO_SUCCESS: {
			return {
				...state,
				isLoading: false,
				userInfo: action.userInfo,
				errMsg: ''
			}
		}
		case GET_USER_INFO_FAIL: {
			return {
				...state,
				isLoading: false,
				userInfo: {},
				errMsg: '请求错误'
			}
		}
		default:
			return state;
	}
}