"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/account",{

/***/ "./src/pages/account/index.js":
/*!************************************!*\
  !*** ./src/pages/account/index.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var D_modern_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_modern_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_modern_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _controllers_wishlist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../controllers/wishlist */ \"./src/controllers/wishlist.js\");\n/* harmony import */ var _assets_js_main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/js/main */ \"./src/assets/js/main.js\");\n/* harmony import */ var _components_account_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/account/Layout */ \"./src/components/account/Layout.js\");\n/* harmony import */ var _components_header_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/header/Header */ \"./src/components/header/Header.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Account = function(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), userData = ref[0], setUserData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"home\"), currentTab = ref1[0], setCurrentTab = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), userLists = ref2[0], setUserLists = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), listName = ref3[0], setListName = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), wishListItems = ref4[0], setWishListItems = ref4[1];\n    var loginstatus = \"\";\n    var currentUserID = 0;\n    if (true) {\n        loginstatus = localStorage.getItem(\"isLogin\");\n        currentUserID = localStorage.getItem(\"currentAliveUser\");\n    }\n    if (true) {\n        (0,_assets_js_main__WEBPACK_IMPORTED_MODULE_6__.getAccountcripts)((jquery__WEBPACK_IMPORTED_MODULE_4___default()));\n    }\n    var userID = \"\";\n    if (true) {\n        userID = localStorage.getItem(\"currentAliveUser\");\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(_asyncToGenerator(D_modern_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var lists;\n        return D_modern_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return (0,_controllers_wishlist__WEBPACK_IMPORTED_MODULE_5__.getUserWishLists)(userID);\n                case 2:\n                    lists = _ctx.sent;\n                    setUserLists(lists);\n                case 4:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    })), []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var currentListItems = [];\n        currentListItems = userLists.filter(function(list) {\n            return list.userID === userID && list.name == listName;\n        });\n        setWishListItems(currentListItems);\n    }, [\n        listName,\n        userLists\n    ]);\n    var cartValue = [];\n    if (true) {\n        cartValue = JSON.parse(localStorage.getItem(\"cart\"));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"My Account | Optimized and SEO Friendly Demo Site\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\modern\\\\src\\\\pages\\\\account\\\\index.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"title\",\n                        content: \"My Account | Optimized and SEO Friendly Demo Site\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\modern\\\\src\\\\pages\\\\account\\\\index.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"My Account of Optimized and SEO Friendly Ecommerce site that will boost your sales and conversions\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\modern\\\\src\\\\pages\\\\account\\\\index.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"keywords\",\n                        content: \"ecommerce, modern, SEO friendly, cumulus\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\modern\\\\src\\\\pages\\\\account\\\\index.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\modern\\\\src\\\\pages\\\\account\\\\index.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_header_Header__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                taxonomy: props.taxonomy,\n                cartData: cartValue\n            }, void 0, false, {\n                fileName: \"D:\\\\modern\\\\src\\\\pages\\\\account\\\\index.js\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_account_Layout__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                userData: userData,\n                setUserData: setUserData,\n                currentTab: currentTab,\n                setCurrentTab: setCurrentTab,\n                userLists: userLists,\n                setUserLists: setUserLists,\n                listName: listName,\n                setListName: setListName,\n                wishListItems: wishListItems\n            }, void 0, false, {\n                fileName: \"D:\\\\modern\\\\src\\\\pages\\\\account\\\\index.js\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(Account, \"bn94ZIMRIXXtsc/C+68CfYRFPu0=\");\n_c = Account;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Account);\nvar _c;\n$RefreshReg$(_c, \"Account\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMzRDtrQ0FDRiw4REFBQ0QsTUFBSTt3QkFDSEwsSUFBSSxFQUFDLGFBQWE7d0JBQ2xCTSxPQUFPLEVBQUMsb0dBQW9HOzs7Ozs2QkFDNUc7a0NBQ0YsOERBQUNELE1BQUk7d0JBQ0hMLElBQUksRUFBQyxVQUFVO3dCQUNmTSxPQUFPLEVBQUMsMENBQTBDOzs7Ozs2QkFDbEQ7Ozs7OztxQkFDRzswQkFDUCw4REFBQzVCLGlFQUFNO2dCQUFDNkIsUUFBUSxFQUFFM0IsS0FBSyxDQUFDMkIsUUFBUTtnQkFBRUMsUUFBUSxFQUFFUCxTQUFTOzs7OztxQkFBSTswQkFDekQsOERBQUN4QixrRUFBTTtnQkFDTEksUUFBUSxFQUFFQSxRQUFRO2dCQUNsQkMsV0FBVyxFQUFFQSxXQUFXO2dCQUN4QkMsVUFBVSxFQUFFQSxVQUFVO2dCQUN0QkMsYUFBYSxFQUFFQSxhQUFhO2dCQUM1QkMsU0FBUyxFQUFFQSxTQUFTO2dCQUNwQkMsWUFBWSxFQUFFQSxZQUFZO2dCQUMxQkMsUUFBUSxFQUFFQSxRQUFRO2dCQUNsQkMsV0FBVyxFQUFFQSxXQUFXO2dCQUN4QkMsYUFBYSxFQUFFQSxhQUFhOzs7OztxQkFDNUI7O29CQUNELENBQ0g7Q0FDSDtHQTNFS1YsT0FBTztBQUFQQSxLQUFBQSxPQUFPO0FBNkViLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2FjY291bnQvaW5kZXguanM/NjQwZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuaW1wb3J0IHsgZ2V0VXNlcldpc2hMaXN0cyB9IGZyb20gXCIuLi8uLi9jb250cm9sbGVycy93aXNobGlzdFwiO1xyXG5pbXBvcnQgeyBnZXRBY2NvdW50Y3JpcHRzIH0gZnJvbSBcIi4uLy4uL2Fzc2V0cy9qcy9tYWluXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYWNjb3VudC9MYXlvdXRcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyXCI7XHJcblxyXG5jb25zdCBBY2NvdW50ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW3VzZXJEYXRhLCBzZXRVc2VyRGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2N1cnJlbnRUYWIsIHNldEN1cnJlbnRUYWJdID0gdXNlU3RhdGUoXCJob21lXCIpO1xyXG5cclxuICBjb25zdCBbdXNlckxpc3RzLCBzZXRVc2VyTGlzdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtsaXN0TmFtZSwgc2V0TGlzdE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IFt3aXNoTGlzdEl0ZW1zLCBzZXRXaXNoTGlzdEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgbGV0IGxvZ2luc3RhdHVzID0gXCJcIjtcclxuICBsZXQgY3VycmVudFVzZXJJRCA9IDA7XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgbG9naW5zdGF0dXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImlzTG9naW5cIik7XHJcbiAgICBjdXJyZW50VXNlcklEID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50QWxpdmVVc2VyXCIpO1xyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgZ2V0QWNjb3VudGNyaXB0cygkKTtcclxuICB9XHJcbiAgbGV0IHVzZXJJRCA9IFwiXCI7XHJcblxyXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIHVzZXJJRCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudEFsaXZlVXNlclwiKTtcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgICBsZXQgbGlzdHMgPSBhd2FpdCBnZXRVc2VyV2lzaExpc3RzKHVzZXJJRCk7XHJcbiAgICBzZXRVc2VyTGlzdHMobGlzdHMpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBjdXJyZW50TGlzdEl0ZW1zID0gW107XHJcbiAgICBjdXJyZW50TGlzdEl0ZW1zID0gdXNlckxpc3RzLmZpbHRlcihcclxuICAgICAgKGxpc3QpID0+IGxpc3QudXNlcklEID09PSB1c2VySUQgJiYgbGlzdC5uYW1lID09IGxpc3ROYW1lXHJcbiAgICApO1xyXG5cclxuICAgIHNldFdpc2hMaXN0SXRlbXMoY3VycmVudExpc3RJdGVtcyk7XHJcbiAgfSwgW2xpc3ROYW1lLCB1c2VyTGlzdHNdKTtcclxuXHJcbiAgbGV0IGNhcnRWYWx1ZSA9IFtdO1xyXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGNhcnRWYWx1ZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjYXJ0XCIpKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+TXkgQWNjb3VudCB8IE9wdGltaXplZCBhbmQgU0VPIEZyaWVuZGx5IERlbW8gU2l0ZTwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXHJcbiAgICAgICAgICBjb250ZW50PVwiTXkgQWNjb3VudCB8IE9wdGltaXplZCBhbmQgU0VPIEZyaWVuZGx5IERlbW8gU2l0ZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJNeSBBY2NvdW50IG9mIE9wdGltaXplZCBhbmQgU0VPIEZyaWVuZGx5IEVjb21tZXJjZSBzaXRlIHRoYXQgd2lsbCBib29zdCB5b3VyIHNhbGVzIGFuZCBjb252ZXJzaW9uc1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgbmFtZT1cImtleXdvcmRzXCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJlY29tbWVyY2UsIG1vZGVybiwgU0VPIGZyaWVuZGx5LCBjdW11bHVzXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxIZWFkZXIgdGF4b25vbXk9e3Byb3BzLnRheG9ub215fSBjYXJ0RGF0YT17Y2FydFZhbHVlfSAvPlxyXG4gICAgICA8TGF5b3V0XHJcbiAgICAgICAgdXNlckRhdGE9e3VzZXJEYXRhfVxyXG4gICAgICAgIHNldFVzZXJEYXRhPXtzZXRVc2VyRGF0YX1cclxuICAgICAgICBjdXJyZW50VGFiPXtjdXJyZW50VGFifVxyXG4gICAgICAgIHNldEN1cnJlbnRUYWI9e3NldEN1cnJlbnRUYWJ9XHJcbiAgICAgICAgdXNlckxpc3RzPXt1c2VyTGlzdHN9XHJcbiAgICAgICAgc2V0VXNlckxpc3RzPXtzZXRVc2VyTGlzdHN9XHJcbiAgICAgICAgbGlzdE5hbWU9e2xpc3ROYW1lfVxyXG4gICAgICAgIHNldExpc3ROYW1lPXtzZXRMaXN0TmFtZX1cclxuICAgICAgICB3aXNoTGlzdEl0ZW1zPXt3aXNoTGlzdEl0ZW1zfVxyXG4gICAgICAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFjY291bnQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSGVhZCIsIiQiLCJnZXRVc2VyV2lzaExpc3RzIiwiZ2V0QWNjb3VudGNyaXB0cyIsIkxheW91dCIsIkhlYWRlciIsIkFjY291bnQiLCJwcm9wcyIsInVzZXJEYXRhIiwic2V0VXNlckRhdGEiLCJjdXJyZW50VGFiIiwic2V0Q3VycmVudFRhYiIsInVzZXJMaXN0cyIsInNldFVzZXJMaXN0cyIsImxpc3ROYW1lIiwic2V0TGlzdE5hbWUiLCJ3aXNoTGlzdEl0ZW1zIiwic2V0V2lzaExpc3RJdGVtcyIsImxvZ2luc3RhdHVzIiwiY3VycmVudFVzZXJJRCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1c2VySUQiLCJsaXN0cyIsImN1cnJlbnRMaXN0SXRlbXMiLCJmaWx0ZXIiLCJsaXN0IiwibmFtZSIsImNhcnRWYWx1ZSIsIkpTT04iLCJwYXJzZSIsInRpdGxlIiwibWV0YSIsImNvbnRlbnQiLCJ0YXhvbm9teSIsImNhcnREYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/account/index.js\n");

/***/ })

});