import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemHeading,
} from "react-accessible-accordion";
import "./index.css";
import Add from "../../assets/add.svg";
// import "react-accessible-accordion/dist/fancy-example.css";
const FAQ = () => {
  const items = [
    {
      title: "How does the virtual try-on work?",
      content:
        "Our technology uses machine learning to predict how the glasses will look on you. You can try on different styles and colors to see what suits you best.",
    },
    {
      title: "Is my personal information secure?",
      content:
        "Yes, we take privacy and security very seriously. We do not store any images of your face or any other personal information.",
    },
    {
      title: "How accurate is the virtual try-on?",
      content:
        "Our technology is very accurate and will give you a good idea of how the glasses will look on you. However, we recommend trying them on in person before making a purchase.",
    },
    {
      title: "Can I return clothes I bought after using the virtual try-on?",
      content:
        "Yes, you can return any items you bought using the virtual try-on. We offer a 30-day return policy on all items.",
    },
  ];
  return (
    <div className="faqContainer">
      <h2>Frequently asked questions</h2>
      <Accordion allowZeroExpanded>
        {items.map((item) => (
          <AccordionItem key={item.uuid}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <img src={Add} alt="" /> {""}
                {item.title}
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>{item.content}</AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
