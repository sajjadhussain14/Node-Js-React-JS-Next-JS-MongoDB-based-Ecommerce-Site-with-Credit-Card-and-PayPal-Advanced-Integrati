"use strict";
(() => {
var exports = {};
exports.id = 9310;
exports.ids = [9310];
exports.modules = {

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 5051:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const fsp = (__webpack_require__(7147).promises);
async function handler(req, res) {
    let { userID  } = req.body;
    let wishLists = [];
    let userLists = [];
    let dataURL = process.cwd() + `/data/wishlists/wishlists.json`;
    let list_rsp = await fsp.readFile(dataURL);
    try {
        wishLists = JSON.parse(list_rsp);
    } catch (err) {
        wishLists = [];
    }
    if (!wishLists || wishLists.length < 1) {
        wishLists = [];
    }
    userLists = wishLists.filter((list)=>list.userID == userID
    );
    if (!userLists || userLists.length < 0) {
        userLists = [];
    }
    res.json(userLists);
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5051));
module.exports = __webpack_exports__;

})();