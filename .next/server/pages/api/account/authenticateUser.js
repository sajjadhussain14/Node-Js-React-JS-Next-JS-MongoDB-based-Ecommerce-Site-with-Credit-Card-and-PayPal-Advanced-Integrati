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
exports.id = "pages/api/account/authenticateUser";
exports.ids = ["pages/api/account/authenticateUser"];
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

/***/ "(api)/./src/pages/api/account/authenticateUser.js":
/*!***************************************************!*\
  !*** ./src/pages/api/account/authenticateUser.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst fsp = (__webpack_require__(/*! fs */ \"fs\").promises);\nconst md5 = __webpack_require__(/*! md5 */ \"md5\");\nasync function handler(req, res) {\n    let data = req.body;\n    let login_email = data.email;\n    let login_password = data.password;\n    let dataURL = process.cwd() + `/data/users/users.json`;\n    const rawData = await fsp.readFile(dataURL);\n    const usersData = JSON.parse(rawData);\n    let record = usersData.filter((person)=>person.credentials.email == login_email && person.credentials.password == md5(login_password)\n    );\n    console.log(\"record\", record);\n    let stCode = \"409\";\n    let response = \"\";\n    let ID = \"\";\n    if (record && record.length > 0) {\n        stCode = 200;\n        response = \"Login Successfully\";\n        ID = record[0].id;\n    } else {\n        stCode = 409;\n        response = \"Login Failed\";\n    }\n    res.status(stCode).json({\n        response: response,\n        status: stCode,\n        data: {\n            ID: ID\n        }\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2FjY291bnQvYXV0aGVudGljYXRlVXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsR0FBRyxHQUFHQyw4Q0FBc0I7QUFDbEMsTUFBTUUsR0FBRyxHQUFHRixtQkFBTyxDQUFDLGdCQUFLLENBQUM7QUFFWCxlQUFlRyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLElBQUlDLElBQUksR0FBR0YsR0FBRyxDQUFDRyxJQUFJO0lBQ25CLElBQUlDLFdBQVcsR0FBR0YsSUFBSSxDQUFDRyxLQUFLO0lBQzVCLElBQUlDLGNBQWMsR0FBR0osSUFBSSxDQUFDSyxRQUFRO0lBQ2xDLElBQUlDLE9BQU8sR0FBR0MsT0FBTyxDQUFDQyxHQUFHLEVBQUUsR0FBRyxDQUFDLHNCQUFzQixDQUFDO0lBRXRELE1BQU1DLE9BQU8sR0FBRyxNQUFNaEIsR0FBRyxDQUFDaUIsUUFBUSxDQUFDSixPQUFPLENBQUM7SUFDM0MsTUFBTUssU0FBUyxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0osT0FBTyxDQUFDO0lBQ3JDLElBQUlLLE1BQU0sR0FBR0gsU0FBUyxDQUFDSSxNQUFNLENBQzNCLENBQUNDLE1BQU0sR0FDTEEsTUFBTSxDQUFDQyxXQUFXLENBQUNkLEtBQUssSUFBSUQsV0FBVyxJQUN2Q2MsTUFBTSxDQUFDQyxXQUFXLENBQUNaLFFBQVEsSUFBSVQsR0FBRyxDQUFDUSxjQUFjLENBQUM7SUFBQSxDQUNyRDtJQUVEYyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxRQUFRLEVBQUVMLE1BQU0sQ0FBQyxDQUFDO0lBQzlCLElBQUlNLE1BQU0sR0FBRyxLQUFLO0lBQ2xCLElBQUlDLFFBQVEsR0FBRyxFQUFFO0lBQ2pCLElBQUlDLEVBQUUsR0FBRyxFQUFFO0lBQ1gsSUFBSVIsTUFBTSxJQUFJQSxNQUFNLENBQUNTLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDL0JILE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDYkMsUUFBUSxHQUFHLG9CQUFvQixDQUFDO1FBRWhDQyxFQUFFLEdBQUdSLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQ1UsRUFBRSxDQUFDO0tBQ25CLE1BQU07UUFDTEosTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUNiQyxRQUFRLEdBQUcsY0FBYyxDQUFDO0tBQzNCO0lBQ0R0QixHQUFHLENBQUMwQixNQUFNLENBQUNMLE1BQU0sQ0FBQyxDQUFDTSxJQUFJLENBQUM7UUFDdEJMLFFBQVEsRUFBRUEsUUFBUTtRQUNsQkksTUFBTSxFQUFFTCxNQUFNO1FBQ2RwQixJQUFJLEVBQUU7WUFBRXNCLEVBQUUsRUFBRUEsRUFBRTtTQUFFO0tBQ2pCLENBQUMsQ0FBQztDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9kZXJuLy4vc3JjL3BhZ2VzL2FwaS9hY2NvdW50L2F1dGhlbnRpY2F0ZVVzZXIuanM/OTk5NiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmc3AgPSByZXF1aXJlKFwiZnNcIikucHJvbWlzZXM7XHJcbmNvbnN0IG1kNSA9IHJlcXVpcmUoXCJtZDVcIik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgbGV0IGRhdGEgPSByZXEuYm9keTtcclxuICBsZXQgbG9naW5fZW1haWwgPSBkYXRhLmVtYWlsO1xyXG4gIGxldCBsb2dpbl9wYXNzd29yZCA9IGRhdGEucGFzc3dvcmQ7XHJcbiAgbGV0IGRhdGFVUkwgPSBwcm9jZXNzLmN3ZCgpICsgYC9kYXRhL3VzZXJzL3VzZXJzLmpzb25gO1xyXG5cclxuICBjb25zdCByYXdEYXRhID0gYXdhaXQgZnNwLnJlYWRGaWxlKGRhdGFVUkwpO1xyXG4gIGNvbnN0IHVzZXJzRGF0YSA9IEpTT04ucGFyc2UocmF3RGF0YSk7XHJcbiAgbGV0IHJlY29yZCA9IHVzZXJzRGF0YS5maWx0ZXIoXHJcbiAgICAocGVyc29uKSA9PlxyXG4gICAgICBwZXJzb24uY3JlZGVudGlhbHMuZW1haWwgPT0gbG9naW5fZW1haWwgJiZcclxuICAgICAgcGVyc29uLmNyZWRlbnRpYWxzLnBhc3N3b3JkID09IG1kNShsb2dpbl9wYXNzd29yZClcclxuICApO1xyXG5cclxuICBjb25zb2xlLmxvZyhcInJlY29yZFwiLCByZWNvcmQpO1xyXG4gIGxldCBzdENvZGUgPSBcIjQwOVwiO1xyXG4gIGxldCByZXNwb25zZSA9IFwiXCI7XHJcbiAgbGV0IElEID0gXCJcIjtcclxuICBpZiAocmVjb3JkICYmIHJlY29yZC5sZW5ndGggPiAwKSB7XHJcbiAgICBzdENvZGUgPSAyMDA7XHJcbiAgICByZXNwb25zZSA9IFwiTG9naW4gU3VjY2Vzc2Z1bGx5XCI7XHJcblxyXG4gICAgSUQgPSByZWNvcmRbMF0uaWQ7XHJcbiAgfSBlbHNlIHtcclxuICAgIHN0Q29kZSA9IDQwOTtcclxuICAgIHJlc3BvbnNlID0gXCJMb2dpbiBGYWlsZWRcIjtcclxuICB9XHJcbiAgcmVzLnN0YXR1cyhzdENvZGUpLmpzb24oe1xyXG4gICAgcmVzcG9uc2U6IHJlc3BvbnNlLFxyXG4gICAgc3RhdHVzOiBzdENvZGUsXHJcbiAgICBkYXRhOiB7IElEOiBJRCB9LFxyXG4gIH0pO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJmc3AiLCJyZXF1aXJlIiwicHJvbWlzZXMiLCJtZDUiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiZGF0YSIsImJvZHkiLCJsb2dpbl9lbWFpbCIsImVtYWlsIiwibG9naW5fcGFzc3dvcmQiLCJwYXNzd29yZCIsImRhdGFVUkwiLCJwcm9jZXNzIiwiY3dkIiwicmF3RGF0YSIsInJlYWRGaWxlIiwidXNlcnNEYXRhIiwiSlNPTiIsInBhcnNlIiwicmVjb3JkIiwiZmlsdGVyIiwicGVyc29uIiwiY3JlZGVudGlhbHMiLCJjb25zb2xlIiwibG9nIiwic3RDb2RlIiwicmVzcG9uc2UiLCJJRCIsImxlbmd0aCIsImlkIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/account/authenticateUser.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/account/authenticateUser.js"));
module.exports = __webpack_exports__;

})();