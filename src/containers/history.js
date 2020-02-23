import React,{ Component } from 'react';
import coffee from "../img/coffee.jpg";
import shwePheoo from "../img/shwe_pheoo.jpg";
import {Link} from "react-router-dom";
import { FaLongArrowAltLeft,FaMinus,FaPlus } from 'react-icons/fa';
import profile from '../img/profile.jpg';

class History extends Component{
    render() {
        return(
            <div className="wrap">
                <div className="container">
                    <div className="dashboard">
                        <div className="menu text-center">
                            <p className="m-lf">
                                <span className="float-left"><Link to="/dashboard" className="cl-white icon" value="dashoboard"><FaLongArrowAltLeft/></Link></span>
                                <span>History</span></p>
                        </div>
                        <div className="main">
                            <div className="history-tab">
                                <ul>
                                    <li className="border-right"><p><Link to="/orders" className="cl-black" value="orders">OPEN ORDERS</Link></p></li>
                                    <li className="active"><p><Link to="/history" className="cl-black" value="history">HISTORY</Link></p></li>
                                </ul>
                            </div>
                            <div className="order-list">
                                <div className="order">
                                    <p>
                                        <span>Order Id</span>
                                        <span className="float-right">22/10/2019</span>
                                    </p>
                                    <p> desc</p>
                                    <p><span className="detail"><Link to="/orderDetail" className="cl-white" value="dashoboard">Detail</Link></span>
                                        <span className="amount float-right">Total Amount: 2000 </span>
                                    </p>
                                </div>
                                <div className="order">
                                    <p>
                                        <span>Order Id</span>
                                        <span className="float-right">22/10/2019</span>
                                    </p>
                                    <p> desc</p>
                                    <p><span className="detail"><Link to="/orderDetail" className="cl-white" value="dashoboard">Detail</Link></span>
                                        <span className="amount float-right">Total Amount: 2000 </span>
                                    </p>
                                </div>
                                <div className="order">
                                    <p>
                                        <span>Order Id</span>
                                        <span className="float-right">22/10/2019</span>
                                    </p>
                                    <p> desc</p>
                                    <p><span className="detail"><Link to="/orderDetail" className="cl-white" value="dashoboard">Detail</Link></span>
                                        <span className="amount float-right">Total Amount: 2000 </span>
                                    </p>
                                </div>
                                <div className="order">
                                    <p>
                                        <span>Order Id</span>
                                        <span className="float-right">22/10/2019</span>
                                    </p>
                                    <p> desc</p>
                                    <p><span className="detail"><Link to="/orderDetail" className="cl-white" value="dashoboard">Detail</Link></span>
                                        <span className="amount float-right">Total Amount: 2000 </span>
                                    </p>
                                </div>
                                <div className="order">
                                    <p>
                                        <span>Order Id</span>
                                        <span className="float-right">22/10/2019</span>
                                    </p>
                                    <p> desc</p>
                                    <p><span className="detail"><Link to="/orderDetail" className="cl-white" value="dashoboard">Detail</Link></span>
                                        <span className="amount float-right">Total Amount: 2000 </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default History;
