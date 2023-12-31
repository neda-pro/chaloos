import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedProduct: null,
  cart: [],
  totalItemsInCart: 0,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSelectedProduct: (state, { payload }) => {
      state.selectedProduct = payload;
      const copyObj = {
        ...state.selectedProduct,
        count: 1,
      };
      state.selectedProduct = copyObj;
    },
    increaseIteCount: (state) => {
      state.selectedProduct.count = state.selectedProduct.count + 1;
    },
    decreaseIteCount: (state) => {
      if (state.selectedProduct.count > 0)
        state.selectedProduct.count = state.selectedProduct.count - 1;
    },
    addItemToCart: (state, { payload: product }) => {
      const checkItem = state.cart.find((item) => product.id === item.id);
      if (checkItem) {
        checkItem.count += product.count;
      } else {
        state.cart.push(product);
        state.totalItemsInCart += product.count;
      }
    },
  },
});

export default productsSlice.reducer;
export const {
  setSelectedProduct,
  increaseIteCount,
  decreaseIteCount,
  addItemToCart,
} = productsSlice.actions;
