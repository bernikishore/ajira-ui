import React, { Component } from 'react';

export default class MyProfile extends Component {
    componentDidMount(){
        document.body.classList.add('profile-page');
        document.title = 'Profile Page';
    }
    componentWillUnmount(){
        document.body.classList.remove('profile-page');
        document.title = 'Profile Page';
    }
    render() {
        return (
            <div className="profile-sec with-bor">
                <h1 className="page-title">My Profile</h1>
                <form className="profile-edit">
                    <div className="fieldset">
                        <div className="field label-ani">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" id="firstName" placeholder="First Name"/>
                        </div>
                        <div className="field label-ani">
                            <label htmlFor="lastName">Last name</label>
                            <input type="text" id="lastName" placeholder="Last name"/>
                        </div>
                        <div className="field label-ani">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Email"/>
                        </div>
                        <div className="field label-ani">
                            <label htmlFor="number">Phone Number</label>
                            <input type="text" id="number" placeholder="Phone Number"/>
                        </div>
                        <div className="field label-ani">
                            <label htmlFor="password">Password</label>
                            <input type="text" id="password" placeholder="Password"/>
                        </div>
                        <div className="field label-ani">
                            <label htmlFor="c-password">Confirm Password</label>
                            <input type="text" id="c-password" placeholder="Confirm Password"/>
                        </div>
                        <div className="actions">
                            <button className="action primary" type="button">Save</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
