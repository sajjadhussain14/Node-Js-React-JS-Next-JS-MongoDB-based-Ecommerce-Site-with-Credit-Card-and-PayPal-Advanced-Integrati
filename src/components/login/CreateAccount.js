import React from "react";
import { CreateUser, resetScreen } from "../../controllers/account";

const CreateAccount = (props) => {
  return (
    <>
      <form name="newCustForm" id="newCustForm">
        <h5 className="modal-title" id="">
          Login Credientials:{" "}
        </h5>
        <br clear="all" />
        <div className="row">
          <div className="col-12 col-sm-6">
            <div className="form-group">
              <label className="loginLabel" title="email">
                Email Address: <span className="required">*</span>
              </label>
              <br clear="all" />
              <input
                className="loginInput form-control"
                type="text"
                id="new-email"
                name="email"
                data-required="true"
                data-validate="email"
              />
            </div>
          </div>
          <div className="col-12 col-sm-6">
            <div className="form-group">
              <label className="loginLabel" title="email">
                Password: <span className="required">*</span>
              </label>
              <br clear="all" />
              <input
                className="loginInput form-control"
                type="password"
                id="new-password"
                name="passwrd"
                data-required="true"
                data-validation="password"
              />
            </div>
          </div>
        </div>
        <hr />
        <br clear="all" />
        <h5 className="modal-title" id="">
          Billing Address:
        </h5>
        <br clear="all" />
        <div className="row">
          <div className="col-12 col-sm-6">
            <div className="form-group">
              <label className="loginLabel" title="first_name">
                First Name: <span className="required ">*</span>
              </label>
              <br clear="all" />
              <input
                className="loginInput form-control"
                type="text"
                id="new-fname"
                name="first_name"
                data-required="true"
              />
            </div>

            <div className="form-group">
              <label className="loginLabel" title="last_name">
                Last Name: <span className="required">*</span>
              </label>
              <br clear="all" />
              <input
                className="loginInput form-control"
                type="text"
                id="new-lname"
                name="last_name"
                data-required="true"
              />
            </div>

            <div className="form-group">
              <label className="loginLabel" title="phone">
                Phone: <span className="required">*</span>
              </label>
              <br clear="all" />
              <input
                className="loginInput form-control"
                type="text"
                id="new-phone"
                name="phone"
                data-required="true"
                data-validate="phone"
              />
            </div>
          </div>
          <div className="col-12 col-sm-6">
            <div className="form-group">
              <label className="loginLabel" title="address1">
                Street: <span className="required">*</span>
              </label>
              <br clear="all" />
              <input
                className="loginInput form-control"
                type="text"
                id="new-address1"
                name="address1"
                data-required="true"
              />
            </div>

            <div className="form-group">
              <label className="loginLabel" title="address2">
                Unit/Suite:{" "}
              </label>
              <br clear="all" />
              <input
                className="loginInput form-control"
                type="text"
                id="new-address2"
                name="address2"
                data-required="false"
              />
            </div>

            <div className="form-group">
              <label className="loginLabel" title="city">
                City: <span className="required">*</span>
              </label>
              <br clear="all" />
              <input
                className="loginInput form-control"
                type="text"
                id="new-city"
                name="city"
                data-required="true"
              />
            </div>

            <div className="form-group">
              <label className="loginLabel" title="state">
                State: <span className="required">*</span>
              </label>
              <br clear="all" />
              <select
                className="loginSelect form-control"
                name="state"
                id="new-state"
                data-required="true"
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
            </div>

            <div className="form-group">
              <label className="loginLabel" title="zip">
                Zip Code: <span className="required">*</span>
              </label>
              <br clear="all" />
              <input
                className="loginInput form-control"
                type="text"
                id="new-zcode"
                name="zip"
                data-required="true"
                data-validate="zip"
              />
            </div>

            <div className="form-group">
              <label className="loginLabel" title="zip">
                Country: <span className="required">*</span>
              </label>
              <br clear="all" />
              <select name="country" className="loginSelect" id="country">
                <option value="US">United States</option>
              </select>
            </div>
          </div>
        </div>
      </form>
      <div className="modal-footer">
        <button
          className="btn btn-dark mybtn"
          onClick={(e) => {
            CreateUser(e, props.setScreen);
          }}
        >
          Create Account
        </button>
        <button
          type="button"
          className="btn btn-secondary mybtn"
          data-dismiss="modal"
          onClick={() => {
            resetScreen(props.setScreen);
          }}
        >
          Close
        </button>
      </div>
      <div id="create-user" className="alert   d-none" role="alert"></div>
    </>
  );
};

export default CreateAccount;