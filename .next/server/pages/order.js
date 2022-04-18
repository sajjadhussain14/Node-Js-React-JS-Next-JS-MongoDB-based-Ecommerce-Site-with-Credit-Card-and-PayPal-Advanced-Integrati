"use strict";
(() => {
var exports = {};
exports.id = 1941;
exports.ids = [1941];
exports.modules = {

/***/ 5997:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const order = ()=>{
    let cart = [];
    orderDetails = {
        order: {
            id: 0,
            number: "",
            status: "processing",
            currency: "USD",
            date_created: "",
            date_modified: "",
            discount_total: 0,
            shipping_total: 0,
            discount_tax: 0,
            shipping_tax: 0,
            cart_tax: 0,
            total_tax: 0,
            total: 0,
            customer_id: 0,
            customer_note: ""
        },
        billing: {
            first_name: "John",
            last_name: "Doe",
            company: "",
            address_1: "969 Market",
            address_2: "",
            city: "San Francisco",
            state: "CA",
            postcode: "94103",
            country: "US",
            email: "john.doe@example.com",
            phone: "(555) 555-5555"
        },
        shipping: {
            first_name: "John",
            last_name: "Doe",
            company: "",
            address_1: "969 Market",
            address_2: "",
            city: "San Francisco",
            state: "CA",
            postcode: "94103",
            country: "US"
        },
        payment_method: {
            payment_method: "",
            payment_method_title: "",
            transaction_id: "",
            date_paid: ""
        },
        cart_items: cart,
        tax_lines: [
            {
                id: 0,
                rate_code: "",
                rate_id: 0,
                label: "",
                tax_total: 0,
                shipping_tax_total: 0
            }, 
        ],
        shipping_method: {
            id: 0,
            method_title: "",
            method_id: 0,
            amount: 100,
            total_tax: 2,
            total: 12
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: "order"
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (order);


/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5997));
module.exports = __webpack_exports__;

})();