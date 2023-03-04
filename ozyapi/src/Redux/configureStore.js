import { configureStore } from "@reduxjs/toolkit";
import storeSlice from "./Houses/houses";

const store = configureStore({
  reducer: {
    storeSlice,
  },
});

export default store;
