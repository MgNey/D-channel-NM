import React,{ Component } from 'react';
import coffee from "../img/coffee.jpg";
import shwePheoo from "../img/shwe_pheoo.jpg";
import {Link} from "react-router-dom";
import profile from '../img/profile.jpg';
import { FaLongArrowAltLeft,FaMinus,FaPlus } from 'react-icons/fa';

class ShoppinCart extends Component{
    render() {
        return(
            <div className="wrap">
                <div className="container">
                    <div className="dashboard">
                        <div className="menu text-center">
                            <p className="m-lf"><span className="float-left"><Link to="/dashboard" className="cl-white icon" value="dashoboard"><FaLongArrowAltLeft/></Link></span><span>Shopping Cart</span>
                            </p>
                        </div>
                        <div className="main">
                            <div className="order-item">
                                <div className="item">
                                    <div className="order-info pb-3">
                                        <div className="order-img">
                                            <img src={coffee} alt="coffee"/>
                                        </div>
                                        <div className="info">
                                            <p>Coffee 1</p>
                                            <p>cosmetice description cosmetic</p>
                                            <div className="max-qty">
                                                <p className="price float-left">Ks - 30000</p>
                                                <p className="add-qty float-right">
                                                    <span className="minus"><FaMinus/></span>
                                                    <span className="qty"> 2 </span>
                                                    <span className="plus"><FaPlus/></span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="order-info pb-3">
                                        <div className="order-img">
                                            <img src={coffee} alt="coffee"/>
                                        </div>
                                        <div className="info">
                                            <p>Coffee 1</p>
                                            <p>cosmetice description cosmetic</p>
                                            <div className="max-qty">
                                                <p className="price float-left">Ks - 30000</p>
                                                <p className="add-qty float-right">
                                                    <span className="minus"><FaMinus/></span>
                                                    <span className="qty"> 1 </span>
                                                    <span className="plus"><FaPlus/></span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className="btn-com btn-cart">COMFIRM</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ShoppinCart;
