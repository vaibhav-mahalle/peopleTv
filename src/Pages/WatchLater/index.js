import React from 'react';
import { Link } from 'react-router-dom';

function WatchLater() {
  return (
    <div className='align-content'>
    <div className='msg-container txt-xlg'>
      You haven't added anything 
     <Link to="/explore" className='txt-gray-color p-l-1'>watch now</Link>
    </div>
  </div>
  )
}

export  {WatchLater}