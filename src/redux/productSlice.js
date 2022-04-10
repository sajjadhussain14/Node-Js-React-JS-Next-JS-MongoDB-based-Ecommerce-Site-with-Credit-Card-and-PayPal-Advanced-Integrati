import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../API";

// IF WE WANT TO GET PRODUCTS FROM API FROM REDUX THEN BELOW CODE CAN BE USE
// USE IT AS ON FRONTEND TO GET aLL PRODUCTS   dispatch(getProducts(data));
/*
export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    let data = await fetchData();
    data = [
      { id: 1, name: "aaa", price: 10 },
      { id: 3, name: "ccc", price: 30 },
    ];
    console.log(data);
    return await data;
  }
);
*/

export const productSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    setAllProducts: (state, action) => {
      return action.payload;
    },
  },

  // FOR ABOVE async GETPRODUCTS
  /*
  extraReducers: {
    [getProducts.fulfilled]: (state, action) => {
      return action.payload;
    },
  },
  */
});

export const { setAllProducts } = productSlice.actions;

export default productSlice.reducer;
