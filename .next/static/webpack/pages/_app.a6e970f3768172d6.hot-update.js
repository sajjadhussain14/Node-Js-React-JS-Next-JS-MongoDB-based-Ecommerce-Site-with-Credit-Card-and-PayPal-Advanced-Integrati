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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _pages_account_LoginPopUp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/account/LoginPopUp */ \"./src/pages/account/LoginPopUp.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _DropCart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DropCart */ \"./src/components/header/DropCart.js\");\n/* harmony import */ var next_dist_server_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dist/server/router */ \"./node_modules/next/dist/server/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _assets_js_main__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/js/main */ \"./src/assets/js/main.js\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Middle = function(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), cart = ref[0], setCart = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), checkcart = ref1[0], setcheckCart = ref1[1];\n    var URL = \"http://localhost:3000\";\n    var cartValue = [];\n    if (true) {\n        cartValue = JSON.parse(localStorage.getItem(\"cart\"));\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        cartValue = JSON.parse(localStorage.getItem(\"cart\"));\n    }, [\n        JSON.stringify(cart)\n    ]);\n    var loginstatus = \"\";\n    if (true) {\n        loginstatus = localStorage.getItem(\"isLogin\");\n    }\n    if (!loginstatus) {\n        loginstatus = \"\";\n    }\n    var cartItems = 0;\n    try {\n        cartItems = cartValue;\n    } catch (err) {}\n    var cartLen = 0;\n    try {\n        cartLen = props.cartData.length;\n    } catch (err1) {}\n    if (true) {\n        (0,_assets_js_main__WEBPACK_IMPORTED_MODULE_8__.getHeaderScripts)((jquery__WEBPACK_IMPORTED_MODULE_4___default()));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages_account_LoginPopUp__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\modern\\\\src\\\\components\\\\header\\\\Middle.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                id: \"middle\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DropCart__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        cartItems: cartItems,\n                        cart: cart,\n                        setCart: setCart,\n                        checkcart: checkcart,\n                        setcheckCart: setcheckCart\n                    }, void 0, false, {\n                        fileName: \"D:\\\\modern\\\\src\\\\components\\\\header\\\\Middle.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"container\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"row\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-lg-3 col-md-3 col-sm-12 col-12 logo\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: URL,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    alt: \"\",\n                                                    height: \"110\",\n                                                    src: \"https://template1.cumulusbetasites.com/ccms/default/assets/Image/logo.png\",\n                                                    width: \"100\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\modern\\\\src\\\\components\\\\header\\\\Middle.js\",\n                                                    lineNumber: 64,\n                                                    columnNumber: 21\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\modern\\\\src\\\\components\\\\header\\\\Middle.js\",\n                                                lineNumber: 63,\n                                                columnNumber: 19\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\modern\\\\src\\\\components\\\\header\\\\Middle.js\",\n                                            lineNumber: 62,\n                                            columnNumber: 17\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\modern\\\\src\\\\components\\\\header\\\\Middle.js\",\n                                        lineNumber: 61,\n                                        columnNumber: 15\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\modern\\\\src\\\\components\\\\header\\\\Middle.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-lg-6 col-md-6 col-sm-12 col-12 search\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                        role: \"search\",\n                                        action: \"\",\n                                        method: \"post\",\n                                        name: \"myForm\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                name: \"Search\",\n                                                placeholder: \"Search \",\n                                                id: \"searchTxt\",\n                                                type: \"text\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\modern\\\\src\\\\components\\\\header\\\\Middle.js\",\n                                                lineNumber: 76,\n                                                columnNumber: 17\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                type: \"button\",\n                                                onClick: function() {\n                                                    searchIt();\n                                                },\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: URL + \"/images/header_search_icon.png\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\modern\\\\src\\\\components\\\\header\\\\Middle.js\",\n                                                    lineNumber: 88,\n                                                    columnNumber: 19\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\modern\\\\src\\\\components\\\\header\\\\Middle.js\",\n                                                lineNumber: 82,\n                                                columnNumber: 17\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\modern\\\\src\\\\components\\\\header\\\\Middle.js\",\n                                        lineNumber: 75,\n                                        columnNumber: 15\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\modern\\\\src\\\\components\\\\header\\\\Middle.js\",\n                                    lineNumber: 74,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-lg-3 col-md-3 col-sm-4 col-12 profile\",\n                                    children: [\n                                        loginstatus && loginstatus == \"yes\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"accountIcon\",\n                                            onClick: function() {\n                                                next_router__WEBPACK_IMPORTED_MODULE_7___default().push(\"/account\");\n                                            },\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                    className: \"fas fa-user\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\modern\\\\src\\\\components\\\\header\\\\Middle.js\",\n                                                    lineNumber: 100,\n                                                    columnNumber: 19\n                                                }, _this),\n                                                \"My Account\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\modern\\\\src\\\\components\\\\header\\\\Middle.js\",\n                                            lineNumber: 94,\n                                            columnNumber: 17\n                                        }, _this) : \"\",\n                                        !loginstatus || loginstatus != \"yes\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            type: \"button\",\n                                            \"data-toggle\": \"modal\",\n                                            \"data-target\": \"#loginModal\",\n                                            className: \"border-0 bg-transparent\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: URL + \"/images/icon-account.png\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\modern\\\\src\\\\components\\\\header\\\\Middle.js\",\n                                                    lineNumber: 114,\n                                                    columnNumber: 19\n                                                }, _this),\n                                                \"Sign in\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\modern\\\\src\\\\components\\\\header\\\\Middle.js\",\n                                            lineNumber: 108,\n                                            columnNumber: 17\n                                        }, _this) : \"\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"javascript:void(0)\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                id: \"header-cart\",\n                                                className: \"cartDisp\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                        src: URL + \"/images/icon-cart.png\"\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\modern\\\\src\\\\components\\\\header\\\\Middle.js\",\n                                                        lineNumber: 122,\n                                                        columnNumber: 19\n                                                    }, _this),\n                                                    \"cart\",\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        id: \"header-cartQTY\",\n                                                        children: cartLen\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\modern\\\\src\\\\components\\\\header\\\\Middle.js\",\n                                                        lineNumber: 124,\n                                                        columnNumber: 19\n                                                    }, _this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"D:\\\\modern\\\\src\\\\components\\\\header\\\\Middle.js\",\n                                                lineNumber: 121,\n                                                columnNumber: 17\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\modern\\\\src\\\\components\\\\header\\\\Middle.js\",\n                                            lineNumber: 120,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\modern\\\\src\\\\components\\\\header\\\\Middle.js\",\n                                    lineNumber: 92,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\modern\\\\src\\\\components\\\\header\\\\Middle.js\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\modern\\\\src\\\\components\\\\header\\\\Middle.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\modern\\\\src\\\\components\\\\header\\\\Middle.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(Middle, \"q6SQlJ/iF1m3MjZnOaQqY4kTJYI=\");\n_c = Middle;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Middle);\nvar searchIt = function() {\n    var searchValue = document.getElementById(\"searchTxt\").value;\n    if (!searchValue || searchValue == \"\") {\n        alert(\"Please write something to search\");\n    } else {\n        next_router__WEBPACK_IMPORTED_MODULE_7___default().push(\"/browse/search/\" + searchValue);\n    }\n};\nvar _c;\n$RefreshReg$(_c, \"Middle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7eURBQUk7Z0RBQUEsU0FFaEQ7Ozs7OztpREFBUyxHQUVULEVBQUU7c0RBRUosOERBQUNiLGtEQUFJOzRDQUFDZ0MsSUFBSSxFQUFDLG9CQUFvQjtzREFDN0IsNEVBQUNDLEdBQUM7Z0RBQUNKLEVBQUUsRUFBQyxhQUFhO2dEQUFDRSxTQUFTLEVBQUMsVUFBVTs7a0VBQ3RDLDhEQUFDSSxLQUFHO3dEQUFDRyxHQUFHLEVBQUV6QixHQUFHLEdBQUcsdUJBQXVCOzs7Ozs2REFBSTtvREFBQSxNQUUzQztrRUFBQSw4REFBQ3NDLE1BQUk7d0RBQUN0QixFQUFFLEVBQUMsZ0JBQWdCO2tFQUFFSixPQUFPOzs7Ozs2REFBUTs7Ozs7O3FEQUN4Qzs7Ozs7aURBQ0M7Ozs7Ozt5Q0FDSDs7Ozs7O2lDQUNGOzs7Ozs2QkFDRjs7Ozs7O3FCQUNFOztvQkFDVCxDQUNIO0NBQ0g7R0E1SEtsQixNQUFNO0FBQU5BLEtBQUFBLE1BQU07QUE4SFosK0RBQWVBLE1BQU0sRUFBQztBQUV0QixJQUFNMkMsUUFBUSxHQUFHLFdBQU07SUFDckIsSUFBSU0sV0FBVyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQ0MsS0FBSztJQUM1RCxJQUFJLENBQUNILFdBQVcsSUFBSUEsV0FBVyxJQUFJLEVBQUUsRUFBRTtRQUNyQ0ksS0FBSyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7S0FDM0MsTUFBTTtRQUNMdkQsdURBQVcsQ0FBQyxpQkFBaUIsR0FBR21ELFdBQVcsQ0FBQyxDQUFDO0tBQzlDO0NBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL01pZGRsZS5qcz85M2JjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IExvZ2luUG9wVXAgZnJvbSBcIi4uLy4uL3BhZ2VzL2FjY291bnQvTG9naW5Qb3BVcFwiO1xyXG5pbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XHJcbmltcG9ydCBEcm9wQ2FydCBmcm9tIFwiLi9Ecm9wQ2FydFwiO1xyXG5pbXBvcnQgeyByb3V0ZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlclwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBnZXRIZWFkZXJTY3JpcHRzIH0gZnJvbSBcIi4uLy4uL2Fzc2V0cy9qcy9tYWluXCI7XHJcbmNvbnN0IE1pZGRsZSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtjYXJ0LCBzZXRDYXJ0XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbY2hlY2tjYXJ0LCBzZXRjaGVja0NhcnRdID0gdXNlU3RhdGUoW10pO1xyXG4gIGxldCB7IFVSTCB9ID0gcHJvY2Vzcy5lbnY7XHJcblxyXG4gIGxldCBjYXJ0VmFsdWUgPSBbXTtcclxuICBpZiAodHlwZW9mIHdpbmRvdyAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBjYXJ0VmFsdWUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2FydFwiKSk7XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY2FydFZhbHVlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhcnRcIikpO1xyXG4gIH0sIFtKU09OLnN0cmluZ2lmeShjYXJ0KV0pO1xyXG5cclxuICBsZXQgbG9naW5zdGF0dXMgPSBcIlwiO1xyXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGxvZ2luc3RhdHVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpc0xvZ2luXCIpO1xyXG4gIH1cclxuICBpZiAoIWxvZ2luc3RhdHVzKSB7XHJcbiAgICBsb2dpbnN0YXR1cyA9IFwiXCI7XHJcbiAgfVxyXG5cclxuICBsZXQgY2FydEl0ZW1zID0gMDtcclxuICB0cnkge1xyXG4gICAgY2FydEl0ZW1zID0gY2FydFZhbHVlO1xyXG4gIH0gY2F0Y2ggKGVycikge31cclxuXHJcbiAgbGV0IGNhcnRMZW4gPSAwO1xyXG5cclxuICB0cnkge1xyXG4gICAgY2FydExlbiA9IHByb3BzLmNhcnREYXRhLmxlbmd0aDtcclxuICB9IGNhdGNoIChlcnIpIHt9XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgZ2V0SGVhZGVyU2NyaXB0cygkKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TG9naW5Qb3BVcCAvPlxyXG5cclxuICAgICAgPHNlY3Rpb24gaWQ9XCJtaWRkbGVcIj5cclxuICAgICAgICA8RHJvcENhcnRcclxuICAgICAgICAgIGNhcnRJdGVtcz17Y2FydEl0ZW1zfVxyXG4gICAgICAgICAgY2FydD17Y2FydH1cclxuICAgICAgICAgIHNldENhcnQ9e3NldENhcnR9XHJcbiAgICAgICAgICBjaGVja2NhcnQ9e2NoZWNrY2FydH1cclxuICAgICAgICAgIHNldGNoZWNrQ2FydD17c2V0Y2hlY2tDYXJ0fVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zIGNvbC1tZC0zIGNvbC1zbS0xMiBjb2wtMTIgbG9nb1wiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1VSTH0+XHJcbiAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjExMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3RlbXBsYXRlMS5jdW11bHVzYmV0YXNpdGVzLmNvbS9jY21zL2RlZmF1bHQvYXNzZXRzL0ltYWdlL2xvZ28ucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtbWQtNiBjb2wtc20tMTIgY29sLTEyIHNlYXJjaFwiPlxyXG4gICAgICAgICAgICAgIDxmb3JtIHJvbGU9XCJzZWFyY2hcIiBhY3Rpb249XCJcIiBtZXRob2Q9XCJwb3N0XCIgbmFtZT1cIm15Rm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJTZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBcIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cInNlYXJjaFR4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoSXQoKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e1VSTCArIFwiL2ltYWdlcy9oZWFkZXJfc2VhcmNoX2ljb24ucG5nXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zIGNvbC1tZC0zIGNvbC1zbS00IGNvbC0xMiBwcm9maWxlXCI+XHJcbiAgICAgICAgICAgICAge2xvZ2luc3RhdHVzICYmIGxvZ2luc3RhdHVzID09IFwieWVzXCIgPyAoXHJcbiAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhY2NvdW50SWNvblwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9hY2NvdW50XCIpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdXNlclwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgTXkgQWNjb3VudFxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgeyFsb2dpbnN0YXR1cyB8fCBsb2dpbnN0YXR1cyAhPSBcInllc1wiID8gKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI2xvZ2luTW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItMCBiZy10cmFuc3BhcmVudFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtVUkwgKyBcIi9pbWFnZXMvaWNvbi1hY2NvdW50LnBuZ1wifSAvPlxyXG4gICAgICAgICAgICAgICAgICBTaWduIGluXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaWQ9XCJoZWFkZXItY2FydFwiIGNsYXNzTmFtZT1cImNhcnREaXNwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtVUkwgKyBcIi9pbWFnZXMvaWNvbi1jYXJ0LnBuZ1wifSAvPlxyXG4gICAgICAgICAgICAgICAgICBjYXJ0XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwiaGVhZGVyLWNhcnRRVFlcIj57Y2FydExlbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWlkZGxlO1xyXG5cclxuY29uc3Qgc2VhcmNoSXQgPSAoKSA9PiB7XHJcbiAgbGV0IHNlYXJjaFZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hUeHRcIikudmFsdWU7XHJcbiAgaWYgKCFzZWFyY2hWYWx1ZSB8fCBzZWFyY2hWYWx1ZSA9PSBcIlwiKSB7XHJcbiAgICBhbGVydChcIlBsZWFzZSB3cml0ZSBzb21ldGhpbmcgdG8gc2VhcmNoXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBSb3V0ZXIucHVzaChcIi9icm93c2Uvc2VhcmNoL1wiICsgc2VhcmNoVmFsdWUpO1xyXG4gIH1cclxufTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMaW5rIiwiTG9naW5Qb3BVcCIsIiQiLCJEcm9wQ2FydCIsInJvdXRlIiwiUm91dGVyIiwiZ2V0SGVhZGVyU2NyaXB0cyIsIk1pZGRsZSIsInByb3BzIiwiY2FydCIsInNldENhcnQiLCJjaGVja2NhcnQiLCJzZXRjaGVja0NhcnQiLCJVUkwiLCJwcm9jZXNzIiwiZW52IiwiY2FydFZhbHVlIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInN0cmluZ2lmeSIsImxvZ2luc3RhdHVzIiwiY2FydEl0ZW1zIiwiZXJyIiwiY2FydExlbiIsImNhcnREYXRhIiwibGVuZ3RoIiwic2VjdGlvbiIsImlkIiwiZGl2IiwiY2xhc3NOYW1lIiwiaHJlZiIsImEiLCJwIiwiaW1nIiwiYWx0IiwiaGVpZ2h0Iiwic3JjIiwid2lkdGgiLCJmb3JtIiwicm9sZSIsImFjdGlvbiIsIm1ldGhvZCIsIm5hbWUiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwidHlwZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzZWFyY2hJdCIsInNwYW4iLCJwdXNoIiwiaSIsImRhdGEtdG9nZ2xlIiwiZGF0YS10YXJnZXQiLCJzZWFyY2hWYWx1ZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsImFsZXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/header/Middle.js\n");

/***/ })

});