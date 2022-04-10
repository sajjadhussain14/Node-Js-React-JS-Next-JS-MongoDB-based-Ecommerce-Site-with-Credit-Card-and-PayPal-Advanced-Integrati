import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    setCartData: (state, action) => {
      return action.payload;
    },
  },
});

export const { setCartData } = cartSlice.actions;

export default cartSlice.reducer;
