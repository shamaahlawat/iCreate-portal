import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ButtonToolbar, Button } from 'react-bootstrap';
import NavLink from './components/_navlinks.js';

import * as pageActions from '../redux/actions/page_actions';
import * as countActions from '../redux/actions/count_actions';

import logo from './css/examples/logo.svg';
import './css/examples/App.less';
import './css/examples/App.scss';
import './css/examples/App.styl';
import styles from './css/examples/Modules.css';

class MainPage extends Component {

	incrementCounter = () => {
		this.props.actions.incCount();
	}

	decrementCounter = () => {
		this.props.actions.decCount();
	}

	render() {
		return (
			<Flexbox flexDirection="column" minWidth="100vw" className="App simple from-right transition-item">
				<Flexbox flexDirection="column" className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
				</Flexbox>

				<Flexbox flexDirection="column" alignItems="center" justifyContent="center" style={{marginTop: 20}}>
					<ButtonToolbar>
						<Button><NavLink to="/page1/a">Page 1 A</NavLink></Button>
						<Button><NavLink to="/page1/b">Page 1 B</NavLink></Button>
						<Button><NavLink to="/page2/a">Page 2 A</NavLink></Button>
						<Button><NavLink to="/page2/b">Page 2 B</NavLink></Button>
					</ButtonToolbar>
				</Flexbox>

				<Flexbox flexDirection="column" alignItems="center" justifyContent="center">
					<h3>Counter</h3>
					<ButtonToolbar>
						<Button onClick={this.decrementCounter}>-</Button>
						<Button>{this.props.count_details.current_count}</Button>
						<Button onClick={this.incrementCounter}>+</Button>
					</ButtonToolbar>
				</Flexbox>

				<div className={styles.description}>
					<div className={styles.command}>
						<code>create-react-app my-app --scripts-version custom-react-scripts</code>
					</div>

					<p> If you want to enable/disable certain features just modify the <b>.env</b> file in the root directory of the project.</p>

					<b> Styling </b>
					<ul className="configs style-configs">
						<li>
							<code>REACT_APP_SASS=true</code>
							<span>- Enable SASS</span>
						</li>
						<li>
							<code>REACT_APP_LESS=true</code>
							<span>- Enable LESS</span>
						</li>
						<li>
							<code>REACT_APP_STYLUS=true</code>
							<span>- Enable Stylus</span>
						</li>
						<li>
							<code>REACT_APP_CSS_MODULES=true</code>
							<span>- Enable CSS modules </span>
						</li>
					</ul>

					<b> ⚠️ Babel </b>

					<div className={styles.warning}>
						(Please note that these features are highly experimental (especially stage-0) and still not a part of the ES specification. <br /> Use them at your own risk of breaking backwards compatibility if they don't make the final version of the spec.)
					</div>

					<ul className="configs babel-configs">
						<li>
							<code>REACT_APP_BABEL_STAGE_0=true</code>
							<span>- Enable stage-0 preset</span>
						</li>
						<li>
							<code>REACT_APP_DECORATORS=true</code>
							<span>- Enable usage of decorators</span>
						</li>
					</ul>

					<b> Others </b>
					<ul className="configs style-configs">
						<li>
							<code>PORT=3015</code>
							<span>- change default port (supported in CRA by default)</span>
						</li>
						<li>
							<code>OPEN_BROWSER=false</code>
							<span>- don't open browser after running webpack server</span>
						</li>
					</ul>

					<br />
					<br />
					<a target="_blank" className={styles.readmeLink} href="https://github.com/kitze/create-react-app/tree/master/packages/react-scripts">Link to full README.md</a>
				</div>
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

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(MainPage);
