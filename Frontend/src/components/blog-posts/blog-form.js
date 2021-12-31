import React, { Component } from 'react';
import axios from 'axios';


class CreatePostForm extends Component {
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
      .post("http://localhost:5000/blog/post", {
        title: this.state.title,
        description: this.state.description,
        markdownText: this.state.markdownText
        }, 
        { withCredentials: true}
      )
      .then(response => {
        console.log(response.data)
        this.props.handleFormSubmit(response.data)
      })
      .catch(err => {
      console.log('Error submitting form:', err);
      })
    event.preventDefault();
  }


  render() {
    return (
      <div className="blog-form-wrapper">
        <div className='border-line-one'/>
        <div className='border-line-two'/>
        <div className='border-line-three'/>

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
        <div className='quote-wrapper'>
            <h2> 
              "Either write something worth reading or do something worth writing"
            </h2>

            <p>-Benjamin Franklin </p>
          </div>
      </div>
    )
  }
}

export default CreatePostForm;