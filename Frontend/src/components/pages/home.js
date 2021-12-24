import React from 'react';

import Auth from './auth';


export default function() {
  return (
    <React.StrictMode>
      <div className="home-content-wrapper">
        <div className='grid-wrapper'>
          <Auth />
        </div>
      </div>
    </React.StrictMode>
  )
}

