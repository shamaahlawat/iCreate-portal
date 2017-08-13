import RootContainer from '../pages/root_container';
import SearchContainer from '../pages/search_container';
import MainHome from '../pages/main_home';
import EntreprenuerHome from '../pages/entreprenuer_home';
import EntreprenuerProfile from '../pages/entreprenuer_profile'

import SignUp from '../pages/signup';
import SignIn from '../pages/signin';
import SignUpEntreprenuer1 from '../pages/signup_entreprenuer_1';
import SignUpEntreprenuer2 from '../pages/signup_entreprenuer_2';
import ForgotPassword from '../pages/forgot_password';
import SignUpInvester1 from '../pages/signup_invester_1';
import SignUpInvester2 from '../pages/signup_invester_2';
import SignUpInvester3 from '../pages/signup_invester_3';

const AppRoutes = {
	path: '/',
	component: RootContainer,
	childRoutes: [
		{
			path: 'home',
			component: MainHome
		},
		{
			path: 'search',
			component: SearchContainer
		},
		{
			path: 'entreprenuer_home',
			component: EntreprenuerHome
		},
		{

			path: 'signup',
			component: SignUp
		},
		{
			path: 'entreprenuer_profile',
			component: EntreprenuerProfile
		},
		{
			path: 'signup1',
			component: SignUpEntreprenuer1	
		},
		{
			path: 'signup2',
			component: SignUpEntreprenuer2
		},
		{
			path: 'signup_invester1',
			component: SignUpInvester1
		},
		{
			path: 'signup_invester2',
			component: SignUpInvester2
		},
		{
			path: 'signup_invester3',
			component: SignUpInvester3
		},
		{
			path: 'signin',
			component: SignIn
		},
		{
			path: 'forgotpassword',
			component: ForgotPassword
		}
	]
};

module.exports = AppRoutes;
