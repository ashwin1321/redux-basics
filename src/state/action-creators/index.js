export const depositMoney = (amount) => {
  return (dispatch) => {
    // it is a function that returns a function
    dispatch({
      // dispatch is a function that takes an action
      type: "deposit",
      payload: amount,
    });
  };
};

export const withdrawMoney = (amount) => {
  return (dispatch) => {
    // it is a function that returns a function
    dispatch({
      // dispatch is a function that takes an action
      type: "withdraw",
      payload: amount,
    });
  };
};

