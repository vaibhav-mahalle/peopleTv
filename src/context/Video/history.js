import axios from "axios";
import { ToastMsg } from "../../components";

const addToHistory = async () => {
    try{
        const res = await axios.post('/api/user/history',{headers:{authorization:isLoggedIn}});
        if(res.status === 201){
            videoDispatch({type:"ADD_TO_HISTORY",payload: res.data.history});
        }
    }
    catch(error){
        ToastMsg("Some error occured,couldn't add to history","error");
    }
}

const deleteFromHistory = async () => {
    try{
        const res = await axios.delete('/api/user/history/', {headers:{authorization:isLoggedIn}});
        if(res.status === 200){
            videoDispatch({type: "REMOVE_FROM_HISTORY", payload: res.data.history});
            ToastMsg("Video Removed from history","success")
        }
        
    }
    catch(error){

    }
}

const deleteAllFromHistory = async () => {
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

const getAllHistory = async () => {
    try{
        const res = await axios.get('/api/user/history', {headers: {authorization:isLoggedIn}});
        if(res.status === 200){
            videoDispatch({type:"GET_HISTORY", payload: res.data.history});
        }
    }
    catch(error){

    }
}