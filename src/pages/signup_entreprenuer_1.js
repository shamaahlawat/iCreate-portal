import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import { Accordion, Panel, PageHeader, PanelGroup, ListGroup, ListGroupItem } from 'react-bootstrap';
import './css/signup_entreprenuer.less';

class SignUpEntreprenuer1 extends Component {
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
								<a href="/signup1" className="activated" >1</a>
							</li>
							<li className="marginLeft-25">
								<a href="/signup2">2</a>
							</li>
						</ul>
					</div>
					<div className="col-md-8 col-sm-8 col-xs-8 col-xs-offset-2 col-sm-offset-2 col-md-offset-2 paddingTop-20">
						<p className="formFont">Name</p>
						<div className="col-md-12 col-sm-12 col-xs-12 noLRPadding marginBottom-10">
							<div className="col-md-6 col-sm-12 col-xs-12 marginBottom-5" >
								<input type="text" className="form-control" placeholder="First Name"></input>
							</div>
							<div className="col-md-6 col-sm-12 col-xs-12 ">
								<input type="text" className="form-control" placeholder="Last Name"></input>
							</div>
						</div>
						<p className="formFont">Enter Email</p>
						<div className="col-md-12 col-sm-12 col-xs-12 marginBottom-10 ">
							<input type="email" className="form-control" placeholder="Enter Email"></input>
                        </div>
						
						<div className="col-md-12 col-sm-12 col-xs-12 noLRPadding marginBottom-10 ">	
							<div className="col-md-6 col-sm-12 col-xs-12 marginBottom-5">
								<p className="formFont noMarginLeft">Enter Password</p>
								<input type="password" className="form-control" placeholder="Enter Password"></input>
							</div>
							<div className="col-md-6 col-sm-12 col-xs-12 ">
								<p className="formFont noMarginLeft">Confirm Password</p>
								<input type="password" className="form-control" placeholder="Enter Password"></input>
							</div>
						</div>
						<p className="stepFont">OR</p>
					</div>
					<div className="col-md-8 col-sm-8 col-xs-12 col-sm-offset-2 col-md-offset-2 textCenter marginTop-10" >
						<button className="btn btn-primary noBorderRadius setButton">SIGN UP WITH LINKEDIN</button>
						<h6 className="setDesc">We'll never post anything on LinkedIn</h6>
						<h6 className="setDesc"> without your permission.</h6>
						<button className="btn btn-success setNext marginTB-25">Next</button>
					</div>
				</div>
			</div>
		)
	}
}

export default SignUpEntreprenuer1;