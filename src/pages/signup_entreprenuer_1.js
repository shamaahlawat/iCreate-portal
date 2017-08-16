import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import './css/signup_entreprenuer.less';

import * as userActions from '../redux/actions/user_action';
import { browserHistory } from 'react-router';

var dotProp = require('dot-prop-immutable');

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(Object.assign({}, userActions), dispatch)
	};
};

function mapStateToProps(state) {
	return {
		user_info: state.user_details
	};
};

class SignUpEntreprenuer1 extends Component {
	constructor(){
		super();
		this.handleInputChange=this.handleInputChange.bind(this);
	}

	handleInputChange = (event) => {
		this.props.actions.updateUserDetails(event.target.name, event.target.value);
	};

	render() {
		return (

			<div className="col-xs-12 col-md -12 col-sm-12 SignUpEntreprenuer" style={{ background: '#f2f2f2' }}>
				<div className="col-md-8 col-sm-10 col-xs-12 col-sm-offset-1 col-md-offset-2 contentHolder">
					<div className="col-md-12 col-sm-12 col-xs-12 heading">
						<p className="setHeader">Sign Up as Entreprenuer</p>
					</div>
					<div className="col-md-12 col-sm-12 col-xs-12">
						<p className="stepFont">Step</p>
						<ul className="step noLRPadding">
							<li>
								<button  className="activated" >1</button>
							</li>
							<li className="marginLeft-25">
								<button onClick={() => browserHistory.push('/signup2')} >2</button>
							</li>
						</ul>
					</div>
					<div className="col-md-8 col-sm-8 col-xs-10 col-xs-offset-1 col-sm-offset-2 col-md-offset-2 paddingTop-20">
						<p className="formFont">Name</p>
						<div className="col-md-12 col-sm-12 col-xs-12 noLRPadding marginBottom-10">
							<div className="col-md-6 col-sm-6 col-xs-12 marginBottom-5" >
								<input
									type="text"
									className="form-control"
									placeholder="First Name"
									name="signup_details.first_name"
									required="true"
									value={this.props.user_info.signup_details.first_name}
									onChange={this.handleInputChange} />
							</div>
							<div className="col-md-6 col-sm-6 col-xs-12 ">
								<input
									type="text"
									className="form-control"
									placeholder="Last Name"
									name="signup_details.last_name"
								    required="true"
									value={this.props.user_info.signup_details.last_name}
									onChange={this.handleInputChange} />
							</div>
						</div>
						<p className="formFont">Enter Email</p>
						<div className="col-md-12 col-sm-12 col-xs-12 marginBottom-10 ">
							<input
								type="email"
								className="form-control"
								placeholder="Enter Email"
								name="signup_details.email"
								required="true"
								value={this.props.user_info.signup_details.email}
								onChange={this.handleInputChange}  />
						</div>

						<div className="col-md-12 col-sm-12 col-xs-12 noLRPadding marginBottom-10 ">
							<div className="col-md-6 col-sm-6 col-xs-12 marginBottom-5">
								<p className="formFont noMarginLeft">Enter Password</p>
								<input
									type="password"
									className="form-control"
									placeholder="Enter Password"
									name="signup_details.password"
									required="true"
									value={this.props.user_info.signup_details.password}
									onChange={this.handleInputChange}  />
							</div>
							<div className="col-md-6 col-sm-6 col-xs-12 ">
								<p className="formFont noMarginLeft">Confirm Password</p>
								<input
									type="password"
									className="form-control"
									placeholder="Enter Password"
									name="signup_details.password_confirmation"
									required="true"
									value={this.props.user_info.signup_details.password_confirmation}
									onChange={this.handleInputChange}  />
							</div>
						</div>
						<p className="stepFont">OR</p>
					</div>
					<div className="col-md-8 col-sm-8 col-xs-12 col-sm-offset-2 col-md-offset-2 textCenter marginTop-10" >
						<button className="btn btn-primary noBorderRadius setButton">SIGN UP WITH LINKEDIN</button>
						<h6 className="setDesc">We'll never post anything on LinkedIn</h6>
						<h6 className="setDesc"> without your permission.</h6>
						<button onClick={() => browserHistory.push('/signup2')} className="btn btn-success setNext marginTB-25">Next</button>
					</div>
				</div>
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps, null, {withRef:true})(SignUpEntreprenuer1);

