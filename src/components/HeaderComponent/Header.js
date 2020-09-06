import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Logo from '../Logo';
import Menu from './Menu';
import HeaderIcons from './HeaderIcons';

import Sidebar from './Sidebar';

export default class Header extends Component{
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
    render(){
        const { width } = this.state;
        const isTab  = width <= 775;
        return (
            <header className="page-header">
                <div className="container">
                    <div className="header-inner">
                        <Link to="/">
                            <Logo/>
                        </Link>
                        <HeaderIcons/>
                        <Menu/>
                    </div>
                </div>
                {(() => {
                        if(isTab) {
                        return (
                            <Sidebar/>
                        )
                    }
                })()}
            </header>
        )
    }
}