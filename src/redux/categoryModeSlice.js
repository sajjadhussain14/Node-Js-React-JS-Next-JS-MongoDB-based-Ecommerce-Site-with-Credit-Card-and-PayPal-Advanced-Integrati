import { createSlice } from "@reduxjs/toolkit";

export const categoryModeSlice = createSlice({
  name: "categoryMode",
  initialState: "category",
  reducers: {
    setCategoryMode: (state, action) => {
      return action.payload;
    },
  },
});

export const { setCategoryMode } = categoryModeSlice.actions;

export default categoryModeSlice.reducer;
