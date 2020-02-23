import React,{ Component } from 'react';
import dchannel from "../img/dchannel.jpg";
import {Link} from "react-router-dom";
import { FaLongArrowAltLeft,FaMinus,FaPlus } from 'react-icons/fa';
class Form extends Component{
    render() {
        return(

            <div className="wrap">
                <div className="container">
                    <div className="login">
                        <p className="orange"><Link to="/register" className="cl-white" value="register"><span className="icon float-left"><FaLongArrowAltLeft/></span></Link>FORM</p>
                        <div className="form">
                            <input type="text" name="" placeholder="Name" required=""></input>
                            <input type="email" name="" placeholder="Email" required=""></input>
                            <input type="text" name="" placeholder="Deliver Address" required=""></input>
                            <input type="text" name="" placeholder="Shop Name" required=""></input>
                            <input type="password" name="" placeholder="Password" required=""></input>
                            <button className="btn-com">
                                <Link to="/" className="cl-white" value="register">SUBMIT</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Form;
