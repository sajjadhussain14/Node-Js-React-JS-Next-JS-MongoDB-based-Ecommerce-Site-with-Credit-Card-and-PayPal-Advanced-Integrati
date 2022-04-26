import React from "react";
import {
  getCurrentUserData,
  updateAccountInfo,
} from "../../controllers/account";
import {
  validate,
  autoValidate,
  validatedStatus,
  loadMoveScripts,
} from "../../controllers/smartValidator";

import "../../controllers/smartValidator";

const ShippingInfo = (props) => {
  loadMoveScripts();

  autoValidate();
  let fname = "";
  let lname = "";
  let phone = "";
  let email = "";
  let password = "";
  let address1 = "";
  let address2 = "";
  let city = "";
  let state = "";
  let zcode = "";
  let country = "";

  try {
    fname = props.userData.shipping.first_name;
  } catch (err) {}
  try {
    lname = props.userData.shipping.last_name;
  } catch (err) {}
  try {
    phone = props.userData.shipping.phone;
  } catch (err) {}
  try {
    email = props.userData.shipping.email;
  } catch (err) {}
  try {
    password = props.userData.shipping.password;
  } catch (err) {}
  try {
    address1 = props.userData.shipping.address1;
  } catch (err) {}
  try {
    address2 = props.userData.shipping.address2;
  } catch (err) {}
  try {
    city = props.userData.shipping.city;
  } catch (err) {}
  try {
    state = props.userData.shipping.state;
  } catch (err) {}
  try {
    zcode = props.userData.shipping.zip_code;
  } catch (err) {}
  try {
    country = props.userData.shipping.country;
  } catch (err) {}
  return (
    <fieldset id="wizard-p-0" className="wizard-fieldset show">
      <h5>Shipping Information</h5>
      <form name="shippingForm" id="shippingForm">
        <div className="row mx-0">
          <div className="form-group col-lg-6 col-md-6 col-sm-12 col-12">
            <label className="loginLabel form-label">First Name:*</label>

            <input
              type="text"
              className="form-control"
              id="shipping_fname"
              name="First Name"
              placeholder="First Name*"
              defaultValue={fname}
              isRequired="true"
              isAlpha="true"
            />
            <div id="shipping_fname-error" className="text-danger"></div>
          </div>
          <div className="form-group col-lg-6 col-md-6 col-sm-12 col-12">
            <label className="loginLabel form-label">Last Name:*</label>

            <input
              type="text"
              className="form-control"
              id="shipping_lname"
              name="Last Name"
              placeholder="Last Name*"
              defaultValue={lname}
              isRequired="true"
              isAlpha="true"
            />
            <div id="shipping_lname-error" className="text-danger"></div>
          </div>
          <div className="form-group col-lg-6 col-md-6 col-sm-12 col-12">
            <label className="loginLabel form-label">Email:*</label>

            <input
              isEmail="true"
              type="email"
              className="form-control"
              id="shipping_email"
              name="Email"
              placeholder="Email*"
              defaultValue={email}
            />
            <div id="shipping_email-error" className="text-danger"></div>
          </div>
          <div className="form-group col-lg-6 col-md-6 col-sm-12 col-12">
            <label className="loginLabel form-label">City:*</label>

            <input
              type="text"
              className="form-control"
              id="shipping_city"
              name="City"
              placeholder="City*"
              defaultValue={city}
              isRequired="true"
              isAlpha="true"
            />
            <div id="shipping_city-error" className="text-danger"></div>
          </div>
          <div className="form-group col-12">
            <label className="loginLabel form-label">State:*</label>

            <input
              type="text"
              className="form-control"
              id="shipping_address1"
              name="Street"
              placeholder="Street*"
              defaultValue={address1}
              isRequired="true"
            />
            <div id="shipping_address1-error" className="text-danger"></div>
          </div>

          <div className="form-group col-12">
            <label className="loginLabel form-label">Unit/Suit:*</label>

            <input
              type="text"
              className="form-control"
              id="shipping_address2"
              name="Unit/Suite"
              placeholder="Unit/Suite:*"
              defaultValue={address2}
              isRequired="true"
            />
            <div id="shipping_address2-error" className="text-danger"></div>
          </div>
          <div className="form-group col-lg-6 col-md-6 col-sm-12 col-12">
            <label className="loginLabel form-label">State:*</label>

            <select
              className="form-select col-lg-6 col-md-6 col-sm-12 col-12 form-control"
              aria-label="state select"
              id="shipping_state"
              name="State"
              defaultValue={state}
              isRequired="true"
            >
              <option value="">--</option>

              <option value="AL" selected={state == "AL" ? true : false}>
                Alabama
              </option>

              <option value="AK" selected={state == "AK" ? true : false}>
                Alaska
              </option>

              <option value="AZ" selected={state == "AZ" ? true : false}>
                Arizona
              </option>

              <option value="AR" selected={state == "AR" ? true : false}>
                Arkansas
              </option>

              <option value="CA" selected={state == "CA" ? true : false}>
                California
              </option>

              <option value="CO" selected={state == "CO" ? true : false}>
                Colorado
              </option>

              <option value="CT" selected={state == "CT" ? true : false}>
                Connecticut
              </option>

              <option value="DE" selected={state == "DE" ? true : false}>
                Delaware
              </option>

              <option value="DC" selected={state == "DC" ? true : false}>
                District of Columbia
              </option>

              <option value="FL" selected={state == "FL" ? true : false}>
                Florida
              </option>

              <option value="GA" selected={state == "GA" ? true : false}>
                Georgia
              </option>

              <option value="ID" selected={state == "ID" ? true : false}>
                Idaho
              </option>

              <option value="IL" selected={state == "IL" ? true : false}>
                Illinois
              </option>

              <option value="IN" selected={state == "IN" ? true : false}>
                Indiana
              </option>

              <option value="IA" selected={state == "IA" ? true : false}>
                Iowa
              </option>

              <option value="KS" selected={state == "KS" ? true : false}>
                Kansas
              </option>

              <option value="KY" selected={state == "KY" ? true : false}>
                Kentucky
              </option>

              <option value="LA" selected={state == "LA" ? true : false}>
                Louisiana
              </option>

              <option value="ME" selected={state == "ME" ? true : false}>
                Maine
              </option>

              <option value="MD" selected={state == "MD" ? true : false}>
                Maryland
              </option>

              <option value="MA" selected={state == "MA" ? true : false}>
                Massachusetts
              </option>

              <option value="MI" selected={state == "MI" ? true : false}>
                Michigan
              </option>

              <option value="MN" selected={state == "MN" ? true : false}>
                Minnesota
              </option>

              <option value="MS" selected={state == "MS" ? true : false}>
                Mississippi
              </option>

              <option value="MO" selected={state == "MO" ? true : false}>
                Missouri
              </option>

              <option value="MT" selected={state == "MT" ? true : false}>
                Montana
              </option>

              <option value="NE" selected={state == "NE" ? true : false}>
                Nebraska
              </option>

              <option value="NV" selected={state == "NV" ? true : false}>
                Nevada
              </option>

              <option value="NH" selected={state == "NH" ? true : false}>
                New Hampshire
              </option>

              <option value="NJ" selected={state == "NJ" ? true : false}>
                New Jersey
              </option>

              <option value="NM" selected={state == "NM" ? true : false}>
                New Mexico
              </option>

              <option value="NY" selected={state == "NY" ? true : false}>
                New York
              </option>

              <option value="NC" selected={state == "NC" ? true : false}>
                North Carolina
              </option>

              <option value="ND" selected={state == "ND" ? true : false}>
                North Dakota
              </option>

              <option value="OH" selected={state == "OH" ? true : false}>
                Ohio
              </option>

              <option value="OK" selected={state == "OK" ? true : false}>
                Oklahoma
              </option>

              <option value="OR" selected={state == "OR" ? true : false}>
                Oregon
              </option>

              <option value="PA" selected={state == "PA" ? true : false}>
                Pennsylvania
              </option>

              <option value="RI" selected={state == "RI" ? true : false}>
                Rhode Island
              </option>

              <option value="SC" selected={state == "SC" ? true : false}>
                South Carolina
              </option>

              <option value="SD" selected={state == "SD" ? true : false}>
                South Dakota
              </option>

              <option value="TN" selected={state == "TN" ? true : false}>
                Tennessee
              </option>

              <option value="TX" selected={state == "TX" ? true : false}>
                Texas
              </option>

              <option value="UT" selected={state == "UT" ? true : false}>
                Utah
              </option>

              <option value="VT" selected={state == "VT" ? true : false}>
                Vermont
              </option>

              <option value="VA" selected={state == "VA" ? true : false}>
                Virginia
              </option>

              <option value="WA" selected={state == "WA" ? true : false}>
                Washington
              </option>

              <option value="WV" selected={state == "WV" ? true : false}>
                West Virginia
              </option>

              <option value="WI" selected={state == "WI" ? true : false}>
                Wisconsin
              </option>

              <option value="WY" selected={state == "WY" ? true : false}>
                Wyoming
              </option>
            </select>
            <div id="shipping_state-error" className="text-danger"></div>
          </div>

          <div className="form-group col-lg-6 col-md-6 col-sm-12 col-12">
            <select
              className="form-select col-lg-6 col-md-6 col-sm-12 col-12 form-control"
              aria-label="CountrySelect"
              id="shipping_country"
              name="Country"
              defaultValue={country}
              isRequired="true"
            >
              <option value="">Country</option>
              <option value="US" selected={country == "US" ? true : false}>
                United States
              </option>
            </select>
            <div id="shipping_country-error" className="text-danger"></div>
          </div>

          <div className="form-group col-lg-6 col-md-6 col-sm-12 col-12">
            <input
              type="text"
              className="form-control"
              id="shipping_zcode"
              name="Zip Code"
              placeholder="Zip Code*"
              defaultValue={zcode}
              isZip="true"
            />
            <div id="shipping_zcode-error" className="text-danger"></div>
          </div>
          <div className="form-group col-lg-6 col-md-6 col-sm-12 col-12">
            <input
              type="text"
              className="form-control"
              id="shipping_phone"
              name="Phone"
              placeholder="Phone*"
              defaultValue={phone}
              isPhone="true"
            />
            <div id="shipping_phone-error" className="text-danger"></div>
          </div>
          <div className="form-group clearfix col-12 text-left">
            <a
              href="javascript:;"
              className="form-wizard-next-btn"
              formID="shippingForm"
              onClick={(e) => {
                validate("shippingForm");

                if (validatedStatus == true) {
                  document.getElementById("wizard-t-1").style.background =
                    "#6d7f52";

                  UpdateShipping(e, props.userData, props.setUserData);
                }
              }}
            >
              Next
            </a>
          </div>
        </div>
      </form>
    </fieldset>
  );
};

export default ShippingInfo;

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
