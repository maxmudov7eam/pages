import React, {useState} from 'react'

const NavBar = () => {
    
    const [navbar, setNavbar] = useState(false);

    const changeNavbar = () => {
        if(window.scrollY >= 30) {
            setNavbar(true);
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeNavbar);

    return (
        <>

            <div className={`myNavbar ${navbar ? 'scroll' : ''}`}>
                <div className="d-flex align-items-center">

                    <div className="logo">
                        <img src="/asset/image/logo.svg" alt=""/>
                    </div>

                    <ul className='d-flex align-items-center'>
                        <li><a href="#">Sell</a></li>
                        <li><a href="#">Marketplace</a></li>
                        <li><a href="#">Community</a></li>
                        <li><a href="#">Develop</a></li>
                        <li><a href="#">Resources</a></li>
                    </ul>

                    <div className="d-flex align-items-center ml-auto">
                        <a href="#">Log In</a>
                        <button className="btn myBtn">Get Started</button>
                        <i><img src="/asset/icon/search.svg" alt=""/></i>
                    </div>
                </div>
            </div>
            
            <div className="navbarLine"></div>
        </>
    )
}

export default NavBar
