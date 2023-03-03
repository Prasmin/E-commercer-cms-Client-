import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pay: [],
};

const paySlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    setPay: (state, { payload }) => {
      state.pay = payload;
    },
  },
});

const { reducer, actions } = paySlice;

export const { setPay } = actions;

export default reducer;
