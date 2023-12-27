import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addCount: (state) => {
      state.count = state.count + 1;
    },
  },
});

export default productSlice.reducer;
export const {} = productSlice.actions;
