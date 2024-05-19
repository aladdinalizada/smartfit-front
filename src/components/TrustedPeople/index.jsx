import React from "react";
import "./index.css";
import Star from "../../assets/star.svg";
import { useEffect } from "react";
const TrustedPeople = () => {
  const handleClick = (e) => {
    const cards = document.getElementsByClassName("trustedPeople");
    cards[0].classList.add("transition");
    setTimeout(() => {
      if (cards[0].classList.contains("transition")) {
        cards[0].classList.remove("transition");
      }
    }, 3000);
  };
  return (
    <div className="trustedContainer">
      <div className="title">
        <h2>Trusted by people</h2>
      </div>
      <ul className="trustedPeople" onClick={(e) => handleClick(e)}>
        <li className="cards card1">
          <div className="rating">
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
          </div>
          <div className="comment">
            <p>
              "I love how the SmartFit demo lets me create such a realistic
              avatar! It makes me confident that the virtual try-on will be
              super helpful when the full app launches."
            </p>
          </div>
          <div className="name">
            <hr />
            <p>Jane D</p>
          </div>
        </li>
        <li className="cards card2">
          <div className="rating">
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
          </div>
          <div className="comment">
            <p>
              "I love how the SmartFit demo lets me create such a realistic
              avatar! It makes me confident that the virtual try-on will be
              super helpful when the full app launches."
            </p>
          </div>
          <div className="name">
            <hr />
            <p>Jane D</p>
          </div>
        </li>
        <li className="cards card3">
          <div className="rating">
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
          </div>
          <div className="comment">
            <p>
              "I love how the SmartFit demo lets me create such a realistic
              avatar! It makes me confident that the virtual try-on will be
              super helpful when the full app launches."
            </p>
          </div>
          <div className="name">
            <hr />
            <p>Jane D</p>
          </div>
        </li>
        <li className="cards card4">
          <div className="rating">
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
          </div>
          <div className="comment">
            <p>
              "I love how the SmartFit demo lets me create such a realistic
              avatar! It makes me confident that the virtual try-on will be
              super helpful when the full app launches."
            </p>
          </div>
          <div className="name">
            <hr />
            <p>Jane D</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default TrustedPeople;
