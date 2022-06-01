"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/payment/paypal/capture-order";
exports.ids = ["pages/api/payment/paypal/capture-order"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "(api)/./src/pages/api/payment/paypal/capture-order.js":
/*!*******************************************************!*\
  !*** ./src/pages/api/payment/paypal/capture-order.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    let token = req.body;\n    try {\n        token = JSON.parse(token);\n    } catch (err) {}\n    if (token && token != \"\") {\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${\"https://api-m.sandbox.paypal.com\"}/v2/checkout/orders/${token}/capture`, {}, {\n                auth: {\n                    username: \"AWbojvkP1QJy2XflMyTHDnzgKGsmzom2sxPmVUD9SAgdIm-oXo8jOSljyEREA3o4mxupFDeOeJ-w_cs-\",\n                    password: \"ECVMX7fwEGB7vP_fidGmEVC7gGGvJdCyEIW17oib2dteKrVuj9aILRgWPFw4UWNNu-qH4ctNQ5iHQUDE\"\n                }\n            });\n            res.status(200).json({\n                code: 200,\n                data: response.data\n            });\n        } catch (error) {\n            console.log(\"Error is \", error);\n            return res.status(500).json({\n                code: 500,\n                message: \"Internal Server error\"\n            });\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3BheW1lbnQvcGF5cGFsL2NhcHR1cmUtb3JkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBCO0FBRVgsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxJQUFJQyxLQUFLLEdBQUdGLEdBQUcsQ0FBQ0csSUFBSTtJQUNwQixJQUFJO1FBQ0ZELEtBQUssR0FBR0UsSUFBSSxDQUFDQyxLQUFLLENBQUNILEtBQUssQ0FBQyxDQUFDO0tBQzNCLENBQUMsT0FBT0ksR0FBRyxFQUFFLEVBQUU7SUFFaEIsSUFBSUosS0FBSyxJQUFJQSxLQUFLLElBQUksRUFBRSxFQUFFO1FBQ3hCLElBQUk7WUFDRixNQUFNSyxRQUFRLEdBQUcsTUFBTVQsaURBQVUsQ0FDL0IsQ0FBQyxFQUFFVyxrQ0FBc0IsQ0FBQyxvQkFBb0IsRUFBRVAsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUMvRCxFQUFFLEVBQ0Y7Z0JBQ0VVLElBQUksRUFBRTtvQkFDSkMsUUFBUSxFQUFFSixrRkFBNkI7b0JBQ3ZDTSxRQUFRLEVBQUVOLGtGQUE2QjtpQkFDeEM7YUFDRixDQUNGO1lBQ0RSLEdBQUcsQ0FBQ2dCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUFFQyxJQUFJLEVBQUUsR0FBRztnQkFBRUMsSUFBSSxFQUFFYixRQUFRLENBQUNhLElBQUk7YUFBRSxDQUFDLENBQUM7U0FDMUQsQ0FBQyxPQUFPQyxLQUFLLEVBQUU7WUFDZEMsT0FBTyxDQUFDQyxHQUFHLENBQUMsV0FBVyxFQUFFRixLQUFLLENBQUMsQ0FBQztZQUVoQyxPQUFPcEIsR0FBRyxDQUNQZ0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUNYQyxJQUFJLENBQUM7Z0JBQUVDLElBQUksRUFBRSxHQUFHO2dCQUFFSyxPQUFPLEVBQUUsdUJBQXVCO2FBQUUsQ0FBQyxDQUFDO1NBQzFEO0tBQ0Y7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL21vZGVybi8uL3NyYy9wYWdlcy9hcGkvcGF5bWVudC9wYXlwYWwvY2FwdHVyZS1vcmRlci5qcz9iN2YxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBsZXQgdG9rZW4gPSByZXEuYm9keTtcclxuICB0cnkge1xyXG4gICAgdG9rZW4gPSBKU09OLnBhcnNlKHRva2VuKTtcclxuICB9IGNhdGNoIChlcnIpIHt9XHJcblxyXG4gIGlmICh0b2tlbiAmJiB0b2tlbiAhPSBcIlwiKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgYCR7cHJvY2Vzcy5lbnYuUEFZUEFMX0FQSX0vdjIvY2hlY2tvdXQvb3JkZXJzLyR7dG9rZW59L2NhcHR1cmVgLFxyXG4gICAgICAgIHt9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGF1dGg6IHtcclxuICAgICAgICAgICAgdXNlcm5hbWU6IHByb2Nlc3MuZW52LlBBWVBBTF9BUElfQ0xJRU5ULFxyXG4gICAgICAgICAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuUEFZUEFMX0FQSV9TRUNSRVQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBjb2RlOiAyMDAsIGRhdGE6IHJlc3BvbnNlLmRhdGEgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGlzIFwiLCBlcnJvcik7XHJcblxyXG4gICAgICByZXR1cm4gcmVzXHJcbiAgICAgICAgLnN0YXR1cyg1MDApXHJcbiAgICAgICAgLmpzb24oeyBjb2RlOiA1MDAsIG1lc3NhZ2U6IFwiSW50ZXJuYWwgU2VydmVyIGVycm9yXCIgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJ0b2tlbiIsImJvZHkiLCJKU09OIiwicGFyc2UiLCJlcnIiLCJyZXNwb25zZSIsInBvc3QiLCJwcm9jZXNzIiwiZW52IiwiUEFZUEFMX0FQSSIsImF1dGgiLCJ1c2VybmFtZSIsIlBBWVBBTF9BUElfQ0xJRU5UIiwicGFzc3dvcmQiLCJQQVlQQUxfQVBJX1NFQ1JFVCIsInN0YXR1cyIsImpzb24iLCJjb2RlIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/payment/paypal/capture-order.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/payment/paypal/capture-order.js"));
module.exports = __webpack_exports__;

})();