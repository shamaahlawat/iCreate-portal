import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import { Accordion, Panel, PageHeader, PanelGroup, ListGroup, ListGroupItem } from 'react-bootstrap';
import './css/signup.less';

class SignUp extends Component {
	render() {
		return (

			<div className="col-xs-12 col-md -12 col-sm-12 SignUpSection noLRPadding " style={{ background: '#f2f2f2' }}>
				<div className="col-md-8 col-sm-10 col-sm-offset-1 col-md-offset-2 ">
					<div className="col-md-12 col-sm-12 marginTop noLRPadding" >
						<p className="setHeaderFont">
							Join the Global Platform for Startup Investing
							</p>
						<p className="textCenter setFontColor fontSize">Select your role</p>
					</div>
					<div className="col-md-8 col-md-offset-2  col-sm-8 col-sm-offset-2 noLRPadding marginTB bg-color padding-5">
						<Accordion className="noMarginBottom">
							<Panel header={
								<div className="setRoleFont">I am Entrepreneur</div>
							} eventKey="1" className="textCenter noMarginTop">
								<ListGroup>
									<ListGroupItem href="#">Link 1</ListGroupItem>
									<ListGroupItem href="#">Link 2</ListGroupItem>
									<ListGroupItem href="#">Link 3</ListGroupItem>
								</ListGroup>
							</Panel>
							<Panel header={
								<div className="setRoleFont">I am an Investor</div>
							} eventKey="2" className="textCenter noMarginTop">
								<ListGroup>
									<ListGroupItem href="#">I belong to Investment Organization</ListGroupItem>
									<ListGroupItem href="#">I manage an Acceletor Program</ListGroupItem>
									<ListGroupItem href="#">I am an Individual Investor</ListGroupItem>
								</ListGroup>
							</Panel>
							<Panel header={
								<div className="setRoleFont">I am looking for a job in startup</div>
							} eventKey="3" className="textCenter noMarginTop">
								<ListGroup>
									<ListGroupItem href="#">Link 1</ListGroupItem>
									<ListGroupItem href="#">Link 2</ListGroupItem>
									<ListGroupItem href="#">Link 3</ListGroupItem>
								</ListGroup>
							</Panel>
							<Panel header={
								<div className="setRoleFont">I provide B2B solutions</div>
							} eventKey="4" className="textCenter noMarginTop">
								<ListGroup>
									<ListGroupItem href="#">Link 1</ListGroupItem>
									<ListGroupItem href="#">Link 2</ListGroupItem>
									<ListGroupItem href="#">Link 3</ListGroupItem>
								</ListGroup>
							</Panel>
						</Accordion>
					</div>
				</div>
			</div>
		)
	}
}

export default SignUp;