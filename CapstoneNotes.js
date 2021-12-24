
// Remaining to do list for app
//

// work up to "How to Use SQL Subqueries for Insert Statements" then do project

//3 something isnt fully right with the axios call in login file

//5 get the base jsx code written for the blog page
//6 we will need images right away to gauge the functionality
//7 set up the routes to where the posts are kept
//8 use modal to create blogs, double check the schema created
//9 double check the logic on sign out function in nav
//10 apply scss
//11 leave minor notations for others to easily jump in
//12 deploy to heroku


// - scss ideas for page/ general functionality:
  // Create a container to the right of the window that contains thumbnains of blog posts
  // To the left in the white space, have written content welcoming or attracting their attention as they first experience blog site
  // To the left of that create a grid 4 x 4 or 3 x 3 and have a set interval that has random blog posts appear with rounded images within the grid slots
  // NAV bar above is transparent. home about contact and blog options are available when hovering over different colored circles that also widen on mouse over
  // Idea of background color changing according to what NAV bar option you hover over
  // Mouse changed to circle that switches to negative over whatever color it hovers
  // open a modal to welcome the user in/back, clicking continue to close the modal 
  // could trigger react to slide in the blogs page




// font-family: 'Oswald', sans-serif;
// font-family: 'Saira Extra Condensed', sans-serif;
// font-family: 'Fira Sans', sans-serif;



  












  
  const toggle = (loggedIn, notLoggedIn) => {
    const loggedIn = "Logged_In";
    const notLoggedIn = "Not_Logged_In";
    (!toggle === notLoggedIn && toggle === loggedIn)
    
    return (
      this.state.loginStatus === "Not_Logged_In" ? (
        this.getState({ loginStatus: toggle })
          ) : ( this.getState({ loginStatus: !toggle })
      )
    )
  }




import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from "axios";
import {withRouter} from "react-router";

import NavComponent from "../components/nav-links/navigation-links";
import {Auth} from "./pages/auth";
import Home from "./pages/home";
import BlogHome from './pages/blogs';
import pageError from './pages/page-error';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginStatus: "Not_Logged_In",

    };


    // this.openBlogHome = this.openBlogHome.bind(this ) 
    // this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind(this);
    // this.handleUnSuccessfulLogin = this.handleUnSuccessfulLogin.bind(this);
    // this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
  }

  
  // handleSuccessfulLogin() {
  //   this.setState({
  //     loginStatus: "Logged_In"
  //   })
  //   console.log("logged in");
  // }

  // handleUnSuccessfulLogin() {
  //   this.setState({
  //     loginStatus: "Not_Logged_In"
  //   })
  // };  

  // handleSuccessfulLogout() {
  //   this.setState({
  //     loginStatus: "Not_Logged_In"
  //   })
  // }

  // checkLoginStatus() {
  //   axios
  //     .get("http://localhost:5000/api/users", {
  //       withCredentials: true
  //     })
  //     .then(response => {
  //       response.data.map(user => {

  //         // fix here

  //         this.state.userEmails.unshift(user.email)
  //       })
  //     })
  //     .catch(error => {
  //       console.log("Error:", error);
  //     });  
  // }

  // openBlogHome() {
  //   this.state.loginStatus === "Logged_In" ? (
  //     axios
  //       .get("/bloghome/user", {
  //         withCredentials: true
  //       })
  //       .then(response => {
  //         console.log(response);
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       })
  //   ) : console.log("failed to open blog home: ",null)
  // }


  // componentDidMount() {
  //   this.checkLoginStatus();
  // }

  // componentDidUpdate() {
  //   this.openBlogHome()
  // }

  render() {

    // const renderBlogHome = this.state.loginStatus === "Logged_In" ? (
    //   <Route path="/bloghome/user" render={props => (
    //     <BlogHome {...props}  />)}
    //   /> ) : null;

    return (
      <React.StrictMode>
        <div>
          <Router>
            <div className='app-router-content'>
{/* 
              {renderBlogHome} */}
              <NavComponent
                // loginStatus={this.state.loginStatus}
                // handleSuccessfulLogout={this.handleSuccessfulLogout}
                />
              <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/auth" />
              <Route path="/bloghome/user" render={props => (
                <BlogHome {...props}  />)}
              />
              <Route component={pageError} />
              </Switch>
            </div>
          </Router>
        </div>
      </React.StrictMode>
    );
  }
}


export default withRouter(App);



{/* <Route 
path="/auth" 
render={props => (
  <Auth
    {...props}
    handleSuccessfulLogin={() => this.handleSuccessfulLogin()}
    checkLoginStatus={() => this.handleUnSuccessfulLogin()}
  />
)}
/> */}