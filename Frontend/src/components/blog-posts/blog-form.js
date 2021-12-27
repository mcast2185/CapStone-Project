import React, { Component } from 'react';
import axios from 'axios';


export default class CreatePostForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      title: "",
      description: "",
      markdownText: "",
      apiPostUrl: "http://localhost:5000/blog/post",
      method: "post"
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleBlogSubmission = this.handleBlogSubmission.bind(this);
  }


  buildForm() {
    let formData = new FormData();

    formData.append("blog_post[title]", this.state.title);
    formData.append("blog_post[description]", this.state.description);
    formData.append("blog_post[markdownText]", this.state.markdownText);
  
    return formData
  }


  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  
  
  handleBlogSubmission(event) {
    axios({
      method: this.state.method,
      url: this.state.apiPostUrl,
      data: this.buildForm(), 
      withCredentials: true
    })
      .then(response => {
        console.log(response.data)
        this.props.handleFormSubmit(response.data.blog_post)
      })
      .catch(err => {
      console.log('Error submitting form:', err);
      })
  event.preventDefault();
}


  render(){
    return (
      <div className="blog-form-wrapper">
        <h1>Share your thoughts</h1>
        <div className='form-wrapper'>
          <form  
            method="POST"
            onSubmit={this.handleBlogSubmission}
            >

            <div className='title-wrapper'>
              <label>Title:</label>
              <br/>
              <input 
                type="text" 
                placeholder="Create your title" 
                name="title" 
                onChange={this.handleChange}
                value={this.state.title}
                required
                />
            </div>

            <div className='description-wrapper'>   
              <label>Description:</label>
              <br/>
              <input 
                type="text" 
                placeholder="In a few words, describe the post" 
                name="description" 
                onChange={this.handleChange}
                value={this.state.description}
                required
                />
            </div>

            <div className='markdownText-wrapper'>  
              <label>Content:</label>
              <br/>
              <input
                type="text" 
                className='textbox'
                placeholder="Write your content here" 
                name="markdownText" 
                onChange={this.handleChange}  
                value={this.state.markdownText}
                required
                />
            </div>

            <button 
              type="submit" 
              className="btn"
              >
              Post
            </button>
          </form>
        </div>
      </div>
    )
  }
}