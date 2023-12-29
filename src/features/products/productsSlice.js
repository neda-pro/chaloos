import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedProduct: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSelectedProduct: (state, { payload }) => {
      state.selectedProduct = payload;
    },
  },
});

export default productsSlice.reducer;
export const { setSelectedProduct } = productsSlice.actions;
