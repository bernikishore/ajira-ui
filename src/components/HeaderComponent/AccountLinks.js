import React, { Component } from 'react';
import data from '../../data.json';


export default class AccountLinks extends Component {
    render() {
        return (
            <ul className="account-links">
                {
                    data.accountLinks.map((item, index) => 
                        <li key={index}>
                            <a href={item.link}>
                                {item.text}
                            </a>
                        </li>
                    )
                }
            </ul>
        )
    }
}
