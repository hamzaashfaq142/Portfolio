import React from "react";
import Config from "../config";

function Home() {
  return (
    <div className="home-container container">
      <div className="row">
        <div className="col-md-8 col-lg-6 mx-auto">
          <h2 className="tagline">{Config.tagLine}</h2>
          <h1 className="portfolio-name">{Config.portfolioName}</h1>
          <p className="overview">{Config.overview}</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
