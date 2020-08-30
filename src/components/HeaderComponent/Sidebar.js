import React, { Component } from 'react';

import AccountLinks from './AccountLinks';
import ExtraLinks from './ExtraLinks';

export default class Sidebar extends Component {
    sidebarClose(){
        document.body.classList.remove('sidebar-opened');
    }
    render() {
        return (
            <aside className="sidebar">
                <span className="side-close" onClick={this.sidebarClose}>
                    <i className="icon-x"></i>
                </span>
                <AccountLinks/>
                <ExtraLinks/>
            </aside>
        )
    }
}
