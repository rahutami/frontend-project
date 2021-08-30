import React, { useState } from "react";
import "../styles/style.css";

const Stat = ({ title, subtitle }) => {
  return (
    <div className="stat">
      <h2>{title}</h2>
      <h4>{subtitle}</h4>
    </div>
  );
};

const StatsPreview = () => {
  const [stats, setStates] = useState([
    {
      title: "10k+",
      subtitle: "companies",
    },
    {
      title: "314",
      subtitle: "templates",
    },
    {
      title: "12M+",
      subtitle: "queries",
    },
  ]);
  return (
    <div className="stats-preview">
      <div className="container">
        <div className="description-container">
          <h1>
            Get <span>insights</span> that help your business grow.
          </h1>
          <p>
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
          <div className="stats">
            {stats.map((stat) => (
              <Stat title={stat.title} subtitle={stat.subtitle} />
            ))}
          </div>
        </div>
        <div className="img-container">
          <div className="cover"></div>
        </div>
      </div>
    </div>
  );
};

export default StatsPreview;
