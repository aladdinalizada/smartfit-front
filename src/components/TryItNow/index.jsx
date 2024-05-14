import React from "react";
import Intro from "../../assets/intro.mp4";
import "./index.css";
const TryItNow = () => {
  return (
    <div className="tryitnowcontainer">
      <video src={Intro} autoPlay={true} muted={true} loop={true}></video>
      <div className="content">
        <a href="#">Try it Now</a>
        <p>1000 +</p>
      </div>
    </div>
  );
};

export default TryItNow;
