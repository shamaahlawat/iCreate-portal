import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import { ButtonToolbar, Button } from 'react-bootstrap';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import NavLink from './components/_navlinks.js';
// import './css/page1.less';
import './css/main_home.less';
import Page1a from './page1a';
import './css/app_header.less';



class MainHome extends Component {
    render() {
        return (
            <div className="fluid-container mainHome">

                <div className=" col-xs-12 col-md-12 startupEcosystem ">
                    <div className="col-xs-12 col-md-10 col-md-offset-1">
                        <div className="col-xs-12 subEco">
                            <h1> Startup Ecosystem Portal </h1>
                            <p className="col-md-6 col-md-offset-3">This is a paragraph, lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                        <div className="col-xs-12 col-md-12 subSection">
                            <div className="col-xs-12 col-md-4 subDescription">
                                <img src="../assets/images/startup.png" alt=" not defined"></img>
                                <div className="main">
                                    <h3>For Startup </h3>
                                    <p>Build a profile and share it with investors to get funding.</p>
                                </div>
                            </div>
                            <div className="col-xs-12 col-md-4 subDescription">
                                <img src="../assets/images/growth-1.png" alt=" not defined"></img>
                                <div className="main">
                                    <h3>For Investor </h3>
                                    <p>Build a profile and share it with investors to get funding.</p>
                                </div>
                            </div>
                            <div className="col-xs-12 col-md-4 subDescription">
                                <img src="../assets/images/speedometer .png" alt=" not defined"></img>
                                <div className="main">
                                    <h3>For Accelators </h3>
                                    <p>Build a profile and share it with investors to get funding.</p>
                                </div>
                            </div>
                            <div className="col-xs-12 col-md-4 subDescription">
                                <img className="col-md-2" style={{ padding: 0 }} src="../assets/images/brainstorming.png" alt=" not defined"></img>
                                <div className="main">
                                    <h3>For Talent </h3>
                                    <p>Build a profile and share it with investors to get funding.</p>
                                </div>
                            </div>
                            <div className="col-xs-12 col-md-4 subDescription">
                                <img src="../assets/images/handshake1.png" alt=" not defined"></img>
                                <div className="main">
                                    <h3>For Market </h3>
                                    <p>Build a profile and share it with investors to get funding.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-md-12 section featureDetailContainer">
                    <div className="col-xs-12 col-md-10 col-md-offset-1">
                        <div className="col-xs-12 col-md-12 textDetailsContainer">
                            All the features details
                        </div>
                        <div className="col-xs-12 col-md-12 imageDetailsContainer">
                            <div className=" columnAlign">
                                <div className="  image1">
                                    <img src="../assets/images/search.png" alt="not found"></img>
                                </div>
                                <div className=" text">
                                    <h5> Search</h5>
                                    <p>  iCreate </p>

                                </div>
                            </div>

                            <div className="columnAlign">
                                <div className="  image2">
                                    <img src="../assets/images/post.png" alt="not found"></img>
                                </div>
                                <div className="text">
                                    <h5> post</h5>
                                    <p> iCreate </p>
                                </div>

                            </div>

                            <div className="columnAlign">
                                <div className="  image3">
                                    <img src="../assets/images/chat.png" alt=" not found"></img>
                                </div>
                                <div className="  text">
                                    <h5> chat </h5>
                                    <p> iCreate </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-md-12 section aboutIcreate">

                    <div className="col-xs-12 col-md-10 col-md-offset-1 mainSubIcreate">
                        <div className="col-xs-12 col-md-4 subAboutIcreate">
                            <div className="col-xs-12 icreateMission child1">
                                <h2> Mission </h2>
                                <p> icreate is an independent centre and facilitates "Next Generation Entrepreneurship" that blends creativity,
                            innovation, engineering, product design and leverages emerging technologies to evolve out-of-the-box
                            applications.
                        </p>
                            </div>
                            <div className="col-xs-12 icreateMission child2">
                                <h2> Vision </h2>
                                <p> icreate is an independent centre and facilitates "Next Generation Entrepreneurship" that blends creativity,
                            innovation, engineering, product design and leverages emerging technologies to evolve out-of-the-box
                            applications.
                        </p>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-8 logoDivision">
                            <div className="icreateLogo">
                                <img src="../assets/images/mission.png" alt=" not found "></img>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-md-12 col-xs-12 session">
                    <div className="col-xs-12 col-md-10 col-md-offset-1">
                        <div className="companiesAdvertisment">
                            <div className="companyName">
                                Basecamp
                        </div>

                            <div className="companyName">
                                Basecamp
                       </div>
                            <div className="companyName">
                                Basecamp
                       </div>
                            <div className="companyName">
                                Basecamp
                       </div>

                        </div>
                    </div>
                </div>
                {/* <div className="col-md-12 section">
                    <div className="col-xs-12 col-md-6 col-md-offset-3">
                        <ul className="col-xs-12">
                            <li  ><img src="../assets/images/sstar.png" alt=" not defined "></img>Basecamp</li>
                            <li ><img src="../assets/images/sstar.png" alt=" not defined "></img>grubHub</li>
                            <li ><img src="../assets/images/sstar.png" alt="not defined "></img>Trello</li>
                            <li ><img src="../assets/images/sstar.png" alt="not defined "></img>Trello</li>
                            <li ><img src="../assets/images/sstar.png" alt="not defined "></img>Trello</li>

                        </ul>
                    </div>
                </div> */}
                <div className="col-xs-12 col-md-12 section deliverHappiness">
                    <div className="col-xs-12 col-md-10 col-md-offset-1">
                        <div className="col-xs-12 col-md-12 happinesstext">
                            <h5> Great Products Deliver Happiness to Users</h5>
                        </div>
                        <div className="col-xs-12 col-md-12 " style={{ textAlign: "center" }}>
                            <button type="button " className="btn btn-secondary auto-lr-margin" style={{ backgroundColor: "#57b751", color: "white" }} >Get Started</button>
                        </div>
                    </div>
                </div >
            </div>

        )
    }
}

export default MainHome;


// WEBPACK FOOTER //
// src/pages/main_home.js