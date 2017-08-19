import React from 'react';
import './css/signup_entreprenuer.less';
import Trust from './components/investor_trust';
import Firm from './components/investor_firm';
import { browserHistory } from 'react-router';

class signUpInvestor2 extends React.Component {
	constructor() {
		super();

		this.state = {
			orgName: 'trust'
		}
	}

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
								<button onClick={() => browserHistory.push('/signup_investor1')}>1</button>
							</li>
							<li className="marginLeft-25">
								<button className="activated">2</button>
							</li>
							<li className="marginLeft-25">
								<button onClick={() => browserHistory.push('/signup_investor3')}>3</button>
							</li>
						</ul>
					</div>
					<div className="col-md-8 col-sm-8 col-xs-10 col-xs-offset-1 col-sm-offset-2 col-md-offset-2 paddingTop-20 paddingBottom-10">
						<p className="formFont">Select Organization</p>
						<div className="col-md-12 col-sm-12 col-xs-12 displayFlex marginBottom-10">
							<input
								type="radio"
								name="group1"
								value="trust"
								className="marginRight-10"
								onClick={() => this.setState({ orgName: 'trust' })}
								defaultChecked /> Trust
							<input
								type="radio"
								name="group1"
								value="firm"
								className="marginLeft-50 marginRight-10"
								onClick={() => this.setState({ orgName: 'firm' })} /> Firm

						</div>
						{/* <!----------this diff section will display when user choose organisation------------->  */}
						{this.state.orgName === 'trust' && <Trust />}
						{this.state.orgName === 'firm' && <Firm />}
					</div>
					<div className="col-md-8 col-sm-8 col-xs-12 col-sm-offset-2 col-md-offset-2 textCenter marginTB-25">
						<button
							className="btn btn-success setReady"
							onClick={() => browserHistory.push('/signup_investor1')}>
							Previous
						</button>
						<button
							className="btn btn-success marginLeft-20 setReady addPadding"
							onClick={() => browserHistory.push('/signup_investor3')}>
							Next
						</button>
					</div>
				</div>
			</div>
		);

	}
}

export default signUpInvestor2;