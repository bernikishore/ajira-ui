import React, { Component } from 'react';
import data from '../../data.json';


export default class ExtratLinks extends Component {
    render() {
        return (
            <ul className="extra-links">
                {
                    data.extraLinks.map((item, index) =>
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
