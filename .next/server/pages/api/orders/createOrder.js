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
exports.id = "pages/api/orders/createOrder";
exports.ids = ["pages/api/orders/createOrder"];
exports.modules = {

/***/ "md5":
/*!**********************!*\
  !*** external "md5" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("md5");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./src/pages/api/orders/createOrder.js":
/*!*********************************************!*\
  !*** ./src/pages/api/orders/createOrder.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst fsp = (__webpack_require__(/*! fs */ \"fs\").promises);\nconst md5 = __webpack_require__(/*! md5 */ \"md5\");\nasync function handler(req, res) {\n    let { URL  } = process.env;\n    let orders = [];\n    let { orderDertails  } = req.body;\n    let dataURL = process.cwd() + `/data/orders/orders.json`;\n    let response = \"\";\n    let stcode = 409;\n    fsp.readFile(dataURL).then((rawData)=>{\n        try {\n            orders = JSON.parse(rawData);\n        } catch (err) {\n            orders = [];\n        }\n        if (!orders || orders.length < 1) {\n            orders = [];\n        }\n        try {\n            orders.push(orderDertails);\n            fsp.writeFile(dataURL, JSON.stringify(orders)).then((rsp)=>{\n                response = \"order Created Successfully!\";\n            });\n            stcode = 200;\n            return res.status(stcode).send(response);\n        } catch (err1) {\n            response = \"order Creation Failed!\" + err1;\n            stcode = 301;\n            return res.status(stcode).send(response);\n        }\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL29yZGVycy9jcmVhdGVPcmRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsR0FBRyxHQUFHQyw4Q0FBc0I7QUFDbEMsTUFBTUUsR0FBRyxHQUFHRixtQkFBTyxDQUFDLGdCQUFLLENBQUM7QUFFWCxlQUFlRyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLElBQUksRUFBRUMsR0FBRyxHQUFFLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBRztJQUN6QixJQUFJQyxNQUFNLEdBQUcsRUFBRTtJQUNmLElBQUksRUFBRUMsYUFBYSxHQUFFLEdBQUdOLEdBQUcsQ0FBQ08sSUFBSTtJQUNoQyxJQUFJQyxPQUFPLEdBQUdMLE9BQU8sQ0FBQ00sR0FBRyxFQUFFLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQztJQUN4RCxJQUFJQyxRQUFRLEdBQUcsRUFBRTtJQUNqQixJQUFJQyxNQUFNLEdBQUcsR0FBRztJQUNoQmhCLEdBQUcsQ0FBQ2lCLFFBQVEsQ0FBQ0osT0FBTyxDQUFDLENBQUNLLElBQUksQ0FBQyxDQUFDQyxPQUFPLEdBQUs7UUFDdEMsSUFBSTtZQUNGVCxNQUFNLEdBQUdVLElBQUksQ0FBQ0MsS0FBSyxDQUFDRixPQUFPLENBQUMsQ0FBQztTQUM5QixDQUFDLE9BQU9HLEdBQUcsRUFBRTtZQUNaWixNQUFNLEdBQUcsRUFBRSxDQUFDO1NBQ2I7UUFFRCxJQUFJLENBQUNBLE1BQU0sSUFBSUEsTUFBTSxDQUFDYSxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ2hDYixNQUFNLEdBQUcsRUFBRSxDQUFDO1NBQ2I7UUFDRCxJQUFJO1lBQ0ZBLE1BQU0sQ0FBQ2MsSUFBSSxDQUFDYixhQUFhLENBQUMsQ0FBQztZQUMzQlgsR0FBRyxDQUFDeUIsU0FBUyxDQUFDWixPQUFPLEVBQUVPLElBQUksQ0FBQ00sU0FBUyxDQUFDaEIsTUFBTSxDQUFDLENBQUMsQ0FBQ1EsSUFBSSxDQUFDLENBQUNTLEdBQUcsR0FBSztnQkFDM0RaLFFBQVEsR0FBRyw2QkFBNkIsQ0FBQzthQUMxQyxDQUFDLENBQUM7WUFDSEMsTUFBTSxHQUFHLEdBQUcsQ0FBQztZQUNiLE9BQU9WLEdBQUcsQ0FBQ3NCLE1BQU0sQ0FBQ1osTUFBTSxDQUFDLENBQUNhLElBQUksQ0FBQ2QsUUFBUSxDQUFDLENBQUM7U0FDMUMsQ0FBQyxPQUFPTyxJQUFHLEVBQUU7WUFDWlAsUUFBUSxHQUFHLHdCQUF3QixHQUFHTyxJQUFHLENBQUM7WUFDMUNOLE1BQU0sR0FBRyxHQUFHLENBQUM7WUFDYixPQUFPVixHQUFHLENBQUNzQixNQUFNLENBQUNaLE1BQU0sQ0FBQyxDQUFDYSxJQUFJLENBQUNkLFFBQVEsQ0FBQyxDQUFDO1NBQzFDO0tBQ0YsQ0FBQyxDQUFDO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb2Rlcm4vLi9zcmMvcGFnZXMvYXBpL29yZGVycy9jcmVhdGVPcmRlci5qcz83NWQyIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZzcCA9IHJlcXVpcmUoXCJmc1wiKS5wcm9taXNlcztcclxuY29uc3QgbWQ1ID0gcmVxdWlyZShcIm1kNVwiKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBsZXQgeyBVUkwgfSA9IHByb2Nlc3MuZW52O1xyXG4gIGxldCBvcmRlcnMgPSBbXTtcclxuICBsZXQgeyBvcmRlckRlcnRhaWxzIH0gPSByZXEuYm9keTtcclxuICBsZXQgZGF0YVVSTCA9IHByb2Nlc3MuY3dkKCkgKyBgL2RhdGEvb3JkZXJzL29yZGVycy5qc29uYDtcclxuICBsZXQgcmVzcG9uc2UgPSBcIlwiO1xyXG4gIGxldCBzdGNvZGUgPSA0MDk7XHJcbiAgZnNwLnJlYWRGaWxlKGRhdGFVUkwpLnRoZW4oKHJhd0RhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIG9yZGVycyA9IEpTT04ucGFyc2UocmF3RGF0YSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgb3JkZXJzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFvcmRlcnMgfHwgb3JkZXJzLmxlbmd0aCA8IDEpIHtcclxuICAgICAgb3JkZXJzID0gW107XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBvcmRlcnMucHVzaChvcmRlckRlcnRhaWxzKTtcclxuICAgICAgZnNwLndyaXRlRmlsZShkYXRhVVJMLCBKU09OLnN0cmluZ2lmeShvcmRlcnMpKS50aGVuKChyc3ApID0+IHtcclxuICAgICAgICByZXNwb25zZSA9IFwib3JkZXIgQ3JlYXRlZCBTdWNjZXNzZnVsbHkhXCI7XHJcbiAgICAgIH0pO1xyXG4gICAgICBzdGNvZGUgPSAyMDA7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKHN0Y29kZSkuc2VuZChyZXNwb25zZSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgcmVzcG9uc2UgPSBcIm9yZGVyIENyZWF0aW9uIEZhaWxlZCFcIiArIGVycjtcclxuICAgICAgc3Rjb2RlID0gMzAxO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhzdGNvZGUpLnNlbmQocmVzcG9uc2UpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJmc3AiLCJyZXF1aXJlIiwicHJvbWlzZXMiLCJtZDUiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiVVJMIiwicHJvY2VzcyIsImVudiIsIm9yZGVycyIsIm9yZGVyRGVydGFpbHMiLCJib2R5IiwiZGF0YVVSTCIsImN3ZCIsInJlc3BvbnNlIiwic3Rjb2RlIiwicmVhZEZpbGUiLCJ0aGVuIiwicmF3RGF0YSIsIkpTT04iLCJwYXJzZSIsImVyciIsImxlbmd0aCIsInB1c2giLCJ3cml0ZUZpbGUiLCJzdHJpbmdpZnkiLCJyc3AiLCJzdGF0dXMiLCJzZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/orders/createOrder.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/orders/createOrder.js"));
module.exports = __webpack_exports__;

})();