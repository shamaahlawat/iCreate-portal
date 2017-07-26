import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import './css/footer.less';

class FooterContainer extends Component {
	render() {
		return (
			<Flexbox className="FooterContainer noLRPadding">
				<div className="col-md-12 col-sm-12 col-xs-12 marginTop-25 footer-bg">

					<div className="col-md-4 col-sm-8 col-xs-10 col-xs-offset-1 col-sm-offset-2 col-md-offset-4 noLRPadding" >
						<div className="col-md-12 col-sm-12 col-xs-12 noLRPadding marginTop-25">
							<div className="col-md-3 col-sm-3 col-xs-3 noLRPadding">
								<img src="../assets/images/f2.png" className="img-responsive margin-top-bottom set-footer-icon" alt="iCreate icon" />
							</div>
							<div className="col-md-9 col-sm-9 col-xs-9 noPaddingRight top-padding-10">
								<p className="set-opacity footer-icon-font">This web portal created by icreate
							(International Centre for Entrepreneurship and Technology).</p>
							</div>
						</div>
						<div className="col-md-12 col-sm-12 col-xs-12 noLRPadding" >
							<ul className="footer_social_icon noLRPadding" >
								<li><a target="_blank" href="http://facebook.com" >
									<i className="fa fa-facebook" style={{ fontSize: 20, color: 'white' }}></i>
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
						<div className="col-md-12 col-sm-12 col-xs-12 noLRPadding marginTop-25 tb-padding-20 bottom-margin-10">
							<ul className="footer-list noLRPadding">
								<li><a href="#" className="set-opacity footer-terms-font">FAQ</a></li>
								<li><a href="#" className="set-opacity footer-terms-font">Contact Us</a></li>
								<li><a href="#" className="set-opacity footer-terms-font">Privacy Policy</a></li>
								<li><a href="#" className="set-opacity footer-terms-font">Terms of Services</a></li>
							</ul>
						</div>
					</div>
				</div>
			</Flexbox>
		)
	}
}

export default FooterContainer;