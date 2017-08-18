import actionTypes from '../action_types';
import * as API from '../../config/api';
import {browserHistory} from 'react-router';


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
		console.log('signUpUser action called');
		API.userSignUp(data,function (err, res){
			if (!err){
				console.log('no error');
				console.log(res);
				browserHistory.push('/signin');
				dispatch({
					type: actionTypes.SIGNUP_SUCCESS,
					response: res
				});
			}
			else{
				console.log(' error found');
				dispatch({
					type: actionTypes.SIGNUP_ERROR,
					error:err
				});
			}
		});
	}
};

export function signInUser(data) {
	return function (dispatch) {
		console.log('signInUser action called');
		API.userSignIn(data, function (err, res) {
			if (!err) {
				console.log('no error');
				browserHistory.push('/entreprenuer_home');
				dispatch({
					type: actionTypes.SIGNIN_SUCCESS,
					response:res
				})
			} else {
				console.log(' error found');
				console.log(err);
				dispatch({
					type: actionTypes.SIGNIN_ERROR,
					error: err
				})
			}
		})
	}
};