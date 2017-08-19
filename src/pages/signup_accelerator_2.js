import React from 'react';
import './css/signup_entreprenuer.less';
import { browserHistory } from 'react-router';

class signUpAccelerator2 extends React.Component {

	render() {
		return (
			<div className="col-xs-12 col-md -12 col-sm-12 SignUpEntreprenuer" style={{ background: '#f2f2f2' }}>
				<div className="col-md-8 col-sm-10 col-xs-12 col-sm-offset-1 col-md-offset-2 contentHolder">
					<div className="col-md-12 col-sm-12 col-xs-12 heading" >
						<p className="setHeader">Sign Up as Accelerator</p>
					</div>
					<div className="col-md-12 col-sm-12 col-xs-12">
						<p className="stepFont">Step</p>
						<ul className="step noLRPadding">
							<li>
								<button onClick={() => browserHistory.push('/signup_accelerator1')}>1</button>
							</li>
							<li className="marginLeft-25">
								<button className="activated">2</button>
							</li>
							<li className="marginLeft-25">
								<button onClick={() => browserHistory.push('/signup_accelerator3')}>3</button>
							</li>
						</ul>
					</div>
					<div className="col-md-8 col-sm-8 col-xs-10 col-xs-offset-1 col-sm-offset-2 col-md-offset-2 paddingTop-20 paddingBottom-10">
						<p className="formFont">Accelerator Name </p>
						<div className="col-md-12 col-sm-12 col-xs-12 marginBottom-10 ">
							<input
								type="text"
								className="form-control"
								placeholder="Enter Accelerator Name" />
						</div>
						<p className="formFont">Website </p>
						<div className="col-md-12 col-sm-12 col-xs-12 marginBottom-10 ">
							<input
								type="text"
								className="form-control"
								placeholder="Your accelerator’s main website URL" />
						</div>
						<p className="formFont">Tagline </p>
						<div className="col-md-12 col-sm-12 col-xs-12 marginBottom-10 ">
							<input
								type="text"
								className="form-control"
								placeholder="i.e. Creating the next generation of technology super-stars" />
						</div>
						<p className="formFont"> Description  </p>
						<div className="form-group col-md-12 col-sm-12 col-xs-12 marginBottom-10 ">
							<textarea 
							     className="form-control" 
								 rows="4" 
								 id="description" 
								 placeholder="Tell the world what your accelerator does. This can usually be found in the About section of your website">
							</textarea>
						</div>
						<p className="formFont">Industry </p>
						<div className="form-group col-md-12 col-sm-12 col-xs-12 marginBottom-10 ">
							<select
								className="form-control"
								id="sel1" >
								<option value="">Select the industries that your accelerator focusses on</option>
								<option value='Other'>Other</option>
								<option value='C-corp'>Pole</option>
								<option value='S-corp'>Drone</option>
								<option value='B-corp'>Arjuna</option>
								<option value='LLC'>Karna</option>
							</select>
						</div>
					</div>
					<div className="col-md-8 col-sm-8 col-xs-12 col-sm-offset-2 col-md-offset-2 textCenter marginBottom-20 marginTop-50">
						<button
							className="btn btn-success setReady"
							onClick={() => browserHistory.push('/signup_accelerator1')}>
							   Previous
						</button>
						<button 
						    className="btn btn-success marginLeft-20 setReady addPadding"
							onClick={() => browserHistory.push('/signup_accelerator3')}>
							   Next
						</button>
					</div>
				</div>
			</div>
		);

	}
}

export default signUpAccelerator2;