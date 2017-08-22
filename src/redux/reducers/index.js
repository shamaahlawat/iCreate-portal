import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import page_details from './page_reducer';
import user_details from './user_reducer';
import search_details from './search_reducer';


const rootReducer = combineReducers({
	page_details,
	user_details,
	search_details,
	routing: routerReducer
});

export default rootReducer;
