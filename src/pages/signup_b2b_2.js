import React from 'react';
import './css/signup_entreprenuer.less';
import { browserHistory } from 'react-router';

class signUpB2B2 extends React.Component {
	
	render() {
		return (
			<div className="col-xs-12 col-md -12 col-sm-12 SignUpEntreprenuer" style={{ background: '#f2f2f2' }}>
				<div className="col-md-8 col-sm-10 col-xs-12 col-sm-offset-1 col-md-offset-2 contentHolder">
					<div className="col-md-12 col-sm-12 col-xs-12 heading" >
						<p className="setHeader">Sign Up for B2B Market</p>
					</div>
					<div className="col-md-12 col-sm-12 col-xs-12">
						<p className="stepFont">Step</p>
						<ul className="step noLRPadding">
							<li>
								<button onClick={() => browserHistory.push('/signup_b2b1')}>1</button>
							</li>
							
							<li className="marginLeft-25">
								<button className="activated">2</button>
							</li>
						</ul>
					</div>
					<div className="col-md-8 col-sm-8 col-xs-10 col-xs-offset-1 col-sm-offset-2 col-md-offset-2 paddingTop-20 paddingBottom-10">
						<p className="formFont">Select Industry Type </p>
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
						<p className="formFont">Company Name </p>
						<div className="col-md-12 col-sm-12 col-xs-12 marginBottom-10 ">
							<input
								type="text"
								className="form-control"
								placeholder="Enter Company Name" />
						</div>
						<div className="col-md-12 col-sm-12 col-xs-12 marginBottom-10 " style={{ background: 'red' }}>
							<input
								type="text"
								className="form-control"
								placeholder="Linkedin" />
						</div>
						<div className="col-md-12 col-sm-12 col-xs-12 marginBottom-20 " style={{ background: 'blue' }}>
							<input
								type="text"
								className="form-control"
								placeholder="Websites" />
						</div>

						<p className="formFont">Business Detail  </p>
						<div className="form-group col-md-12 col-sm-12 col-xs-12 marginBottom-10 ">
							<textarea 
							    className="form-control" 
								rows="4" 
								id="business_detail" 
								placeholder="e.g. Brief detail about your business.">
							</textarea>
						</div>
					</div>
					<div className="col-md-8 col-sm-8 col-xs-12 col-sm-offset-2 col-md-offset-2 textCenter marginTB-25">
						<button
							className="btn btn-success setReady"
							onClick={() => browserHistory.push('/signup_b2b1')}>
							    Previous
						</button>
						<button className="btn btn-success marginLeft-20 setReady">Ready to go</button>
					</div>
				</div>
			</div>
		);

	}
}

export default signUpB2B2;