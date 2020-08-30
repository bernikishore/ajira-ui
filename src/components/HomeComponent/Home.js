import React, { Component } from 'react';
import Banner from './Banner';
import PromoBanner from './PromoBanner';
import LatestCollections from './LatestCollections';
import NewsLetter from './NewsLetter';
import Testimonials from './Testimonials';

export default class Home extends Component {
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
