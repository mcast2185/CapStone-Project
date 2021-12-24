import React, { Component } from 'react';
import axios from 'axios';
import { useHistory, withRouter } from 'react-router';
import {useDispatch} from 'react-redux'

import LoginForm from '../user-login/login-form';
import NavComponent from '../nav-links/navigation-links';
import BlogHome from './blogs';
import App from '../app';



class Auth extends Component {
  constructor(props){
    super(props);

    this.state = {
      loginStatus: "Not_Logged_In"

    };

    this.openBlogHome = this.openBlogHome.bind(this);
    this.handleUnSuccessfulLogin = this.handleUnSuccessfulLogin.bind(this);
    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind(this);
  }


  handleSuccessfulLogin() {
    this.setState({
      loginStatus: "Logged_In"
    })
  }


  handleUnSuccessfulLogin() {
    this.setState({
      loginStatus: "Not_Logged_In"
    })
  }


  handleSuccessfulLogout() {
    this.setState({
      loginStatus: "Not_Logged_In"
    })
  }


  openBlogHome() {
    this.props.history.push('/bloghome/user')
    // return (
    //   <NavComponent handleSuccessfulLogout={this.handleSuccessfulLogout}/>
    // )
  }


  checkLoginStatus() {
    axios
      .get("http://localhost:5000/api/users", {
        withCredentials: true
      })
      .then(response => {
        if (this.state.loginStatus === "Logged_In") {
          this.openBlogHome()
        } 
      })
      .catch(error => {
        console.log("Error:", error);
      });  
  }


  componentDidUpdate() {
    this.checkLoginStatus();
  }


  render() {
    return (
      <React.StrictMode>
        <div className='auth-content-wrapper'>

          <LoginForm
            handleSuccessfulLogin={this.handleSuccessfulLogin}
            handleUnSuccessfulLogin={this.handleUnSuccessfulLogin}
          />

        </div>
      </React.StrictMode>
    )
  }
}



export default withRouter(Auth);