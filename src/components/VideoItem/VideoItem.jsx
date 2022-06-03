import React from "react";
import "./VideoItem.css";
import HomeImg1 from "../../assets/HomeImg1.jpg";
import { Link } from "react-router-dom";
import { useVideo } from "../../context/Video/context";

const VideoItem = ({item}) => {
  const {title,videoId,description,creator,thumbnail,category} = item;
  const video = useVideo();

  console.log(video);
  return (
    <div className="video-container">
      <Link to="/" className="thumbnail-container">
        <img src={thumbnail} alt="videoImage" />
      </Link>
      <div className="align-content">
        <p className="ellipse">{title}</p>
        <div className="children-centered">
          <div>
            <p className={"txt-label"}>{creator}</p>
            <p className={"txt-gray txt-label"}>{category}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { VideoItem };
