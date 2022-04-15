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
exports.id = "pages/api/product/realtedProducts/[...args]";
exports.ids = ["pages/api/product/realtedProducts/[...args]"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./src/pages/api/product/realtedProducts/[...args].js":
/*!************************************************************!*\
  !*** ./src/pages/api/product/realtedProducts/[...args].js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst fsp = (__webpack_require__(/*! fs */ \"fs\").promises);\nasync function handler(req, res) {\n    res.setHeader(\"Cache-Control\", \"s-maxage=86400\");\n    let products = [];\n    let dept = \"\";\n    let limit = 0;\n    const { args  } = req.query;\n    dept = args[0];\n    limit = args[1];\n    try {\n        let dataURL = process.cwd() + `/data/all-products.json`;\n        const rawData = await fsp.readFile(dataURL);\n        const data = JSON.parse(rawData);\n        products = data.filter((prod)=>prod.Dept.toLowerCase() == dept.toLowerCase()\n        );\n        if (products.length > limit) {\n            products.length = limit;\n        }\n    // products = prods;\n    } catch (err) {\n        products = [];\n        console.log(err);\n    }\n    //let product = data.find((prod) => prod.id == id);\n    if (!products || products.length < 0) {\n        products = [];\n    }\n    res.status(200).json(products);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3Byb2R1Y3QvcmVhbHRlZFByb2R1Y3RzL1suLi5hcmdzXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsR0FBRyxHQUFHQyw4Q0FBc0I7QUFFbkIsZUFBZUUsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5Q0EsR0FBRyxDQUFDQyxTQUFTLENBQUMsZUFBZSxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFFakQsSUFBSUMsUUFBUSxHQUFHLEVBQUU7SUFDakIsSUFBSUMsSUFBSSxHQUFHLEVBQUU7SUFDYixJQUFJQyxLQUFLLEdBQUcsQ0FBQztJQUNiLE1BQU0sRUFBRUMsSUFBSSxHQUFFLEdBQUdOLEdBQUcsQ0FBQ08sS0FBSztJQUUxQkgsSUFBSSxHQUFHRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDZkQsS0FBSyxHQUFHQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFaEIsSUFBSTtRQUNGLElBQUlFLE9BQU8sR0FBR0MsT0FBTyxDQUFDQyxHQUFHLEVBQUUsR0FBRyxDQUFDLHVCQUF1QixDQUFDO1FBQ3ZELE1BQU1DLE9BQU8sR0FBRyxNQUFNZixHQUFHLENBQUNnQixRQUFRLENBQUNKLE9BQU8sQ0FBQztRQUMzQyxNQUFNSyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDSixPQUFPLENBQUM7UUFFaENSLFFBQVEsR0FBR1UsSUFBSSxDQUFDRyxNQUFNLENBQ3BCLENBQUNDLElBQUksR0FBS0EsSUFBSSxDQUFDQyxJQUFJLENBQUNDLFdBQVcsRUFBRSxJQUFJZixJQUFJLENBQUNlLFdBQVcsRUFBRTtRQUFBLENBQ3hELENBQUM7UUFFRixJQUFJaEIsUUFBUSxDQUFDaUIsTUFBTSxHQUFHZixLQUFLLEVBQUU7WUFDM0JGLFFBQVEsQ0FBQ2lCLE1BQU0sR0FBR2YsS0FBSyxDQUFDO1NBQ3pCO0lBQ0Qsb0JBQW9CO0tBQ3JCLENBQUMsT0FBT2dCLEdBQUcsRUFBRTtRQUNabEIsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkbUIsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEdBQUcsQ0FBQyxDQUFDO0tBQ2xCO0lBRUQsbURBQW1EO0lBQ25ELElBQUksQ0FBQ2xCLFFBQVEsSUFBSUEsUUFBUSxDQUFDaUIsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUNwQ2pCLFFBQVEsR0FBRyxFQUFFLENBQUM7S0FDZjtJQUNERixHQUFHLENBQUN1QixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ3RCLFFBQVEsQ0FBQyxDQUFDO0NBQ2hDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9kZXJuLy4vc3JjL3BhZ2VzL2FwaS9wcm9kdWN0L3JlYWx0ZWRQcm9kdWN0cy9bLi4uYXJnc10uanM/ZDI4OSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmc3AgPSByZXF1aXJlKFwiZnNcIikucHJvbWlzZXM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgcmVzLnNldEhlYWRlcihcIkNhY2hlLUNvbnRyb2xcIiwgXCJzLW1heGFnZT04NjQwMFwiKTtcclxuXHJcbiAgbGV0IHByb2R1Y3RzID0gW107XHJcbiAgbGV0IGRlcHQgPSBcIlwiO1xyXG4gIGxldCBsaW1pdCA9IDA7XHJcbiAgY29uc3QgeyBhcmdzIH0gPSByZXEucXVlcnk7XHJcblxyXG4gIGRlcHQgPSBhcmdzWzBdO1xyXG4gIGxpbWl0ID0gYXJnc1sxXTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGxldCBkYXRhVVJMID0gcHJvY2Vzcy5jd2QoKSArIGAvZGF0YS9hbGwtcHJvZHVjdHMuanNvbmA7XHJcbiAgICBjb25zdCByYXdEYXRhID0gYXdhaXQgZnNwLnJlYWRGaWxlKGRhdGFVUkwpO1xyXG4gICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UocmF3RGF0YSk7XHJcblxyXG4gICAgcHJvZHVjdHMgPSBkYXRhLmZpbHRlcihcclxuICAgICAgKHByb2QpID0+IHByb2QuRGVwdC50b0xvd2VyQ2FzZSgpID09IGRlcHQudG9Mb3dlckNhc2UoKVxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAocHJvZHVjdHMubGVuZ3RoID4gbGltaXQpIHtcclxuICAgICAgcHJvZHVjdHMubGVuZ3RoID0gbGltaXQ7XHJcbiAgICB9XHJcbiAgICAvLyBwcm9kdWN0cyA9IHByb2RzO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgcHJvZHVjdHMgPSBbXTtcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgfVxyXG5cclxuICAvL2xldCBwcm9kdWN0ID0gZGF0YS5maW5kKChwcm9kKSA9PiBwcm9kLmlkID09IGlkKTtcclxuICBpZiAoIXByb2R1Y3RzIHx8IHByb2R1Y3RzLmxlbmd0aCA8IDApIHtcclxuICAgIHByb2R1Y3RzID0gW107XHJcbiAgfVxyXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHByb2R1Y3RzKTtcclxufVxyXG4iXSwibmFtZXMiOlsiZnNwIiwicmVxdWlyZSIsInByb21pc2VzIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInNldEhlYWRlciIsInByb2R1Y3RzIiwiZGVwdCIsImxpbWl0IiwiYXJncyIsInF1ZXJ5IiwiZGF0YVVSTCIsInByb2Nlc3MiLCJjd2QiLCJyYXdEYXRhIiwicmVhZEZpbGUiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwiZmlsdGVyIiwicHJvZCIsIkRlcHQiLCJ0b0xvd2VyQ2FzZSIsImxlbmd0aCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/product/realtedProducts/[...args].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/product/realtedProducts/[...args].js"));
module.exports = __webpack_exports__;

})();