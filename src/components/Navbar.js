import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../components/css/Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Restaurant
        </Link>

        <div className="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/offers">Offers</Link>
          </li>
          <li>
            <Link to="/order-online">Order Online</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
          <li>
            <Link to="/login">Login</Link> / <Link to="/sign-up">Sign Up</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
