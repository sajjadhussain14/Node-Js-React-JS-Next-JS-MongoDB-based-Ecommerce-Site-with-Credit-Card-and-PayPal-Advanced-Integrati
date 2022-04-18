"use strict";
exports.id = 998;
exports.ids = [998];
exports.modules = {

/***/ 998:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ek": () => (/* binding */ initOrderDetails),
/* harmony export */   "gF": () => (/* binding */ setOrderDetails),
/* harmony export */   "s$": () => (/* binding */ getOrderDetails),
/* harmony export */   "TR": () => (/* binding */ saveOrder),
/* harmony export */   "AU": () => (/* binding */ getOrders),
/* harmony export */   "cj": () => (/* binding */ getOrdersByID)
/* harmony export */ });
const initOrderDetails = ()=>{
    let orderDetails = {
        orderNumber: "",
        orderDesc: "",
        date_created: "",
        orderStatus: "processing",
        // for authorize.net
        accountNumber: "",
        accountType: "",
        networkTransId: "",
        transId: "",
        // for authorize.net
        userID: "",
        items: {},
        user: {},
        payment: {
            id: "",
            paymentMethod: "",
            currency: "",
            payer_id: "",
            status: ""
        },
        order: {
            shipping: {
                name: "",
                amount: "",
                description: ""
            },
            duty: {
                name: "",
                amount: "",
                description: ""
            },
            credit: {
                name: "",
                amount: "",
                description: ""
            },
            coupon: {
                name: "",
                amount: "",
                description: ""
            },
            taxDetail: {
                name: "",
                amount: "",
                description: ""
            },
            orderCommensts: "",
            giftNotes: "",
            total: "",
            tax: "",
            subTotal: ""
        },
        error: ""
    };
    return orderDetails;
};
const setOrderDetails = (name, data)=>{
    if (false) {}
};
const getOrderDetails = (name)=>{
    let data = {};
    if (false) {}
    if (!data) {
        data = {};
    }
    return data;
};
const saveOrder = async (orderDertails)=>{
    const response = await fetch("http://localhost:3000" + "/api/orders/createOrder", {
        method: "POST",
        body: JSON.stringify({
            orderDertails: orderDertails
        }),
        headers: {
            "Content-Type": "application/json"
        }
    });
    return response;
};
const getOrders = async (userID)=>{
    const response = await fetch("http://localhost:3000" + "/api/orders/getOrdersList", {
        method: "POST",
        body: JSON.stringify({
            userID: userID
        })
    });
    const orders = await response.json();
    return orders;
};
const getOrdersByID = async (orderID)=>{
    const response = await fetch("http://localhost:3000" + "/api/orders/getOrdersByID", {
        method: "POST",
        body: JSON.stringify({
            orderID: orderID
        })
    });
    const orders = await response.json();
    return orders;
};


/***/ })

};
;