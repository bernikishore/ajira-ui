import React, { Component } from 'react'

import FooterLinks from './FooterLinks';
import FooterSocialLinks from './FooterSocialLinks';
import FooterContact from './FooterContact';

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer-wrapper">
                <div className="container-md">
                    <div className="footer-inner">
                        <FooterLinks/>
                        <FooterSocialLinks/>
                        <FooterContact/>
                    </div>
                </div>
            </footer>
        )
    }
}
