import React, { Component } from 'react';
import './css/search.less';
import * as pageActions from '../redux/actions/page_actions';
import * as searchActions from '../redux/actions/search_actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Autocomplete from 'react-google-autocomplete';

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(Object.assign({}, pageActions, searchActions), dispatch)
	};
};

function mapStateToProps(state) {
	return {
		search_details: state.search_details
	};
};


class Search extends Component {
	constructor() {
		super();
		this.showMoreTypes = this.showMoreTypes.bind(this);
		this.showMoreIndustries = this.showMoreIndustries.bind(this);
		this.state = {
			investorTypesToShow: 2,
			investorTypesExpanded: false,
			industriesToShow: 4,
			industriesExpended: false
		}

	}

	componentWillMount() {
		this.props.actions.pageChanged('search');
		this.props.actions.fetchIndustriesDetails();
		this.props.actions.fetchInvestorTypes();
	}

	showMoreTypes() {
		this.state.investorTypesToShow === 2 ? (
			this.setState({
				investorTypesToShow: this.props.search_details.investor_types.length,
				investorTypesExpanded: true
			})
		) : (
				this.setState({
					investorTypesToShow: 2,
					investorTypesExpanded: false
				})
			)
	}

	showMoreIndustries() {
		this.state.industriesToShow === 4 ? (
			this.setState({
				industriesToShow: this.props.search_details.industries.length,
				industriesExpanded: true
			})
		) : (
				this.setState({
					industriesToShow: 4,
					industriesExpanded: false
				})
			)
	}

	render() {
		return (
			<div className="SearchContainer container-fluid noLRPadding" >

				<div className="col-md-10 col-md-offset-1 bg-color bottom-margin-20" >
					<div className="row">
						<div className="col-md-4 bg-color">

							<div className="col-md-12 no-lr-padding">
								<h4 className="left-header"> Search</h4><hr />
								<ul className="no-list-style no-lr-padding">
									<li className="left-header-search-list"><a href="#" className="list-font">Investers</a></li>
									<li className="left-header-search-list"><a href="#" className="list-font">Programs</a></li>
									<li className="left-header-search-list"><a href="#" className="list-font">Talent</a></li>
									<li className="left-header-search-list"><a href="#" className="list-font">B2B Requirement</a></li>
								</ul>
								<hr />
								<p className="keyword-font">KEYWORD</p>

								<div className="input-group top-margin-12 bottom-margin-20">
									<input type="text" className="form-control" placeholder="Enter Keyword"></input>
									<div className="input-group-btn">
										<button className="btn btn-default" type="submit">
											<span className="glyphicon glyphicon-search"></span>
										</button>
									</div>
								</div>

								<p className="keyword-font">LOCATION</p>

								<Autocomplete
									className="form-control top-margin-12 bottom-margin-20"
									onPlaceSelected={(place) => this.selectLocation(place)}
									types={['(regions)']} />
							</div>


							<div className="col-md-12 no-lr-padding">
								<p className="keyword-font">APPLICATION STATUS</p>

							</div>
							<div className="col-md-12 no-lr-padding">
								<p className="keyword-font">INVESTOR TYPE</p>
								<ul className="noPaddingLeft">
									{
										this.props.search_details.investor_types.slice(0, this.state.investorTypesToShow).map((type) => {
											return (
												<li key={type.id} className="setIndustries">
													<p><input type="checkbox" /><span className="industry">{type.name}</span></p>
												</li>);
										})
									}
								</ul>
								<a className="showMore" onClick={this.showMoreTypes}>
									{this.state.investorTypesExpanded ? (<span>Show less</span>) : (<span>+{this.props.search_details.investor_types.length - 2} more</span>)}
								</a>
							</div>
							<div className="col-md-12 marginTop-15 no-lr-padding">
								<p className="keyword-font">INDUSTRY</p>
								<ul className="noPaddingLeft">
									{
										this.props.search_details.industries.slice(0, this.state.industriesToShow).map((industry) => {
											return (
												<li key={industry.id} className="setIndustries">
													<p><input type="checkbox" /><span className="industry">{industry.name}</span></p>
												</li>);
										})
									}
								</ul>
								<a className="showMore" onClick={this.showMoreIndustries}>
									{this.state.industriesExpanded ? (<span>Show less</span>) : (<span>+{this.props.search_details.industries.length - 4} more</span>)}
								</a>
							</div>
						</div>


						<div className="col-md-7 col-md-offset-1">
							{/* <!--------------------PAGINATION SECTION--------------------------> */}
							<div className="col-md-12 col-sm-12 col-xs-12 bottom-border no-lr-padding">
								<ul className="pagination set-pagination ">
									<li><a href="#" className="set-pagination-list">1</a></li>
									<li><a href="#" className="set-pagination-list">2</a></li>
									<li><a href="#" className="set-pagination-list">3</a></li>
								</ul>
							</div>
							{/* <!--------------------Right Content Section------------------------> */}
							<div className="col-md-12 no-lr-padding">
								<ul className="no-list-style no-lr-padding">

									<li>
										{/* <!--------------------Each Card----------------------> */}
										<div className="col-md-12 col-sm-12 col-xs-12 no-lr-padding tb-padding-20 bottom-border">
											{/* <!--------------------Left Card--------------------> */}
											<div className="col-md-8 col-sm-12 col-xs-12 no-lr-padding">
												<div className="col-md-3 col-sm-3 col-xs-3 no-lr-padding">
													<img src="../assets/images/blue.jpg" alt="profile pic" className="img-resposive img-rounded set-content-pic" />
												</div>
												<div className="col-md-9 col-sm-9 col-xs-9 no-lr-padding">
													<p className="content-title no-tb-margin">INSEAD Business Angels Alumni France</p>
													<p> Paris, IDF, France · Aerospace, Biotechnology, Business Products</p>
												</div>
											</div>
											{/* <!--------------------Right Button Section--------------------> */}
											<div className="col-md-4 col-sm-12 col-xs-12 no-lr-padding">
												<button type="button" className="btn btn-default set-button">CONNECT</button>
											</div>
										</div>
									</li>
									<li>
										{/* <!--------------------Each Card----------------------> */}
										<div className="col-md-12 col-sm-12 col-xs-12 no-lr-padding tb-padding-20 bottom-border">
											{/* <!--------------------Left Card--------------------> */}
											<div className="col-md-8 col-sm-12 col-xs-12 no-lr-padding">
												<div className="col-md-3 col-sm-3 col-xs-3 no-lr-padding">
													<img src="../assets/images/blue.jpg" alt="profile pic" className="img-resposive img-rounded set-content-pic" />
												</div>
												<div className="col-md-9 col-sm-9 col-xs-9 no-lr-padding">
													<p className="content-title no-tb-margin">INSEAD Business Angels Alumni France</p>
													<p> Paris, IDF, France · Aerospace, Biotechnology, Business Products</p>
												</div>
											</div>
											{/* <!--------------------Right Button Section--------------------> */}
											<div className="col-md-4 col-sm-12 col-xs-12 no-lr-padding">
												<button type="button" className="btn btn-default set-button">CONNECT</button>
											</div>
										</div>
									</li>
									<li>
										{/* <!--------------------Each Card----------------------> */}
										<div className="col-md-12 col-sm-12 col-xs-12 no-lr-padding tb-padding-20 bottom-border">
											{/* <!--------------------Left Card--------------------> */}
											<div className="col-md-8 col-sm-12 col-xs-12 no-lr-padding">
												<div className="col-md-3 col-sm-3 col-xs-3 no-lr-padding">
													<img src="../assets/images/icon_3.png" alt="profile pic" className="img-resposive img-rounded set-content-pic" />
												</div>
												<div className="col-md-9 col-sm-9 col-xs-9 no-lr-padding">
													<p className="content-title no-tb-margin">INSEAD Business Angels Alumni France</p>
													<p> Paris, IDF, France · Aerospace, Biotechnology, Business Products</p>
												</div>
											</div>
											{/* <!--------------------Right Button Section--------------------> */}
											<div className="col-md-4 col-sm-12 col-xs-12 no-lr-padding">
												<button type="button" className="btn btn-default set-button">CONNECT</button>
											</div>
										</div>
									</li>
									<li>
										{/* <!--------------------Each Card----------------------> */}
										<div className="col-md-12 col-sm-12 col-xs-12 no-lr-padding tb-padding-20 bottom-border">
											{/* <!--------------------Left Card--------------------> */}
											<div className="col-md-8 col-sm-12 col-xs-12 no-lr-padding">
												<div className="col-md-3 col-sm-3 col-xs-3 no-lr-padding">
													<img src="../assets/images/icon_3.png" alt="profile pic" className="img-resposive img-rounded set-content-pic" />
												</div>
												<div className="col-md-9 col-sm-9 col-xs-9 no-lr-padding">
													<p className="content-title no-tb-margin">INSEAD Business Angels Alumni France</p>
													<p> Paris, IDF, France · Aerospace, Biotechnology, Business Products</p>
												</div>
											</div>
											{/* <!--------------------Right Button Section--------------------> */}
											<div className="col-md-4 col-sm-12 col-xs-12 no-lr-padding">
												<button type="button" className="btn btn-default set-button">CONNECT</button>
											</div>
										</div>
									</li>
									<li>
										{/* <!--------------------Each Card----------------------> */}
										<div className="col-md-12 col-sm-12 col-xs-12 no-lr-padding tb-padding-20 bottom-border">
											{/* <!--------------------Left Card--------------------> */}
											<div className="col-md-8 col-sm-12 col-xs-12 no-lr-padding">
												<div className="col-md-3 col-sm-3 col-xs-3 no-lr-padding">
													<img src="../assets/images/icon_3.png" alt="profile pic" className="img-resposive img-rounded set-content-pic" />
												</div>
												<div className="col-md-9 col-sm-9 col-xs-9 no-lr-padding">
													<p className="content-title no-tb-margin">INSEAD Business Angels Alumni France</p>
													<p> Paris, IDF, France · Aerospace, Biotechnology, Business Products</p>
												</div>
											</div>
											{/* <!--------------------Right Button Section--------------------> */}
											<div className="col-md-4 col-sm-12 col-xs-12 no-lr-padding">
												<button type="button" className="btn btn-default set-button">CONNECT</button>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>


			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Search);
