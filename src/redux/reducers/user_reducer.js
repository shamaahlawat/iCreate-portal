import actionTypes from '../action_types';
import { initialStates } from '../initial_states';

var dotProp = require('dot-prop-immutable');

export default function user_details(state = initialStates.user_details, action) {
	switch (action.type) {
		case actionTypes.USER_DATA_CHANGED:
			return (state = dotProp.set(state, action.path, action.payload));
		
 		default:
			return state;
	}
};
