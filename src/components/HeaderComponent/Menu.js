import React, { Component } from 'react';
import data from '../../data.json';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Menu extends Component {

    constructor(props){
        super(props);
        this.state = {
            width: window.innerWidth
        }
    }


    componentDidMount(){
        window.addEventListener('resize', this.handleWindowSizechange);
     }
     componentWillUnmount(){
        window.addEventListener('resize', this.handleWindowSizechange);
     }


    handleWindowSizechange = () => {
        this.setState({ width: window.innerWidth })
    }

    render() {
        const { width } = this.state;
        const isMobile  = width <= 775;
        const settings = {
            arrows: true,
            autoplay: true,
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 776,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                  }
                }
              ]
          };
        return (
            <nav className="navigation">
                {
                    (() => {
                        if(!isMobile) {
                            return(
                                <ul>
                                    {
                                        data.Menu.map((item, index) =>
                                            <li key={index}>
                                                <a href={item.link} className='data-transform nav-link'>
                                                    <span className="cat-image">
                                                    <img src={require(`../../${item.image}`)} alt=""/>
                                                    </span>
                                                    <span className="content-txt" data-hover={item.menu}>
                                                        {item.menu}
                                                    </span>
                                                </a>
                                            </li>
                                        )
                                    }
                                </ul>
                            )
                        } else {
                            return(
                                <Slider {...settings}>
                                    {
                                        data.Menu.map((item, index) =>
                                            <li key={index}>
                                                <a href={item.link} className='data-transform nav-link'>
                                                    <span className="cat-image">
                                                    <img src={require(`../../${item.image}`)} alt=""/>
                                                    </span>
                                                    <span className="content-txt" data-hover={item.menu}>
                                                        {item.menu}
                                                    </span>
                                                </a>
                                            </li>
                                        )
                                    }
                                </Slider>
                            )
                        }
                    })()
                }
            </nav>
        )
    }
}
