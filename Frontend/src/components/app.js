import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from "axios";

import Home from "./pages/home";
import ChatRoom from "./pages/chat-room";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginStatus: "Not_Logged_In"
    };
  }
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            {/* <Route path="/" component={}/> */}
          </Switch>
        </Router>
      </div>
    );
  }
}
