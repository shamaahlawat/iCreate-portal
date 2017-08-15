import RootContainer from '../pages/root_container';

import MainHome from '../pages/main_home';
import EntreprenuerHome from '../pages/entreprenuer_home';
import EntreprenuerProfile from '../pages/entreprenuer_profile'

import SearchContainer from '../pages/search_container';
import SignUp from '../pages/signup';
import SignIn from '../pages/signin';
import SignUpEntreprenuer1 from '../pages/signup_entreprenuer_1';
import SignUpEntreprenuer2 from '../pages/signup_entreprenuer_2';
import ForgotPassword from '../pages/forgot_password';
import SignUpInvestor1 from '../pages/signup_investor_1';
import SignUpInvestor2 from '../pages/signup_investor_2';
import SignUpInvestor3 from '../pages/signup_investor_3';
import SignUpJobSeeker1 from '../pages/signup_jobseeker_1';
import SignUpJobSeeker2 from '../pages/signup_jobseeker_2';
import SignUpJobSeeker3 from '../pages/signup_jobseeker_3';
import SignUpB2B1 from '../pages/signup_b2b_1';
import SignUpB2B2 from '../pages/signup_b2b_2';
import SignUpAccelerator1 from '../pages/signup_accelerator_1';
import SignUpAccelerator2 from '../pages/signup_accelerator_2';
import SignUpAccelerator3 from '../pages/signup_accelerator_3';
import SignUpIndividual1 from '../pages/signup_individual_1';
import SignUpIndividual2 from '../pages/signup_individual_2';
import SignUpIndividual3 from '../pages/signup_individual_3';


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
			path: 'signup_investor1',
			component: SignUpInvestor1
		},
		{
			path: 'signup_investor2',
			component: SignUpInvestor2
		},
		{
			path: 'signup_investor3',
			component: SignUpInvestor3
		},
		{
			path: 'signup_jobseeker1',
			component: SignUpJobSeeker1
		},
		{
			path: 'signup_jobseeker2',
			component: SignUpJobSeeker2
		},
		{
			path: 'signup_jobseeker3',
			component: SignUpJobSeeker3
		},
		{
			path: 'signup_b2b1',
			component: SignUpB2B1
		},
		{
			path: 'signup_b2b2',
			component: SignUpB2B2
		},
		{
			path: 'signup_accelerator1',
			component: SignUpAccelerator1
		},
		{
			path: 'signup_accelerator2',
			component: SignUpAccelerator2
		},
		{
			path: 'signup_accelerator3',
			component: SignUpAccelerator3
		},
		{
			path: 'signup_individual1',
			component: SignUpIndividual1
		},
		{
			path: 'signup_individual2',
			component: SignUpIndividual2
		},
		{
			path: 'signup_individual3',
			component: SignUpIndividual3
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
