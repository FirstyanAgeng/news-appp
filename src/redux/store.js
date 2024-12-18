// implementasi redux
import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./createSlice";

const store = configureStore({
  reducer: {
    articles: articlesReducer,
  },
});

export default store;
