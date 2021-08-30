import React from "react";

const Card = ({ logo, title, description, learnMoreLink, classes }) => {
  return (
    <div className={"card " + classes}>
      <img src={logo} alt="" />
      <h1>{title}</h1>
      <p>{description}</p>
      <a href={learnMoreLink}>
        <div className="btn">Learn More</div>
      </a>
    </div>
  );
};

export default Card;
