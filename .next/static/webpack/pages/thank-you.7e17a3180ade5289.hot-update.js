"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/thank-you",{

/***/ "./src/controllers/order.js":
/*!**********************************!*\
  !*** ./src/controllers/order.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initOrderDetails\": function() { return /* binding */ initOrderDetails; },\n/* harmony export */   \"setOrderDetails\": function() { return /* binding */ setOrderDetails; },\n/* harmony export */   \"getOrderDetails\": function() { return /* binding */ getOrderDetails; },\n/* harmony export */   \"captureorder\": function() { return /* binding */ captureorder; }\n/* harmony export */ });\n/* harmony import */ var D_modern_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_modern_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_modern_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar initOrderDetails = function() {\n    var orderDetails = {\n        orderNumber: \"\",\n        items: [],\n        user: [],\n        payment: {\n            id: \"\",\n            paymentMethod: \"\",\n            currency: \"\",\n            payer_id: \"\",\n            status: \"\"\n        },\n        order: {\n            shipping: {\n                name: \"\",\n                amount: \"\"\n            },\n            total: 0,\n            tax: 0,\n            subTotal: 0\n        }\n    };\n    return orderDetails;\n};\nvar setOrderDetails = function(name, data) {\n    if (true) {\n        localStorage.setItem(name, JSON.stringify(data));\n    }\n};\nvar getOrderDetails = function(name) {\n    var data = {};\n    if (true) {\n        try {\n            data = JSON.parse(localStorage.getItem(name));\n        } catch (err) {\n            console.log(err);\n        }\n    }\n    if (!data) {\n        data = {};\n    }\n    return data;\n};\nvar captureorder = function() {\n    var _ref = _asyncToGenerator(D_modern_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var response, data;\n        return D_modern_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return fetch(\"http://localhost:3000\" + \"/api/payment/capture-order\", {\n                        method: \"POST\",\n                        body: JSON.stringify(token)\n                    });\n                case 2:\n                    response = _ctx.sent;\n                    _ctx.next = 5;\n                    return response.json();\n                case 5:\n                    data = _ctx.sent;\n                    setPaymentData(data);\n                    setLoading(false);\n                case 8:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function captureorder() {\n        return _ref.apply(this, arguments);\n    };\n}();\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udHJvbGxlcnMvb3JkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLGdCQUFnQixHQUFHLFdBQU07SUFDcEMsSUFBSUMsWUFBWSxHQUFHO1FBQ2pCQyxXQUFXLEVBQUUsRUFBRTtRQUNmQyxLQUFLLEVBQUUsRUFBRTtRQUNUQyxJQUFJLEVBQUUsRUFBRTtRQUNSQyxPQUFPLEVBQUU7WUFDUEMsRUFBRSxFQUFFLEVBQUU7WUFDTkMsYUFBYSxFQUFFLEVBQUU7WUFDakJDLFFBQVEsRUFBRSxFQUFFO1lBQ1pDLFFBQVEsRUFBRSxFQUFFO1lBQ1pDLE1BQU0sRUFBRSxFQUFFO1NBQ1g7UUFDREMsS0FBSyxFQUFFO1lBQ0xDLFFBQVEsRUFBRTtnQkFBRUMsSUFBSSxFQUFFLEVBQUU7Z0JBQUVDLE1BQU0sRUFBRSxFQUFFO2FBQUU7WUFDbENDLEtBQUssRUFBRSxDQUFDO1lBQ1JDLEdBQUcsRUFBRSxDQUFDO1lBQ05DLFFBQVEsRUFBRSxDQUFDO1NBQ1o7S0FDRjtJQUNELE9BQU9oQixZQUFZLENBQUM7Q0FDckIsQ0FBQztBQUVLLElBQU1pQixlQUFlLEdBQUcsU0FBQ0wsSUFBSSxFQUFFTSxJQUFJLEVBQUs7SUFDN0MsSUFBSSxJQUE0QixFQUFFO1FBQ2hDQyxZQUFZLENBQUNDLE9BQU8sQ0FBQ1IsSUFBSSxFQUFFUyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0osSUFBSSxDQUFDLENBQUMsQ0FBQztLQUNsRDtDQUNGLENBQUM7QUFFSyxJQUFNSyxlQUFlLEdBQUcsU0FBQ1gsSUFBSSxFQUFLO0lBQ3ZDLElBQUlNLElBQUksR0FBRyxFQUFFO0lBQ2IsSUFBSSxJQUE0QixFQUFFO1FBQ2hDLElBQUk7WUFDRkEsSUFBSSxHQUFHRyxJQUFJLENBQUNHLEtBQUssQ0FBQ0wsWUFBWSxDQUFDTSxPQUFPLENBQUNiLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDL0MsQ0FBQyxPQUFPYyxHQUFHLEVBQUU7WUFDWkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEdBQUcsQ0FBQyxDQUFDO1NBQ2xCO0tBQ0Y7SUFDRCxJQUFJLENBQUNSLElBQUksRUFBRTtRQUNUQSxJQUFJLEdBQUcsRUFBRSxDQUFDO0tBQ1g7SUFDRCxPQUFPQSxJQUFJLENBQUM7Q0FDYixDQUFDO0FBRUssSUFBTVcsWUFBWTtlQUFHLHlKQUFZO1lBQ2hDQyxRQUFRLEVBSVJaLElBQUk7Ozs7OzJCQUphYSxLQUFLLENBQUNDLHVCQUFlLEdBQUcsNEJBQTRCLEVBQUU7d0JBQzNFRyxNQUFNLEVBQUUsTUFBTTt3QkFDZEMsSUFBSSxFQUFFZixJQUFJLENBQUNDLFNBQVMsQ0FBQ2UsS0FBSyxDQUFDO3FCQUM1QixDQUFDOztvQkFISVAsUUFBUSxZQUdaOzsyQkFDaUJBLFFBQVEsQ0FBQ1EsSUFBSSxFQUFFOztvQkFBNUJwQixJQUFJLFlBQXdCO29CQUNsQ3FCLGNBQWMsQ0FBQ3JCLElBQUksQ0FBQyxDQUFDO29CQUNyQnNCLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7O0tBQ25CO29CQVJZWCxZQUFZOzs7R0FReEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udHJvbGxlcnMvb3JkZXIuanM/YTJiMyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaW5pdE9yZGVyRGV0YWlscyA9ICgpID0+IHtcclxuICBsZXQgb3JkZXJEZXRhaWxzID0ge1xyXG4gICAgb3JkZXJOdW1iZXI6IFwiXCIsXHJcbiAgICBpdGVtczogW10sXHJcbiAgICB1c2VyOiBbXSxcclxuICAgIHBheW1lbnQ6IHtcclxuICAgICAgaWQ6IFwiXCIsXHJcbiAgICAgIHBheW1lbnRNZXRob2Q6IFwiXCIsXHJcbiAgICAgIGN1cnJlbmN5OiBcIlwiLFxyXG4gICAgICBwYXllcl9pZDogXCJcIixcclxuICAgICAgc3RhdHVzOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIG9yZGVyOiB7XHJcbiAgICAgIHNoaXBwaW5nOiB7IG5hbWU6IFwiXCIsIGFtb3VudDogXCJcIiB9LFxyXG4gICAgICB0b3RhbDogMCxcclxuICAgICAgdGF4OiAwLFxyXG4gICAgICBzdWJUb3RhbDogMCxcclxuICAgIH0sXHJcbiAgfTtcclxuICByZXR1cm4gb3JkZXJEZXRhaWxzO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldE9yZGVyRGV0YWlscyA9IChuYW1lLCBkYXRhKSA9PiB7XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obmFtZSwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRPcmRlckRldGFpbHMgPSAobmFtZSkgPT4ge1xyXG4gIGxldCBkYXRhID0ge307XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obmFtZSkpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmICghZGF0YSkge1xyXG4gICAgZGF0YSA9IHt9O1xyXG4gIH1cclxuICByZXR1cm4gZGF0YTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjYXB0dXJlb3JkZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChwcm9jZXNzLmVudi5VUkwgKyBcIi9hcGkvcGF5bWVudC9jYXB0dXJlLW9yZGVyXCIsIHtcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh0b2tlbiksXHJcbiAgfSk7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICBzZXRQYXltZW50RGF0YShkYXRhKTtcclxuICBzZXRMb2FkaW5nKGZhbHNlKTtcclxufTtcclxuIl0sIm5hbWVzIjpbImluaXRPcmRlckRldGFpbHMiLCJvcmRlckRldGFpbHMiLCJvcmRlck51bWJlciIsIml0ZW1zIiwidXNlciIsInBheW1lbnQiLCJpZCIsInBheW1lbnRNZXRob2QiLCJjdXJyZW5jeSIsInBheWVyX2lkIiwic3RhdHVzIiwib3JkZXIiLCJzaGlwcGluZyIsIm5hbWUiLCJhbW91bnQiLCJ0b3RhbCIsInRheCIsInN1YlRvdGFsIiwic2V0T3JkZXJEZXRhaWxzIiwiZGF0YSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiZ2V0T3JkZXJEZXRhaWxzIiwicGFyc2UiLCJnZXRJdGVtIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImNhcHR1cmVvcmRlciIsInJlc3BvbnNlIiwiZmV0Y2giLCJwcm9jZXNzIiwiZW52IiwiVVJMIiwibWV0aG9kIiwiYm9keSIsInRva2VuIiwianNvbiIsInNldFBheW1lbnREYXRhIiwic2V0TG9hZGluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/controllers/order.js\n");

/***/ })

});