import React, { Component } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class LoginForm extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      name: "",
      email: "",
      pwd: ""
    };


    this.handleChange = this.handleChange.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
  };


  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  
  
  handleSignIn(event) {
    axios
      .post("http://localhost:5000/api/users", 
        {
          name: this.state.name,
          email: this.state.email,
          pwd: this.state.pwd
        }, 
        {withCredentials: true}
      )
      .then(response => {
        if (response.data) {
          this.props.handleSuccessfulAuthentication();
          this.props.handleUserCredentials(response.data);
        } else {
          console.log("nope");
        };

        }
      )
      .catch(err => {
        console.log('Error registering user:', err);
        this.props.handleFailedAuthentication();
      })
    event.preventDefault();
  }


  
  render() {
    return (
      <React.StrictMode>
        <div className="login-form-wrapper">
          <div className='signup-form-wrapper'>
            
            <h1 className="form-heading">
              Create an Account
            </h1>
            <form 
              name="signup_form" 
              method="POST"
              onSubmit={this.handleSignIn}
              >

              <div className='label-wrapper'>
                <FontAwesomeIcon icon="user"/>
                <label name="name">Name</label>
              </div>
              <input 
                type="text" 
                placeholder="Enter full name here" 
                name="name" 
                onChange={this.handleChange}
                required
                />

              <div className='label-wrapper'>
                <FontAwesomeIcon icon="envelope"/>
                <label name="email">Email</label>
              </div>
              <input 
                type="email" 
                placeholder="Enter email here" 
                name="email" 
                onChange={this.handleChange}
                required
                />

              <div className='label-wrapper'>
                <FontAwesomeIcon icon="lock"/>
                <label name="pwd">Password</label>
              </div>
              <input
                type="password" 
                placeholder="Enter password here" 
                name="pwd"
                onChange={this.handleChange}  
                required
                />

              <button 
                type="submit"
                value="Sign in"
                className="btn" 
                >
                Sign up
              </button>
            </form>
          </div>
        </div>
      </React.StrictMode> 
    )
  }
}


export default LoginForm;