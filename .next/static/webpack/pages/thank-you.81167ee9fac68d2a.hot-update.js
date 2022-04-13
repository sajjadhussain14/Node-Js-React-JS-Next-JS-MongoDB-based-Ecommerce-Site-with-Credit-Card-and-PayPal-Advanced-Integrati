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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initOrderDetails\": function() { return /* binding */ initOrderDetails; },\n/* harmony export */   \"setOrderDetails\": function() { return /* binding */ setOrderDetails; },\n/* harmony export */   \"getOrderDetails\": function() { return /* binding */ getOrderDetails; },\n/* harmony export */   \"captureOrder\": function() { return /* binding */ captureOrder; },\n/* harmony export */   \"processOrder\": function() { return /* binding */ processOrder; }\n/* harmony export */ });\n/* harmony import */ var D_modern_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_modern_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_modern_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar initOrderDetails = function() {\n    var orderDetails = {\n        orderNumber: \"\",\n        items: [],\n        user: [],\n        payment: {\n            id: \"\",\n            paymentMethod: \"\",\n            currency: \"\",\n            payer_id: \"\",\n            status: \"\"\n        },\n        order: {\n            shipping: {\n                name: \"\",\n                amount: \"\"\n            },\n            total: 0,\n            tax: 0,\n            subTotal: 0\n        }\n    };\n    return orderDetails;\n};\nvar setOrderDetails = function(name, data) {\n    if (true) {\n        localStorage.setItem(name, JSON.stringify(data));\n    }\n};\nvar getOrderDetails = function(name) {\n    var data = {};\n    if (true) {\n        try {\n            data = JSON.parse(localStorage.getItem(name));\n        } catch (err) {\n            console.log(err);\n        }\n    }\n    if (!data) {\n        data = {};\n    }\n    return data;\n};\nvar captureOrder = function() {\n    var _ref = _asyncToGenerator(D_modern_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(token, setPaymentData, setLoading) {\n        var response, data;\n        return D_modern_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return fetch(\"http://localhost:3000\" + \"/api/payment/capture-order\", {\n                        method: \"POST\",\n                        body: JSON.stringify(token)\n                    });\n                case 2:\n                    response = _ctx.sent;\n                    _ctx.next = 5;\n                    return response.json();\n                case 5:\n                    data = _ctx.sent;\n                    setPaymentData(data);\n                    setLoading(false);\n                case 8:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function captureOrder(token, setPaymentData, setLoading) {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar processOrder = function() {\n    var _ref = _asyncToGenerator(D_modern_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(paymentData, orderDetails, orderNumber, Router) {\n        return D_modern_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    if (paymentData.code == 200) {\n                        try {\n                            orderDetails.orderNumber = orderNumber;\n                            orderDetails.payment.id = paymentData.data.id;\n                            orderDetails.payment.payer_id = paymentData.data.payer_id;\n                            orderDetails.payment.status = paymentData.data.status;\n                        } catch (err) {}\n                        setOrderDetails(\"orderDetails\", orderDetails);\n                        if (true) {\n                            Router.push(\"http://localhost:3000\" + \"/thank-you\");\n                        }\n                    } else {\n                        if (true) {\n                            Router.push(\"http://localhost:3000\" + \"/error\");\n                        }\n                    }\n                case 1:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function processOrder(paymentData, orderDetails, orderNumber, Router) {\n        return _ref.apply(this, arguments);\n    };\n}();\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UixZQUFZLENBQUNJLE9BQU8sQ0FBQ0ssTUFBTSxHQUFHaUMsV0FBVyxDQUFDeEIsSUFBSSxDQUFDVCxNQUFNLENBQUM7eUJBQ3ZELENBQUMsT0FBT2lCLEdBQUcsRUFBRSxFQUFFO3dCQUNoQlQsZUFBZSxDQUFDLGNBQWMsRUFBRWpCLFlBQVksQ0FBQyxDQUFDO3dCQUU5QyxJQUFJLElBQTRCLEVBQUU7NEJBQ2hDMkMsTUFBTSxDQUFDRSxJQUFJLENBQUNWLHVCQUFlLEdBQUcsWUFBWSxDQUFDLENBQUM7eUJBQzdDO3FCQUNGLE1BQU07d0JBQ0wsSUFBSSxJQUE0QixFQUFFOzRCQUNoQ1EsTUFBTSxDQUFDRSxJQUFJLENBQUNWLHVCQUFlLEdBQUcsUUFBUSxDQUFDLENBQUM7eUJBQ3pDO3FCQUNGOzs7Ozs7S0FDRjtvQkF2QllNLFlBQVksQ0FDdkJDLFdBQVcsRUFDWDFDLFlBQVksRUFDWkMsV0FBVyxFQUNYMEMsTUFBTTs7O0dBbUJQLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRyb2xsZXJzL29yZGVyLmpzP2EyYjMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGluaXRPcmRlckRldGFpbHMgPSAoKSA9PiB7XHJcbiAgbGV0IG9yZGVyRGV0YWlscyA9IHtcclxuICAgIG9yZGVyTnVtYmVyOiBcIlwiLFxyXG4gICAgaXRlbXM6IFtdLFxyXG4gICAgdXNlcjogW10sXHJcbiAgICBwYXltZW50OiB7XHJcbiAgICAgIGlkOiBcIlwiLFxyXG4gICAgICBwYXltZW50TWV0aG9kOiBcIlwiLFxyXG4gICAgICBjdXJyZW5jeTogXCJcIixcclxuICAgICAgcGF5ZXJfaWQ6IFwiXCIsXHJcbiAgICAgIHN0YXR1czogXCJcIixcclxuICAgIH0sXHJcbiAgICBvcmRlcjoge1xyXG4gICAgICBzaGlwcGluZzogeyBuYW1lOiBcIlwiLCBhbW91bnQ6IFwiXCIgfSxcclxuICAgICAgdG90YWw6IDAsXHJcbiAgICAgIHRheDogMCxcclxuICAgICAgc3ViVG90YWw6IDAsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgcmV0dXJuIG9yZGVyRGV0YWlscztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRPcmRlckRldGFpbHMgPSAobmFtZSwgZGF0YSkgPT4ge1xyXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKG5hbWUsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0T3JkZXJEZXRhaWxzID0gKG5hbWUpID0+IHtcclxuICBsZXQgZGF0YSA9IHt9O1xyXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKG5hbWUpKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG4gIH1cclxuICBpZiAoIWRhdGEpIHtcclxuICAgIGRhdGEgPSB7fTtcclxuICB9XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY2FwdHVyZU9yZGVyID0gYXN5bmMgKHRva2VuLCBzZXRQYXltZW50RGF0YSwgc2V0TG9hZGluZykgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocHJvY2Vzcy5lbnYuVVJMICsgXCIvYXBpL3BheW1lbnQvY2FwdHVyZS1vcmRlclwiLCB7XHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkodG9rZW4pLFxyXG4gIH0pO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgc2V0UGF5bWVudERhdGEoZGF0YSk7XHJcbiAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcHJvY2Vzc09yZGVyID0gYXN5bmMgKFxyXG4gIHBheW1lbnREYXRhLFxyXG4gIG9yZGVyRGV0YWlscyxcclxuICBvcmRlck51bWJlcixcclxuICBSb3V0ZXJcclxuKSA9PiB7XHJcbiAgaWYgKHBheW1lbnREYXRhLmNvZGUgPT0gMjAwKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBvcmRlckRldGFpbHMub3JkZXJOdW1iZXIgPSBvcmRlck51bWJlcjtcclxuICAgICAgb3JkZXJEZXRhaWxzLnBheW1lbnQuaWQgPSBwYXltZW50RGF0YS5kYXRhLmlkO1xyXG4gICAgICBvcmRlckRldGFpbHMucGF5bWVudC5wYXllcl9pZCA9IHBheW1lbnREYXRhLmRhdGEucGF5ZXJfaWQ7XHJcbiAgICAgIG9yZGVyRGV0YWlscy5wYXltZW50LnN0YXR1cyA9IHBheW1lbnREYXRhLmRhdGEuc3RhdHVzO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7fVxyXG4gICAgc2V0T3JkZXJEZXRhaWxzKFwib3JkZXJEZXRhaWxzXCIsIG9yZGVyRGV0YWlscyk7XHJcblxyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICBSb3V0ZXIucHVzaChwcm9jZXNzLmVudi5VUkwgKyBcIi90aGFuay15b3VcIik7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgUm91dGVyLnB1c2gocHJvY2Vzcy5lbnYuVVJMICsgXCIvZXJyb3JcIik7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG4iXSwibmFtZXMiOlsiaW5pdE9yZGVyRGV0YWlscyIsIm9yZGVyRGV0YWlscyIsIm9yZGVyTnVtYmVyIiwiaXRlbXMiLCJ1c2VyIiwicGF5bWVudCIsImlkIiwicGF5bWVudE1ldGhvZCIsImN1cnJlbmN5IiwicGF5ZXJfaWQiLCJzdGF0dXMiLCJvcmRlciIsInNoaXBwaW5nIiwibmFtZSIsImFtb3VudCIsInRvdGFsIiwidGF4Iiwic3ViVG90YWwiLCJzZXRPcmRlckRldGFpbHMiLCJkYXRhIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXRPcmRlckRldGFpbHMiLCJwYXJzZSIsImdldEl0ZW0iLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiY2FwdHVyZU9yZGVyIiwidG9rZW4iLCJzZXRQYXltZW50RGF0YSIsInNldExvYWRpbmciLCJyZXNwb25zZSIsImZldGNoIiwicHJvY2VzcyIsImVudiIsIlVSTCIsIm1ldGhvZCIsImJvZHkiLCJqc29uIiwicHJvY2Vzc09yZGVyIiwicGF5bWVudERhdGEiLCJSb3V0ZXIiLCJjb2RlIiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/controllers/order.js\n");

/***/ })

});