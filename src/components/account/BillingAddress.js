import React, { useState } from "react";
import {
  getCurrentUserData,
  updateAccountInfo,
} from "../../controllers/account";

const BillingAddress = (props) => {
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
                    <label
                      title="emailAddress"
                      className="loginLabel form-label"
                    >
                      First Name:*
                    </label>
                    <br clear="all" />
                    <input
                      name="first_name"
                      type="text"
                      defaultValue={fname}
                      id="first_name"
                      className="loginInput form-control"
                    />
                  </p>

                  <p>
                    <label
                      title="emailAddress"
                      className="loginLabel form-label"
                    >
                      Last Name:*
                    </label>
                    <br clear="all" />
                    <input
                      name="last_name"
                      type="text"
                      defaultValue={lname}
                      alt="last_name"
                      id="last_name"
                      className="loginInput form-control"
                    />
                  </p>

                  <p>
                    <label
                      title="emailAddress"
                      className="loginLabel form-label"
                    >
                      Phone:*
                    </label>
                    <br clear="all" />
                    <input
                      name="phone1"
                      type="text"
                      defaultValue={phone}
                      alt="phone1"
                      id="phone"
                      className="loginInput form-control"
                    />
                  </p>

                  <p>
                    <label
                      title="emailAddress"
                      className="loginLabel form-label"
                    >
                      Email Address:*
                    </label>
                    <br clear="all" />
                    <input
                      name="Email1"
                      type="text"
                      defaultValue={email}
                      alt="Email1"
                      id="email"
                      className="loginInput form-control"
                    />
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
                      alt="password"
                      id="password"
                      className="loginInput form-control"
                    />
                  </p>
                </div>
                <div className="accountHolder col-12 col-sm-6">
                  <p>
                    <label
                      title="emailAddress"
                      className="loginLabel form-label"
                    >
                      Street:*
                    </label>
                    <br clear="all" />
                    <input
                      name="address1"
                      type="text"
                      defaultValue={address1}
                      maxLength="30"
                      id="address1"
                      className="loginInput form-control"
                    />
                  </p>

                  <p>
                    <label
                      title="emailAddress"
                      className="loginLabel form-label"
                    >
                      Unit/Suite:
                    </label>
                    <br clear="all" />
                    <input
                      type="text"
                      id="address2"
                      name="address2"
                      className="loginInput form-control"
                      defaultValue={address2}
                    />
                  </p>

                  <p>
                    <label
                      title="emailAddress"
                      className="loginLabel form-label"
                    >
                      City:*
                    </label>
                    <br clear="all" />
                    <input
                      name="City"
                      type="text"
                      defaultValue={city}
                      id="city"
                      className="loginInput form-control"
                    />
                  </p>

                  <p>
                    <label title="state" className="loginLabel form-label">
                      State:*
                    </label>
                    <br clear="all" />

                    <select
                      name="state"
                      className="loginSelect"
                      id="state"
                      defaultValue={state}
                    >
                      <option value="--">--</option>

                      <option value="AL" data-type="STATE">
                        Alabama
                      </option>

                      <option value="AK" data-type="STATE">
                        Alaska
                      </option>

                      <option value="AZ" data-type="STATE">
                        Arizona
                      </option>

                      <option value="AR" data-type="STATE">
                        Arkansas
                      </option>

                      <option value="CA" data-type="STATE">
                        California
                      </option>

                      <option value="CO" data-type="STATE">
                        Colorado
                      </option>

                      <option value="CT" data-type="STATE">
                        Connecticut
                      </option>

                      <option value="DE" data-type="STATE">
                        Delaware
                      </option>

                      <option value="DC" data-type="STATE">
                        District of Columbia
                      </option>

                      <option value="FL" data-type="STATE">
                        Florida
                      </option>

                      <option value="GA" data-type="STATE">
                        Georgia
                      </option>

                      <option value="ID" data-type="STATE">
                        Idaho
                      </option>

                      <option value="IL" data-type="STATE">
                        Illinois
                      </option>

                      <option value="IN" data-type="STATE">
                        Indiana
                      </option>

                      <option value="IA" data-type="STATE">
                        Iowa
                      </option>

                      <option value="KS" data-type="STATE">
                        Kansas
                      </option>

                      <option value="KY" data-type="STATE">
                        Kentucky
                      </option>

                      <option value="LA" data-type="STATE">
                        Louisiana
                      </option>

                      <option value="ME" data-type="STATE">
                        Maine
                      </option>

                      <option value="MD" data-type="STATE">
                        Maryland
                      </option>

                      <option value="MA" data-type="STATE">
                        Massachusetts
                      </option>

                      <option value="MI" data-type="STATE">
                        Michigan
                      </option>

                      <option value="MN" data-type="STATE">
                        Minnesota
                      </option>

                      <option value="MS" data-type="STATE">
                        Mississippi
                      </option>

                      <option value="MO" data-type="STATE">
                        Missouri
                      </option>

                      <option value="MT" data-type="STATE">
                        Montana
                      </option>

                      <option value="NE" data-type="STATE">
                        Nebraska
                      </option>

                      <option value="NV" data-type="STATE">
                        Nevada
                      </option>

                      <option value="NH" data-type="STATE">
                        New Hampshire
                      </option>

                      <option value="NJ" data-type="STATE">
                        New Jersey
                      </option>

                      <option value="NM" data-type="STATE">
                        New Mexico
                      </option>

                      <option value="NY" data-type="STATE">
                        New York
                      </option>

                      <option value="NC" data-type="STATE">
                        North Carolina
                      </option>

                      <option value="ND" data-type="STATE">
                        North Dakota
                      </option>

                      <option value="OH" data-type="STATE">
                        Ohio
                      </option>

                      <option value="OK" data-type="STATE">
                        Oklahoma
                      </option>

                      <option value="OR" data-type="STATE">
                        Oregon
                      </option>

                      <option value="PA" data-type="STATE">
                        Pennsylvania
                      </option>

                      <option value="RI" data-type="STATE">
                        Rhode Island
                      </option>

                      <option value="SC" data-type="STATE">
                        South Carolina
                      </option>

                      <option value="SD" data-type="STATE">
                        South Dakota
                      </option>

                      <option value="TN" data-type="STATE">
                        Tennessee
                      </option>

                      <option value="TX" data-type="STATE">
                        Texas
                      </option>

                      <option value="UT" data-type="STATE">
                        Utah
                      </option>

                      <option value="VT" data-type="STATE">
                        Vermont
                      </option>

                      <option value="VA" data-type="STATE">
                        Virginia
                      </option>

                      <option value="WA" data-type="STATE">
                        Washington
                      </option>

                      <option value="WV" data-type="STATE">
                        West Virginia
                      </option>

                      <option value="WI" data-type="STATE">
                        Wisconsin
                      </option>

                      <option value="WY" data-type="STATE">
                        Wyoming
                      </option>
                    </select>
                  </p>

                  <p>
                    <label
                      title="emailAddress"
                      className="loginLabel form-label"
                    >
                      Zip Code:*
                    </label>
                    <br clear="all" />
                    <input
                      name="ZIP"
                      type="text"
                      defaultValue={zcode}
                      maxLength="10"
                      id="zip_code"
                      className="loginInput form-control"
                    />
                  </p>

                  <p>
                    <label
                      title="emailAddress"
                      className="loginLabel form-label"
                    >
                      Country:*
                    </label>
                    <br clear="all" />

                    <select name="country" className="loginSelect" id="country">
                      <option value="US" defaultValue={country}>
                        United States
                      </option>
                    </select>
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
                      UpdateBilling(
                        e,
                        props.userData,
                        setEditBillingFlag,
                        props.setUserData
                      );
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
