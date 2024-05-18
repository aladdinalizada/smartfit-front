import React from "react";
import "./index.css";
const Innovation = () => {
  return (
    <div className="innavtionContainer">
      <div className="title">
        <h3>New Innavation</h3>
      </div>
      <div className="innovationCards">
        <div className="innovationCard1">
          <h4>Personalizing your Avatar</h4>
          <p>
            In addition to measurements and body shapes, shoppers can
            personalize their avatar’s. Easy and fun way to drive engagement.
          </p>
        </div>
        <div className="innovationCard2">
          <h4>Visualizing apparel</h4>
          <p>
            Our solution is plugged into your e-commerce store, allowing your
            customers to access the fitting room without leaving your store. 3D
            visualization further increases confidence to purchase, thus
            increasing conversions
          </p>
        </div>
      </div>
    </div>
  );
};

export default Innovation;
