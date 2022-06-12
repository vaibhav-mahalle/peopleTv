import React from 'react';
import { Link } from 'react-router-dom';
import { VideoCon } from '../../components';
import { useAuth, useVideo } from '../../context';



export const WatchLater = () => {
  const {videoState} = useVideo();
  const {watchLater} = videoState;
  return (
    <>
      {watchLater.length === 0 ? (
        <div className="align-content">
          <div className="msg-container txt-xlg">
            No videos here
            <Link to="/explore" className="txt-gray-color p-l-1">
              watch now
            </Link>
          </div>
        </div>
      ) : (
        <div className="common-videolisting-container">{watchLater.map( item => {
          return(<VideoCon item={item}/>)
        })}</div>
      )}
    </>
  )
}

