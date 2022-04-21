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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst fsp = (__webpack_require__(/*! fs */ \"fs\").promises);\nconst md5 = __webpack_require__(/*! md5 */ \"md5\");\nasync function handler(req, res) {\n    let data = req.body;\n    let login_email = data.email;\n    let login_password = data.password;\n    let dataURL = process.cwd() + `/data/users/users.json`;\n    console.log(\"here\");\n    const rawData = await fsp.readFile(dataURL);\n    let usersData = [];\n    try {\n        usersData = JSON.parse(rawData);\n    } catch (err) {\n        usersData = [];\n    }\n    let record = usersData.filter((person)=>person.credentials.email == login_email && person.credentials.password == md5(login_password)\n    );\n    let stCode = \"409\";\n    let response = \"\";\n    let ID = \"\";\n    if (record && record.length > 0) {\n        stCode = 200;\n        response = \"Login Successfully\";\n        ID = record[0].id;\n    } else {\n        stCode = 409;\n        response = \"Login Failed\";\n    }\n    res.status(stCode).json({\n        response: response,\n        status: stCode,\n        data: {\n            ID: ID\n        }\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2FjY291bnQvYXV0aGVudGljYXRlVXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsR0FBRyxHQUFHQyw4Q0FBc0I7QUFDbEMsTUFBTUUsR0FBRyxHQUFHRixtQkFBTyxDQUFDLGdCQUFLLENBQUM7QUFFWCxlQUFlRyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLElBQUlDLElBQUksR0FBR0YsR0FBRyxDQUFDRyxJQUFJO0lBQ25CLElBQUlDLFdBQVcsR0FBR0YsSUFBSSxDQUFDRyxLQUFLO0lBQzVCLElBQUlDLGNBQWMsR0FBR0osSUFBSSxDQUFDSyxRQUFRO0lBQ2xDLElBQUlDLE9BQU8sR0FBR0MsT0FBTyxDQUFDQyxHQUFHLEVBQUUsR0FBRyxDQUFDLHNCQUFzQixDQUFDO0lBQ3REQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUVwQixNQUFNQyxPQUFPLEdBQUcsTUFBTWxCLEdBQUcsQ0FBQ21CLFFBQVEsQ0FBQ04sT0FBTyxDQUFDO0lBQzNDLElBQUlPLFNBQVMsR0FBRyxFQUFFO0lBQ2xCLElBQUk7UUFDRkEsU0FBUyxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0osT0FBTyxDQUFDLENBQUM7S0FDakMsQ0FBQyxPQUFPSyxHQUFHLEVBQUU7UUFDWkgsU0FBUyxHQUFHLEVBQUUsQ0FBQztLQUNoQjtJQUNELElBQUlJLE1BQU0sR0FBR0osU0FBUyxDQUFDSyxNQUFNLENBQzNCLENBQUNDLE1BQU0sR0FDTEEsTUFBTSxDQUFDQyxXQUFXLENBQUNqQixLQUFLLElBQUlELFdBQVcsSUFDdkNpQixNQUFNLENBQUNDLFdBQVcsQ0FBQ2YsUUFBUSxJQUFJVCxHQUFHLENBQUNRLGNBQWMsQ0FBQztJQUFBLENBQ3JEO0lBRUQsSUFBSWlCLE1BQU0sR0FBRyxLQUFLO0lBQ2xCLElBQUlDLFFBQVEsR0FBRyxFQUFFO0lBQ2pCLElBQUlDLEVBQUUsR0FBRyxFQUFFO0lBQ1gsSUFBSU4sTUFBTSxJQUFJQSxNQUFNLENBQUNPLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDL0JILE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDYkMsUUFBUSxHQUFHLG9CQUFvQixDQUFDO1FBRWhDQyxFQUFFLEdBQUdOLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQ1EsRUFBRSxDQUFDO0tBQ25CLE1BQU07UUFDTEosTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUNiQyxRQUFRLEdBQUcsY0FBYyxDQUFDO0tBQzNCO0lBQ0R2QixHQUFHLENBQUMyQixNQUFNLENBQUNMLE1BQU0sQ0FBQyxDQUFDTSxJQUFJLENBQUM7UUFDdEJMLFFBQVEsRUFBRUEsUUFBUTtRQUNsQkksTUFBTSxFQUFFTCxNQUFNO1FBQ2RyQixJQUFJLEVBQUU7WUFBRXVCLEVBQUUsRUFBRUEsRUFBRTtTQUFFO0tBQ2pCLENBQUMsQ0FBQztDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9kZXJuLy4vc3JjL3BhZ2VzL2FwaS9hY2NvdW50L2F1dGhlbnRpY2F0ZVVzZXIuanM/OTk5NiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmc3AgPSByZXF1aXJlKFwiZnNcIikucHJvbWlzZXM7XHJcbmNvbnN0IG1kNSA9IHJlcXVpcmUoXCJtZDVcIik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgbGV0IGRhdGEgPSByZXEuYm9keTtcclxuICBsZXQgbG9naW5fZW1haWwgPSBkYXRhLmVtYWlsO1xyXG4gIGxldCBsb2dpbl9wYXNzd29yZCA9IGRhdGEucGFzc3dvcmQ7XHJcbiAgbGV0IGRhdGFVUkwgPSBwcm9jZXNzLmN3ZCgpICsgYC9kYXRhL3VzZXJzL3VzZXJzLmpzb25gO1xyXG4gIGNvbnNvbGUubG9nKFwiaGVyZVwiKTtcclxuXHJcbiAgY29uc3QgcmF3RGF0YSA9IGF3YWl0IGZzcC5yZWFkRmlsZShkYXRhVVJMKTtcclxuICBsZXQgdXNlcnNEYXRhID0gW107XHJcbiAgdHJ5IHtcclxuICAgIHVzZXJzRGF0YSA9IEpTT04ucGFyc2UocmF3RGF0YSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB1c2Vyc0RhdGEgPSBbXTtcclxuICB9XHJcbiAgbGV0IHJlY29yZCA9IHVzZXJzRGF0YS5maWx0ZXIoXHJcbiAgICAocGVyc29uKSA9PlxyXG4gICAgICBwZXJzb24uY3JlZGVudGlhbHMuZW1haWwgPT0gbG9naW5fZW1haWwgJiZcclxuICAgICAgcGVyc29uLmNyZWRlbnRpYWxzLnBhc3N3b3JkID09IG1kNShsb2dpbl9wYXNzd29yZClcclxuICApO1xyXG5cclxuICBsZXQgc3RDb2RlID0gXCI0MDlcIjtcclxuICBsZXQgcmVzcG9uc2UgPSBcIlwiO1xyXG4gIGxldCBJRCA9IFwiXCI7XHJcbiAgaWYgKHJlY29yZCAmJiByZWNvcmQubGVuZ3RoID4gMCkge1xyXG4gICAgc3RDb2RlID0gMjAwO1xyXG4gICAgcmVzcG9uc2UgPSBcIkxvZ2luIFN1Y2Nlc3NmdWxseVwiO1xyXG5cclxuICAgIElEID0gcmVjb3JkWzBdLmlkO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzdENvZGUgPSA0MDk7XHJcbiAgICByZXNwb25zZSA9IFwiTG9naW4gRmFpbGVkXCI7XHJcbiAgfVxyXG4gIHJlcy5zdGF0dXMoc3RDb2RlKS5qc29uKHtcclxuICAgIHJlc3BvbnNlOiByZXNwb25zZSxcclxuICAgIHN0YXR1czogc3RDb2RlLFxyXG4gICAgZGF0YTogeyBJRDogSUQgfSxcclxuICB9KTtcclxufVxyXG4iXSwibmFtZXMiOlsiZnNwIiwicmVxdWlyZSIsInByb21pc2VzIiwibWQ1IiwiaGFuZGxlciIsInJlcSIsInJlcyIsImRhdGEiLCJib2R5IiwibG9naW5fZW1haWwiLCJlbWFpbCIsImxvZ2luX3Bhc3N3b3JkIiwicGFzc3dvcmQiLCJkYXRhVVJMIiwicHJvY2VzcyIsImN3ZCIsImNvbnNvbGUiLCJsb2ciLCJyYXdEYXRhIiwicmVhZEZpbGUiLCJ1c2Vyc0RhdGEiLCJKU09OIiwicGFyc2UiLCJlcnIiLCJyZWNvcmQiLCJmaWx0ZXIiLCJwZXJzb24iLCJjcmVkZW50aWFscyIsInN0Q29kZSIsInJlc3BvbnNlIiwiSUQiLCJsZW5ndGgiLCJpZCIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/account/authenticateUser.js\n");

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