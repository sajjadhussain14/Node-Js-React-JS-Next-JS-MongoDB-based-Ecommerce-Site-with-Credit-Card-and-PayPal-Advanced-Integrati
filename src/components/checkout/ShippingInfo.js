import React from "react";
import {
  getCurrentUserData,
  updateAccountInfo,
} from "../../controllers/account";
import { validate } from "../../controllers/smartValidator";

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
      <form name="shippingForm" id="shippingForm">
        <input
          name="shippingForm-validate-state"
          id="shippingForm-validate-state"
          type="hidden"
          defaultValue="false"
        />
        <div className="row mx-0">
          <div className="form-group col-lg-6 col-md-6 col-sm-12 col-12">
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
            <select
              className="form-select col-lg-6 col-md-6 col-sm-12 col-12 form-control"
              aria-label="state select"
              id="shipping_state"
              name="State"
              defaultValue={state}
              isRequired="true"
            >
              <option value="" data-type="STATE">
                --
              </option>

              <option
                value="Alabama"
                data-type="STATE"
                selected={state == "Alabama" ? true : false}
              >
                Alabama
              </option>

              <option
                value="Alaska"
                data-type="STATE"
                selected={state == "Alaska" ? true : false}
              >
                Alaska
              </option>

              <option
                value="Arizona"
                data-type="STATE"
                selected={state == "Arizona" ? true : false}
              >
                Arizona
              </option>

              <option
                value="Arkansas"
                data-type="STATE"
                selected={state == "Arkansas" ? true : false}
              >
                Arkansas
              </option>

              <option
                value="California"
                data-type="STATE"
                selected={state == "California" ? true : false}
              >
                California
              </option>

              <option
                value="Colorado"
                data-type="STATE"
                selected={state == "Colorado" ? true : false}
              >
                Colorado
              </option>

              <option
                value="Connecticut"
                data-type="STATE"
                selected={state == "Connecticut" ? true : false}
              >
                Connecticut
              </option>

              <option
                value="Delaware"
                data-type="STATE"
                selected={state == "Delaware" ? true : false}
              >
                Delaware
              </option>

              <option
                value="District of Columbia"
                data-type="STATE"
                selected={state == "District of Columbia" ? true : false}
              >
                District of Columbia
              </option>

              <option
                value="Florida"
                data-type="STATE"
                selected={state == "Florida" ? true : false}
              >
                Florida
              </option>

              <option
                value="Georgia"
                data-type="STATE"
                selected={state == "Georgia" ? true : false}
              >
                Georgia
              </option>

              <option
                value="Idaho"
                data-type="STATE"
                selected={state == "Idaho" ? true : false}
              >
                Idaho
              </option>

              <option
                value="Illinois"
                data-type="STATE"
                selected={state == "Illinois" ? true : false}
              >
                Illinois
              </option>

              <option
                value="Indiana"
                data-type="STATE"
                selected={state == "Indiana" ? true : false}
              >
                Indiana
              </option>

              <option
                value="Iowa"
                data-type="STATE"
                selected={state == "Iowa" ? true : false}
              >
                Iowa
              </option>

              <option
                value="Kansas"
                data-type="STATE"
                selected={state == "Kansas" ? true : false}
              >
                Kansas
              </option>

              <option
                value="Kentucky"
                data-type="STATE"
                selected={state == "Kentucky" ? true : false}
              >
                Kentucky
              </option>

              <option
                value="Louisiana"
                data-type="STATE"
                selected={state == "Louisiana" ? true : false}
              >
                Louisiana
              </option>

              <option
                value="Maine"
                data-type="STATE"
                selected={state == "Maine" ? true : false}
              >
                Maine
              </option>

              <option
                value="Maryland"
                data-type="STATE"
                selected={state == "Maryland" ? true : false}
              >
                Maryland
              </option>

              <option
                value="Massachusetts"
                data-type="STATE"
                selected={state == "Massachusetts" ? true : false}
              >
                Massachusetts
              </option>

              <option
                value="Michigan"
                data-type="STATE"
                selected={state == "Michigan" ? true : false}
              >
                Michigan
              </option>

              <option
                value="Minnesota"
                data-type="STATE"
                selected={state == "Minnesota" ? true : false}
              >
                Minnesota
              </option>

              <option
                value="Mississippi"
                data-type="STATE"
                selected={state == "Mississippi" ? true : false}
              >
                Mississippi
              </option>

              <option
                value="Missouri"
                data-type="STATE"
                selected={state == "Missouri" ? true : false}
              >
                Missouri
              </option>

              <option
                value="Montana"
                data-type="STATE"
                selected={state == "Montana" ? true : false}
              >
                Montana
              </option>

              <option
                value="Nebraska"
                data-type="STATE"
                selected={state == "Nebraska" ? true : false}
              >
                Nebraska
              </option>

              <option
                value="Nevada"
                data-type="STATE"
                selected={state == "Nevada" ? true : false}
              >
                Nevada
              </option>

              <option
                value="New Hampshire"
                data-type="STATE"
                selected={state == "New Hampshire" ? true : false}
              >
                New Hampshire
              </option>

              <option
                value="New Jersey"
                data-type="STATE"
                selected={state == "New Jersey" ? true : false}
              >
                New Jersey
              </option>

              <option
                value="New Mexico"
                data-type="STATE"
                selected={state == "New Mexico" ? true : false}
              >
                New Mexico
              </option>

              <option
                value="New York"
                data-type="STATE"
                selected={state == "New York" ? true : false}
              >
                New York
              </option>

              <option
                value="North Carolina"
                data-type="STATE"
                selected={state == "North Carolina" ? true : false}
              >
                North Carolina
              </option>

              <option
                value="North Dakota"
                data-type="STATE"
                selected={state == "North Dakota" ? true : false}
              >
                North Dakota
              </option>

              <option
                value="Ohio"
                data-type="STATE"
                selected={state == "Ohio" ? true : false}
              >
                Ohio
              </option>

              <option
                value="Oklahoma"
                data-type="STATE"
                selected={state == "Oklahoma" ? true : false}
              >
                Oklahoma
              </option>

              <option
                value="Oregon"
                data-type="STATE"
                selected={state == "Oregon" ? true : false}
              >
                Oregon
              </option>

              <option
                value="Pennsylvania"
                data-type="STATE"
                selected={state == "Pennsylvania" ? true : false}
              >
                Pennsylvania
              </option>

              <option
                value="Rhode Island"
                data-type="STATE"
                selected={state == "Rhode Island" ? true : false}
              >
                Rhode Island
              </option>

              <option
                value="South Carolina"
                data-type="STATE"
                selected={state == "South Carolina" ? true : false}
              >
                South Carolina
              </option>

              <option
                value="South Dakota"
                data-type="STATE"
                selected={state == "South Dakota" ? true : false}
              >
                South Dakota
              </option>

              <option
                value="Tennessee"
                data-type="STATE"
                selected={state == "Tennessee" ? true : false}
              >
                Tennessee
              </option>

              <option
                value="Texas"
                data-type="STATE"
                selected={state == "Texas" ? true : false}
              >
                Texas
              </option>

              <option
                value="Utah"
                data-type="STATE"
                selected={state == "Utah" ? true : false}
              >
                Utah
              </option>

              <option
                value="Vermont"
                data-type="STATE"
                selected={state == "Vermont" ? true : false}
              >
                Vermont
              </option>

              <option
                value="Virginia"
                data-type="STATE"
                selected={state == "Virginia" ? true : false}
              >
                Virginia
              </option>

              <option
                value="Washington"
                data-type="STATE"
                selected={state == "Washington" ? true : false}
              >
                Washington
              </option>

              <option
                value="West Virginia"
                data-type="STATE"
                selected={state == "West Virginia" ? true : false}
              >
                West Virginia
              </option>

              <option
                value="Wisconsin"
                data-type="STATE"
                selected={state == "Wisconsin" ? true : false}
              >
                Wisconsin
              </option>

              <option
                value="Wyoming"
                data-type="STATE"
                selected={state == "Wyoming" ? true : false}
              >
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
              <option value="" selected={country == "Country" ? true : false}>
                Country
              </option>
              <option value="us" selected={country == "us" ? true : false}>
                US
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
                //validate("shippingForm");

                UpdateShipping(e, props.userData, props.setUserData);
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
