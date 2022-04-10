import React, { useState, useEffect } from "react";
import {
  getCurrentUserData,
  updateAccountInfo,
} from "../../controllers/account";

const ShippingAddress = (props) => {
  const [editShippingFlag, setEditShippingFlag] = useState(false);

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
    <>
      {fname && fname != "" && editShippingFlag == false ? (
        <div className="row">
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
                setEditShippingFlag(true);
              }}
            >
              <strong> Edit</strong>
            </a>
          </div>
        </div>
      ) : (
        <>
          {editShippingFlag == false ? (
            <>
              No Shipping Address Found. &nbsp;&nbsp;
              <button
                className=" btn btn-secondary"
                href="javascript:;"
                onClick={(e) => {
                  setEditShippingFlag(true);
                }}
              >
                <strong> Enter Shipping Address</strong>
              </button>
            </>
          ) : (
            ""
          )}
        </>
      )}

      {editShippingFlag ? (
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
                      First Namesss:*
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
                      name="phone"
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

                      <option
                        value="Indiana"
                        data-type="STATE"
                        selected="selected"
                      >
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

                    <select
                      name="country"
                      className="loginSelect"
                      id="country"
                      defaultValue={country}
                    >
                      <option selected="selected" value="US">
                        United States
                      </option>
                    </select>
                  </p>
                </div>
                <div className="col-12 actionBtns">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={(e) => {
                      setEditShippingFlag(false);
                    }}
                  >
                    Cancelsss
                  </button>
                  <button
                    type="button"
                    name="SubmitInfo"
                    className="btn btn-primary"
                    onClick={(e) => {
                      UpdateShipping(
                        e,
                        props.userData,
                        setEditShippingFlag,
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

const UpdateShipping = async (
  e,
  userData,
  setEditShippingFlag,
  setUserData
) => {
  e.preventDefault();
  let { URL } = process.env;

  let shipping = {
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
  newUser = { ...newUser, shipping: shipping };

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
    uAlert.innerHTML = "Updates Shipping Information  Successfully";
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
    setEditShippingFlag(false);
  }, 3000);
  let user = await getCurrentUserData(e);
  setUserData(user);
};
export default ShippingAddress;
