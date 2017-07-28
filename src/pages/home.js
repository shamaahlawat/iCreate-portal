import React, { Component } from 'react';
import './css/home.less';
class Home extends Component {

    render() {
        return (

            <div className="col-md-12 homecontent noLRPadding noMargin noPadding">
                <div className=" col-md-10 col-md-offset-1 noPadding">
                    <div className="col-xs-12 col-md-12">
                        <h5 className="marginBottom-20 padding-top-20 "> Hello Sachin !! </h5>
                        <p className="marginBottom-40"> Raising early stage capital is hard work, but we're here to help. </p>
                        <h5 className="marginBottom-20"> Investors </h5>
                        <p className="noPadding marginBottom-40"> Below Investors are from your comapny profile . if you want to search perticullar investor you can go to search button. </p>
                    </div>
                    <div className="col-xs-12 col-md-12 noPadding">

                        <table className="col-md-12 table">
                            <tr>
                                <th className="col-md-6">Name</th>
                                <th className="col-md-3">PrivateAccess</th>
                                <th className="col-md-3" >Apply</th>
                            </tr>
                            <tr>
                                <td className="col-md-6">
                                    <div className="col-md-8 noLRPadding PaddingTop-10">
                                        <div className="col-md-3 leftCard ">
                                            <img src="../assets/images/logo.png" alt="profile pic" className="img-resposive img-rounded setPic noLRpadding" />
                                        </div>
                                        <div className="col-md-9 rightCard noLRPadding" >
                                            <h5>INSEAD Business Angels Alumni France</h5>
                                            <p> Application last edited on 07/15/2017 <span className="spn"> Resume </span></p>

                                        </div>
                                    </div>
                                </td>
                                <td>No</td>
                                <td>Apply for funding</td>
                            </tr>
                            <tr>
                                <td className="col-md-6">
                                    <div className="col-md-8 noLRPadding PaddingTop-10">
                                        <div className="col-md-3 leftCard ">
                                            <img src="../assets/images/logo.png" alt="profile pic" className="img-resposive img-rounded setPic noLRpadding" />
                                        </div>
                                        <div className="col-md-9 rightCard noLRPadding" >
                                            <h5>INSEAD Business Angels Alumni France</h5>
                                            <p> Application last edited on 07/15/2017 <span className="spn"> Resume </span></p>

                                        </div>
                                    </div>
                                </td>
                                <td>No</td>
                                <td>Apply for funding</td>
                            </tr>
                            <tr>
                                <td className="col-md-6">
                                    <div className="col-md-8 noLRPadding PaddingTB-10">
                                        <div className="col-md-3 leftCard ">
                                            <img src="../assets/images/logo.png" alt="profile pic" className="img-resposive img-rounded setPic noLRpadding" />
                                        </div>
                                        <div className="col-md-9 rightCard noLRPadding" >
                                            <h5>INSEAD Business Angels Alumni France</h5>
                                            <p> Application last edited on 07/15/2017 <span className="spn"> Resume </span></p>

                                        </div>
                                    </div>
                                </td>
                                <td>No</td>
                                <td>Apply for funding</td>
                            </tr>
                        </table>

                    </div>

                </div>
            </div>
        )
    }
}
export default Home;
