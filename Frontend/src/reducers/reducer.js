const initialState = [];
const reducer = (state = initialState, action) => {
  if (action.type === "Register_User") {
    return [
      ...state, 
      action.payload
    ]
  }
  return state;
}

export default reducer;