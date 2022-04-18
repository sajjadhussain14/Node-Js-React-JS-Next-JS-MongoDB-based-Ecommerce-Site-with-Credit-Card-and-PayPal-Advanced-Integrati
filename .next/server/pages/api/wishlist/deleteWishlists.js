"use strict";
(() => {
var exports = {};
exports.id = 7540;
exports.ids = [7540];
exports.modules = {

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const fsp = (__webpack_require__(7147).promises);
async function handler(req, res) {
    let { userID , listName  } = req.body;
    let wishLists = [];
    let dataURL = process.cwd() + `/data/wishlists/wishlists.json`;
    let response = "";
    let stcode = 409;
    fsp.readFile(dataURL).then((rawData)=>{
        try {
            wishLists = JSON.parse(rawData);
        } catch (err) {
            wishLists = [];
        }
        if (!wishLists || wishLists.length < 1) {
            wishLists = [];
        }
        console.log("all", wishLists);
        let newLists = [];
        newLists = wishLists.filter((list)=>list.userID == userID && list.name != listName
        );
        fsp.writeFile(dataURL, JSON.stringify(newLists)).then((rsp)=>{
            response = "Deleted Successfully!";
        });
        stcode = 200;
        return res.json(newLists);
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(777));
module.exports = __webpack_exports__;

})();