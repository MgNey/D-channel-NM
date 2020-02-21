import React, {Component} from 'react';
import profile from "../img/profile.jpg";
import {Link} from "react-router-dom";

class Profile extends Component {
    render() {
        return (

            <div className="wrap">
                <div className="container">
                    <div className="profile">
                        <p className="orange"><span className="float-left"><Link to="/dashboard" className="cl-black" value="dashoboard"><i className="fas fa-arrow-left"></i>Back</Link></span>Profile</p>
                        <div className="form">
                            <div className="profile-pic text-center">
                                <img src={profile} alt="profile"/>
                            </div>
                            <button className="btn-com"><Link to="/login" className="cl-black" value="login">Logout</Link>
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
