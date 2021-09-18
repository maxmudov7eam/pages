import React, { useEffect } from 'react';
import Aos from 'aos';

const WebsiteSpeed = () => {

    useEffect(() => {
        Aos.init({
            once: true,
            duration: 1500,
            easing: 'ease-in-out'
        })
    })

    return(
        <div className="websiteSpeed">
            <div className="container">
                <div className="row align-items-center flex-column-reverse flex-lg-row">
                    <div data-aos='fade-right' className="col-lg-6 text-center text-lg-left  ">
                        <h3>Check Your Website Speed </h3>
                        <p>
                            Distinctively exploit optimal alignments for intuitive bandwidth.
                            Quickly coordinate e-business through revolutionary.
                        </p>
                        <div className='d-flex myForm flex-column flex-lg-row flex-md-row'>
                            <input type="text" placeholder='Web URL' className="form-control border-0 shadow-none firstInput"/>
                            <span className="line"></span>
                            <input type="text" placeholder='Email Adress' className="form-control border-0 shadow-none secondInput"/>
                            <button type='button' className="btn myBtn d-block">Submit</button>
                        </div>
                        {/* <button type='button' className="btn myBtn d-inline-block d-lg-none d-md-none">Submit</button> */}
                    </div>
                    <div data-aos='fade-left' className="col-lg-6 ">
                        <span><img src="/assets/image/check-illustration.png" className='w-100 myImg' alt=""/></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WebsiteSpeed;