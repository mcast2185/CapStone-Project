import { combineReducers } from '@reduxjs/toolkit';

import reducer from './reducer';
// import loginReducer from './login-reducer';

const rootReducer = combineReducers({
  reducer,
  // isLoggedIn: loginReducer,
  state: (state = {}) => state
});

export default rootReducer;