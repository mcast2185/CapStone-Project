import React, { Component } from 'react';
import axios from 'axios';



export default class BlogPost extends Component {
  constructor(props){
    super(props);

    this.state = {
      blogRendered: {},
      blogId: this.props.match.params.slug
    }

    this.getBlogPost = this.getBlogPost.bind(this);
  }



  getBlogPost() {
    // return (
      axios
        .get(`http://localhost:5000/blog/${this.state.blogId}`)
        .then(response => {
          console.log(response.data); 
          
        })
        .catch(err => {
          console.log("params ", err);
        })
    // )
  }

  componentDidMount() {
    this.getBlogPost();
  }

  render(){
    return (
      <React.StrictMode>
        <div className='blog-post-content-wrapper'>
          <h1>  
            hey there
          </h1> 
        </div>
      </React.StrictMode>
    )
  }
}