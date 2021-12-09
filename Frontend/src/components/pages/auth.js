import React, { Component } from 'react';

export default class Auth extends Component {
  constructor(props){
    super(props);
  }

  

  render(){
    return (
      <div>
      </div>
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