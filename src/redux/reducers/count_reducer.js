import actionTypes from '../action_types';
import { initialStates } from '../initial_states';

export default function explore_details(state = initialStates.count_details, action) {
	switch (action.type) {
		case actionTypes.INC_COUNT:
			return {
				...state,
				current_count: state.current_count + 1
			};

		case actionTypes.DEC_COUNT:
			return {
				...state,
				current_count: state.current_count - 1
			};

		default:
			return state;
	}
};
