import "./VideoPage.css";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import {
  LikeVideo,
  unLikeVideo,
  isVideoLiked,
  addToHistory,
  deleteAllFromHistory,
  deleteFromHistory,
  getAllHistory,
  isVideoInHistory,
  addToWatchLater,
  isVideoInwatchLater,
  removeFromWatchLater,
  useVideo,
  useAuth,
} from "../../context";
import { BiLike } from "react-icons/bi";
import {
  MdPlaylistAdd,
  MdOutlineWatchLater,
  MdWatchLater,
  MdOutlinePlaylistAddCheck,
} from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { Modal, ToastMsg } from "../../components";

const VideoPage = () => {
  const { videoId } = useParams();
  const { authState } = useAuth();
  const { isLoggedIn } = authState;
  const {
    videoState,
    videoDispatch,
    setShowModal,
    showModal,
    setVideo
  } = useVideo();
  const { videos, liked, watchLater, playlists, history } = videoState;

  const options = {
    playerVars: {
      autoplay: 0,
    },
  };

  const findRequiredVideo = (videosData) =>
    videosData.find((item) => item.videoId === videoId);
  const videoData = findRequiredVideo(videos);
  const isLiked = isVideoLiked(videoData?.videoId, liked);
  const isInWatchLater = isVideoInwatchLater(videoData?.videoId, watchLater);
  return (
    <>
      <div className="videopage-container">
        <div>
          <YouTube
            class="video-iframe"
            videoId={videoId}
            opts={options}
            host={"https://www.youtube.com"}
            onReady={() => addToHistory(isLoggedIn, videoDispatch, videoData)}
          />
          <div className="videopage-footer">
            <p className="txt-lg">{videoData?.title}</p>
            <div className="video-icons txt-gray-color">
              <div className="align-icons">
                {isLiked ? (
                  <>
                    <AiFillLike
                      color={"var(--vl-primary)"}
                      size={27}
                      onClick={() =>
                        unLikeVideo(isLoggedIn, videoDispatch, videoData)
                      }
                    />
                    <p className="font-xs">DISLIKE</p>
                  </>
                ) : (
                  <>
                    <BiLike
                      size={27}
                      onClick={() =>
                        LikeVideo(isLoggedIn, videoDispatch, videoData)
                      }
                    />
                    <p className="font-xs">LIKE</p>
                  </>
                )}
              </div>
              <div className="align-icons">
                {isInWatchLater ? (
                  <>
                    <MdWatchLater
                      color={"var(--vl-primary)"}
                      size={27}
                      onClick={() =>
                        removeFromWatchLater(
                          isLoggedIn,
                          videoDispatch,
                          videoData
                        )
                      }
                    />
                    <p className="font-xs">WATCH LATER</p>
                  </>
                ) : (
                  <>
                    <MdOutlineWatchLater
                      size={27}
                      onClick={() =>
                        addToWatchLater(isLoggedIn, videoDispatch, videoData)
                      }
                    />
                    <p className="font-xs">WATCH LATER</p>
                  </>
                )}
              </div>
              <div className="align-icons">
                {false ? (
                  <>
                    <MdOutlinePlaylistAddCheck size={27} />
                    <p className="font-xs">SAVE</p>
                  </>
                ) : (
                  <>
                    <MdPlaylistAdd
                      size={27}
                      onClick={() => {
                        if (isLoggedIn) {
                           setShowModal((prev) => !prev);
                           setVideo(videoData);
                        } else {
                           ToastMsg("Please Login", "warning");
                        }
                      }}
                    />
                    <p className="font-xs">SAVE</p>
                  </>
                )}
              </div>
            </div>
            <p className="font-regular p-b-1">
              Channel Name:{" "}
              <span className="font-light">{videoData?.creator}</span>
            </p>
            <p className="font-regular ">Description:</p>
            <p className="font-light txt-sm txt-gray-color">
              {videoData?.description}
            </p>
          </div>
        </div>
        <div>{showModal && <Modal />}</div>
      </div>
    </>
  );
};

export { VideoPage };
