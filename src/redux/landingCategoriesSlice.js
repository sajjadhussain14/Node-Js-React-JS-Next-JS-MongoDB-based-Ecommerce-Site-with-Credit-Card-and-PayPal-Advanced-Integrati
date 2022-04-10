import { createSlice } from "@reduxjs/toolkit";

export const landingCategoriesSlice = createSlice({
  name: "landingCategories",
  initialState: [],
  reducers: {
    setLandingCategories: (state, action) => {
      return action.payload;
    },
  },
});

export const { setLandingCategories } = landingCategoriesSlice.actions;

export default landingCategoriesSlice.reducer;
