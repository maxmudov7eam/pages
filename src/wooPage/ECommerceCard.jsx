import React, { useEffect } from 'react';
import Aos from 'aos';

const ECommerceCard = () => {

    useEffect(() => {
        Aos.init({
            once: true,
            duration: 1500,
            easing: 'ease-in-out'
        })
    })

    return (
        <div className='eCard'>
            <div className="container">
                <div className="row">
                    <div data-aos='fade-up' className="col-lg-4 col-md-6">
                        <div className="myCard">
                            <div className="cardHeader position-relative">
                                <span className='img1 position-absolute'><img src="/asset/image/cards/card11.png" alt=""/></span>
                                <span className='img2 position-absolute'><img src="/asset/image/cards/card12.png" alt=""/></span>
                                <i>
                                    <img className='w-100' src="/asset/image/cards/card1.png" alt=""/>
                                </i>
                            </div>
                            <div className="cardBody">
                                <h3>All You Need to Start</h3>
                                <p>Add WooCommerce plugin to any WordPress site and set up a new store in minutes.</p>
                                <a href="#">Ecommerce for Wordpress ›</a>
                            </div>
                        </div>
                    </div>

                    <div data-aos='fade-up' className="col-lg-4 col-md-6">
                        <div className="myCard second">
                            <div className="cardHeader position-relative">
                                <span className='img3 position-absolute'><img src="/asset/image/cards/card21.png" alt=""/></span>
                                <span className='img4 position-absolute'><img src="/asset/image/cards/card22.png" alt=""/></span>
                                <span className='img5 position-absolute'><img src="/asset/image/cards/card23.png" alt=""/></span>
                                <span className='img6 position-absolute'><img src="/asset/image/cards/card24.png" alt=""/></span>
                                <span className='img7 position-absolute'><img src="/asset/image/cards/card25.png" alt=""/></span>
                                <i>
                                    <img className='w-100' src="/asset/image/cards/card2.png" alt=""/>
                                </i>
                            </div>
                            <div className="cardBody">
                                <h3>Customize and Extend</h3>
                                <p>From subscriptions to gym classes to luxury cars, WooCommerce is fully customizable..</p>
                                <a href="#">Browse Extensions ›</a>
                            </div>
                        </div>
                    </div>
                

                    <div data-aos='fade-up' className="col-lg-4 col-md-6">
                        <div className="myCard third">
                            <div className="cardHeader position-relative">
                                <span className='img8 position-absolute'><img src="/asset/image/cards/card31.png" alt=""/></span>
                                <span className='img9 position-absolute'><img src="/asset/image/cards/card32.png" alt=""/></span>
                                <span className='img10 position-absolute'><img src="/asset/image/cards/card33.png" alt=""/></span>
                                <i>
                                    <img className='w-100' src="/asset/image/cards/card3.png" alt=""/>
                                </i>
                            </div>
                            <div className="cardBody">
                                <h3>Active Community</h3>
                                <p>WooCommerce is one of the fastest-growing eCommerce communities. </p>
                                <a href="#">Check our Forums ›</a>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
    )
}

export default ECommerceCard
