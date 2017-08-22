import actionTypes from '../action_types';
import * as API from '../../config/api';


export function fetchIndustriesDetails() {
	return function (dispatch) {
		API.getIndustries("", function (err, res) {
			if (!err) {
				dispatch({
					type: actionTypes.LOAD_INDUSTRIES,
					payload: res
				});
			}
			else {
				dispatch({
					type: actionTypes.LOAD_INDUSTRIES_ERROR,
					error: err
				});
			}
		});
	}
};

export function fetchInvestorTypes() {
	return function (dispatch) {
		API.getInvestorTypes("", function (err, res) {
			if (!err) {
				dispatch({
					type: actionTypes.LOAD_INVESTOR_TYPE,
					payload: res
				});
			}
			else {
				dispatch({
					type: actionTypes.LOAD_INVESTOR_TYPE_ERROR,
					error: err
				});
			}
		});
	}
};