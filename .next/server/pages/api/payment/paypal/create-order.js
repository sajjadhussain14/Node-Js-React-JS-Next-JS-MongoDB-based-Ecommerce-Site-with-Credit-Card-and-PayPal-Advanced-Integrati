"use strict";
(() => {
var exports = {};
exports.id = 3849;
exports.ids = [3849];
exports.modules = {

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 4341:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

async function handler(req, res) {
    let paymentData = {
        currency: "USD",
        grandTotal: 0
    };
    let { currency , grandTotal  } = JSON.parse(req.body);
    paymentData.currency = currency;
    paymentData.grandTotal = grandTotal;
    if (req.method === "POST") {
        try {
            const order = {
                intent: "CAPTURE",
                purchase_units: [
                    {
                        amount: {
                            currency_code: paymentData.currency,
                            value: paymentData.grandTotal
                        }
                    }, 
                ],
                application_context: {
                    brand_name: "celerant.com",
                    landing_page: "NO_PREFERENCE",
                    user_action: "PAY_NOW",
                    return_url: `${"http://localhost:3000"}/paypal/payment`,
                    cancel_url: `${"http://localhost:3000"}/checkout`
                }
            };
            // format the body
            const params = new URLSearchParams();
            params.append("grant_type", "client_credentials");
            // Generate an access token
            const { data: { access_token  } ,  } = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${"https://api-m.sandbox.paypal.com"}/v1/oauth2/token`, params, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                auth: {
                    username: "AWbojvkP1QJy2XflMyTHDnzgKGsmzom2sxPmVUD9SAgdIm-oXo8jOSljyEREA3o4mxupFDeOeJ-w_cs-",
                    password: "ECVMX7fwEGB7vP_fidGmEVC7gGGvJdCyEIW17oib2dteKrVuj9aILRgWPFw4UWNNu-qH4ctNQ5iHQUDE"
                }
            });
            console.log(access_token);
            // make a request
            const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${"https://api-m.sandbox.paypal.com"}/v2/checkout/orders`, order, {
                headers: {
                    Authorization: `Bearer ${access_token}`
                }
            });
            return res.status(200).json(response.data);
        } catch (error) {
            console.log(error.message);
            return res.status(500).json("Something goes wrong");
        }
    } else {
        res.json("");
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4341));
module.exports = __webpack_exports__;

})();