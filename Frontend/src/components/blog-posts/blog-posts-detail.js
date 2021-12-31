import React, { Component } from 'react';
import axios from 'axios';

import CreatePostForm from './blog-form';


class BlogPostDetail extends Component {
  constructor(props){
    super(props);

    this.state = {
      blogRendered: {},
      blogId: this.props.match.params.slug
    }

    this.getBlogPost = this.getBlogPost.bind(this);
  }



  getBlogPost() {
    axios
      .get(`http://localhost:5000/blog/${this.state.blogId}`)
      .then(response => {
        this.setState({
          blogRendered: response.data.blog_post
        })
        console.log(this.state.blogRendered);
        
      })
      .catch(err => {
        console.log("params ", err);
      })
  }

  componentDidMount() {
    this.getBlogPost();
  }

  render(){
    return (
      <React.StrictMode>
        <div className='blog-post-content-wrapper'>
          <h1>  
            <CreatePostForm
              blog={this.state.blogRendered}
            />
          </h1> 
        </div>
      </React.StrictMode>
    )
  }
}

export default BlogPostDetail;