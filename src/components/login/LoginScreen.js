import React from "react";
import {
  authenticateUserFromLogin,
  createAccountHandle,
} from "../../controllers/account";
import {
  autoValidate,
  validatedStatus,
  validate,
} from "../../controllers/smartValidator";

const LoginScreen = (props) => {
  autoValidate();
  return (
    <div className="form-inner">
      <div className="col-12">
        <h3>Sign in to your Account</h3>
      </div>
      <form name="loginScreenForm" id="loginScreenForm">
        <div className="form-group">
          <label className="loginLabel" title="login_email">
            Email Address: <span className="required">*</span>
          </label>
          <br clear="all" />
          <input
            className="loginInput form-control"
            placeholder="Your Email"
            type="text"
            id="login_email2"
            name="Email"
            isEmail="true"
          />
          <div id="login_email2-error" className="text-danger"></div>
        </div>

        <div className="form-group">
          <label className="loginLabel" title="login_email">
            Password:<span className="required">*</span>
          </label>
          <input
            className="loginInput form-control"
            type="password"
            placeholder="Password"
            id="login_password2"
            name="Password"
            isRequired="true"
          />
          <div id="login_password2-error" className="text-danger"></div>
        </div>
      </form>
      <div className="form-group w-100">
        <a
          href=""
          className="btn w-100 d-inline-block text-left p-0 text-decoration-underline"
        >
          Forgot password
        </a>
        <button
          onClick={(e) => {
            validate("loginScreenForm");
            if (validatedStatus == true) {
              authenticateUserFromLogin(e, props.setScreen, "loginPage");
            }
          }}
          className="btn btn-dark mybtn"
        >
          Sign in
        </button>
      </div>
      <div className="form-group mb-0">
        <h3 className="mb-0">Sign Up</h3>
      </div>
      <div className="form-group">
        <div className="w-100">
          <p className="m-0 w-100 text-center">
            You can now easily set up an account
          </p>
          <button
            className="btn btn-secondary mybtn"
            onClick={(e) => {
              createAccountHandle(e, props.setScreen);
            }}
          >
            Create an Account
          </button>
        </div>
      </div>
      <div id="login-user2" className="alert   d-none" role="alert"></div>
    </div>
  );
};

export default LoginScreen;
