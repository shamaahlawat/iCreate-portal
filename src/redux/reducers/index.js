import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import page_details from './page_reducer';
import count_details from './count_reducer';

const rootReducer = combineReducers({
	page_details,
	count_details,
	routing: routerReducer
});

export default rootReducer;
