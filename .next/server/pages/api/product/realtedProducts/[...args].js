"use strict";
(() => {
var exports = {};
exports.id = 2922;
exports.ids = [2922];
exports.modules = {

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1001:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const fsp = (__webpack_require__(7147).promises);
async function handler(req, res) {
    res.setHeader("Cache-Control", "s-maxage=86400");
    let products = [];
    let dept = "";
    let limit = 0;
    const { args  } = req.query;
    dept = args[0];
    limit = args[1];
    try {
        let dataURL = process.cwd() + `/data/all-products.json`;
        const rawData = await fsp.readFile(dataURL);
        const data = JSON.parse(rawData);
        products = data.filter((prod)=>prod.Dept.toLowerCase() == dept.toLowerCase()
        );
        if (products.length > limit) {
            products.length = limit;
        }
    // products = prods;
    } catch (err) {
        products = [];
        console.log(err);
    }
    //let product = data.find((prod) => prod.id == id);
    if (!products || products.length < 0) {
        products = [];
    }
    res.status(200).json(products);
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1001));
module.exports = __webpack_exports__;

})();