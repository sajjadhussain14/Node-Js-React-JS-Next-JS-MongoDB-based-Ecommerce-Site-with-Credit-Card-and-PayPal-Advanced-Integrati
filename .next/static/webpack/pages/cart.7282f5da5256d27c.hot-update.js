"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/cart",{

/***/ "./src/pages/cart.js":
/*!***************************!*\
  !*** ./src/pages/cart.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_cart_EmptyCart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/cart/EmptyCart */ \"./src/components/cart/EmptyCart.js\");\n/* harmony import */ var _components_cart_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/cart/Layout */ \"./src/components/cart/Layout.js\");\n/* harmony import */ var _components_header_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/header/Header */ \"./src/components/header/Header.js\");\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Cart = function() {\n    _s();\n    var URL = \"http://localhost:3000\";\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), cart = ref[0], setCart = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), loading = ref1[0], setLoading = ref1[1];\n    var cartValue = [];\n    if (true) {\n        cartValue = JSON.parse(localStorage.getItem(\"cart\"));\n    }\n    var cartData = [];\n    if (true) {\n        try {\n            cartData = JSON.parse(localStorage.getItem(\"cart\"));\n        } catch (err) {}\n    }\n    var checkCart = \"\";\n    try {\n        checkCart = JSON.stringify(cartData);\n    } catch (err) {}\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setCart(cartData);\n        setLoading(false);\n    }, [\n        checkCart\n    ]);\n    if (true) {\n        try {} catch (err) {}\n    }\n    var sum = 0;\n    try {\n        sum = cartData.reduce(function(prod, param) {\n            var total = param.total;\n            return prod + total;\n        }, 0);\n    } catch (err1) {}\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                height: \"400px\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"overlay \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"loading \",\n                    children: [\n                        \"Loading....\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"spinner-grow text-danger\",\n                            role: \"status\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"visually-hidden\",\n                                children: \"Loading...\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\modern\\\\src\\\\pages\\\\cart.js\",\n                                lineNumber: 51,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\modern\\\\src\\\\pages\\\\cart.js\",\n                            lineNumber: 50,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"spinner-grow text-warning\",\n                            role: \"status\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"visually-hidden\",\n                                children: \"Loading...\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\modern\\\\src\\\\pages\\\\cart.js\",\n                                lineNumber: 54,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\modern\\\\src\\\\pages\\\\cart.js\",\n                            lineNumber: 53,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"spinner-grow text-info\",\n                            role: \"status\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"visually-hidden\",\n                                children: \"Loading...\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\modern\\\\src\\\\pages\\\\cart.js\",\n                                lineNumber: 57,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\modern\\\\src\\\\pages\\\\cart.js\",\n                            lineNumber: 56,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\modern\\\\src\\\\pages\\\\cart.js\",\n                    lineNumber: 48,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\modern\\\\src\\\\pages\\\\cart.js\",\n                lineNumber: 47,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"D:\\\\modern\\\\src\\\\pages\\\\cart.js\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, _this);\n    }\n    if (!cart || cart.length < 1) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cart_EmptyCart__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                cart: cart,\n                page: \"cart\"\n            }, void 0, false, {\n                fileName: \"D:\\\\modern\\\\src\\\\pages\\\\cart.js\",\n                lineNumber: 68,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"View Cart | Optimized and SEO Friendly Demo Site\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\modern\\\\src\\\\pages\\\\cart.js\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"title\",\n                        content: \"View Cart | Optimized and SEO Friendly Demo Site\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\modern\\\\src\\\\pages\\\\cart.js\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"View cart of Optimized and SEO Friendly Ecommerce site that will boost your sales and conversions\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\modern\\\\src\\\\pages\\\\cart.js\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"keywords\",\n                        content: \"ecommerce, modern, SEO friendly, cumulus\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\modern\\\\src\\\\pages\\\\cart.js\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\modern\\\\src\\\\pages\\\\cart.js\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header_Header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                taxonomy: props.taxonomy,\n                cartData: cartValue\n            }, void 0, false, {\n                fileName: \"D:\\\\modern\\\\src\\\\pages\\\\cart.js\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cart_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                cart: cart,\n                setCart: setCart\n            }, void 0, false, {\n                fileName: \"D:\\\\modern\\\\src\\\\pages\\\\cart.js\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(Cart, \"3XG0QAqH/uLX/8072lok9QRLMk0=\");\n_c = Cart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cart);\nvar _c;\n$RefreshReg$(_c, \"Cart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY2FydC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQW1EO0FBQ3RCO0FBQ3dCO0FBQ047QUFDRTs7QUFFakQsSUFBTU8sSUFBSSxHQUFHLFdBQU07O0lBQ2pCLElBQUksR0FBSyxHQUFLRSx1QkFBTDtJQUVULElBQXdCUixHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBVHRDLElBU2EsR0FBYUEsR0FBWSxHQUF6QixFQVRiLE9BU3NCLEdBQUlBLEdBQVksR0FBaEI7SUFDcEIsSUFBOEJBLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLENBQUMsRUFWOUMsT0FVZ0IsR0FBZ0JBLElBQWMsR0FBOUIsRUFWaEIsVUFVNEIsR0FBSUEsSUFBYyxHQUFsQjtJQUMxQixJQUFJYyxTQUFTLEdBQUcsRUFBRTtJQUNsQixJQUFJLElBQTRCLEVBQUU7UUFDaENBLFNBQVMsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7S0FDdEQ7SUFFRCxJQUFJQyxRQUFRLEdBQUcsRUFBRTtJQUVqQixJQUFJLElBQTRCLEVBQUU7UUFDaEMsSUFBSTtZQUNGQSxRQUFRLEdBQUdKLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ3JELENBQUMsT0FBT0UsR0FBRyxFQUFFLEVBQUU7S0FDakI7SUFDRCxJQUFJQyxTQUFTLEdBQUcsRUFBRTtJQUNsQixJQUFJO1FBQ0ZBLFNBQVMsR0FBR04sSUFBSSxDQUFDTyxTQUFTLENBQUNILFFBQVEsQ0FBQyxDQUFDO0tBQ3RDLENBQUMsT0FBT0MsR0FBRyxFQUFFLEVBQUU7SUFFaEJuQixnREFBUyxDQUFDLFdBQU07UUFDZFUsT0FBTyxDQUFDUSxRQUFRLENBQUMsQ0FBQztRQUNsQk4sVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ25CLEVBQUU7UUFBQ1EsU0FBUztLQUFDLENBQUMsQ0FBQztJQUVoQixJQUFJLElBQTRCLEVBQUU7UUFDaEMsSUFBSSxFQUNILENBQUMsT0FBT0QsR0FBRyxFQUFFLEVBQUU7S0FDakI7SUFFRCxJQUFJRyxHQUFHLEdBQUcsQ0FBQztJQUNYLElBQUk7UUFDRkEsR0FBRyxHQUFHSixRQUFRLENBQUNLLE1BQU0sQ0FBQyxTQUFDQyxJQUFJO2dCQUFJQyxLQUFLLFNBQUxBLEtBQUs7bUJBQU9ELElBQUksR0FBR0MsS0FBSztTQUFBLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDN0QsQ0FBQyxPQUFPTixJQUFHLEVBQUUsRUFBRTtJQUVoQixJQUFJUixPQUFPLEVBQUU7UUFDWCxxQkFDRSw4REFBQ2UsS0FBRztZQUFDQyxLQUFLLEVBQUU7Z0JBQUVDLE1BQU0sRUFBRSxPQUFPO2FBQUU7c0JBQzdCLDRFQUFDRixLQUFHO2dCQUFDRyxTQUFTLEVBQUcsVUFBUTswQkFDdkIsNEVBQUNILEtBQUc7b0JBQUNHLFNBQVMsRUFBQyxVQUFVOzt3QkFBQyxhQUV4QjtzQ0FBQSw4REFBQ0gsS0FBRzs0QkFBQ0csU0FBUyxFQUFDLDBCQUEwQjs0QkFBQ0MsSUFBSSxFQUFDLFFBQVE7c0NBQ3JELDRFQUFDQyxNQUFJO2dDQUFDRixTQUFTLEVBQUMsaUJBQWlCOzBDQUFDLFlBQVU7Ozs7O3FDQUFPOzs7OztpQ0FDL0M7c0NBQ04sOERBQUNILEtBQUc7NEJBQUNHLFNBQVMsRUFBQywyQkFBMkI7NEJBQUNDLElBQUksRUFBQyxRQUFRO3NDQUN0RCw0RUFBQ0MsTUFBSTtnQ0FBQ0YsU0FBUyxFQUFDLGlCQUFpQjswQ0FBQyxZQUFVOzs7OztxQ0FBTzs7Ozs7aUNBQy9DO3NDQUNOLDhEQUFDSCxLQUFHOzRCQUFDRyxTQUFTLEVBQUMsd0JBQXdCOzRCQUFDQyxJQUFJLEVBQUMsUUFBUTtzQ0FDbkQsNEVBQUNDLE1BQUk7Z0NBQUNGLFNBQVMsRUFBQyxpQkFBaUI7MENBQUMsWUFBVTs7Ozs7cUNBQU87Ozs7O2lDQUMvQzs7Ozs7O3lCQUNGOzs7OztxQkFDRjs7Ozs7aUJBQ0YsQ0FDTjtLQUNIO0lBRUQsSUFBSSxDQUFDcEIsSUFBSSxJQUFJQSxJQUFJLENBQUN1QixNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQzVCLHFCQUNFO3NCQUNFLDRFQUFDOUIsa0VBQVM7Z0JBQUNPLElBQUksRUFBRUEsSUFBSTtnQkFBRXdCLElBQUksRUFBQyxNQUFNOzs7OztxQkFBRzt5QkFDcEMsQ0FDSDtLQUNIO0lBQ0QscUJBQ0U7OzBCQUNFLDhEQUFDaEMsa0RBQUk7O2tDQUNILDhEQUFDaUMsT0FBSztrQ0FBQyxrREFBZ0Q7Ozs7OzZCQUFRO2tDQUMvRCw4REFBQ0MsTUFBSTt3QkFDSEMsSUFBSSxFQUFDLE9BQU87d0JBQ1pDLE9BQU8sRUFBQyxrREFBa0Q7Ozs7OzZCQUMxRDtrQ0FDRiw4REFBQ0YsTUFBSTt3QkFDSEMsSUFBSSxFQUFDLGFBQWE7d0JBQ2xCQyxPQUFPLEVBQUMsbUdBQW1HOzs7Ozs2QkFDM0c7a0NBQ0YsOERBQUNGLE1BQUk7d0JBQ0hDLElBQUksRUFBQyxVQUFVO3dCQUNmQyxPQUFPLEVBQUMsMENBQTBDOzs7Ozs2QkFDbEQ7Ozs7OztxQkFDRzswQkFDUCw4REFBQ2pDLGlFQUFNO2dCQUFDa0MsUUFBUSxFQUFFQyxLQUFLLENBQUNELFFBQVE7Z0JBQUVwQixRQUFRLEVBQUVMLFNBQVM7Ozs7O3FCQUFJOzBCQUN6RCw4REFBQ1YsK0RBQU07Z0JBQUNNLElBQUksRUFBRUEsSUFBSTtnQkFBRUMsT0FBTyxFQUFFQSxPQUFPOzs7OztxQkFBSTs7b0JBQ3ZDLENBQ0g7Q0FDSDtHQXRGS0wsSUFBSTtBQUFKQSxLQUFBQSxJQUFJO0FBdUZWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NhcnQuanM/ZmRiOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBFbXB0eUNhcnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY2FydC9FbXB0eUNhcnRcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9jYXJ0L0xheW91dFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRlci9IZWFkZXJcIjtcclxuXHJcbmNvbnN0IENhcnQgPSAoKSA9PiB7XHJcbiAgbGV0IHsgVVJMIH0gPSBwcm9jZXNzLmVudjtcclxuXHJcbiAgY29uc3QgW2NhcnQsIHNldENhcnRdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGxldCBjYXJ0VmFsdWUgPSBbXTtcclxuICBpZiAodHlwZW9mIHdpbmRvdyAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBjYXJ0VmFsdWUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2FydFwiKSk7XHJcbiAgfVxyXG5cclxuICBsZXQgY2FydERhdGEgPSBbXTtcclxuXHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY2FydERhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2FydFwiKSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHt9XHJcbiAgfVxyXG4gIGxldCBjaGVja0NhcnQgPSBcIlwiO1xyXG4gIHRyeSB7XHJcbiAgICBjaGVja0NhcnQgPSBKU09OLnN0cmluZ2lmeShjYXJ0RGF0YSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7fVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0Q2FydChjYXJ0RGF0YSk7XHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICB9LCBbY2hlY2tDYXJ0XSk7XHJcblxyXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIHRyeSB7XHJcbiAgICB9IGNhdGNoIChlcnIpIHt9XHJcbiAgfVxyXG5cclxuICBsZXQgc3VtID0gMDtcclxuICB0cnkge1xyXG4gICAgc3VtID0gY2FydERhdGEucmVkdWNlKChwcm9kLCB7IHRvdGFsIH0pID0+IHByb2QgKyB0b3RhbCwgMCk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7fVxyXG5cclxuICBpZiAobG9hZGluZykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IFwiNDAwcHhcIiB9fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG92ZXJsYXkgYH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmcgXCI+XHJcbiAgICAgICAgICAgIExvYWRpbmcuLi4uXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3Bpbm5lci1ncm93IHRleHQtZGFuZ2VyXCIgcm9sZT1cInN0YXR1c1wiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInZpc3VhbGx5LWhpZGRlblwiPkxvYWRpbmcuLi48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwaW5uZXItZ3JvdyB0ZXh0LXdhcm5pbmdcIiByb2xlPVwic3RhdHVzXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidmlzdWFsbHktaGlkZGVuXCI+TG9hZGluZy4uLjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3Bpbm5lci1ncm93IHRleHQtaW5mb1wiIHJvbGU9XCJzdGF0dXNcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ2aXN1YWxseS1oaWRkZW5cIj5Mb2FkaW5nLi4uPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBpZiAoIWNhcnQgfHwgY2FydC5sZW5ndGggPCAxKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxFbXB0eUNhcnQgY2FydD17Y2FydH0gcGFnZT1cImNhcnRcIiAvPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+VmlldyBDYXJ0IHwgT3B0aW1pemVkIGFuZCBTRU8gRnJpZW5kbHkgRGVtbyBTaXRlPC90aXRsZT5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgbmFtZT1cInRpdGxlXCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJWaWV3IENhcnQgfCBPcHRpbWl6ZWQgYW5kIFNFTyBGcmllbmRseSBEZW1vIFNpdGVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICBjb250ZW50PVwiVmlldyBjYXJ0IG9mIE9wdGltaXplZCBhbmQgU0VPIEZyaWVuZGx5IEVjb21tZXJjZSBzaXRlIHRoYXQgd2lsbCBib29zdCB5b3VyIHNhbGVzIGFuZCBjb252ZXJzaW9uc1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgbmFtZT1cImtleXdvcmRzXCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJlY29tbWVyY2UsIG1vZGVybiwgU0VPIGZyaWVuZGx5LCBjdW11bHVzXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxIZWFkZXIgdGF4b25vbXk9e3Byb3BzLnRheG9ub215fSBjYXJ0RGF0YT17Y2FydFZhbHVlfSAvPlxyXG4gICAgICA8TGF5b3V0IGNhcnQ9e2NhcnR9IHNldENhcnQ9e3NldENhcnR9IC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBDYXJ0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkhlYWQiLCJFbXB0eUNhcnQiLCJMYXlvdXQiLCJIZWFkZXIiLCJDYXJ0IiwiVVJMIiwicHJvY2VzcyIsImVudiIsImNhcnQiLCJzZXRDYXJ0IiwibG9hZGluZyIsInNldExvYWRpbmciLCJjYXJ0VmFsdWUiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY2FydERhdGEiLCJlcnIiLCJjaGVja0NhcnQiLCJzdHJpbmdpZnkiLCJzdW0iLCJyZWR1Y2UiLCJwcm9kIiwidG90YWwiLCJkaXYiLCJzdHlsZSIsImhlaWdodCIsImNsYXNzTmFtZSIsInJvbGUiLCJzcGFuIiwibGVuZ3RoIiwicGFnZSIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwidGF4b25vbXkiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/cart.js\n");

/***/ })

});