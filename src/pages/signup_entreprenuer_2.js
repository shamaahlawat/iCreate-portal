import React, { Component } from 'react';
import './css/signup_entreprenuer.less';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../redux/actions/user_action';
import Autocomplete from 'react-google-autocomplete';


function mapStateToProps(state) {
	return {
		user_info: state.user_details
	};
};

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(Object.assign({}, userActions), dispatch)
	};
};






class SignUpEntreprenuer2 extends Component {
	constructor(){
		super();
		this.handleInputChange=this.handleInputChange.bind(this);
		// this.setSelectedText=this.setSelectedText.bind(this);
		this.signup_complete=this.signup_complete.bind(this);
		this.setAgreement=this.setAgreement.bind(this);
		this.state={
			setTermsAndAgreement: false
		}
	}

	setAgreement = () => {
         this.setState({
              setTermsAndAgreement: !this.state.setTermsAndAgreement
		 });
		//  console.log(this.state.setTermsAndAgreement);
	}

	handleInputChange = (event) => {
		this.props.actions.updateUserDetails(event.target.name, event.target.value);
	};

	// setSelectedText = (event) => {
	// 	console.log('setSelectedText function called');
	// 	console.log(event.target.name);
	// 	console.log(event.target.value);
	// };

	selectLocation = (place) => {
		var location ={
			name: place.name,
			latitude: place.geometry.location.lat(),
			logitude: place.geometry.location.lng()
		}
		this.props.actions.updateUserDetails('signup_details.company_details.location_attributes', location);
	};

	signup_complete = () => {
		// console.log("signup form filled");
		// console.log(this.props.user_info.signup_details);
		this.props.actions.signUpUser(this.props.user_info.signup_details);
	};

	goToStepOne = () => {
		browserHistory.push('/signup1');
	};

	render() {
		return (

			<div className="col-xs-12 col-md -12 col-sm-12 SignUpEntreprenuer" style={{ background: '#f2f2f2' }}>
				<div className="col-md-8 col-sm-10 col-xs-12 col-sm-offset-1 col-md-offset-2 contentHolder">
					<div className="col-md-12 col-sm-12 col-xs-12 heading" >
						<p className="setHeader">Sign Up as Entreprenuer</p>
					</div>
					<div className="col-md-12 col-sm-12 col-xs-12">
						<p className="stepFont">Step</p>
						<ul className="step noLRPadding">
							<li>
								<button onClick={() => this.goToStepOne()} >1</button>
							</li>
							<li className="marginLeft-25">
								<button className="activated">2</button>
							</li>
						</ul>
					</div>
					<div className="col-md-8 col-sm-8 col-xs-10 col-xs-offset-1 col-sm-offset-2 col-md-offset-2 paddingTop-20 paddingBottom-10">
						<p className="formFont">What's your startup's name? (You can change this at any time.)</p>
						<div className="col-md-12 col-sm-12 col-xs-12 marginBottom-10 ">
							<input 
							    type="text"
								className="form-control" 
								placeholder="Enter Name"
								name="signup_details.company_details.name"
								value={this.props.user_info.signup_details.company_details.name}
								onChange={this.handleInputChange} />
						</div>
						<p className="formFont">Is your startup incorporated? </p>
						<div className="form-group col-md-12 col-sm-12 col-xs-12 marginBottom-10 ">
							<select 
							   className="form-control"
							   id="sel1" 
							   name="signup_details.company_details.incorporation_type" 
							   value={this.props.user_info.signup_details.incorporation_type}
							   onChange={this.handleInputChange} placeholder="PLease select">
										<option value="">Please select</option>
										<option value='Other'>Other</option>
										<option value='C-corp'>C-corp</option>
										<option value='S-corp'>S-corp</option>
										<option value='B-corp'>B-corp</option>
										<option value='LLC'>LLC</option>
							</select>
						</div>
						<p className="formFont">Where is your startup located?
							(Please indicate the city your startup is located in.)  </p>
						<div className="form-group col-md-12 col-sm-12 col-xs-12 marginBottom-10 ">
							<Autocomplete 
							    className="form-control"  
								onPlaceSelected={(place) => this.selectLocation(place)} 
								types={['(regions)']}/>
						</div>
						<div className="checkbox col-md-12 col-sm-12 col-xs-12 marginBottom-10">
							<label className="setCheckbox">
								<input type="checkbox" onClick={this.setAgreement} />
								By Clicking you are agree with our Terms and Conditions
							</label>

						</div>
					</div>
					<div className="col-md-8 col-sm-8 col-xs-12 col-sm-offset-2 col-md-offset-2 textCenter marginTop-10">
						<button  
						    className="btn btn-success setNext marginTB-25"
							onClick={this.signup_complete}>Next</button>
					</div>
				</div>
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(SignUpEntreprenuer2);