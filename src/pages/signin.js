import React, { Component } from 'react';
import './css/signup_entreprenuer.less';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../redux/actions/user_action';
import { browserHistory } from 'react-router';


function mapStateToProps(state) {
	return {
		user_info: state.user_details
	};
};

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(Object.assign({}, userActions), dispatch)
	};
};

class SignIn extends Component {
	constructor(){
		super();
		this.handleInputChange=this.handleInputChange.bind(this);
		this.setRememberPassword=this.setRememberPassword.bind(this);
		this.verifyUserSignIn=this.verifyUserSignIn.bind(this);
		this.state={
			rememberPassword: false
		}
	}

	handleInputChange = (event) => {
		this.props.actions.updateUserDetails(event.target.name, event.target.value);
	};

	setRememberPassword= () =>{
		this.setState({
			rememberPassword: !this.state.rememberPassword
		})
	};

	verifyUserSignIn= () => {
		console.log('next button clicked');
		console.log(this.props.user_info.signin_details);
		this.props.actions.signInUser(this.props.user_info.signin_details);
	}

	goToForgotPassword= () => {
		browserHistory.push('/forgotpassword');
	}

	goToSignUp= () => {
		browserHistory.push('/signup');
	}

	render() {
		return (

			<div className="col-xs-12 col-md -12 col-sm-12 SignUpEntreprenuer" style={{ background: '#f2f2f2' }}>
				<div className="col-md-8 col-sm-10 col-xs-12 col-sm-offset-1 col-md-offset-2 contentHolder">
					<div className="col-md-12 col-sm-12 col-xs-12 heading" >
						<p className="setHeader">Login</p>
					</div>

					<div className="col-md-8 col-sm-8 col-xs-8 col-xs-offset-2 col-sm-offset-2 col-md-offset-2 paddingTop-20 paddingBottom-10">
						<p className="formFont">Enter Email</p>
						<div className="col-md-12 col-sm-12 col-xs-12 marginBottom-10 ">
							<input 
							   type="email" 
							   className="form-control" 
							   placeholder="Enter registered email"
							   value={this.props.user_info.signin_details.email}
							   name="signin_details.email" 
							   onChange={this.handleInputChange} />
						</div>
						<p className="formFont">Enter Password</p>
						<div className="col-md-12 col-sm-12 col-xs-12 marginBottom-10 ">
							<input 
							   type="password"
							   name="password" 
							   className="form-control" 
							   placeholder="Enter password"
							   value={this.props.user_info.signin_details.password}
							   name="signin_details.password"
							   onChange={this.handleInputChange} />
						</div>
						<div className="checkbox col-md-12 col-sm-12 col-xs-12 marginBottom-10">
							<label className="setCheckbox">
								<input type="checkbox" onClick={this.setRememberPassword} />
								Remember Password
							</label>
						</div>
					</div>
					<div className="col-md-8 col-sm-8 col-xs-12 col-sm-offset-2 col-md-offset-2  marginTop-10">
						<div className="col-md-12 textCenter">
							<button 
							    className="btn btn-success setNext marginTB-25"
								onClick={this.verifyUserSignIn}>
								Next
							</button>
						</div>
						<div className="col-md-6 col-sm-6 col-xs-12">
							<p className="setInfo marginBottom-5">
								Don’t have account?
								<span className="clickMe" onClick={this.goToSignUp}>
									 Click here.
							    </span>
							</p>
						</div>
						<div className="col-md-6 col-sm-6 col-xs-12">
							<p className="setInfo textFloat cursor marginBottom-5" onClick={this.goToForgotPassword}>
								Forgot Password?
							</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}


export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(SignIn);