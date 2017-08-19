import actionTypes from '../action_types';
import { initialStates } from '../initial_states';

export default function page_details(state = initialStates.page_details, action) {
	switch (action.type) {
		case actionTypes.SYST_LANG_SET:
			return {
				...state,
				device_details: {
					...state.device_details,
					lang: action.payload.lang
				}
			};

		case actionTypes.DEVICE_DATA_LOADED:
			return {
				...state,
				device_details: {
					...state.device_details,
					device_data: action.payload.device_data
				}
			};

		case actionTypes.PAGE_CHANGED:
			return {
				...state,
				current_page: action.payload,
				page_load_error: false
			};

		case actionTypes.PAGE_LOAD_ERROR:
			return {
				...state,
				page_load_error: true
			};

		default:
			return state;
	}
};
