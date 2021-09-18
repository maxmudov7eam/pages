const Header = () => {
    return (
        <div className='header position-relative'>
            <span className="position-absolute woo">
                <img src="/asset/image/woo.png" alt=""/>
            </span>
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <h1>Building exactly the eCommerce website you want.</h1>
                        <p>
                            WooCommerce is a customizable, open-source eCommerce platform built on WordPress. 
                            Get started quickly and make your way.
                        </p>
                        <div className="d-flex align-items-center">
                            <button className="btn myBtn">Start a New Store</button>
                            <a href="#"><span>or</span>  Customize & Extend ›</a>
                        </div>
                    </div>
                    <div className="col-md-5 position-absolute myCol">
                        <i><img className='w-100' src="/asset/image/header-bg.svg" alt=""/></i>
                    </div>

                    <div className="col-12">
                        <h3>Your eCommerce made simple</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
