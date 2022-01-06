import React, { Component } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Blogs from '../blog-posts/render-blog';
import BlogModal from '../blog-posts/blog-modal';


class BlogHome extends Component {
  constructor(props){
    super(props);

    this.state = {
      blogPosts: [],
      blogOrder: 0,
      modalIsOpen: false
    };


    this.fetchBlogPosts = this.fetchBlogPosts.bind(this);
    this.handleNewBlogPost = this.handleNewBlogPost.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
    this.handleBlogSubmit = this.handleBlogSubmit.bind(this);
  }


  fetchBlogPosts() {
    axios
      .get("http://localhost:5000/api/blogposts?order_by=createdAt&direction=desc", {
        withCredentials: true
      })
      .then(response => {        
        this.setState({
          blogPosts: response.data
        });
      })
      .catch(err => {
        console.error("Could not fetch blogposts: blogs.js", err);
      })
  }


  handleBlogSubmit(blog) {
    this.setState({
      blogPosts: [blog].concat(this.state.blogPosts),
      modalIsOpen: false
    });
  }


  handleModalClose() {
    this.setState({
      modalIsOpen: false
    });
  }


  handleNewBlogPost() {
    this.setState({
      modalIsOpen: true
    });
  }


  componentDidMount() {
    this.fetchBlogPosts();
  }


  render() {
    const renderBlogPosts = this.state.blogPosts.map(blog => {
      const order = this.state.blogOrder ++
      const blogPost = <Blogs key={order} order={order} blog={blog} />
      
      return blogPost
    })

    
    return (
      <React.StrictMode>
        <div>
          <div className='blog-home-wrapper'>

            <div className='center-blog-wrapper'>
              <div className='background-image-wrapper'>
                <div className='content-wrapper'>
                  <h1> Blog it! </h1>

                  <div className='short-content-wrapper'>
                    <p> Add voice to your ideas. </p>
                    <p> Be heard through your content. </p>
                    <p> Connect with your writing. </p>
                  </div>
                  
                  <h2> Illustrate your thoughts </h2>
                </div>
              </div>

              <div className='blog-post-modal-wrapper'>
                <BlogModal 
                  handleBlogSubmit={
                    this.handleBlogSubmit
                  }
                  handleModalClose={this.handleModalClose}
                  modalIsOpen={this.state.modalIsOpen}
                />
                <div className='modal-blog-link'>
                  <a onClick={this.handleNewBlogPost}>
                    <FontAwesomeIcon icon="plus-square"/>
                    <br/>
                  </a>
                  <p>Create here</p>
                </div>
              </div>
            </div>

            <div className='right-column-blog-wrapper'>
              {renderBlogPosts}
            </div>
          </div>
        </div>
      </React.StrictMode>
    )
  };
};

export default BlogHome;