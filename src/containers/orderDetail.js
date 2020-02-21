import React,{ Component } from 'react';
import coffee from "../img/coffee.jpg";
import shwePheoo from "../img/shwe_pheoo.jpg";
import {Link} from "react-router-dom";
import profile from '../img/profile.jpg';

class OrderDetail extends Component{
    render() {
        return(
            <div className="wrap">
                <div className="container">
                    <div className="dashboard">
                        <div className="menu text-center">
                            <p className="m-lf"><span className="float-left"><i className="fas fa-user-cog"></i><Link to="/history" className="cl-black" value="history">Back</Link></span><span>Order Detail</span>
                            </p>
                        </div>
                        <div className="main">
                            <div className="order-item">
                                <div className="item">
                                    <p className="p-3">
                                        <span>Order ID: 12</span>
                                        <span className="float-right">Date: 19/09/2020</span>
                                    </p>
                                    <div className="order-info pb-3">
                                        <div className="order-img">
                                            <img src={coffee} alt="coffee"/>
                                        </div>
                                        <div className="info">
                                            <p>Coffee 1</p>
                                            <p>cosmetice description cosmetic</p>
                                            <p className="price float-right">Ks - 10000</p>
                                        </div>
                                    </div>
                                    <div className="order-info pb-3">
                                        <div className="order-img">
                                            <img src={coffee} alt="coffee"/>
                                        </div>
                                        <div className="info">
                                            <p>Coffee 2</p>
                                            <p>cosmetice description cosmetic</p>
                                            <p className="price float-right">Ks - 20000</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default OrderDetail;
