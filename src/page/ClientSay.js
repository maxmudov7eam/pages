import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

const ClientSay = () => {
    const options = {
        autoplay: true,
        dotsEach: true,
        loop: true,
        responsive: {
            0: {
                items: 1.1,
            },
            600: {
                items: 1.1,
            },
            900: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        },
    };
    return (
        <div className="clientSay">
            <div className="container">
                <div className="row flex-nowrap">
                    <div className="col-12 text-center">
                        <h2>Our Clients Say</h2>
                        <h6 className='font-weight-light'>Our in - house search engine experts deliver profitable Google,
                        Bing, Yahoo Ranking.</h6>
                    </div>
                </div>
            </div>

            <div className=" container-fluid">
                <div className="row">

                   <OwlCarousel {...options}
                    className=' owl-theme'
                    
                    
                    
                    // responsive: {
                    //     0: {
                    //         items: 1
                    //     },
                    //     576: {
                    //         items: 2
                    //     },
                    //     1000: {
                    //         items: 4.5
                    //     }
                    // }
                   >
                       <div className="item">
                            {/* <div className="col-4"> */}
                                <div className="card border-0 p-0 text-center">
                                    <div className="card-body p-0 border-0 position-relative">
                                        <p>
                                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                                            quos dolores et quas molestias excepturi sint 
                                            cupiditate non provident.
                                        </p>
                                        <span><img src="/assets/image/client1.png" alt=""/></span>
                                        <h3>Rabith Halson</h3>
                                        <h4>Web Design</h4>

                                        <span className=' position-absolute quote'><img src="/assets/image/quote.png" alt=""/></span>
                                    </div>
                                </div>
                            {/* </div> */}
                        </div>
                       <div className="item">
                            {/* <div className="col-4"> */}
                                <div className="card border-0 p-0 text-center">
                                    <div className="card-body p-0 border-0 position-relative">
                                        <p>
                                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                                            quos dolores et quas molestias excepturi sint 
                                            cupiditate non provident.
                                        </p>
                                        <span><img src="/assets/image/client1.png" alt=""/></span>
                                        <h3>Rabith Halson</h3>
                                        <h4>Web Design</h4>

                                        <span className=' position-absolute quote'><img src="/assets/image/quote.png" alt=""/></span>
                                    </div>
                                {/* </div> */}
                            </div>
                        </div>
                       <div className="item">
                            {/* <div className="col-4"> */}
                                <div className="card border-0 p-0 text-center">
                                    <div className="card-body p-0 border-0 position-relative">
                                        <p>
                                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                                            quos dolores et quas molestias excepturi sint 
                                            cupiditate non provident.
                                        </p>
                                        <span><img src="/assets/image/client1.png" alt=""/></span>
                                        <h3>Rabith Halson</h3>
                                        <h4>Web Design</h4>

                                        <span className=' position-absolute quote'><img src="/assets/image/quote.png" alt=""/></span>
                                    </div>
                                </div>
                            {/* </div> */}
                        </div>
                       <div className="item">
                            {/* <div className="col-4"> */}
                                <div className="card border-0 p-0 text-center">
                                    <div className="card-body p-0 border-0 position-relative">
                                        <p>
                                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                                            quos dolores et quas molestias excepturi sint 
                                            cupiditate non provident.
                                        </p>
                                        <span><img src="/assets/image/client1.png" alt=""/></span>
                                        <h3>Rabith Halson</h3>
                                        <h4>Web Design</h4>

                                        <span className=' position-absolute quote'><img src="/assets/image/quote.png" alt=""/></span>
                                    </div>
                                </div>
                            {/* </div> */}
                        </div>
                      
                   </OwlCarousel> 

                </div>
            </div>
        </div>
    );
};

export default ClientSay;