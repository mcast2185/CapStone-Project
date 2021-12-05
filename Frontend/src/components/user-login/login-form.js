import React, { Component } from 'react';
import axios from 'axios';



export default class LoginForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      name: "",
      email: "",
      pwd: "",
      errorText: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

// if we cant figure out how to pass the value of this state to the app component
// then we need to check login status here or in auth, figuring out these three's
// interconnectivity is the next step, so to render the chap app 


  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
      errorText: ""
    })
  }

  handleSubmit(event) {
    axios 
      .post("http://localhost:5000/api/usercredentials", {
        name: this.state.name,
        email: this.state.email,
        pwd: this.state.pwd
      }
      )
      .then(response => {
        if (response.data.status === "created") {
          console.log("created");

        }
      })
      .catch(error => {
        this.setState({
          errorText: "Failed login attempt"
        })
      })
    event.preventDefault()
  }



  render() {
    return (
    <div className="content-wrapper">
      {this.state.errorText}

        <h1 className="center">Create an Account</h1>

        <form 
          name="signup_form" 
          method="POST"
          onSubmit={this.handleSubmit}
        >
          <label name="name">Name</label>
          <input
            onChange={this.handleChange} 
            type="text" 
            placeholder="Enter full name here" 
            name="name" 
            className="field" 
            required
          />
            
          <label name="email">Email</label>
          <input
            onChange={this.handleChange} 
            type="email" 
            placeholder="Enter email here" 
            name="email" 
            className="field" 
            required
          />

          <label name="pwd">Password</label>
          <input
            onChange={this.handleChange} 
            type="password" 
            placeholder="Enter password here" 
            name="pwd" 
            className="field" 
            required
          />

            <input type="submit" value="Sign Up" className="btn"/>
          </form>

          <h1 className="center">Log in</h1>

          <form 
            name="signup_form" 
            method="POST"
            onSubmit={this.handleSubmit}
          >
            <label name="email">Email</label>
            <input
              onChange={this.handleChange} 
              type="email" 
              placeholder="Enter email here" 
              name="email" 
              className="field" 
              required
            />

            <label name="pwd">Password</label>
            <input
              onChange={this.handleChange} 
              type="password" 
              placeholder="Enter password here" 
              name="pwd" 
              className="field" 
              required
            />

            <input type="submit" value="Log in" className="btn"></input>
          </form>
      </div>
    )
  }
}