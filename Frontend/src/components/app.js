import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from "axios";

import Auth from "./pages/auth";
import Home from "./pages/home";
import ChatRoom from "./pages/chat-room";

export default class App extends Component {
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

  // checkLoginStatus() {
  //   return axios
  //     .get("http://localhost:5000/api/users")
  //     .then(response => {
  //       response.data.map(user => {
  //         console.log(user.email)
  //       })
  //     })
  //     .catch(error => {
  //       console.log("Error", error);
  //     });
  // }

  // componentDidMount() {
  //   console.log(this.props.children);
    
  //   this.checkLoginStatus();
  // }

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

// checkLoginStatus() {
//   return axios
//     .get("http://localhost:5000/api/credentials")
//     .then(response => {
//       const loggedIn = response.data.logged_in;
//       const loggedInStatus = this.state.loggedInStatus;

//       if (loggedIn && loggedInStatus === "LOGGED_IN") {
//         return loggedIn;
//       } else if (loggedIn && loggedInStatus === "NOT_LOGGED_IN") {
//         this.setState({
//           loggedInStatus: "LOGGED_IN"
//         });
//       } else if (!loggedIn && loggedInStatus === "LOGGED_IN") {
//         this.setState({
//           loggedInStatus: "NOT_LOGGED_IN"
//         });
//       }
//     })
//     .catch(error => {
//       console.log("Error", error);
//     });