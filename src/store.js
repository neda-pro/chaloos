import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./features/dummy/countSlice";
export const store = configureStore({
  reducer: {
    testCount: countReducer,
  },
});
