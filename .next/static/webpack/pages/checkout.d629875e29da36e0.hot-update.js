"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/checkout",{

/***/ "./src/pages/checkout.js":
/*!*******************************!*\
  !*** ./src/pages/checkout.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var D_modern_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_modern_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_modern_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_checkout_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/checkout/Layout */ \"./src/components/checkout/Layout.js\");\n/* harmony import */ var _assets_js_main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/js/main */ \"./src/assets/js/main.js\");\n/* harmony import */ var _controllers_account__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../controllers/account */ \"./src/controllers/account.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_cart_EmptyCart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/cart/EmptyCart */ \"./src/components/cart/EmptyCart.js\");\n/* harmony import */ var _controllers_order__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../controllers/order */ \"./src/controllers/order.js\");\n/* harmony import */ var _components_header_Header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/header/Header */ \"./src/components/header/Header.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Checkout = function(props) {\n    _s();\n    var URL = \"http://localhost:3000\";\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), cart = ref[0], setCart = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), loading = ref1[0], setLoading = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"USD\"), currency = ref2[0], setCurrency = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"0.00\"), grandTotal = ref3[0], setGrandTotal = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"paypal\"), paymentMethod = ref4[0], setPaymentMethod = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        name: \"\",\n        amount: 0\n    }), shippingMethod = ref5[0], setShippingMethod = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), tax = ref6[0], setTax = ref6[1];\n    var ref7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), screen = ref7[0], setScreen = ref7[1];\n    var ref8 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), userData = ref8[0], setUserData = ref8[1];\n    var loginstatus = \"\";\n    var userID = 0;\n    if (true) {\n        loginstatus = localStorage.getItem(\"isLogin\");\n        userID = localStorage.getItem(\"currentAliveUser\");\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(_asyncToGenerator(D_modern_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var user;\n        return D_modern_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return (0,_controllers_account__WEBPACK_IMPORTED_MODULE_6__.getCurrentUserData)(\"\");\n                case 2:\n                    user = _ctx.sent;\n                    delete user.credentials;\n                    setUserData(user);\n                case 5:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    })), []);\n    var cartData = [];\n    var checkCart = \"\";\n    try {\n        checkCart = JSON.stringify(cartData);\n    } catch (err) {}\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        cartData = JSON.parse(localStorage.getItem(\"cart\"));\n        setLoading(false);\n    }, [\n        checkCart\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        setCart(cartData);\n    }, [\n        checkCart\n    ]);\n    // START LOAD JQUERY JAVASCRIPT ADDITIONAL CODE\n    if (true) {\n        (0,_assets_js_main__WEBPACK_IMPORTED_MODULE_5__.getCheckoutScripts)((jquery__WEBPACK_IMPORTED_MODULE_3___default()));\n    }\n    // END LOAD JQUERY JAVASCRIPT ADDITIONAL CODE\n    if (loading == false && cart && cart.length < 1) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_cart_EmptyCart__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n            page: \"checkout\"\n        }, void 0, false, {\n            fileName: \"D:\\\\modern\\\\src\\\\pages\\\\checkout.js\",\n            lineNumber: 62,\n            columnNumber: 12\n        }, _this);\n    }\n    var orderDetails = (0,_controllers_order__WEBPACK_IMPORTED_MODULE_10__.initOrderDetails)();\n    orderDetails.items = cart;\n    orderDetails.UserID = userData.id;\n    orderDetails.user = userData;\n    orderDetails.payment.paymentMethod = paymentMethod;\n    orderDetails.payment.currency = currency;\n    orderDetails.order.shipping.name = shippingMethod.name;\n    orderDetails.order.shipping.amount = shippingMethod.amount;\n    (0,_controllers_order__WEBPACK_IMPORTED_MODULE_10__.setOrderDetails)(\"orderDetails\", orderDetails);\n    var od = (0,_controllers_order__WEBPACK_IMPORTED_MODULE_10__.getOrderDetails)(\"orderDetails\");\n    var cartValue = [];\n    if (true) {\n        cartValue = JSON.parse(localStorage.getItem(\"cart\"));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_7___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"CheckOut Page | Optimized and SEO Friendly Demo Site\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\modern\\\\src\\\\pages\\\\checkout.js\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"title\",\n                        content: \"CheckOut Page | Optimized and SEO Friendly Demo Site\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\modern\\\\src\\\\pages\\\\checkout.js\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Checkout Page of Optimized and SEO Friendly Ecommerce site that will boost your sales and conversions\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\modern\\\\src\\\\pages\\\\checkout.js\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"keywords\",\n                        content: \"ecommerce, modern, SEO friendly, cumulus\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\modern\\\\src\\\\pages\\\\checkout.js\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\modern\\\\src\\\\pages\\\\checkout.js\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_header_Header__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                taxonomy: props.taxonomy,\n                cartData: cartValue\n            }, void 0, false, {\n                fileName: \"D:\\\\modern\\\\src\\\\pages\\\\checkout.js\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_checkout_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                userData: userData,\n                setUserData: setUserData,\n                cart: cart,\n                setCart: setCart,\n                shippingMethod: shippingMethod,\n                setShippingMethod: setShippingMethod,\n                tax: tax,\n                setTax: setTax,\n                screen: screen,\n                setScreen: setScreen,\n                currency: currency,\n                setCurrency: setCurrency,\n                grandTotal: grandTotal,\n                setGrandTotal: setGrandTotal,\n                paymentMethod: paymentMethod,\n                setPaymentMethod: setPaymentMethod\n            }, void 0, false, {\n                fileName: \"D:\\\\modern\\\\src\\\\pages\\\\checkout.js\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(Checkout, \"IZ7Iv9i7s6HU7n3abolyXjkB9Ak=\");\n_c = Checkout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Checkout);\nvar _c;\n$RefreshReg$(_c, \"Checkout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0JBQ2RDLFNBQVMsRUFBRUEsU0FBUztnQkFDcEJiLFFBQVEsRUFBRUEsUUFBUTtnQkFDbEJDLFdBQVcsRUFBRUEsV0FBVztnQkFDeEJDLFVBQVUsRUFBRUEsVUFBVTtnQkFDdEJDLGFBQWEsRUFBRUEsYUFBYTtnQkFDNUJDLGFBQWEsRUFBRUEsYUFBYTtnQkFDNUJDLGdCQUFnQixFQUFFQSxnQkFBZ0I7Ozs7O3FCQUNsQzs7b0JBQ0QsQ0FDSDtDQUNIO0dBMUdLZCxRQUFRO0FBQVJBLEtBQUFBLFFBQVE7QUE0R2QsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvY2hlY2tvdXQuanM/ZDQzNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY2hlY2tvdXQvTGF5b3V0XCI7XHJcbmltcG9ydCB7IGdldENoZWNrb3V0U2NyaXB0cyB9IGZyb20gXCIuLi9hc3NldHMvanMvbWFpblwiO1xyXG5pbXBvcnQgeyBnZXRDdXJyZW50VXNlckRhdGEgfSBmcm9tIFwiLi4vY29udHJvbGxlcnMvYWNjb3VudFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBFbXB0eUNhcnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY2FydC9FbXB0eUNhcnRcIjtcclxuaW1wb3J0IHtcclxuICBnZXRPcmRlckRldGFpbHMsXHJcbiAgaW5pdE9yZGVyRGV0YWlscyxcclxuICBzZXRPcmRlckRldGFpbHMsXHJcbn0gZnJvbSBcIi4uL2NvbnRyb2xsZXJzL29yZGVyXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlclwiO1xyXG5cclxuY29uc3QgQ2hlY2tvdXQgPSAocHJvcHMpID0+IHtcclxuICBsZXQgeyBVUkwgfSA9IHByb2Nlc3MuZW52O1xyXG4gIGNvbnN0IFtjYXJ0LCBzZXRDYXJ0XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbY3VycmVuY3ksIHNldEN1cnJlbmN5XSA9IHVzZVN0YXRlKFwiVVNEXCIpO1xyXG4gIGNvbnN0IFtncmFuZFRvdGFsLCBzZXRHcmFuZFRvdGFsXSA9IHVzZVN0YXRlKFwiMC4wMFwiKTtcclxuICBjb25zdCBbcGF5bWVudE1ldGhvZCwgc2V0UGF5bWVudE1ldGhvZF0gPSB1c2VTdGF0ZShcInBheXBhbFwiKTtcclxuXHJcbiAgY29uc3QgW3NoaXBwaW5nTWV0aG9kLCBzZXRTaGlwcGluZ01ldGhvZF0gPSB1c2VTdGF0ZSh7IG5hbWU6IFwiXCIsIGFtb3VudDogMCB9KTtcclxuICBjb25zdCBbdGF4LCBzZXRUYXhdID0gdXNlU3RhdGUoMC4wKTtcclxuICBjb25zdCBbc2NyZWVuLCBzZXRTY3JlZW5dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3VzZXJEYXRhLCBzZXRVc2VyRGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgbGV0IGxvZ2luc3RhdHVzID0gXCJcIjtcclxuICBsZXQgdXNlcklEID0gMDtcclxuICBpZiAodHlwZW9mIHdpbmRvdyAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBsb2dpbnN0YXR1cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaXNMb2dpblwiKTtcclxuICAgIHVzZXJJRCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudEFsaXZlVXNlclwiKTtcclxuICB9XHJcbiAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgIGxldCB1c2VyID0gYXdhaXQgZ2V0Q3VycmVudFVzZXJEYXRhKFwiXCIpO1xyXG4gICAgZGVsZXRlIHVzZXIuY3JlZGVudGlhbHM7XHJcbiAgICBzZXRVc2VyRGF0YSh1c2VyKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGxldCBjYXJ0RGF0YSA9IFtdO1xyXG5cclxuICBsZXQgY2hlY2tDYXJ0ID0gXCJcIjtcclxuICB0cnkge1xyXG4gICAgY2hlY2tDYXJ0ID0gSlNPTi5zdHJpbmdpZnkoY2FydERhdGEpO1xyXG4gIH0gY2F0Y2ggKGVycikge31cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNhcnREYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhcnRcIikpO1xyXG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgfSwgW2NoZWNrQ2FydF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0Q2FydChjYXJ0RGF0YSk7XHJcbiAgfSwgW2NoZWNrQ2FydF0pO1xyXG5cclxuICAvLyBTVEFSVCBMT0FEIEpRVUVSWSBKQVZBU0NSSVBUIEFERElUSU9OQUwgQ09ERVxyXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGdldENoZWNrb3V0U2NyaXB0cygkKTtcclxuICB9XHJcbiAgLy8gRU5EIExPQUQgSlFVRVJZIEpBVkFTQ1JJUFQgQURESVRJT05BTCBDT0RFXHJcbiAgaWYgKGxvYWRpbmcgPT0gZmFsc2UgJiYgY2FydCAmJiBjYXJ0Lmxlbmd0aCA8IDEpIHtcclxuICAgIHJldHVybiA8RW1wdHlDYXJ0IHBhZ2U9XCJjaGVja291dFwiIC8+O1xyXG4gIH1cclxuXHJcbiAgbGV0IG9yZGVyRGV0YWlscyA9IGluaXRPcmRlckRldGFpbHMoKTtcclxuICBvcmRlckRldGFpbHMuaXRlbXMgPSBjYXJ0O1xyXG4gIG9yZGVyRGV0YWlscy5Vc2VySUQgPSB1c2VyRGF0YS5pZDtcclxuICBvcmRlckRldGFpbHMudXNlciA9IHVzZXJEYXRhO1xyXG5cclxuICBvcmRlckRldGFpbHMucGF5bWVudC5wYXltZW50TWV0aG9kID0gcGF5bWVudE1ldGhvZDtcclxuICBvcmRlckRldGFpbHMucGF5bWVudC5jdXJyZW5jeSA9IGN1cnJlbmN5O1xyXG5cclxuICBvcmRlckRldGFpbHMub3JkZXIuc2hpcHBpbmcubmFtZSA9IHNoaXBwaW5nTWV0aG9kLm5hbWU7XHJcbiAgb3JkZXJEZXRhaWxzLm9yZGVyLnNoaXBwaW5nLmFtb3VudCA9IHNoaXBwaW5nTWV0aG9kLmFtb3VudDtcclxuXHJcbiAgc2V0T3JkZXJEZXRhaWxzKFwib3JkZXJEZXRhaWxzXCIsIG9yZGVyRGV0YWlscyk7XHJcblxyXG4gIGxldCBvZCA9IGdldE9yZGVyRGV0YWlscyhcIm9yZGVyRGV0YWlsc1wiKTtcclxuXHJcbiAgbGV0IGNhcnRWYWx1ZSA9IFtdO1xyXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGNhcnRWYWx1ZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjYXJ0XCIpKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5DaGVja091dCBQYWdlIHwgT3B0aW1pemVkIGFuZCBTRU8gRnJpZW5kbHkgRGVtbyBTaXRlPC90aXRsZT5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgbmFtZT1cInRpdGxlXCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJDaGVja091dCBQYWdlIHwgT3B0aW1pemVkIGFuZCBTRU8gRnJpZW5kbHkgRGVtbyBTaXRlXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgY29udGVudD1cIkNoZWNrb3V0IFBhZ2Ugb2YgT3B0aW1pemVkIGFuZCBTRU8gRnJpZW5kbHkgRWNvbW1lcmNlIHNpdGUgdGhhdCB3aWxsIGJvb3N0IHlvdXIgc2FsZXMgYW5kIGNvbnZlcnNpb25zXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBuYW1lPVwia2V5d29yZHNcIlxyXG4gICAgICAgICAgY29udGVudD1cImVjb21tZXJjZSwgbW9kZXJuLCBTRU8gZnJpZW5kbHksIGN1bXVsdXNcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPEhlYWRlciB0YXhvbm9teT17cHJvcHMudGF4b25vbXl9IGNhcnREYXRhPXtjYXJ0VmFsdWV9IC8+XHJcbiAgICAgIDxMYXlvdXRcclxuICAgICAgICB1c2VyRGF0YT17dXNlckRhdGF9XHJcbiAgICAgICAgc2V0VXNlckRhdGE9e3NldFVzZXJEYXRhfVxyXG4gICAgICAgIGNhcnQ9e2NhcnR9XHJcbiAgICAgICAgc2V0Q2FydD17c2V0Q2FydH1cclxuICAgICAgICBzaGlwcGluZ01ldGhvZD17c2hpcHBpbmdNZXRob2R9XHJcbiAgICAgICAgc2V0U2hpcHBpbmdNZXRob2Q9e3NldFNoaXBwaW5nTWV0aG9kfVxyXG4gICAgICAgIHRheD17dGF4fVxyXG4gICAgICAgIHNldFRheD17c2V0VGF4fVxyXG4gICAgICAgIHNjcmVlbj17c2NyZWVufVxyXG4gICAgICAgIHNldFNjcmVlbj17c2V0U2NyZWVufVxyXG4gICAgICAgIGN1cnJlbmN5PXtjdXJyZW5jeX1cclxuICAgICAgICBzZXRDdXJyZW5jeT17c2V0Q3VycmVuY3l9XHJcbiAgICAgICAgZ3JhbmRUb3RhbD17Z3JhbmRUb3RhbH1cclxuICAgICAgICBzZXRHcmFuZFRvdGFsPXtzZXRHcmFuZFRvdGFsfVxyXG4gICAgICAgIHBheW1lbnRNZXRob2Q9e3BheW1lbnRNZXRob2R9XHJcbiAgICAgICAgc2V0UGF5bWVudE1ldGhvZD17c2V0UGF5bWVudE1ldGhvZH1cclxuICAgICAgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGVja291dDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCIkIiwiTGF5b3V0IiwiZ2V0Q2hlY2tvdXRTY3JpcHRzIiwiZ2V0Q3VycmVudFVzZXJEYXRhIiwiSGVhZCIsIlJvdXRlciIsIkVtcHR5Q2FydCIsImdldE9yZGVyRGV0YWlscyIsImluaXRPcmRlckRldGFpbHMiLCJzZXRPcmRlckRldGFpbHMiLCJIZWFkZXIiLCJDaGVja291dCIsInByb3BzIiwiVVJMIiwicHJvY2VzcyIsImVudiIsImNhcnQiLCJzZXRDYXJ0IiwibG9hZGluZyIsInNldExvYWRpbmciLCJjdXJyZW5jeSIsInNldEN1cnJlbmN5IiwiZ3JhbmRUb3RhbCIsInNldEdyYW5kVG90YWwiLCJwYXltZW50TWV0aG9kIiwic2V0UGF5bWVudE1ldGhvZCIsIm5hbWUiLCJhbW91bnQiLCJzaGlwcGluZ01ldGhvZCIsInNldFNoaXBwaW5nTWV0aG9kIiwidGF4Iiwic2V0VGF4Iiwic2NyZWVuIiwic2V0U2NyZWVuIiwidXNlckRhdGEiLCJzZXRVc2VyRGF0YSIsImxvZ2luc3RhdHVzIiwidXNlcklEIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVzZXIiLCJjcmVkZW50aWFscyIsImNhcnREYXRhIiwiY2hlY2tDYXJ0IiwiSlNPTiIsInN0cmluZ2lmeSIsImVyciIsInBhcnNlIiwibGVuZ3RoIiwicGFnZSIsIm9yZGVyRGV0YWlscyIsIml0ZW1zIiwiVXNlcklEIiwiaWQiLCJwYXltZW50Iiwib3JkZXIiLCJzaGlwcGluZyIsIm9kIiwiY2FydFZhbHVlIiwidGl0bGUiLCJtZXRhIiwiY29udGVudCIsInRheG9ub215Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/checkout.js\n");

/***/ })

});