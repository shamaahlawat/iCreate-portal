import React, { Component } from 'react';
import './css/signup_entreprenuer.less';

class ForgotPassword extends Component {
	render() {
		return (

			<div className="col-xs-12 col-md -12 col-sm-12 SignUpEntreprenuer" style={{ background: '#f2f2f2' }}>
				<div className="col-md-8 col-sm-10 col-xs-12 col-sm-offset-1 col-md-offset-2 contentHolder">
					<div className="col-md-12 col-sm-12 col-xs-12 heading" >
						<p className="setHeader">Forgot Password</p>
					</div>

					<div className="col-md-8 col-sm-8 col-xs-8 col-xs-offset-2 col-sm-offset-2 col-md-offset-2 paddingTop-20 paddingBottom-10">
						<p className="formFont">Enter Email</p>
						<div className="col-md-12 col-sm-12 col-xs-12 marginBottom-10 ">
							<input type="email" name="Email" className="form-control" placeholder="Enter registered email"></input>
						</div>
					</div>
					<div className="col-md-8 col-sm-8 col-xs-12 col-sm-offset-2 col-md-offset-2">
						<div className="col-md-12 textCenter">
							<button className="btn btn-success setNext marginTB-25">Next</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default ForgotPassword;