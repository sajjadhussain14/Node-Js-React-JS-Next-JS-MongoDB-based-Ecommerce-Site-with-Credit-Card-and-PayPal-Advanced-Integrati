import React from "react";
import Router from "next/router";

import { getOrderDetails, setOrderDetails } from "./order";
import { setCartContent } from "./cart";

export const authenticateMerchant = (ApiContracts) => {
  console.log("api id", process.env.AUTHORIZE_API_LOGIN_ID);
  const merchantAuthenticationType =
    new ApiContracts.MerchantAuthenticationType();
  merchantAuthenticationType.setName(process.env.AUTHORIZE_API_LOGIN_ID);
  merchantAuthenticationType.setTransactionKey(
    process.env.AUTHORIZE_TRANSACTION_KEY
  );
  return merchantAuthenticationType;
};

export const setCardValues = (ApiContracts, cardInfo) => {
  const creditCard = new ApiContracts.CreditCardType();
  creditCard.setCardNumber(cardInfo.cardNumber);
  creditCard.setExpirationDate(cardInfo.expiry);
  creditCard.setCardCode(cardInfo.cvv);
  return creditCard;
};

export const setPaymentType = (ApiContracts, creditCard) => {
  const paymentType = new ApiContracts.PaymentType();
  paymentType.setCreditCard(creditCard);
  return paymentType;
};

export const setOderDetails = (ApiContracts, orderData) => {
  const order = new ApiContracts.OrderType();
  order.setInvoiceNumber(orderData.orderNumber);
  order.setDescription(orderData.orderDesc);
  return order;
};

export const setTaxDetails = (ApiContracts, orderData) => {
  const tax = new ApiContracts.ExtendedAmountType();
  tax.setAmount(parseFloat(orderData.order.taxDetail.amount));
  tax.setName(orderData.order.taxDetail.name);
  tax.setDescription(orderData.order.taxDetail.description);
  return tax;
};

export const setDutyAmount = (ApiContracts, orderData) => {
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

export const setShippingAmount = (ApiContracts, orderData) => {
  const shipping = new ApiContracts.ExtendedAmountType();
  shipping.setAmount(parseFloat(orderData.order.shipping.amount));
  shipping.setName(orderData.order.name);
  shipping.setDescription(orderData.order.description);
  return shipping;
};

export const setBillTo = (ApiContracts, orderData) => {
  const billTo = new ApiContracts.CustomerAddressType();
  billTo.setFirstName(orderData.user.billing.first_name);
  billTo.setLastName(orderData.user.billing.last_name);
  billTo.setCompany(orderData.user.billing.company);
  billTo.setAddress(
    orderData.user.billing.address1 + " " + orderData.user.billing.address2
  );
  billTo.setCity(orderData.user.billing.city);
  billTo.setState(orderData.user.billing.state);
  billTo.setZip(orderData.user.billing.zip_code);
  billTo.setCountry(orderData.user.billing.country);
  return billTo;
};

export const setShipTo = (ApiContracts, orderData) => {
  var shipTo = new ApiContracts.CustomerAddressType();
  shipTo.setFirstName(orderData.user.shipping.first_name);
  shipTo.setLastName(orderData.user.shipping.last_name);
  shipTo.setCompany(orderData.user.shipping.company);
  shipTo.setAddress(
    orderData.user.shipping.address1 + " " + orderData.user.shipping.address2
  );
  shipTo.setCity(orderData.user.shipping.city);
  shipTo.setState(orderData.user.shipping.state);
  shipTo.setZip(orderData.user.shipping.zip_code);
  shipTo.setCountry(orderData.user.shipping.country);
  return shipTo;
};

export const setLineItems = (ApiContracts, orderData) => {
  var lineItem_id1 = new ApiContracts.LineItemType();
  lineItem_id1.setItemId("1");
  lineItem_id1.setName("vase");
  lineItem_id1.setDescription("cannes logo");
  lineItem_id1.setQuantity("18");
  lineItem_id1.setUnitPrice(45.0);

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

export const preventDuplicateTransaction = (ApiContracts) => {
  const transactionSetting1 = new ApiContracts.SettingType();
  transactionSetting1.setSettingName("duplicateWindow");
  transactionSetting1.setSettingValue("120");
  return transactionSetting1;
};

export const setRecurringBilling = (ApiContracts) => {
  const transactionSetting2 = new ApiContracts.SettingType();
  transactionSetting2.setSettingName("recurringBilling");
  transactionSetting2.setSettingValue("false");
  return transactionSetting2;
};

export const setTransactionType = (ApiContracts) => {
  const transactionRequestType = new ApiContracts.TransactionRequestType();
  transactionRequestType.setTransactionType(
    ApiContracts.TransactionTypeEnum.AUTHCAPTURETRANSACTION
  );
  return transactionRequestType;
};

export const processTransaction = (ApiContracts, ctrl, res) => {
  ctrl.execute(function () {
    var apiResponse = ctrl.getResponse();

    var response = new ApiContracts.CreateTransactionResponse(apiResponse);

    //pretty print response
    //console.log(JSON.stringify(response, null, 2));

    if (response != null) {
      if (
        response.getMessages().getResultCode() ==
        ApiContracts.MessageTypeEnum.OK
      ) {
        if (response.getTransactionResponse().getMessages() != null) {
          console.log(
            "Successfully created transaction with Transaction ID: " +
              response.getTransactionResponse().getTransId()
          );
          console.log(
            "Response Code: " +
              response.getTransactionResponse().getResponseCode()
          );
          console.log(
            "Message Code: " +
              response
                .getTransactionResponse()
                .getMessages()
                .getMessage()[0]
                .getCode()
          );
          console.log(
            "Description: " +
              response
                .getTransactionResponse()
                .getMessages()
                .getMessage()[0]
                .getDescription()
          );
        } else {
          console.log("Failed Transaction.");
          if (response.getTransactionResponse().getErrors() != null) {
            console.log(
              "Error Code: " +
                response
                  .getTransactionResponse()
                  .getErrors()
                  .getError()[0]
                  .getErrorCode()
            );
            console.log(
              "Error message: " +
                response
                  .getTransactionResponse()
                  .getErrors()
                  .getError()[0]
                  .getErrorText()
            );
          }
        }
      } else {
        console.log("Failed Transaction. ");
        if (
          response.getTransactionResponse() != null &&
          response.getTransactionResponse().getErrors() != null
        ) {
          console.log(
            "Error Code: " +
              response
                .getTransactionResponse()
                .getErrors()
                .getError()[0]
                .getErrorCode()
          );
          console.log(
            "Error message: " +
              response
                .getTransactionResponse()
                .getErrors()
                .getError()[0]
                .getErrorText()
          );
        } else {
          console.log(
            "Error Code: " + response.getMessages().getMessage()[0].getCode()
          );
          console.log(
            "Error message: " + response.getMessages().getMessage()[0].getText()
          );
        }
      }
    } else {
      console.log("Null Response.");
    }

    return res.json(response);
  });
};

export const paymentAuthorize = async (e, setCart) => {
  let { URL } = process.env;
  e.preventDefault();

  let orderNumber = Array.from(Array(20), () =>
    Math.floor(Math.random() * 20).toString(20)
  ).join("");
  const dateTime = new Date();

  let orderDescription = "";

  let orderDetails = {};

  orderDetails = getOrderDetails("orderDetails");
  let cardInfo = {
    cardHolderName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  };

  try {
    cardInfo.cardHolderName = document.getElementById("cardHolder").value;
  } catch (err) {}
  try {
    cardInfo.cardNumber = document.getElementById("cardNumber").value;
  } catch (err) {}

  try {
    let expiry =
      document.getElementById("expiryMonth").value +
      "/" +
      document.getElementById("expiryYear").value;
    cardInfo.expiry = expiry;
  } catch (err) {}

  try {
    cardInfo.cvv = document.getElementById("cvv2").value;
  } catch (err) {}

  orderDescription =
    cardInfo.cardHolderName + " " + dateTime + " " + orderNumber;

  orderDetails.orderNumber = orderNumber;
  orderDetails.orderDesc = orderDescription;
  orderDetails.date_created = dateTime;

  setOrderDetails("orderDetails", orderDetails);

  const response = await fetch(
    URL + "/api/payment/authorize.net/create-order",
    {
      method: "POST",
      body: JSON.stringify({ orderDetails: orderDetails, cardInfo: cardInfo }),
    }
  );
  const data = await response.json();

  processOrder(data, orderDetails, setCart);
};

const processOrder = (data, orderDetails, setCart) => {
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
    setTimeout(() => {
      Router.push("/thank-you");
    }, 0);
  } else {
    try {
      orderDetails.error = data.transactionResponse.errors.error[0].errorText;
    } catch (err) {
      orderDetails.error = "Something Went Wrong! Please Try Again.";
    }
    setOrderDetails("orderDetails", orderDetails);

    setTimeout(() => {
      Router.push("/error");
    }, 0);
  }
};
