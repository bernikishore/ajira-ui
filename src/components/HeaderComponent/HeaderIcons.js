import React, { Component } from 'react'

import data from '../../data.json';

export default class HeaderIcons extends Component {
    constructor(props){
        super(props);
        this.state = {
            width: window.innerWidth
        }
    }

    componentDidMount(){
        window.addEventListener('resize', this.handleWindowSizechange);
     }

    handleWindowSizechange = () => {
        this.setState({ width: window.innerWidth })
    }
    handleDetail(){
        document.body.classList.toggle('sidebar-opened');
    }
    render() {
        const { width } = this.state;
        const isTab  = width <= 775;
        return (
            <div className="icons-sec">
                <ul>
                    <li>
                        <span className={data.headerIcons.search}></span>
                    </li>
                    <li>
                        <span className={data.headerIcons.cart}></span>
                    </li>
                    {(() => {
                        if(isTab) {
                            return (
                                <li className="hamburger">
                                    <span onClick={this.handleDetail} className={data.headerIcons.hamburger}></span>
                                </li>
                            )
                        } else {
                            return (
                                <li>
                                    <span className={data.headerIcons.user}></span>
                                </li>
                            )
                        }
                    })()}
                </ul>
            </div>
        )
    }
}
