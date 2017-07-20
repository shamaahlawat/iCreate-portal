import actionTypes from '../action_types';
import * as API from '../../config/api';
import * as CONSTANTS from '../../config/constants';

export function incCount(){
	return function (dispatch) {
		dispatch({
			type: actionTypes.INC_COUNT
		});
	}
};

export function decCount(){
	return function (dispatch) {
		dispatch({
			type: actionTypes.DEC_COUNT
		});
	}
}
