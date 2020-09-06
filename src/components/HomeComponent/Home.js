import React, { Component } from 'react';
import Banner from './Banner';
import PromoBanner from './PromoBanner';
import LatestCollections from './LatestCollections';
import NewsLetter from './NewsLetter';
import Testimonials from './Testimonials';

export default class Home extends Component {
    componentDidMount(){
        document.body.classList.add('home-page');
        document.title = 'Home Page';
    }
    componentWillUnmount(){
        document.body.classList.remove('home-page');
        document.title = 'Home Page'
    }
    render() {
        return (
            <React.Fragment>
                <Banner/>
                <PromoBanner/>
                <LatestCollections/>
                <Testimonials/>
                <NewsLetter/>
            </React.Fragment>
        )
    }
}
