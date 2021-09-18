import React from 'react'

const CompactCamera = () => {
    return (
        <div className='compactCamera'>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="myCard position-relative">
                            <span className="position-absolute  first"><img src="/assets/image/section3.png" alt=""/></span>
                            <div className="row">
                                <div className="col-8">
                                    <p className="regular">Get up to 20% off Today Only!</p>
                                    <h3 className="semibold">THE 4K HDR COMPACTS DRONE</h3>
                                    <button className="btn myBtn p-0">Show Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="myCard position-relative">
                            <span className="position-absolute myImg"><img src="/assets/image/section4.png" alt=""/></span>
                            <div className="row">
                                <div className="col-8">
                                    <p className="regular">Get up to 20% off Today Only!</p>
                                    <h3 className="semibold">THE 4K HDR COMPACTS Camera</h3>
                                    <button className="btn myBtn p-0">Show Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompactCamera
