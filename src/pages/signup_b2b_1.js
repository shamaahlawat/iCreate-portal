import React from 'react';
import './css/signup_entreprenuer.less';
import Autocomplete from 'react-google-autocomplete';
import { browserHistory } from 'react-router';

class SignUpB2B1 extends React.Component {
	constructor() {
		super();
		this.selectLocation = this.selectLocation.bind(this);

	}

	selectLocation = (place) => {
		console.log('selectlocation function called');
	};

	
	render() {
		return (
			<div className="col-xs-12 col-md -12 col-sm-12 SignUpEntreprenuer" style={{ background: '#f2f2f2' }}>
				<div className="col-md-8 col-sm-10 col-xs-12 col-sm-offset-1 col-md-offset-2 contentHolder">
					<div className="col-md-12 col-sm-12 col-xs-12 heading">
						<p className="setHeader">Sign Up for B2B Market</p>
					</div>
					<div className="col-md-12 col-sm-12 col-xs-12">
						<p className="stepFont">Step</p>
						<ul className="step noLRPadding">
							<li>
								<button className="activated" >1</button>
							</li>
							<li className="marginLeft-25">
								<button onClick={() => browserHistory.push('/signup_b2b2')}>2</button>
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
					</div>
					<div className="col-md-8 col-sm-8 col-xs-12 col-sm-offset-2 col-md-offset-2 textCenter marginTop-30" >
						<button
							className="btn btn-success setNext marginTB-25"
							onClick={() => browserHistory.push('/signup_b2b2')}>
							Next
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default SignUpB2B1;