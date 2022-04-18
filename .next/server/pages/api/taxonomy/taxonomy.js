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
exports.id = "pages/api/taxonomy/taxonomy";
exports.ids = ["pages/api/taxonomy/taxonomy"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./src/pages/api/taxonomy/taxonomy.js":
/*!********************************************!*\
  !*** ./src/pages/api/taxonomy/taxonomy.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst fsp = (__webpack_require__(/*! fs */ \"fs\").promises);\nasync function handler(req, res) {\n    res.setHeader(\"Cache-Control\", \"s-maxage=86400\");\n    let { URL  } = process.env;\n    let product = {};\n    let taxonomy = [];\n    try {\n        let dataURL = process.cwd() + `/data/taxonomy.json`;\n        const rawData = await fsp.readFile(dataURL);\n        const data = JSON.parse(rawData);\n        taxonomy = data;\n    } catch (err) {\n        taxonomy = [];\n    }\n    res.status(200).json(taxonomy);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3RheG9ub215L3RheG9ub215LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxHQUFHLEdBQUdDLDhDQUFzQjtBQUVuQixlQUFlRSxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDQSxHQUFHLENBQUNDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUVqRCxJQUFJLEVBQUVDLEdBQUcsR0FBRSxHQUFHQyxPQUFPLENBQUNDLEdBQUc7SUFDekIsSUFBSUMsT0FBTyxHQUFHLEVBQUU7SUFDaEIsSUFBSUMsUUFBUSxHQUFHLEVBQUU7SUFDakIsSUFBSTtRQUNGLElBQUlDLE9BQU8sR0FBR0osT0FBTyxDQUFDSyxHQUFHLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDO1FBQ25ELE1BQU1DLE9BQU8sR0FBRyxNQUFNZCxHQUFHLENBQUNlLFFBQVEsQ0FBQ0gsT0FBTyxDQUFDO1FBQzNDLE1BQU1JLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNKLE9BQU8sQ0FBQztRQUNoQ0gsUUFBUSxHQUFHSyxJQUFJLENBQUM7S0FDakIsQ0FBQyxPQUFPRyxHQUFHLEVBQUU7UUFDWlIsUUFBUSxHQUFHLEVBQUUsQ0FBQztLQUNmO0lBRUROLEdBQUcsQ0FBQ2UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNWLFFBQVEsQ0FBQyxDQUFDO0NBQ2hDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9kZXJuLy4vc3JjL3BhZ2VzL2FwaS90YXhvbm9teS90YXhvbm9teS5qcz82NjVmIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZzcCA9IHJlcXVpcmUoXCJmc1wiKS5wcm9taXNlcztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICByZXMuc2V0SGVhZGVyKFwiQ2FjaGUtQ29udHJvbFwiLCBcInMtbWF4YWdlPTg2NDAwXCIpO1xyXG5cclxuICBsZXQgeyBVUkwgfSA9IHByb2Nlc3MuZW52O1xyXG4gIGxldCBwcm9kdWN0ID0ge307XHJcbiAgbGV0IHRheG9ub215ID0gW107XHJcbiAgdHJ5IHtcclxuICAgIGxldCBkYXRhVVJMID0gcHJvY2Vzcy5jd2QoKSArIGAvZGF0YS90YXhvbm9teS5qc29uYDtcclxuICAgIGNvbnN0IHJhd0RhdGEgPSBhd2FpdCBmc3AucmVhZEZpbGUoZGF0YVVSTCk7XHJcbiAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShyYXdEYXRhKTtcclxuICAgIHRheG9ub215ID0gZGF0YTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHRheG9ub215ID0gW107XHJcbiAgfVxyXG5cclxuICByZXMuc3RhdHVzKDIwMCkuanNvbih0YXhvbm9teSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImZzcCIsInJlcXVpcmUiLCJwcm9taXNlcyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJzZXRIZWFkZXIiLCJVUkwiLCJwcm9jZXNzIiwiZW52IiwicHJvZHVjdCIsInRheG9ub215IiwiZGF0YVVSTCIsImN3ZCIsInJhd0RhdGEiLCJyZWFkRmlsZSIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJlcnIiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/taxonomy/taxonomy.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/taxonomy/taxonomy.js"));
module.exports = __webpack_exports__;

})();