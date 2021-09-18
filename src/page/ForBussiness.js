import React, { useEffect } from 'react';
import Aos from 'aos';

const ForBussiness = () => {

    useEffect(() => {
        Aos.init({
            once: true,
            duration: 1500,
            easing: 'ease-in-out'
        })
    })

    return (
        <div className="for-bussiness position-relative text-center text-lg-left">
            <span className="position-absolute mainBg"><img src="/assets/image/element.png" alt=""/></span>
            <div className="container">
                <div className="row">
                    <div data-aos='fade-right' className="col-lg-5  ">
                        <h2>
                            Perfect Solution For
                            Your Business
                        </h2>
                        <p>
                            Distinctively exploit optimal alignments for intuitive bandwidth. Quickly
                            coordinate e-business applications through revolutionary catalysts for
                            chang the Seamlessly underwhelm optimal testing procedures.
                        </p>
                        <button className="btn myBtn">Learn More</button>
                    </div>

                    <div data-aos='fade-left' className="col-lg-7 mt-5 mt-lg-0  ">
                        <span><img src="/assets/image/mockup.png" className='w-100 rightBg' alt=""/></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForBussiness;