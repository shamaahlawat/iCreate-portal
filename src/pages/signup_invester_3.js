import React from 'react';
import './css/signup_entreprenuer.less';

class signUpInvester3 extends React.Component {
	render() {
		return (
			<div className="col-xs-12 col-md -12 col-sm-12 SignUpEntreprenuer" style={{ background: '#f2f2f2' }}>
				<div className="col-md-8 col-sm-10 col-xs-12 col-sm-offset-1 col-md-offset-2 contentHolder">
					<div className="col-md-12 col-sm-12 col-xs-12 heading" >
						<p className="setHeader">Sign Up as Investor</p>
					</div>
					<div className="col-md-12 col-sm-12 col-xs-12">
						<p className="stepFont">Step</p>
						<ul className="step noLRPadding">
							<li>
								<button >1</button>
							</li>
							<li className="marginLeft-25">
								<button>2</button>
							</li>
							<li className="marginLeft-25">
								<button className="activated">3</button>
							</li>
						</ul>
					</div>
					<div className="col-md-8 col-sm-8 col-xs-10 col-xs-offset-1 col-sm-offset-2 col-md-offset-2 paddingTop-20 paddingBottom-10">
						<p className="formFont">Which industry start up you want to inverst? </p>
						<div className="form-group col-md-12 col-sm-12 col-xs-12 marginBottom-10 ">
							<select
								className="form-control"
								id="sel1" >
								<option value="">Please select</option>
								<option value='Other'>Other</option>
								<option value='C-corp'>Pole</option>
								<option value='S-corp'>Drone</option>
								<option value='B-corp'>Arjuna</option>
								<option value='LLC'>Karna</option>
							</select>
						</div>
						<p className="formFont">Comapany Stage </p>
						<div className="form-group col-md-12 col-sm-12 col-xs-12 marginBottom-10 ">
							<select
								className="form-control"
								id="sel1" >
								<option value="">Please select</option>
								<option value='Other'>Other</option>
								<option value='C-corp'>Concept Only</option>
								<option value='S-corp'>Design Completed</option>
								<option value='B-corp'>Started Development</option>
								<option value='LLC'>Marketing Left</option>
							</select>
						</div>
						<p className="formFont">What is your yearly investing budget for startups? </p>
						<div className="col-md-12 col-sm-12 col-xs-12 marginBottom-10 ">
							<input
								type="text"
								className="form-control"
								placeholder="Enter amount in Rupees" />
						</div>
						<p className="formFont">Links to your online profile. To help us evaluate your application </p>
						<div className="col-md-12 col-sm-12 col-xs-12 marginBottom-10 ">
							<input
								type="text"
								className="form-control"
								placeholder="Linkedin" />
						</div>
						<div className="col-md-12 col-sm-12 col-xs-12 marginBottom-20 ">
							<input
								type="text"
								className="form-control"
								placeholder="Websites" />
						</div>

						<p className="formFont">Mini bio. Helps founders & syndicate leads know who you are  </p>
						<div className="form-group col-md-12 col-sm-12 col-xs-12 marginBottom-10 ">
							<textarea className="form-control" rows="5" id="comment" placeholder="0/160"></textarea>
						</div>
						<div className="checkbox col-md-12 col-sm-12 col-xs-12 marginBottom-10">
							<label className="setCheckbox">
								<input type="checkbox" />
								By Clicking you are agree with our Terms and Conditions
							</label>
						</div>
					</div>
					<div className="col-md-8 col-sm-8 col-xs-12 col-sm-offset-2 col-md-offset-2 textCenter marginTB-25">		
						<button className="btn btn-success setReady">Previous</button>
						<button className="btn btn-success marginLeft-20 setReady">Ready to go</button>
					</div>
				</div>
			</div>
		);

	}
}

export default signUpInvester3;