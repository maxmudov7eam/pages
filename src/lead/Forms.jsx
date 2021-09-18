import React, {useState, useEffect} from 'react';
import Aos from 'aos';

const Forms = () => {
        
    useEffect(() => {
        Aos.init({
            once: true,
            duration: 1900,
            easing: 'ease-in-out'
        })
    })

    return (
        <div className='form' id='four'>
            <div className="container">
                <div className="row position-relative">
                    <div className="col-12 ">
                        <h6  className="bold position-absolute miniWord">CONTACTS</h6>
                        <h3 data-aos='fade-up' className="bold">Contact us</h3>
                        <p data-aos='fade-up' className="light">Let’s get to the nex level together</p>
                    </div>
                    <div  data-aos='fade-right' className="col-lg-6 col-md-12">
                        <div className=' position-relative'>
                            <input type="text" className='form-control border-0 shadow-none f' placeholder='Enter your first name' />
                            <span className=' position-absolute mini regular'>Full name</span>
                        </div>
                        <div className="position-relative">
                            <input type="email" className='form-control border-0 shadow-none s' placeholder='Enter your email' />
                            <span className=' position-absolute mini regular'>Email</span>
                        </div>
                        <div className="position-relative">
                            <textarea placeholder='Your message' className='form-control border-0 shadow-none t' rows='10' ></textarea>
                            <span className=' position-absolute mini regular'>How can we help?</span>
                        </div>
                        <button className="btn myBtn regular mb-lg-0 mb-5">Send</button>
                    </div>

                    <div data-aos='fade-left' className="col-lg-6 col-md-12">
                        <div className='d-flex flex-column'>
                            <a className='d-flex mb-4' href="tel:+16475639114"><span className="mr-3"><img src="/assets2/icon/phone.svg" alt=""/></span> +1 (647)-563-9114</a>
                            <a className='d-flex mb-4' href="https://mail.google.com/mail/u/0"><span className="mr-3"><img src="/assets2/icon/email.svg" alt=""/></span> lead@gmail.com</a>
                            <a className='d-flex mb-4' href="https://goo.gl/maps/aoBqHsepeoVTXVFt7"><span className="mr-3"><img src="/assets2/icon/location.svg" alt=""/></span> Margaretenstraße 70/3, 1050 Vienna, Austria</a>
                        </div>
                        <div className="d-flex mt-5 rCard">
                            <div className="myCard mr-4">
                                <h5 className="regular">BECOME A CLIENT </h5>
                                <a href="https://mail.google.com/mail/u/0">business@LEAD.com </a> 
                                <span className="icon"></span>
                            </div>
                            <div>
                                <h4 className="regular">Follow us</h4>
                                <span><a href="htpps://www.facebook.com"><img src="/assets2/icon/be.svg" alt=""/></a></span>
                                <span><a href="htpps://www.facebook.com"><img src="/assets2/icon/facebook.svg" alt=""/></a></span>
                                <span><a href="htpps://www.instagram.com"><img src="/assets2/icon/instagram.svg" alt=""/></a></span>
                            </div>
                        </div>
                        <div className="d-flex mt-5 rCard">
                            <div className="myCard mr-4">
                                <h5 className="regular">BECOME A PARTNER </h5>
                                <a href="https://mail.google.com/mail/u/0">business@LEAD.com </a> 
                                <span className="icon"></span>
                            </div>
                            <div className="myCard mr-4">
                                <h5 className="regular">Join Team Lead</h5>
                                <a href="https://mail.google.com/mail/u/0">business@LEAD.com </a> 
                                <span className="icon"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forms
