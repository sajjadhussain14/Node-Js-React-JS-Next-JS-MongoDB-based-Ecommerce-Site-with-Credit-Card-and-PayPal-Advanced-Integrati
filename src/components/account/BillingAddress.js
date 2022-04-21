import React, { useState } from "react";
import {
  getCurrentUserData,
  updateAccountInfo,
} from "../../controllers/account";

import {
  autoValidate,
  validatedStatus,
  validate,
} from "../../controllers/smartValidator";

const BillingAddress = (props) => {
  autoValidate();
  const [editBillingFlag, setEditBillingFlag] = useState(false);
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
    <>
      <div className="row">
        {fname && fname != "" && editBillingFlag == false ? (
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
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
                setEditBillingFlag(true);
              }}
            >
              <strong> Edit</strong>
            </a>
          </div>
        ) : (
          <>
            {editBillingFlag == false ? (
              <>
                No Billing Address Found. &nbsp;&nbsp;
                <button
                  className=" btn btn-secondary"
                  href="javascript:;"
                  onClick={(e) => {
                    setEditBillingFlag(true);
                  }}
                >
                  <strong> Enter Billing Address</strong>
                </button>
              </>
            ) : (
              ""
            )}
          </>
        )}
      </div>
      {editBillingFlag ? (
        <div className="row">
          <div className="col-md-12">
            <form name="billingForm" id="billingForm">
              <div id="divAddressContainer" className="row">
                <div className="accountHolder col-12 col-sm-6">
                  <p>
                    <label className="loginLabel form-label">
                      First Name:*
                    </label>
                    <br clear="all" />
                    <input
                      name="First Name"
                      type="text"
                      defaultValue={fname}
                      id="first_name"
                      className="loginInput form-control"
                      isAlpha="true"
                    />
                    <div id="first_name-error" className="text-danger"></div>
                  </p>

                  <p>
                    <label className="loginLabel form-label">Last Name:*</label>
                    <br clear="all" />
                    <input
                      name="Last Name"
                      type="text"
                      defaultValue={lname}
                      id="last_name"
                      className="loginInput form-control"
                      isAlpha="true"
                    />
                    <div id="last_name-error" className="text-danger"></div>
                  </p>

                  <p>
                    <label className="loginLabel form-label">Phone:*</label>
                    <br clear="all" />
                    <input
                      name="Phone"
                      type="text"
                      defaultValue={phone}
                      id="phone"
                      className="loginInput form-control"
                      isPhone="true"
                    />
                    <div id="phone-error" className="text-danger"></div>
                  </p>

                  <p>
                    <label className="loginLabel form-label">
                      Email Address:*
                    </label>
                    <br clear="all" />
                    <input
                      name="Email"
                      type="text"
                      defaultValue={email}
                      id="email"
                      className="loginInput form-control"
                      isEmail="true"
                    />
                    <div id="email-error" className="text-danger"></div>
                  </p>

                  <p>
                    <label title="passwrd" className="loginLabel form-label">
                      Password:
                    </label>
                    <br className="clear" />
                    <input
                      name="password"
                      type="password"
                      defaultValue={password}
                      id="password"
                      className="loginInput form-control"
                      isRequired="true"
                    />
                    <div id="password-error" className="text-danger"></div>
                  </p>
                </div>
                <div className="accountHolder col-12 col-sm-6">
                  <p>
                    <label className="loginLabel form-label">Street:*</label>
                    <br clear="all" />
                    <input
                      name="Street"
                      type="text"
                      defaultValue={address1}
                      maxLength="30"
                      id="address1"
                      className="loginInput form-control"
                      isRequired="true"
                    />
                    <div id="address1-error" className="text-danger"></div>
                  </p>

                  <p>
                    <label className="loginLabel form-label">Unit/Suite:</label>
                    <br clear="all" />
                    <input
                      type="text"
                      id="address2"
                      name="Unit/Suite"
                      className="loginInput form-control"
                      defaultValue={address2}
                      isRequired="true"
                    />
                    <div id="address2-error" className="text-danger"></div>
                  </p>

                  <p>
                    <label className="loginLabel form-label">City:*</label>
                    <br clear="all" />
                    <input
                      name="City"
                      type="text"
                      defaultValue={city}
                      id="city"
                      className="loginInput form-control"
                      isAlpha="true"
                    />
                    <div id="city-error" className="text-danger"></div>
                  </p>

                  <p>
                    <label title="state" className="loginLabel form-label">
                      State:*
                    </label>
                    <br clear="all" />

                    <select
                      name="State"
                      className="loginSelect"
                      id="state"
                      defaultValue={state}
                      isRequired="true"
                    >
                      <option value="">--</option>

                      <option
                        value="AL"
                        selected={state == "AL" ? true : false}
                      >
                        Alabama
                      </option>

                      <option
                        value="AK"
                        selected={state == "AK" ? true : false}
                      >
                        Alaska
                      </option>

                      <option
                        value="AZ"
                        selected={state == "AZ" ? true : false}
                      >
                        Arizona
                      </option>

                      <option
                        value="AR"
                        selected={state == "AR" ? true : false}
                      >
                        Arkansas
                      </option>

                      <option
                        value="CA"
                        selected={state == "CA" ? true : false}
                      >
                        California
                      </option>

                      <option
                        value="CO"
                        selected={state == "CO" ? true : false}
                      >
                        Colorado
                      </option>

                      <option
                        value="CT"
                        selected={state == "CT" ? true : false}
                      >
                        Connecticut
                      </option>

                      <option
                        value="DE"
                        selected={state == "DE" ? true : false}
                      >
                        Delaware
                      </option>

                      <option
                        value="DC"
                        selected={state == "DC" ? true : false}
                      >
                        District of Columbia
                      </option>

                      <option
                        value="FL"
                        selected={state == "FL" ? true : false}
                      >
                        Florida
                      </option>

                      <option
                        value="GA"
                        selected={state == "GA" ? true : false}
                      >
                        Georgia
                      </option>

                      <option
                        value="ID"
                        selected={state == "ID" ? true : false}
                      >
                        Idaho
                      </option>

                      <option
                        value="IL"
                        selected={state == "IL" ? true : false}
                      >
                        Illinois
                      </option>

                      <option
                        value="IN"
                        selected={state == "IN" ? true : false}
                      >
                        Indiana
                      </option>

                      <option
                        value="IA"
                        selected={state == "IA" ? true : false}
                      >
                        Iowa
                      </option>

                      <option
                        value="KS"
                        selected={state == "KS" ? true : false}
                      >
                        Kansas
                      </option>

                      <option
                        value="KY"
                        selected={state == "KY" ? true : false}
                      >
                        Kentucky
                      </option>

                      <option
                        value="LA"
                        selected={state == "LA" ? true : false}
                      >
                        Louisiana
                      </option>

                      <option
                        value="ME"
                        selected={state == "ME" ? true : false}
                      >
                        Maine
                      </option>

                      <option
                        value="MD"
                        selected={state == "MD" ? true : false}
                      >
                        Maryland
                      </option>

                      <option
                        value="MA"
                        selected={state == "MA" ? true : false}
                      >
                        Massachusetts
                      </option>

                      <option
                        value="MI"
                        selected={state == "MI" ? true : false}
                      >
                        Michigan
                      </option>

                      <option
                        value="MN"
                        selected={state == "MN" ? true : false}
                      >
                        Minnesota
                      </option>

                      <option
                        value="MS"
                        selected={state == "MS" ? true : false}
                      >
                        Mississippi
                      </option>

                      <option
                        value="MO"
                        selected={state == "MO" ? true : false}
                      >
                        Missouri
                      </option>

                      <option
                        value="MT"
                        selected={state == "MT" ? true : false}
                      >
                        Montana
                      </option>

                      <option
                        value="NE"
                        selected={state == "NE" ? true : false}
                      >
                        Nebraska
                      </option>

                      <option
                        value="NV"
                        selected={state == "NV" ? true : false}
                      >
                        Nevada
                      </option>

                      <option
                        value="NH"
                        selected={state == "NH" ? true : false}
                      >
                        New Hampshire
                      </option>

                      <option
                        value="NJ"
                        selected={state == "NJ" ? true : false}
                      >
                        New Jersey
                      </option>

                      <option
                        value="NM"
                        selected={state == "NM" ? true : false}
                      >
                        New Mexico
                      </option>

                      <option
                        value="NY"
                        selected={state == "NY" ? true : false}
                      >
                        New York
                      </option>

                      <option
                        value="NC"
                        selected={state == "NC" ? true : false}
                      >
                        North Carolina
                      </option>

                      <option
                        value="ND"
                        selected={state == "ND" ? true : false}
                      >
                        North Dakota
                      </option>

                      <option
                        value="OH"
                        selected={state == "OH" ? true : false}
                      >
                        Ohio
                      </option>

                      <option
                        value="OK"
                        selected={state == "OK" ? true : false}
                      >
                        Oklahoma
                      </option>

                      <option
                        value="OR"
                        selected={state == "OR" ? true : false}
                      >
                        Oregon
                      </option>

                      <option
                        value="PA"
                        selected={state == "PA" ? true : false}
                      >
                        Pennsylvania
                      </option>

                      <option
                        value="RI"
                        selected={state == "RI" ? true : false}
                      >
                        Rhode Island
                      </option>

                      <option
                        value="SC"
                        selected={state == "SC" ? true : false}
                      >
                        South Carolina
                      </option>

                      <option
                        value="SD"
                        selected={state == "SD" ? true : false}
                      >
                        South Dakota
                      </option>

                      <option
                        value="TN"
                        selected={state == "TN" ? true : false}
                      >
                        Tennessee
                      </option>

                      <option
                        value="TX"
                        selected={state == "TX" ? true : false}
                      >
                        Texas
                      </option>

                      <option
                        value="UT"
                        selected={state == "UT" ? true : false}
                      >
                        Utah
                      </option>

                      <option
                        value="VT"
                        selected={state == "VT" ? true : false}
                      >
                        Vermont
                      </option>

                      <option
                        value="VA"
                        selected={state == "VA" ? true : false}
                      >
                        Virginia
                      </option>

                      <option
                        value="WA"
                        selected={state == "WA" ? true : false}
                      >
                        Washington
                      </option>

                      <option
                        value="WV"
                        selected={state == "WV" ? true : false}
                      >
                        West Virginia
                      </option>

                      <option
                        value="WI"
                        selected={state == "WI" ? true : false}
                      >
                        Wisconsin
                      </option>

                      <option
                        value="WY"
                        selected={state == "WY" ? true : false}
                      >
                        Wyoming
                      </option>
                    </select>
                    <div id="state-error" className="text-danger"></div>
                  </p>

                  <p>
                    <label className="loginLabel form-label">Zip Code:*</label>
                    <br clear="all" />
                    <input
                      name="Zip Code"
                      type="text"
                      defaultValue={zcode}
                      maxLength="10"
                      id="zip_code"
                      className="loginInput form-control"
                      isZip="true"
                    />
                    <div id="zip_code-error" className="text-danger"></div>
                  </p>

                  <p>
                    <label className="loginLabel form-label">Country:*</label>
                    <br clear="all" />

                    <select
                      name="Country"
                      className="loginSelect"
                      id="country"
                      isRequired="true"
                    >
                      <option value="">Country</option>
                      <option
                        value="US"
                        selected={country == "US" ? true : false}
                      >
                        United States
                      </option>
                    </select>
                    <div id="country-error" className="text-danger"></div>
                  </p>
                </div>
                <div className="col-12 actionBtns">
                  <button
                    className="btn btn-secondary"
                    onClick={() => {
                      setEditBillingFlag(false);
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    name="SubmitInfo"
                    className="btn btn-primary"
                    onClick={(e) => {
                      validate("billingForm");
                      if (validatedStatus == true) {
                        UpdateBilling(
                          e,
                          props.userData,
                          setEditBillingFlag,
                          props.setUserData
                        );
                      }
                    }}
                  >
                    Save &amp; Continue
                  </button>
                </div>

                <div
                  id="update-user"
                  className="alert   d-none"
                  role="alert"
                ></div>
              </div>
            </form>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

const UpdateBilling = async (e, userData, setEditBillingFlag, setUserData) => {
  e.preventDefault();
  let { URL } = process.env;

  let billing = {
    first_name: document.getElementById("first_name").value,
    last_name: document.getElementById("last_name").value,
    phone: document.getElementById("phone").value,
    address1: document.getElementById("address1").value,
    address2: document.getElementById("address2").value,
    email: document.getElementById("email").value,
    city: document.getElementById("city").value,
    state: document.getElementById("state").value,
    zip_code: document.getElementById("zip_code").value,
    country: document.getElementById("country").value,
  };
  let newUser = userData;
  newUser = { ...newUser, billing: billing };

  let response = await updateAccountInfo(e, newUser);
  let uAlert = document.getElementById("update-user");
  if (response.status == 200) {
    try {
      uAlert.classList.remove("d-none");
    } catch (err) {}

    try {
      uAlert.classList.remove("alert-danger");
    } catch (err) {}

    try {
      uAlert.classList.add("alert-primary");
    } catch (err) {}
    uAlert.innerHTML = "Updates Billing Information  Successfully";
  } else {
    try {
      uAlert.classList.remove("d-none");
    } catch (err) {}

    try {
      uAlert.classList.remove("alert-primary");
    } catch (err) {}

    try {
      uAlert.classList.add("alert-danger");
    } catch (err) {}
    uAlert.innerHTML = "Failed. Please Try Again";
  }
  setTimeout(() => {
    try {
      uAlert.classList.add("d-none");
    } catch (err) {}
    uAlert.innerHTML = "";
    setEditBillingFlag(false);
  }, 3000);
  let user = await getCurrentUserData(e);
  setUserData(user);
};
export default BillingAddress;
