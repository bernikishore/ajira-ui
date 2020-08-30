import React, { Component } from 'react';
import Logo from '../Logo';
import data from '../../data.json';

export default class FooterSocialLinks extends Component {
    render() {
        return (
            <div className="footer-sec">
                <Logo/>
                <div className="social-links-wrap">
                {
                        data.socialLinksInfo.map((info, key)=>
                        <React.Fragment key={key}>
                            <div className="heading">{info.heading}</div>
                            <ul>
                            {
                                info.socialLinks.map((sociallink, id)=>
                                <li key={id}>
                                    <a href={sociallink.link} className={sociallink.icon}><span>{sociallink.text}</span></a>
                                </li>
                                )
                            }
                            </ul>
                        </React.Fragment>
                    )
                }
                </div>
            </div>
        )
    }
}

