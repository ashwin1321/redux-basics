const reducer = (state = 0, action) => {
  // reducer is a function that takes state and action and returns a new state
  if (action.type === "deposit") {
    return state + action.payload;

  }
  else if (action.type === "withdraw") {
    return state - action.payload;
  }
  return state;
};

export default reducer;
