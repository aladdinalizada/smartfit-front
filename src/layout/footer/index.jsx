import React from "react";
import Logo from "/logo-white.svg";
import "./index.css";
const Footer = () => {
  return (
    <div className="footer">
      <a href="#">
        <img src={Logo} alt="Smartfit Logo" fetchPriority="auto" />
        Smartfit
      </a>
      <ul className="links">
        <li>App Store</li>
        <li>Google Play</li>
        <li>About us</li>
        <li>Contact info</li>
        <li>Privacy</li>
      </ul>
      <ul className="social">
        <li>
          <i class="fa-brands fa-facebook"></i>
        </li>
        <li>
          <i class="fa-brands fa-twitter"></i>
        </li>
        <li>
          <i class="fa-brands fa-instagram"></i>
        </li>
        <li>
          <i class="fa-brands fa-linkedin"></i>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
