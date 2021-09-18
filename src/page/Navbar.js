import React, {useState} from 'react';
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {

    const [navbar, setNavbar] = useState(false);
    const location = useLocation();
    const [burger, setBurger] = useState(false);

    const changeNavbar = () => {
        if(window.scrollY >= 30) {
            setNavbar(true);
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeNavbar);

    const changeBurger = () => {
        setBurger(!burger);
    }

    return (
        <>
            <div className={`navbar navbar-expand-lg ${navbar ? 'active' : ''}`}>
                <div className="container">

                    <Link to='/' className="navbar-brand">
                        <span><img src="/assets/image/logo.svg" alt=""/></span>
                    </Link>

                    <ul className="navbar-nav  align-items-center d-none d-lg-flex">
                        <li className="nav-item mx-2"><Link to='/' className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link></li>
                        <li className="nav-item mx-2"><Link to='about-us' className={`nav-link ${location.pathname === '/about-us' ? 'active' : ''}`}>Abous Us</Link></li>
                        <li className="nav-item mx-2"><Link to='/services' className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}>Services</Link></li>
                        <li className="nav-item mx-2"><Link to='/features' className={`nav-link ${location.pathname === '/features' ? 'active' : ''}`}>Features </Link></li>
                        <li className="nav-item mx-2"><Link to='/team' className={`nav-link ${location.pathname === '/team' ? 'active' : ''}`}>Team</Link></li>
                        <li className="nav-item mx-2"><Link to='/blog' className={`nav-link ${location.pathname === '/blog' ? 'active' : ''}`}>Blog</Link></li>
                        <li className="nav-item mx-2"><Link to='/contact' className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link></li>
                        <li className="nav-item ml-2"><Link to='/get-started' className="nav-link btn myBtn">Get Started</Link></li>
                    </ul>

                    <div onClick={changeBurger} className={`burger d-block d-lg-none ${burger ? 'burgered' : ''}`} >
                        <div className="myBurger1"></div>
                        <div className="myBurger2"></div>
                        <div className="myBurger3"></div>
                    </div>

                    <ul className={`d-flex flex-column d-lg-none burgerNav ${burger ? 'actived' : ''}`}>
                        <li onClick={changeBurger} className={`nav-item mx-2 ${burger ? 'burgered' : ''}`}><Link to='/' className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link></li>
                        <li onClick={changeBurger} className={`nav-item mx-2 ${burger ? 'burgered' : ''}`}><Link to='about-us' className={`nav-link ${location.pathname === '/about-us' ? 'active' : ''}`}>Abous Us</Link></li>
                        <li onClick={changeBurger} className={`nav-item mx-2 ${burger ? 'burgered' : ''}`}><Link to='/services' className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}>Services</Link></li>
                        <li onClick={changeBurger} className={`nav-item mx-2 ${burger ? 'burgered' : ''}`}><Link to='/features' className={`nav-link ${location.pathname === '/features' ? 'active' : ''}`}>Features </Link></li>
                        <li onClick={changeBurger} className={`nav-item mx-2 ${burger ? 'burgered' : ''}`}><Link to='/team' className={`nav-link ${location.pathname === '/team' ? 'active' : ''}`}>Team</Link></li>
                        <li onClick={changeBurger} className={`nav-item mx-2 ${burger ? 'burgered' : ''}`}><Link to='/blog' className={`nav-link ${location.pathname === '/blog' ? 'active' : ''}`}>Blog</Link></li>
                        <li onClick={changeBurger} className={`nav-item mx-2 ${burger ? 'burgered' : ''}`}><Link to='/contact' className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link></li>
                        <li onClick={changeBurger} className={`nav-item ml-2 ${burger ? 'burgered' : ''}`}><Link to='/get-started' className="nav-link btn myBtn">Get Started</Link></li>
                    </ul>
                    
                </div>
            </div>

            <div className="navbarLine "></div>
        </>
    );
};

export default Navbar;