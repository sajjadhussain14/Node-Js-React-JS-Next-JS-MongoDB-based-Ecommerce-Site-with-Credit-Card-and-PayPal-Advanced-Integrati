"use strict";
(() => {
var exports = {};
exports.id = 3021;
exports.ids = [3021];
exports.modules = {

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 8668:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const fsp = (__webpack_require__(7147).promises);
async function handler(req, res) {
    res.setHeader("Cache-Control", "s-maxage=86400");
    let product = {};
    const { id  } = req.query;
    try {
        let dataURL = process.cwd() + `/data/all-products.json`;
        const rawData = await fsp.readFile(dataURL);
        const data = JSON.parse(rawData);
        let pData = data.filter((pro)=>pro.price > 0
        );
        product = pData.sort(()=>0.5 - Math.random()
        )[0];
    } catch (err) {
        console.log(err);
    }
    //let product = data.find((prod) => prod.id == id);
    if (!product || !product.name) {
        product = {};
    }
    res.status(200).json(product);
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8668));
module.exports = __webpack_exports__;

})();