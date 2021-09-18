import React from 'react';

const Header = () => {
    return (
        <div className="header position-relative">
            <div className="container ">
                <div className="row ">
                    <div className="col-12 text-center text-lg-left col-lg-6 position-relative animate__animated  animate__fadeInLeft">
                        <div className="leftBg position-absolute"><img src="/assets/image/header-bg.png" alt=""/></div>
                        <h1 className="">SEO & Digital
                            <span className='position-relative'> 
                                <img className='position-absolute marketingBg' src="/assets/image/marketing-bg.png" alt=""/> Marketing</span> For Your
                            Website.
                        </h1>
                        <p>
                            Provide all kind of seo services and help to improve
                            seo ranking. Globally incubate standards.
                        </p>
                        <div className=" d-none d-lg-flex align-items-center justify-content-center justify-content-lg-start">
                            <button className="btn myBtn">Start Now</button>
                            <span><img src="/assets/icon/play.svg" alt=""/></span>
                            <h5>Watch Video</h5>
                        </div>
                    </div>
                
                <span className='header-illustration animate__animated  animate__fadeInRight'>
                    <img src="/assets/image/header-illustration.png" className='w-100' alt=""/>
                    
                    <div className=" d-lg-none d-flex align-items-center justify-content-start mt-3 mt-lg-0 justify-content-lg-start myBtnGroup">
                            <button className="btn myBtn">Start Now</button>
                            <span><img src="/assets/icon/play.svg" alt=""/></span>
                            <h5>Watch Video</h5>
                    </div>

                </span>
                </div>
            </div>
        </div>
    );
};

export default Header;