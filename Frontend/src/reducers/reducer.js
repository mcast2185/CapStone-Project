const initialState = [];
const reducer = (state = initialState, action) => {
  console.log("reducer", state, action);
  if (action.type === "Registered_User") {
    return [...state, action.payload]
  }
  return state;
}

export default reducer;