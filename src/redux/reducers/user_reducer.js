import actionTypes from '../action_types';
import { initialStates } from '../initial_states';

var dotProp = require('dot-prop-immutable');

export default function user_details(state = initialStates.user_details, action) {
	switch (action.type) {
		case actionTypes.USER_DATA_CHANGED:
			return (state = dotProp.set(state, action.path, action.payload));

		case actionTypes.SIGNUP_SUCCESS:
			localStorage.setItem('user', JSON.stringify(action.response.user));
			return{
				...state,
				user: action.response.user
			};
				
		case actionTypes.SIGNUP_ERROR:
			 return ;
		case actionTypes.SIGNIN_SUCCESS:
			 console.log('signin reducer called');
		     console.log(action.response);
			 localStorage.setItem('signin_details',JSON.stringify(action.response));
			 return;		
 		default:
			return state;
	}
};
