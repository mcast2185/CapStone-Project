import React, { Component, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavComponent from "../components/nav-links/navigation-links";
import Home from "../components/pages/home";
import BlogHome from './pages/blogs';
import pageError from './pages/page-error';
import Icons from '../../static/assets/icons';
import BlogPostDetail from './blog-posts/blog-posts-detail';
import About from './pages/about';


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
    window.localStorage.clear();
  }

  newUserCredentials(user) {
    const userInfo = []
    const {name, email, pwd} = user;
    userInfo.push(name)
    userInfo.push(email)
    userInfo.push(pwd)
    
    localStorage.setItem("user", userInfo)

    const loggedInUser = localStorage.getItem("user");

    if (loggedInUser) {
      this.setState({
        currentUser: loggedInUser
      })
    } else {
      console.log("fail");
      
    }
    this.state.loginStatus === "Logged_In" ? this.allowUserAccess() : null;
  }

  allowUserAccess() {
    this.state.currentUser !== null ? window.location.replace("/bloghome/user") : null
  }

  componentDidMount() {
    if (localStorage.getItem("user") !== null | undefined ) {
      this.setState({
        loginStatus: "Logged_In"
      })
    } else if (localStorage.getItem("user") === null | undefined ) {
      this.handleUnSuccessfulLogin();
    }
  }

  componentWillUnmount() {
    if (window.close()) {
      window.localStorage.clear();
    }
  }

  render() {
    if (window.close()) {
      window.localStorage.clear();
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
    );
  }
}


export default App;