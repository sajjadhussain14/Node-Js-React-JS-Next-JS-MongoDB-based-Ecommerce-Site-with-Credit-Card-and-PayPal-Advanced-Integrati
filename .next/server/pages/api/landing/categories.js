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
exports.id = "pages/api/landing/categories";
exports.ids = ["pages/api/landing/categories"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./src/pages/api/landing/categories.js":
/*!*********************************************!*\
  !*** ./src/pages/api/landing/categories.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst fsp = (__webpack_require__(/*! fs */ \"fs\").promises);\nasync function handler(req, res) {\n    res.setHeader(\"Cache-Control\", \"public, s-maxage=86400, stale-while-revalidate=59\");\n    let dataURL = process.cwd() + `/data/typs-with-thumbs.json`;\n    const rawData = await fsp.readFile(dataURL);\n    const data = JSON.parse(rawData);\n    res.status(200).json(data);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2xhbmRpbmcvY2F0ZWdvcmllcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsR0FBRyxHQUFHQyw4Q0FBc0I7QUFFbkIsZUFBZUUsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5Q0EsR0FBRyxDQUFDQyxTQUFTLENBQ1gsZUFBZSxFQUNmLG1EQUFtRCxDQUNwRCxDQUFDO0lBRUYsSUFBSUMsT0FBTyxHQUFHQyxPQUFPLENBQUNDLEdBQUcsRUFBRSxHQUFHLENBQUMsMkJBQTJCLENBQUM7SUFDM0QsTUFBTUMsT0FBTyxHQUFHLE1BQU1WLEdBQUcsQ0FBQ1csUUFBUSxDQUFDSixPQUFPLENBQUM7SUFDM0MsTUFBTUssSUFBSSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0osT0FBTyxDQUFDO0lBQ2hDTCxHQUFHLENBQUNVLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDSixJQUFJLENBQUMsQ0FBQztDQUM1QiIsInNvdXJjZXMiOlsid2VicGFjazovL21vZGVybi8uL3NyYy9wYWdlcy9hcGkvbGFuZGluZy9jYXRlZ29yaWVzLmpzP2RkNTgiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZnNwID0gcmVxdWlyZShcImZzXCIpLnByb21pc2VzO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIHJlcy5zZXRIZWFkZXIoXHJcbiAgICBcIkNhY2hlLUNvbnRyb2xcIixcclxuICAgIFwicHVibGljLCBzLW1heGFnZT04NjQwMCwgc3RhbGUtd2hpbGUtcmV2YWxpZGF0ZT01OVwiXHJcbiAgKTtcclxuXHJcbiAgbGV0IGRhdGFVUkwgPSBwcm9jZXNzLmN3ZCgpICsgYC9kYXRhL3R5cHMtd2l0aC10aHVtYnMuanNvbmA7XHJcbiAgY29uc3QgcmF3RGF0YSA9IGF3YWl0IGZzcC5yZWFkRmlsZShkYXRhVVJMKTtcclxuICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShyYXdEYXRhKTtcclxuICByZXMuc3RhdHVzKDIwMCkuanNvbihkYXRhKTtcclxufVxyXG4iXSwibmFtZXMiOlsiZnNwIiwicmVxdWlyZSIsInByb21pc2VzIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInNldEhlYWRlciIsImRhdGFVUkwiLCJwcm9jZXNzIiwiY3dkIiwicmF3RGF0YSIsInJlYWRGaWxlIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/landing/categories.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/landing/categories.js"));
module.exports = __webpack_exports__;

})();