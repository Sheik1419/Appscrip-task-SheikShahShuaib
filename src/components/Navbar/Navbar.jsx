import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { Logo, Search, Heart, Bag, User } from "../../assets/js/Icons.js";
import ResponsiveNav from "./ResponsiveNav.jsx";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-div">
          <ResponsiveNav />

          <div className="navbar-header">
            <div className="navbar-brand">
              <NavLink href="/">
                <img src={Logo} height="40px" title="" alt="" />
              </NavLink>
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
          </div>

          <div className="navbar-collapse">
            <ul className="navbar-ul">
              <li className="nav-item" id="shops">
                <NavLink className="nav-link" to="/shops">
                  Shops
                </NavLink>
              </li>
              <li className="nav-item" id="skills">
                <NavLink className="nav-link" to="/skills">
                  Skills
                </NavLink>
              </li>
              <li className="nav-item" id="stories">
                <NavLink className="nav-link" to="/stories">
                  Stories
                </NavLink>
              </li>
              <li className="nav-item" id="about">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item" id="contact">
                <NavLink className="nav-link" to="/contact">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>

        </div>
        <hr />
      </nav>
    </>
  );
};

export default Navbar;
