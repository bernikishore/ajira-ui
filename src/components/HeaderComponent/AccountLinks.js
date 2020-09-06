import React, { Component } from 'react';
import {
    NavLink
  } from "react-router-dom";
import data from '../../data.json';


export default class AccountLinks extends Component {
    handleDetail(){
        document.body.classList.remove('sidebar-opened');
    }
    render() {
        return (
            <ul className="account-links">
                {
                    data.accountLinks.map((item, index) =>
                        <li key={index}>
                            <NavLink to={item.link} onClick={this.handleDetail} activeClassName="active">
                                {item.text}
                            </NavLink>
                        </li>
                    )
                }
            </ul>
        )
    }
}
