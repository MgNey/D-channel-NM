import React,{ Component } from 'react';
import coffee from "../img/coffee.jpg";
import shwePheoo from "../img/shwe_pheoo.jpg";
import {Link} from "react-router-dom";
import profile from '../img/profile.jpg';

class ShoppinCart extends Component{
    render() {
        return(
            <div className="wrap">
                <div className="container">
                    <div className="dashboard">
                        <div className="menu text-center">
                            <p className="m-lf"><span className="float-left"><i className="fas fa-user-cog"></i><Link to="/dashboard" className="cl-black" value="dashoboard">Back</Link></span><span>Shopping Cart</span>
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
                                                    <span className="minus"><i className="fas fa-minus"></i></span>
                                                    <span className="qty"> 2 </span>
                                                    <span className="plus"><i className="fas fa-plus"></i></span>
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
                                                    <span className="minus"><i className="fas fa-minus"></i></span>
                                                    <span className="qty"> 2 </span>
                                                    <span className="plus"><i className="fas fa-plus"></i></span>
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
