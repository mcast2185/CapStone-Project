import React, { Component } from 'react';

import LoginForm from "../user-login/login-form";


export default class Home extends Component {
  constructor(){
    super();

  };
  
  render(){
    return (
      <React.StrictMode>
        <div className="home-content-wrapper">
          <div className='grid-wrapper'>
            <LoginForm />
          </div>
        </div>
      </React.StrictMode>
    )
  };
};



// function Home() {
  
//   const reducer = useSelector((state) => state.reducer);
//   const isLoggedIn = useSelector((state) => state.isLoggedIn);
//   const dispatch = useDispatch();



  
//   return (
//     <div className="home-content-wrapper">
//       <div className='grid-wrapper'>
//       <LoginForm handleState={handleState}/>
//       </div>
//     </div>
//   )
// }
// export default connect(mapStateToProps,null)(Home)