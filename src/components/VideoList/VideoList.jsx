import React from 'react';
import { useVideo } from '../../context/Video/context';
import { VideoItem } from '../VideoItem/VideoItem';
import "./VideoList.css";

const VideoList =()=> {
  const Allvideos = useVideo();

  return (
    <div className='videolisting-container'>{Allvideos.map( item => {
      return(<VideoItem item={item}/>)
    })}</div>
  )
}

export {VideoList}