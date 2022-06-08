import "./VideoPage.css";
import React from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import { BiLike } from "react-icons/bi";
import { MdPlaylistAdd, MdOutlineWatchLater } from "react-icons/md";
import { LikeVideo, unLikeVideo, isVideoLiked} from "../../context/Video/liked";
import { useVideo } from "../../context/Video/context";
import { useAuth } from "../../context/Auth/context";
import { AiFillLike } from "react-icons/ai";

const VideoPage = () => {
  const { videoId } = useParams();
  const { authState } = useAuth();
  const { isLoggedIn } = authState;
  const { videoState, videoDispatch, video, setVideos } = useVideo();
  const {videos, liked, watchLater, playlists, history } = videoState;

  const options = {
    playerVars: {
      autoplay: 0,
    },
  };

  const findRequiredVideo = (videosData) => videosData.find(item => item.videoId === videoId);

  const videoData = findRequiredVideo(videos);
  const isLiked = isVideoLiked(videoData?.videoId, liked);

  console.log(videoData)
  return (
    <>
      <div>
        <YouTube class="video-iframe" videoId={videoId} opts={options} host= {'https://www.youtube.com'}/>
        <div className="videopage-footer">
          <p className="txt-lg">{videoData?.title}</p>
          <div className="video-icons txt-gray-color">
            <div className="align-icons">
              {isLiked ? (
                <>
                  <AiFillLike
                    color={"var(--vl-primary)"}
                    size={27}
                    onClick={() => unLikeVideo(isLoggedIn, videoDispatch, videoData)}
                  />
                  <p className="font-xs">DISLIKE</p>
                </>
              ): (
                <>
                  <BiLike size={27} onClick={() => LikeVideo(isLoggedIn, videoDispatch, videoData)} />
                  <p className="font-xs">LIKE</p>
                </>
              ) }
            </div>
            <div className="align-icons">
              <MdOutlineWatchLater size={27} />
              <p className="font-xs">WATCH LATER</p>
            </div>
            <div className="align-icons">
              <MdPlaylistAdd size={27} />
              <p className="font-xs">SAVE</p>
            </div>
          </div>
          <p className="font-regular">
            Channel Name: <span className="font-light">{videoData?.creator}</span>
          </p>
          <p className="font-regular">Description:</p>
          <p className="font-light txt-sm txt-gray-color">{videoData?.description}</p>
        </div>
      </div>
    </>
  );
};

export { VideoPage };
