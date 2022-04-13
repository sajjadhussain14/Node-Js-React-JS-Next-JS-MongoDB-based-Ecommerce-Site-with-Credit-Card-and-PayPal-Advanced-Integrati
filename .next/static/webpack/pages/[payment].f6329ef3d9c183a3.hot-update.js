"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[payment]",{

/***/ "./src/pages/[payment].js":
/*!********************************!*\
  !*** ./src/pages/[payment].js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var D_modern_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_modern_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_modern_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _controllers_order__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controllers/order */ \"./src/controllers/order.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Payments = function(props) {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var _query = router.query, token = _query.token, PayerID = _query.PayerID;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}), paymentData = ref[0], setPaymentData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), loading = ref1[0], setLoading = ref1[1];\n    if (!token && !PayerID) {\n        if (true) {\n            next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"checkout\");\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(_asyncToGenerator(D_modern_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        return D_modern_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    (0,_controllers_order__WEBPACK_IMPORTED_MODULE_3__.captureOrder)(token, setPaymentData, setLoading);\n                case 1:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    })), [\n        token\n    ]);\n    var orderDetails = {};\n    orderDetails = (0,_controllers_order__WEBPACK_IMPORTED_MODULE_3__.getOrderDetails)(\"orderDetails\");\n    var orderNumber = Array.from(Array(20), function() {\n        return Math.floor(Math.random() * 20).toString(20);\n    }).join(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (loading == false) {\n            (0,_controllers_order__WEBPACK_IMPORTED_MODULE_3__.processOrder)(paymentData, orderDetails, _controllers_order__WEBPACK_IMPORTED_MODULE_3__.setOrderDetails, (next_router__WEBPACK_IMPORTED_MODULE_2___default()));\n        }\n    }, [\n        loading\n    ]);\n    return \"\";\n};\n_s(Payments, \"AQkdW1JVJ0fYs2r2Z5l+OGxIMdc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Payments;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Payments);\nvar _c;\n$RefreshReg$(_c, \"Payments\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvW3BheW1lbnRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE0RDtBQUNwQjtBQUNQO0FBTUg7O0FBRTlCLElBQU1VLFFBQVEsR0FBRyxTQUFDQyxLQUFLLEVBQUs7O0lBQzFCLElBQU1DLE1BQU0sR0FBR1Isc0RBQVMsRUFBRTtJQUMxQixJQUEyQlEsTUFBWSxHQUFaQSxNQUFNLENBQUNDLEtBQUssRUFBL0JDLEtBQUssR0FBY0YsTUFBWSxDQUEvQkUsS0FBSyxFQUFFQyxPQUFPLEdBQUtILE1BQVksQ0FBeEJHLE9BQU87SUFFdEIsSUFBc0NiLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFkcEQsV0Fjb0IsR0FBb0JBLEdBQVksR0FBaEMsRUFkcEIsY0Fjb0MsR0FBSUEsR0FBWSxHQUFoQjtJQUNsQyxJQUE4QkEsSUFBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksQ0FBQyxFQWY5QyxPQWVnQixHQUFnQkEsSUFBYyxHQUE5QixFQWZoQixVQWU0QixHQUFJQSxJQUFjLEdBQWxCO0lBRTFCLElBQUksQ0FBQ1ksS0FBSyxJQUFJLENBQUNDLE9BQU8sRUFBRTtRQUN0QixJQUFJLElBQTRCLEVBQUU7WUFDaENWLHVEQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDekI7S0FDRjtJQUVESixnREFBUyxDQUFDLHlKQUFZOzs7O29CQUNwQkssZ0VBQVksQ0FBQ1EsS0FBSyxFQUFFRyxjQUFjLEVBQUVFLFVBQVUsQ0FBQyxDQUFDOzs7Ozs7S0FDakQsSUFBRTtRQUFDTCxLQUFLO0tBQUMsQ0FBQyxDQUFDO0lBRVosSUFBSU8sWUFBWSxHQUFHLEVBQUU7SUFDckJBLFlBQVksR0FBR2QsbUVBQWUsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUUvQyxJQUFJZSxXQUFXLEdBQUdDLEtBQUssQ0FBQ0MsSUFBSSxDQUFDRCxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUU7ZUFDdENFLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDQyxRQUFRLENBQUMsRUFBRSxDQUFDO0tBQUEsQ0FDNUMsQ0FBQ0MsSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUVWNUIsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBSWlCLE9BQU8sSUFBSSxLQUFLLEVBQUU7WUFDcEJWLGdFQUFZLENBQUNRLFdBQVcsRUFBRUssWUFBWSxFQUFFWiwrREFBZSxFQUFFSixvREFBTSxDQUFDLENBQUM7U0FDbEU7S0FDRixFQUFFO1FBQUNhLE9BQU87S0FBQyxDQUFDLENBQUM7SUFFZCxPQUFPLEVBQUUsQ0FBQztDQUNYO0dBL0JLUixRQUFROztRQUNHTixrREFBUzs7O0FBRHBCTSxLQUFBQSxRQUFRO0FBaUNkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL1twYXltZW50XS5qcz9iZDk4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQge1xyXG4gIGNhcHR1cmVPcmRlcixcclxuICBnZXRPcmRlckRldGFpbHMsXHJcbiAgcHJvY2Vzc09yZGVyLFxyXG4gIHNldE9yZGVyRGV0YWlscyxcclxufSBmcm9tIFwiLi4vY29udHJvbGxlcnMvb3JkZXJcIjtcclxuXHJcbmNvbnN0IFBheW1lbnRzID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyB0b2tlbiwgUGF5ZXJJRCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICBjb25zdCBbcGF5bWVudERhdGEsIHNldFBheW1lbnREYXRhXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgaWYgKCF0b2tlbiAmJiAhUGF5ZXJJRCkge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICBSb3V0ZXIucHVzaChcImNoZWNrb3V0XCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgIGNhcHR1cmVPcmRlcih0b2tlbiwgc2V0UGF5bWVudERhdGEsIHNldExvYWRpbmcpO1xyXG4gIH0sIFt0b2tlbl0pO1xyXG5cclxuICBsZXQgb3JkZXJEZXRhaWxzID0ge307XHJcbiAgb3JkZXJEZXRhaWxzID0gZ2V0T3JkZXJEZXRhaWxzKFwib3JkZXJEZXRhaWxzXCIpO1xyXG5cclxuICBsZXQgb3JkZXJOdW1iZXIgPSBBcnJheS5mcm9tKEFycmF5KDIwKSwgKCkgPT5cclxuICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIwKS50b1N0cmluZygyMClcclxuICApLmpvaW4oXCJcIik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobG9hZGluZyA9PSBmYWxzZSkge1xyXG4gICAgICBwcm9jZXNzT3JkZXIocGF5bWVudERhdGEsIG9yZGVyRGV0YWlscywgc2V0T3JkZXJEZXRhaWxzLCBSb3V0ZXIpO1xyXG4gICAgfVxyXG4gIH0sIFtsb2FkaW5nXSk7XHJcblxyXG4gIHJldHVybiBcIlwiO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGF5bWVudHM7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlTWVtbyIsInVzZVJvdXRlciIsIlJvdXRlciIsImNhcHR1cmVPcmRlciIsImdldE9yZGVyRGV0YWlscyIsInByb2Nlc3NPcmRlciIsInNldE9yZGVyRGV0YWlscyIsIlBheW1lbnRzIiwicHJvcHMiLCJyb3V0ZXIiLCJxdWVyeSIsInRva2VuIiwiUGF5ZXJJRCIsInBheW1lbnREYXRhIiwic2V0UGF5bWVudERhdGEiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInB1c2giLCJvcmRlckRldGFpbHMiLCJvcmRlck51bWJlciIsIkFycmF5IiwiZnJvbSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInRvU3RyaW5nIiwiam9pbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/[payment].js\n");

/***/ })

});