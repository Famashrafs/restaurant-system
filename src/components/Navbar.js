import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png"
import "./css/Navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleToggle = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/"><img src={logo} alt="Pizza chic" /></Link>
      </div>
      <ul className={isMobile ? "navbar-links mobile" : "navbar-links"}>
        <li>
          <Link to="/" onClick={() => setIsMobile(false)}>Home</Link>
        </li>
        <li>
          <Link to="/menu" onClick={() => setIsMobile(false)}>Menu</Link>
        </li>
        <li>
          <Link to="/offers" onClick={() => setIsMobile(false)}>Offers</Link>
        </li>
        <li>
          <Link to="/order-online" onClick={() => setIsMobile(false)}>Order Online</Link>
        </li>
        <li>
          <Link to="/about-us" onClick={() => setIsMobile(false)}>About Us</Link>
        </li>
        <li>
          <Link to="/contact-us" onClick={() => setIsMobile(false)}>Contact Us</Link>
        </li>
        <li>
          <Link to="/login" className="login-btn" onClick={() => setIsMobile(false)}>Login</Link>
        </li>
        <li>
          <Link to="/sign-up" className="signup-btn" onClick={() => setIsMobile(false)}>Sign Up</Link>
        </li>
      </ul>
      <div className="navbar-toggle" onClick={handleToggle}>
        {isMobile ? <span>&#x2715;</span> : <span>&#9776;</span>}
      </div>
    </nav>
  );
};

export default Navbar;
