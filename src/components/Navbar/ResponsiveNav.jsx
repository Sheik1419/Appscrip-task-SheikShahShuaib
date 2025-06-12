import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Logo, Search, Heart, Bag, User, MenuBar } from "../../assets/js/Icons.js";

const ResponsiveNav = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const toggleNavbar = () => {
        setNavbarOpen(!navbarOpen);
    };

    return (
        <>
            {/* Responsive Header */}
            <div className="responsive-button">
                <div className="responsive-left">
                    <img src={MenuBar} height="25px" alt="" onClick={toggleNavbar} style={{ cursor: "pointer" }} />
                    <img src={Logo} height="25px" alt="" />
                </div>
                <div className="navbar-center">
                    <h2>LOGO</h2>
                </div>
                <ul className="navbar-nav">
                    <li className="nav-item" id="home">
                        <NavLink to="">
                            <img src={Search} height="20px" alt="" />
                        </NavLink>
                    </li>
                    <li className="nav-item" id="wishlist">
                        <NavLink to="">
                            <img src={Heart} height="20px" alt="" />
                        </NavLink>
                    </li>
                    <li className="nav-item" id="offers">
                        <NavLink to="">
                            <img src={Bag} height="20px" alt="" />
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* Responsive SideNav */}
            <div className={`respNavbar ${navbarOpen ? "open" : ""}`}>
                <div className="navbar-content">
                    <div className="responsive-left">
                        <NavLink href="/">
                            <img src={Logo} height="25px" title="" alt="" />
                        </NavLink>
                        <div className="navbar-center">
                            <h2>LOGO</h2>
                        </div>
                        <button className="close-btn" onClick={toggleNavbar}>×</button>
                    </div>
                    <ul className="navbar-icons">
                        <li className="nav-item" id="home">
                            <NavLink to="">
                                <img src={Search} height="20px" alt="" />
                            </NavLink>
                        </li>
                        <li className="nav-item" id="wishlist">
                            <NavLink to="">
                                <img src={Heart} height="20px" alt="" />
                            </NavLink>
                        </li>
                        <li className="nav-item" id="offers">
                            <NavLink to="">
                                <img src={Bag} height="20px" alt="" />
                            </NavLink>
                        </li>
                        <li className="nav-item" id="cart">
                            <NavLink to="">
                                <img src={User} height="20px" alt="" />
                            </NavLink>
                        </li>
                        <li className="nav-item" id="orders">
                            <NavLink className="nav-link" to="" style={{ textAlign: "center" }}>
                                <span>ENG</span> <i className="fas fa-angle-down"></i>
                            </NavLink>
                        </li>
                    </ul>
                    <ul className="navlinks">
                        <li>
                            <NavLink to="/shops" className="nav-link">Shops</NavLink>
                        </li>
                        <li>
                            <NavLink to="/skills" className="nav-link">Skills</NavLink>
                        </li>
                        <li>
                            <NavLink to="/stories" className="nav-link">Stories</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className="nav-link">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className="nav-link">Contact Us</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ResponsiveNav;