import axios from "axios";
import { ToastMsg } from "../../components";

export const addToWatchLater = async (isLoggedIn, videoDispatch, video) => {
  if (isLoggedIn) {
    try {
      const res = await axios.post(
        '/api/user/watchlater',
        { video },
        { headers: { authorization: isLoggedIn }, }
      );
      if (res.status === 201) {
        videoDispatch({
          type: "ADD_TO_WATCHLATER",
          payload: res.data.watchlater,
        });
        ToastMsg("Added to watchlater", "success");
      }
    } catch (error) {
      console.error("some error occured", error);
    }
  } else {
    ToastMsg("please login", "warning");
  }
};

export const removeFromWatchLater = async(isLoggedIn, videoDispatch, video) => {
   if(isLoggedIn){
        try{
            const res = await axios.delete(`/api/user/watchlater/${video._id}`,{headers:{authorization: isLoggedIn}});
            videoDispatch({type:"REMOVE_FROM_WATCHLATER", payload: res.data.watchlater});
            ToastMsg("Removed from watchlater","success");
        }
        catch(error){
            console.error("some error occured",error);
            ToastMsg("Could not remove video", "error");
        }
   }
   else{
    ToastMsg("please login", "warning");
   }
};

export const isVideoInwatchLater = (id, watchLater) => {
  return watchLater.some((item) => item.videoId === id);
};
