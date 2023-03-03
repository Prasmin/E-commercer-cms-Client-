import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cats: [],
};

const catSlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCats: (state, { payload = [] }) => {
      state.cats = payload;
    },
  },
});

const { reducer, actions } = catSlice;

export const { setCats } = actions;

export default reducer;

//The payload property is used to pass data or information to the reducer function from the action that invoked it. In a Redux application, an action typically consists of an object with a type property and a payload property. The type property specifies the type of action being performed, while the payload property contains any data or information that needs to be passed to the reducer function.An action typically has a type property that identifies the type of action being performed
//
