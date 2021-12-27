import React, { Component } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Blogs from '../blog-posts/render-blog';
import BlogModal from '../blog-posts/blog-modal';



export default class BlogHome extends Component {
  constructor(props){
    super(props);

    this.state = {
      blogPosts: [],
      blogOrder: 0,
      modalIsOpen: false
    }

    this.fetchBlogs = this.fetchBlogs.bind(this);
    this.handleNewBlogClick = this.handleNewBlogClick.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
    this.handleBlogSubmit = this.handleBlogSubmit.bind(this);
  }

  fetchBlogs() {
    axios
      .get("http://localhost:5000/api/blogposts?order_by=createdAt&direction=desc", {
        withCredentials: true
      })
      .then(response => {
        console.log(response.data);
        
        this.setState({
          blogPosts: response.data
        })
        // console.log(this.state.blogPosts);
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

  handleNewBlogClick() {
    this.setState({
      modalIsOpen: true
    })
  }


  componentDidMount() {
    this.fetchBlogs();
  }

  render() {
    
    const displayPost = [];

    const renderBlogPosts = this.state.blogPosts.map(blog => {
      const order = this.state.blogOrder ++
      const blogPost = <Blogs key={blog._id} order={order} blog={blog} />

      blogPost.props.order +1 === this.state.blogPosts.length ? (
        displayPost.push(blogPost) 
      ) : null;

      return (
        blogPost
      ) 
    });

    const blogDetail = displayPost[0]
    
    console.log(blogDetail);
    
    return (
      <div>
        <div className='blog-home-wrapper'>

          <div className='center-blog-wrapper'>
            <div className='background-image-wrapper'>
              <div className='content-wrapper'>
                <h1> Blog it! </h1>

                <div className='short-content-wrapper'>
                  <p> Add voice to your ideas. </p>
                  <p> Be heard through your content. </p>
                  <p> Connect through your content. </p>
                </div>
                
                <h2> Illustrate your thoughts </h2>
              </div>
            </div>


          

            <div className='display-blog-wrapper'>
              <div className='display-blog-title'>

                {/* insert blog title */}

              </div>
              <div className='display-blog-content'>

                {/* insert blog content */}

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
                <a onClick={this.handleNewBlogClick}>
                  <FontAwesomeIcon icon="plus-square"/>
                </a>
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