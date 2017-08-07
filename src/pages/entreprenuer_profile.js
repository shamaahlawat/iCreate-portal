import React, { Component } from 'react';
import './css/entreprenuer_profile.less';
class EntreprenuerProfile extends Component {
    render() {
        return (

            <div className="col-md-12 EntreprenuerContent  noMargin noPadding">
                <div className=" col-md-10 col-md-offset-1 noPadding Main_Entreprenuer">
                    <div className=" col-xs-12 col-md-12 timeline">
                        <h4> Comapany Profile </h4>
                        <div className="uploadPic">
                            Upload Cover photo
                        </div>
                        <img src="../assets/images/timeline.png" alt="timeline image" className="col-md-12  noLRPadding" />
                        <div className="col-md-4 wholeProblem">
                            <div className="col-xs-12 col-md-12 problems">
                                <div className="col-md-12 Main">
                                    <div className="col-xs-6 col-xs-offset-3 col-md-6 col-md-offset-3 paddingTop-25">
                                        <img src="..\assets\images\profile_pic.png" alt="profile image" />
                                    </div>
                                    <div className=" col-md-12 col-xs-12 nameSection">
                                        <h4> <b>Shama's Startup</b> </h4>
                                        <p> Describe the problem that you're solving in one sentence </p>
                                    </div>
                                    <div className="col-md-12 col-xs-12 stage noLRPadding" >
                                        <p> Stage</p> <hr />
                                        <div className="col-xs-12 col-md-12 stageContent noLRPadding noTopPadding">
                                            <div className="col-xs-6 col-md-6 left noLRPadding">
                                                Industry
                                </div>
                                            <div className=" col-xs-6 col-md-6 right">
                                                Web Services
                                </div>
                                        </div>
                                        <div className="col-xs-12 col-md-12 stageContent noLRPadding">
                                            <div className=" col-xs-6 col-md-6 left noLRPadding">
                                                Location
                                </div>
                                            <div className=" col-xs-6 col-md-6 right">
                                                Ahmedabad
                                </div>
                                        </div>
                                        <div className="col-xs-12 col-md-12 stageContent noLRPadding">
                                            <div className=" col-xs-6 col-md-6 left noLRPadding" >
                                                Currency
                                </div>
                                            <div className=" col-xs-6 col-md-6 right">
                                                INR
                                </div>
                                        </div>
                                        <div className="col-xs-12 col-md-12 stageContent noLRPadding ">
                                            <div className=" col-xs-6 col-md-6 left noLRPadding" >
                                                Founded
                                </div>
                                            <div className=" col-xs-6 col-md-6 right">
                                                2017
                                </div>
                                        </div>
                                        <div className="col-xs-12 col-md-12 stageContent noLRPadding ">
                                            <div className=" col-xs-6 col-md-6 left noLRPadding">
                                                Employees
                                </div>
                                            <div className="col-xs-6 col-md-6 right" >
                                                200
                                </div>
                                        </div>
                                        <div className="col-xs-12 col-md-12 stageContent noLRPadding ">
                                            <div className=" col-xs-6 col-md-6 left noLRPadding" >
                                                Incorporation Type
                                </div>
                                            <div className=" col-xs-6 col-md-6 right" >
                                                Not Incorporated
                                </div>
                                        </div>
                                        <div className="col-xs-12 col-md-12 stageContent noLRPadding bottomBorder">
                                            <div className=" col-xs-6 col-md-6 left noLRPadding" >
                                                Website
                                </div>
                                            <div className=" col-xs-6 col-md-6 right greenText" >
                                                www.shama.com
                                </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div className="col-xs-12 col-md-12 socialMedia">
                                <div className="mediaText BottomLine fontColor">
                                    Social Media
                         </div>
                                <div className="socialSites">
                                    <i className="fa fa-facebook" style={{ color: "#4c5667", fontSize: "30px", opacity: "0.51" }}></i>
                                    <i className="fa fa-twitter" style={{ color: "#4c5667", fontSize: "30px", opacity: "0.51" }}></i>
                                    <i className="fa fa-instagram" style={{ color: "#4c5667", fontSize: "30px", opacity: "0.51" }}></i>


                                </div>
                            </div>
                            <div className="col-xs-12 col-md-12 tags">
                                <div className="tagText BottomLine fontColor">
                                    Tags
                        </div>
                                <div className="tagsDiv">
                                    <div className="tagsName"> Location </div>
                                    <div className="tagsName"> Location based services </div>
                                    <div className="tagsName"> web services</div>
                                    <div className="tagsName"> nearby </div>
                                    <div className="tagsName"> nearby places </div>
                                    <div className="tagsName"> nearby offers </div>
                                    <div className="tagsName"> sparks </div>
                                    <div className="tagsName"> nearby offers </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-xs-12 col-md-8 Main_one">
                        <div className="col-xs-12 col-md-12  overview   ">

                            <div className="col-xs-12 col-md-12 overviewDetail ">

                                <ul className="listBar col-md-6 col-xs-12  listLeft noMarginBottom">
                                    <li className=" col-md-4 col-xs-12 listBorder" ><a href="#/" >Overview </a></li>
                                    <li className="col-md-4 col-xs-12 listBorder" ><a href="#/" >Pitch Deck </a></li>
                                </ul>

                                <ul className="listBar col-md-5 col-xs-12 listRight noPadding noMargin">
                                    <li className="lightBlue publicAccess" style={{ color: "#0f61ab" }}>
                                        <a href="#"> Public Access  </a>
                                    </li>
                                    {/* <li>   <label className="switch noPadding noMargin">
                                        <input type="checkbox" />
                                        <span className="slider round"></span>
                                    </label> </li> */}
                                </ul>

                            </div>
                            <div className="col-md-12 col-xs-12 companySummary paddingTop-15" >
                                <h6 className="blueText"> Company Summary   </h6>
                                <p className="greyText"> Tell the world who you are and what makes your company special.</p>
                                <p> This is a paragraph, lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                <div className="col-md-12 companyVideo noPadding" >

                                    {/* <iframe src="https://www.youtube.com/watch?v=pezrS5OBBs4" style={{ width: "100%" }}>
                                    </iframe> */}
                                    <video className="col-md-12" controls height="300px" width="100%">
                                        <source src="../assets/videos/Channa mere ya.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                      </video>
                                </div>

                                <div className="col-md-12 companyOwners paddingTop-15">
                                    <div className="col-md-12 owners noPadding">
                                        <div className="col-md-12 add BottomLine">
                                            <h5 className=" addTeam"><b>Team</b></h5>
                                            <img src="..\assets\images\plus.png" alt="not found" className="addImage" />
                                        </div>

                                        <div className="col-md-4 ownersDetails BottomLine">
                                            <div className="ownerImage" >
                                                <img src="..\assets\images\sstar.png" alt="profile image" />
                                            </div>
                                            <div className="ownerName">
                                                <h5>  Shama  </h5>
                                                <p>   Profile Owner </p>
                                            </div>
                                        </div>
                                        <div className=" col-md-4 ownersDetails BottomLine">
                                            <div className="ownerImage" >
                                                <img src="..\assets\images\sstar.png" alt="profile image" />
                                            </div>
                                            <div className="ownerName">
                                                <h5>  Shama  </h5>
                                                <p>   Profile Owner </p>
                                            </div>
                                        </div>
                                        <div className="col-md-4 ownersDetails BottomLine">
                                            <div className="ownerImage" >
                                                <img src="..\assets\images\sstar.png" alt="profile image" />
                                            </div>
                                            <div className="ownerName">
                                                <h5>  Shama  </h5>
                                                <p>   Profile Owner </p>
                                            </div>
                                        </div>
                                        <div className=" col-md-12 owners noPadding">
                                            <div className="col-md-12 add BottomLine">
                                                <h5 className=" addTeam"><b>Team</b></h5>
                                                <img src="..\assets\images\plus.png" alt="not found" className="addImage" />
                                            </div>
                                            <div className="col-md-4 ownersDetails BottomLine">
                                                <div className="ownerImage" >
                                                    <img src="..\assets\images\sstar.png" alt="profile image" />
                                                </div>
                                                <div className="ownerName">
                                                    <h5>  Shama  </h5>
                                                    <p>   Profile Owner </p>
                                                </div>
                                            </div>
                                            <div className="col-md-4 ownersDetails BottomLine">
                                                <div className="ownerImage" >
                                                    <img src="..\assets\images\sstar.png" alt="profile image" />
                                                </div>
                                                <div className="ownerName">
                                                    <h5>  Shama  </h5>
                                                    <p>   Profile Owner </p>
                                                </div>
                                            </div>
                                            <div className="col-md-4 ownersDetails BottomLine">
                                                <div className="ownerImage" >
                                                    <img src="..\assets\images\sstar.png" alt="profile image" />
                                                </div>
                                                <div className="ownerName">
                                                    <h5>  Shama  </h5>
                                                    <p>   Profile Owner </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 owners noPadding BottomLine">
                                            <div className="col-md-12 add BottomLine">
                                                <h5 className=" addTeam marginBottom-0"><b>Previous Investors</b></h5>
                                                <img src="..\assets\images\plus.png" alt="not found" className="addImage" />
                                            </div>
                                            <div className="col-md-4 ownersDetails">
                                                <div className="ownerImage" >
                                                    <img src="..\assets\images\sstar.png" alt="profile image" />
                                                </div>
                                                <div className="ownerName">
                                                    <h5>  Shama  </h5>
                                                    <p>   Profile Owner </p>
                                                </div>
                                            </div>
                                            <div className="col-md-4 ownersDetails ">
                                                <div className="ownerImage" >
                                                    <img src="..\assets\images\sstar.png" alt="profile image" />
                                                </div>
                                                <div className="ownerName">
                                                    <h5>  Shama  </h5>
                                                    <p>   Profile Owner </p>
                                                </div>
                                            </div>
                                            <div className="col-md-4 ownersDetails ">
                                                <div className="ownerImage" >
                                                    <img src="..\assets\images\sstar.png" alt="profile image" />
                                                </div>
                                                <div className="ownerName">
                                                    <h5>  Shama  </h5>
                                                    <p>   Profile Owner </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default EntreprenuerProfile;