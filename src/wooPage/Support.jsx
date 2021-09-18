import React, { useEffect } from 'react';
import Aos from 'aos';
const Support = () => {

    useEffect(() => {
        Aos.init({
            once: true,
            duration: 1500,
            easing: 'ease-in-out'
        })
    })

    return (
        <>

        <div className='support'>
            <div className="container">
                <div className="row">
                    <div data-aos='fade-up' className="col-12 text-center">
                        <h3>Supported by real people</h3>
                        <p className='w-75 '>Our team of Happiness Engineers works remotely from 58 countries providing customer support across multiple time zones.</p>
                        <div className="supports">
                            <img className='w-100' src="/asset/image/support.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="underSupport">
            <div className="container">
                <div className="row">
                    <div data-aos='fade-up' className="col-10 offset-1 d-flex align-items-center">
                        <h4>WooCommerce - the most customizable eCommerce platform for building your online business.</h4>
                        <button className="btn myBtn">GET STARTED</button>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}

export default Support
