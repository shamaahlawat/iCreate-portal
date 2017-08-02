import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import { Accordion, Panel, PageHeader, PanelGroup, ListGroup, ListGroupItem } from 'react-bootstrap';
import './css/signup_entreprenuer.less';

class SignIn extends Component {
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
							<input type="email" name="Email" className="form-control" placeholder="Enter registered email"></input>
						</div>
						<p className="formFont">Enter Password</p>
						<div className="col-md-12 col-sm-12 col-xs-12 marginBottom-10 ">
							<input type="password" name="password" className="form-control" placeholder="Enter password"></input>
						</div>
						<div className="checkbox col-md-12 col-sm-12 col-xs-12 marginBottom-10">
							<label className="setCheckbox"><input type="checkbox" value=" " />Remember Password</label>
						</div>
					</div>
					<div className="col-md-8 col-sm-8 col-xs-12 col-sm-offset-2 col-md-offset-2  marginTop-10">
						<div className="col-md-12 textCenter">
							<button className="btn btn-success setNext marginTB-25">Next</button>
						</div>
						<div className="col-md-6 col-sm-6 col-xs-12">
							<p className="setInfo marginBottom-5">Don’t have account?<a href="/signup" className="clickMe"> Click here.</a></p>
						</div>
						<div className="col-md-6 col-sm-6 col-xs-12">
							<p className="setInfo textFloat marginBottom-5">Forgot Password?</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default SignIn;