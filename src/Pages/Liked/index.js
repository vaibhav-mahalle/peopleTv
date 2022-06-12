import React from "react";
import "./Liked.css";
import "../../App.css";
import { Link } from "react-router-dom";
import { getAllLikedVideos, unLikeVideo } from "../../context/Video/liked";
import { useVideo } from "../../context/Video/context";
import { useAuth } from "../../context/Auth/context";
import { VideoCon } from "../../components";

export const Liked = () => {
  const { videoState, videoDispatch } = useVideo();
  const { authState } = useAuth();
  const { liked } = videoState;
  
  return (
    <>
      {liked.length === 0 ? (
        <div className="align-content">
          <div className="msg-container txt-xlg">
            You haven't Liked any video
            <Link to="/explore" className="txt-gray-color p-l-1">
              watch now
            </Link>
          </div>
        </div>
      ) : (
        <div className="common-videolisting-container">{liked.map( item => {
          return(<VideoCon item={item}/>)
        })}</div>
      )}
    </>
  );
};
