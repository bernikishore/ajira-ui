import React, { Component } from 'react';

export default class PageNotFound extends Component {
    componentDidMount(){
        document.title = 'Page not found';
    }
    componentWillUnmount() {
        document.title = '';
    }
    render(){
        return(
            <div className="container-md">
                <div className="not-found-wrapper">
                    <div className="innner-wrapper">
                        <h3>404 page not found</h3>
                        <p>We are sorry but the page you are looking for does not exist.</p>
                    </div>
                </div>
            </div>
        )
    }
}