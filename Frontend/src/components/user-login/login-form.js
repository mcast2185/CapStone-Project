
import React, { Component } from 'react';
import axios from 'axios';
// import { connect } from 'react-redux';

import App from '../app';


export default class LoginForm extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      name: "",
      email: "",
      pwd: "",
      errorText: ""
    };
    
    // this.passStateToProps = this.passStateToProps.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUserSubmission = this.handleUserSubmission.bind(this);
  };

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
      errorText: ""
    })
  };

  handleSubmit(event) {
    event.preventDefault();
    return axios 
      .post("http://localhost:5000/api/users", 
        {
          name: this.state.name,
          email: this.state.email,
          pwd: this.state.pwd
        },
        {withCredentials: true}
      )
      .then(response => {
        this.props.handleSuccessfulAuth()
        console.log(this.props.handleSuccessfulAuth());
      })
      .catch(error => {
        this.setState({
          errorText: "Failed login attempt"
        })
      })
  }

  
  handleUserSubmission() {
    // return this.state.email;
    return () => {
      this.props.handleSuccessfulAuth()
      console.log(this.props.handleSuccessfulAuth())
    }
  }
  
  componentDidMount() {
    this.handleUserSubmission()
  }
  
  render() {

    return (
      <React.StrictMode>

        <div className="content-wrapper">

          <h1 className="center">Create an Account</h1>

          <form 
            name="signup_form" 
            method="POST"
            onSubmit={this.handleSubmit}
            >
            <label name="name">Name</label>
            <input 
              type="text" 
              placeholder="Enter full name here" 
              name="name" 
              // value={this.state.name}
              onChange={this.handleChange}
              required
              />
              
            <label name="email">Email</label>
            <input 
              type="email" 
              placeholder="Enter email here" 
              name="email" 
              // value={this.state.email} 
              onChange={this.handleChange}
              required
              />

            <label name="pwd">Password</label>
            <input
              type="password" 
              placeholder="Enter password here" 
              name="pwd" 
              // value={this.state.pwd}
              onChange={this.handleChange}  
              required
              />

            <button 
              type="submit" 
              value="Sign Up" 
              className="btn" 
              onClick={this.passStateToProps}
              >
              Sign up
            </button>

          </form>

          <h1 className="center">Log in</h1>

          <form 
            name="signup_form" 
            method="POST"
            onSubmit={this.handleSubmit}
            >
            <label name="email">Email</label>
            <input 
              type="email" 
              placeholder="Enter email here" 
              name="email" 
              // value={this.state.email} 
              onChange={this.handleChange}
              required
              />

            <label name="pwd">Password</label>
            <input
              type="password" 
              placeholder="Enter password here" 
              name="pwd" 
              // value={this.state.pwd}
              onChange={this.handleChange}  
              required
              />

            <button 
              type="submit" 
              value="Sign in" 
              className="btn" 
              onClick={this.passStateToProps}
              >
              Sign in
            </button>
          </form>
        </div>
      </React.StrictMode> 
    )
  }
}



// export default connect(null, actions)(LoginForm);
