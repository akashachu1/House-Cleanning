import React from "react";
import "./Nav.css";
import logo from "../../assets/IMG_20250316_102827_011.webp"; 
import Button from "../Button/Button"; 
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img
            src={logo}
            alt="Company Logo"
            className="logo-img"
          />
          MyCompany
        </Link>

        {/* Toggler (hamburger) */}
        <input type="checkbox" id="menu-toggle" className="menu-toggle" />
        <label htmlFor="menu-toggle" className="menu-icon">
          ☰
        </label>

        {/* Navbar Links */}
        <ul className="navbar-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Services">Services</Link></li>
          <li><Link to="/About">About Us</Link></li>
          <li><Link to="/Pricing">Pricing</Link></li>
          <li><Link to="/Contact">Contact Us</Link></li>
          <li>
            <Button>Book Now</Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
