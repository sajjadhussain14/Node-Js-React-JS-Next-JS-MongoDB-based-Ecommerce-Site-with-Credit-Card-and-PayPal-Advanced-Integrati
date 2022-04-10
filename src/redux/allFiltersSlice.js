import { createSlice } from "@reduxjs/toolkit";

export const allFiltersSlice = createSlice({
  name: "allFilters",
  initialState: [],
  reducers: {
    setAllFilters: (state, action) => {
      return action.payload;
    },
  },
});

export const { setAllFilters } = allFiltersSlice.actions;

export default allFiltersSlice.reducer;
