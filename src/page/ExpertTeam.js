import React, { useEffect } from 'react';
import Aos from 'aos';

const ExpertTeam = () => {

    useEffect(() => {
        Aos.init({
            once: true,
            duration: 1500,
            easing: 'ease-in-out'
        })
    })

    return (
        <div className="expertTeam">
            <div className="container">
                <div className="row">
                    <div data-aos='fade-up' className="col-12 text-center ">
                        <h2>Our Expert Team Members</h2>
                        <h6 className='font-weight-light'>This new-found knowledge may then be used by engineers to
                            create new tools and machines.</h6>
                    </div>

                    <div data-aos='fade-up' className="col-lg-3 col-md-6 mb-4 ">
                        <div className="card p-0  ">
                            <div className="card-body p-0 border-0 text-center">
                                <span className='mainSpan'><img src="/assets/image/expert1.png" alt=""/></span>
                                <h5>Nattasha</h5>
                                <p>Web Develper</p>
                                <div className="d-flex imgFlex">
                                    <span><img src="/assets/icon/facebook.svg" alt=""/></span>
                                    <span><img src="/assets/icon/twitter.svg" alt=""/></span>
                                    <span><img src="/assets/icon/linkedin.svg" alt=""/></span>
                                    <span><img src="/assets/icon/google.svg" alt=""/></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div data-aos='fade-up' className="col-lg-3 col-md-6 mb-4 ">
                        <div className="card p-0  ">
                            <div className="card-body p-0 border-0 text-center">
                                <span className='mainSpan'><img src="/assets/image/expert2.png" alt=""/></span>
                                <h5>John Doe</h5>
                                <p>Web Designer</p>
                                <div className="d-flex imgFlex">
                                    <span><img src="/assets/icon/facebook.svg" alt=""/></span>
                                    <span><img src="/assets/icon/twitter.svg" alt=""/></span>
                                    <span><img src="/assets/icon/linkedin.svg" alt=""/></span>
                                    <span><img src="/assets/icon/google.svg" alt=""/></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div data-aos='fade-up' className="col-lg-3 col-md-6 mb-4 ">
                        <div className="card p-0  ">
                            <div className="card-body p-0 border-0 text-center">
                                <span className='mainSpan'><img src="/assets/image/expert3.png" alt=""/></span>
                                <h5>Haris Milas</h5>
                                <p>Ceo & Co-Funder</p>
                                <div className="d-flex imgFlex">
                                    <span><img src="/assets/icon/facebook.svg" alt=""/></span>
                                    <span><img src="/assets/icon/twitter.svg" alt=""/></span>
                                    <span><img src="/assets/icon/linkedin.svg" alt=""/></span>
                                    <span><img src="/assets/icon/google.svg" alt=""/></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div data-aos='fade-up' className="col-lg-3 col-md-6  ">
                        <div className="card p-0  border-0">
                            <div className="card-body p-0 border-0 text-center">
                                <span className='mainSpan'><img src="/assets/image/expert4.png" alt=""/></span>
                                <h5>Nelson Mecoy</h5>
                                <p>Marketing Manager</p>
                                <div className="d-flex imgFlex">
                                    <span><img src="/assets/icon/facebook.svg" alt=""/></span>
                                    <span><img src="/assets/icon/twitter.svg" alt=""/></span>
                                    <span><img src="/assets/icon/linkedin.svg" alt=""/></span>
                                    <span><img src="/assets/icon/google.svg" alt=""/></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExpertTeam;