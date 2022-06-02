import React from "react";
import "./VideoItem.css";
import HomeImg1 from "../../assets/HomeImg1.jpg";
import { Link } from "react-router-dom";

const VideoItem = () => {
  return (
    <div className="video-container">
      <Link to="/" className="thumbnail-container">
        <img src={HomeImg1} alt="videoImage" />
      </Link>
      <div className="align-content">
        <p className="ellipse">How to complete anythig fastr</p>
        <div className="children-centered">
          <div>
            <p className={"txt-label"}>motivational speaker</p>
            <p className={"txt-gray txt-label"}>motivation</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { VideoItem };
