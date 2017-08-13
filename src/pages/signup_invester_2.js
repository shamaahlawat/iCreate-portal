import React from 'react';
import './css/signup_entreprenuer.less';
import {Radio} from 'react-bootstrap';
import Autocomplete from 'react-google-autocomplete';
import If from './components/_if_component';

class signUpInvester2 extends React.Component{
	constructor(){
		super();
		this.selectLocation=this.selectLocation.bind(this);
	}
	selectLocation= ()=>{
     console.log('select location function called');
	};

	render(){
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
								<button className="activated">2</button>
							</li>
							<li className="marginLeft-25">
								<button>3</button>
							</li>
						</ul>
					</div>
					<div className="col-md-8 col-sm-8 col-xs-10 col-xs-offset-1 col-sm-offset-2 col-md-offset-2 paddingTop-20 paddingBottom-10">
						<p className="formFont">Select Organization</p>
						<div className="col-md-12 col-sm-12 col-xs-12 displayFlex marginBottom-10">
							<Radio className="noMarginTop noMarginBottom" name="Org" checked readOnly>Trust </Radio>
							<Radio className="noMarginTop noMarginBottom marginLeft-50" name="Org">Firm </Radio>
						</div>
						<p className="formFont">What is the legal name of your trust?</p>
						<div className="col-md-12 col-sm-12 col-xs-12 marginBottom-10 ">
							<input
								type="text"
								className="form-control"
								placeholder="Enter Trust Name"/>
						</div>
						<p className="formFont">Where is your trust based? </p>
						<div className="form-group col-md-12 col-sm-12 col-xs-12 marginBottom-10 ">
							<Autocomplete
								className="form-control"
								onPlaceSelected={(place) => this.selectLocation(place)}
								types={['(regions)']} />
						</div>
						<p className="formFont">Have you invested previously?</p>
						<div className="col-md-12 col-sm-12 col-xs-12 displayFlex marginBottom-10">
							<Radio className="noMarginTop noMarginBottom" name="Investment" readOnly checked>Yes </Radio>
							<Radio className="noMarginTop noMarginBottom marginLeft-50" name="Investment">No </Radio>
						</div>
              {/* <!----------  this div will display when user choose 'yes' in above radio button--------> */}

						<div className="col-md-12 col-sm-12 col-xs-12 noLRPadding marginBottom-20" >
							<p className="formFont">Which of the following ways have you invested previously?</p>
							<div className="col-md-12 col-sm-12 col-xs-12  marginBottom-10">
								<Radio className="noMarginTop noMarginBottom" name="group3" readOnly checked>
									 <p className="setMarginLeft">Directly into a startup</p>
								</Radio>
								<Radio className="noMarginTop noMarginBottom" name="group3">
									<p className="setMarginLeft">As an LP in a VC fund </p>
								</Radio>
								<Radio className="noMarginTop noMarginBottom" name="group3">
									<p className="setMarginLeft">In the public markets</p>
								</Radio>
								<Radio className="noMarginTop noMarginBottom" name="group3">
									<p className="setMarginLeft">Into a single-deal SPV</p>
								</Radio>
							</div>
							<p className="formFont">Other than investing, in what ways have you helped a startup?</p>
							<div className="col-md-12 col-sm-12 col-xs-12  marginBottom-10">
								<Radio className="noMarginTop noMarginBottom" name="group4" readOnly checked> 
									<p className="setMarginLeft">Recruiting</p>
								</Radio>
								<Radio className="noMarginTop noMarginBottom" name="group4">
									<p className="setMarginLeft">Product / Strategy</p>
								</Radio>
								<Radio className="noMarginTop noMarginBottom" name="group4">
									<p className="setMarginLeft">Marketing</p> 
								</Radio>
								<Radio className="noMarginTop noMarginBottom" name="group4">
									<p className="setMarginLeft">Connect with customers or partners</p> 
								</Radio>
							</div>
						</div>
						
					</div>
					<div className="col-md-8 col-sm-8 col-xs-12 col-sm-offset-2 col-md-offset-2 textCenter marginTB-25">
						<button className="btn btn-success setReady">Previous</button>
						<button className="btn btn-success marginLeft-20 setReady addPadding">Next</button>
					</div>
				</div>
			</div>
         );

	}
}

export default signUpInvester2;