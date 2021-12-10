const initialState = [];
const reducer = (state = initialState, actions) => {
  if (actions.type === "Registered_User") {
    return [...state, actions.payload]
  }
  console.log("Reducer:", state, actions);
  return state;
}

export default reducer;