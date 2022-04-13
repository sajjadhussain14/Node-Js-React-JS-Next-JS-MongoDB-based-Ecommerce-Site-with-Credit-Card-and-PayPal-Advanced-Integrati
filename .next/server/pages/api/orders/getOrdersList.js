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
exports.id = "pages/api/orders/getOrdersList";
exports.ids = ["pages/api/orders/getOrdersList"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./src/pages/api/orders/getOrdersList.js":
/*!***********************************************!*\
  !*** ./src/pages/api/orders/getOrdersList.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst fsp = (__webpack_require__(/*! fs */ \"fs\").promises);\nasync function handler(req, res) {\n    let data = req.body;\n    try {\n        data = JSON.parse(data);\n    } catch (err) {}\n    let userID = data.userID;\n    let orders = [];\n    let dataURL = process.cwd() + `/data/orders/orders.json`;\n    let orders_rsp = await fsp.readFile(dataURL);\n    try {\n        orders = JSON.parse(orders_rsp);\n    } catch (err1) {\n        orders = [];\n    }\n    if (!orders || orders.length < 1) {\n        orders = [];\n    }\n    orders = orders.filter((order)=>order.UserID == userID\n    );\n    if (!orders || orders.length < 0) {\n        orders = [];\n    }\n    res.json(orders);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL29yZGVycy9nZXRPcmRlcnNMaXN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxHQUFHLEdBQUdDLDhDQUFzQjtBQUVuQixlQUFlRSxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLElBQUlDLElBQUksR0FBR0YsR0FBRyxDQUFDRyxJQUFJO0lBQ25CLElBQUk7UUFDRkQsSUFBSSxHQUFHRSxJQUFJLENBQUNDLEtBQUssQ0FBQ0gsSUFBSSxDQUFDLENBQUM7S0FDekIsQ0FBQyxPQUFPSSxHQUFHLEVBQUUsRUFBRTtJQUNoQixJQUFJQyxNQUFNLEdBQUdMLElBQUksQ0FBQ0ssTUFBTTtJQUN4QixJQUFJQyxNQUFNLEdBQUcsRUFBRTtJQUVmLElBQUlDLE9BQU8sR0FBR0MsT0FBTyxDQUFDQyxHQUFHLEVBQUUsR0FBRyxDQUFDLHdCQUF3QixDQUFDO0lBQ3hELElBQUlDLFVBQVUsR0FBRyxNQUFNaEIsR0FBRyxDQUFDaUIsUUFBUSxDQUFDSixPQUFPLENBQUM7SUFFNUMsSUFBSTtRQUNGRCxNQUFNLEdBQUdKLElBQUksQ0FBQ0MsS0FBSyxDQUFDTyxVQUFVLENBQUMsQ0FBQztLQUNqQyxDQUFDLE9BQU9OLElBQUcsRUFBRTtRQUNaRSxNQUFNLEdBQUcsRUFBRSxDQUFDO0tBQ2I7SUFFRCxJQUFJLENBQUNBLE1BQU0sSUFBSUEsTUFBTSxDQUFDTSxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQ2hDTixNQUFNLEdBQUcsRUFBRSxDQUFDO0tBQ2I7SUFFREEsTUFBTSxHQUFHQSxNQUFNLENBQUNPLE1BQU0sQ0FBQyxDQUFDQyxLQUFLLEdBQUtBLEtBQUssQ0FBQ0MsTUFBTSxJQUFJVixNQUFNO0lBQUEsQ0FBQyxDQUFDO0lBRTFELElBQUksQ0FBQ0MsTUFBTSxJQUFJQSxNQUFNLENBQUNNLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDaENOLE1BQU0sR0FBRyxFQUFFLENBQUM7S0FDYjtJQUNEUCxHQUFHLENBQUNpQixJQUFJLENBQUNWLE1BQU0sQ0FBQyxDQUFDO0NBQ2xCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9kZXJuLy4vc3JjL3BhZ2VzL2FwaS9vcmRlcnMvZ2V0T3JkZXJzTGlzdC5qcz9jMDdmIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZzcCA9IHJlcXVpcmUoXCJmc1wiKS5wcm9taXNlcztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBsZXQgZGF0YSA9IHJlcS5ib2R5O1xyXG4gIHRyeSB7XHJcbiAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcclxuICB9IGNhdGNoIChlcnIpIHt9XHJcbiAgbGV0IHVzZXJJRCA9IGRhdGEudXNlcklEO1xyXG4gIGxldCBvcmRlcnMgPSBbXTtcclxuXHJcbiAgbGV0IGRhdGFVUkwgPSBwcm9jZXNzLmN3ZCgpICsgYC9kYXRhL29yZGVycy9vcmRlcnMuanNvbmA7XHJcbiAgbGV0IG9yZGVyc19yc3AgPSBhd2FpdCBmc3AucmVhZEZpbGUoZGF0YVVSTCk7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBvcmRlcnMgPSBKU09OLnBhcnNlKG9yZGVyc19yc3ApO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgb3JkZXJzID0gW107XHJcbiAgfVxyXG5cclxuICBpZiAoIW9yZGVycyB8fCBvcmRlcnMubGVuZ3RoIDwgMSkge1xyXG4gICAgb3JkZXJzID0gW107XHJcbiAgfVxyXG5cclxuICBvcmRlcnMgPSBvcmRlcnMuZmlsdGVyKChvcmRlcikgPT4gb3JkZXIuVXNlcklEID09IHVzZXJJRCk7XHJcblxyXG4gIGlmICghb3JkZXJzIHx8IG9yZGVycy5sZW5ndGggPCAwKSB7XHJcbiAgICBvcmRlcnMgPSBbXTtcclxuICB9XHJcbiAgcmVzLmpzb24ob3JkZXJzKTtcclxufVxyXG4iXSwibmFtZXMiOlsiZnNwIiwicmVxdWlyZSIsInByb21pc2VzIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImRhdGEiLCJib2R5IiwiSlNPTiIsInBhcnNlIiwiZXJyIiwidXNlcklEIiwib3JkZXJzIiwiZGF0YVVSTCIsInByb2Nlc3MiLCJjd2QiLCJvcmRlcnNfcnNwIiwicmVhZEZpbGUiLCJsZW5ndGgiLCJmaWx0ZXIiLCJvcmRlciIsIlVzZXJJRCIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/orders/getOrdersList.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/orders/getOrdersList.js"));
module.exports = __webpack_exports__;

})();