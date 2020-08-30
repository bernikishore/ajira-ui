import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from '../../data.json';

export default class Testimonials extends Component {
    render() {
        var settings = {
            arrows: false,
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
              {
                breakpoint: 776,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };
        return (
            <section className="reviews-section">
                {
                        data.reviewsInfo.map((item, index) =>
                        <div className="container" key={index}>
                            <div className="heading">
                                <div className="heading-title">
                                    {item.heading}
                                </div>
                            </div>
                            <Slider {...settings}>
                                {
                                    item.reviewsDetail.map((item, index) =>
                                        <div className="review-item" key={index}>
                                            <div className="review-item-info">
                                                <span className="reviews-author-img">
                                                    <img src={require(`../../${item.imageUrl}`)} alt=""/>
                                                </span>
                                                <div className="reviews-author-name">{item.userName}</div>
                                                <div className="ratings">
                                                    {
                                                        item.ratings.map((rating, index) =>
                                                            <span key={index} className={rating.icon}></span>
                                                        )
                                                    }
                                                </div>
                                                <div className="reviews-content">{item.reviewsContent}</div>
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
