import { createSlice } from "@reduxjs/toolkit";

export const currentProductsSlice = createSlice({
  name: "crntProducts",
  initialState: [],
  reducers: {
    setCrntProducts: (state, action) => {
      return action.payload;
    },
  },
});

export const { setCrntProducts } = currentProductsSlice.actions;

export default currentProductsSlice.reducer;
