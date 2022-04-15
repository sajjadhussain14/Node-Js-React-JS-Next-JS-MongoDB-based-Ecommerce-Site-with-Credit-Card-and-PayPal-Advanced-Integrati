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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var D_modern_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_modern_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_modern_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_checkout_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/checkout/Layout */ \"./src/components/checkout/Layout.js\");\n/* harmony import */ var _assets_js_main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/js/main */ \"./src/assets/js/main.js\");\n/* harmony import */ var _controllers_account__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../controllers/account */ \"./src/controllers/account.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_cart_EmptyCart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/cart/EmptyCart */ \"./src/components/cart/EmptyCart.js\");\n/* harmony import */ var _controllers_order__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../controllers/order */ \"./src/controllers/order.js\");\n/* harmony import */ var _components_header_Header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/header/Header */ \"./src/components/header/Header.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Checkout = function(props) {\n    _s();\n    var URL = \"http://localhost:3000\";\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), cart = ref[0], setCart = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), loading = ref1[0], setLoading = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"USD\"), currency = ref2[0], setCurrency = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"0.00\"), grandTotal = ref3[0], setGrandTotal = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"paypal\"), paymentMethod = ref4[0], setPaymentMethod = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        name: \"\",\n        amount: 0\n    }), shippingMethod = ref5[0], setShippingMethod = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), tax = ref6[0], setTax = ref6[1];\n    var ref7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), screen = ref7[0], setScreen = ref7[1];\n    var ref8 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), userData = ref8[0], setUserData = ref8[1];\n    var loginstatus = \"\";\n    var userID = 0;\n    if (true) {\n        loginstatus = localStorage.getItem(\"isLogin\");\n        userID = localStorage.getItem(\"currentAliveUser\");\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(_asyncToGenerator(D_modern_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var user;\n        return D_modern_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return (0,_controllers_account__WEBPACK_IMPORTED_MODULE_6__.getCurrentUserData)(\"\");\n                case 2:\n                    user = _ctx.sent;\n                    delete user.credentials;\n                    setUserData(user);\n                case 5:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    })), []);\n    var cartData = [];\n    var checkCart = \"\";\n    try {\n        checkCart = JSON.stringify(cartData);\n    } catch (err) {}\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        cartData = JSON.parse(localStorage.getItem(\"cart\"));\n        setLoading(false);\n    }, [\n        checkCart\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        setCart(cartData);\n    }, [\n        checkCart\n    ]);\n    // START LOAD JQUERY JAVASCRIPT ADDITIONAL CODE\n    if (true) {\n        (0,_assets_js_main__WEBPACK_IMPORTED_MODULE_5__.getCheckoutScripts)((jquery__WEBPACK_IMPORTED_MODULE_3___default()));\n    }\n    var cartValue = [];\n    if (true) {\n        cartValue = JSON.parse(localStorage.getItem(\"cart\"));\n    }\n    // END LOAD JQUERY JAVASCRIPT ADDITIONAL CODE\n    if (loading == false && cart && cart.length < 1) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_header_Header__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                    taxonomy: props.taxonomy,\n                    cartData: cartValue\n                }, void 0, false, {\n                    fileName: \"D:\\\\modern\\\\src\\\\pages\\\\checkout.js\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_cart_EmptyCart__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                    page: \"checkout\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\modern\\\\src\\\\pages\\\\checkout.js\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, _this),\n                \" \"\n            ]\n        }, void 0, true);\n    }\n    var orderDetails = (0,_controllers_order__WEBPACK_IMPORTED_MODULE_10__.initOrderDetails)();\n    orderDetails.items = cart;\n    orderDetails.UserID = userData.id;\n    orderDetails.user = userData;\n    orderDetails.payment.paymentMethod = paymentMethod;\n    orderDetails.payment.currency = currency;\n    orderDetails.order.shipping.name = shippingMethod.name;\n    orderDetails.order.shipping.amount = shippingMethod.amount;\n    (0,_controllers_order__WEBPACK_IMPORTED_MODULE_10__.setOrderDetails)(\"orderDetails\", orderDetails);\n    var od = (0,_controllers_order__WEBPACK_IMPORTED_MODULE_10__.getOrderDetails)(\"orderDetails\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_7___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"CheckOut Page | Optimized and SEO Friendly Demo Site\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\modern\\\\src\\\\pages\\\\checkout.js\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"title\",\n                        content: \"CheckOut Page | Optimized and SEO Friendly Demo Site\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\modern\\\\src\\\\pages\\\\checkout.js\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Checkout Page of Optimized and SEO Friendly Ecommerce site that will boost your sales and conversions\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\modern\\\\src\\\\pages\\\\checkout.js\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"keywords\",\n                        content: \"ecommerce, modern, SEO friendly, cumulus\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\modern\\\\src\\\\pages\\\\checkout.js\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\modern\\\\src\\\\pages\\\\checkout.js\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_header_Header__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                taxonomy: props.taxonomy,\n                cartData: cartValue\n            }, void 0, false, {\n                fileName: \"D:\\\\modern\\\\src\\\\pages\\\\checkout.js\",\n                lineNumber: 108,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_checkout_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                userData: userData,\n                setUserData: setUserData,\n                cart: cart,\n                setCart: setCart,\n                shippingMethod: shippingMethod,\n                setShippingMethod: setShippingMethod,\n                tax: tax,\n                setTax: setTax,\n                screen: screen,\n                setScreen: setScreen,\n                currency: currency,\n                setCurrency: setCurrency,\n                grandTotal: grandTotal,\n                setGrandTotal: setGrandTotal,\n                paymentMethod: paymentMethod,\n                setPaymentMethod: setPaymentMethod\n            }, void 0, false, {\n                fileName: \"D:\\\\modern\\\\src\\\\pages\\\\checkout.js\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(Checkout, \"IZ7Iv9i7s6HU7n3abolyXjkB9Ak=\");\n_c = Checkout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Checkout);\nvar _c;\n$RefreshReg$(_c, \"Checkout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y0FBYyxFQUFFQSxjQUFjO2dCQUM5QkMsaUJBQWlCLEVBQUVBLGlCQUFpQjtnQkFDcENDLEdBQUcsRUFBRUEsR0FBRztnQkFDUkMsTUFBTSxFQUFFQSxNQUFNO2dCQUNkQyxNQUFNLEVBQUVBLE1BQU07Z0JBQ2RDLFNBQVMsRUFBRUEsU0FBUztnQkFDcEJiLFFBQVEsRUFBRUEsUUFBUTtnQkFDbEJDLFdBQVcsRUFBRUEsV0FBVztnQkFDeEJDLFVBQVUsRUFBRUEsVUFBVTtnQkFDdEJDLGFBQWEsRUFBRUEsYUFBYTtnQkFDNUJDLGFBQWEsRUFBRUEsYUFBYTtnQkFDNUJDLGdCQUFnQixFQUFFQSxnQkFBZ0I7Ozs7O3FCQUNsQzs7b0JBQ0QsQ0FDSDtDQUNIO0dBakhLZCxRQUFRO0FBQVJBLEtBQUFBLFFBQVE7QUFtSGQsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvY2hlY2tvdXQuanM/ZDQzNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY2hlY2tvdXQvTGF5b3V0XCI7XHJcbmltcG9ydCB7IGdldENoZWNrb3V0U2NyaXB0cyB9IGZyb20gXCIuLi9hc3NldHMvanMvbWFpblwiO1xyXG5pbXBvcnQgeyBnZXRDdXJyZW50VXNlckRhdGEgfSBmcm9tIFwiLi4vY29udHJvbGxlcnMvYWNjb3VudFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBFbXB0eUNhcnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY2FydC9FbXB0eUNhcnRcIjtcclxuaW1wb3J0IHtcclxuICBnZXRPcmRlckRldGFpbHMsXHJcbiAgaW5pdE9yZGVyRGV0YWlscyxcclxuICBzZXRPcmRlckRldGFpbHMsXHJcbn0gZnJvbSBcIi4uL2NvbnRyb2xsZXJzL29yZGVyXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlclwiO1xyXG5cclxuY29uc3QgQ2hlY2tvdXQgPSAocHJvcHMpID0+IHtcclxuICBsZXQgeyBVUkwgfSA9IHByb2Nlc3MuZW52O1xyXG4gIGNvbnN0IFtjYXJ0LCBzZXRDYXJ0XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbY3VycmVuY3ksIHNldEN1cnJlbmN5XSA9IHVzZVN0YXRlKFwiVVNEXCIpO1xyXG4gIGNvbnN0IFtncmFuZFRvdGFsLCBzZXRHcmFuZFRvdGFsXSA9IHVzZVN0YXRlKFwiMC4wMFwiKTtcclxuICBjb25zdCBbcGF5bWVudE1ldGhvZCwgc2V0UGF5bWVudE1ldGhvZF0gPSB1c2VTdGF0ZShcInBheXBhbFwiKTtcclxuXHJcbiAgY29uc3QgW3NoaXBwaW5nTWV0aG9kLCBzZXRTaGlwcGluZ01ldGhvZF0gPSB1c2VTdGF0ZSh7IG5hbWU6IFwiXCIsIGFtb3VudDogMCB9KTtcclxuICBjb25zdCBbdGF4LCBzZXRUYXhdID0gdXNlU3RhdGUoMC4wKTtcclxuICBjb25zdCBbc2NyZWVuLCBzZXRTY3JlZW5dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3VzZXJEYXRhLCBzZXRVc2VyRGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgbGV0IGxvZ2luc3RhdHVzID0gXCJcIjtcclxuICBsZXQgdXNlcklEID0gMDtcclxuICBpZiAodHlwZW9mIHdpbmRvdyAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBsb2dpbnN0YXR1cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaXNMb2dpblwiKTtcclxuICAgIHVzZXJJRCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudEFsaXZlVXNlclwiKTtcclxuICB9XHJcbiAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgIGxldCB1c2VyID0gYXdhaXQgZ2V0Q3VycmVudFVzZXJEYXRhKFwiXCIpO1xyXG4gICAgZGVsZXRlIHVzZXIuY3JlZGVudGlhbHM7XHJcbiAgICBzZXRVc2VyRGF0YSh1c2VyKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGxldCBjYXJ0RGF0YSA9IFtdO1xyXG5cclxuICBsZXQgY2hlY2tDYXJ0ID0gXCJcIjtcclxuICB0cnkge1xyXG4gICAgY2hlY2tDYXJ0ID0gSlNPTi5zdHJpbmdpZnkoY2FydERhdGEpO1xyXG4gIH0gY2F0Y2ggKGVycikge31cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNhcnREYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhcnRcIikpO1xyXG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgfSwgW2NoZWNrQ2FydF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0Q2FydChjYXJ0RGF0YSk7XHJcbiAgfSwgW2NoZWNrQ2FydF0pO1xyXG5cclxuICAvLyBTVEFSVCBMT0FEIEpRVUVSWSBKQVZBU0NSSVBUIEFERElUSU9OQUwgQ09ERVxyXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGdldENoZWNrb3V0U2NyaXB0cygkKTtcclxuICB9XHJcblxyXG4gIGxldCBjYXJ0VmFsdWUgPSBbXTtcclxuICBpZiAodHlwZW9mIHdpbmRvdyAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBjYXJ0VmFsdWUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2FydFwiKSk7XHJcbiAgfVxyXG5cclxuICAvLyBFTkQgTE9BRCBKUVVFUlkgSkFWQVNDUklQVCBBRERJVElPTkFMIENPREVcclxuICBpZiAobG9hZGluZyA9PSBmYWxzZSAmJiBjYXJ0ICYmIGNhcnQubGVuZ3RoIDwgMSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8SGVhZGVyIHRheG9ub215PXtwcm9wcy50YXhvbm9teX0gY2FydERhdGE9e2NhcnRWYWx1ZX0gLz5cclxuICAgICAgICA8RW1wdHlDYXJ0IHBhZ2U9XCJjaGVja291dFwiIC8+e1wiIFwifVxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBsZXQgb3JkZXJEZXRhaWxzID0gaW5pdE9yZGVyRGV0YWlscygpO1xyXG4gIG9yZGVyRGV0YWlscy5pdGVtcyA9IGNhcnQ7XHJcbiAgb3JkZXJEZXRhaWxzLlVzZXJJRCA9IHVzZXJEYXRhLmlkO1xyXG4gIG9yZGVyRGV0YWlscy51c2VyID0gdXNlckRhdGE7XHJcblxyXG4gIG9yZGVyRGV0YWlscy5wYXltZW50LnBheW1lbnRNZXRob2QgPSBwYXltZW50TWV0aG9kO1xyXG4gIG9yZGVyRGV0YWlscy5wYXltZW50LmN1cnJlbmN5ID0gY3VycmVuY3k7XHJcblxyXG4gIG9yZGVyRGV0YWlscy5vcmRlci5zaGlwcGluZy5uYW1lID0gc2hpcHBpbmdNZXRob2QubmFtZTtcclxuICBvcmRlckRldGFpbHMub3JkZXIuc2hpcHBpbmcuYW1vdW50ID0gc2hpcHBpbmdNZXRob2QuYW1vdW50O1xyXG5cclxuICBzZXRPcmRlckRldGFpbHMoXCJvcmRlckRldGFpbHNcIiwgb3JkZXJEZXRhaWxzKTtcclxuXHJcbiAgbGV0IG9kID0gZ2V0T3JkZXJEZXRhaWxzKFwib3JkZXJEZXRhaWxzXCIpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkNoZWNrT3V0IFBhZ2UgfCBPcHRpbWl6ZWQgYW5kIFNFTyBGcmllbmRseSBEZW1vIFNpdGU8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBuYW1lPVwidGl0bGVcIlxyXG4gICAgICAgICAgY29udGVudD1cIkNoZWNrT3V0IFBhZ2UgfCBPcHRpbWl6ZWQgYW5kIFNFTyBGcmllbmRseSBEZW1vIFNpdGVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICBjb250ZW50PVwiQ2hlY2tvdXQgUGFnZSBvZiBPcHRpbWl6ZWQgYW5kIFNFTyBGcmllbmRseSBFY29tbWVyY2Ugc2l0ZSB0aGF0IHdpbGwgYm9vc3QgeW91ciBzYWxlcyBhbmQgY29udmVyc2lvbnNcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIG5hbWU9XCJrZXl3b3Jkc1wiXHJcbiAgICAgICAgICBjb250ZW50PVwiZWNvbW1lcmNlLCBtb2Rlcm4sIFNFTyBmcmllbmRseSwgY3VtdWx1c1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8SGVhZGVyIHRheG9ub215PXtwcm9wcy50YXhvbm9teX0gY2FydERhdGE9e2NhcnRWYWx1ZX0gLz5cclxuICAgICAgPExheW91dFxyXG4gICAgICAgIHVzZXJEYXRhPXt1c2VyRGF0YX1cclxuICAgICAgICBzZXRVc2VyRGF0YT17c2V0VXNlckRhdGF9XHJcbiAgICAgICAgY2FydD17Y2FydH1cclxuICAgICAgICBzZXRDYXJ0PXtzZXRDYXJ0fVxyXG4gICAgICAgIHNoaXBwaW5nTWV0aG9kPXtzaGlwcGluZ01ldGhvZH1cclxuICAgICAgICBzZXRTaGlwcGluZ01ldGhvZD17c2V0U2hpcHBpbmdNZXRob2R9XHJcbiAgICAgICAgdGF4PXt0YXh9XHJcbiAgICAgICAgc2V0VGF4PXtzZXRUYXh9XHJcbiAgICAgICAgc2NyZWVuPXtzY3JlZW59XHJcbiAgICAgICAgc2V0U2NyZWVuPXtzZXRTY3JlZW59XHJcbiAgICAgICAgY3VycmVuY3k9e2N1cnJlbmN5fVxyXG4gICAgICAgIHNldEN1cnJlbmN5PXtzZXRDdXJyZW5jeX1cclxuICAgICAgICBncmFuZFRvdGFsPXtncmFuZFRvdGFsfVxyXG4gICAgICAgIHNldEdyYW5kVG90YWw9e3NldEdyYW5kVG90YWx9XHJcbiAgICAgICAgcGF5bWVudE1ldGhvZD17cGF5bWVudE1ldGhvZH1cclxuICAgICAgICBzZXRQYXltZW50TWV0aG9kPXtzZXRQYXltZW50TWV0aG9kfVxyXG4gICAgICAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoZWNrb3V0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIiQiLCJMYXlvdXQiLCJnZXRDaGVja291dFNjcmlwdHMiLCJnZXRDdXJyZW50VXNlckRhdGEiLCJIZWFkIiwiUm91dGVyIiwiRW1wdHlDYXJ0IiwiZ2V0T3JkZXJEZXRhaWxzIiwiaW5pdE9yZGVyRGV0YWlscyIsInNldE9yZGVyRGV0YWlscyIsIkhlYWRlciIsIkNoZWNrb3V0IiwicHJvcHMiLCJVUkwiLCJwcm9jZXNzIiwiZW52IiwiY2FydCIsInNldENhcnQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImN1cnJlbmN5Iiwic2V0Q3VycmVuY3kiLCJncmFuZFRvdGFsIiwic2V0R3JhbmRUb3RhbCIsInBheW1lbnRNZXRob2QiLCJzZXRQYXltZW50TWV0aG9kIiwibmFtZSIsImFtb3VudCIsInNoaXBwaW5nTWV0aG9kIiwic2V0U2hpcHBpbmdNZXRob2QiLCJ0YXgiLCJzZXRUYXgiLCJzY3JlZW4iLCJzZXRTY3JlZW4iLCJ1c2VyRGF0YSIsInNldFVzZXJEYXRhIiwibG9naW5zdGF0dXMiLCJ1c2VySUQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidXNlciIsImNyZWRlbnRpYWxzIiwiY2FydERhdGEiLCJjaGVja0NhcnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZXJyIiwicGFyc2UiLCJjYXJ0VmFsdWUiLCJsZW5ndGgiLCJ0YXhvbm9teSIsInBhZ2UiLCJvcmRlckRldGFpbHMiLCJpdGVtcyIsIlVzZXJJRCIsImlkIiwicGF5bWVudCIsIm9yZGVyIiwic2hpcHBpbmciLCJvZCIsInRpdGxlIiwibWV0YSIsImNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/checkout.js\n");

/***/ })

});