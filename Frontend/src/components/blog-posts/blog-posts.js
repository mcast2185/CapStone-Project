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
    axios
      .get(`http://localhost:3000/bloghome/user/${this.state.blogId}`, {
        withCredentials: true
      })
      .then(response => {
        console.log("response blog post", response.data); 
        
      })
      .catch(err => {
        console.log("params ", err);
        
      })
  }
  componentDidMount() {
    console.log(this.props);
    
    this.getBlogPost()
  }

  render(){
    return (
      <div>
        hey there
      </div>
    )
  }
}