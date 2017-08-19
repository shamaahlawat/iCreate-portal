import React from 'react';
import './css/signup_entreprenuer.less';
import Autocomplete from 'react-google-autocomplete';
import { browserHistory } from 'react-router';

class SignUpAccelerator1 extends React.Component {
	constructor() {
		super();
		this.selectLocation = this.selectLocation.bind(this);

	}

	selectLocation = (place) => {
		
	};


	render() {
		return (
			<div className="col-xs-12 col-md -12 col-sm-12 SignUpEntreprenuer" style={{ background: '#f2f2f2' }}>
				<div className="col-md-8 col-sm-10 col-xs-12 col-sm-offset-1 col-md-offset-2 contentHolder">
					<div className="col-md-12 col-sm-12 col-xs-12 heading">
						<p className="setHeader">Sign Up as Accelerator</p>
					</div>
					<div className="col-md-12 col-sm-12 col-xs-12">
						<p className="stepFont">Step</p>
						<ul className="step noLRPadding">
							<li>
								<button className="activated" >1</button>
							</li>
							<li className="marginLeft-25">
								<button onClick={() => browserHistory.push('/signup_accelerator2')}>2</button>
							</li>
							<li className="marginLeft-25">
								<button onClick={() => browserHistory.push('/signup_accelerator3')}>3</button>
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
									placeholder="First Name" />
							</div>
							<div className="col-md-6 col-sm-6 col-xs-12 ">
								<input
									type="text"
									className="form-control"
									placeholder="Last Name" />
							</div>
						</div>
						<div className="col-md-12 col-sm-12 col-xs-12 noLRPadding marginBottom-10 ">
							<div className="col-md-6 col-sm-6 col-xs-12 marginBottom-5">
								<p className="formFont noMarginLeft">Enter Email</p>
								<input
									type="password"
									className="form-control"
									placeholder="Enter Email" />
							</div>
							<div className="col-md-6 col-sm-6 col-xs-12 ">
								<p className="formFont noMarginLeft">Enter Location</p>
								<Autocomplete
									className="form-control"
									onPlaceSelected={(place) => this.selectLocation(place)}
									types={['(regions)']} />

							</div>
						</div>
						<div className="col-md-12 col-sm-12 col-xs-12 noLRPadding marginBottom-10 ">
							<div className="col-md-6 col-sm-6 col-xs-12 marginBottom-5">
								<p className="formFont noMarginLeft">Enter Password</p>
								<input
									type="password"
									className="form-control"
									placeholder="Enter Password" />
							</div>
							<div className="col-md-6 col-sm-6 col-xs-12 ">
								<p className="formFont noMarginLeft">Confirm Password</p>
								<input
									type="password"
									className="form-control"
									placeholder="Enter Password" />

							</div>
						</div>
						<p className="stepFont">OR</p>
					</div>
					<div className="col-md-8 col-sm-8 col-xs-12 col-sm-offset-2 col-md-offset-2 textCenter marginTop-10" >
						<button className="btn btn-primary noBorderRadius setButton">SIGN UP WITH LINKEDIN</button>
						<h6 className="setDesc">We'll never post anything on LinkedIn</h6>
						<h6 className="setDesc"> without your permission.</h6>
						<button
							className="btn btn-success setNext marginTB-25"
							onClick={() => browserHistory.push('/signup_accelerator2')}>
							Next
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default SignUpAccelerator1;