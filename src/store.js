import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./features/modal/modalSlice";
import productsReducer from "./features/products/productsSlice";
import carouselSliderReducer from "./features/carousel/carouselSlice";
import navigationReducer from "./features/navigation/navigationSlice";
export const store = configureStore({
  reducer: {
    modal: modalReducer,
    products: productsReducer,
    slider: carouselSliderReducer,
    navigation: navigationReducer,
  },
});
