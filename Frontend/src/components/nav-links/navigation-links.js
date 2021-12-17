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
    props.history.push('/')
    props.handleSuccessfulLogout()
  };

  return (
    <React.StrictMode>
      <nav className='nav-bar'>
        <div className='nav-bar-wrapper'>
          {dynamicLink("/", "Home")}
          { props.loginStatus === "Logged_In" ? (
            dynamicLink("/blogs", "Home") 
            ) : null
          }
        </div>
        <div className='sign-out-wrapper'>
          Sign out
          {props.loginStatus === "Logged_In" ? (
            <a onClick={signOut}> 
              <FontAwesomeIcon icon="sign-out-alt" />
            </a>
          ) : null}
        </div>
      </nav>
    </React.StrictMode>  
  )
}
export default withRouter(NavComponent)