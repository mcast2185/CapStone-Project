import React from 'react';
import { Link } from 'react-router-dom';

export default function() {
  return (
    <React.StrictMode>
      <div>
        <h2> Error: page couldn't be found </h2>
        <Link to="/"> Return to homepage </Link>
      </div>
    </React.StrictMode>  
  )
};