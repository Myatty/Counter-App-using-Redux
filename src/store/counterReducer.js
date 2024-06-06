import {createSlice } from "@reduxjs/toolkit";

const initialCounterState = {counter: 0 , isShow: true};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increase(state){
      state.counter ++ ;
    },
    increaseMore(state, action){
      state.counter = state.counter + action.payload;
    },
    decrease(state){
      if(state.counter > 0 ){
        state.counter --;
      }else{
        alert("You can't decrease it again!!!")
      }
    },
    toggle(state){
      state.isShow = !state.isShow;
    },
  }
})


export const counterActions = counterSlice.actions;

export default counterSlice.reducer;