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
exports.id = "pages/api/wishlist/getUserWishLists";
exports.ids = ["pages/api/wishlist/getUserWishLists"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./src/pages/api/wishlist/getUserWishLists.js":
/*!****************************************************!*\
  !*** ./src/pages/api/wishlist/getUserWishLists.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst fsp = (__webpack_require__(/*! fs */ \"fs\").promises);\nasync function handler(req, res) {\n    let { userID  } = req.body;\n    let wishLists = [];\n    let userLists = [];\n    let dataURL = process.cwd() + `/data/wishlists/wishlists.json`;\n    let list_rsp = await fsp.readFile(dataURL);\n    try {\n        wishLists = JSON.parse(list_rsp);\n    } catch (err) {\n        wishLists = [];\n    }\n    if (!wishLists || wishLists.length < 1) {\n        wishLists = [];\n    }\n    userLists = wishLists.filter((list)=>list.userID == userID\n    );\n    if (!userLists || userLists.length < 0) {\n        userLists = [];\n    }\n    res.json(userLists);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3dpc2hsaXN0L2dldFVzZXJXaXNoTGlzdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLEdBQUcsR0FBR0MsOENBQXNCO0FBRW5CLGVBQWVFLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsSUFBSSxFQUFFQyxNQUFNLEdBQUUsR0FBR0YsR0FBRyxDQUFDRyxJQUFJO0lBQ3pCLElBQUlDLFNBQVMsR0FBRyxFQUFFO0lBQ2xCLElBQUlDLFNBQVMsR0FBRyxFQUFFO0lBRWxCLElBQUlDLE9BQU8sR0FBR0MsT0FBTyxDQUFDQyxHQUFHLEVBQUUsR0FBRyxDQUFDLDhCQUE4QixDQUFDO0lBQzlELElBQUlDLFFBQVEsR0FBRyxNQUFNYixHQUFHLENBQUNjLFFBQVEsQ0FBQ0osT0FBTyxDQUFDO0lBRTFDLElBQUk7UUFDRkYsU0FBUyxHQUFHTyxJQUFJLENBQUNDLEtBQUssQ0FBQ0gsUUFBUSxDQUFDLENBQUM7S0FDbEMsQ0FBQyxPQUFPSSxHQUFHLEVBQUU7UUFDWlQsU0FBUyxHQUFHLEVBQUUsQ0FBQztLQUNoQjtJQUVELElBQUksQ0FBQ0EsU0FBUyxJQUFJQSxTQUFTLENBQUNVLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDdENWLFNBQVMsR0FBRyxFQUFFLENBQUM7S0FDaEI7SUFDREMsU0FBUyxHQUFHRCxTQUFTLENBQUNXLE1BQU0sQ0FBQyxDQUFDQyxJQUFJLEdBQUtBLElBQUksQ0FBQ2QsTUFBTSxJQUFJQSxNQUFNO0lBQUEsQ0FBQyxDQUFDO0lBRTlELElBQUksQ0FBQ0csU0FBUyxJQUFJQSxTQUFTLENBQUNTLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDdENULFNBQVMsR0FBRyxFQUFFLENBQUM7S0FDaEI7SUFFREosR0FBRyxDQUFDZ0IsSUFBSSxDQUFDWixTQUFTLENBQUMsQ0FBQztDQUNyQiIsInNvdXJjZXMiOlsid2VicGFjazovL21vZGVybi8uL3NyYy9wYWdlcy9hcGkvd2lzaGxpc3QvZ2V0VXNlcldpc2hMaXN0cy5qcz9iZDYyIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZzcCA9IHJlcXVpcmUoXCJmc1wiKS5wcm9taXNlcztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBsZXQgeyB1c2VySUQgfSA9IHJlcS5ib2R5O1xyXG4gIGxldCB3aXNoTGlzdHMgPSBbXTtcclxuICBsZXQgdXNlckxpc3RzID0gW107XHJcblxyXG4gIGxldCBkYXRhVVJMID0gcHJvY2Vzcy5jd2QoKSArIGAvZGF0YS93aXNobGlzdHMvd2lzaGxpc3RzLmpzb25gO1xyXG4gIGxldCBsaXN0X3JzcCA9IGF3YWl0IGZzcC5yZWFkRmlsZShkYXRhVVJMKTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIHdpc2hMaXN0cyA9IEpTT04ucGFyc2UobGlzdF9yc3ApO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgd2lzaExpc3RzID0gW107XHJcbiAgfVxyXG5cclxuICBpZiAoIXdpc2hMaXN0cyB8fCB3aXNoTGlzdHMubGVuZ3RoIDwgMSkge1xyXG4gICAgd2lzaExpc3RzID0gW107XHJcbiAgfVxyXG4gIHVzZXJMaXN0cyA9IHdpc2hMaXN0cy5maWx0ZXIoKGxpc3QpID0+IGxpc3QudXNlcklEID09IHVzZXJJRCk7XHJcblxyXG4gIGlmICghdXNlckxpc3RzIHx8IHVzZXJMaXN0cy5sZW5ndGggPCAwKSB7XHJcbiAgICB1c2VyTGlzdHMgPSBbXTtcclxuICB9XHJcblxyXG4gIHJlcy5qc29uKHVzZXJMaXN0cyk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImZzcCIsInJlcXVpcmUiLCJwcm9taXNlcyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJ1c2VySUQiLCJib2R5Iiwid2lzaExpc3RzIiwidXNlckxpc3RzIiwiZGF0YVVSTCIsInByb2Nlc3MiLCJjd2QiLCJsaXN0X3JzcCIsInJlYWRGaWxlIiwiSlNPTiIsInBhcnNlIiwiZXJyIiwibGVuZ3RoIiwiZmlsdGVyIiwibGlzdCIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/wishlist/getUserWishLists.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/wishlist/getUserWishLists.js"));
module.exports = __webpack_exports__;

})();