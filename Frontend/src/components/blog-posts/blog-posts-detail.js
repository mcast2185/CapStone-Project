import React, { Component } from 'react';
import axios from 'axios';


class BlogPostDetail extends Component {
  constructor(props){
    super(props);

    this.state = {
      blogRendered: "",
      blogId: this.props.match.params.slug
    };


    this.getBlogPost = this.getBlogPost.bind(this);
  }



  getBlogPost() {
    axios
      .get("https://capstoneblogpage.herokuapp.com/api/blogposts")
      .then(response => {
        response.data.map(blog => {
          if (blog._id === this.state.blogId ) {
            this.setState({
              blogRendered: blog
            })
          }
        });
      })
      .catch(err => {
        console.log("params ", err);
      })
  }


  componentDidMount() {
    this.getBlogPost();
  }
  

  render(){
    const {
      title, 
      description, 
      text 
    } = this.state.blogRendered
    
    return (
      <React.StrictMode>
        <div className='blog-post-page-wrapper'>
          <div className='blog-post-display-wrapper'>
            <div className='blog-post-title-wrapper'>
              <h1>  
                {title}
              </h1> 
              <br/>
            </div>
            
            <div className='blog-post-description-wrapper'>
              <h2> 
                {description}
              </h2>

              <p>created by: {sessionStorage.getItem("user").split(',')[0]}</p>
            </div>
            <div className='blog-post-text-wrapper'>
              {text}
            </div>
          </div>
        </div>
      </React.StrictMode>
    )
  }
}

export default BlogPostDetail;