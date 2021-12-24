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
    this.displayBlogs = this.displayBlogs.bind(this);
  }

  fetchBlogs() {
    axios
      .get("http://localhost:5000/api/blogposts", {
        withCredentials: true
      })
      .then(response => {
        this.setState({
          blogPosts: response.data
        })
      })
      .catch(err => {
        console.error("Could not fetch blogposts: blogs.js", err);
      })
  }

  displayBlogs() {
    return this.state.blogPosts.map(blog => {
      let order = this.state.blogOrder ++
      return (
        <Blogs key={blog._id} order={order} blog={blog}/>
      )
    })
  }

  componentDidMount() {
    this.fetchBlogs()
  }

  render(){

    
    return (
      <div>
        <div className='bloghome-wrapper'>
          <div className='center-blog-wrapper'>
            
          </div>
          <div className='right-column-blog-wrapper'>
            {this.displayBlogs()}
          </div>
        </div>
      </div>
    )
  }
}