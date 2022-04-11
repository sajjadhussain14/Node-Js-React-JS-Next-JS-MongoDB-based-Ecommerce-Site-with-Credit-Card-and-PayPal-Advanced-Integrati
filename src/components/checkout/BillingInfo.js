import React, { useState } from "react";
import {
  editBillingAddress,
  sameBillingAsShippingAddress,
} from "../../controllers/checkout";
import {
  getCurrentUserData,
  updateAccountInfo,
} from "../../controllers/account";

const BillingInfo = (props) => {
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

      {billingEdit ? (
        <div className="row mx-0">
          <div className="form-group col-lg-6 col-md-6 col-sm-12 col-12">
            <input
              type="text"
              className="form-control"
              id="billing_fname"
              placeholder="First Name*"
              defaultValue={fname}
            />
            <div className="wizard-form-error"></div>
          </div>
          <div className="form-group col-lg-6 col-md-6 col-sm-12 col-12">
            <input
              type="text"
              className="form-control"
              id="billing_lname"
              defaultValue={lname}
              placeholder="Last Name"
            />
            <div className="wizard-form-error"></div>
          </div>

          <div className="form-group col-lg-6 col-md-6 col-sm-12 col-12">
            <input
              type="email"
              className="form-control"
              id="billing_email"
              defaultValue={email}
              placeholder="Email"
            />
            <div className="wizard-form-error"></div>
          </div>

          <div className="form-group col-lg-6 col-md-6 col-sm-12 col-12">
            <input
              type="password"
              className="form-control"
              id="billing_password"
              defaultValue={password}
              placeholder="Password"
            />
            <div className="wizard-form-error"></div>
          </div>

          <div className="form-group col-lg-6 col-md-6 col-sm-12 col-12">
            <input
              type="password"
              className="form-control"
              id="billing_cpassword"
              defaultValue={password}
              placeholder="Confirm Password"
            />
            <div className="wizard-form-error"></div>
          </div>

          <div className="form-group col-lg-6 col-md-6 col-sm-12 col-12">
            <input
              type="text"
              className="form-control"
              id="billing_city"
              defaultValue={city}
              placeholder="City"
            />
            <div className="wizard-form-error"></div>
          </div>

          <div className="form-group col-lg-12 col-md-12 col-sm-12 col-12">
            <input
              type="text"
              className="form-control"
              id="billing_address1"
              defaultValue={address1}
              placeholder="Street"
            />
            <div className="wizard-form-error"></div>
          </div>

          <div className="form-group col-lg-12 col-md-12 col-sm-12 col-12">
            <input
              type="text"
              className="form-control"
              id="billing_address2"
              defaultValue={address2}
              placeholder="Suit/Unit"
            />
            <div className="wizard-form-error"></div>
          </div>

          <div className="form-group col-lg-6 col-md-6 col-sm-12 col-12">
            <select className="form-control">
              <select
                className="form-select col-lg-6 col-md-6 col-sm-12 col-12 form-control"
                aria-label="state select"
                id="billing_state"
                defaultValue={state}
                placeholder="State"
              >
                <option value="--" data-type="STATE">
                  --
                </option>

                <option value="Alabama" data-type="STATE">
                  Alabama
                </option>

                <option value="Alaska" data-type="STATE">
                  Alaska
                </option>

                <option value="Arizona" data-type="STATE">
                  Arizona
                </option>

                <option value="Arkansas" data-type="STATE">
                  Arkansas
                </option>

                <option value="California" data-type="STATE">
                  California
                </option>

                <option value="Colorado" data-type="STATE">
                  Colorado
                </option>

                <option value="Connecticut" data-type="STATE">
                  Connecticut
                </option>

                <option value="Delaware" data-type="STATE">
                  Delaware
                </option>

                <option value="District of Columbia" data-type="STATE">
                  District of Columbia
                </option>

                <option value="Florida" data-type="STATE">
                  Florida
                </option>

                <option value="Georgia" data-type="STATE">
                  Georgia
                </option>

                <option value="Idaho" data-type="STATE">
                  Idaho
                </option>

                <option value="Illinois" data-type="STATE">
                  Illinois
                </option>

                <option value="Indiana" data-type="STATE" selected="selected">
                  Indiana
                </option>

                <option value="Iowa" data-type="STATE">
                  Iowa
                </option>

                <option value="Kansas" data-type="STATE">
                  Kansas
                </option>

                <option value="Kentucky" data-type="STATE">
                  Kentucky
                </option>

                <option value="Louisiana" data-type="STATE">
                  Louisiana
                </option>

                <option value="Maine" data-type="STATE">
                  Maine
                </option>

                <option value="Maryland" data-type="STATE">
                  Maryland
                </option>

                <option value="Massachusetts" data-type="STATE">
                  Massachusetts
                </option>

                <option value="Michigan" data-type="STATE">
                  Michigan
                </option>

                <option value="Minnesota" data-type="STATE">
                  Minnesota
                </option>

                <option value="Mississippi" data-type="STATE">
                  Mississippi
                </option>

                <option value="Missouri" data-type="STATE">
                  Missouri
                </option>

                <option value="Montana" data-type="STATE">
                  Montana
                </option>

                <option value="Nebraska" data-type="STATE">
                  Nebraska
                </option>

                <option value="Nevada" data-type="STATE">
                  Nevada
                </option>

                <option value="New Hampshire" data-type="STATE">
                  New Hampshire
                </option>

                <option value="New Jersey" data-type="STATE">
                  New Jersey
                </option>

                <option value="New Mexico" data-type="STATE">
                  New Mexico
                </option>

                <option value="New York" data-type="STATE">
                  New York
                </option>

                <option value="North Carolina" data-type="STATE">
                  North Carolina
                </option>

                <option value="North Dakota" data-type="STATE">
                  North Dakota
                </option>

                <option value="Ohio" data-type="STATE">
                  Ohio
                </option>

                <option value="Oklahoma" data-type="STATE">
                  Oklahoma
                </option>

                <option value="Oregon" data-type="STATE">
                  Oregon
                </option>

                <option value="Pennsylvania" data-type="STATE">
                  Pennsylvania
                </option>

                <option value="Rhode Island" data-type="STATE">
                  Rhode Island
                </option>

                <option value="South Carolina" data-type="STATE">
                  South Carolina
                </option>

                <option value="South Dakota" data-type="STATE">
                  South Dakota
                </option>

                <option value="Tennessee" data-type="STATE">
                  Tennessee
                </option>

                <option value="Texas" data-type="STATE">
                  Texas
                </option>

                <option value="Utah" data-type="STATE">
                  Utah
                </option>

                <option value="Vermont" data-type="STATE">
                  Vermont
                </option>

                <option value="Virginia" data-type="STATE">
                  Virginia
                </option>

                <option value="Washington" data-type="STATE">
                  Washington
                </option>

                <option value="West Virginia" data-type="STATE">
                  West Virginia
                </option>

                <option value="Wisconsin" data-type="STATE">
                  Wisconsin
                </option>

                <option value="Wyoming" data-type="STATE">
                  Wyoming
                </option>
              </select>
            </select>
            <div className="wizard-form-error"></div>
          </div>

          <div className="form-group col-lg-6 col-md-6 col-sm-12 col-12">
            <select
              className="form-control"
              id="billing_country"
              defaultValue={country}
              placeholder="Country"
            >
              <option selected>Country</option>
              <option value="">US</option>
            </select>
            <div className="wizard-form-error"></div>
          </div>

          <div className="form-group col-lg-6 col-md-6 col-sm-12 col-12">
            <input
              type="text"
              className="form-control"
              id="billing_zcode"
              defaultValue={zcode}
              placeholder="Zip Code"
            />
            <div className="wizard-form-error"></div>
          </div>

          <div className="form-group col-lg-6 col-md-6 col-sm-12 col-12">
            <input
              type="text"
              className="form-control"
              id="billing_phone"
              defaultValue={phone}
              placeholder="Phone"
            />
            <div className="wizard-form-error"></div>
          </div>
        </div>
      ) : (
        ""
      )}
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
        <a
          href="javascript:;"
          className="form-wizard-next-btn float-right"
          onClick={(e) => {
            UpdateBilling(e, props.userData, props.setUserData);
          }}
        >
          Next
        </a>
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
