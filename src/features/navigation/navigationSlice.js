import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isHome: true,
};

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setIsHome: (state, { payload }) => {
      state.isHome = payload;
    },
  },
});

export default navigationSlice.reducer;
export const { setIsHome } = navigationSlice.actions;
