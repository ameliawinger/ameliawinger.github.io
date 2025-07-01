import React, { useEffect, useState, useRef } from "react";
import "./bin.css";
import descriptions from "../data/descriptions.json";
//import { images } from "../components/images";

const Bin = ({ id, data }) => {
  //const imagePath = `${images[data.image]}.png`;

  console.log("jsondata is ", `url(/assets_v1/${data.id}.svg)`);
  return (
    <div id={id} className="bin-wrapper">
      <div className="story-icon">
        <a
          className="a-wrapper"
          href={data.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={`/assets_v3/${data.id}.jpg`} className="story-image" />
        </a>
      </div>
      <div className="story-details">
        <h3 className="story-title">{data.title}</h3>
        <div className="story-slugline">
          {data.outlet} | {data.pubdate}
        </div>
        <div className="story-description">
          <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
        </div>
        {data.awards && (
          <div className="story-awards">Awards: {data.awards}</div>
        )}
      </div>
    </div>
  );
};

export default Bin;
