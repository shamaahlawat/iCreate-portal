import React from 'react';
import './css/signup_entreprenuer.less';
import { browserHistory } from 'react-router';
import Autocomplete from 'react-google-autocomplete';

class signUpAccelerator3 extends React.Component {
	constructor() {
		super();
		this.selectLocation = this.selectLocation.bind(this);

	}

	selectLocation = () => {
		
	};

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
								<button onClick={() => browserHistory.push('/signup_accelerator2')} >2</button>
							</li>
							<li className="marginLeft-25">
								<button className="activated">3</button>
							</li>
						</ul>
					</div>
					<div className="col-md-8 col-sm-8 col-xs-10 col-xs-offset-1 col-sm-offset-2 col-md-offset-2 paddingTop-20 paddingBottom-10">
						<p className="formFont">Program Name </p>
						<div className="col-md-12 col-sm-12 col-xs-12 marginBottom-10 ">
							<input
								type="text"
								className="form-control"
								placeholder="e.g. Johns Accelerator Spring 2016" />
						</div>
						<p className="formFont">Website </p>
						<div className="col-md-12 col-sm-12 col-xs-12 marginBottom-10 ">
							<input
								type="text"
								className="form-control"
								placeholder="Enter Website URL" />
						</div>
						<p className="formFont">Date of program</p>
						<div className="col-md-12 col-sm-12 col-xs-12 noLRPadding marginBottom-10">
							<div className="col-md-6 col-sm-6 col-xs-12 marginBottom-5" >
								<p className="marginBottom-5">Start date</p>
								<input
									type="date"
									className="form-control"
									placeholder="Start Date" />
							</div>
							<div className="col-md-6 col-sm-6 col-xs-12 ">
								<p className="marginBottom-5">End date</p>
								<input
									type="date"
									className="form-control"
									placeholder="End Date" />
							</div>
						</div>
						<p className="formFont">Location </p>
						<div className="form-group col-md-12 col-sm-12 col-xs-12 marginBottom-10 ">
							<Autocomplete
								className="form-control"
								onPlaceSelected={(place) => this.selectLocation(place)}
								types={['(regions)']} />
						</div>

						<p className="formFont">About this program  </p>
						<div className="form-group col-md-12 col-sm-12 col-xs-12 marginBottom-10 ">
							<textarea
								className="form-control"
								rows="4"
								id="about_program"
								placeholder="Describe the focus of the program and why startup should  consider applying to your program.">
							</textarea>
						</div>
						<p className="formFont">Industry </p>
						<div className="form-group col-md-12 col-sm-12 col-xs-12 marginBottom-10 ">
							<select
								className="form-control"
								id="sel1" >
								<option value="">Select Your Industry</option>
								<option value='Other'>Other</option>
								<option value='C-corp'>Pole</option>
								<option value='S-corp'>Drone</option>
								<option value='B-corp'>Arjuna</option>
								<option value='LLC'>Karna</option>
							</select>
						</div>
						<div className="checkbox col-md-12 col-sm-12 col-xs-12 marginBottom-10">
							<label className="setCheckbox">
								<input type="checkbox" />
								By Clicking you are agree with our Terms and Conditions
							</label>
						</div>
					</div>
					<div className="col-md-8 col-sm-8 col-xs-12 col-sm-offset-2 col-md-offset-2 textCenter marginBottom-20 marginTop-50">
						<button
							className="btn btn-success setReady"
							onClick={() => browserHistory.push('/signup_accelerator2')}>
							Previous
						</button>
						<button
							className="btn btn-success marginLeft-20 setReady ">
							Ready to go
						</button>
					</div>
				</div>
			</div>
		);

	}
}

export default signUpAccelerator3;