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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initOrderDetails\": function() { return /* binding */ initOrderDetails; },\n/* harmony export */   \"setOrderDetails\": function() { return /* binding */ setOrderDetails; },\n/* harmony export */   \"getOrderDetails\": function() { return /* binding */ getOrderDetails; },\n/* harmony export */   \"captureorder\": function() { return /* binding */ captureorder; }\n/* harmony export */ });\nvar initOrderDetails = function() {\n    var orderDetails = {\n        orderNumber: \"\",\n        items: [],\n        user: [],\n        payment: {\n            id: \"\",\n            paymentMethod: \"\",\n            currency: \"\",\n            payer_id: \"\",\n            status: \"\"\n        },\n        order: {\n            shipping: {\n                name: \"\",\n                amount: \"\"\n            },\n            total: 0,\n            tax: 0,\n            subTotal: 0\n        }\n    };\n    return orderDetails;\n};\nvar setOrderDetails = function(name, data) {\n    if (true) {\n        localStorage.setItem(name, JSON.stringify(data));\n    }\n};\nvar getOrderDetails = function(name) {\n    var data = {};\n    if (true) {\n        try {\n            data = JSON.parse(localStorage.getItem(name));\n        } catch (err) {\n            console.log(err);\n        }\n    }\n    if (!data) {\n        data = {};\n    }\n    return data;\n};\nvar captureorder = function() {};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udHJvbGxlcnMvb3JkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFPLElBQU1BLGdCQUFnQixHQUFHLFdBQU07SUFDcEMsSUFBSUMsWUFBWSxHQUFHO1FBQ2pCQyxXQUFXLEVBQUUsRUFBRTtRQUNmQyxLQUFLLEVBQUUsRUFBRTtRQUNUQyxJQUFJLEVBQUUsRUFBRTtRQUNSQyxPQUFPLEVBQUU7WUFDUEMsRUFBRSxFQUFFLEVBQUU7WUFDTkMsYUFBYSxFQUFFLEVBQUU7WUFDakJDLFFBQVEsRUFBRSxFQUFFO1lBQ1pDLFFBQVEsRUFBRSxFQUFFO1lBQ1pDLE1BQU0sRUFBRSxFQUFFO1NBQ1g7UUFDREMsS0FBSyxFQUFFO1lBQ0xDLFFBQVEsRUFBRTtnQkFBRUMsSUFBSSxFQUFFLEVBQUU7Z0JBQUVDLE1BQU0sRUFBRSxFQUFFO2FBQUU7WUFDbENDLEtBQUssRUFBRSxDQUFDO1lBQ1JDLEdBQUcsRUFBRSxDQUFDO1lBQ05DLFFBQVEsRUFBRSxDQUFDO1NBQ1o7S0FDRjtJQUNELE9BQU9oQixZQUFZLENBQUM7Q0FDckIsQ0FBQztBQUVLLElBQU1pQixlQUFlLEdBQUcsU0FBQ0wsSUFBSSxFQUFFTSxJQUFJLEVBQUs7SUFDN0MsSUFBSSxJQUE0QixFQUFFO1FBQ2hDQyxZQUFZLENBQUNDLE9BQU8sQ0FBQ1IsSUFBSSxFQUFFUyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0osSUFBSSxDQUFDLENBQUMsQ0FBQztLQUNsRDtDQUNGLENBQUM7QUFFSyxJQUFNSyxlQUFlLEdBQUcsU0FBQ1gsSUFBSSxFQUFLO0lBQ3ZDLElBQUlNLElBQUksR0FBRyxFQUFFO0lBQ2IsSUFBSSxJQUE0QixFQUFFO1FBQ2hDLElBQUk7WUFDRkEsSUFBSSxHQUFHRyxJQUFJLENBQUNHLEtBQUssQ0FBQ0wsWUFBWSxDQUFDTSxPQUFPLENBQUNiLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDL0MsQ0FBQyxPQUFPYyxHQUFHLEVBQUU7WUFDWkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEdBQUcsQ0FBQyxDQUFDO1NBQ2xCO0tBQ0Y7SUFDRCxJQUFJLENBQUNSLElBQUksRUFBRTtRQUNUQSxJQUFJLEdBQUcsRUFBRSxDQUFDO0tBQ1g7SUFDRCxPQUFPQSxJQUFJLENBQUM7Q0FDYixDQUFDO0FBRUssSUFBTVcsWUFBWSxHQUFHLFdBQU0sRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250cm9sbGVycy9vcmRlci5qcz9hMmIzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBpbml0T3JkZXJEZXRhaWxzID0gKCkgPT4ge1xyXG4gIGxldCBvcmRlckRldGFpbHMgPSB7XHJcbiAgICBvcmRlck51bWJlcjogXCJcIixcclxuICAgIGl0ZW1zOiBbXSxcclxuICAgIHVzZXI6IFtdLFxyXG4gICAgcGF5bWVudDoge1xyXG4gICAgICBpZDogXCJcIixcclxuICAgICAgcGF5bWVudE1ldGhvZDogXCJcIixcclxuICAgICAgY3VycmVuY3k6IFwiXCIsXHJcbiAgICAgIHBheWVyX2lkOiBcIlwiLFxyXG4gICAgICBzdGF0dXM6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAgb3JkZXI6IHtcclxuICAgICAgc2hpcHBpbmc6IHsgbmFtZTogXCJcIiwgYW1vdW50OiBcIlwiIH0sXHJcbiAgICAgIHRvdGFsOiAwLFxyXG4gICAgICB0YXg6IDAsXHJcbiAgICAgIHN1YlRvdGFsOiAwLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIHJldHVybiBvcmRlckRldGFpbHM7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0T3JkZXJEZXRhaWxzID0gKG5hbWUsIGRhdGEpID0+IHtcclxuICBpZiAodHlwZW9mIHdpbmRvdyAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShuYW1lLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldE9yZGVyRGV0YWlscyA9IChuYW1lKSA9PiB7XHJcbiAgbGV0IGRhdGEgPSB7fTtcclxuICBpZiAodHlwZW9mIHdpbmRvdyAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShuYW1lKSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH1cclxuICB9XHJcbiAgaWYgKCFkYXRhKSB7XHJcbiAgICBkYXRhID0ge307XHJcbiAgfVxyXG4gIHJldHVybiBkYXRhO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNhcHR1cmVvcmRlciA9ICgpID0+IHt9O1xyXG4iXSwibmFtZXMiOlsiaW5pdE9yZGVyRGV0YWlscyIsIm9yZGVyRGV0YWlscyIsIm9yZGVyTnVtYmVyIiwiaXRlbXMiLCJ1c2VyIiwicGF5bWVudCIsImlkIiwicGF5bWVudE1ldGhvZCIsImN1cnJlbmN5IiwicGF5ZXJfaWQiLCJzdGF0dXMiLCJvcmRlciIsInNoaXBwaW5nIiwibmFtZSIsImFtb3VudCIsInRvdGFsIiwidGF4Iiwic3ViVG90YWwiLCJzZXRPcmRlckRldGFpbHMiLCJkYXRhIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXRPcmRlckRldGFpbHMiLCJwYXJzZSIsImdldEl0ZW0iLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiY2FwdHVyZW9yZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/controllers/order.js\n");

/***/ })

});