import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from '../../data.json';

export default class LatestCollections extends Component {
    render() {

        var settings = {
            arrows: false,
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 3
                }
              },
              {
                breakpoint: 776,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 360,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };
        return (
            <section className="latest-collections">
                {
                        data.latestCollections.map((item, index) =>
                        <div className="container" key={index}>
                            <div className="heading">
                                <div className="heading-title">
                                    {item.heading}
                                </div>
                            </div>
                            <Slider {...settings}>
                                {
                                    item.prouctList.map((product, index) =>
                                        <div className="product-item" key={index}>
                                            <div className="product-item-info">
                                                <div className="product-image">
                                                    <img src={require(`../../${product.productImg}`)} alt=""/>
                                                </div>
                                                <div className="product-name">
                                                    <a href={product.productLink}>
                                                        {product.productName}
                                                    </a>
                                                </div>
                                                <div className="product-price">
                                                    {product.price}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </Slider>
                        </div>
                        )
                }
            </section>
        )
    }
}
