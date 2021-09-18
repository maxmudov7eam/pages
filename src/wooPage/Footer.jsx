import React, { useEffect } from 'react';
import Aos from 'aos';
const Footer = () => {

    useEffect(() => {
        Aos.init({
            once: true,
            duration: 1500,
            easing: 'ease-in-out'
        })
    })
    return (
        <>

        <div className="footer">

            <div className="footerTop">
                <div className="container">
                    <div className="row justify-content-between">
                        <div data-aos='fade-up' className="col-4">
                            <span><img src="/asset/image/preFooter1.svg" alt="" className="w-100 cursor"/></span>
                        </div>
                        <div className="col-4">
                            <span><img src="/asset/image/preFooter2.svg" alt="" className="w-100 cursor"/></span>
                        </div>
                        <div data-aos='fade-up' className="col-4">
                            <span className='ml-auto'><img src="/asset/image/preFooter3.svg" alt="" className="w-100 cursor"/></span>
                        </div>
                    </div>

                    <div className="row">
                        <div data-aos='fade-up' className="col-12">
                            <div className="logo">
                                <img className='cursor' src="/asset/image/logoWh.svg" alt=""/>
                            </div>
                        </div>
                    </div>
                <div className="footLine"></div>
                </div>
            </div>


            <div className="footerBottom">
                <div className="container">
                    <div className="row">
                        <div data-aos='fade-up' className="offset-1 col-2">
                            <h5>Who we are</h5>
                            <div className="d-flex flex-column">
                                <a href="#">About</a>
                                <a href="#">Team</a>
                                <a href="#">Work with us</a>
                            </div>
                        </div>
                        <div data-aos='fade-up' className="col-2">
                            <h5>WoocommerceWho we are</h5>
                            <div className="d-flex flex-column">
                                <a href="#">Features</a>
                                <a href="#">Payments</a>
                                <a href="#">Marketing</a>
                                <a href="#">Shipping</a>
                                <a href="#">Extension Store</a>
                                <a href="#">eCommerce blog</a>
                                <a href="#">Development blog</a>
                                <a href="#">Ideas board</a>
                                <a href="#">Mobile App</a>
                                <a href="#">Community</a>
                                <a href="#">Style Guide</a>
                                <a href="#">Email Newsletter</a> 
                                
                            </div>
                        </div>
                        <div data-aos='fade-up' className="col-2">
                            <h5>Other products</h5>
                            <div className="d-flex flex-column">
                                <a href="#">Marketing</a>
                                <a href="#">Shipping</a>
                                <a href="#">Extension Store</a>
                                <a href="#">eCommerce blog</a>
                                <a href="#">Development blog</a>
                            </div>
                        </div>
                        <div data-aos='fade-up' className="col-2">
                            <h5>Support</h5>
                            <div className="d-flex flex-column">
                                <a href="#">Ideas board</a>
                                <a href="#">Mobile App</a>
                                <a href="#">Community</a>
                                <a href="#">Style Guide</a>
                                <a href="#">Email Newsletter</a> 
                                <a href="#">About</a>
                                <a href="#">Team</a>
                                <a href="#">Work with us</a>
                            </div>
                        </div>
                        <div data-aos='fade-up' className="col-2">
                            <h5>We recommend</h5>
                            <div className="d-flex flex-column">
                                <a href="#">About</a>
                                <a href="#">Team</a>
                                <a href="#">Ideas board</a>
                                <a href="#">Mobile App</a>
                                <a href="#">Community</a>
                                <a href="#">Style Guide</a>
                                <a href="#">Email Newsletter</a> 
                                <a href="#">Work with us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
            
        </>
    )
}

export default Footer
