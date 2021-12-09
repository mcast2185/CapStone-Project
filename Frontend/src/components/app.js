import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from "axios";

import Auth from "./pages/auth";
import Home from "./pages/home";
import ChatRoom from "./pages/chat-room";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginStatus: "Not_Logged_In"
    };
    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
  }

  handleSuccessfulLogin() {
    this.setState({
      loginStatus: "Logged_In"
    })
  }

  checkLoginStatus() {
    return axios
      .get("http://localhost:5000/api/users")
      .then(response => {
        response.data.map(user => {
          console.log(user.email)
        })
      })
      .catch(error => {
        console.log("Error:", error);
      });
  }

  componentDidMount() {
    console.log('mounted');
    this.checkLoginStatus();
  }

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Home 
              exact path="/" 
              render={props => {
                <Auth
                  {...props}
                  handleSuccessfulLogin={this.handleSuccessfulLogin}
                />
              }}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default connect(null)(App)