"use strict";
exports.id = 9809;
exports.ids = [9809];
exports.modules = {

/***/ 9809:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J8": () => (/* binding */ captureOrder),
/* harmony export */   "uO": () => (/* binding */ processOrder),
/* harmony export */   "Du": () => (/* binding */ processPaymentPaypal)
/* harmony export */ });
/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(998);

const captureOrder = async (token, setPaymentData, setLoading)=>{
    const response = await fetch("http://localhost:3000" + "/api/payment/paypal/capture-order", {
        method: "POST",
        body: JSON.stringify(token)
    });
    const data = await response.json();
    setPaymentData(data);
    setLoading(false);
};
const processOrder = async (paymentData, orderDetails, orderNumber, Router)=>{
    if (paymentData.code == 200) {
        const dateTime = new Date();
        try {
            orderDetails.orderNumber = orderNumber;
            orderDetails.date_created = dateTime;
            orderDetails.payment.id = paymentData.data.id;
            orderDetails.payment.payer_id = paymentData.data.payer_id;
            orderDetails.payment.status = paymentData.data.status;
        } catch (err) {}
        (0,_order__WEBPACK_IMPORTED_MODULE_0__/* .setOrderDetails */ .gF)("orderDetails", orderDetails);
        (0,_order__WEBPACK_IMPORTED_MODULE_0__/* .saveOrder */ .TR)(orderDetails, orderDetails.user.id).then((response)=>{
            if (response.status == 200) {
                if (false) {}
            } else {
                if (false) {}
            }
        }).catch((err)=>{
            orderDetails.error = "Payment Transaction Successfull but Order Save to DB failed";
            (0,_order__WEBPACK_IMPORTED_MODULE_0__/* .setOrderDetails */ .gF)("orderDetails", orderDetails);
            setTimeout(()=>{
                Router.push("/error");
            }, 0);
        });
    } else {
        if (false) {}
    }
};
const processPaymentPaypal = async (e, currency, grandTotal)=>{
    let { URL  } = process.env;
    e.preventDefault();
    let paymentData = {
        currency: currency,
        grandTotal: grandTotal
    };
    const response = await fetch(URL + "/api/payment/paypal/create-order", {
        method: "POST",
        body: JSON.stringify(paymentData)
    });
    const data = await response.json();
    window.location.href = data.links[1].href;
};


/***/ })

};
;