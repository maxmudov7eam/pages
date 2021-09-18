import React from 'react'

const Brand = () => {
    return (
        <div className='brand'>
            <div className="container">
                <div className="row myRow">
                    <div className="offset-1 col-10 d-flex align-items-center justify-content-between">
                        <div className="card border-0 p-0 myBtn">
                            <div className="card-body border-0 p-0">
                                <span><img src="/assets/image/header1.png" className='w-100' alt=""/></span>
                            </div>
                        </div>
                        <div className="card border-0 p-0 myBtn">
                            <div className="card-body border-0 p-0">
                                <span><img src="/assets/image/header2.png" className='w-100' alt=""/></span>
                            </div>
                        </div>
                        <div className="card border-0 p-0 myBtn">
                            <div className="card-body border-0 p-0">
                                <span><img src="/assets/image/header3.png" className='w-100' alt=""/></span>
                            </div>
                        </div>
                        <div className="card border-0 p-0 myBtn">
                            <div className="card-body border-0 p-0">
                                <span><img src="/assets/image/header4.png" className='w-100' alt=""/></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Brand
