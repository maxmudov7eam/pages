import React from 'react'

const InStyle = () => {
    return (
        <div className='inStyle'>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="row align-items-center">

                            <div className="col-6 position-relative"> 
                                <span className='cursor '>
                                    <img src="/assets/image/section1.png" className='w-100' alt=""/>
                                    <span className=" position-absolute miniImg"><img src="/assets/icon/section-karzinka.svg" alt=""/></span>
                                </span>
                            </div>
                            <div className="col-6">
                                <h2 className="bold">Always in style!</h2>
                                <p className="regular">The standard chunk of Lorem Ipsum below for those interested. The standard chunk of for those interested.</p>
                                
                                <div className="d-flex align-items-center mb-2">
                                    <h3 className="semibold mr-1">$ 249.99</h3>
                                    <h4 className="light">/ <span>$ 449.99</span></h4>
                                </div>
                                <div className='mt-2'>
                                    <span><img src="/assets/icon/stars.svg" className='cursor' alt=""/></span>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                    
                    <div className="col-6">
                        <div className="row align-items-center">

                            <div className="col-6 position-relative"> 
                                <span className='cursor '>
                                    <img src="/assets/image/section2.png" className='w-100' alt=""/>
                                    <span className=" position-absolute miniImg"><img src="/assets/icon/section-karzinka.svg" alt=""/></span>
                                </span>
                            </div>
                            <div className="col-6">
                                <h2 className="bold">Always in style!</h2>
                                <p className="regular">The standard chunk of Lorem Ipsum below for those interested. The standard chunk of for those interested.</p>
                                
                                <div className="d-flex align-items-center mb-2">
                                    <h3 className="semibold mr-1">$ 249.99</h3>
                                    <h4 className="light">/ <span>$ 449.99</span></h4>
                                </div>
                                <div className='mt-2'>
                                    <span><img src="/assets/icon/stars.svg" className='cursor' alt=""/></span>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InStyle
