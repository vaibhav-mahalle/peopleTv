import React, { useEffect, useState } from 'react';
import { useAuth, useVideo } from '../../context';
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import { VideoCon } from '../../components';

export const SinglePlaylist = () => {
  const {videoState, videoDispatch} = useVideo();
  const {playlists} = videoState;

  const {authState} = useAuth();
  const {isLoggedIn} = authState;

  const {playlistId} = useParams();
  const [singlePlaylistVideos, setSinglePlaylistVideos] = useState([]);

  const getAllVideosFromPlaylist = async () => {
    try{
        const res = await axios.get(`/api/user/playlists/${playlistId}`, {
          headers: {
            authorization: isLoggedIn,
          },
        });


        if(res.status === 200){
          console.log(`playlistId: ${playlistId}`);
          setSinglePlaylistVideos(res.data.playlist);
          console.log(res.data.playlist);
        }
    }
    catch(error){
      console.error("Following error occured", error);
    }
  }


  useEffect(() => {getAllVideosFromPlaylist();}, [singlePlaylistVideos]);
  return (
    <div className='common-videolisting-container'>{singlePlaylistVideos?.videos?.map((item) => <div key={item._id}>{{item}}</div>)}</div>
  )
}
