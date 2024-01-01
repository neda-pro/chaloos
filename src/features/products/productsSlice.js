import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedProduct: null,
  cart: [],
  totalItemsInCart: 0,
  favorites: {},
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
    removeItemFromCart: (state, { payload: id }) => {
      const item = state.cart.find((i) => i.id === id);
      state.totalItemsInCart -= item.count;
      state.cart = state.cart.filter((item) => item.id !== id);
    },
    increaseCartItemCount: (state, { payload: id }) => {
      const item = state.cart.find((i) => i.id === id);
      item.count++;
      state.totalItemsInCart++;
    },
    decreaseCartItemCount: (state, { payload: id }) => {
      const item = state.cart.find((i) => i.id === id);
      item.count--;
      state.totalItemsInCart--;
      if (item.count === 0) {
        state.cart = state.cart.filter((i) => i.id !== id);
      }
    },
    toggleItemFavorites: (state, { payload: id }) => {
      if (!state.favorites[id]) state.favorites[id] = true;
      else state.favorites[id] = !state.favorites[id];
    },
  },
});

export default productsSlice.reducer;
export const {
  setSelectedProduct,
  increaseIteCount,
  decreaseIteCount,
  addItemToCart,
  removeItemFromCart,
  increaseCartItemCount,
  decreaseCartItemCount,
  toggleItemFavorites,
} = productsSlice.actions;
