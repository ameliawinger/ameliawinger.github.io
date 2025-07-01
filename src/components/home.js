import React, { useEffect, useState, useRef } from "react";
import Bin from "./bin";
import descriptions from "../data/descriptions.json";

const Home = () => {
  return (
    <div>
      <div id="homepage-name-container">
        <div className="home-name-wrapper">
          <div className="home-name">
            <div className="full-name">AMELIA WINGER</div>
            <div className="title">
              Hi! I'm a journalist and front-end developer dedicated to building
              tools that make information feel clear, engaging, and empowering.
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="recent-title">Recent projects:</div>
        {descriptions.map((item, index) => (
          <Bin key={index} id={`bin${index + 1}`} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
