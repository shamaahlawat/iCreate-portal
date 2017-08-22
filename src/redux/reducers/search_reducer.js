import actionTypes from '../action_types';
import { initialStates } from '../initial_states';


export default function search_details(state = initialStates.search_details, action) {
	switch (action.type) {
		case actionTypes.LOAD_INDUSTRIES:
			return {
				...state,
				industries:action.payload
			};
		case actionTypes.LOAD_INVESTOR_TYPE:
		    return {
				...state,
				investor_types:action.payload
			}

		

		default:
			return state;
	}
};
