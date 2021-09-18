import React, { useEffect } from 'react';
import Aos from 'aos';

const WhyWe = () => {

    useEffect(() => {
        Aos.init({
            once: true,
            duration: 1500,
            easing: 'ease-in-out'
        });
    }, [])

    return (
        <div className="whyWe">
            <div className="container">
                <div className="row">
                    <div data-aos='fade-up' className="col-12 text-center ">
                        <h2>Why You Should Choose Us.</h2>
                        <p>
                            Distinctively exploit optimal alignments for intuitive bandwidth. Quickly coordinate e-business
                            applications through revolutionary catalysts.
                        </p>
                    </div>

                    <div data-aos='fade-right' className="col-12 col-lg-4 col-md-6  ">
                        <div className="card p-0 border-0">
                            <div className="card-header p-0 border-0 bg-white">
                                <img src="/assets/image/why1.png" className='w-100' alt=""/>
                            </div>
                            <div className="card-body p-0 border-0">
                                <h3>Keyword Research</h3>
                                <p>Business applications through revolutionary catalysts for chang the Seamlessly underwhelm dures.</p>
                                <button className="btn myBtn position-relative">Learn More <span className="next"><img src="/assets/icon/next.svg" alt=""/></span></button>
                            </div>
                        </div>
                    </div>
                    
                    <div data-aos='fade-up' className="col-12 col-lg-4 col-md-6 ">
                        <div className="card p-0 border-0">
                            <div className="card-header p-0 border-0 bg-white">
                                <img src="/assets/image/why2.png" className='w-100' alt=""/>
                            </div>
                            <div className="card-body p-0 border-0">
                                <h3>Seo Optimazadion</h3>
                                <p>Business applications through revolutionary catalysts for chang the Seamlessly underwhelm dures.</p>
                                <button className="btn myBtn position-relative">Learn More <span className="next"><img src="/assets/icon/next.svg" alt=""/></span></button>
                            </div>
                        </div>
                    </div>
                    
                    <div data-aos='fade-left' className="col-12 col-lg-4 col-md-6 ">
                        <div className="card p-0 border-0">
                            <div className="card-header p-0 border-0 bg-white">
                                <img src="/assets/image/why3.png" className='w-100' alt=""/>
                            </div>
                            <div className="card-body p-0 border-0">
                                <h3>Social Marketing</h3>
                                <p>Business applications through revolutionary catalysts for chang the Seamlessly underwhelm dures.</p>
                                <button className="btn myBtn position-relative">Learn More <span className="next"><img src="/assets/icon/next.svg" alt=""/></span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyWe;