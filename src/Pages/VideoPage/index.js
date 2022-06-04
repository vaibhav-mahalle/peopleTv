import React from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import { useVideo } from "../../context/Video/context";
import "./VideoPage.css";
import { BiLike } from "react-icons/bi";
import { MdPlaylistAdd, MdHistory } from "react-icons/md";

const VideoPage = () => {
  const { videoId } = useParams();
  const allVideos = useVideo();
  const requiredVideo =
    allVideos?.find(({ videoId: idVideo }) => idVideo === videoId) || {};
  const { title, creator, description } = requiredVideo;
  const options = {
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <>
      <div>
        <YouTube class="video-iframe" videoId={videoId} opts={options} />
        <div className="videopage-footer">
          <p className="txt-lg">{title}</p>
          <div className="video-icons">
            <div className="align-icons">
              <BiLike size={27} />
              <p className="font-xs">LIKE</p> 
            </div>
            <div className="align-icons">
              <MdHistory size={27} />
              <p className="font-xs">WATCH LATER</p>
            </div>
            <div className="align-icons">
              <MdPlaylistAdd size={27} />
              <p className="font-xs">SAVE</p>
            </div>
          </div>
          <p className="font-regular">
            Channel Name: <span className="font-light">{creator}</span>
          </p>
          <p className="font-regular">Description:</p>
          <p className="font-light txt-sm">{description}</p>
        </div>
      </div>
    </>
  );
};

export { VideoPage };
