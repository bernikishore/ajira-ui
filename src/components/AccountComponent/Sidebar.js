import React, { Component } from 'react';
import {
    NavLink
  } from "react-router-dom";
import data from '../../data.json';

export default class Sidebar extends Component {
    render() {
        return (
            <aside className="sidebar-menu">
                <div className="user-info">
                    <div className="avatar">
                        <img src={require(`../../${data.userData.userAvatar}`)} alt=""/>
                    </div>
                    <div className="user-detail">
                        <div className="user-name">{data.userData.userName}</div>
                    <div className="user-email">{data.userData.userEmail}</div>
                    </div>
                </div>
                <ul className="account-menu">
                {
                    data.accountMenu.map((item, index) =>
                        <li key={index}>
                            <NavLink to={item.link} className="menu-link">
                                <span className="item-text">
                                {item.text}
                                </span>
                                <span className="item-badge">
                                    {item.subText}
                                </span>
                                <span className="item-icon icon-chevron-right"></span>
                            </NavLink>
                        </li>
                    )
                }
                </ul>
            </aside>
        )
    }
}
