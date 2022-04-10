import { createSlice } from "@reduxjs/toolkit";

export const taxonomySlice = createSlice({
  name: "taxonomy",
  initialState: [],
  reducers: {
    setAllTaxonomy: (state, action) => {
      return action.payload;
    },
  },
});

export const { setAllTaxonomy } = taxonomySlice.actions;

export default taxonomySlice.reducer;
