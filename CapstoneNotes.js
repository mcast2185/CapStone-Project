// reworked tons of code based off the redux.js.org page
// however that code was contingent on not having already set up a redux 
// store for the entire project, as jordan had from the custom library we 
// leveraged in js-generate

// create thunk functions within the actions folder, (index.js) 

// once we establish that the users signed in by login status.
// use the sliceSelector function we created to separate the array and state
// checklogin will call the new func after axios retrieves the props passed to mongo, 
// mapdispatch will be our jsx render function from actions folder
// once the function is called it should finally trigger the (this.state.loginstatus) 
// logged in in our handle successful login. 

// - scss ideas for page/ general functionality:
  // Create a container to the right of the window that contains thumbnains of blog posts
  // To the left in the white space, have written content welcoming or attracting their attention as they first experience blog site
  // To the left of that create a grid 4 x 4 or 3 x 3 and have a set interval that has random blog posts appear with rounded images within the grid slots
  // NAV bar above is transparent. home about contact and blog options are available when hovering over different colored circles that also widen on mouse over
  // Idea of background color changing according to what NAV bar option you hover over
  // Mouse changed to circle that switches to negative over whatever color it hovers

// base code of store
// {
//   export interface StoreCreator {
//     <S, A extends Action, Ext, StateExt>(
//       reducer: Reducer<S, A>,
//       enhancer?: StoreEnhancer<Ext, StateExt>
//     ): Store<S & StateExt, A> & Ext
//     <S, A extends Action, Ext, StateExt>(
//       reducer: Reducer<S, A>,
//       preloadedState?: PreloadedState<S>,
//       enhancer?: StoreEnhancer<Ext>
//     ): Store<S & StateExt, A> & Ext
//   }
// }


// import React, { Component } from 'react';
// import { connect, useSelector, useDispatch } from 'react-redux';
// import axios from 'axios';

// import * as actions from "../../actions";




// class LoginForm extends Component {
//   constructor(props){
//     super(props);

//     this.state = {
//       name: "",
//       email: "",
//       pwd: "",
//       errorText: ""
//     };
    
    
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   };



//   handleChange(event) {
//     this.setState({
//       [event.target.name]: event.target.value,
//       errorText: ""
//     })
//   };

//   handleSubmit(event) {
//     axios 
//       .post("http://localhost:5000/api/users", {
//         name: this.state.name,
//         email: this.state.email,
//         pwd: this.state.pwd
//         },
//         {withCredentials: true}
//       )
//       .then(response => {
//         console.log(`handle submit & ${response.data}:`);
//       })
//       .catch(error => {
//         this.setState({
//           errorText: "Failed login attempt"
//         })
//       })
//     event.preventDefault();
//   }

  
//   render() {

//     return (
//       <div className="content-wrapper">

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

//           <input 
//             type="submit" 
//             value="Sign Up" 
//             className="btn" 
//             onClick={() => {

//               this.props.userLoggedIn()
//               console.log(this.props.userLoggedIn());
//             }}
//           />
//         </form>

//         <h1 className="center">Log in</h1>

//         <form 
//           name="signup_form" 
//           method="POST"
//           onSubmit={this.handleSubmit}
//         >
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

//           <input 
//             type="submit" 
//             value="Log in" 
//             className="btn" 
//             onClick={() => {
//               this.selectUserEmail
//             }}
//           />
//         </form>
//       </div>
//     )
//   }
// }



// export default connect(null, actions)(LoginForm);




// function LoginForm() {
//   state = {
//     name: "",
//     email: "",
//     pwd: "",
//     errorText: ""
//   };
  


//   function handleChange(event) {
//     this.setState({
//       [event.target.name]: event.target.value,
//       errorText: ""
//     })
//   };

//   function handleSubmit(event) {
//     axios 
//       .post("http://localhost:5000/api/users", {
//         name: this.state.name,
//         email: this.state.email,
//         pwd: this.state.pwd
//         },
//         {withCredentials: true}
//       )
//       .then(response => {
//         console.log(`handle submit & ${response.data}:`);
//       })
//       .catch(error => {
//         setState({
//           errorText: "Failed login attempt"
//         })
//       })
//     event.preventDefault();
//   }

  

//   return (
//     <div className="content-wrapper">

//       <h1 className="center">Create an Account</h1>

//       <form 
//         name="signup_form" 
//         method="POST"
//         onSubmit={handleSubmit}
//       >
//         <label name="name">Name</label>
//         <input
//           onChange={handleChange} 
//           type="text" 
//           placeholder="Enter full name here" 
//           name="name" 
//           className="field" 
//           required
//         />
          
//         <label name="email">Email</label>
//         <input
//           onChange={handleChange} 
//           type="email" 
//           placeholder="Enter email here" 
//           name="email" 
//           className="field" 
//           required
//         />

//         <label name="pwd">Password</label>
//         <input
//           onChange={handleChange} 
//           type="password" 
//           placeholder="Enter password here" 
//           name="pwd" 
//           className="field" 
//           required
//         />

//         <input 
//           type="submit" 
//           value="Sign Up" 
//           className="btn" 
//           onClick={() => {
//             userLoggedIn()
//             console.log(userLoggedIn());
//           }}
//         />
//       </form>

//       <h1 className="center">Log in</h1>

//       <form 
//         name="signup_form" 
//         method="POST"
//         onSubmit={handleSubmit}
//       >
//         <label name="email">Email</label>
//         <input
//           onChange={handleChange} 
//           type="email" 
//           placeholder="Enter email here" 
//           name="email" 
//           className="field" 
//           required
//         />

//         <label name="pwd">Password</label>
//         <input
//           onChange={handleChange} 
//           type="password" 
//           placeholder="Enter password here" 
//           name="pwd" 
//           className="field" 
//           required
//         />

//         <input 
//           type="submit" 
//           value="Log in" 
//           className="btn" 
//           onClick={() => {
//             console.log("asdf");
            
//           }}
//         />
//       </form>
//     </div>
//   )

// }



// export default connect(null, actions)(LoginForm);