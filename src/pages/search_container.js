import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import './css/search.less';
//import './css/footer.less';

class SearchContainer extends Component {
	render() {
		return (
			<div className="SearchContainer container-fluid noLRPadding" >
				{/* <!----------------------------Navbar Section----------------------------------> 
				<nav className="navbar navbar-bg nav-height no-bottom-margin">
					<div className="col-md-10 col-md-offset-1">
						<div className="navbar-header">
							<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
							<a href="#">
								<img src="../assets/images/icon_2.png" className="img-responsive margin-top-bottom" alt="iCreate icon" width="83px" height="62px" />
							</a>
						</div>

						<div className="collapse navbar-collapse" id="myNavbar">
							<ul className="nav navbar-nav navbar-right">
								<li><a href="#" className="nav-height no-padding">Home</a></li>
								<li><a href="#" className="nav-height no-padding ">Search</a></li>
								<li><a href="#" className="nav-height no-padding">Connection</a></li>
								<li className="dropdown">
									<a href="#" className="nav-height no-padding dropdown-toggle" data-toggle="dropdown">
										<img src="../assets/images/profile.jpg" alt="profile pic" className="img-resposive img-circle set-profile-pic" /> &nbsp; Vivek Vaibhav &nbsp;
									<span className="caret" > </span>
									</a>
									<ul className="dropdown-menu">
										<li><a href="#"><span className="glyphicon glyphicon-log-out"></span> Sign Up</a></li>
										<li><a href="#"><span className="glyphicon glyphicon-cog"></span> Setting</a></li>
										<li><a href="#"><span className="glyphicon glyphicon-earphone"></span> Contact Us</a></li>
									</ul>
								</li>
							</ul>
						</div>
					</div>
				</nav>
*/}

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
								<input id="location" type="text" className="form-control top-margin-12 bottom-margin-20" name="email">
								</input>
							</div>


							<div className="col-md-12 no-lr-padding">
								<p className="keyword-font">APPLICATION STATUS</p>

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
													<img src="../assets/images/vivek.jpg" alt="profile pic" className="img-resposive img-rounded set-content-pic" />
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
													<img src="../assets/images/vivek.jpg" alt="profile pic" className="img-resposive img-rounded set-content-pic" />
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
													<img src="../assets/images/vivek.jpg" alt="profile pic" className="img-resposive img-rounded set-content-pic" />
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
													<img src="../assets/images/vivek.jpg" alt="profile pic" className="img-resposive img-rounded set-content-pic" />
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
													<img src="../assets/images/vivek.jpg" alt="profile pic" className="img-resposive img-rounded set-content-pic" />
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

				{/* <!----------------------------Footer Section--------------------------------> */}
                {/* <div className="FooterContainer ">
					<div className="col-md-12 col-sm-12 col-xs-12 top-margin-25 footer-bg">

						<div className="col-md-4 col-sm-8 col-xs-10 col-xs-offset-1 col-sm-offset-2 col-md-offset-4 no-lr-padding" >
							<div className="col-md-12 col-sm-12 col-xs-12 no-lr-padding top-margin-25">
								<div className="col-md-3 col-sm-3 col-xs-3 no-lr-padding">
									<img src="../assets/images/f2.png" className="img-responsive margin-top-bottom set-footer-icon" alt="iCreate icon" />
								</div>
								<div className="col-md-9 col-sm-9 col-xs-9 no-right-padding top-padding-10">
									<p className="set-opacity footer-icon-font">This web portal created by icreate
							(International Centre for Entrepreneurship and Technology).</p>
								</div>
							</div>
							<div className="col-md-12 col-sm-12 col-xs-12 no-lr-padding" >
								<ul className="footer_social_icon no-lr-padding" >
									<li><a target="_blank" href="http://facebook.com" >
										<i className="fa fa-facebook" style={{fontSize:20, color:'white'}}></i>
									</a>
									</li>
									<li className="left-margin-40"><a target="_blank" href="http://twitter.com">
										<i className="fa fa-twitter" style={{ fontSize: 20, color: 'white' }}></i>
									</a>
									</li>
									<li className="left-margin-40"><a target="_blank" href="https://www.linkedin.com">
										<i className="fa fa-linkedin" style={{ fontSize: 20, color: 'white' }}></i>
									</a>
									</li>
								</ul>
							</div>
							<div className="col-md-12 col-sm-12 col-xs-12 no-lr-padding top-margin-25 tb-padding-20 bottom-margin-10">
								<ul className="footer-list no-lr-padding">
									<li><a href="#" className="set-opacity footer-terms-font">FAQ</a></li>
									<li><a href="#" className="set-opacity footer-terms-font">Contact Us</a></li>
									<li><a href="#" className="set-opacity footer-terms-font">Privacy Policy</a></li>
									<li><a href="#" className="set-opacity footer-terms-font">Terms of Services</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div> */}
			</div>
		)
	}
}

export default SearchContainer;
