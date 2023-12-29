import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./features/modal/modalSlice";
import productsReducer from "./features/products/productsSlice";
export const store = configureStore({
  reducer: {
    modal: modalReducer,
    products: productsReducer,
  },
});
