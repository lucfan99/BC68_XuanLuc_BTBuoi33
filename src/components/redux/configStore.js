import { configureStore } from "@reduxjs/toolkit";
import { chiTietShoesSlice } from "./chiTietShoesSlice";

export const shoesStore = configureStore({
  reducer: {
    chiTietShoesSlice,
  },
});
