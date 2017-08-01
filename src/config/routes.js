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
