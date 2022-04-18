"use strict";
(() => {
var exports = {};
exports.id = 3187;
exports.ids = [3187];
exports.modules = {

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 2082:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const fsp = (__webpack_require__(7147).promises);
async function handler(req, res) {
    let { udpatedWishList  } = req.body;
    let wishLists = [];
    let dataURL = process.cwd() + `/data/wishlists/wishlists.json`;
    let response = "";
    let stcode = 409;
    fsp.writeFile(dataURL, JSON.stringify(udpatedWishList)).then((rsp)=>{
        response = "Deleted Successfully!";
    });
    stcode = 200;
    return res.json(udpatedWishList);
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2082));
module.exports = __webpack_exports__;

})();