import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from "axios";


import NavComponent from "../components/nav-links/navigation-links";
import Auth from "./pages/auth";
import Home from "./pages/home";
import BlogHome from './pages/blogs';
import pageError from './pages/page-error';
import LoginForm from './user-login/login-form';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginStatus: "Not_Logged_In",

    };

    const userEmails = []
    this.userEmails = userEmails

    this.handleUserEmails = this.handleUserEmails.bind(this);
    this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind(this);
    this.handleUnSuccessfulLogin = this.handleUnSuccessfulLogin.bind(this);
    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
  }


  handleSuccessfulLogin() {
    this.setState({
      loginStatus: "Logged_In"
    });
  }

  handleUnSuccessfulLogin() {
    this.setState({
      loginStatus: "Not_Logged_In"
    })
  };  

  handleSuccessfulLogout() {
    this.setState({
      loginStatus: "Not_Logged_In"
    })
  }

  handleUserEmails() {
    console.log(this.userEmails);
    return this.userEmails
  }

  checkLoginStatus() {
    axios
      .get("http://localhost:5000/api/users", {
        withCredentials: true
      })
      .then(response => {
        response.data.map(user => {
          this.userEmails.unshift(user.email)
        })
      })
      .catch(error => {
        console.log("Error:", error);
      });  
  }


  componentDidMount() {
    this.checkLoginStatus();
  }

  render() {

    return (
      <React.StrictMode>
        <div>
          <Router>
            <nav>
              <NavComponent
                loginStatus={this.state.loginStatus}
                handleSuccessfulLogout={this.handleSuccessfulLogout}
              />
              <Switch>
                <Route exact path="/" component={Home}/>

                <Route 
                  path="/auth" 
                  render={props => {
                    <Auth
                      {...props}
                      handleSuccessfulLogin={this.handleSuccessfulLogin}
                      checkLoginStatus={this.handleUnSuccessfulLogin}
                      handleUserEmails={this.handleUserEmails}
                    />
                  }}
                />

                {
                  this.state.loginStatus === "Logged_In" ? (
                    <Route path="/blogs" component={BlogHome} /> 
                  ) : null 
                }

                <Route component={pageError} />
              </Switch>
            </nav>
          </Router>
        </div>
      </React.StrictMode>
    );
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     dispatchState: () => dispatch(state.email),
//   }
// } 

// export default connect(null, null)(App);