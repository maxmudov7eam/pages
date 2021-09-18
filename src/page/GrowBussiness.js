import React, { useEffect } from 'react';
import Aos from 'aos';

const GrowBussiness = () => {

    useEffect(() => {
        Aos.init({
            once: true,
            duration: 1500,
            easing: 'ease-in-out'
        })
    })
    return (
        <div className="grow">
            <div className="container">
                <div className="row">
                    <div data-aos='fade-right' className="col-md-4  mt-3 mt-lg-0">
                        <div className="card border-0 p-0">
                            <div className="card-body border-0 p-0">
                                <span><img src="/assets/image/card-icon1.png" alt=""/></span>
                                <h3>Grow Your Business</h3>
                                <p>Leverage agile frameworks to provide a robust synopsis for high level overviews.</p>
                                <div className="myBtn ml-auto ">Read More...</div>
                            </div>
                        </div>
                    </div>
                    <div data-aos='fade-up' className="col-md-4  mt-3 mt-lg-0">
                        <div className="card border-0 p-0">
                            <div className="card-body border-0 p-0">
                                <span><img src="/assets/image/card-icon2.png" alt=""/></span>
                                <h3>Get Quality Ieads</h3>
                                <p>Leverage agile frameworks to provide a robust synopsis for high level overviews.</p>
                                <div className="myBtn ml-auto ">Read More...</div>
                            </div>
                        </div>
                    </div>
                    <div data-aos='fade-left' className="col-md-4  mt-3 mt-lg-0">
                        <div className="card border-0 p-0">
                            <div className="card-body border-0 p-0">
                                <span><img src="/assets/image/card-icon3.png" alt=""/></span>
                                <h3>Drive More Sales</h3>
                                <p>Leverage agile frameworks to provide a robust synopsis for high level overviews.</p>
                                <div className="myBtn ml-auto ">Read More...</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GrowBussiness;