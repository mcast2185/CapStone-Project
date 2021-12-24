import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {withRouter} from "react-router";

import Home from "./pages/home";
import NavComponent from "../components/nav-links/navigation-links";
import BlogHome from './pages/blogs';
import pageError from './pages/page-error';
import Icons from '../../static/assets/icons';
import BlogPost from './blog-posts/blog-posts';


class App extends Component {
  constructor(props) {
    super(props);


    Icons();
  }

  render() {
    return (
      <React.StrictMode>
        <div>
          <Router>
            <div className='app-router-content'>
              <NavComponent/>
              <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/auth" props={this.handleSuccessfulAuth} />
              <Route path="/bloghome/user" render={props => (
                <BlogHome {...props}  />)}
              />
              <Route
                path="/:slug"
                render={props => {
                  <BlogPost
                    {...props}
                  />
                }}
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