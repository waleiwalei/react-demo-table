export const GET_USER_INFO_REQUEST = 'userInfo/GET_USER_INFO_REQUEST';
export const GET_USER_INFO_SUCCESS = 'userInfo/GET_USER_INFO_SUCCESS';
export const GET_USER_INFO_FAIL = 'userInfo/GET_USER_INFO_FAIL';

export function getUserInfoRequest() {
	return {
		type: GET_USER_INFO_REQUEST
	}
}

/*这里需要注意的是传过去的{type: xxx,userInfo: xxx}
就是reducer中接受到的action对象，可以传递想要用的参数*/
export function getUserInfoSuccess(json) {
	return {
		type: GET_USER_INFO_SUCCESS,
		userInfo: json
	}
}

export function getUserInfoFail() {
	return {
		type: GET_USER_INFO_FAIL
	}
}


//action创建函数返回函数
export function getUserInfo() {
    return function (dispatch) {
        dispatch(getUserInfoRequest());

        return fetch('http://localhost:8099/api/user.json')
            .then((response => {
                return response.json()
            }))
            .then((json) => {
        		console.log('收到的json', json);
                dispatch(getUserInfoSuccess(json))
            }).catch(() => {
                dispatch(getUserInfoFail());
            })
    }
}