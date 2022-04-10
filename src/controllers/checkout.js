export const selectShipping = (e, setShippingCharges, setShippingMethod) => {
  e.preventDefault();
  // setShippingCharges(e.target.value);
  // setShippingMethod(e.target.getAttribute("data-name"));
};

export const sameBillingAsShippingAddress = (
  e,
  userData,
  setUserData,
  setSameBillingAsShipping,
  setBillingEdit
) => {
  e.preventDefault();
  let ship = userData.shipping;
  let bil = userData.billing;

  let newUserdata = userData;
  newUserdata.billing = ship;
  setUserData(newUserdata);
  setSameBillingAsShipping(true);
  setBillingEdit(false);
};

export const editBillingAddress = (
  e,
  setBillingEdit,
  setSameBillingAsShipping
) => {
  setBillingEdit(true);
  setSameBillingAsShipping(false);
};
