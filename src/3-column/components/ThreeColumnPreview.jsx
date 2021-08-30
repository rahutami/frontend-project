import React, { useState } from "react";
import "../styles/style.css";
import Card from "./Card";
import sedanLogo from "../images/icon-sedans.svg";
import suvsLogo from "../images/icon-suvs.svg";
import luxuryLogo from "../images/icon-luxury.svg";

const ThreeColumnPreview = () => {
  const [contents, setContents] = useState([
    {
      logo: sedanLogo,
      title: "Sedans",
      description:
        "Choose a sedan for its affordability and excellent fuel economy Ideal for cruising in the city or on your next road trip.",
      learnMoreLink: "google.com",
      classes: "sedan",
    },
    {
      logo: suvsLogo,
      title: "suvs",
      description:
        "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
      learnMoreLink: "google.com",
      classes: "suv",
    },
    {
      logo: luxuryLogo,
      title: "luxury",
      description:
        "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
      learnMoreLink: "google.com",
      classes: "luxury",
    },
  ]);
  return (
    <div className="three-column-preview flex flex-jc-ac">
      <div className="container flex flex-jc-ac">
        {contents.map((content) => (
          <Card
            logo={content.logo}
            title={content.title}
            description={content.description}
            learnMoreLink={content.learnMoreLink}
            classes={content.classes}
          />
        ))}
      </div>
    </div>
  );
};

export default ThreeColumnPreview;
