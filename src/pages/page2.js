import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PageTransition from 'react-router-page-transition';
import { ButtonToolbar, Button } from 'react-bootstrap';

import * as pageActions from '../redux/actions/page_actions';
import * as countActions from '../redux/actions/count_actions';

import NavLink from './components/_navlinks.js';
import './css/page2.less';
import Page2a from './page2a';

class Page2 extends Component {
	render() {
		return (
			<Flexbox flexDirection="column" minWidth="100vw" alignItems="center" className="Page2 simple from-right transition-item mui-col-xs-12">
				<ButtonToolbar style={{marginTop: 20}}>
					<Button><NavLink to="/page1/a">Page 1 A</NavLink></Button>
					<Button><NavLink to="/page1/b">Page 1 B</NavLink></Button>
					<Button><NavLink to="/page2/a">Page 2 A</NavLink></Button>
					<Button><NavLink to="/page2/b">Page 2 B</NavLink></Button>
				</ButtonToolbar>
				<h2> This is page 2 </h2>
				<p> This is also a redux connected component.</p>
				<p>The current counter value in redux state is</p>
				<h2>{this.props.count_details.current_count}</h2>
				<span> The children component wil be rendered below</span>
				<Flexbox flexDirection="column" className="Content mui-col-xs-12 noPadding">
					<PageTransition>{this.props.children || <Page2a/>}</PageTransition>
				</Flexbox>
			</Flexbox>
		)
	}
}

function mapStateToProps(state) {
	return {
		page_details: state.page_details,
		count_details: state.count_details
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(Object.assign({}, pageActions, countActions), dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Page2);
