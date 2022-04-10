import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import taxonomyReducer from "./taxonomySlice";
import currentProductsReducer from "./currentProductsSlice";
import allFiltersSlice from "./allFiltersSlice";
import categoryModeReducer from "./categoryModeSlice";
import landingCategoriesReducer from "./landingCategoriesSlice";
import cartReducer from "./cartSlice";

export default configureStore({
  reducer: {
    products: productReducer,
    crntProducts: currentProductsReducer,
    taxonomy: taxonomyReducer,
    allFilters: allFiltersSlice,
    categoryMode: categoryModeReducer,
    landingCategories: landingCategoriesReducer,
    cart: cartReducer,
  },
});
