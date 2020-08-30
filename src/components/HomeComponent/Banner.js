import React, { Component } from 'react';
import data from '../../data.json';

export default class Banner extends Component {
    constructor() {
        super();
        this.state = {
          width: window.innerWidth,
        };
      }
      componentDidMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
      }

      handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
      };
    render() {

        const { width } = this.state;
        const isTab = width <= 775;
        const isMobile = width <= 360;
        return (
            <section className="banner-wrapper">
                {
                    data.bannerInfo.map((item, index) =>
                        <div className="banner-blk" key={index} style={{backgroundImage:
                             isMobile ? `url(${require(`../../${item.bannerImageSm}`)})` : isTab ? `url(${require(`../../${item.bannerImageMd}`)})` : `url(${require(`../../${item.bannerImageBg}`)})`
                            }}>
                                <div className="banner-pos">
                                    <div className="banner-content-blk">
                                        <div className="content-info">
                                            <p dangerouslySetInnerHTML={{ __html: item.contentInfo.content1}}></p>
                                            <p dangerouslySetInnerHTML={{ __html: item.contentInfo.content2}}></p>
                                        </div>
                                        <a href={item.bannerBtnLink} className="btn">{item.bannerBtnText}</a>
                                    </div>
                            </div>
                        </div>
                    )
                }
            </section>
        )
    }
}
