"use strict";
(() => {
var exports = {};
exports.id = 7836;
exports.ids = [7836];
exports.modules = {

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 7876:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

async function handler(req, res) {
    let token = req.body;
    try {
        token = JSON.parse(token);
    } catch (err) {}
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${"https://api-m.sandbox.paypal.com"}/v2/checkout/orders/${token}/capture`, {}, {
            auth: {
                username: "AWbojvkP1QJy2XflMyTHDnzgKGsmzom2sxPmVUD9SAgdIm-oXo8jOSljyEREA3o4mxupFDeOeJ-w_cs-",
                password: "ECVMX7fwEGB7vP_fidGmEVC7gGGvJdCyEIW17oib2dteKrVuj9aILRgWPFw4UWNNu-qH4ctNQ5iHQUDE"
            }
        });
        res.status(200).json({
            code: 200,
            data: response.data
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            code: 500,
            message: "Internal Server error"
        });
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7876));
module.exports = __webpack_exports__;

})();