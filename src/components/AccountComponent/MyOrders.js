import React, { Component } from 'react';

import data from '../../data.json';

export default class MyOrders extends Component {
    componentDidMount(){
        document.body.classList.add('orders-page');
        document.title = 'Orders Page';
    }
    componentWillUnmount(){
        document.body.classList.remove('orders-page');
        document.title = 'Orders Page';
    }
    render() {
        return (
            <React.Fragment>
                {
                    data.orderDetail.map((item, index) =>
                        <div className="orders-sec with-bor" key={index}>
                            <h1 className="page-title">{item.heading}</h1>
                            <div className="orders-wrapper">
                                {
                                    item.orderInfo.map((item, key) =>
                                        <div className="order-row" key={key}>
                                            <div className="product-img">
                                                <img src={require(`../../${item.productImg}`)} alt=""/>
                                            </div>
                                            <div className="product-detail-wrap">
                                                <div className="product-info">
                                                    <div className="order-no">Order #{item.orderNo}</div>
                                                    <div className="product-name">{item.productName}</div>
                                                    <div className="delivery-date">Express Delivery by {item.deliveryDate}</div>
                                                </div>
                                                <div className="product-detail">
                                                    <div className="payment-type">{item.paymentMode}</div>
                                                    <div className="product-price">{item.price}</div>
                                                    <div className="order-detail">
                                                        <div className="more">
                                                        <span className="icon-chevron-down"></span>
                                                        </div>
                                                        <div className={`${item.orderStatusInfo.orderClass}`}>{item.orderStatusInfo.orderStatus}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    )
                }
            </React.Fragment>
        )
    }
}
