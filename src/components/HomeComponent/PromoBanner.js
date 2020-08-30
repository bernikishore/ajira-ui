import React, { Component } from 'react';
import data from '../../data.json';

export default class PromoBanner extends Component {
    render() {
        return (
            <section className="promo-banner-wrapper">
                <div className="promo-banner-inner">
                    <div className="promo-banner-blk">
                        <img src={require(`../../${data.promoBanner.promoInfo1.imageUrl}`)} alt=""/>
                        <div className="banner-content-blk">
                            <div className="content-info">
                                <p dangerouslySetInnerHTML={{ __html: data.promoBanner.promoInfo1.contentInfo.content1}}></p>
                                <p dangerouslySetInnerHTML={{ __html: data.promoBanner.promoInfo1.contentInfo.content2}}></p>
                            </div>
                        </div>
                    </div>
                    <div className="promo-banner-group">
                        <div className="promo-banner-blk">
                            <img src={require(`../../${data.promoBanner.promoInfo2.imageUrl}`)} alt=""/>
                            <div className="banner-content-blk">
                                <div className="content-info">
                                    <p dangerouslySetInnerHTML={{ __html: data.promoBanner.promoInfo2.contentInfo.content1}}></p>
                                </div>
                            </div>
                        </div>
                        <div className="promo-banner-blk">
                            <img src={require(`../../${data.promoBanner.promoInfo3.imageUrl}`)} alt=""/>
                            <div className="banner-content-blk">
                                <div className="content-info">
                                    <p dangerouslySetInnerHTML={{ __html: data.promoBanner.promoInfo3.contentInfo.content1}}></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
