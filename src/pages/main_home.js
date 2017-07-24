import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import { ButtonToolbar, Button } from 'react-bootstrap';

import NavLink from './components/_navlinks.js';
// import './css/page1.less';
import './css/main_home.less';
import Page1a from './page1a';

class MainHome extends Component {
    render() {
        return (
            <div className="fluid-container">
                <nav className="navbar ">
                    <div className="container-fluid nav-align">
                        <div className="navbar-header">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                            </div>
                            <a className="navbar-brand"> <img src="../assets/images/logo.png" alt=" not found "></img> </a>
                        </div>
                        <ul className="nav navbar-nav navbar-right  ">
                            <li className="background"><a href="#">Home</a></li>
                            <li><a href="#">Sign In</a></li>
                            <li><a href="#">Sign Up</a></li>
                        </ul>
                    </div>
                </nav>

                <div className="col-md-12 section startupPortal">
                    <div className="col-xs-12 col-md-10 col-md-offset-1">
                        <div className=" col-xs-12 col-md-12 portal">
                            <h1> Startup Ecosystem Portal </h1>
                            <p col-md-4 >{"This is a paragraph, lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  industry's standard dummy text ever since the 1500s. "}</p>
                        </div>
                        <div className="col-xs-12 col-md-12 chooseStartup">
                            <div className="col-md-3 col-md-offset-1 decription">

                                <h3>
                                    <img src="../assets/images/startup .png" alt=" not defined"></img> Startup </h3>
                                <div className="aboutStartups">
                                    Build a profile and share it with investors to get funding.
                        </div>
                            </div>
                            <div className=" col-md-3 col-md-offset-1 decription">

                                <h3> <img src="../assets/images/growth-1 .png" alt=" not defined"></img>For Investor </h3>
                                <div className="aboutStartups">
                                    Access powerful deal flow management tools on a secure platform.
                        </div>
                            </div>
                            <div className=" col-md-3 col-md-offset-1 decription">

                                <h3><img src="../assets/images/speedometer .png" alt=" not defined"></img> for Accelators </h3>
                                <div className="aboutStartups">
                                    Increase applications, manage the application process, and make your cohorts happy.
                        </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-8 col-md-offset-2  chooseStartup2">
                            <div className=" description">

                                <h3> <img src="../assets/images/brainstorming.png" alt=" not defined"></img> For Talents </h3>
                                <div className="aboutStartups">
                                    Apply privately to 66,932 startup jobs with one application. No middlemen · See salary and equity upfront.
                        </div>
                            </div>
                            <div className="  description">

                                <h3> <img src="../assets/images/handshake1.png" alt="not defined"></img> For Markets </h3>
                                <div className="aboutStartups">
                                    An Indian e-portal that provides B2C, B2B and customer to customer sales services via web portal.
                        </div>
                            </div>

                        </div>

                    </div>
                </div>

                <div className="col-md-12 section featureDetailContainer">
                    <div className="col-xs-12 col-md-10 col-md-offset-1">
                        <div className="col-xs-12 col-md-12 textDetailsContainer">
                            All the features details
                </div>
                        <div className="col-xs-12 col-md-12 jumbotron imageDetailsContainer">

                            <div className="col-xs-12 col-md-10 col-md-offset-1 columnAlign">
                                <div className="  image1">
                                    <img src="../assets/images/search.png" alt="not found"></img>
                                </div>
                                <div className=" text">
                                    Search
                        </div>
                                <div className="  defineText"><p> hello  icreate  website </p>

                                </div>
                            </div>

                            <div className=" col-xs-12 columnAlign">
                                <div className="  image2">
                                    <img src="../assets/images/post.png" alt="not found"></img>
                                </div>
                                <div className="text">
                                    <b style={{ textAlign: "centre" }}> post</b>
                                </div>
                                <div className="defineText"><p> hello  icreate  website </p>

                                </div>
                            </div>

                            <div className="col-xs-12  columnAlign">
                                <div className="  image3">
                                    <img src="../assets/images/chat.png" alt=" not found"></img>
                                </div>
                                <div className="  text">
                                    <b> chat</b>
                                </div>
                                <div className="  defineText"><p> hello  icreate  website </p>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-12 section aboutIcreate">

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
                                <img src="../assets/images/icreate.png" alt=" not found "></img>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="col-md-12 section">
                    <div className="col-xs-12 col-md-8 col-md-offset-2">
                        <ul>
                            <li><img src="../assets/images/sstar.png" alt=" not defined "></img>Basecamp</li>
                            <li><img src="../assets/images/sstar.png" alt=" not defined "></img>grubHub</li>
                            <li><img src="../assets/images/sstar.png" alt="not defined "></img>Trello</li>
                            <li><img src="../assets/images/sstar.png" alt=" not defined "></img>buffer</li>
                            <li><img src="../assets/images/sstar.png" alt=" not defined "></img>pocket</li>
                        </ul>
                    </div>
                </div>

                <div className="col-md-12 section deliverHappiness">
                    <div className="col-xs-12 col-md-10 col-md-offset-1">
                        <div className="col-md-12 happinesstext">
                            <h2> Great Products Deliver Happiness to Users</h2>
                        </div>
                        <div className="col-xs-12 col-md-12 " style={{ textAlign: "center" }}>
                            <button type="button " className="btn btn-secondary auto-lr-margin" style={{ backgroundColor: "#57b751", color: "white" }} >Get Started</button>
                        </div>
                    </div>
                </div>


            </div >
        )
    }
}

export default MainHome;