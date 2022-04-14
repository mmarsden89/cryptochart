import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: JSON.parse(localStorage.getItem("portfolio")) || {},
};

export const assetsSlice = createSlice({
  name: "assets",
  initialState,
  reducers: {
    update: (state, action) => {
      state.value = action.payload;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = assetsSlice.actions;

export default assetsSlice.reducer;
