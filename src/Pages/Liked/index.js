import React from 'react';
import './Liked.css';
import '../../App.css';
import { Link } from 'react-router-dom';

function Liked() {
  return (
    <div className='align-content'>
      <div className='msg-container txt-xlg'>
        You haven't Liked any video 
       <Link to="/explore" className='txt-gray-color p-l-1'>watch now</Link>
      </div>
    </div>
  )
}

export {Liked}