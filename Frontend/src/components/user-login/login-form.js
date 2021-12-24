import React, { Component } from 'react';
import axios from 'axios';



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
        console.log("response.data")
      // .then(async (res, req) => {
        // try {
        //   this.passStateChange();
        //   console.log("this.state: ", this.state);  
        // } catch(err) {
        //   res.status(404).send("Failed to post sign in credentials:", err); 
        // }
        console.log('handleSuccessfulLogin', this.props.handleSuccessfulLogin)
      }
    ).catch(err => {
      console.log('this is an error', err);
    })
  event.preventDefault();
}
  
  render() {
    return (
      <React.StrictMode>
        <div className="content-wrapper">
          <h1 className="center">Create an Account</h1>

          <form 
            name="signup_form" 
            method="POST"
            onSubmit={this.handleSignIn}
            >
            <label name="name">Name</label>

            <input 
              type="text" 
              placeholder="Enter full name here" 
              name="name" 
              onChange={this.handleChange}
              required
              />
              
            <label name="email">Email</label>

            <input 
              type="email" 
              placeholder="Enter email here" 
              name="email" 
              onChange={this.handleChange}
              required
              />

            <label name="pwd">Password</label>

            <input
              type="password" 
              placeholder="Enter password here" 
              name="pwd" 
              onChange={this.handleChange}  
              required
              />

            <button 
              type="submit" 
              value="Sign Up" 
              className="btn" 
              onClick={this.props.handleSuccessfulLogin}
              >
              Sign up
            </button>
          </form>

          <h1 className="center">Log in</h1>

          <form 
            name="signup_form" 
            method="POST"
            onSubmit={this.handleSignIn}
            >
            <label name="email">Email</label>
            <input 
              type="email" 
              placeholder="Enter email here" 
              name="email" 
              onChange={this.handleChange}
              required
              />

            <label name="pwd">Password</label>
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
              onSubmit={this.props.handleSuccessfulLogin}
              >
              Sign in
            </button>
          </form>
        </div>
      </React.StrictMode> 
    )
  }
}


export default LoginForm;

// export default connect(null, actions)(LoginForm);

  // pushState, replace, goforward, location, push, 
  // createKey, createHref, path, url, confirm,
  // cookieStore, getAll/get, 
  // bindActionCreator(actionCreator, dispatch)
  // importState(state, _ref), openDatabase()
// origin: "http://localhost:3000"
//res.location() works well with redirect(








  // handleSignIn(event) {

  //     axios
  //       .post("http://localhost:5000/api/users", {
  //           name: this.state.name,
  //           email: this.state.email,
  //           pwd: this.state.pwd
  //         },
  //         {withCredentials: true}
  //       )
  //       .then(response => {
  //         this.props.handleSuccessfulAuth();
  //           console.log("user credentials received: ", response.data);
  //       })
  //       .catch(err => {
  //           console.log("Failed to post sign in credentials:", err); 
  //         })

  //     event.preventDefault();
  // }  