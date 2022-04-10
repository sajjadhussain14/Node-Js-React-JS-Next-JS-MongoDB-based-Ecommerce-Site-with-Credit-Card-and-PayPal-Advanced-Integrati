import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../API";
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

export const productSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    addProduct: (state, action) => {
      const product = {
        id: action.payload.id,
        name: action.payload.name,
        price: action.payload.price,
      };

      state.push(product);
    },
  },
  extraReducers: {
    [getProducts.fulfilled]: (state, action) => {
      return action.payload;
    },
  },
});

export const { addProduct } = productSlice.actions;

export default productSlice.reducer;
