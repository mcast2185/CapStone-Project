import React from 'react';

import Auth from './auth';


export default function() {
  return (
    <React.StrictMode>
      <div>
        <div className='home-content-wrapper'>
          <Auth />
        </div>
      </div>
    </React.StrictMode>
  )
}

