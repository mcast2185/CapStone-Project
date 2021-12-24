import React from 'react';


export default function Toggle() {

  const toggleLogIn = (loggedIn, notLoggedIn) => {
    loggedIn = "Logged_In";
    notLoggedIn = "Not_Logged_In";
    (!toggleLogIn === notLoggedIn && toggleLogIn === loggedIn)
  }

  this.state.loginStatus === "Not_Logged_In" ? (
    this.getState({ 
      loginStatus: toggleLogIn 
    })) : ( this.getState({ loginStatus: !toggleLogIn })
  )
  // return document.querySelector("app-router-content").appendChild()
  // return (
  //   <div className='toggle-button-wrapper' >
  //     {/* <BlogHome onClick={toggleLogIn}/> */}
  //     <button onClick={toggleLogIn}>press me</button>
  //   </div>
  // )  
}


