import React, { useState } from "react";
import "./VideoItem.css";
import { Link } from "react-router-dom";
import { useVideo } from "../../context/Video/context";
import { MdMoreVert, MdPlaylistAdd, MdOutlineWatchLater } from "react-icons/md";
import { Modal } from "../Modal/Modal";
import { BiLike } from "react-icons/bi";
import { LikeVideo, unLikeVideo } from "../../context/Video/liked";


const VideoItem = ({ item }) => {
  const { title, videoId, creator, thumbnail, category } = item;
  const video = useVideo();
  const [showModal, setShowModal] = useState(false);
  const [likedVideos,setLikedVideos] = useState([]);
  const [watchlater, setWatchLater] = useState([]);

  const addToLikedVideos = () => {
    setLikedVideos([...likedVideos, item]); 
  }
  const addToWatchLater = () => {
    setWatchLater([...watchlater, item]); 
  }
  console.log(item);
  console.log(likedVideos);
  
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
              <BiLike size={22} onClick={()=> addToLikedVideos()}/>
              <MdOutlineWatchLater size={22} onClick={()=> addToWatchLater()}/>
              <MdPlaylistAdd size={22} />
            </div>
          ) }
      </div>
    </div>
  );
};

export { VideoItem };
