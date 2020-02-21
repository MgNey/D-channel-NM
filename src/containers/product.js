import React,{ Component } from 'react';
import coffee from "../img/coffee.jpg";
import shwePheoo from "../img/shwe_pheoo.jpg";
import {Link} from "react-router-dom";

class Product extends Component{
    render() {
        return(

            <div className="wrap">
                <div className="container">
                    <div className="dashboard">
                        <div className="menu text-center">
                            <p className="m-lf"><span className="float-left"><i className="fas fa-user-cog"></i><Link to="/dashboard" className="cl-black" value="dashoboard">Back</Link></span><span>Product</span>
                            </p>
                            <div className="m-rg">
                                <span><i className="fas fa-history"></i></span>
                                <span className="cart"><i className="fas fa-shopping-cart"></i></span>
                            </div>
                        </div>
                        <div className="main">
                            <div className="category">
                                <div className="status">
                                    <span>Nan Myaing</span>
                                    <span className="float-right">SEE ALL</span>
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
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
export default Product;
