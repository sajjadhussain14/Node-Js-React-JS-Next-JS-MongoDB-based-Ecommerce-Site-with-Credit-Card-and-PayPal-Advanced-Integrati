import React, { useState } from "react";
import { authenticateUser } from "../../controllers/account";

const ReturningCustomer = (props) => {
  let user = props.userData;
  let loginstatus = "";
  let currentUserID = "";
  if (typeof window != "undefined") {
    loginstatus = localStorage.getItem("isLogin");
    currentUserID = localStorage.getItem("currentAliveUser");
  }
  let userName = "";
  try {
    userName = user.billing.first_name;
  } catch (err) {}
  return (
    <>
      {props.screen == "authenticated" || loginstatus == "yes" ? (
        <>
          <p>
            Welcome <strong>{userName}</strong>. You are logged in. Please
            proceed to the Billing &amp; Shipping section to checkout your
            Order.
          </p>
          <br />
        </>
      ) : (
        <section
          name="returning-customer"
          className="accordion accordion-flush"
          id="accordionFlushrCustomer"
        >
          <div className="accordion-item">
            <h2
              className="accordion-header"
              id="flush-headingReturningCustomer"
            >
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseReturningCustomer"
                aria-expanded="false"
                aria-controls="flush-collapseReturningCustomer"
              >
                Returning customer? Click here to login
              </button>
            </h2>
            <div
              id="flush-collapseReturningCustomer"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingReturningCustomer"
              data-bs-parent="#accordionFlushrCustomer"
            >
              <div className="accordion-body p-2">
                <p>
                  If you have shopped with us before, please enter your details
                  in the boxes below. If you are a new customer, please proceed
                  to the Billing &amp; Shipping section.
                </p>
                <p className="coupon-input form-row-first">
                  <label>
                    Username or email
                    <span className="required">*</span>
                  </label>
                  <input type="text" name="email" id="login_email2" />
                </p>
                <p className="coupon-input form-row-last">
                  <label>
                    password
                    <span className="required">*</span>
                  </label>
                  <input type="password" name="password" id="login_password2" />
                </p>
                <div className="clear"></div>
                <p className="text-left">
                  <div id="login-user2" className="alert   d-none" role="alert">
                    ssss
                  </div>

                  <button
                    type="button"
                    className="button-login btn"
                    name="login"
                    onClick={(e) => {
                      authenticateUser(e, props.setScreen, "checkout");
                    }}
                  >
                    Login
                  </button>
                </p>
                <p className="lost-password">
                  <a href="#">Lost your password?</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ReturningCustomer;
