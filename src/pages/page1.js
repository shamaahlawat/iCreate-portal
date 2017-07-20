import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import { ButtonToolbar, Button } from 'react-bootstrap';

import NavLink from './components/_navlinks.js';
import './css/page1.less';
import Page1a from './page1a';

class Page1 extends Component {
	render() {
		return (
			<Flexbox flexDirection="column" minWidth="100vw" alignItems="center" className="Page1 simple from-right transition-item mui-col-xs-12">
				<ButtonToolbar style={{marginTop: 20}}>
					<Button><NavLink to="/page1/a">Page 1 A</NavLink></Button>
					<Button><NavLink to="/page1/b">Page 1 B</NavLink></Button>
					<Button><NavLink to="/page2/a">Page 2 A</NavLink></Button>
					<Button><NavLink to="/page2/b">Page 2 B</NavLink></Button>
				</ButtonToolbar>
				<h2> This is page 1 </h2>
				<span> The children component wil be rendered below </span>
				<Flexbox flexDirection="column" className="Content mui-col-xs-12 noPadding">
					{this.props.children || <Page1a/>}
				</Flexbox>
			</Flexbox>
		)
	}
}

export default Page1;
