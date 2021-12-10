import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Home from '../pages/home';






class LoginForm extends Component {
  constructor(props){
    super(props);

    this.checkForUser = this.checkForUser.bind(this)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    name: "",
    email: "",
    pwd: "",
    errorText: ""
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
      errorText: ""
    })
  }

  handleSubmit(event) {
    axios 
      .post("http://localhost:5000/api/users", {
        name: this.state.name,
        email: this.state.email,
        pwd: this.state.pwd
      }
      )
      .then(response => {
        console.log("post method response status", response);
        // if (response.data.status === "created") {
        //   this.checkForUser();
        // }
      })
      .catch(error => {
        this.setState({
          errorText: "Failed login attempt"
        })
      })
    event.preventDefault()
  }


  checkForUser(){
    this.props.dispatch({type: "Registered_User", payload: this.state})
  }

  componentDidMount(){
    this.checkForUser();
    console.log(this.state.name)
    console.log(mapStateToProps(this.props.users))
  }

  render() {

    return (
    <div className="content-wrapper">

        <h1 className="center">Create an Account</h1>

        <form 
          name="signup_form" 
          method="POST"
          onSubmit={this.handleSubmit}
        >
          <label name="name">Name</label>
          <input
            onChange={this.handleChange} 
            type="text" 
            placeholder="Enter full name here" 
            name="name" 
            className="field" 
            required
          />
            
          <label name="email">Email</label>
          <input
            onChange={this.handleChange} 
            type="email" 
            placeholder="Enter email here" 
            name="email" 
            className="field" 
            required
          />

          <label name="pwd">Password</label>
          <input
            onChange={this.handleChange} 
            type="password" 
            placeholder="Enter password here" 
            name="pwd" 
            className="field" 
            required
          />

            <input type="submit" value="Sign Up" className="btn" />
          </form>

          <h1 className="center">Log in</h1>

          <form 
            name="signup_form" 
            method="POST"
            onSubmit={this.handleSubmit}
          >
            <label name="email">Email</label>
            <input
              onChange={this.handleChange} 
              type="email" 
              placeholder="Enter email here" 
              name="email" 
              className="field" 
              required
            />

            <label name="pwd">Password</label>
            <input
              onChange={this.handleChange} 
              type="password" 
              placeholder="Enter password here" 
              name="pwd" 
              className="field" 
              required
            />

            <input type="submit" value="Log in" className="btn" ></input>
          </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const users = state.filter((user) => {
    user
  });
  return {
    state,
    users
  }
}

export default connect(mapStateToProps)(LoginForm)





// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import axios from 'axios';



// class LoginForm extends Component {
//   constructor(props){
//     super(props);

//     this.state = {
//       name: "",
//       email: "",
//       pwd: "",
//       errorText: ""
//     }

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);

//   }
  

//   handleChange(event) {
//     this.setState({
//       [event.target.name]: event.target.value,
//       errorText: ""
//     })
//   }

//   handleSubmit(event) {
//     axios 
//       .post("http://localhost:5000/api/users", {
//         name: this.state.name,
//         email: this.state.email,
//         pwd: this.state.pwd
//       }
//       )
//       .then(response => {
//         if (response.data.status === "created") {
//           console.log("created");
//           this.checkForUser();
//         }
//       })
//       .catch(error => {
//         this.setState({
//           errorText: "Failed login attempt"
//         })
//       })
//     event.preventDefault()
//   }

//   checkForUser() {
//     this.props.dispatch({type: "ADD_USER", payload: this.state.email})
//   }

//   render() {
//     return (
//     <div className="content-wrapper">
//       {this.state.errorText}

//         <h1 className="center">Create an Account</h1>

//         <form 
//           name="signup_form" 
//           method="POST"
//           onSubmit={this.handleSubmit}
//         >
//           <label name="name">Name</label>
//           <input
//             onChange={this.handleChange} 
//             type="text" 
//             placeholder="Enter full name here" 
//             name="name" 
//             className="field" 
//             required
//           />
            
//           <label name="email">Email</label>
//           <input
//             onChange={this.handleChange} 
//             type="email" 
//             placeholder="Enter email here" 
//             name="email" 
//             className="field" 
//             required
//           />

//           <label name="pwd">Password</label>
//           <input
//             onChange={this.handleChange} 
//             type="password" 
//             placeholder="Enter password here" 
//             name="pwd" 
//             className="field" 
//             required
//           />

//             <input type="submit" value="Sign Up" className="btn"/>
//           </form>

//           <h1 className="center">Log in</h1>

//           <form 
//             name="signup_form" 
//             method="POST"
//             onSubmit={this.handleSubmit}
//           >
//             <label name="email">Email</label>
//             <input
//               onChange={this.handleChange} 
//               type="email" 
//               placeholder="Enter email here" 
//               name="email" 
//               className="field" 
//               required
//             />

//             <label name="pwd">Password</label>
//             <input
//               onChange={this.handleChange} 
//               type="password" 
//               placeholder="Enter password here" 
//               name="pwd" 
//               className="field" 
//               required
//             />

//             <input type="submit" value="Log in" className="btn"></input>
//           </form>
//       </div>
//     )
//   }
// }

// function mapStateToProps(state) {
  
//   const users = state.filter(user => {
//     user.email
//   });
//   console.log(users);
//   return {
//     name: state.name,
//     email: state.email,
//     pwd: state.pwd,
//     users
//   }
  
// }

// export default connect(mapStateToProps)(LoginForm)