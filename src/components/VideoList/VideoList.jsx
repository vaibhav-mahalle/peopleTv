import React from 'react';
import { useVideo } from '../../context/Video/context';
import { VideoItem } from '../VideoItem/VideoItem';
import "./VideoList.css";

const VideoList =()=> {
  const {videos} = useVideo();

  return (
    <div className='videolisting-container'>{videos.map( item => {
      return(<VideoItem item={item}/>)
    })}</div>
  )
}

export {VideoList}