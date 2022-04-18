"use strict";
(() => {
var exports = {};
exports.id = 5625;
exports.ids = [5625];
exports.modules = {

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 2385:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const fsp = (__webpack_require__(7147).promises);
async function handler(req, res) {
    res.setHeader("Cache-Control", "s-maxage=86400");
    let { URL  } = process.env;
    let product = {};
    let taxonomy = [];
    try {
        let dataURL = process.cwd() + `/data/taxonomy.json`;
        const rawData = await fsp.readFile(dataURL);
        const data = JSON.parse(rawData);
        taxonomy = data;
    } catch (err) {
        taxonomy = [];
    }
    res.status(200).json(taxonomy);
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2385));
module.exports = __webpack_exports__;

})();