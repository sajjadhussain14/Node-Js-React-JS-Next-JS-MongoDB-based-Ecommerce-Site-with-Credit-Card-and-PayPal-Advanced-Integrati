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
exports.id = "pages/api/category/[slug]";
exports.ids = ["pages/api/category/[slug]"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./src/pages/api/category/[slug].js":
/*!******************************************!*\
  !*** ./src/pages/api/category/[slug].js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst fsp = (__webpack_require__(/*! fs */ \"fs\").promises);\nasync function handler(req, res) {\n    res.setHeader(\"Cache-Control\", \"public, s-maxage=86400, stale-while-revalidate=59\");\n    const { slug  } = req.query;\n    let dataURL = process.cwd() + `/data/${slug}.json`;\n    const rawData = await fsp.readFile(dataURL);\n    const data = JSON.parse(rawData);\n    res.status(200).json(data);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2NhdGVnb3J5L1tzbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsR0FBRyxHQUFHQyw4Q0FBc0I7QUFFbkIsZUFBZUUsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5Q0EsR0FBRyxDQUFDQyxTQUFTLENBQ1gsZUFBZSxFQUNmLG1EQUFtRCxDQUNwRCxDQUFDO0lBRUYsTUFBTSxFQUFFQyxJQUFJLEdBQUUsR0FBR0gsR0FBRyxDQUFDSSxLQUFLO0lBQzFCLElBQUlDLE9BQU8sR0FBR0MsT0FBTyxDQUFDQyxHQUFHLEVBQUUsR0FBRyxDQUFDLE1BQU0sRUFBRUosSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNsRCxNQUFNSyxPQUFPLEdBQUcsTUFBTVosR0FBRyxDQUFDYSxRQUFRLENBQUNKLE9BQU8sQ0FBQztJQUMzQyxNQUFNSyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDSixPQUFPLENBQUM7SUFFaENQLEdBQUcsQ0FBQ1ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNKLElBQUksQ0FBQyxDQUFDO0NBQzVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9kZXJuLy4vc3JjL3BhZ2VzL2FwaS9jYXRlZ29yeS9bc2x1Z10uanM/MjJiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmc3AgPSByZXF1aXJlKFwiZnNcIikucHJvbWlzZXM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgcmVzLnNldEhlYWRlcihcclxuICAgIFwiQ2FjaGUtQ29udHJvbFwiLFxyXG4gICAgXCJwdWJsaWMsIHMtbWF4YWdlPTg2NDAwLCBzdGFsZS13aGlsZS1yZXZhbGlkYXRlPTU5XCJcclxuICApO1xyXG5cclxuICBjb25zdCB7IHNsdWcgfSA9IHJlcS5xdWVyeTtcclxuICBsZXQgZGF0YVVSTCA9IHByb2Nlc3MuY3dkKCkgKyBgL2RhdGEvJHtzbHVnfS5qc29uYDtcclxuICBjb25zdCByYXdEYXRhID0gYXdhaXQgZnNwLnJlYWRGaWxlKGRhdGFVUkwpO1xyXG4gIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHJhd0RhdGEpO1xyXG5cclxuICByZXMuc3RhdHVzKDIwMCkuanNvbihkYXRhKTtcclxufVxyXG4iXSwibmFtZXMiOlsiZnNwIiwicmVxdWlyZSIsInByb21pc2VzIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInNldEhlYWRlciIsInNsdWciLCJxdWVyeSIsImRhdGFVUkwiLCJwcm9jZXNzIiwiY3dkIiwicmF3RGF0YSIsInJlYWRGaWxlIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/category/[slug].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/category/[slug].js"));
module.exports = __webpack_exports__;

})();