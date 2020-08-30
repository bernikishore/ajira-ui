import React, { Component } from 'react';

import data from '../../data.json';

export default class FooterLinks extends Component {
    render() {
        return (
            <div className="footer-sec footer-links">
                <ul>
                    {
                        data.footerLinks.map((footerlinks, id) =>
                            <li key={id}>
                                <a href={footerlinks.link}>{footerlinks.menu}</a>
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}
