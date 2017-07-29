import RootContainer from '../pages/root_container';
import MainPage from '../pages/main';
import Page1 from '../pages/page1';
import Page1a from '../pages/page1a';
import Page1b from '../pages/page1b';
import Page2 from '../pages/page2';
import Page2a from '../pages/page2a';
import Page2b from '../pages/page2b';
import SearchContainer from '../pages/search_container';
import MainHome from '../pages/main_home';
import EntreprenuerHome from '../pages/entreprenuer_home';

import SignUp from '../pages/signup';
import SignUpEntreprenuer1 from '../pages/signup_entreprenuer_1';
import SignUpEntreprenuer2 from '../pages/signup_entreprenuer_2';
const AppRoutes = {
	path: '/',
	component: RootContainer,
	childRoutes: [
		{
			path: 'mainpage',
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
			path: 'signup1',
			component: SignUpEntreprenuer1	
		},
		{
			path: 'signup2',
			component: SignUpEntreprenuer2
		},
		{
			path: 'page1',
			component: Page1,
			childRoutes: [
				{
					path: 'a',
					component: Page1a
				},
				{
					path: 'b',
					component: Page1b
				}
			]
		},
		{
			path: 'page2',
			component: Page2,
			childRoutes: [
				{
					path: 'a',
					component: Page2a
				},
				{
					path: 'b',
					component: Page2b
				}
			]
		}
	]
};

module.exports = AppRoutes;
