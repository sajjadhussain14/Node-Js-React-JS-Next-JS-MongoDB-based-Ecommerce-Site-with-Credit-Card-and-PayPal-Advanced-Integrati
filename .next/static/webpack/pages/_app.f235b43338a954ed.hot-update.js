"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/header/Middle.js":
/*!*****************************************!*\
  !*** ./src/components/header/Middle.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _pages_account_LoginPopUp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/account/LoginPopUp */ \"./src/pages/account/LoginPopUp.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _DropCart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DropCart */ \"./src/components/header/DropCart.js\");\n/* harmony import */ var next_dist_server_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dist/server/router */ \"./node_modules/next/dist/server/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _assets_js_main__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/js/main */ \"./src/assets/js/main.js\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Middle = function(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), cart = ref[0], setCart = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), checkcart = ref1[0], setcheckCart = ref1[1];\n    var URL = \"http://localhost:3000\";\n    var cartValue = [];\n    if (true) {\n        cartValue = JSON.parse(localStorage.getItem(\"cart\"));\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        cartValue = JSON.parse(localStorage.getItem(\"cart\"));\n    }, [\n        JSON.stringify(cart)\n    ]);\n    var loginstatus = \"\";\n    if (true) {\n        loginstatus = localStorage.getItem(\"isLogin\");\n    }\n    if (!loginstatus) {\n        loginstatus = \"\";\n    }\n    var cartItems = 0;\n    try {\n        cartItems = cartValue;\n    } catch (err) {}\n    var cartLen = 0;\n    try {\n        cartLen = props.cartData.length;\n    } catch (err1) {}\n    if (true) {\n        (0,_assets_js_main__WEBPACK_IMPORTED_MODULE_8__.getHeaderScripts)((jquery__WEBPACK_IMPORTED_MODULE_4___default()));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages_account_LoginPopUp__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\modern\\\\src\\\\components\\\\header\\\\Middle.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                id: \"middle\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DropCart__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        cartItems: cartItems,\n                        cart: cart,\n                        setCart: setCart,\n                        checkcart: checkcart,\n                        setcheckCart: setcheckCart\n                    }, void 0, false, {\n                        fileName: \"D:\\\\modern\\\\src\\\\components\\\\header\\\\Middle.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"container\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"row\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-lg-3 col-md-3 col-sm-12 col-12 logo\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: URL,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    alt: \"\",\n                                                    height: \"110\",\n                                                    src: \"https://template1.cumulusbetasites.com/ccms/default/assets/Image/logo.png\",\n                                                    width: \"100\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\modern\\\\src\\\\components\\\\header\\\\Middle.js\",\n                                                    lineNumber: 64,\n                                                    columnNumber: 21\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\modern\\\\src\\\\components\\\\header\\\\Middle.js\",\n                                                lineNumber: 63,\n                                                columnNumber: 19\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\modern\\\\src\\\\components\\\\header\\\\Middle.js\",\n                                            lineNumber: 62,\n                                            columnNumber: 17\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\modern\\\\src\\\\components\\\\header\\\\Middle.js\",\n                                        lineNumber: 61,\n                                        columnNumber: 15\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\modern\\\\src\\\\components\\\\header\\\\Middle.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-lg-6 col-md-6 col-sm-12 col-12 search\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                        role: \"search\",\n                                        action: \"\",\n                                        method: \"post\",\n                                        name: \"myForm\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                name: \"Search\",\n                                                placeholder: \"Search \",\n                                                type: \"text\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\modern\\\\src\\\\components\\\\header\\\\Middle.js\",\n                                                lineNumber: 76,\n                                                columnNumber: 17\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                type: \"submit\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: URL + \"/images/header_search_icon.png\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\modern\\\\src\\\\components\\\\header\\\\Middle.js\",\n                                                    lineNumber: 78,\n                                                    columnNumber: 19\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\modern\\\\src\\\\components\\\\header\\\\Middle.js\",\n                                                lineNumber: 77,\n                                                columnNumber: 17\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\modern\\\\src\\\\components\\\\header\\\\Middle.js\",\n                                        lineNumber: 75,\n                                        columnNumber: 15\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\modern\\\\src\\\\components\\\\header\\\\Middle.js\",\n                                    lineNumber: 74,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-lg-3 col-md-3 col-sm-4 col-12 profile\",\n                                    children: [\n                                        loginstatus && loginstatus == \"yes\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"accountIcon\",\n                                            onClick: function() {\n                                                next_router__WEBPACK_IMPORTED_MODULE_7___default().push(\"/account\");\n                                            },\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                    className: \"fas fa-user\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\modern\\\\src\\\\components\\\\header\\\\Middle.js\",\n                                                    lineNumber: 90,\n                                                    columnNumber: 19\n                                                }, _this),\n                                                \"My Account\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\modern\\\\src\\\\components\\\\header\\\\Middle.js\",\n                                            lineNumber: 84,\n                                            columnNumber: 17\n                                        }, _this) : \"\",\n                                        !loginstatus || loginstatus != \"yes\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            type: \"button\",\n                                            \"data-toggle\": \"modal\",\n                                            \"data-target\": \"#loginModal\",\n                                            className: \"border-0 bg-transparent\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: URL + \"/images/icon-account.png\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\modern\\\\src\\\\components\\\\header\\\\Middle.js\",\n                                                    lineNumber: 104,\n                                                    columnNumber: 19\n                                                }, _this),\n                                                \"Sign in\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\modern\\\\src\\\\components\\\\header\\\\Middle.js\",\n                                            lineNumber: 98,\n                                            columnNumber: 17\n                                        }, _this) : \"\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"javascript:void(0)\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                id: \"header-cart\",\n                                                className: \"cartDisp\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                        src: URL + \"/images/icon-cart.png\"\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\modern\\\\src\\\\components\\\\header\\\\Middle.js\",\n                                                        lineNumber: 112,\n                                                        columnNumber: 19\n                                                    }, _this),\n                                                    \"cart\",\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        id: \"header-cartQTY\",\n                                                        children: cartLen\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\modern\\\\src\\\\components\\\\header\\\\Middle.js\",\n                                                        lineNumber: 114,\n                                                        columnNumber: 19\n                                                    }, _this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"D:\\\\modern\\\\src\\\\components\\\\header\\\\Middle.js\",\n                                                lineNumber: 111,\n                                                columnNumber: 17\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\modern\\\\src\\\\components\\\\header\\\\Middle.js\",\n                                            lineNumber: 110,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\modern\\\\src\\\\components\\\\header\\\\Middle.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\modern\\\\src\\\\components\\\\header\\\\Middle.js\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\modern\\\\src\\\\components\\\\header\\\\Middle.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\modern\\\\src\\\\components\\\\header\\\\Middle.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(Middle, \"q6SQlJ/iF1m3MjZnOaQqY4kTJYI=\");\n_c = Middle;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Middle);\nvar _c;\n$RefreshReg$(_c, \"Middle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUMsb0JBQW9CO3NEQUM3Qiw0RUFBQ0MsR0FBQztnREFBQ0osRUFBRSxFQUFDLGFBQWE7Z0RBQUNFLFNBQVMsRUFBQyxVQUFVOztrRUFDdEMsOERBQUNJLEtBQUc7d0RBQUNHLEdBQUcsRUFBRXpCLEdBQUcsR0FBRyx1QkFBdUI7Ozs7OzZEQUFJO29EQUFBLE1BRTNDO2tFQUFBLDhEQUFDb0MsTUFBSTt3REFBQ3BCLEVBQUUsRUFBQyxnQkFBZ0I7a0VBQUVKLE9BQU87Ozs7OzZEQUFROzs7Ozs7cURBQ3hDOzs7OztpREFDQzs7Ozs7O3lDQUNIOzs7Ozs7aUNBQ0Y7Ozs7OzZCQUNGOzs7Ozs7cUJBQ0U7O29CQUNULENBQ0g7Q0FDSDtHQWxIS2xCLE1BQU07QUFBTkEsS0FBQUEsTUFBTTtBQW9IWiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9NaWRkbGUuanM/OTNiYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBMb2dpblBvcFVwIGZyb20gXCIuLi8uLi9wYWdlcy9hY2NvdW50L0xvZ2luUG9wVXBcIjtcclxuaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xyXG5pbXBvcnQgRHJvcENhcnQgZnJvbSBcIi4vRHJvcENhcnRcIjtcclxuaW1wb3J0IHsgcm91dGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZXJcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgZ2V0SGVhZGVyU2NyaXB0cyB9IGZyb20gXCIuLi8uLi9hc3NldHMvanMvbWFpblwiO1xyXG5jb25zdCBNaWRkbGUgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbY2FydCwgc2V0Q2FydF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2NoZWNrY2FydCwgc2V0Y2hlY2tDYXJ0XSA9IHVzZVN0YXRlKFtdKTtcclxuICBsZXQgeyBVUkwgfSA9IHByb2Nlc3MuZW52O1xyXG5cclxuICBsZXQgY2FydFZhbHVlID0gW107XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgY2FydFZhbHVlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhcnRcIikpO1xyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNhcnRWYWx1ZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjYXJ0XCIpKTtcclxuICB9LCBbSlNPTi5zdHJpbmdpZnkoY2FydCldKTtcclxuXHJcbiAgbGV0IGxvZ2luc3RhdHVzID0gXCJcIjtcclxuICBpZiAodHlwZW9mIHdpbmRvdyAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBsb2dpbnN0YXR1cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaXNMb2dpblwiKTtcclxuICB9XHJcbiAgaWYgKCFsb2dpbnN0YXR1cykge1xyXG4gICAgbG9naW5zdGF0dXMgPSBcIlwiO1xyXG4gIH1cclxuXHJcbiAgbGV0IGNhcnRJdGVtcyA9IDA7XHJcbiAgdHJ5IHtcclxuICAgIGNhcnRJdGVtcyA9IGNhcnRWYWx1ZTtcclxuICB9IGNhdGNoIChlcnIpIHt9XHJcblxyXG4gIGxldCBjYXJ0TGVuID0gMDtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNhcnRMZW4gPSBwcm9wcy5jYXJ0RGF0YS5sZW5ndGg7XHJcbiAgfSBjYXRjaCAoZXJyKSB7fVxyXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGdldEhlYWRlclNjcmlwdHMoJCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPExvZ2luUG9wVXAgLz5cclxuXHJcbiAgICAgIDxzZWN0aW9uIGlkPVwibWlkZGxlXCI+XHJcbiAgICAgICAgPERyb3BDYXJ0XHJcbiAgICAgICAgICBjYXJ0SXRlbXM9e2NhcnRJdGVtc31cclxuICAgICAgICAgIGNhcnQ9e2NhcnR9XHJcbiAgICAgICAgICBzZXRDYXJ0PXtzZXRDYXJ0fVxyXG4gICAgICAgICAgY2hlY2tjYXJ0PXtjaGVja2NhcnR9XHJcbiAgICAgICAgICBzZXRjaGVja0NhcnQ9e3NldGNoZWNrQ2FydH1cclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMyBjb2wtbWQtMyBjb2wtc20tMTIgY29sLTEyIGxvZ29cIj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPXtVUkx9PlxyXG4gICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly90ZW1wbGF0ZTEuY3VtdWx1c2JldGFzaXRlcy5jb20vY2Ntcy9kZWZhdWx0L2Fzc2V0cy9JbWFnZS9sb2dvLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLW1kLTYgY29sLXNtLTEyIGNvbC0xMiBzZWFyY2hcIj5cclxuICAgICAgICAgICAgICA8Zm9ybSByb2xlPVwic2VhcmNoXCIgYWN0aW9uPVwiXCIgbWV0aG9kPVwicG9zdFwiIG5hbWU9XCJteUZvcm1cIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiU2VhcmNoXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggXCIgdHlwZT1cInRleHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtVUkwgKyBcIi9pbWFnZXMvaGVhZGVyX3NlYXJjaF9pY29uLnBuZ1wifSAvPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMyBjb2wtbWQtMyBjb2wtc20tNCBjb2wtMTIgcHJvZmlsZVwiPlxyXG4gICAgICAgICAgICAgIHtsb2dpbnN0YXR1cyAmJiBsb2dpbnN0YXR1cyA9PSBcInllc1wiID8gKFxyXG4gICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWNjb3VudEljb25cIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvYWNjb3VudFwiKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXVzZXJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgIE15IEFjY291bnRcclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgIHshbG9naW5zdGF0dXMgfHwgbG9naW5zdGF0dXMgIT0gXCJ5ZXNcIiA/IChcclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNsb2dpbk1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLTAgYmctdHJhbnNwYXJlbnRcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17VVJMICsgXCIvaW1hZ2VzL2ljb24tYWNjb3VudC5wbmdcIn0gLz5cclxuICAgICAgICAgICAgICAgICAgU2lnbiBpblxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIj5cclxuICAgICAgICAgICAgICAgIDxhIGlkPVwiaGVhZGVyLWNhcnRcIiBjbGFzc05hbWU9XCJjYXJ0RGlzcFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17VVJMICsgXCIvaW1hZ2VzL2ljb24tY2FydC5wbmdcIn0gLz5cclxuICAgICAgICAgICAgICAgICAgY2FydFxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cImhlYWRlci1jYXJ0UVRZXCI+e2NhcnRMZW59PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1pZGRsZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMaW5rIiwiTG9naW5Qb3BVcCIsIiQiLCJEcm9wQ2FydCIsInJvdXRlIiwiUm91dGVyIiwiZ2V0SGVhZGVyU2NyaXB0cyIsIk1pZGRsZSIsInByb3BzIiwiY2FydCIsInNldENhcnQiLCJjaGVja2NhcnQiLCJzZXRjaGVja0NhcnQiLCJVUkwiLCJwcm9jZXNzIiwiZW52IiwiY2FydFZhbHVlIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInN0cmluZ2lmeSIsImxvZ2luc3RhdHVzIiwiY2FydEl0ZW1zIiwiZXJyIiwiY2FydExlbiIsImNhcnREYXRhIiwibGVuZ3RoIiwic2VjdGlvbiIsImlkIiwiZGl2IiwiY2xhc3NOYW1lIiwiaHJlZiIsImEiLCJwIiwiaW1nIiwiYWx0IiwiaGVpZ2h0Iiwic3JjIiwid2lkdGgiLCJmb3JtIiwicm9sZSIsImFjdGlvbiIsIm1ldGhvZCIsIm5hbWUiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwidHlwZSIsImJ1dHRvbiIsInNwYW4iLCJvbkNsaWNrIiwicHVzaCIsImkiLCJkYXRhLXRvZ2dsZSIsImRhdGEtdGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/header/Middle.js\n");

/***/ })

});