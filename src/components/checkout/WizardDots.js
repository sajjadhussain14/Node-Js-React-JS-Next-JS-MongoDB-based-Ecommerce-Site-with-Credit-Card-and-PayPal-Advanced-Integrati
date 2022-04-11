import React from "react";
import {
  getCurrentUserData,
  updateAccountInfo,
} from "../../controllers/account";

const WizardDots = (props) => {
  return (
    <section id="wizard-dots" className="form-wizard-header">
      <p>Fill all form field to go next step</p>
      <div className="steps clearfix">
        <ul role="tablist">
          <li
            role="tab"
            aria-disabled="false"
            className="first checked done"
            aria-selected="false"
          >
            <a id="wizard-t-0" href="javascript:void(0)">
              <span className="number">1.</span>
            </a>
          </li>
          <li
            role="tab"
            aria-disabled="false"
            className="prev"
            aria-selected="true"
          >
            <a
              id="wizard-t-1"
              href="javascript:void(0)"
              aria-controls="wizard-p-1"
              onClick={(e) => {
                UpdateShipping(e, props.userData, props.setUserData);
              }}
            >
              <span className="current-info audible">current step: </span>
              <span className="number">2.</span>
            </a>
          </li>
          <li
            role="tab"
            aria-disabled="false"
            className="current"
            aria-selected="true"
          >
            <a id="wizard-t-2" href="#wizard-h-2" aria-controls="wizard-p-1">
              <span className="current-info audible">current step: </span>
              <span className="number">3.</span>
            </a>
          </li>
          <li role="tab" aria-disabled="false" className="last">
            <a
              id="wizard-t-3"
              href="javascript:void(0)"
              aria-controls="wizard-p-3"
              onClick={(e) => {
                UpdateBilling(e, props.userData, props.setUserData);
              }}
            >
              <span className="number">4.</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

const UpdateShipping = async (e, userData, setUserData) => {
  e.preventDefault();
  let { URL } = process.env;

  let shipping = {
    first_name: document.getElementById("shipping_fname").value,
    last_name: document.getElementById("shipping_lname").value,
    phone: document.getElementById("shipping_phone").value,
    address1: document.getElementById("shipping_address1").value,
    address2: document.getElementById("shipping_address2").value,
    email: document.getElementById("shipping_email").value,
    city: document.getElementById("shipping_city").value,
    state: document.getElementById("shipping_state").value,
    zip_code: document.getElementById("shipping_zcode").value,
    country: document.getElementById("shipping_country").value,
  };
  let newUser = userData;
  newUser = { ...newUser, shipping: shipping };

  let response = await updateAccountInfo(e, newUser);
  if (response.status == 200) {
    let user = await getCurrentUserData(e);
    setUserData(user);
  }
};

const UpdateBilling = async (e, userData, setUserData) => {
  e.preventDefault();
  let { URL } = process.env;
  try {
    let billing = {
      first_name: document.getElementById("billing_fname").value,
      last_name: document.getElementById("billing_lname").value,
      phone: document.getElementById("billing_phone").value,
      address1: document.getElementById("billing_address1").value,
      address2: document.getElementById("billing_address2").value,
      email: document.getElementById("billing_email").value,
      city: document.getElementById("billing_city").value,
      state: document.getElementById("billing_state").value,
      zip_code: document.getElementById("billing_zcode").value,
      country: document.getElementById("billing_country").value,
    };
    let newUser = userData;
    newUser = { ...newUser, billing: billing };

    let response = await updateAccountInfo(e, newUser);
    if (response.status == 200) {
      let user = await getCurrentUserData(e);
      setUserData(user);
    }
  } catch (err) {}
};

export default WizardDots;
