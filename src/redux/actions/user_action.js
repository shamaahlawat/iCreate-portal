import actionTypes from '../action_types';
import * as API from '../../config/api';
import { browserHistory } from 'react-router';


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
		API.userSignUp(data, function (err, res) {
			if (!err) {
				browserHistory.push('/signin');
				dispatch({
					type: actionTypes.SIGNUP_SUCCESS,
					response: res
				});
			}
			else {
				dispatch({
					type: actionTypes.SIGNUP_ERROR,
					error: err
				});
			}
		});
	}
};

export function signInUser(data) {
	return function (dispatch) {
		API.userSignIn(data, function (err, res) {
			if (!err) {
				browserHistory.push('/entreprenuer_home');
				dispatch({
					type: actionTypes.SIGNIN_SUCCESS,
					response: res
				})
			} else {
				dispatch({
					type: actionTypes.SIGNIN_ERROR,
					error: err
				})
			}
		})
	}
};