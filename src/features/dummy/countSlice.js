import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addCount: (state) => {
      state.count = state.count + 1;
    },
  },
});

export default counterSlice.reducer;
export const { addCount } = counterSlice.actions;