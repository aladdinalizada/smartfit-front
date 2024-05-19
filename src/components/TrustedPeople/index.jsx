import React from "react";
import "./index.css";
import Star from "../../assets/star.svg";
const TrustedPeople = () => {
  // onClick event for cards
  const handleClick = () => {
    console.log("Card Clicked");
  };
  return (
    <div className="trustedContainer">
      <div className="title">
        <h2>Trusted by people</h2>
      </div>
      <div className="trustedPeople" onClick={handleClick}>
        <div className="cards card1">
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
        </div>
        <div className="cards card2">
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
        </div>
        <div className="cards card3">
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
        </div>
        <div className="cards card4">
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
        </div>
      </div>
    </div>
  );
};

export default TrustedPeople;
