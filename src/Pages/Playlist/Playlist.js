import React from "react";
import { Link } from "react-router-dom";
import { Modal } from "../../components/Modal/Modal";
import { useAuth, useVideo } from "../../context";
import "./Playlist.css";

export const PlayList = () => {
  const { videoState } = useVideo();
  const { playlists } = videoState;
  return (
    <>
      {playlists.length === 0 ? (
        <div className="align-content">
          <div className="msg-container txt-xlg">
            You haven't added anything
            <Link to="/explore" className="txt-white-color p-l-1">
              watch now
            </Link>
          </div>
        </div>
      ) : (
        <>
          <h2 className="common-page-heading p-1"> Playlists --- {playlists.length}</h2>
          <div className="common-videolisting-container">
            {playlists.map(({ _id, title}) => (
              <Link to={`/playlists/${_id}`} key={_id}>
                <div className="playlist-title-container txt-xlg align-content">
                  {title}
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </>
  );
};
