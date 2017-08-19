import React, { Component } from 'react';
import { Accordion, Panel, ListGroup, ListGroupItem } from 'react-bootstrap';
import './css/signup.less';

import { browserHistory } from 'react-router';
import * as pageActions from '../redux/actions/page_actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(Object.assign({}, pageActions), dispatch)
	};
};

class SignUp extends Component {

	componentWillMount() {
		this.props.actions.pageChanged('signup');
	}

	render() {
		return (
			<div className="col-xs-12 col-md -12 col-sm-12 SignUpSection noLRPadding " style={{ background: '#f2f2f2' }}>
				<div className="col-md-8 col-sm-10 col-sm-offset-1 col-md-offset-2 ">
					<div className="col-md-12 col-sm-12 marginTop noLRPadding">
						<p className="setHeaderFont">
							Join the Global Platform for Startup Investing
							</p>
						<p className="textCenter setFontColor fontSize marginTop-20">Select your role</p>
					</div>
					<div className="col-md-8 col-md-offset-2  col-sm-8 col-sm-offset-2 noLRPadding marginTB bg-color padding-5">
						<div className="col-md-12 col-sm-12  noLRPadding">
							<button
								className="btn btn-success setButton"
								onClick={() => browserHistory.push('/signup1')}>
								I am Entrepreneur
							</button>
						</div>
						<div className="col-md-12 col-sm-12 noLRPadding">
							<Accordion className="noMarginBottom">
								<Panel header={
									<div className="setRoleFont">I am an Investor</div>
								} eventKey="2" className="textCenter noMarginTop">
									<ListGroup>
										<ListGroupItem
											className="textCenter"
											onClick={() => browserHistory.push('/signup_investor1')}>
											I belong to Investment Organization
										</ListGroupItem>
										<ListGroupItem
											className="textCenter"
											onClick={() => browserHistory.push('/signup_accelerator1')}>
											I manage an Accelerator Program
											</ListGroupItem>
										<ListGroupItem
											className="textCenter"
											onClick={() => browserHistory.push('/signup_individual1')}>
											I am an Individual Investor
										</ListGroupItem>
									</ListGroup>
								</Panel>
							</Accordion>
						</div>
						<div className="col-md-12 col-sm-12 noLRPadding marginBottom-1">
							<button
								className="btn btn-success setButton"
								onClick={() => browserHistory.push('/signup_jobseeker1')}>
								I am looking for a job in startup
							</button>
						</div>
						<div className="col-md-12 col-sm-12 noLRPadding">
							<button
								className="btn btn-success setButton"
								onClick={() => browserHistory.push('/signup_b2b1')}>
								I provide B2B solutions
							</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default connect(null, mapDispatchToProps, null, { withRef: true })(SignUp);