"use strict";
(() => {
var exports = {};
exports.id = 7151;
exports.ids = [7151];
exports.modules = {

/***/ 8466:
/***/ ((module) => {

module.exports = require("authorizenet");

/***/ }),

/***/ 4085:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "react"
const external_react_namespaceObject = require("react");
;// CONCATENATED MODULE: external "validator"
const external_validator_namespaceObject = require("validator");
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: external "@reduxjs/toolkit"
const toolkit_namespaceObject = require("@reduxjs/toolkit");
;// CONCATENATED MODULE: ./src/redux/cartSlice.js

const cartSlice = (0,toolkit_namespaceObject.createSlice)({
    name: "cart",
    initialState: [],
    reducers: {
        setCartData: (state, action)=>{
            return action.payload;
        }
    }
});
const { setCartData  } = cartSlice.actions;
/* harmony default export */ const redux_cartSlice = (cartSlice.reducer);

;// CONCATENATED MODULE: ./src/controllers/cart.js


let { URL  } = process.env;
const AddToCart = (e, item, cartData, setCart1)=>{
    e.preventDefault();
    let cartContent = [];
    cartContent = JSON.parse(localStorage.getItem("cart"));
    let cart = [];
    try {
        cart = [
            ...cartContent
        ];
    } catch (err) {}
    if (!cart || cart.length < 1) {
        cart = [];
    }
    let index = -1;
    try {
        index = cart.findIndex((prod)=>prod.id === item.id
        );
    } catch (err1) {}
    if (index > -1) {
        let prodQTY = cart[index].qty;
        let prodPrice = cart[index].itemPrice;
        prodQTY++;
        cart[index] = {
            ...cart[index],
            qty: prodQTY
        };
        cart[index] = {
            ...cart[index],
            total: prodPrice * prodQTY
        };
    } else {
        let tempCart = [];
        // tempCart.push(item);
        cart = [
            ...cart,
            item
        ];
    }
    try {
        localStorage.setItem("cart", JSON.stringify(cart));
    } catch (err2) {}
    setCart1(cart);
    try {
        document.getElementById("header-cartQTY").innerHTML = cart.length;
    } catch (err3) {}
};
const clearCart = (e, setCart2)=>{
    e.preventDefault();
    try {
        localStorage.setItem("cart", JSON.stringify([]));
    } catch (err) {}
    setCart2([]);
};
const UpdateCartQTY = (e, id, setCart3, cartQty)=>{
    e.preventDefault();
    let cart = [];
    try {
        cart = JSON.parse(localStorage.getItem("cart"));
    } catch (err) {}
    let index = -1;
    try {
        index = cart.findIndex((prod)=>prod.id === id
        );
    } catch (err4) {}
    if (index > -1) {
        let prodQTY = cartQty;
        let prodPrice = cart[index].itemPrice;
        cart[index] = {
            ...cart[index],
            qty: prodQTY
        };
        cart[index] = {
            ...cart[index],
            total: prodPrice * prodQTY
        };
        try {
            localStorage.setItem("cart", JSON.stringify(cart));
        } catch (err) {}
        //  Router.push("/cart");
        setCart3(cart);
    }
};
const removeItem = (id, setCart4)=>{
    let cart = [];
    try {
        cart = JSON.parse(localStorage.getItem("cart"));
    } catch (err) {}
    if (!cart || cart.length < 1) {
        cart = [];
    }
    let newCart = cart.filter((item)=>item.id != id
    );
    try {
        localStorage.setItem("cart", JSON.stringify(newCart));
    } catch (err5) {}
    setCart4(newCart);
    try {
        document.getElementById("header-cartQTY").innerHTML = newCart.length;
    } catch (err6) {}
};
const getContinueShoppingURL = ()=>{
    let shopURL = "";
    try {
        shopURL = localStorage.getItem("shop");
    } catch (err) {}
    if (!shopURL || shopURL == "" || shopURL == null) {
        shopURL = "/";
    }
    return shopURL;
};
const csHandleChange = ()=>{
    let shopURL = "";
    shopURL = getContinueShoppingURL();
    Router.push(URL + shopURL);
};
const cart_setCartContent = (name, data)=>{
    if (false) {}
};
const getCartContent = (name)=>{
    let cart = [];
    if (false) {}
    if (!cart || cart.length < 1) {
        cart = [];
    }
    return cart;
};

;// CONCATENATED MODULE: ./src/controllers/authorize.net.js





const authenticateMerchant = (ApiContracts)=>{
    console.log("api id", process.env.AUTHORIZE_API_LOGIN_ID);
    const merchantAuthenticationType = new ApiContracts.MerchantAuthenticationType();
    merchantAuthenticationType.setName(process.env.AUTHORIZE_API_LOGIN_ID);
    merchantAuthenticationType.setTransactionKey(process.env.AUTHORIZE_TRANSACTION_KEY);
    return merchantAuthenticationType;
};
const setCardValues = (ApiContracts, cardInfo)=>{
    const creditCard = new ApiContracts.CreditCardType();
    creditCard.setCardNumber(cardInfo.cardNumber);
    creditCard.setExpirationDate(cardInfo.expiry);
    creditCard.setCardCode(cardInfo.cvv);
    return creditCard;
};
const setPaymentType = (ApiContracts, creditCard)=>{
    const paymentType = new ApiContracts.PaymentType();
    paymentType.setCreditCard(creditCard);
    return paymentType;
};
const setOderDetails = (ApiContracts, orderData)=>{
    const order = new ApiContracts.OrderType();
    order.setInvoiceNumber(orderData.orderNumber);
    order.setDescription(orderData.orderDesc);
    return order;
};
const setTaxDetails = (ApiContracts, orderData)=>{
    const tax = new ApiContracts.ExtendedAmountType();
    tax.setAmount(parseFloat(orderData.order.taxDetail.amount));
    tax.setName(orderData.order.taxDetail.name);
    tax.setDescription(orderData.order.taxDetail.description);
    return tax;
};
const setDutyAmount = (ApiContracts, orderData)=>{
    let dutyAmount = "0.0";
    dutyAmount = orderData.order.duty.amount;
    if (!dutyAmount || dutyAmount == "") {
        dutyAmount = "0.0";
    }
    const duty = new ApiContracts.ExtendedAmountType();
    duty.setAmount(dutyAmount);
    duty.setName(orderData.order.duty.name);
    duty.setDescription(orderData.order.duty.description);
    return duty;
};
const setShippingAmount = (ApiContracts, orderData)=>{
    const shipping = new ApiContracts.ExtendedAmountType();
    shipping.setAmount(parseFloat(orderData.order.shipping.amount));
    shipping.setName(orderData.order.name);
    shipping.setDescription(orderData.order.description);
    return shipping;
};
const setBillTo = (ApiContracts, orderData)=>{
    const billTo = new ApiContracts.CustomerAddressType();
    billTo.setFirstName(orderData.user.billing.first_name);
    billTo.setLastName(orderData.user.billing.last_name);
    billTo.setCompany(orderData.user.billing.company);
    billTo.setAddress(orderData.user.billing.address1 + " " + orderData.user.billing.address2);
    billTo.setCity(orderData.user.billing.city);
    billTo.setState(orderData.user.billing.state);
    billTo.setZip(orderData.user.billing.zip_code);
    billTo.setCountry(orderData.user.billing.country);
    return billTo;
};
const setShipTo = (ApiContracts, orderData)=>{
    var shipTo = new ApiContracts.CustomerAddressType();
    shipTo.setFirstName(orderData.user.shipping.first_name);
    shipTo.setLastName(orderData.user.shipping.last_name);
    shipTo.setCompany(orderData.user.shipping.company);
    shipTo.setAddress(orderData.user.shipping.address1 + " " + orderData.user.shipping.address2);
    shipTo.setCity(orderData.user.shipping.city);
    shipTo.setState(orderData.user.shipping.state);
    shipTo.setZip(orderData.user.shipping.zip_code);
    shipTo.setCountry(orderData.user.shipping.country);
    return shipTo;
};
const setLineItems = (ApiContracts, orderData)=>{
    var lineItem_id1 = new ApiContracts.LineItemType();
    lineItem_id1.setItemId("1");
    lineItem_id1.setName("vase");
    lineItem_id1.setDescription("cannes logo");
    lineItem_id1.setQuantity("18");
    lineItem_id1.setUnitPrice(45);
    let lineItem_id2 = new ApiContracts.LineItemType();
    lineItem_id2.setItemId("2");
    lineItem_id2.setName("vase2");
    lineItem_id2.setDescription("cannes logo2");
    lineItem_id2.setQuantity("28");
    lineItem_id2.setUnitPrice("25.00");
    let lineItemList = [];
    lineItemList.push(lineItem_id1);
    lineItemList.push(lineItem_id2);
    let lineItems = new ApiContracts.ArrayOfLineItem();
    lineItems.setLineItem(lineItemList);
    return lineItems;
};
const preventDuplicateTransaction = (ApiContracts)=>{
    const transactionSetting1 = new ApiContracts.SettingType();
    transactionSetting1.setSettingName("duplicateWindow");
    transactionSetting1.setSettingValue("120");
    return transactionSetting1;
};
const setRecurringBilling = (ApiContracts)=>{
    const transactionSetting2 = new ApiContracts.SettingType();
    transactionSetting2.setSettingName("recurringBilling");
    transactionSetting2.setSettingValue("false");
    return transactionSetting2;
};
const setTransactionType = (ApiContracts)=>{
    const transactionRequestType = new ApiContracts.TransactionRequestType();
    transactionRequestType.setTransactionType(ApiContracts.TransactionTypeEnum.AUTHCAPTURETRANSACTION);
    return transactionRequestType;
};
const processTransaction = (ApiContracts, ctrl, res)=>{
    ctrl.execute(function() {
        var apiResponse = ctrl.getResponse();
        var response = new ApiContracts.CreateTransactionResponse(apiResponse);
        //pretty print response
        //console.log(JSON.stringify(response, null, 2));
        if (response != null) {
            if (response.getMessages().getResultCode() == ApiContracts.MessageTypeEnum.OK) {
                if (response.getTransactionResponse().getMessages() != null) {
                    console.log("Successfully created transaction with Transaction ID: " + response.getTransactionResponse().getTransId());
                    console.log("Response Code: " + response.getTransactionResponse().getResponseCode());
                    console.log("Message Code: " + response.getTransactionResponse().getMessages().getMessage()[0].getCode());
                    console.log("Description: " + response.getTransactionResponse().getMessages().getMessage()[0].getDescription());
                } else {
                    console.log("Failed Transaction.");
                    if (response.getTransactionResponse().getErrors() != null) {
                        console.log("Error Code: " + response.getTransactionResponse().getErrors().getError()[0].getErrorCode());
                        console.log("Error message: " + response.getTransactionResponse().getErrors().getError()[0].getErrorText());
                    }
                }
            } else {
                console.log("Failed Transaction. ");
                if (response.getTransactionResponse() != null && response.getTransactionResponse().getErrors() != null) {
                    console.log("Error Code: " + response.getTransactionResponse().getErrors().getError()[0].getErrorCode());
                    console.log("Error message: " + response.getTransactionResponse().getErrors().getError()[0].getErrorText());
                } else {
                    console.log("Error Code: " + response.getMessages().getMessage()[0].getCode());
                    console.log("Error message: " + response.getMessages().getMessage()[0].getText());
                }
            }
        } else {
            console.log("Null Response.");
        }
        return res.json(response);
    });
};
const paymentAuthorize = async (e, setCart)=>{
    let { URL  } = process.env;
    e.preventDefault();
    let orderNumber = Array.from(Array(20), ()=>Math.floor(Math.random() * 20).toString(20)
    ).join("");
    const dateTime = new Date();
    let orderDescription = "";
    let orderDetails = {};
    orderDetails = getOrderDetails("orderDetails");
    let cardInfo = {
        cardHolderName: "",
        cardNumber: "",
        expiry: "",
        cvv: ""
    };
    try {
        cardInfo.cardHolderName = document.getElementById("cardHolder").value;
    } catch (err) {}
    try {
        cardInfo.cardNumber = document.getElementById("cardNumber").value;
    } catch (err1) {}
    try {
        let expiry = document.getElementById("expiryMonth").value + "/" + document.getElementById("expiryYear").value;
        cardInfo.expiry = expiry;
    } catch (err2) {}
    try {
        cardInfo.cvv = document.getElementById("cvv2").value;
    } catch (err3) {}
    orderDescription = cardInfo.cardHolderName + " " + dateTime + " " + orderNumber;
    orderDetails.orderNumber = orderNumber;
    orderDetails.orderDesc = orderDescription;
    orderDetails.date_created = dateTime;
    setOrderDetails("orderDetails", orderDetails);
    const response = await fetch(URL + "/api/payment/authorize.net/create-order", {
        method: "POST",
        body: JSON.stringify({
            orderDetails: orderDetails,
            cardInfo: cardInfo
        })
    });
    const data = await response.json();
    if (validator.isCreditCard(cardInfo.cardNumber)) {
        processOrder(data, orderDetails, setCart);
    } else {
        alert("invalid card number");
    }
};
const processOrder = (data, orderDetails, setCart)=>{
    let tCode = "";
    try {
        tCode = data.messages.resultCode.toLowerCase();
    } catch (err) {}
    if (tCode == "ok") {
        let orderDetails = getOrderDetails("orderDetails");
        orderDetails.payment.id = data.transactionResponse.transId;
        orderDetails.payment.paymentMethod = "Credit Card";
        orderDetails.payment.status = "transaction approved";
        orderDetails.accountNumber = data.transactionResponse.accountNumber;
        orderDetails.accountType = data.transactionResponse.accountType;
        orderDetails.networkTransId = data.transactionResponse.networkTransId;
        orderDetails.transId = data.transactionResponse.transId;
        setOrderDetails("orderDetails", orderDetails);
        setCartContent("cart", []);
        setCart([]);
        setTimeout(()=>{
            Router.push("/thank-you");
        }, 0);
    } else {
        try {
            orderDetails.error = data.transactionResponse.errors.error[0].errorText;
        } catch (err) {
            orderDetails.error = "Something Went Wrong! Please Try Again.";
        }
        setOrderDetails("orderDetails", orderDetails);
        setTimeout(()=>{
            Router.push("/error");
        }, 0);
    }
};

;// CONCATENATED MODULE: ./src/pages/api/payment/authorize.net/create-order.js

const ApiContracts = (__webpack_require__(8466).APIContracts);
const ApiControllers = (__webpack_require__(8466).APIControllers);
const SDKConstants = (__webpack_require__(8466).Constants);
async function handler(req, res) {
    let data = req.body;
    try {
        data = JSON.parse(data);
    } catch (err) {}
    console.log("dddddddddddddddddddddd", data);
    let cardInfo = data.cardInfo;
    let orderData = data.orderDetails;
    // START AUTHENTICATE REQUEST
    const merchantAuthenticationType = authenticateMerchant(ApiContracts);
    // END AUTHENTICATE REQUEST
    // SET CARD INFO
    const creditCard = setCardValues(ApiContracts, cardInfo);
    // SET PAYMENT TYPE
    const paymentType = setPaymentType(ApiContracts, creditCard);
    // SET ORDER DETAILS
    const orderDetails = setOderDetails(ApiContracts, orderData);
    // SET TAX
    const tax = setTaxDetails(ApiContracts, orderData);
    // SET DUTY
    const duty = setDutyAmount(ApiContracts, orderData);
    // SET SHIPPING AMOUNT
    const shipping = setShippingAmount(ApiContracts, orderData);
    // SET BILLING INFO
    const billTo = setBillTo(ApiContracts, orderData);
    // SET SHIPPING INFO
    const shipTo = setShipTo(ApiContracts, orderData);
    // SET LINE ITEMS
    let lineItems = setLineItems(ApiContracts, orderData);
    // PREVENT DUPLICATE ITEMS IN 120 SECONDS
    const transactionSetting1 = preventDuplicateTransaction(ApiContracts);
    // SET RECURRING BILLING TRUE OR FALSE
    const transactionSetting2 = setRecurringBilling(ApiContracts);
    var transactionSettingList = [];
    //transactionSettingList.push(transactionSetting1);
    transactionSettingList.push(transactionSetting2);
    var transactionSettings = new ApiContracts.ArrayOfSetting();
    transactionSettings.setSetting(transactionSettingList);
    // SET TRANSACTION TYPE LIKE authOnlyTransaction OR authCaptureTransaction OR captureOnlyTransaction
    //  OR  priorAuthCaptureTransaction or refundTransaction
    const transactionRequestType = setTransactionType(ApiContracts);
    // PASS VALUES TO TRANSTION TYPE
    transactionRequestType.setPayment(paymentType);
    transactionRequestType.setAmount(99.2);
    transactionRequestType.setLineItems(lineItems);
    transactionRequestType.setOrder(orderDetails);
    transactionRequestType.setTax(tax);
    transactionRequestType.setDuty(duty);
    transactionRequestType.setShipping(shipping);
    transactionRequestType.setBillTo(billTo);
    transactionRequestType.setShipTo(shipTo);
    transactionRequestType.setTransactionSettings(transactionSettings);
    //  TRRANSACTION REQUEST
    var createRequest = new ApiContracts.CreateTransactionRequest();
    createRequest.setMerchantAuthentication(merchantAuthenticationType);
    createRequest.setTransactionRequest(transactionRequestType);
    //pretty print request
    //console.log(JSON.stringify(createRequest.getJSON(), null, 2));
    var transactionController = new ApiControllers.CreateTransactionController(createRequest.getJSON());
    //UNCOMMENT BELOW IF YOU WANT TO SWICH FROM SANDBOX TO LIVE
    //ctrl.setEnvironment(SDKConstants.endpoint.production);
    // DO THE TRANSCTION
    processTransaction(ApiContracts, transactionController, res);
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4085));
module.exports = __webpack_exports__;

})();