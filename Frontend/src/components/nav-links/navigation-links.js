import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from 'react-router-dom';
import {withRouter} from "react-router"


const NavComponent = (props) => {
  const dynamicLink = (route, linkText) => {
    return (
      <div className='nav-link-wrapper'>
        <NavLink to={route} activeClassName='nav-link-active'>
          {linkText}
        </NavLink>
      </div>
    )
  };


  const signOut = () => {
    props.handleSuccessfulLogout();
    props.history.push('/')
  };


  return (
    <React.StrictMode>
      <div className='nav-bar'>
        <div className='nav-bar-wrapper'>

          {dynamicLink("/", "Home")}
          {dynamicLink("/about", "About")}
          {
            props.loginStatus === "Logged_In" ? (
              dynamicLink("/bloghome/user", "Blogs") 
            ) : null
          }

        </div>
          {
            props.loginStatus === "Logged_In" ? (
              <a onClick={signOut} className='sign-out-wrapper'> 
                Sign out
                <FontAwesomeIcon icon="sign-out-alt" />
              </a>
            ) : null
          }
      </div>
    </React.StrictMode>  
  )
};

export default withRouter(NavComponent);