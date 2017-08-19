import React from 'react';
import '../css/signup_entreprenuer.less';
import Autocomplete from 'react-google-autocomplete';

class Trust extends React.Component {
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
			<div className="col-md-12 col-sm-12 col-xs-12 noLRPadding">
				<p className="formFont">What is the legal name of your firm?</p>
				<div className="col-md-12 col-sm-12 col-xs-12 marginBottom-10 ">
					<input
						type="text"
						className="form-control"
						placeholder="Enter Firm Name" />
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

				{/* {console.log(this.state.isInvested)} */}
				{this.state.isInvested === 'yes' &&
					<div className="col-md-12 col-sm-12 col-xs-12 noLRPadding marginBottom-20" >
						<p className="formFont">Which of the following ways have you invested previously?</p>
						<div className="col-md-12 col-sm-12 col-xs-12  marginBottom-10">
							<div className="displayFlex">
								<input
									type="radio"
									name="prev"
									value="Directly into a startup"
									defaultChecked />
								<p className="setMarginLeft">Directly into a startup</p>
							</div>
							<div className="displayFlex">
								<input
									type="radio"
								    name="prev"
									value="As an LP in a VC fund" />
								<p className="setMarginLeft">As an LP in a VC fund</p>
							</div>
							<div className="displayFlex">
								<input
									type="radio"
								    name="prev"
									value="In the public markets" />
								<p className="setMarginLeft">In the public markets</p>
							</div>
							<div className="displayFlex">
								<input
									type="radio"
								    name="prev"
									value="Into a single-deal SPV" />
								<p className="setMarginLeft">Into a single-deal SPV</p>
							</div>
						</div>
						<p className="formFont">Other than investing, in what ways have you helped a startup?</p>
						<div className="col-md-12 col-sm-12 col-xs-12  marginBottom-10">
							<div className="displayFlex">
								<input
									type="radio"
									name="group3"
									value="Recruiting"
									defaultChecked />
								<p className="setMarginLeft">Recruiting</p>
							</div>
							<div className="displayFlex">
								<input
									type="radio"
									name="group3"
									value="Product / Strategy" />
								<p className="setMarginLeft">Product / Strategy</p>
							</div>
							<div className="displayFlex">
								<input
									type="radio"
									name="group3"
									value="Marketing" />
								<p className="setMarginLeft">Marketing</p>
							</div>
							<div className="displayFlex">
								<input
									type="radio"
									name="group3"
									value="Connect with customers or partners" />
								<p className="setMarginLeft">Connect with customers or partners</p>
							</div>
						</div>
					</div>
				}

			</div>
		);
	}
}

export default Trust;