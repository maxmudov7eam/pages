

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row  firstFooter text-center text-lg-left text-md-left">
                    <div className="col-lg-3 col-md-6 mb-4">
                        <span className='footerTitle'><img src="/assets/image/logo.svg" alt=""/></span>

                        <p>Distinctively exploit optimal alignments for intuitive bandwidth. Quickly coordinate business through revolutionary.</p>
                        <div className="d-flex align-items-center social justify-content-center justify-content-lg-start justify-content-md-start">
                            <span><img src="/assets/icon/facebook.svg" alt=""/></span>
                            <span><img src="/assets/icon/twitter.svg" alt=""/></span>
                            <span><img src="/assets/icon/linkedin.svg" alt=""/></span>
                            <span><img src="/assets/icon/google.svg" alt=""/></span>
                        </div>
                    </div>
                    <div className="col-lg-2 ml-md-auto col-md-6 mb-4 ">
                        <h2 className='footerTitle'>Our Company</h2>

                        <ul className="nav flex-column">
                            <li className="nav-item li"><a href="#" className="nav-link">About Us</a></li>
                            <li className="nav-item li"><a href="#" className="nav-link">Our Services</a></li>
                            <li className="nav-item li"><a href="#" className="nav-link">Our Plan</a></li>
                            <li className="nav-item li"><a href="#" className="nav-link">Our Team</a></li>
                            <li className="nav-item li"><a href="#" className="nav-link">Latest News</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-6 mb-4  ml-auto">
                        <h2 className='footerTitle'>Our Services</h2>

                        <ul className="nav flex-column">
                            <li className="nav-item li"><a href="#" className="nav-link">Our Services</a></li>
                            <li className="nav-item li"><a href="#" className="nav-link">Our Team</a></li>
                            <li className="nav-item li"><a href="#" className="nav-link">Latest News</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 ml-auto">
                        <h2 className='footerTitle'>Contact Us</h2>
                        
                        <h5 className=" font-weight-normal"><b>Location:</b>1370 Orvilly Rot APT,New York, USA</h5>
                        <h5 className=" font-weight-normal"><b>Email:</b> growbeinfo@gmail</h5>
                        <h5 className=" font-weight-normal"><b>Phone:</b> <a href="tel: +9883524152">+324-9332-5018</a></h5>
                        
                    </div>
                </div>

                <div className="row">
                    <div className="line"></div>
                    <div className="col-12">
                        <h6 className="font-weight-light">Copyright © GrowBe 2021. All Rights Reserved.</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;









