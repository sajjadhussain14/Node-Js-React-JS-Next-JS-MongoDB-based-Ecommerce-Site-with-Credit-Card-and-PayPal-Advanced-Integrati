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
exports.id = "pages/api/brand/[slug]";
exports.ids = ["pages/api/brand/[slug]"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./src/pages/api/brand/[slug].js":
/*!***************************************!*\
  !*** ./src/pages/api/brand/[slug].js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst fsp = (__webpack_require__(/*! fs */ \"fs\").promises);\nasync function handler(req, res) {\n    res.setHeader(\"Cache-Control\", \"s-maxage=86400\");\n    const { slug  } = req.query;\n    let dataURL = process.cwd() + `/data/${slug}.json`;\n    const rawData = await fsp.readFile(dataURL);\n    const data = JSON.parse(rawData);\n    res.status(200).json(data);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2JyYW5kL1tzbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsR0FBRyxHQUFHQyw4Q0FBc0I7QUFFbkIsZUFBZUUsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5Q0EsR0FBRyxDQUFDQyxTQUFTLENBQUMsZUFBZSxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFFakQsTUFBTSxFQUFFQyxJQUFJLEdBQUUsR0FBR0gsR0FBRyxDQUFDSSxLQUFLO0lBQzFCLElBQUlDLE9BQU8sR0FBR0MsT0FBTyxDQUFDQyxHQUFHLEVBQUUsR0FBRyxDQUFDLE1BQU0sRUFBRUosSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNsRCxNQUFNSyxPQUFPLEdBQUcsTUFBTVosR0FBRyxDQUFDYSxRQUFRLENBQUNKLE9BQU8sQ0FBQztJQUMzQyxNQUFNSyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDSixPQUFPLENBQUM7SUFFaENQLEdBQUcsQ0FBQ1ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNKLElBQUksQ0FBQyxDQUFDO0NBQzVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9kZXJuLy4vc3JjL3BhZ2VzL2FwaS9icmFuZC9bc2x1Z10uanM/MzViOCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmc3AgPSByZXF1aXJlKFwiZnNcIikucHJvbWlzZXM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgcmVzLnNldEhlYWRlcihcIkNhY2hlLUNvbnRyb2xcIiwgXCJzLW1heGFnZT04NjQwMFwiKTtcclxuXHJcbiAgY29uc3QgeyBzbHVnIH0gPSByZXEucXVlcnk7XHJcbiAgbGV0IGRhdGFVUkwgPSBwcm9jZXNzLmN3ZCgpICsgYC9kYXRhLyR7c2x1Z30uanNvbmA7XHJcbiAgY29uc3QgcmF3RGF0YSA9IGF3YWl0IGZzcC5yZWFkRmlsZShkYXRhVVJMKTtcclxuICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShyYXdEYXRhKTtcclxuXHJcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oZGF0YSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImZzcCIsInJlcXVpcmUiLCJwcm9taXNlcyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJzZXRIZWFkZXIiLCJzbHVnIiwicXVlcnkiLCJkYXRhVVJMIiwicHJvY2VzcyIsImN3ZCIsInJhd0RhdGEiLCJyZWFkRmlsZSIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/brand/[slug].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/brand/[slug].js"));
module.exports = __webpack_exports__;

})();