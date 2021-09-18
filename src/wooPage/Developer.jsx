import React, { useEffect } from 'react';
import Aos from 'aos';
const Developer = () => {

    useEffect(() => {
        Aos.init({
            once: true,
            duration: 1500,
            easing: 'ease-in-out'
        })
    })

    return (
        <>

            <div className="developer position-relative">
                <div className="woo position-absolute"><img src="/asset/image/cards/devWoo.png" alt=""/></div>
                <div className="leftDot position-absolute"><img src="/asset/image/cards/leftDot.png" alt=""/></div>
                <div className="rightDot position-absolute"><img src="/asset/image/cards/rightDot.png" alt=""/></div>
                <div className="leftCircle position-absolute"><img src="/asset/image/cards/leftCircle1.png" alt=""/></div>
                <div className="rightCircle position-absolute"><img src="/asset/image/cards/rightCircle.png" alt=""/></div>
                <div className="container">
                    <div className="row">
                        <div data-aos='fade-up' className="offset-1 col-4">
                            <i><img className='position-absolute myImg' src="/asset/image/cards/developer.png" alt=""/></i>
                        </div>
                        <div data-aos='fade-up' className="col-5">
                            <h3>Develop Without Limits</h3>
                            <p>WooCommerce is developer friendly, too. Built with a REST API, WooCommerce is scalable and can integrate with virtually any service. Design a complex store from scratch, extend a store for a client, or simply add a single product to a WordPress site—your store, your way.</p>
                            <button className="btn myBtn mb">Read the  Documentation</button>
                        </div>
                    </div>
                    <div className="row">
                        <div data-aos='fade-up' className="offset-2 col-5">
                            <h3>Know our Global Community</h3>
                            <p>WooCommerce is one of the fastest-growing eCommerce communities. We’re proud that the helpfulness of the community and a wealth of online resources are frequently cited as reasons our users love it. There are 80+ meetups worldwide!</p>
                            <button className="btn myBtn">Read the  Documentation</button>
                        </div>
                        <div data-aos='fade-up' className="col-4">
                            <span>
                                <img className='position-absolute myImg' src="/asset/image/cards/developer2.png" alt=""/>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Developer
