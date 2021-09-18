import React from 'react'

const Facts = () => {
    return (
        <div className='facts'>
            <div className="container">
                <div className="row text-center">
                    <div className="col-12">
                        <h5 className="light">New shop</h5>
                        <h2 className="semibold">An enormous storehouse of facts</h2>
                        <p className="regular">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-4 first">
                        <div className="card p-0 border-0">
                            <div className="card-body p-0 border-0">
                                <span><img src="/assets/image/facts1.png" className='w-100' alt=""/></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Facts
