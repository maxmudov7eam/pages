import React from 'react'

const Header = () => {
    return (
        <div className='header'>
             <div className="container">
                 <div className="row">
                     <div className="col-6 left">
                        <h5 className="regular">Favorite brands</h5>
                        <h1 className="light">
                            <span className="semibold">An exciting place </span>
                            for the whole family to shop.
                        </h1>
                        <p className="regular">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>

                        <div className="d-flex align-items-center">
                            <div className="btn myBtn">Shop now</div>
                            <h3 className="semibold">$ 249.99</h3>
                            <h4 className="light">$ 449.99</h4>
                        </div>
                     </div>
                     <div className="col-6">
                        <div className='right'>
                            <img src="/assets/image/header-bg.png" className='w-100' alt=""/>
                        </div>
                     </div>
                 </div>
             </div>
        </div>
    )
}

export default Header
