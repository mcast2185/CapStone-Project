import React, { Component, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavComponent from "../components/nav-links/navigation-links";
import Home from "../components/pages/home";
import BlogHome from './pages/blogs';
import pageError from './pages/page-error';
import Icons from '../../static/assets/icons';
import BlogPostDetail from './blog-posts/blog-posts-detail';
import About from './pages/about';
import BlogHistory from './pages/blog-history';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginStatus: "Not_Logged_In",
      currentUser: {}

    };

    Icons();


    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleUnSuccessfulLogin = this.handleUnSuccessfulLogin.bind(this);
    this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind(this);
    this.newUserCredentials = this.newUserCredentials.bind(this);
    this.allowUserAccess = this.allowUserAccess.bind(this);
  }


  handleSuccessfulLogin() {
    this.setState({
      loginStatus: "Logged_In"
    });
  }


  handleUnSuccessfulLogin() {
    this.setState({
      loginStatus: "Not_Logged_In"
    });
  }


  handleSuccessfulLogout() {
    this.setState({
      loginStatus: "Not_Logged_In"
    });
    window.sessionStorage.clear();
  }


  newUserCredentials(user) {
    const userInfo = [];
    const {name, email, pwd} = user;
    userInfo.push(name);
    userInfo.push(email);
    userInfo.push(pwd);
    
    sessionStorage.setItem("user", userInfo);

    const loggedInUser = sessionStorage.getItem("user");

    if (loggedInUser) {
      this.setState({
        currentUser: loggedInUser
      })
    } else {
      console.log("Failed to store user");
    }

    this.state.loginStatus === "Logged_In" ? this.allowUserAccess() : null;
  }


  allowUserAccess() {
    this.state.currentUser !== null ? window.location.replace("/bloghome/user") : null
  }


  componentDidMount() {
    if (sessionStorage.getItem("user") !== null | undefined ) {
      this.setState({
        loginStatus: "Logged_In"
      })
    } else if (sessionStorage.getItem("user") === null | undefined ) {
      this.handleUnSuccessfulLogin();
    }
  }


  render() {
    if (window.close()) {
      window.sessionStorage.clear();
    }

    return (
      <React.StrictMode>
        <div>
          <Router>
            <div className='app-router-content'>
              <NavComponent
                loginStatus={this.state.loginStatus}
                handleSuccessfulLogout={this.handleSuccessfulLogout}
              />
              <Switch>

              <Route exact path="/" render={props => (
                <Home 
                  {...props}
                  newUserCredentials={this.newUserCredentials}
                  handleSuccessfulLogin={this.handleSuccessfulLogin}
                  handleUnSuccessfulLogin={this.handleUnSuccessfulLogin}
                  />)}
              />

              <Route path="/bloghome/user" render={props => (
                <BlogHome {...props} loginStatus={this.state.loginStatus}/>)}
              />
              <Route path="/blog-history" component={BlogHistory}/>

              <Route path="/blog/:slug" render={props => (
                <BlogPostDetail {...props} loginStatus={this.state.loginStatus}/> )}
              />
              <Route path="/about" component={About}/>
              <Route component={pageError} />

              
              </Switch>
            </div>
          </Router>
        </div>
      </React.StrictMode>
    )
  };
};


export default App;