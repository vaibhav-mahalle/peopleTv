import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { videoReducer } from "./reducer";
import axios from "axios";
import { FilterByCategory, Compose } from "./utils";
import { ToastMsg } from "../../components";

const VideoContext = createContext(null);

const VideoProvider = ({ children }) => {
  const [video, setVideos] = useState([]);
  const [videoState, videoDispatch] = useReducer(videoReducer, {
    videos: [],
    liked: [],
    watchLater: [],
    history: [],
    playlists: [],
    category: "ALL",
  });

  const getAllVideos = async () => {
    try {
      const res = await axios.get("/api/videos");
      if (res.status === 200) {
        videoDispatch({ type: "SET_VIDEOS", payload: res.data.videos });
      }
    } catch (error) {
      ToastMsg("Error in setting videos", "error");
      console.error("Error in setting videos", error);
    }
  };

  const getFilteredVideos = Compose(
    videoState,
    FilterByCategory
  )(videoState.videos);

  useEffect(() => {
    getAllVideos();
  }, []);

  return (
    <VideoContext.Provider
      value={{ videoState, videoDispatch, videos: getFilteredVideos, video, setVideos }}
    >
      {children}
    </VideoContext.Provider>
  );
};

const useVideo = () => useContext(VideoContext);

export { useVideo, VideoProvider };
