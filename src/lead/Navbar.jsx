import React, { useState } from 'react'

const Navbar = () => {

    const [lang, setLang] = useState(false);
    const [navbar, setNavbar] = useState(false);
    const [burger, setBurger] = useState(false);

    const changeLang = () => {
        setLang(!lang);
    }

    const changeBurger = () => {
        setBurger(!burger)
    }
    
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

            <div className={`navbar position-relative  ${navbar ? 'actived' : ''}`}>
                <ul className={`myUl position-absolute ${burger ? 'burgered' : ''}`}>
                    <li className="myLi mr-0"><a  className="a regular en position-relative mr-0" onClick={changeLang}>EN <span className='mr-2'><img src="/assets2/icon/down.svg" alt=""/></span>
                        <span className={ `languages position-absolute ${lang ? 'clicked' : ''}`}>
                            <a href="#" className='redular'>RU</a><a href="#" className='redular'>ENG</a><a href="#" className='redular'>Another</a>
                        </span>
                        </a></li>
                    <li className="myLi"><a href="#" className="a regular "><span><img src="/assets2/icon/fullMoon.svg" alt=""/></span></a></li>
                    <li className="myLi"><a href="#third" className="a regular">Home</a></li>
                    <li className="myLi"><a href="#second" className="a regular">About</a></li>
                    <li className="myLi"><a href="#four" className="a regular">Works</a></li>
                    <li className="myLi"><a href="#" className="a regular">Price</a></li>
                    <li className="myLi"><a href="#" className="a regular">For Client</a></li>
                    <li className="myLi"><a href="#" className="a regular">Contacts</a></li>
                    <li className="myLi"><a href="#" className="a regular number">+1 (647)-563-9114</a></li>
                </ul>
                <div className="container">
                    <div className="row d-flex d-lg-none align-items-center justify-content-between w-100">
                        <div className={`burger ${burger ? 'active' : ''}`} onClick={changeBurger}>
                            <div className='f'></div>
                            <div className='s'></div>
                            <div className='t'></div>
                        </div>
                        <span><img src="/assets2/icon/miniLogo.svg" alt=""/></span>
                        <span><img src="/assets2/icon/bigPlay.svg" alt=""/></span>
                    </div>
                    <div className="row w-100">
                        <div className="col-3 brand d-none d-lg-flex">
                            <span  className='cursor'><img src="/assets2/image/logo.png" className='w-100' alt=""/></span>
                        </div>
                        <div className="col-9 d-flex align-items-center">
                            <ul className="myNav  align-items-center justify-content-between w-100 d-none d-lg-flex">
                                <li className="li mr-0"><a  className="a regular en position-relative mr-0" onClick={changeLang}>EN <span className='mr-2'><img src="/assets2/icon/down.svg" alt=""/></span>
                                    <span className={ `languages position-absolute ${lang ? 'clicked' : ''}`}>
                                        <a href="#" className='redular'>RU</a><a href="#" className='redular'>ENG</a><a href="#" className='redular'>Another</a>
                                    </span>
                                 </a></li>
                                <li className="li"><a href="#" className="a regular "><span><img src="/assets2/icon/fullMoon.svg" alt=""/></span></a></li>
                                <li className="li"><a href="#third" className="a regular">Home</a></li>
                                <li className="li"><a href="#second" className="a regular">About</a></li>
                                <li className="li"><a href="#four" className="a regular">Works</a></li>
                                <li className="li"><a href="#" className="a regular">Price</a></li>
                                <li className="li"><a href="#" className="a regular">For Client</a></li>
                                <li className="li"><a href="#" className="a regular">Contacts</a></li>
                                <li className="li"><a href="#" className="a regular number">+1 (647)-563-9114</a></li>
                            </ul>
                             <span className='cursor play position-relative d-none d-lg-flex' >
                                 <img src="/assets2/icon/play.svg"  alt=""/>
                                 <span className={`position-absolute regular ${navbar ? 'd-none' : ''}`}>Start a project</span>
                             </span>
                        </div>
                    </div>
                </div>
            </div>
            

            <div className="line"></div>

        </>
    )
}

export default Navbar
