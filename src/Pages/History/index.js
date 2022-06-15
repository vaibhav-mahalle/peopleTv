import React from "react";
import { Link } from "react-router-dom";
import { VideoCon } from "../../components";
import { useVideo } from "../../context";

export const History = () => {
  const { videoState } = useVideo();
  const { history } = videoState;

  return (
    <>
      {history.length === 0 ? (
        <div className="align-content">
          <div className="msg-container txt-xlg">
            Nothing in here
            <Link to="/explore" className="txt-white-color p-l-1">
              watch now
            </Link>
          </div>
        </div>
      ) : (
        <>
          <h2 className="common-page-heading p-1"> History --- {history.length}</h2>
          <div className="common-videolisting-container">
            {history.map((item) => {
              return <VideoCon item={item} functionType="deleteHistory" />;
            })}
          </div>
        </>
      )}
    </>
  );
};
