import { combineReducers } from '@reduxjs/toolkit';

import reducer from './reducer';


const rootReducer = combineReducers({
  reducer,
  state: (state = {}) => state
});

export default rootReducer;