import axios from 'axios';

import * as CONSTANTS from './constants';

const method_types = {
	get: "GET",
	post: "POST",
	put: "PUT",
	delete: "DELETE"
}

function getHeaders() {
	let user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
	let headers = {
		'Content-Type': 'application/json'
	};
	if (user && (user.uid || user._id) && user.hash) {
		headers.uid = user.uid || user._id;
		headers.hash = user.hash;
	}
	return headers;
};

function fetchDataAndProceed(url, method, data, callback) {
	axios({
		method: method,
		params: method === 'GET' ? data : {},
		data: method !== 'GET' ? data : {},
		url: url,
		baseURL: CONSTANTS.base_url,
		headers: getHeaders(),
		validateStatus: function (status) {
			return ((status >= 200 && status < 300) || status === 412 || status === 401 || status === 403)
		},
	}).then(function (response) {
		if (response.status === 401 || response.status === 403) {
			localStorage.setItem('user', null);
			response.data.status = response.status;
			callback(true, response.data);
		}
		else {
			callback(false, response.data);
		}
	}).catch(function (error) {
		callback(true);
	});
};

//user apis
exports.userSignIn = (data, callback) => {
	fetchDataAndProceed('/users/sign_in.json', method_types.post, data, callback)
}

exports.userSignUp = (data, callback) => {
	console.log('userSignUp function called');
	fetchDataAndProceed('/users.json', method_types.post, data, callback)
}