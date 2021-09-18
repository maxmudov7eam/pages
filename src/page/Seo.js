import React, { useEffect } from 'react';
import Aos from 'aos';

const Seo = () => {

    useEffect(() => {
        Aos.init({
            once: true,
            duration: 1500,
            easing: 'ease-in-out'
        })
    })

    return (
        <div className="seo">
            <div className="container">
                <div className="row">
                    <div data-aos='fade-right' className="col-lg-6  position-relative ">
                        <span className='position-absolute leftBg'><img src="/assets/image/whatWe-illustration.png" alt="" className="w-100"/></span>
                    </div>
                    <div data-aos='fade-left' className="col-lg-6 text-center text-lg-left ">
                        <h2>You may ask what
                            SEO & why do you need it?
                        </h2>
                        <p>Distinctively exploit optimal alignments for intuitive bandwidth. Quickly coordinate e-business applications through revolutionary.</p>

                        <div data-aos='fade-up' className="card border-0 p-0">
                            <div className="card-body d-flex align-items-center border-0 p-0">
                                <span className='mr-3'><img src="/assets/image/whatWe-icon1.png" alt=""/></span>
                                <span>
                                    <h3>
                                        Social Media Marketing
                                    </h3>
                                    <p>
                                        Business applications through revolutionary catalysts
                                        for chang the Seamlessly underwhelm dures.
                                    </p>
                                </span>
                            </div>
                        </div>
                        
                        <div data-aos='fade-up' className="card border-0 p-0">
                            <div className="card-body d-flex align-items-center border-0 p-0">
                                <span className='mr-3'><img src="/assets/image/whatWe-icon2.png" alt=""/></span>
                                <span>
                                    <h3>
                                        Email Marketing
                                    </h3>
                                    <p>
                                        Business applications through revolutionary catalysts
                                        for chang the Seamlessly underwhelm dures.
                                    </p>
                                </span>
                            </div>
                        </div>
                        
                        <div data-aos='fade-up' className="card border-0 p-0">
                            <div className="card-body d-flex align-items-center border-0 p-0">
                                <span className='mr-3'><img src="/assets/image/whatWe-icon3.png" alt=""/></span>
                                <span>
                                    <h3>
                                        SEO Optimization
                                    </h3>
                                    <p>
                                        Business applications through revolutionary catalysts
                                        for chang the Seamlessly underwhelm dures.
                                    </p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Seo;