import React, { Component } from 'react';

import LoginForm from "../user-login/login-form"

export default class Home extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <LoginForm props={this.props}/>
      </div>
    )
  }
}