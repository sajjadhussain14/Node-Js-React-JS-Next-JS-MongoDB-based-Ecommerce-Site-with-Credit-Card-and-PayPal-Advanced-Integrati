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
exports.id = "pages/api/settings/settings";
exports.ids = ["pages/api/settings/settings"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./src/pages/api/settings/settings.js":
/*!********************************************!*\
  !*** ./src/pages/api/settings/settings.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst fsp = (__webpack_require__(/*! fs */ \"fs\").promises);\nasync function handler(req, res) {\n    res.setHeader(\"Cache-Control\", \"s-maxage=86400\");\n    const { slug  } = req.query;\n    let settingsURL = process.cwd() + `/data/settings.json`;\n    const rawData = await fsp.readFile(settingsURL);\n    const data = JSON.parse(rawData);\n    res.status(200).json(data);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3NldHRpbmdzL3NldHRpbmdzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxHQUFHLEdBQUdDLDhDQUFzQjtBQUVuQixlQUFlRSxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDQSxHQUFHLENBQUNDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUVqRCxNQUFNLEVBQUVDLElBQUksR0FBRSxHQUFHSCxHQUFHLENBQUNJLEtBQUs7SUFDMUIsSUFBSUMsV0FBVyxHQUFHQyxPQUFPLENBQUNDLEdBQUcsRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUM7SUFDdkQsTUFBTUMsT0FBTyxHQUFHLE1BQU1aLEdBQUcsQ0FBQ2EsUUFBUSxDQUFDSixXQUFXLENBQUM7SUFDL0MsTUFBTUssSUFBSSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0osT0FBTyxDQUFDO0lBRWhDUCxHQUFHLENBQUNZLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDSixJQUFJLENBQUMsQ0FBQztDQUM1QiIsInNvdXJjZXMiOlsid2VicGFjazovL21vZGVybi8uL3NyYy9wYWdlcy9hcGkvc2V0dGluZ3Mvc2V0dGluZ3MuanM/OTE1NCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmc3AgPSByZXF1aXJlKFwiZnNcIikucHJvbWlzZXM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgcmVzLnNldEhlYWRlcihcIkNhY2hlLUNvbnRyb2xcIiwgXCJzLW1heGFnZT04NjQwMFwiKTtcclxuXHJcbiAgY29uc3QgeyBzbHVnIH0gPSByZXEucXVlcnk7XHJcbiAgbGV0IHNldHRpbmdzVVJMID0gcHJvY2Vzcy5jd2QoKSArIGAvZGF0YS9zZXR0aW5ncy5qc29uYDtcclxuICBjb25zdCByYXdEYXRhID0gYXdhaXQgZnNwLnJlYWRGaWxlKHNldHRpbmdzVVJMKTtcclxuICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShyYXdEYXRhKTtcclxuXHJcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oZGF0YSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImZzcCIsInJlcXVpcmUiLCJwcm9taXNlcyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJzZXRIZWFkZXIiLCJzbHVnIiwicXVlcnkiLCJzZXR0aW5nc1VSTCIsInByb2Nlc3MiLCJjd2QiLCJyYXdEYXRhIiwicmVhZEZpbGUiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/settings/settings.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/settings/settings.js"));
module.exports = __webpack_exports__;

})();