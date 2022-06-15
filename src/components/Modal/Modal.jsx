import React, { useState, useEffect } from "react";
import { AiFillCloseCircle, AiFillCheckSquare } from "react-icons/ai";
import { BsPlusLg, BsFillPlusCircleFill } from "react-icons/bs";
import {
  useAuth,
  useVideo,
  addNewPlaylist,
  addVideoToPlaylist,
  getAllPlaylist,
  isVideoPresentInPlaylist,
  removeVideoFromPlaylist
} from "../../context";
import "./Modal.css";
import { ToastMsg } from "../ToastMsg/ToastMsg";

const Modal = () => {
  const { authState } = useAuth();
  const { isLoggedIn } = authState;
  const { videoState, videoDispatch, setShowModal, video } = useVideo();
  const { playlists } = videoState;
  const [playlistName, setPlaylistName] = useState("");

  const handleChange = (e) => {
    setPlaylistName(e.target.value);
  };

  const handleAddPlaylist = () => {
    if (playlistName !== "") {
      addNewPlaylist(
        isLoggedIn,
        {
          title: playlistName,
          description: "New Playlist",
        },
        videoDispatch
      );
    } else {
      ToastMsg("Enter Playlist Title", "warning");
    }
    setPlaylistName("");
  };

  useEffect(() => {
    getAllPlaylist(isLoggedIn, videoDispatch);
  }, [playlists]);

  return (
    <div className="modal-box">
      <div className="flex-between">
        <h2>Save to Playlist</h2>
        <AiFillCloseCircle
          onClick={() => setShowModal(false)}
          className="cursorPointer"
          size={35}
          color={"var(--off-white)"}
        />
      </div>
      <div className="play-list-container">
        <>
       
          {playlists?.map(({ _id, title, videos }) => (
            <li key={_id} className="playlist-item">
              {isVideoPresentInPlaylist(video?._id, videos) ? (
                <AiFillCheckSquare
                  size={30}
                  className="cursorPointer"
                  color={"var(--primary-color)"}
                  onClick={() =>
                    removeVideoFromPlaylist(
                      isLoggedIn,
                      _id,
                      video,
                      videoDispatch
                    )
                  }
                />
              ) : (
                <BsFillPlusCircleFill
                  size={25}
                  className="cursorPointer"
                  onClick={() => {
                    addVideoToPlaylist(isLoggedIn, video, _id, videoDispatch);
                  }}
                />
              )}
              <p className="small-text-2"> {title}</p>
            </li>
          ))}
        </>
      </div>
      <div className="flex-around input-box-container">
        <input
          type="text"
          value={playlistName}
          className="input-playlist-container"
          placeholder="Add a new playlist"
          onChange={(e) => handleChange(e)}
        />
        <BsPlusLg
          size={35}
          className="cursorPointer"
          onClick={() => handleAddPlaylist()}
          color={"var(--dark-gray)"}
        />
      </div>
    </div>
  );
};

export { Modal };
