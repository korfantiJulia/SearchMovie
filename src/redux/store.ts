import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import { moviesReducer } from "./slices/moviesSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    movies: moviesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
