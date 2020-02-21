import React,{ Component} from 'react';
import {
    Route,
    BrowserRouter as Router,
} from "react-router-dom";
import Login from './containers/login';
import Register from './containers/register';
import Form from './containers/form';
import Dashoboard from './containers/dashoboard';
import Product from './containers/product';
import Profile from './containers/profile';
import ShoppinCart from './containers/shoppinCart';
import History from './containers/history';
import OrderDetail from './containers/orderDetail';
import Orders from './containers/orders';

class App extends Component {
    render(){
        return (

            <Router>
                <div>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/form" component={Form}/>
                    <Route path="/dashboard" component={Dashoboard}/>
                    <Route path="/product" component={Product}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/shoppingCart" component={ShoppinCart}/>
                    <Route path="/history" component={History}/>
                    <Route path="/orderDetail" component={OrderDetail}/>
                    <Route path="/orders" component={Orders}/>

                </div>
            </Router>
        );
    }
}
export default App;
