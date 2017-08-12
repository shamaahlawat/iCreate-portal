export const initialStates = {

	page_details: {
		page_title: "PoleTalks",
		current_page: null,
		page_load_error: false,
		loaders: {
			page_loading: false,
			item_loading: false,
			sub_item_loading: false
		},
		device_details: {
			lang: 'en',
			device_data: {},
		},
	},

	user_details:{
		signup_details:{
			email:"",
			first_name:"",
			last_name: "",
			password:"",
			password_confirmation:"",
			role:"",
			company_details:{
				name:"",
				incorporation_type:"",
				location_attributes:{
					name:"",
					latitude:0,
					longitude:0
				}
				
			}
		},
		signin_details:{
			email:"",
			password:""
		}
	},

	count_details: {
		current_count: 0
	}
};
