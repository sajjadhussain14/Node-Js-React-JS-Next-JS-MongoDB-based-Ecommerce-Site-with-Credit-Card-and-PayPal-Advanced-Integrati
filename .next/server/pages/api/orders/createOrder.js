"use strict";
(() => {
var exports = {};
exports.id = 806;
exports.ids = [806];
exports.modules = {

/***/ 1490:
/***/ ((module) => {

module.exports = require("md5");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 2944:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const fsp = (__webpack_require__(7147).promises);
const md5 = __webpack_require__(1490);
async function handler(req, res) {
    let { URL  } = process.env;
    let orders = [];
    let { orderDertails  } = req.body;
    let dataURL = process.cwd() + `/data/orders/orders.json`;
    let response = "";
    let stcode = 409;
    fsp.readFile(dataURL).then((rawData)=>{
        try {
            orders = JSON.parse(rawData);
        } catch (err) {
            orders = [];
        }
        if (!orders || orders.length < 1) {
            orders = [];
        }
        try {
            orders.push(orderDertails);
            fsp.writeFile(dataURL, JSON.stringify(orders)).then((rsp)=>{
                response = "order Created Successfully!";
            });
            stcode = 200;
            return res.status(stcode).send(response);
        } catch (err1) {
            response = "order Creation Failed!" + err1;
            stcode = 301;
            return res.status(stcode).send(response);
        }
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2944));
module.exports = __webpack_exports__;

})();