import React,{ Component } from 'react';
import coffee from "../img/coffee.jpg";
import shwePheoo from "../img/shwe_pheoo.jpg";
import {Link} from "react-router-dom";

class Dashoboard extends Component{
    render() {
        return(
            <div className="wrap">
                <div className="container">
                    <div className="dashboard">
                        <div className="menu">
                            <p className="m-lf"><span><i className="fas fa-user-cog"></i><Link to="/profile" className="cl-black" value="profile">Profile</Link></span><span>D Channel</span>
                            </p>
                            <div className="m-rg">
                                <span><Link to="/history" className="cl-black" value="history"><i className="fas fa-history"></i>Hostory</Link></span>
                                <span className="cart"><i className="fas fa-shopping-cart"></i><Link to="/shoppingCart" className="cl-black" value="shohppingCart">Cart</Link></span>
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
                                                <span className="float-right add-cart"><i
                                                    className="fas fa-cart-plus"></i></span>
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
                                                <span className="float-right add-cart"><i
                                                    className="fas fa-cart-plus"></i></span>
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
                                                <span className="float-right add-cart"><i
                                                    className="fas fa-cart-plus"></i></span>
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
                                                <span className="float-right add-cart"><i
                                                    className="fas fa-cart-plus"></i></span>
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
                                                <span className="float-right add-cart"><i
                                                    className="fas fa-cart-plus"></i></span>
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
                                                <span className="float-right add-cart"><i
                                                    className="fas fa-cart-plus"></i></span>
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
