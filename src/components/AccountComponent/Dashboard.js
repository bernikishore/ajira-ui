import React, { Component } from 'react';
import {
    Route, NavLink
  } from "react-router-dom";
  import Sidebar from './Sidebar';
  import MyProfile from './MyProfile';
  import MyOrders from './MyOrders';
  import ShippingAddress from './ShippingAddress';

  import data from '../../data.json';

export default class Dashboard extends Component {
    componentDidMount(){
        document.body.classList.add('account');
    }
    componentWillUnmount(){
        document.body.classList.remove('account');
    }
    render() {
        return (
                <div className="container">
                    <div className="columns">
                        <Sidebar/>
                        <div className="column">
                            <div className="dashboard-wrapper">
                                    <div className="dashboard-content">
                                        <NavLink to={data.accountMenu[0].link} activeClassName="active" className="menu-link">
                                            <span className="item-text">
                                                {data.accountMenu[0].text}
                                            </span>
                                            <span className="item-badge">
                                                {data.accountMenu[0].subText}
                                            </span>
                                            <span className="item-icon icon-chevron-down"></span>
                                        </NavLink>
                                        <Route path="/account/profile" component={MyProfile}/>
                                    </div>
                                    <div className="dashboard-content">
                                        <NavLink to={data.accountMenu[1].link} activeClassName="active" className="menu-link">
                                            <span className="item-text">
                                                {data.accountMenu[1].text}
                                            </span>
                                            <span className="item-badge">
                                                {data.accountMenu[1].subText}
                                            </span>
                                            <span className="item-icon icon-chevron-down"></span>
                                        </NavLink>
                                        <Route path="/account/orders" component={MyOrders}/>
                                    </div>
                                    <div className="dashboard-content">
                                        <NavLink to={data.accountMenu[2].link} activeClassName="active" className="menu-link">
                                            <span className="item-text">
                                                {data.accountMenu[2].text}
                                            </span>
                                            <span className="item-badge">
                                                {data.accountMenu[2].subText}
                                            </span>
                                            <span className="item-icon icon-chevron-down"></span>
                                        </NavLink>
                                        <Route path="/account/shipping-address" component={ShippingAddress}/>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}
