import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from "axios";

import Auth from "./pages/auth";
import Home from "./pages/home";
import reducer from '../reducers/reducer';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
  }

  state = {
    loginStatus: "Not_Logged_In"
  };

  registeredUsers = () => {
    console.log('');
  }

  handleSuccessfulLogin() {
    this.setState({
      loginStatus: "Logged_In"
    })
  }

  checkLoginStatus() {
    return axios
      .get("http://localhost:5000/api/users")
      .then(response => {
        response.data.map(user => {
          // console.log(user.email)
        })
      })
      .catch(error => {
        console.log("Error:", error);
      });
  }

  componentDidMount() {
    this.checkLoginStatus();
    this.registeredUsers();
  }

  render() {
    // console.log(mapStateToProps(this.props.users));
    
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route 
              exact path="/auth" 
              render={props => {
                <Auth
                  {...props}
                  handleSuccessfulLogin={this.handleSuccessfulLogin}
                />
              }}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {users: state}
}

export default connect(mapStateToProps)(App)



// import React, { Component } from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { connect } from 'react-redux';
// import axios from "axios";

// import Auth from "./pages/auth";
// import Home from "./pages/home";

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       loginStatus: "Not_Logged_In"
//     };
//     this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
//   }

//   handleSuccessfulLogin() {
//     this.setState({
//       loginStatus: "Logged_In"
//     })
//   }

//   checkLoginStatus() {
//     return axios
//       .get("http://localhost:5000/api/users")
//       .then(response => {
//         response.data.map(user => {
//           // console.log(user.email)
//         })
//       })
//       .catch(error => {
//         console.log("Error:", error);
//       });
//   }

//   componentDidMount() {
//     console.log('mounted');
//     this.checkLoginStatus();
//   }

//   render() {
//     return (
//       <div>
//         <Router>
//           <Switch>
//             <Home 
//               exact path="/" 
//               render={props => {
//                 <Auth
//                   {...props}
//                   handleSuccessfulLogin={this.handleSuccessfulLogin}
//                 />
//               }}
//             />
//           </Switch>
//         </Router>
//       </div>
//     );
//   }
// }

// export default connect(null)(App)