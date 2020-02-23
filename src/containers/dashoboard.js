import React,{ Component } from 'react';
import coffee from "../img/coffee.jpg";
import shwePheoo from "../img/shwe_pheoo.jpg";
import {Link} from "react-router-dom";
import { FaLongArrowAltLeft,FaMinus,FaPlus,FaCartPlus } from 'react-icons/fa';
import { MdSettings,MdHistory,MdShoppingCart } from 'react-icons/md';
class Dashoboard extends Component{
    render() {
        return(
            <div className="wrap">
                <div className="container">
                    <div className="dashboard">
                        <div className="menu">
                            <p className="m-lf"><span className="icon"><Link to="/profile" className="cl-black" value="profile"><MdSettings /></Link></span><span>D Channel</span>
                            </p>
                            <div className="m-rg">
                                <span className="icon"><Link to="/history" className="cl-black" value="history"><MdHistory /></Link></span>
                                <span className="cart icon"><Link to="/shoppingCart" className="cl-black" value="shohppingCart"><MdShoppingCart /></Link></span>
                            </div>
                        </div>
                        <div className="main">
                            <div className="category">
                                <div className="status">
                                    <span>Nan Myaing</span>
                                    <span className="float-right"><Link to="/product" className="cl-black" value="product">SEE ALL</Link></span>
                                </div>
                                <div className="list">
                                    <div className="row">
                                        <div className="col-md-4 col-6 pt-1">
                                            <p className="min-qty">Minimum Qty - 2</p>
                                            <div className="item">
                                                <span className="percent">-2%</span>
                                                <img src={coffee} alt="coffee"/>
                                            </div>
                                            <div className="des">
                                                <p className="name">
                                                    <span>coffee</span><br/>
                                                    <span className="prize">2000</span>
                                                </p>
                                                <span className="float-right add-cart">
                                                    <FaCartPlus/>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-6 pt-1">
                                            <p className="min-qty">Minimum Qty - 2</p>
                                            <div className="item">
                                                <span className="percent">-2%</span>
                                                <img src={coffee} alt="coffee"/>
                                            </div>
                                            <div className="des">
                                                <p className="name">
                                                    <span>coffee</span><br/>
                                                    <span className="prize">2000</span>
                                                </p>
                                                <span className="float-right add-cart">
                                                    <FaCartPlus/>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-6 pt-1">
                                            <p className="min-qty">Minimum Qty - 2</p>
                                            <div className="item">
                                                <span className="percent">-2%</span>
                                                <img src={coffee} alt="coffee"/>
                                            </div>
                                            <div className="des">
                                                <p className="name">
                                                    <span>coffee</span><br/>
                                                    <span className="prize">2000</span>
                                                </p>
                                                <span className="float-right add-cart">
                                                    <FaCartPlus/>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="category">
                                <div className="status">
                                    <span>Shwe Phe Oo</span>
                                    <span className="float-right">SEE ALL</span>
                                </div>
                                <div className="list">
                                    <div className="row">
                                        <div className="col-md-4 col-6 pt-1">
                                            <p className="min-qty">Minimum Qty - 2</p>
                                            <div className="item">
                                                <span className="percent">-2%</span>
                                                <img src={shwePheoo} alt="shwePheoo"/>
                                            </div>
                                            <div className="des">
                                                <p className="name">
                                                    <span>coffee</span><br/>
                                                    <span className="prize">2000</span>
                                                </p>
                                                <span className="float-right add-cart">
                                                    <FaCartPlus/>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-6 pt-1">
                                            <p className="min-qty">Minimum Qty - 2</p>
                                            <div className="item">
                                                <span className="percent">-2%</span>
                                                <img src={shwePheoo} alt="shwePheoo"/>
                                            </div>
                                            <div className="des">
                                                <p className="name">
                                                    <span>coffee</span><br/>
                                                    <span className="prize">2000</span>
                                                </p>
                                                <span className="float-right add-cart">
                                                    <FaCartPlus/>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-6 pt-1">
                                            <p className="min-qty">Minimum Qty - 2</p>
                                            <div className="item">
                                                <span className="percent">-2%</span>
                                                <img src={shwePheoo} alt="shwePheoo"/>
                                            </div>
                                            <div className="des">
                                                <p className="name">
                                                    <span>coffee</span><br/>
                                                    <span className="prize">2000</span>
                                                </p>
                                                <span className="float-right add-cart">
                                                    <FaCartPlus/>
                                                </span>
                                            </div>
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
export default Dashoboard;
