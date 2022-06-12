import axios from "axios";
export const getAllVideos = async () => {
    try {
      const res = await axios.get("/api/videos");
      if (res.status === 200) {
        videoDispatch({type: "SET_VIDEOS", payload: res.data.videos});
      }
    } catch(error){
      console.error("Error in setting videos", error);
    }
  };