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
exports.id = "pages/api/products/realtedProducts/[...args]";
exports.ids = ["pages/api/products/realtedProducts/[...args]"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./src/pages/api/products/realtedProducts/[...args].js":
/*!*************************************************************!*\
  !*** ./src/pages/api/products/realtedProducts/[...args].js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst fsp = (__webpack_require__(/*! fs */ \"fs\").promises);\nasync function handler(req, res) {\n    res.setHeader(\"Cache-Control\", \"s-maxage=86400\");\n    let products = [];\n    let dept = \"\";\n    let limit = 0;\n    const { args  } = req.query;\n    dept = args[0];\n    limit = args[1];\n    try {\n        let dataURL = process.cwd() + `/data/all-products.json`;\n        const rawData = await fsp.readFile(dataURL);\n        const data = JSON.parse(rawData);\n        products = data.filter((prod)=>prod.Dept.toLowerCase() == dept.toLowerCase()\n        );\n        if (products.length > limit) {\n            products.length = limit;\n        }\n    // products = prods;\n    } catch (err) {\n        products = [];\n        console.log(err);\n    }\n    //let product = data.find((prod) => prod.id == id);\n    if (!products || products.length < 0) {\n        products = [];\n    }\n    res.status(200).json(products);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3Byb2R1Y3RzL3JlYWx0ZWRQcm9kdWN0cy9bLi4uYXJnc10uanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLEdBQUcsR0FBR0MsOENBQXNCO0FBRW5CLGVBQWVFLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUNBLEdBQUcsQ0FBQ0MsU0FBUyxDQUFDLGVBQWUsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBRWpELElBQUlDLFFBQVEsR0FBRyxFQUFFO0lBQ2pCLElBQUlDLElBQUksR0FBRyxFQUFFO0lBQ2IsSUFBSUMsS0FBSyxHQUFHLENBQUM7SUFDYixNQUFNLEVBQUVDLElBQUksR0FBRSxHQUFHTixHQUFHLENBQUNPLEtBQUs7SUFFMUJILElBQUksR0FBR0UsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2ZELEtBQUssR0FBR0MsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRWhCLElBQUk7UUFDRixJQUFJRSxPQUFPLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQztRQUN2RCxNQUFNQyxPQUFPLEdBQUcsTUFBTWYsR0FBRyxDQUFDZ0IsUUFBUSxDQUFDSixPQUFPLENBQUM7UUFDM0MsTUFBTUssSUFBSSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0osT0FBTyxDQUFDO1FBRWhDUixRQUFRLEdBQUdVLElBQUksQ0FBQ0csTUFBTSxDQUNwQixDQUFDQyxJQUFJLEdBQUtBLElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxXQUFXLEVBQUUsSUFBSWYsSUFBSSxDQUFDZSxXQUFXLEVBQUU7UUFBQSxDQUN4RCxDQUFDO1FBRUYsSUFBSWhCLFFBQVEsQ0FBQ2lCLE1BQU0sR0FBR2YsS0FBSyxFQUFFO1lBQzNCRixRQUFRLENBQUNpQixNQUFNLEdBQUdmLEtBQUssQ0FBQztTQUN6QjtJQUNELG9CQUFvQjtLQUNyQixDQUFDLE9BQU9nQixHQUFHLEVBQUU7UUFDWmxCLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZG1CLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixHQUFHLENBQUMsQ0FBQztLQUNsQjtJQUVELG1EQUFtRDtJQUNuRCxJQUFJLENBQUNsQixRQUFRLElBQUlBLFFBQVEsQ0FBQ2lCLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDcENqQixRQUFRLEdBQUcsRUFBRSxDQUFDO0tBQ2Y7SUFDREYsR0FBRyxDQUFDdUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUN0QixRQUFRLENBQUMsQ0FBQztDQUNoQyIsInNvdXJjZXMiOlsid2VicGFjazovL21vZGVybi8uL3NyYy9wYWdlcy9hcGkvcHJvZHVjdHMvcmVhbHRlZFByb2R1Y3RzL1suLi5hcmdzXS5qcz9hZjdhIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZzcCA9IHJlcXVpcmUoXCJmc1wiKS5wcm9taXNlcztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICByZXMuc2V0SGVhZGVyKFwiQ2FjaGUtQ29udHJvbFwiLCBcInMtbWF4YWdlPTg2NDAwXCIpO1xyXG5cclxuICBsZXQgcHJvZHVjdHMgPSBbXTtcclxuICBsZXQgZGVwdCA9IFwiXCI7XHJcbiAgbGV0IGxpbWl0ID0gMDtcclxuICBjb25zdCB7IGFyZ3MgfSA9IHJlcS5xdWVyeTtcclxuXHJcbiAgZGVwdCA9IGFyZ3NbMF07XHJcbiAgbGltaXQgPSBhcmdzWzFdO1xyXG5cclxuICB0cnkge1xyXG4gICAgbGV0IGRhdGFVUkwgPSBwcm9jZXNzLmN3ZCgpICsgYC9kYXRhL2FsbC1wcm9kdWN0cy5qc29uYDtcclxuICAgIGNvbnN0IHJhd0RhdGEgPSBhd2FpdCBmc3AucmVhZEZpbGUoZGF0YVVSTCk7XHJcbiAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShyYXdEYXRhKTtcclxuXHJcbiAgICBwcm9kdWN0cyA9IGRhdGEuZmlsdGVyKFxyXG4gICAgICAocHJvZCkgPT4gcHJvZC5EZXB0LnRvTG93ZXJDYXNlKCkgPT0gZGVwdC50b0xvd2VyQ2FzZSgpXHJcbiAgICApO1xyXG5cclxuICAgIGlmIChwcm9kdWN0cy5sZW5ndGggPiBsaW1pdCkge1xyXG4gICAgICBwcm9kdWN0cy5sZW5ndGggPSBsaW1pdDtcclxuICAgIH1cclxuICAgIC8vIHByb2R1Y3RzID0gcHJvZHM7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBwcm9kdWN0cyA9IFtdO1xyXG4gICAgY29uc29sZS5sb2coZXJyKTtcclxuICB9XHJcblxyXG4gIC8vbGV0IHByb2R1Y3QgPSBkYXRhLmZpbmQoKHByb2QpID0+IHByb2QuaWQgPT0gaWQpO1xyXG4gIGlmICghcHJvZHVjdHMgfHwgcHJvZHVjdHMubGVuZ3RoIDwgMCkge1xyXG4gICAgcHJvZHVjdHMgPSBbXTtcclxuICB9XHJcbiAgcmVzLnN0YXR1cygyMDApLmpzb24ocHJvZHVjdHMpO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJmc3AiLCJyZXF1aXJlIiwicHJvbWlzZXMiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwic2V0SGVhZGVyIiwicHJvZHVjdHMiLCJkZXB0IiwibGltaXQiLCJhcmdzIiwicXVlcnkiLCJkYXRhVVJMIiwicHJvY2VzcyIsImN3ZCIsInJhd0RhdGEiLCJyZWFkRmlsZSIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJmaWx0ZXIiLCJwcm9kIiwiRGVwdCIsInRvTG93ZXJDYXNlIiwibGVuZ3RoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/products/realtedProducts/[...args].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/products/realtedProducts/[...args].js"));
module.exports = __webpack_exports__;

})();