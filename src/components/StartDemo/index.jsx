import React from "react";
import "./index.css";
import Arrow from "../../assets/arrow.svg";
import BackgroundImg from "../../assets/oval.svg";
const StartDemo = () => {
  return (
    <div className="demoContainer">
      <div className="title">
        <h2>
          Are you ready for {""}
          <span>innovation?</span>
        </h2>
      </div>
      <img src={Arrow} alt="" />
      <p>Limited early access slots</p>
      <button className="startDemo">Start Demo</button>
      <img src={BackgroundImg} alt="" className="backgroundImg" />
    </div>
  );
};

export default StartDemo;
