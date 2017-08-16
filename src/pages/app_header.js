import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Flexbox from 'flexbox-react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { connect } from 'react-redux';

import NavLink from './components/_navlinks.js';
import './css/app_header.less';


function mapStateToProps(state) {
	return {
		user_info: state.user_details
	};
};

class AppHeader extends Component {

	render() {
		return (
			<Flexbox flexDirection="row" minWidth="100vw" className="AppHeader marginBottom-2 simple from-right transition-item">
				<Navbar fluid collapseOnSelect className="nav-height  navbar-bg" >
					<div className="col-md-10  col-md-offset-1 noLRPadding">
						<Navbar.Header className="set-header-icon tb-padding-5">
							<Navbar.Brand className="withoutPadding noMarginLeft ">
								<NavLink className="logo" to="/">
									<img src="../assets/images/icon_2.png" className="img-responsive margin-top-bottom" alt="iCreate icon" width="83px" height="61px" />
								</NavLink>
							</Navbar.Brand>
							<Navbar.Toggle className="marginTop-12" />
						</Navbar.Header>
						<Navbar.Collapse >
							<Nav pullRight>
								<NavItem
									eventKey={1}
									className="nav-height custom"
									onClick={() => browserHistory.push('/home')}>Home</NavItem>
								{this.props.user_info.is_login === false &&
								<NavItem
										eventKey={2}
										className="nav-height custom"
										onClick={() => browserHistory.push('/signin')}>
										Sign In
								</NavItem>}
								{this.props.user_info.is_login === false &&
								<NavItem
										eventKey={3}
										className="nav-height custom"
										onClick={() => browserHistory.push('/signup')}>
										Sign Up
								</NavItem>}

								{this.props.user_info.is_login === true &&
								<NavItem
										eventKey={4}
										className="nav-height custom"
										onClick={() => browserHistory.push('/search')}>
										Search
								</NavItem>}
								{this.props.user_info.is_login === true &&
								<NavItem
										eventKey={5}
										className="nav-height custom"
										onClick={() => browserHistory.push('/connection')}>
										Connection
								</NavItem>}
								{this.props.user_info.is_login === true &&
									<NavDropdown 
									    eventKey={6} 
										title={<span><img src="../assets/images/icon_3.png" alt="profile pic" className="img-resposive img-circle set-profile-pic" /> Vivek</span>} 
									    id="dropdown1" 
										className="nav-height setDropdown">   {/*add first name only (ex- fName = Vivek) otherwise hovering will push all the item left*/}
										<NavLink withLi to="/page2/a"><span className="glyphicon glyphicon-user"></span> Profile</NavLink>
										<NavLink withLi to="/page2/b"><span className="glyphicon glyphicon-cog"></span> Setting</NavLink>
										<NavLink withLi to="/page2/c"><span className="glyphicon glyphicon-earphone"></span> Contact Us</NavLink>
										<NavLink withLi to="/page2/d"><span className="glyphicon glyphicon-log-out"></span> Sign Out</NavLink>
									</NavDropdown>}
							</Nav>
						</Navbar.Collapse>
					</div>
				</Navbar>
			</Flexbox>
		)
	}
}

export default connect(mapStateToProps)(AppHeader);
