import React from "react";
import "./index.css";
const WhySmartFit = () => {
  let CardsData = [
    {
      id: 1,
      title: "Perfect Fit",
      description: "Find clothes that flatter your unique shape.",
    },
    {
      id: 2,
      title: "Shop with Confidence",
      description: "Reduce returns and buyer's remorse.",
    },
    {
      id: 3,
      title: "Style Exploration",
      description: "Experiment with new looks risk-free",
    },
    {
      id: 4,
      title: "Time Saver",
      description: "Say goodbye to crowded fitting rooms.",
    },
  ];
  return (
    <div className="whyContainer">
      <div className="top">
        <h2>Why SmartFit?</h2>
        <p>
          Smartfit is an application that will help you in your shopping, you
          can look at how it will suit you before you buy the clothes you want
        </p>
      </div>
      <div className="cards">
        {CardsData.map((card) => {
          return (
            <div className="card" key={card.id} id={"card" + card.id}>
              <h3 className="cardTitle">{card.title}</h3>
              <p className="cardDesc">{card.description}</p>
              <p></p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhySmartFit;
