import React, { Component } from 'react';

import LoginForm from '../user-login/login-form';


class Home extends Component {
  constructor(props){
    super(props);


    this.handleSuccessfulAuthentication = this.handleSuccessfulAuthentication.bind(this);
    this.handleFailedAuthentication = this.handleFailedAuthentication.bind(this);
    this.handleUserCredentials = this.handleUserCredentials.bind(this);
  }


  handleSuccessfulAuthentication() {
    this.props.handleSuccessfulLogin();
  }  


  handleFailedAuthentication() {
    this.props.handleUnSuccessfulLogin();
  }


  handleUserCredentials(user) {
    this.props.newUserCredentials(user);
  }

  render() {
    return (
      <React.StrictMode>
        <div className='home-content-wrapper'>
          <LoginForm
            handleSuccessfulAuthentication={this.handleSuccessfulAuthentication}
            handleFailedAuthentication={this.handleFailedAuthentication}
            handleUserCredentials={this.handleUserCredentials}
          />
        </div>
      </React.StrictMode>
    )
  };
};

export default Home;