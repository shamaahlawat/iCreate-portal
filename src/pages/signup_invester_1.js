import React from 'react';
import './css/signup_entreprenuer.less';

class SignUpInvester1 extends React.Component{
	render(){
		return(
			<div className="col-xs-12 col-md -12 col-sm-12 SignUpEntreprenuer" style={{ background: '#f2f2f2' }}>
				<div className="col-md-8 col-sm-10 col-xs-12 col-sm-offset-1 col-md-offset-2 contentHolder">
					<div className="col-md-12 col-sm-12 col-xs-12 heading">
						<p className="setHeader">Sign Up as Invesor</p>
					</div>
					<div className="col-md-12 col-sm-12 col-xs-12">
						<p className="stepFont">Step</p>
						<ul className="step noLRPadding">
							<li>
								<button className="activated" >1</button>
							</li>
							<li className="marginLeft-25">
								<button>2</button>
							</li>
							<li className="marginLeft-25">
								<button>3</button>
							</li>
						</ul>
					</div>
					<div className="col-md-8 col-sm-8 col-xs-10 col-xs-offset-1 col-sm-offset-2 col-md-offset-2 paddingTop-20">
						<p className="formFont">Name</p>
						<div className="col-md-12 col-sm-12 col-xs-12 noLRPadding marginBottom-10">
							<div className="col-md-6 col-sm-12 col-xs-12 marginBottom-5" >
								<input
									type="text"
									className="form-control"
									placeholder="First Name"/> 
							</div>
							<div className="col-md-6 col-sm-12 col-xs-12 ">
								<input
									type="text"
									className="form-control"
									placeholder="Last Name"/>
							</div>
						</div>
						<p className="formFont">Enter Email</p>
						<div className="col-md-12 col-sm-12 col-xs-12 marginBottom-10 ">
							<input
								type="email"
								className="form-control"
								placeholder="Enter Email"/>
						</div>

						<div className="col-md-12 col-sm-12 col-xs-12 noLRPadding marginBottom-10 ">
							<div className="col-md-6 col-sm-12 col-xs-12 marginBottom-5">
								<p className="formFont noMarginLeft">Enter Password</p>
								<input
									type="password"
									className="form-control"
									placeholder="Enter Password"/>
							</div>
							<div className="col-md-6 col-sm-12 col-xs-12 ">
								<p className="formFont noMarginLeft">Confirm Password</p>
								<input
									type="password"
									className="form-control"
									placeholder="Enter Password"/>
									
							</div>
						</div>
						<p className="stepFont">OR</p>
					</div>
					<div className="col-md-8 col-sm-8 col-xs-12 col-sm-offset-2 col-md-offset-2 textCenter marginTop-10" >
						<button className="btn btn-primary noBorderRadius setButton">SIGN UP WITH LINKEDIN</button>
						<h6 className="setDesc">We'll never post anything on LinkedIn</h6>
						<h6 className="setDesc"> without your permission.</h6>
						<button  className="btn btn-success setNext marginTB-25">Next</button>
					</div>
				</div>
			</div>
		);
	}
}

export default SignUpInvester1;