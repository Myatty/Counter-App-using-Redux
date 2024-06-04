/* eslint-disable no-unused-vars */
import { legacy_createStore as createStore } from "redux";

const initialState = { counter: 0, isShow: true };
const counterReducer = (state = initialState, action) => {
  if (action.type === "increase") {
    return {
      counter: state.counter + 1,
      isShow: state.isShow,
    };
  }
  else if (action.type === "decrease") {
    if(state.counter > 1){
        return {
          counter: state.counter - 1,
          isShow: state.isShow,
        };
    }
    else{
        alert("You cant decrease number below 0");
    }
  }
  else if (action.type === "increaseMore") {
    return {
      counter: state.counter + action.amount,
      isShow: state.isShow,
    };
  }
  else if (action.type === "toggleCounter") {
    return {
      isShow: !state.isShow,
      counter: state.counter,
    };
  }

  return state;
};
const store = createStore(counterReducer);

export default store;
