import { configureStore } from "@reduxjs/toolkit";
import assetsReducer from "./assets";

export const store = configureStore({
  reducer: {
    assets: assetsReducer,
  },
});
