import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import PageTransition from 'react-router-page-transition';

import AppHeader from './app_header';
import FooterContainer from './footer_section';
import MainPage from './main';

injectTapEventPlugin();

export default class RootContainer extends Component {
	render() {
		return (
			<Flexbox flexDirection="column" minHeight="100vh" className="RootContainer">
				<AppHeader /> 
				<Flexbox className="MainContentContainer noPadding" flex="1">
					<PageTransition>{this.props.children || <MainPage />}</PageTransition>
				</Flexbox>
				<FooterContainer/>
			</Flexbox>
		);
	}
}
