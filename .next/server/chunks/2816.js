"use strict";
exports.id = 2816;
exports.ids = [2816];
exports.modules = {

/***/ 4069:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sV": () => (/* binding */ setAllFilters),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export allFiltersSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const allFiltersSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "allFilters",
    initialState: [],
    reducers: {
        setAllFilters: (state, action)=>{
            return action.payload;
        }
    }
});
const { setAllFilters  } = allFiltersSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (allFiltersSlice.reducer);


/***/ }),

/***/ 7496:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wg": () => (/* binding */ setCategoryMode),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export categoryModeSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const categoryModeSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "categoryMode",
    initialState: "category",
    reducers: {
        setCategoryMode: (state, action)=>{
            return action.payload;
        }
    }
});
const { setCategoryMode  } = categoryModeSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (categoryModeSlice.reducer);


/***/ }),

/***/ 615:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dW": () => (/* binding */ setCrntProducts),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export currentProductsSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const currentProductsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "crntProducts",
    initialState: [],
    reducers: {
        setCrntProducts: (state, action)=>{
            return action.payload;
        }
    }
});
const { setCrntProducts  } = currentProductsSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (currentProductsSlice.reducer);


/***/ }),

/***/ 5472:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z4": () => (/* binding */ setLandingCategories),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export landingCategoriesSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const landingCategoriesSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "landingCategories",
    initialState: [],
    reducers: {
        setLandingCategories: (state, action)=>{
            return action.payload;
        }
    }
});
const { setLandingCategories  } = landingCategoriesSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (landingCategoriesSlice.reducer);


/***/ }),

/***/ 3729:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WB": () => (/* binding */ setAllProducts),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export productSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);


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
*/ const productSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "products",
    initialState: [],
    reducers: {
        setAllProducts: (state, action)=>{
            return action.payload;
        }
    }
});
const { setAllProducts  } = productSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (productSlice.reducer);


/***/ }),

/***/ 1543:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ip": () => (/* binding */ setAllTaxonomy),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export taxonomySlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const taxonomySlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "taxonomy",
    initialState: [],
    reducers: {
        setAllTaxonomy: (state, action)=>{
            return action.payload;
        }
    }
});
const { setAllTaxonomy  } = taxonomySlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taxonomySlice.reducer);


/***/ })

};
;