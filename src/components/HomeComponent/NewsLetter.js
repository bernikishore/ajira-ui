import React, { Component } from 'react';
import data from '../../data.json';

export default class NewsLetter extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <section className="newsletter-wrapper" style={{backgroundImage: `url(${require(`../../${data.newsletterInfo.imageURL}`)})`}}>
                <div className="inner-wrap">
                    <div className="container">
                        <div className="heading">
                            <div className="title">{data.newsletterInfo.heading}</div>
                            <div className="sub-heading">{data.newsletterInfo.subHeading}</div>
                        </div>
                        <div className="form-wrap">
                        <form onSubmit={this.handleSubmit}>
                            <div className="fieldset">
                                <div className="field">
                                    <input type="email" placeholder="E-mail ID" value={this.state.value} onChange={this.handleChange} />
                                </div>
                                <button className="btn" type="button">{data.newsletterInfo.btnText}</button>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
