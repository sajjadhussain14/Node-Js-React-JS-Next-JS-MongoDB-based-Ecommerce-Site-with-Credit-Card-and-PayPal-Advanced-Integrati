import React, { useState } from "react";
import {
  editBillingAddress,
  sameBillingAsShippingAddress,
} from "../../controllers/checkout";
import {
  getCurrentUserData,
  updateAccountInfo,
} from "../../controllers/account";

import {
  passwordMatch,
  validate,
  autoValidate,
  validatedStatus,
} from "../../controllers/smartValidator";

const BillingInfo = (props) => {
  autoValidate();
  const [billingEdit, setBillingEdit] = useState(false);
  const [sameBillingAsShipping, setSameBillingAsShipping] = useState(false);
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
    fname = props.userData.billing.first_name;
  } catch (err) {}
  try {
    lname = props.userData.billing.last_name;
  } catch (err) {}
  try {
    phone = props.userData.billing.phone;
  } catch (err) {}
  try {
    email = props.userData.billing.email;
  } catch (err) {}
  try {
    password = props.userData.billing.password;
  } catch (err) {}
  try {
    address1 = props.userData.billing.address1;
  } catch (err) {}
  try {
    address2 = props.userData.billing.address2;
  } catch (err) {}
  try {
    city = props.userData.billing.city;
  } catch (err) {}
  try {
    state = props.userData.billing.state;
  } catch (err) {}
  try {
    zcode = props.userData.billing.zip_code;
  } catch (err) {}
  try {
    country = props.userData.billing.country;
  } catch (err) {}

  return (
    <fieldset className="wizard-fieldset">
      <div id="billingAddress" className="row">
        {fname && fname != "" ? (
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <strong className="font-weight-bold">Billing Address</strong>
            <p>{fname + " " + lname}</p>
            <p>{address1}</p>
            <p>{address2}</p>
            <p>
              {state}, {zcode}
            </p>
            <p>{country}</p>
            <a
              className="edit text-info"
              href="javascript:;"
              onClick={(e) => {
                editBillingAddress(e, setBillingEdit, setSameBillingAsShipping);
              }}
            >
              <strong> Edit</strong>
            </a>
          </div>
        ) : (
          ""
        )}
        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
          <a
            className="shipping"
            href="javascript:;"
            onClick={(e) => {
              sameBillingAsShippingAddress(
                e,
                props.userData,
                props.setUserData,
                setSameBillingAsShipping,
                setBillingEdit
              );
            }}
          >
            Same as Shipping
          </a>
        </div>
      </div>
      <form name="billingForm" id="billingForm">
        <div className={billingEdit ? "row mx-0 " : "row mx-0 d-none"}>
          <div className="form-group col-lg-6 col-md-6 col-sm-12 col-12">
            <label className="loginLabel form-label">First Name:*</label>

            <input
              type="text"
              className="form-control"
              id="billing_fname"
              name="First Name"
              placeholder="First Name*"
              defaultValue={fname}
              isAlpha="true"
            />
            <div id="billing_fname-error" className="text-danger"></div>
          </div>
          <div className="form-group col-lg-6 col-md-6 col-sm-12 col-12">
            <label className="loginLabel form-label">Last Name:*</label>

            <input
              type="text"
              className="form-control"
              id="billing_lname"
              name="Last Name"
              defaultValue={lname}
              placeholder="Last Name"
              isAlpha="true"
            />
            <div id="billing_lname-error" className="text-danger"></div>
          </div>

          <div className="form-group col-lg-6 col-md-6 col-sm-12 col-12">
            <label className="loginLabel form-label">Email:*</label>

            <input
              type="email"
              className="form-control"
              id="billing_email"
              name="Email"
              defaultValue={email}
              placeholder="Email"
              isEmail="true"
            />
            <div id="billing_email-error" className="text-danger"></div>
          </div>

          <div className="form-group col-lg-6 col-md-6 col-sm-12 col-12">
            <label className="loginLabel form-label">City:*</label>

            <input
              type="text"
              className="form-control"
              id="billing_city"
              name="City"
              defaultValue={city}
              placeholder="City"
              isAlpha="true"
            />
            <div id="billing_city-error" className="text-danger"></div>
          </div>

          <div className="form-group col-lg-12 col-md-12 col-sm-12 col-12">
            <label className="loginLabel form-label">Street:*</label>

            <input
              type="text"
              className="form-control"
              id="billing_address1"
              name="Street"
              defaultValue={address1}
              placeholder="Street"
              isRequired="true"
            />
            <div id="billing_address1-error" className="text-danger"></div>
          </div>

          <div className="form-group col-lg-12 col-md-12 col-sm-12 col-12">
            <label className="loginLabel form-label">Suit/Unit:*</label>

            <input
              type="text"
              className="form-control"
              id="billing_address2"
              name="Suit/Unit"
              defaultValue={address2}
              placeholder="Suit/Unit"
            />
            <div id="billing_address2-error" className="text-danger"></div>
          </div>

          <div className="form-group col-lg-6 col-md-6 col-sm-12 col-12">
            <label className="loginLabel form-label">State:*</label>

            <select
              className="form-select col-lg-6 col-md-6 col-sm-12 col-12 form-control"
              aria-label="state select"
              id="billing_state"
              name="State"
              defaultValue={state}
              placeholder="State"
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
            <div id="billing_state-error" className="text-danger"></div>
          </div>

          <div className="form-group col-lg-6 col-md-6 col-sm-12 col-12">
            <label className="loginLabel form-label">Country:*</label>

            <select
              className="form-select col-lg-6 col-md-6 col-sm-12 col-12 form-control"
              id="billing_country"
              name="Country"
              defaultValue={country}
              placeholder="Country"
              isRequired="true"
            >
              <option value="">Country</option>
              <option value="US" selected={country == "US" ? true : false}>
                United States
              </option>
            </select>
            <div id="billing_country-error" className="text-danger"></div>
          </div>

          <div className="form-group col-lg-6 col-md-6 col-sm-12 col-12">
            <label className="loginLabel form-label">Zip Code:*</label>

            <input
              type="text"
              className="form-control"
              id="billing_zcode"
              name="Zip Code"
              defaultValue={zcode}
              placeholder="Zip Code"
              isZip="true"
            />
            <div id="billing_zcode-error" className="text-danger"></div>
          </div>

          <div className="form-group col-lg-6 col-md-6 col-sm-12 col-12">
            <label className="loginLabel form-label">Phone:*</label>

            <input
              type="text"
              className="form-control"
              id="billing_phone"
              name="Phome"
              defaultValue={phone}
              placeholder="Phone"
              isPhone="true"
            />
            <div id="billing_phone-error" className="text-danger"></div>
          </div>
        </div>
        {billingEdit ? (
          <button
            className="btn"
            onClick={() => {
              setBillingEdit(false);
            }}
          >
            Cancel
          </button>
        ) : (
          ""
        )}
      </form>

      <br />

      {sameBillingAsShipping ? (
        <div className="alert alert-dark" role="alert">
          Same Billing has been Selected as Shipping
        </div>
      ) : (
        ""
      )}
      <br />

      <div className="form-group clearfix">
        <a href="javascript:;" className="form-wizard-previous-btn float-left">
          Previous
        </a>

        <>
          <a
            href="javascript:;"
            className="form-wizard-next-btn float-right"
            formID={billingEdit ? "billingForm" : "PassValidation"}
            onClick={(e) => {
              if (billingEdit == true) {
                validate("billingForm");
                if (validatedStatus == true) {
                  UpdateBilling(e, props.userData, props.setUserData);
                }
              } else {
                UpdateBilling(e, props.userData, props.setUserData);
              }
            }}
          >
            Next
          </a>
        </>
      </div>
    </fieldset>
  );
};

export default BillingInfo;

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
