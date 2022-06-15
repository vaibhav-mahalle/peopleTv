import React, { useState } from "react";
import "./VideoItem.css";
import { Link } from "react-router-dom";
import {
  MdMoreVert,
  MdPlaylistAdd,
  MdOutlineWatchLater,
  MdWatchLater,
  MdOutlinePlaylistAddCheck,
} from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { Modal } from "../Modal/Modal";
import { BiLike } from "react-icons/bi";
import {
  LikeVideo,
  unLikeVideo,
  isVideoLiked,
  addToHistory,
  deleteAllFromHistory,
  deleteFromHistory,
  getAllHistory,
  addToWatchLater,
  isVideoInwatchLater,
  removeFromWatchLater,
  useVideo,
  useAuth,
} from "../../context";

const VideoItem = ({ item }) => {
  const { title, videoId, creator, thumbnail, category } = item;
  const { videoState, videoDispatch } = useVideo();
  const { videos, liked, watchLater } = videoState;
  const { authState } = useAuth();
  const { isLoggedIn } = authState;
  const [showModal, setShowModal] = useState(false);
  const findRequiredVideo = (videosData) => {
    return videosData.find((videoitem) => videoitem?.videoId === videoId);
  };

  const videoData = findRequiredVideo(videos);
  const isLiked = isVideoLiked(videoData?.videoId, liked);
  const isInWatchLater = isVideoInwatchLater(videoData?.videoId, watchLater);
  return (
    <div className="video-container">
      <Link to={`/videopage/${videoId}`} className="thumbnail-container">
        <img src={thumbnail} alt="videoImage" />
      </Link>
      <div className="align-videoItem-content">
        <p className="ellipse">{title}</p>
        <div className="children-centered">
          <div>
            <p className={"txt-label"}>{creator}</p>
            <p className={"txt-gray txt-label"}>{category}</p>
          </div>
          <div>
            <MdMoreVert
              size={22}
              onClick={() => setShowModal((prev) => !prev)}
            />
          </div>
        </div>
        {showModal && (
          <div className="modal-container">
            {isLiked ? (
              <AiFillLike
                color={"var(--off-white)"}
                size={24}
                onClick={() =>
                  unLikeVideo(isLoggedIn, videoDispatch, videoData)
                }
              />
            ) : (
              <BiLike
                size={24}
                onClick={() => LikeVideo(isLoggedIn, videoDispatch, videoData)}
              />
            )}
            {isInWatchLater ? (
              <MdWatchLater
                color={"var(--off-white)"}
                size={24}
                onClick={() =>
                  removeFromWatchLater(isLoggedIn, videoDispatch, videoData)
                }
              />
            ) : (
              <MdOutlineWatchLater
                size={24}
                onClick={() =>
                  addToWatchLater(isLoggedIn, videoDispatch, videoData)
                }
              />
            )}
            {false ? (
              <MdOutlinePlaylistAddCheck size={24} />
            ) : (
              <MdPlaylistAdd size={24} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export { VideoItem };
