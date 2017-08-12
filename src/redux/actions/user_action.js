import actionTypes from '../action_types';
import * as API from '../../config/api';


export function updateUserDetails(path, data) {
	return function (dispatch) {
		dispatch({
			type: actionTypes.USER_DATA_CHANGED,
			payload: data,
			path: path
		})
	}
};


export function signUpUser(data) {
	return function (dispatch) {
		API.userSignUp(data, (err, res) => {
			console.log(err);
			if (!err) {
				console.log('no error in sign up');
				dispatch({
					type: actionTypes.SIGNUP_SUCCESS
				})
			} else {
				dispatch({
					type: actionTypes.SIGNUP_ERROR
				})
			}
		});
	}
};

export function signInUser(data) {
	return function (dispatch) {
		API.userSignIn(data, function (err, res) {
			if (!err) {
				dispatch({
					type: actionTypes.SIGNIN_SUCCESS
				})
			} else {
				dispatch({
					type: actionTypes.SIGNIN_ERROR
				})
			}
		})
	}
};