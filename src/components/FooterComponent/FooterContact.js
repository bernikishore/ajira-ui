import React, { Component } from 'react';

import data from '../../data.json';

export default class FooterContact extends Component {
    render() {
        return (
            <div className="footer-sec footer-contact">
                <div className="address-info">
                    <div className="heading">{data.contactInfo.address.addressHeading}</div>
                    <address>
                        {data.contactInfo.address.address1} <br/>
                        {data.contactInfo.address.address2}
                    </address>
                </div>

                <div className="contact-info">
                    <a href={`mailto:${data.contactInfo.email}`}>
                        <i className="icon-mail"></i><span>{data.contactInfo.email}</span>
                    </a>
                    <a href={`tel:${data.contactInfo.phone}`}>
                    <i className="icon-phone"></i><span>{data.contactInfo.phone}</span>
                    </a>
                </div>

            </div>
        )
    }
}
