import React, { Component } from 'react';
import axios from 'axios';

import Blogs from '../blog-posts/render-blog';


class BlogHistory extends Component {
  constructor(){
    super();

    this.state = {
      blogOrder: 0,
      blogPosts: []
    };

    this.customStyles = {
      content: {
        height: "90vh",
        width: "70vw"
      }
    }


    this.fetchBlogPosts = this.fetchBlogPosts.bind(this);
  }


  fetchBlogPosts() {
    axios
      .get("https://capstoneblogpage.herokuapp.com/api/blogposts?order_by=createdAt&direction=desc", {
        withCredentials: true
      })
      .then(response => {        
        this.setState({
          blogPosts: response.data
        });
      })
      .catch(err => {
        console.error("Could not fetch blog history: blogs.js", err);
      })
  }


  componentDidMount() {
    this.fetchBlogPosts();
  }


  render(){
    const renderBlogPosts = this.state.blogPosts.map(blog => {
      const order = this.state.blogOrder ++
      const blogPost = <Blogs key={order} order={order} blog={blog} />
      
      return blogPost
    })

    return (
      <React.StrictMode>
        <div className='blog-history-wrapper'>
          <div className='blog-history-post-wrapper' 
            style={this.customStyles}
          >
            {renderBlogPosts}
          </div>
        </div>
      </React.StrictMode>
    )
  }
}

export default BlogHistory;