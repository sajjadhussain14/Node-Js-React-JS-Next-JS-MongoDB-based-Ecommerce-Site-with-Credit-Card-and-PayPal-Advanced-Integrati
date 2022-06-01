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
exports.id = "pages/api/products/[id]";
exports.ids = ["pages/api/products/[id]"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./src/pages/api/products/[id].js":
/*!****************************************!*\
  !*** ./src/pages/api/products/[id].js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst fsp = (__webpack_require__(/*! fs */ \"fs\").promises);\nasync function handler(req, res) {\n    res.setHeader(\"Cache-Control\", \"s-maxage=86400\");\n    let product = {};\n    const { id  } = req.query;\n    try {\n        let dataURL = process.cwd() + `/data/all-products.json`;\n        const rawData = await fsp.readFile(dataURL);\n        const data = JSON.parse(rawData);\n        let pData = data.filter((pro)=>pro.price > 0\n        );\n        product = pData.sort(()=>0.5 - Math.random()\n        )[0];\n    } catch (err) {\n        console.log(err);\n        product = {};\n    }\n    //let product = data.find((prod) => prod.id == id);\n    if (!product || !product.name) {\n        product = {};\n    }\n    res.status(200).json(product);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3Byb2R1Y3RzL1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLEdBQUcsR0FBR0MsOENBQXNCO0FBRW5CLGVBQWVFLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUNBLEdBQUcsQ0FBQ0MsU0FBUyxDQUFDLGVBQWUsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBRWpELElBQUlDLE9BQU8sR0FBRyxFQUFFO0lBQ2hCLE1BQU0sRUFBRUMsRUFBRSxHQUFFLEdBQUdKLEdBQUcsQ0FBQ0ssS0FBSztJQUN4QixJQUFJO1FBQ0YsSUFBSUMsT0FBTyxHQUFHQyxPQUFPLENBQUNDLEdBQUcsRUFBRSxHQUFHLENBQUMsdUJBQXVCLENBQUM7UUFDdkQsTUFBTUMsT0FBTyxHQUFHLE1BQU1iLEdBQUcsQ0FBQ2MsUUFBUSxDQUFDSixPQUFPLENBQUM7UUFDM0MsTUFBTUssSUFBSSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0osT0FBTyxDQUFDO1FBQ2hDLElBQUlLLEtBQUssR0FBR0gsSUFBSSxDQUFDSSxNQUFNLENBQUMsQ0FBQ0MsR0FBRyxHQUFLQSxHQUFHLENBQUNDLEtBQUssR0FBRyxDQUFDO1FBQUEsQ0FBQztRQUMvQ2QsT0FBTyxHQUFHVyxLQUFLLENBQUNJLElBQUksQ0FBQyxJQUFNLEdBQUcsR0FBR0MsSUFBSSxDQUFDQyxNQUFNLEVBQUU7UUFBQSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDcEQsQ0FBQyxPQUFPQyxHQUFHLEVBQUU7UUFDWkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCbEIsT0FBTyxHQUFHLEVBQUUsQ0FBQztLQUNkO0lBRUQsbURBQW1EO0lBQ25ELElBQUksQ0FBQ0EsT0FBTyxJQUFJLENBQUNBLE9BQU8sQ0FBQ3FCLElBQUksRUFBRTtRQUM3QnJCLE9BQU8sR0FBRyxFQUFFLENBQUM7S0FDZDtJQUNERixHQUFHLENBQUN3QixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ3ZCLE9BQU8sQ0FBQyxDQUFDO0NBQy9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9kZXJuLy4vc3JjL3BhZ2VzL2FwaS9wcm9kdWN0cy9baWRdLmpzPzY5OGYiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZnNwID0gcmVxdWlyZShcImZzXCIpLnByb21pc2VzO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIHJlcy5zZXRIZWFkZXIoXCJDYWNoZS1Db250cm9sXCIsIFwicy1tYXhhZ2U9ODY0MDBcIik7XHJcblxyXG4gIGxldCBwcm9kdWN0ID0ge307XHJcbiAgY29uc3QgeyBpZCB9ID0gcmVxLnF1ZXJ5O1xyXG4gIHRyeSB7XHJcbiAgICBsZXQgZGF0YVVSTCA9IHByb2Nlc3MuY3dkKCkgKyBgL2RhdGEvYWxsLXByb2R1Y3RzLmpzb25gO1xyXG4gICAgY29uc3QgcmF3RGF0YSA9IGF3YWl0IGZzcC5yZWFkRmlsZShkYXRhVVJMKTtcclxuICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHJhd0RhdGEpO1xyXG4gICAgbGV0IHBEYXRhID0gZGF0YS5maWx0ZXIoKHBybykgPT4gcHJvLnByaWNlID4gMCk7XHJcbiAgICBwcm9kdWN0ID0gcERhdGEuc29ydCgoKSA9PiAwLjUgLSBNYXRoLnJhbmRvbSgpKVswXTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICBwcm9kdWN0ID0ge307XHJcbiAgfVxyXG5cclxuICAvL2xldCBwcm9kdWN0ID0gZGF0YS5maW5kKChwcm9kKSA9PiBwcm9kLmlkID09IGlkKTtcclxuICBpZiAoIXByb2R1Y3QgfHwgIXByb2R1Y3QubmFtZSkge1xyXG4gICAgcHJvZHVjdCA9IHt9O1xyXG4gIH1cclxuICByZXMuc3RhdHVzKDIwMCkuanNvbihwcm9kdWN0KTtcclxufVxyXG4iXSwibmFtZXMiOlsiZnNwIiwicmVxdWlyZSIsInByb21pc2VzIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInNldEhlYWRlciIsInByb2R1Y3QiLCJpZCIsInF1ZXJ5IiwiZGF0YVVSTCIsInByb2Nlc3MiLCJjd2QiLCJyYXdEYXRhIiwicmVhZEZpbGUiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwicERhdGEiLCJmaWx0ZXIiLCJwcm8iLCJwcmljZSIsInNvcnQiLCJNYXRoIiwicmFuZG9tIiwiZXJyIiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/products/[id].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/products/[id].js"));
module.exports = __webpack_exports__;

})();