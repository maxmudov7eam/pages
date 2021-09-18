import React from 'react'

const MyNavbar = () => {
    return (
        <>

        <div className="myNavbar">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-2">
                        <span className='cursor'><img src="/assets/image/logo.png" alt=""/></span>
                    </div>
                    <div className="col-7 offset-1">
                        <ul className='d-flex align-items-center '>
                            <li><a className='regular' href="#">Home</a></li>
                            <li><a className='regular' href="#">About</a></li>
                            <li><a className='regular' href="#">Products</a></li>
                            <li><a className='regular' href="#">Blog</a></li>
                            <li><a className='regular' href="#">Shop</a></li>
                            <li><a className='regular mr-0' href="#">Contact us</a></li>
                        </ul>
                    </div>
                    <div className="col-2 d-flex align-items-center justify-content-end">
                        <span className='cursor'><img src="/assets/icon/search.svg" alt=""/></span>
                        <span className='ml-4 mr-3 cursor'><img src="/assets/icon/karzinka.svg" alt=""/></span>
                        <span className='cursor'><img src="/assets/icon/man.svg" alt=""/></span>
                    </div>
                </div>
            </div>
            
        </div>
        <div className="line"></div>
        </> 
    )
}

export default MyNavbar
