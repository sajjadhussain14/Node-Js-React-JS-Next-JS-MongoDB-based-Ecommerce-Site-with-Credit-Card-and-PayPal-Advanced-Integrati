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
exports.id = "pages/api/search/[slug]";
exports.ids = ["pages/api/search/[slug]"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./src/pages/api/search/[slug].js":
/*!****************************************!*\
  !*** ./src/pages/api/search/[slug].js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst fsp = (__webpack_require__(/*! fs */ \"fs\").promises);\nasync function handler(req, res) {\n    res.setHeader(\"Cache-Control\", \"s-maxage=86400\");\n    const { slug  } = req.query;\n    let dataURL = process.cwd() + `/data/search/${slug}.json`;\n    const rawData = await fsp.readFile(dataURL);\n    const data = JSON.parse(rawData);\n    res.status(200).json(data);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3NlYXJjaC9bc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLEdBQUcsR0FBR0MsOENBQXNCO0FBRW5CLGVBQWVFLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUNBLEdBQUcsQ0FBQ0MsU0FBUyxDQUFDLGVBQWUsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBRWpELE1BQU0sRUFBRUMsSUFBSSxHQUFFLEdBQUdILEdBQUcsQ0FBQ0ksS0FBSztJQUMxQixJQUFJQyxPQUFPLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFLEdBQUcsQ0FBQyxhQUFhLEVBQUVKLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDekQsTUFBTUssT0FBTyxHQUFHLE1BQU1aLEdBQUcsQ0FBQ2EsUUFBUSxDQUFDSixPQUFPLENBQUM7SUFDM0MsTUFBTUssSUFBSSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0osT0FBTyxDQUFDO0lBRWhDUCxHQUFHLENBQUNZLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDSixJQUFJLENBQUMsQ0FBQztDQUM1QiIsInNvdXJjZXMiOlsid2VicGFjazovL21vZGVybi8uL3NyYy9wYWdlcy9hcGkvc2VhcmNoL1tzbHVnXS5qcz81NDJiIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZzcCA9IHJlcXVpcmUoXCJmc1wiKS5wcm9taXNlcztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICByZXMuc2V0SGVhZGVyKFwiQ2FjaGUtQ29udHJvbFwiLCBcInMtbWF4YWdlPTg2NDAwXCIpO1xyXG5cclxuICBjb25zdCB7IHNsdWcgfSA9IHJlcS5xdWVyeTtcclxuICBsZXQgZGF0YVVSTCA9IHByb2Nlc3MuY3dkKCkgKyBgL2RhdGEvc2VhcmNoLyR7c2x1Z30uanNvbmA7XHJcbiAgY29uc3QgcmF3RGF0YSA9IGF3YWl0IGZzcC5yZWFkRmlsZShkYXRhVVJMKTtcclxuICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShyYXdEYXRhKTtcclxuXHJcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oZGF0YSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImZzcCIsInJlcXVpcmUiLCJwcm9taXNlcyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJzZXRIZWFkZXIiLCJzbHVnIiwicXVlcnkiLCJkYXRhVVJMIiwicHJvY2VzcyIsImN3ZCIsInJhd0RhdGEiLCJyZWFkRmlsZSIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/search/[slug].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/search/[slug].js"));
module.exports = __webpack_exports__;

})();