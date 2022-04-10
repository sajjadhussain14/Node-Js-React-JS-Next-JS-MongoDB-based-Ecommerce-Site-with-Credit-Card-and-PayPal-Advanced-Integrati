import React from "react";
import {
  getCurrentUserData,
  updateAccountInfo,
} from "../../controllers/account";

const ShippingInfo = (props) => {
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
      <div className="row mx-0">
        <div className="form-group col-lg-6 col-md-6 col-sm-12 col-12">
          <input
            type="text"
            className="form-control"
            id="shipping_fname"
            placeholder="First Name*"
            defaultValue={fname}
          />
          <label className="wizard-form-text-label">First Name*</label>
          <div className="wizard-form-error"></div>
        </div>
        <div className="form-group col-lg-6 col-md-6 col-sm-12 col-12">
          <input
            type="text"
            className="form-control"
            id="shipping_lname"
            placeholder="Last Name*"
            defaultValue={lname}
          />
          <label className="wizard-form-text-label">Last Name*</label>
          <div className="wizard-form-error"></div>
        </div>
        <div className="form-group col-lg-6 col-md-6 col-sm-12 col-12">
          <input
            type="email"
            className="form-control"
            id="shipping_email"
            placeholder="Email*"
            defaultValue={email}
          />
          <label className="wizard-form-text-label">Email*</label>
          <div className="wizard-form-error"></div>
        </div>
        <div className="form-group col-lg-6 col-md-6 col-sm-12 col-12">
          <input
            type="text"
            className="form-control"
            id="shipping_city"
            placeholder="City*"
            defaultValue={city}
          />
          <label className="wizard-form-text-label">City*</label>
          <div className="wizard-form-error"></div>
        </div>
        <div className="form-group col-12">
          <input
            type="text"
            className="form-control"
            id="shipping_address1"
            placeholder="Street*"
            defaultValue={address1}
          />
          <label className="wizard-form-text-label">Street*</label>
          <div className="wizard-form-error"></div>
        </div>

        <div className="form-group col-12">
          <input
            type="text"
            className="form-control"
            id="shipping_address2"
            placeholder="Unit/Suite:*"
            defaultValue={address2}
          />
          <label className="wizard-form-text-label">Unit/Suite:*</label>
          <div className="wizard-form-error"></div>
        </div>
        <div className="form-group col-lg-6 col-md-6 col-sm-12 col-12">
          <select
            className="form-select col-lg-6 col-md-6 col-sm-12 col-12 form-control"
            aria-label="state select"
            id="shipping_state"
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
          <div className="wizard-form-error"></div>
        </div>

        <div className="form-group col-lg-6 col-md-6 col-sm-12 col-12">
          <select
            className="form-select col-lg-6 col-md-6 col-sm-12 col-12 form-control"
            aria-label="CountrySelect"
            id="shipping_country"
            defaultValue={country}
          >
            <option value="country">Country</option>
            <option value="us">US</option>
            <option value="ca">CA</option>
          </select>
          <div className="wizard-form-error"></div>
        </div>

        <div className="form-group col-lg-6 col-md-6 col-sm-12 col-12">
          <input
            type="text"
            className="form-control"
            id="shipping_zcode"
            placeholder="Zip Code*"
            defaultValue={zcode}
          />
          <label for="zip" className="wizard-form-text-label">
            Zip Code*
          </label>
          <div className="wizard-form-error"></div>
        </div>
        <div className="form-group col-lg-6 col-md-6 col-sm-12 col-12">
          <input
            type="text"
            className="form-control"
            id="shipping_phone"
            placeholder="Phone*"
            defaultValue={phone}
          />
          <label for="zcode" className="wizard-form-text-label">
            Phone*
          </label>
          <div className="wizard-form-error"></div>
        </div>
        <div className="form-group clearfix col-12 text-left">
          <a
            href="javascript:;"
            className="form-wizard-next-btn"
            onClick={(e) => {
              UpdateShipping(e, props.userData, props.setUserData);
            }}
          >
            Next
          </a>
        </div>
      </div>
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
