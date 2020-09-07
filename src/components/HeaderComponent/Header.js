import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Logo from '../Logo';
import Menu from './Menu';
import HeaderIcons from './HeaderIcons';

import Sidebar from './Sidebar';

export default class Header extends Component{
    componentDidMount(){
        const header = document.querySelector('.page-header');
        const scrollUp = 'scroll-up';
        const scrollDown = 'scroll-down';
        let lastScroll = 0;

        window.addEventListener('scroll', ()=> {
            const currentScroll = window.pageYOffset;

            if(currentScroll === 0) {
                header.classList.remove(scrollUp);
                header.classList.remove(scrollDown);
                return;
            }

            if(currentScroll > lastScroll && !header.classList.contains(scrollDown)) {
                header.classList.remove(scrollUp);
                header.classList.add(scrollDown);
            } else if(currentScroll < lastScroll && header.classList.contains(scrollDown)){
                header.classList.remove(scrollDown);
                header.classList.add(scrollUp)
            }

            lastScroll = currentScroll;
        })
    }
    render(){
        return (
            <header className="page-header">
                <div className="container">
                    <div className="header-inner">
                        <Link to="/" tabIndex="-1">
                            <Logo/>
                        </Link>
                        <HeaderIcons/>
                        <Menu/>
                    </div>
                </div>
                <Sidebar/>
            </header>
        )
    }
}