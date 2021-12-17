const initialState = [];
const reducer = (state = initialState, action) => {
  if (action.type === "Register_User" || "Status_Action") {
    return [
      ...state, 
      action.payload
    ]
  }
  return state;
}

export default reducer;