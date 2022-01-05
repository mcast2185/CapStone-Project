import React from 'react';
import { Link } from "react-router-dom";
import Truncate from "react-truncate"

const Blogs = (props) => {
  const {_id, title, description, text} = props.blog;
  
  return (
    <React.StrictMode>
      <div className='blogs-wrapper'>
        <div className='blogs-title-wrapper'>
          <Link to={`/blog/${_id}`} >
              {title}
          </Link>
        </div>
        <div className='blogs-description-wrapper'>
          {description}
        </div>
        <div className='blogs-text-wrapper'>
          <Truncate
            lines={1}
            ellipsis={
              <span> 
                ...<Link to={`/blog/${_id}`}>
                  Read more
                  </Link>
              </span>
            }>
            {text}
          </Truncate>
        </div>    
      </div>
    </React.StrictMode>
  )
}

export default Blogs;