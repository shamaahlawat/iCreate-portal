import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import { Accordion, Panel, PageHeader, PanelGroup, ListGroup, ListGroupItem } from 'react-bootstrap';
import './css/signup_entreprenuer.less';

class SignUpEntreprenuer2 extends Component {
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
								<a href="/signup1" >1</a>
							</li>
							<li className="marginLeft-25">
								<a href="/signup2">2</a>
							</li>
						</ul>
					</div>
					<div className="col-md-8 col-sm-8 col-xs-8 col-xs-offset-2 col-sm-offset-2 col-md-offset-2 paddingTop-20 paddingBottom-10">
						{/* <p className="formFont">Name</p> */}

						<p className="formFont">What's your startup's name? (You can change this at any time.)</p>
						<div className="col-md-12 col-sm-12 col-xs-12 marginBottom-10 ">
							<input type="text" className="form-control" placeholder="Enter Name"></input>
						</div>
						<p className="formFont">Is your startup incorporated? </p>
						<div className="form-group col-md-12 col-sm-12 col-xs-12 marginBottom-10 ">
							<select className="form-control" id="sel1">
								<option selected disabled>Please select</option>
								<option>Select 1</option>
								<option>Select 2</option>
								<option>Select 3</option>
								<option>Select 4</option>
							</select>
						</div>
						<p className="formFont">Where is your startup located?
							(Please indicate the city your startup is located in.)  </p>
						<div className="form-group col-md-12 col-sm-12 col-xs-12 marginBottom-10 ">
							<select className="form-control" id="sel2">
								<option  selected disabled>Please select</option>
								<option>Ahmedabad</option>
								<option>Gurgaon</option>
								<option>New Delhi</option>
								<option>Noida</option>
							</select>
						</div>
						<div className="checkbox col-md-12 col-sm-12 col-xs-12 marginBottom-10">
							<label className="setCheckbox"><input type="checkbox" value=" " />By Clicking you are agree with our Terms and Conditions</label>

						</div>
					</div>
					<div className="col-md-8 col-sm-8 col-xs-12 col-sm-offset-2 col-md-offset-2 textCenter marginTop-10">
						<button className="btn btn-success setNext marginTB-25">Next</button>
					</div>
				</div>
			</div>
		)
	}
}

export default SignUpEntreprenuer2;