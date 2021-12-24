import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Truncate from "react-truncate"

const Blogs = (props) => {

  const {_id, title, description, markdownText} = props.blog;
  
  return (
    <div className='blogs-wrapper'>
      <Link to={`/${_id}`}>
        <div className='blogs-title-wrapper'>
          <h3>  
            {title}
          </h3>
        </div>
      </Link>
      <div className='blogs-description-wrapper'>
        {description}
      </div>
      <div className='blogs-text-wrapper'>
        <Truncate
          lines={1}
          ellipsis={
            <span> 
              ...<Link to={`/${_id}`}>Read more</Link>
            </span>
          }>
            {markdownText}
        </Truncate>
      </div>    
    </div>

  )
}

export default Blogs;