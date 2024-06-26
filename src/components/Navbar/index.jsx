import React from "react";
import Logo from "/logo.svg";
import "./index.css";
const Navbar = () => {
  return (
    <div className="container">
      <div className="content">
        <a className="logo" href="#">
          <img src={Logo} alt="Smartfit Logo" fetchPriority="auto" />
          Smartfit
        </a>
        <nav>
          <ul>
            <li>About</li>
            <li>FAQs</li>
            <li>Contact us</li>
          </ul>
        </nav>
        <a href="#" className="register">
          Register
        </a>
      </div>
    </div>
  );
};

export default Navbar;
