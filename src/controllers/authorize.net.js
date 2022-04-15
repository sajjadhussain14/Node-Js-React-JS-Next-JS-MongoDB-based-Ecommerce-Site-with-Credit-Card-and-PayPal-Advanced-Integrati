export const authenticateMerchant = (ApiContracts) => {
  const merchantAuthenticationType =
    new ApiContracts.MerchantAuthenticationType();
  merchantAuthenticationType.setName(process.env.AUTHORIZE_API_LOGIN_ID);
  merchantAuthenticationType.setTransactionKey(
    process.env.AUTHORIZE_API_LOGIN_ID
  );
  return merchantAuthenticationType;
};

export const setCardValues = (ApiContracts, cardInfo) => {
  const creditCard = new ApiContracts.CreditCardType();
  creditCard.setCardNumber(cc);
  creditCard.setExpirationDate(expire);
  creditCard.setCardCode(cvv);
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
  tax.setAmount(orderData.order.tax.amount);
  tax.setName(orderData.order.tax.name);
  tax.setDescription(orderData.order.tax.description);
  return tax;
};

export const setDutyAmount = (ApiContracts, orderData) => {
  const duty = new ApiContracts.ExtendedAmountType();
  duty.setAmount(orderData.order.duty.amount);
  duty.setName(norderData.order.duty.name);
  duty.setDescription(orderData.order.duty.description);
  return duty;
};

export const setShippingAmount = (ApiContracts, orderData) => {
  const shipping = new ApiContracts.ExtendedAmountType();
  shipping.setAmount(orderData.order.shipping.amount);
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
  billTo.setState(setStateorderData.user.billing.state);
  billTo.setZip(orderData.user.billing.zip_code);
  billTo.setCountry(orderData.user.billing.country);
  return billTo;
};
