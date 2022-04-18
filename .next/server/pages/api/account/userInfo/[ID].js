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
exports.id = "pages/api/account/userInfo/[ID]";
exports.ids = ["pages/api/account/userInfo/[ID]"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./src/pages/api/account/userInfo/[ID].js":
/*!************************************************!*\
  !*** ./src/pages/api/account/userInfo/[ID].js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst fsp = (__webpack_require__(/*! fs */ \"fs\").promises);\nasync function handler(req, res) {\n    res.setHeader(\"Cache-Control\", \"s-maxage=86400\");\n    const { ID  } = req.query;\n    let dataURL = process.cwd() + `/data/users/users.json`;\n    const rawData = await fsp.readFile(dataURL);\n    const usersData = JSON.parse(rawData);\n    let userRecord = usersData.filter((person)=>person.id.toString() == ID.toString()\n    );\n    let stCode = 409;\n    let response = \"\";\n    let userInfo = [];\n    if (userRecord && userRecord.length > 0) {\n        userInfo = userRecord[0];\n        stCode = 200;\n    } else {\n        userInfo = [];\n        stCode = 409;\n    }\n    res.status(stCode).json({\n        response: response,\n        status: stCode,\n        userInfo: userInfo\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2FjY291bnQvdXNlckluZm8vW0lEXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsR0FBRyxHQUFHQyw4Q0FBc0I7QUFFbkIsZUFBZUUsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5Q0EsR0FBRyxDQUFDQyxTQUFTLENBQUMsZUFBZSxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFFakQsTUFBTSxFQUFFQyxFQUFFLEdBQUUsR0FBR0gsR0FBRyxDQUFDSSxLQUFLO0lBQ3hCLElBQUlDLE9BQU8sR0FBR0MsT0FBTyxDQUFDQyxHQUFHLEVBQUUsR0FBRyxDQUFDLHNCQUFzQixDQUFDO0lBQ3RELE1BQU1DLE9BQU8sR0FBRyxNQUFNWixHQUFHLENBQUNhLFFBQVEsQ0FBQ0osT0FBTyxDQUFDO0lBQzNDLE1BQU1LLFNBQVMsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNKLE9BQU8sQ0FBQztJQUNyQyxJQUFJSyxVQUFVLEdBQUdILFNBQVMsQ0FBQ0ksTUFBTSxDQUMvQixDQUFDQyxNQUFNLEdBQUtBLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDQyxRQUFRLEVBQUUsSUFBSWQsRUFBRSxDQUFDYyxRQUFRLEVBQUU7SUFBQSxDQUNsRDtJQUVELElBQUlDLE1BQU0sR0FBRyxHQUFHO0lBQ2hCLElBQUlDLFFBQVEsR0FBRyxFQUFFO0lBQ2pCLElBQUlDLFFBQVEsR0FBRyxFQUFFO0lBQ2pCLElBQUlQLFVBQVUsSUFBSUEsVUFBVSxDQUFDUSxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQ3ZDRCxRQUFRLEdBQUdQLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QkssTUFBTSxHQUFHLEdBQUcsQ0FBQztLQUNkLE1BQU07UUFDTEUsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkRixNQUFNLEdBQUcsR0FBRyxDQUFDO0tBQ2Q7SUFDRGpCLEdBQUcsQ0FBQ3FCLE1BQU0sQ0FBQ0osTUFBTSxDQUFDLENBQUNLLElBQUksQ0FBQztRQUN0QkosUUFBUSxFQUFFQSxRQUFRO1FBQ2xCRyxNQUFNLEVBQUVKLE1BQU07UUFDZEUsUUFBUSxFQUFFQSxRQUFRO0tBQ25CLENBQUMsQ0FBQztDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9kZXJuLy4vc3JjL3BhZ2VzL2FwaS9hY2NvdW50L3VzZXJJbmZvL1tJRF0uanM/MGU0MiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmc3AgPSByZXF1aXJlKFwiZnNcIikucHJvbWlzZXM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgcmVzLnNldEhlYWRlcihcIkNhY2hlLUNvbnRyb2xcIiwgXCJzLW1heGFnZT04NjQwMFwiKTtcclxuXHJcbiAgY29uc3QgeyBJRCB9ID0gcmVxLnF1ZXJ5O1xyXG4gIGxldCBkYXRhVVJMID0gcHJvY2Vzcy5jd2QoKSArIGAvZGF0YS91c2Vycy91c2Vycy5qc29uYDtcclxuICBjb25zdCByYXdEYXRhID0gYXdhaXQgZnNwLnJlYWRGaWxlKGRhdGFVUkwpO1xyXG4gIGNvbnN0IHVzZXJzRGF0YSA9IEpTT04ucGFyc2UocmF3RGF0YSk7XHJcbiAgbGV0IHVzZXJSZWNvcmQgPSB1c2Vyc0RhdGEuZmlsdGVyKFxyXG4gICAgKHBlcnNvbikgPT4gcGVyc29uLmlkLnRvU3RyaW5nKCkgPT0gSUQudG9TdHJpbmcoKVxyXG4gICk7XHJcblxyXG4gIGxldCBzdENvZGUgPSA0MDk7XHJcbiAgbGV0IHJlc3BvbnNlID0gXCJcIjtcclxuICBsZXQgdXNlckluZm8gPSBbXTtcclxuICBpZiAodXNlclJlY29yZCAmJiB1c2VyUmVjb3JkLmxlbmd0aCA+IDApIHtcclxuICAgIHVzZXJJbmZvID0gdXNlclJlY29yZFswXTtcclxuICAgIHN0Q29kZSA9IDIwMDtcclxuICB9IGVsc2Uge1xyXG4gICAgdXNlckluZm8gPSBbXTtcclxuICAgIHN0Q29kZSA9IDQwOTtcclxuICB9XHJcbiAgcmVzLnN0YXR1cyhzdENvZGUpLmpzb24oe1xyXG4gICAgcmVzcG9uc2U6IHJlc3BvbnNlLFxyXG4gICAgc3RhdHVzOiBzdENvZGUsXHJcbiAgICB1c2VySW5mbzogdXNlckluZm8sXHJcbiAgfSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImZzcCIsInJlcXVpcmUiLCJwcm9taXNlcyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJzZXRIZWFkZXIiLCJJRCIsInF1ZXJ5IiwiZGF0YVVSTCIsInByb2Nlc3MiLCJjd2QiLCJyYXdEYXRhIiwicmVhZEZpbGUiLCJ1c2Vyc0RhdGEiLCJKU09OIiwicGFyc2UiLCJ1c2VyUmVjb3JkIiwiZmlsdGVyIiwicGVyc29uIiwiaWQiLCJ0b1N0cmluZyIsInN0Q29kZSIsInJlc3BvbnNlIiwidXNlckluZm8iLCJsZW5ndGgiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/account/userInfo/[ID].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/account/userInfo/[ID].js"));
module.exports = __webpack_exports__;

})();