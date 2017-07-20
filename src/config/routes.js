import RootContainer from '../pages/root_container';
import MainPage from '../pages/main';
import Page1 from '../pages/page1';
import Page1a from '../pages/page1a';
import Page1b from '../pages/page1b';
import Page2 from '../pages/page2';
import Page2a from '../pages/page2a';
import Page2b from '../pages/page2b';

const AppRoutes = {
	path: '/',
	component: RootContainer,
	childRoutes: [
		{
			path: 'home',
			component: MainPage
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
