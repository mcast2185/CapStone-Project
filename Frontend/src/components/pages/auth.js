import React, { Component } from 'react';

import LoginForm from '../user-login/login-form';


export default class Auth extends Component {
  constructor(props){
    super(props);

    this.handleUserEmailAuth = this.handleUserEmailAuth.bind(this);
    this.handleUnSuccessfulAuth = this.handleUnSuccessfulAuth.bind(this);
    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
  }

  handleSuccessfulAuth() {
    this.props.handleSuccessfulLogin();
    this.props.history.push("/")
  }

  handleUnSuccessfulAuth() {
    this.props.handleUnSuccessfulLogin();
  }

  handleUserEmailAuth() {
    this.props.handleUserEmails()
  }
  
  render(){
    return (
      <React.StrictMode>
        <div>
          <LoginForm
            handleUserEmailAuth={this.handleUserEmailAuth}
            handleSuccessfulAuth={this.handleSuccessfulAuth}
            handleUnSuccessfulAuth={this.handleUnSuccessfulAuth}
            />
        </div>
      </React.StrictMode>
    )
  }
}


// import React, { Component } from 'react';

// export default class Auth extends Component {
//   constructor(props){
//     super(props);

//     this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
//   }

//   handleSuccessfulAuth() {
//     if (this.props.handleSuccessfulLogin()) {
//       this.props.history.push('/');
//     } else {
//       console.error("Unsuccessful Authentication"); 
//     }
//   }

//   render(){
//     return (
//       <div>
//         <Home 
//           handleSuccessfulAuth={this.handleSuccessfulAuth}
//         />
//       </div>
//     )
//   }
// }