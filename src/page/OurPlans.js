import React, { useEffect } from 'react';
import Aos from 'aos';

const OurPlans = () => {

    useEffect(() => {
        Aos.init({
            once: true,
            duration: 1500,
            easing: 'ease-in-out'
        })
    })

    return (
        <div className="ourPlans">
            <div className="container">
                <div className="row">
                    <div data-aos='fade-up' className="col-12 text-center ">
                        <h2 className="">Our Plans</h2>
                        <p className="myP">Choose the right SEO for you</p>
                    </div>

                    <div data-aos='fade-right' className="col-lg-4 col-12 col-md-6 mb-4">
                        <div className="card border-0 p-0">
                            <div className="card-body border-0 p-0 text-center">
                                <h3>Plus</h3>
                                <h4><span className="dollar">$</span>30 <span className="mounth">/mounth</span></h4>
                                <p>50GB Bandwidth</p>
                                <p>Business & Financ Analysing</p>
                                <p>24 Hour Support</p>
                                <p>Customer Managemet</p>

                                <button className="btn myBtn">Get Started</button>
                            </div>
                        </div>
                    </div>
                    
                    <div data-aos='fade-up' className="col-lg-4 col-12 col-md-6 mb-4">
                        <div className="card border-0 p-0">
                            <div className="card-body border-0 p-0 text-center">
                                <h3>Beginer</h3>
                                <h4><span className="dollar">$</span>55 <span className="mounth">/mounth</span></h4>
                                <p>55GB Bandwidth</p>
                                <p>Business & Financ Analysing</p>
                                <p>24 Hour Support</p>
                                <p>Customer Managemet</p>

                                <button className="btn myBtn">Get Started</button>
                            </div>
                        </div>
                    </div>
                    
                    <div data-aos='fade-left' className="col-lg-4 col-12 col-md-6 mb-4">
                        <div className="card border-0 p-0">
                            <div className="card-body border-0 p-0 text-center">
                                <h3>Advanced</h3>
                                <h4><span className="dollar">$</span>99 <span className="mounth">/mounth</span></h4>
                                <p>120GB Bandwidth</p>
                                <p>Business & Financ Analysing</p>
                                <p>24 Hour Support</p>
                                <p>Customer Managemet</p>

                                <button className="btn myBtn">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurPlans;




