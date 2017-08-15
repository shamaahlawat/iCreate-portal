import React from 'react';
import './css/signup_entreprenuer.less';
import { browserHistory } from 'react-router';
import Autocomplete from 'react-google-autocomplete';

class signUpIndividual2 extends React.Component {
	constructor() {
		super();
		this.selectLocation = this.selectLocation.bind(this);
		this.state = {
			isInvested: 'yes'
		}
	}

	selectLocation = () => {
		console.log('select location function called');
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
								<button onClick={() => browserHistory.push('/signup_individual1')}>1</button>
							</li>
							<li className="marginLeft-25">
								<button className="activated">2</button>
							</li>
							<li className="marginLeft-25">
								<button onClick={() => browserHistory.push('/signup_individual3')}>3</button>
							</li>
						</ul>
					</div>
					<div className="col-md-8 col-sm-8 col-xs-10 col-xs-offset-1 col-sm-offset-2 col-md-offset-2 paddingTop-20 paddingBottom-10">
						<p className="formFont">What is the legal name?</p>
						<div className="col-md-12 col-sm-12 col-xs-12 marginBottom-10 ">
							<input
								type="text"
								className="form-control"
								placeholder="Enter Trust Name" />
						</div>
						<p className="formFont">Where is your firm based? </p>
						<div className="form-group col-md-12 col-sm-12 col-xs-12 marginBottom-10 ">
							<Autocomplete
								className="form-control"
								onPlaceSelected={(place) => this.selectLocation(place)}
								types={['(regions)']} />
						</div>
						<p className="formFont">Have you invested previously?</p>
						<div className="col-md-12 col-sm-12 col-xs-12 displayFlex marginBottom-10">
							<input
								type="radio"
								name="group2"
								value="yes"
								className="marginRight-10"
								onClick={() => this.setState({ isInvested: 'yes' })}
								defaultChecked /> Yes
					            <input
								type="radio"
								name="group2"
								value="no"
								className="marginLeft-50 marginRight-10"
								onClick={() => this.setState({ isInvested: 'no' })} /> No
				            </div>

						{this.state.isInvested === 'yes' &&
							<div className="col-md-12 col-sm-12 col-xs-12 noLRPadding marginBottom-20" >
								<p className="formFont">Which of the following ways have you invested previously?</p>
								<div className="col-md-12 col-sm-12 col-xs-12  marginBottom-10">
									<div className="displayFlex">
										<input
											type="radio"
											name="investment"
											value="Directly into a startup"
											defaultChecked />
										<p className="setMarginLeft">Directly into a startup</p>
									</div>
									<div className="displayFlex">
										<input
											type="radio"
										    name="investment"
											value="As an LP in a VC fund" />
										<p className="setMarginLeft">As an LP in a VC fund</p>
									</div>
									<div className="displayFlex">
										<input
											type="radio"
									    	name="investment"
											value="In the public markets" />
										<p className="setMarginLeft">In the public markets</p>
									</div>
									<div className="displayFlex">
										<input
											type="radio"
										    name="investment"
											value="Into a single-deal SPV" />
										<p className="setMarginLeft">Into a single-deal SPV</p>
									</div>
								</div>
								<p className="formFont">Other than investing, in what ways have you helped a startup?</p>
								<div className="col-md-12 col-sm-12 col-xs-12  marginBottom-10">
									<div className="displayFlex">
										<input
											type="radio"
											name="group7"
											value="Recruiting"
											defaultChecked />
										<p className="setMarginLeft">Recruiting</p>
									</div>
									<div className="displayFlex">
										<input
											type="radio"
											name="group7"
											value="Product / Strategy" />
										<p className="setMarginLeft">Product / Strategy</p>
									</div>
									<div className="displayFlex">
										<input
											type="radio"
											name="group7"
											value="Marketing" />
										<p className="setMarginLeft">Marketing</p>
									</div>
									<div className="displayFlex">
										<input
											type="radio"
											name="group7"
											value="Connect with customers or partners" />
										<p className="setMarginLeft">Connect with customers or partners</p>
									</div>
								</div>
							</div>
						}
					</div>
					<div className="col-md-8 col-sm-8 col-xs-12 col-sm-offset-2 col-md-offset-2 textCenter marginBottom-20 marginTop-20">
						<button
							className="btn btn-success setReady"
							onClick={() => browserHistory.push('/signup_individual1')}>
							Previous
						</button>
						<button
							className="btn btn-success marginLeft-20 setReady addPadding"
							onClick={() => browserHistory.push('/signup_individual3')}>
							Next
						</button>
					</div>
				</div>
			</div>
		);

	}
}

export default signUpIndividual2;