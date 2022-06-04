import React, { useState } from "react";
import "./VideoItem.css";
import { Link } from "react-router-dom";
import { useVideo } from "../../context/Video/context";
import { MdMoreVert } from "react-icons/md";
import { Modal } from "../Modal/Modal";
import { BiLike } from "react-icons/bi";
import { MdPlaylistAdd, MdHistory } from "react-icons/md";

const VideoItem = ({ item }) => {
  const { title, videoId, description, creator, thumbnail, category } = item;
  const video = useVideo();
  const [showModal, setShowModal] = useState(false);
  const showModalfunction = () => {
    return setShowModal(!showModal);
  };

  return (
    <div className="video-container">
      <Link to={`/videopage/${videoId}`} className="thumbnail-container">
        <img src={thumbnail} alt="videoImage" />
      </Link>
      <div className="align-content">
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
              <BiLike size={22} />
              <MdHistory size={22} />
              <MdPlaylistAdd size={22} />
            </div>
          ) }
      </div>
    </div>
  );
};

export { VideoItem };
