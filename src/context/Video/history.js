import axios from "axios";
import { ToastMsg } from "../../components";

export const addToHistory = async (isLoggedIn, videoDispatch, video) => {
    try{
         const res = await axios.post('/api/user/history',{video},{headers:{authorization:isLoggedIn}});
        if(res.status === 201){
            videoDispatch({type:"ADD_TO_HISTORY",payload: res.data.history});
        }
    }
    catch(error){
        console.error("Some error occured,couldn't add to history",error);
    }
}

export const deleteFromHistory = async (isLoggedIn, videoDispatch, video) => {
    try{
         const res = await axios.delete(`/api/user/history/${video._id}`, {headers:{authorization:isLoggedIn}});
        if(res.status === 200){
            videoDispatch({type: "REMOVE_FROM_HISTORY", payload: res.data.history});
            ToastMsg("Video Removed from history","success")
        }
        
    }
    catch(error){
        ToastMsg("Something went wrong, Please Try again later", "error");
    }
}

export const deleteAllFromHistory = async () => {
    try{
         const res = await axios.delete('/api/user/history/all', {headers: {authorization: isLoggedIn}});
        if(res.status === 200){
            videoDispatch({type: "REMOVE_ALL_FROM_HISTORY", payload: res.data.history});
            ToastMsg("All videos removed from history","success")
        }
    }
    catch(error){

    }
}

export const getAllHistory = async () => {
    try{
         const res = await axios.get('/api/user/history', {headers: {authorization:isLoggedIn}});
        if(res.status === 200){
            videoDispatch({type:"GET_HISTORY", payload: res.data.history});
        }
    }
    catch(error){

    }
}

export const isVideoInHistory = (id, history) => history.some(item => item.videoId === id);