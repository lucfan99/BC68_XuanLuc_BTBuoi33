import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shoes: {},
};
export const chiTietShoesSlice = createSlice({
  name: "chitiet",
  initialState,
  reducers: {
    renderShoe1: (state, action) => {
      state.shoes = action.payload;
    },
  },
});
export const { renderShoe1 } = chiTietShoesSlice.actions;
export default chiTietShoesSlice.reducer;
