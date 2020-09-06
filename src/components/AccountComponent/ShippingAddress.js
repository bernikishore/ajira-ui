import React, { Component } from 'react';

export default class MyProfile extends Component {
    componentDidMount(){
        document.body.classList.add('shipping-address');
        document.title = 'Shipping Address';
    }
    componentWillUnmount(){
        document.body.classList.remove('shipping-address');
        document.title = 'Shipping Address';
    }
    render() {
        return (
            <div className="shipping-address-sec with-bor">
                <h1 className="page-title">Shipping Address</h1>
                <form className="profile-edit">
                    <div className="fieldset">
                        <div className="field label-ani">
                            <label htmlFor="address1">Address1</label>
                            <input type="text" id="address1" placeholder="Address1"/>
                        </div>
                        <div className="field label-ani">
                            <label htmlFor="address2">Address2</label>
                            <input type="text" id="address2" placeholder="Address2"/>
                        </div>
                        <div className="field label-ani">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Email"/>
                        </div>
                        <div className="field label-ani">
                            <label htmlFor="state">State</label>
                            <input type="text" id="state" placeholder="State"/>
                        </div>
                        <div className="field label-ani">
                            <label htmlFor="country">Country</label>
                            <input type="text" id="country" placeholder="Country"/>
                        </div>
                        <div className="field label-ani">
                            <label htmlFor="zip">Zip Code</label>
                            <input type="text" id="zip" placeholder="Zip Code"/>
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
