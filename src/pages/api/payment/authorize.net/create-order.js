import {
  authenticateMerchant,
  preventDuplicateTransaction,
  processTransaction,
  setBillTo,
  setCardValues,
  setDutyAmount,
  setLineItems,
  setOderDetails,
  setPaymentType,
  setRecurringBilling,
  setShippingAmount,
  setShipTo,
  setTaxDetails,
  setTransactionType,
} from "../../../../controllers/authorize.net";

const ApiContracts = require("authorizenet").APIContracts;
const ApiControllers = require("authorizenet").APIControllers;
const SDKConstants = require("authorizenet").Constants;

export default async function handler(req, res) {
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

  var transactionController = new ApiControllers.CreateTransactionController(
    createRequest.getJSON()
  );
  //UNCOMMENT BELOW IF YOU WANT TO SWICH FROM SANDBOX TO LIVE
  //ctrl.setEnvironment(SDKConstants.endpoint.production);

  // DO THE TRANSCTION

  processTransaction(ApiContracts, transactionController, res);
}
