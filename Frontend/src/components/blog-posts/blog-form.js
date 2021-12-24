import React, { Component } from 'react';
import axios from 'axios';


export default class CreatePost extends Component {
  constructor(props){
    super(props);

    this.state = {
      title: "",
      description: "",
      markdownText: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleBlogSubmission = this.handleBlogSubmission.bind(this);
  }



  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  
  
  handleBlogSubmission(event) {
    axios
      .post("http://localhost:5000/blog/post",  
        {
          title: this.state.title,
          description: this.state.description,
          markdownText: this.state.markdownText
        }, 
        {withCredentials: true}
      )
      .then(response => {
        console.log("response.data", response)
      })
      .catch(err => {
      console.log('this is an error', err);
    })
  event.preventDefault();
}


  render(){
    return (
      <div className="blog-form-wrapper">
        <h1>Share your thoughts</h1>

        <form  
          method="POST"
          onSubmit={this.handleBlogSubmission}
          >

          <input 
            type="text" 
            placeholder="Create your title" 
            name="title" 
            onChange={this.handleChange}
            value={this.state.title}
            required
            />

          <input 
            type="description" 
            placeholder="In a few words, describe the post" 
            name="description" 
            onChange={this.handleChange}
            value={this.state.description}
            required
            />

          <input
            type="markdownText" 
            placeholder="Write your content here" 
            name="markdownText" 
            onChange={this.handleChange}  
            value={this.state.markdownText}
            required
            />

          <button 
            type="submit" 
            value="Create blog" 
            className="btn"
            >
            Post
          </button>
        </form>
      </div>
    )
  }
}