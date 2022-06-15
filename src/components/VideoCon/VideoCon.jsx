import React, { useState } from "react";
import "./VideoCon.css";
import { Link } from "react-router-dom";
import { useVideo } from "../../context/Video/context";
import { MdMoreVert, MdPlaylistAdd, MdOutlineWatchLater } from "react-icons/md";
import { Modal } from "../Modal/Modal";
import { BiLike } from "react-icons/bi";
import { LikeVideo, unLikeVideo,deleteFromHistory,removeFromWatchLater, removeVideoFromPlaylist } from "../../context";
import { useAuth } from "../../context/Auth/context";
import { FiTrash } from "react-icons/fi";

const VideoCon = ({ item , functionType, playlistId}) => {
  const { authState } = useAuth();
  const { isLoggedIn } = authState;
  const { videoState, videoDispatch } = useVideo();
  const {videos} = videoState;
  const { title, videoId, creator, thumbnail, category } = item;
  const findRequiredVideo = (videosData) =>
    videosData.find((videoitem) => videoitem.videoId === videoId);

  const videoData = findRequiredVideo(videos);
  const deleteVideoCard = () => {
    if(functionType === 'deleteHistory'){
      return deleteFromHistory(isLoggedIn, videoDispatch, videoData);
    }
    if(functionType === 'deleteLiked'){
      return unLikeVideo(isLoggedIn, videoDispatch, videoData);
    }
    if(functionType === 'deleteWatchLater'){
      return removeFromWatchLater(isLoggedIn, videoDispatch, videoData);
    }
    if(functionType === 'deletePlaylistVideos'){
      console.log("item",{item});
      return removeVideoFromPlaylist(isLoggedIn,
        playlistId,
        videoData,
        videoDispatch)
    }
  }

  return (
    <div className="videocon-container">
      <Link to={`/videopage/${videoId}`} className="thumbnail-container">
        <img src={thumbnail} alt="videoImage" />
      </Link>
      <div className="align-VideoItem-content">
        <p className="ellipse">{title}</p>
        <div className="children-centered">
          <div>
            <p className={"txt-label"}>{creator}</p>
            <p className={"txt-gray txt-label"}>{category}</p>
          </div>
          <div>
            <FiTrash
              size={22}
              onClick={() => deleteVideoCard()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { VideoCon };
