import React from "react";
import "./index.css";
import Navbar from "../Navbar";
const Hero = () => {
  return (
    <div className="heroContainer">
      <Navbar />
      <div className="bg"></div>
      <div className="contentText">
        <h1>
          <h2>SmartFit</h2> Try Clothes on <span>Your Avatar</span>
        </h1>
        <p>
          See how clothes look on your unique body before you buy. AI-powered
          virtual try-on technology.
        </p>
      </div>
    </div>
  );
};

export default Hero;
