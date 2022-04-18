"use strict";
(() => {
var exports = {};
exports.id = 1014;
exports.ids = [1014];
exports.modules = {

/***/ 5012:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _controllers_paypal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9809);
/* harmony import */ var _controllers_order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(998);






const Payments = (props)=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { token , PayerID  } = router.query;
    const { 0: paymentData , 1: setPaymentData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    if (!token && !PayerID) {
        if (false) {}
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(async ()=>{
        (0,_controllers_paypal__WEBPACK_IMPORTED_MODULE_3__/* .captureOrder */ .J8)(token, setPaymentData, setLoading);
    }, [
        token
    ]);
    let orderDetails = {};
    orderDetails = (0,_controllers_order__WEBPACK_IMPORTED_MODULE_4__/* .getOrderDetails */ .s$)("orderDetails");
    let orderNumber = Array.from(Array(20), ()=>Math.floor(Math.random() * 20).toString(20)
    ).join("");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (loading == false) {
            (0,_controllers_paypal__WEBPACK_IMPORTED_MODULE_3__/* .processOrder */ .uO)(paymentData, orderDetails, orderNumber, (next_router__WEBPACK_IMPORTED_MODULE_2___default()));
        }
    }, [
        loading
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            style: {
                height: "400px"
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `overlay `,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "loading ",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            class: "spinner-grow text-primary",
                            role: "status",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                class: "visually-hidden",
                                children: "Loading..."
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            class: "spinner-grow text-secondary",
                            role: "status",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                class: "visually-hidden",
                                children: "Loading..."
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            class: "spinner-grow text-success",
                            role: "status",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                class: "visually-hidden",
                                children: "Loading..."
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            class: "spinner-grow text-danger",
                            role: "status",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                class: "visually-hidden",
                                children: "Loading..."
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            class: "spinner-grow text-warning",
                            role: "status",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                class: "visually-hidden",
                                children: "Loading..."
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            class: "spinner-grow text-info",
                            role: "status",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                class: "visually-hidden",
                                children: "Loading..."
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            class: "spinner-grow text-light",
                            role: "status",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                class: "visually-hidden",
                                children: "Loading..."
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            class: "spinner-grow text-dark",
                            role: "status",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                class: "visually-hidden",
                                children: "Loading..."
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Payments);


/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [998,9809], () => (__webpack_exec__(5012)));
module.exports = __webpack_exports__;

})();