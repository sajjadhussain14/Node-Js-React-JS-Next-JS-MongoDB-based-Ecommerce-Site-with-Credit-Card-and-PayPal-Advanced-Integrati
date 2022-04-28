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
exports.id = "pages/api/product/[id]";
exports.ids = ["pages/api/product/[id]"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./src/pages/api/product/[id].js":
/*!***************************************!*\
  !*** ./src/pages/api/product/[id].js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst fsp = (__webpack_require__(/*! fs */ \"fs\").promises);\nasync function handler(req, res) {\n    res.setHeader(\"Cache-Control\", \"s-maxage=86400\");\n    let product = {};\n    const { id  } = req.query;\n    try {\n        let dataURL = process.cwd() + `/data/all-products.json`;\n        const rawData = await fsp.readFile(dataURL);\n        const data = JSON.parse(rawData);\n        let pData = data.filter((pro)=>pro.price > 0\n        );\n        product = pData.sort(()=>0.5 - Math.random()\n        )[0];\n    } catch (err) {\n        console.log(err);\n    }\n    //let product = data.find((prod) => prod.id == id);\n    if (!product || !product.name) {\n        product = {};\n    }\n    res.status(200).json(product);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3Byb2R1Y3QvW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsR0FBRyxHQUFHQyw4Q0FBc0I7QUFFbkIsZUFBZUUsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5Q0EsR0FBRyxDQUFDQyxTQUFTLENBQUMsZUFBZSxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFFakQsSUFBSUMsT0FBTyxHQUFHLEVBQUU7SUFDaEIsTUFBTSxFQUFFQyxFQUFFLEdBQUUsR0FBR0osR0FBRyxDQUFDSyxLQUFLO0lBQ3hCLElBQUk7UUFDRixJQUFJQyxPQUFPLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQztRQUN2RCxNQUFNQyxPQUFPLEdBQUcsTUFBTWIsR0FBRyxDQUFDYyxRQUFRLENBQUNKLE9BQU8sQ0FBQztRQUMzQyxNQUFNSyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDSixPQUFPLENBQUM7UUFDaEMsSUFBSUssS0FBSyxHQUFHSCxJQUFJLENBQUNJLE1BQU0sQ0FBQyxDQUFDQyxHQUFHLEdBQUtBLEdBQUcsQ0FBQ0MsS0FBSyxHQUFHLENBQUM7UUFBQSxDQUFDO1FBQy9DZCxPQUFPLEdBQUdXLEtBQUssQ0FBQ0ksSUFBSSxDQUFDLElBQU0sR0FBRyxHQUFHQyxJQUFJLENBQUNDLE1BQU0sRUFBRTtRQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNwRCxDQUFDLE9BQU9DLEdBQUcsRUFBRTtRQUNaQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRyxDQUFDLENBQUM7S0FDbEI7SUFFRCxtREFBbUQ7SUFDbkQsSUFBSSxDQUFDbEIsT0FBTyxJQUFJLENBQUNBLE9BQU8sQ0FBQ3FCLElBQUksRUFBRTtRQUM3QnJCLE9BQU8sR0FBRyxFQUFFLENBQUM7S0FDZDtJQUNERixHQUFHLENBQUN3QixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ3ZCLE9BQU8sQ0FBQyxDQUFDO0NBQy9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9kZXJuLy4vc3JjL3BhZ2VzL2FwaS9wcm9kdWN0L1tpZF0uanM/NjczYiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmc3AgPSByZXF1aXJlKFwiZnNcIikucHJvbWlzZXM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgcmVzLnNldEhlYWRlcihcIkNhY2hlLUNvbnRyb2xcIiwgXCJzLW1heGFnZT04NjQwMFwiKTtcclxuXHJcbiAgbGV0IHByb2R1Y3QgPSB7fTtcclxuICBjb25zdCB7IGlkIH0gPSByZXEucXVlcnk7XHJcbiAgdHJ5IHtcclxuICAgIGxldCBkYXRhVVJMID0gcHJvY2Vzcy5jd2QoKSArIGAvZGF0YS9hbGwtcHJvZHVjdHMuanNvbmA7XHJcbiAgICBjb25zdCByYXdEYXRhID0gYXdhaXQgZnNwLnJlYWRGaWxlKGRhdGFVUkwpO1xyXG4gICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UocmF3RGF0YSk7XHJcbiAgICBsZXQgcERhdGEgPSBkYXRhLmZpbHRlcigocHJvKSA9PiBwcm8ucHJpY2UgPiAwKTtcclxuICAgIHByb2R1Y3QgPSBwRGF0YS5zb3J0KCgpID0+IDAuNSAtIE1hdGgucmFuZG9tKCkpWzBdO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coZXJyKTtcclxuICB9XHJcblxyXG4gIC8vbGV0IHByb2R1Y3QgPSBkYXRhLmZpbmQoKHByb2QpID0+IHByb2QuaWQgPT0gaWQpO1xyXG4gIGlmICghcHJvZHVjdCB8fCAhcHJvZHVjdC5uYW1lKSB7XHJcbiAgICBwcm9kdWN0ID0ge307XHJcbiAgfVxyXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHByb2R1Y3QpO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJmc3AiLCJyZXF1aXJlIiwicHJvbWlzZXMiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwic2V0SGVhZGVyIiwicHJvZHVjdCIsImlkIiwicXVlcnkiLCJkYXRhVVJMIiwicHJvY2VzcyIsImN3ZCIsInJhd0RhdGEiLCJyZWFkRmlsZSIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJwRGF0YSIsImZpbHRlciIsInBybyIsInByaWNlIiwic29ydCIsIk1hdGgiLCJyYW5kb20iLCJlcnIiLCJjb25zb2xlIiwibG9nIiwibmFtZSIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/product/[id].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/product/[id].js"));
module.exports = __webpack_exports__;

})();