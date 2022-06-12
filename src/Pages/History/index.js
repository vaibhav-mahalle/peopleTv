import React from 'react';
import { Link } from 'react-router-dom';

function History() {
  return (
    <div className='align-content'>
    <div className='msg-container txt-xlg'>
      Nothing in here 
     <Link to="/explore" className='txt-gray-color p-l-1'>watch now</Link>
    </div>
  </div>
  )
}

export {History}