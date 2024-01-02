import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentSlide: 0,
};

const carouselSlice = createSlice({
  name: "carousel",
  initialState,
  reducers: {
    seCurrentValue: (state, { payload: slide }) => {
      state.currentSlide = slide;
    },
  },
});

export default carouselSlice.reducer;
export const { seCurrentValue } = carouselSlice.actions;
