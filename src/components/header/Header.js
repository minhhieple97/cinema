import React, { useState } from 'react'
import logo from '../../logo.svg';
import "./Header.scss";
const Header = () => {
    const [navClass, setNavClass] = useState(false);
    const [menuClass, setMenuClass] = useState(false);
    const toggleMenu = () => {
        setNavClass(!navClass);
        setMenuClass(!menuClass);
        if (navClass) {
            document.body.classList.add('header-nav-open');
        }
        else {
            document.body.classList.remove('header-nav-open');
        }
    }
    return (
        <>
            <div className="header-nav-wrapper" >
                <div className="header-bar" ></div>
                <div className="header-navbar" >
                    <div className="header-image" >
                        {/* <img src={logo} alt="" /> */}
                       Cinema App
                    </div>
                    <div
                        className={`${menuClass ? "header-menu-toggle is-active" : "header-menu-toggle"}`}
                        id="header-mobile-menu"
                        onClick={() => toggleMenu()}
                    >
                        <span className="bar" ></span>
                        <span className="bar" ></span>
                        <span className="bar" ></span>
                    </div>
                    <ul className={`${navClass ? "header-nav header-mobile-nav" : "header-nav"}`} >
                        <li className="header-nav-item" >Now playing</li>
                        <li className="header-nav-item" >New Movies</li>
                        <input
                            className="search-input"
                            type="text"
                            placeholder="Search for a movie"
                        />
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header
