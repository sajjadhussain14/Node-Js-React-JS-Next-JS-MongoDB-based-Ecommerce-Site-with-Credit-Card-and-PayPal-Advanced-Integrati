"use strict";
(() => {
var exports = {};
exports.id = 2990;
exports.ids = [2990];
exports.modules = {

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1631:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const fsp = (__webpack_require__(7147).promises);
async function handler(req, res) {
    let data = req.body;
    try {
        data = JSON.parse(data);
    } catch (err) {}
    let userID = data.userID;
    let orders = [];
    let dataURL = process.cwd() + `/data/orders/orders.json`;
    let orders_rsp = await fsp.readFile(dataURL);
    try {
        orders = JSON.parse(orders_rsp);
    } catch (err1) {
        orders = [];
    }
    if (!orders || orders.length < 1) {
        orders = [];
    }
    orders = orders.filter((order)=>order.UserID == userID
    );
    if (!orders || orders.length < 0) {
        orders = [];
    }
    res.json(orders);
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1631));
module.exports = __webpack_exports__;

})();