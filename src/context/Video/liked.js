import axios from "axios";
import {ToastMsg} from "../../components";

export const getAllLikedVideos = async () => {
    try{
        const res = await axios.get('/api/user/likes', {headers: {authorization: isLoggedIn},});
        if(res.status === 200){
            videoDispatch({type:"GET_ALL_LIKED_VIDEOS",payload: res.data.likes})
        }
    }
    catch(error){
        ToastMsg("some error occured",'error');
    }
};

export const LikeVideo = async (isLoggedIn, videoDispatch, video) => {
    if(isLoggedIn){
        try{
            const res = await axios.post('/api/user/likes',{video},{
                headers: {
                  authorization: isLoggedIn,
                },});

            if(res.status === 201){
                videoDispatch({type:"LIKE_VIDEO",payload: res.data.likes});
                ToastMsg('Video added to liked videos','success');
            }
        }
        catch(error){
            ToastMsg("Couldn't Like video some error occured","error");
            console.error(error);

        }
    }
    else{
        ToastMsg("Please Login","warning");
    }
   
};


export const unLikeVideo = async (isLoggedIn, videoDispatch, video) => {
    try{
        const res = await axios.delete(`/api/user/likes/${video.videoId}`,{headers:{authorization: isLoggedIn}});
        videoDispatch({type:"UNLIKE_VIDEO",payload: res.data.likes});
        ToastMsg("Removed from liked videos","success");

    }
    catch(error){
        ToastMsg("Couldn't remove video : some error occured","error")
    }

};

export const isVideoLiked = (id, liked) => liked.some(item => item.videoId === id);