import React from 'react';
import './css/signup_entreprenuer.less';
import { browserHistory } from 'react-router';

class signUpJobSeeker2 extends React.Component {

	render() {
		return (
			<div className="col-xs-12 col-md -12 col-sm-12 SignUpEntreprenuer" style={{ background: '#f2f2f2' }}>
				<div className="col-md-8 col-sm-10 col-xs-12 col-sm-offset-1 col-md-offset-2 contentHolder">
					<div className="col-md-12 col-sm-12 col-xs-12 heading" >
						<p className="setHeader">Sign Up as Job Seeker</p>
					</div>
					<div className="col-md-12 col-sm-12 col-xs-12">
						<p className="stepFont">Step</p>
						<ul className="step noLRPadding">
							<li>
								<button onClick={() => browserHistory.push('/signup_jobseeker1')}>1</button>
							</li>
							<li className="marginLeft-25">
								<button className="activated">2</button>
							</li>
							<li className="marginLeft-25">
								<button onClick={() => browserHistory.push('/signup_jobseeker3')}>3</button>
							</li>
						</ul>
					</div>
					<div className="col-md-8 col-sm-8 col-xs-10 col-xs-offset-1 col-sm-offset-2 col-md-offset-2 paddingTop-20 paddingBottom-10">
						<p className="formFont">Your Role </p>
						<div className="form-group col-md-12 col-sm-12 col-xs-12 marginBottom-10 ">
							<select
								className="form-control"
								id="sel1" >
								<option value="">Please select</option>
								<option value='Other'>Other</option>
								<option value='C-corp'>Software Engineer</option>
								<option value='S-corp'>Developer</option>
								<option value='B-corp'>Electrical Engineer</option>
								<option value='LLC'>Sales Manager</option>
							</select>
						</div>
						<p className="formFont">Your Professional Experience </p>
						<div className="form-group col-md-12 col-sm-12 col-xs-12 marginBottom-10 ">
							<select
								className="form-control"
								id="sel1" >
								<option value="">Please select</option>
								<option value='Other'>2016</option>
								<option value='C-corp'>2015</option>
								<option value='S-corp'>2014</option>
								<option value='B-corp'>2013</option>
								<option value='LLC'>2012</option>
							</select>
						</div>
						<p className="formFont">Job Type </p>
						<div className="form-group col-md-12 col-sm-12 col-xs-12 marginBottom-10 ">
							<select
								className="form-control"
								id="sel1" >
								<option value="">Please select</option>
								<option value='Other'>2016</option>
								<option value='C-corp'>2015</option>
								<option value='S-corp'>2014</option>
								<option value='B-corp'>2013</option>
								<option value='LLC'>2012</option>
							</select>
						</div>
						<p className="formFont">Desired Annual Salary </p>
						<div className="form-group col-md-12 col-sm-12 col-xs-12 marginBottom-10 ">
							<select
								className="form-control"
								id="sel1" >
								<option value="">Please select</option>
								<option value='Other'>less than 100k</option>
								<option value='C-corp'>100k-200k</option>
								<option value='S-corp'>200k-300k</option>
								<option value='B-corp'>300k-400k</option>
								<option value='LLC'>more than 400k</option>
							</select>
						</div>
						<p className="formFont marginBottom-5">Work Authorization </p>
						<p className="marginLeft-15">Are you legally authorized to work in the India?</p>
						<div className="checkbox col-md-12 col-sm-12 col-xs-12 noMarginTop marginBottom-10">
							<input
								type="radio"
								name="legal"
								value="Yes"
								defaultChecked
								className="marginRight-10" /> Yes
							<input
								type="radio"
								name="legal"
								value="No"
								className="marginLeft-50 marginRight-10" /> No
						</div>
						<p className="formFont marginBottom-5">Recruiters </p>
						<p className="marginLeft-15">Are you open to hearing about opportunities from outside  recruiters  or agencies?</p>
						<div className="checkbox col-md-12 col-sm-12 col-xs-12 noMarginTop marginBottom-10">
							<input
								type="radio"
								name="oppo"
								value="Yes"
								defaultChecked
								className="marginRight-10" /> Yes
							<input
								type="radio"
								name="oppo"
								value="No"
								className="marginLeft-50 marginRight-10" /> No
						</div>
					</div>
					<div className="col-md-8 col-sm-8 col-xs-12 col-sm-offset-2 col-md-offset-2 textCenter marginTB-25">
						<button
							className="btn btn-success setReady"
							onClick={() => browserHistory.push('/signup_jobseeker1')}>
							Previous
						</button>
						<button
							className="btn btn-success marginLeft-20 setReady addPadding"
							onClick={() => browserHistory.push('/signup_jobseeker3')}>
							Next
						</button>
					</div>
				</div>
			</div>
		);

	}
}

export default signUpJobSeeker2;