import {
  authenticateMerchant,
  setBillTo,
  setCardValues,
  setDutyAmount,
  setOderDetails,
  setPaymentType,
  setShippingAmount,
  setTaxDetails,
} from "../../../../controllers/authorize.net";

const ApiContracts = require("authorizenet").APIContracts;
const ApiControllers = require("authorizenet").APIControllers;
const SDKConstants = require("authorizenet").Constants;

export default async function handler(req, res) {
  let data = req.body;
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
  var shipTo = new ApiContracts.CustomerAddressType();
  shipTo.setFirstName("China");
  shipTo.setLastName("Bayles");
  shipTo.setCompany("Thyme for Tea");
  shipTo.setAddress("12 Main Street");
  shipTo.setCity("Pecan Springs");
  shipTo.setState("TX");
  shipTo.setZip("44628");
  shipTo.setCountry("USA");

  // SET LINE ITEMS
  var lineItem_id1 = new ApiContracts.LineItemType();
  lineItem_id1.setItemId("1");
  lineItem_id1.setName("vase");
  lineItem_id1.setDescription("cannes logo");
  lineItem_id1.setQuantity("18");
  lineItem_id1.setUnitPrice(45.0);

  var lineItem_id2 = new ApiContracts.LineItemType();
  lineItem_id2.setItemId("2");
  lineItem_id2.setName("vase2");
  lineItem_id2.setDescription("cannes logo2");
  lineItem_id2.setQuantity("28");
  lineItem_id2.setUnitPrice("25.00");

  var lineItemList = [];
  lineItemList.push(lineItem_id1);
  lineItemList.push(lineItem_id2);

  var lineItems = new ApiContracts.ArrayOfLineItem();
  lineItems.setLineItem(lineItemList);

  /********* PREVENT DUPLICATE TRANSACTION 
  var transactionSetting1 = new ApiContracts.SettingType();
  transactionSetting1.setSettingName("duplicateWindow");
  transactionSetting1.setSettingValue("120");
  *****************/

  // SET RECURRING BILLING TRUE OR FALSE
  var transactionSetting2 = new ApiContracts.SettingType();
  transactionSetting2.setSettingName("recurringBilling");
  transactionSetting2.setSettingValue("false");

  var transactionSettingList = [];
  //transactionSettingList.push(transactionSetting1);
  transactionSettingList.push(transactionSetting2);

  var transactionSettings = new ApiContracts.ArrayOfSetting();
  transactionSettings.setSetting(transactionSettingList);

  // SET TRANSACTION TYPE LIKE authOnlyTransaction OR authCaptureTransaction OR captureOnlyTransaction
  //  OR  priorAuthCaptureTransaction or refundTransaction
  var transactionRequestType = new ApiContracts.TransactionRequestType();
  transactionRequestType.setTransactionType(
    ApiContracts.TransactionTypeEnum.AUTHCAPTURETRANSACTION
  );

  // PASS VALUES TO TRANSTION TYPE
  transactionRequestType.setPayment(paymentType);
  transactionRequestType.setAmount(amount);
  transactionRequestType.setLineItems(lineItems);
  transactionRequestType.setUserFields(userFields);
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

  var ctrl = new ApiControllers.CreateTransactionController(
    createRequest.getJSON()
  );
  //UNCOMMENT BELOW IF YOU WANT TO SWICH FROM SANDBOX TO LIVE
  //ctrl.setEnvironment(SDKConstants.endpoint.production);

  // DO THE TRANSCTION
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
}
