import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const VideoContext = createContext(null);

const VideoProvider = ({ children }) => {
  const [videosAll, setVideos] = useState([]);
  const getAllVideos = async () => {
    try {
      const res = await axios.get("/api/videos");
      if (res.status === 200) {
        setVideos(res.data.videos);
      }
    } catch {
      console.error("error hai re bhai");
    }
  };

  useEffect(() => {
    getAllVideos();
  }, []);

  return (<VideoContext.Provider value={videosAll}>{children}</VideoContext.Provider>)
};

const useVideo = () => useContext(VideoContext);

export { useVideo, VideoProvider };
