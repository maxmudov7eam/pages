import React, { useState, useEffect } from 'react';

function NavbarColor() {

    const [navbar, setNavbar] = useState(false);

    const changeBg = () => {
        if (window.scrollY >= 50) {
            setNavbar(true);
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBg)

    return (
        <>
            <div className={navbar ? 'myNavbar scroll' : 'myNavbar'}>
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <h6>Navbar brand</h6>
                        </div>
                        <div className="col-5 ml-auto">
                            <ul className="nav">
                                <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
                                <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
                                <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
                                <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
                                <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default NavbarColor;