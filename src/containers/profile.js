import React, {Component} from 'react';
import profile from "../img/profile.jpg";
import {Link} from "react-router-dom";

import { FaLongArrowAltLeft,FaMinus,FaPlus } from 'react-icons/fa';
class Profile extends Component {
    render() {
        return (

            <div className="wrap">
                <div className="container">
                    <div className="profile">
                        <p className="orange"><span className="float-left"><Link to="/dashboard" className="cl-white icon" value="dashoboard"><FaLongArrowAltLeft/></Link></span>Profile</p>
                        <div className="form">
                            <div className="profile-pic text-center">
                                <img src={profile} alt="profile"/>
                            </div>
                            <button className="btn-com"><Link to="/login" className="cl-white" value="login">Logout</Link>
                            </button>
                            <input type="text" name="" value="Mg Mg" placeholder="name" required=""/>
                            <input type="text" name="" value="mgmg@gmail.com" placeholder="Email" required=""/>
                            <input type="text" name="" value="South Okkalap,Yangon" placeholder="Address"
                                   required=""/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;
