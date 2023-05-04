import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state";

const Shop = () => {
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );

  // bindActionCreators(actionCreators, dispatch) is equivalent to:
  // const depositMoney = (amount) => { dispatch(actionCreators.depositMoney(amount)) }
  // const withdrawMoney = (amount) => { dispatch(actionCreators.withdrawMoney(amount)) }


  return (
    <div>
      <h2>Deposit/Withdraw Money</h2>
      <button
        className="btn btn-primary mx-2"
        onClick={() => withdrawMoney(100)}
      // onClick={() => dispatch(actionCreators.withdrawMoney(100))}
      >
        -
      </button>
      Update Balance
      <button
        className="btn btn-primary mx-2"
        onClick={() => depositMoney(100)}
      // onClick={() => dispatch(actionCreators.depositMoney(100))}
      >
        +
      </button>
    </div>
  );
};

export default Shop;
