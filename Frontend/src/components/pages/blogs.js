import React, { Component } from 'react';
import axios from 'axios';

import Blogs from '../blog-posts/render-blog';

export default class BlogHome extends Component {
  constructor(props){
    super(props);

    this.state = {
      blogPosts: [],
      blogOrder: 0
    }

    this.fetchBlogs = this.fetchBlogs.bind(this);
  }

  fetchBlogs() {
    axios
      .get("http://localhost:5000/api/blogposts", {
        withCredentials: true
      })
      .then(response => {
        console.log(response.data);
        
        this.setState({
          blogPosts: response.data
        })
        console.log(this.state.blogPosts);
      })
      .catch(err => {
        console.error("Could not fetch blogposts: blogs.js", err);
      })
  }


  componentDidMount() {
    this.fetchBlogs();
    
    
  }

  render() {
    
    const displayPost = [];

    const renderBlogPosts = this.state.blogPosts.map(blog => {
      const order = this.state.blogOrder ++
      const blogPost = <Blogs key={blog._id} order={order} blog={blog}/>

      blogPost.props.order +1 === this.state.blogPosts.length ? (
        displayPost.push(blogPost) 
      ) : null;

      return blogPost;
    });

    const blogDetail = displayPost[0]
    
    console.log(blogDetail);
    
    return (
      <div>
        <div className='bloghome-wrapper'>

          <div className='center-blog-wrapper'>

            <h1>  
              Blog it!
            </h1>

            <div className='image-wrapper'>
              <img src={'../../static/assets/images/mountains.png'} />
            </div>

            <div className='display-blog-wrapper'>
              <div className='display-blog-title'>

                {/* insert blog title */}

              </div>
              <div className='display-blog-content'>

                {/* insert blog content */}

              </div>

            </div>
          </div>
          <div className='right-column-blog-wrapper'>
            {renderBlogPosts}
          </div>
        </div>
      </div>
    )
  }
}