import React from "react";
import Router from "next/router";

import { processPaymentPaypal } from "../../controllers/paypal";
import { paymentAuthorize } from "../../controllers/authorize.net";
import { validate } from "../../controllers/smartValidator";
let validated = true;
const PaymentInfo = (props) => {
  return (
    <fieldset className="wizard-fieldset">
      <h5>Payment Information</h5>
      <div className="checkout-paypal">
        <button
          type="button"
          onClick={(e) => {
            processPaymentPaypal(e, props.currency, props.grandTotal);
          }}
        >
          <img
            id="checkout"
            src="https://thepediazone.com/wp-content/uploads/2021/04/paypal-information.png"
            alt=""
          />
          Checkout
        </button>
      </div>
      <div className="form-group">
        <div className="payment-methods">
          <span>We Accept</span> <i className="fab fa-cc-visa"></i>
          <i className="fab fa-cc-mastercard"></i>
          <i className="fab fa-cc-amex"></i>
        </div>
      </div>
      <form name="cardForm" id="cardForm" method="" action="">
        <div className="form-group">
          <label className="wizard-form-text-label">Name On Card*</label>
          <input
            type="text"
            className="form-control wizard-required"
            id="cardHolder"
            name="Name on Card"
            onChange={(e) => {
              validate("cardForm", "cardHolder");
            }}
            required="true"
            isAlpha="true"
          />
          <div id="cardHolder-error" className="text-danger"></div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="form-group">
              <label className="wizard-form-text-label">Card Number*</label>
              <input
                type="text"
                className="form-control wizard-required"
                id="cardNumber"
                name="Card Number"
                onChange={(e) => {
                  validate("cardForm", "cardNumber");
                }}
                isCreditCard="true"
              />
              <div id="cardNumber-error" className="text-danger"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <label className="wizard-form-text-label">Expiration Date*</label>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="form-group">
              <select
                className="form-control"
                id="expiryMonth"
                name="Expiry Month"
                onChange={(e) => {
                  validate("cardForm", "expiryMonth");
                }}
                required="true"
              >
                <option value="">Month</option>
                <option value="1">jan</option>
                <option value="2">Feb</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">Jully</option>
                <option value="8">August</option>
                <option value="9">Sept</option>
                <option value="10">Oct</option>
                <option value="11">Nov</option>
                <option value="12">Dec</option>
              </select>
              <div id="expiryMonth-error" className="text-danger"></div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="form-group">
              <select
                className="form-control"
                name="Expiry Year"
                id="expiryYear"
                onChange={(e) => {
                  validate("cardForm", "expiryYear");
                }}
                required="true"
              >
                <option value="">Years</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
                <option value="2030">2030</option>
                <option value="2031">2031</option>
                <option value="2032">2032</option>
                <option value="2033">2033</option>
                <option value="2034">2034</option>
                <option value="2035">2035</option>
                <option value="2036">2036</option>
                <option value="2037">2037</option>
                <option value="2038">2038</option>
                <option value="2039">2039</option>
                <option value="2040">2040</option>
              </select>
              <div id="expiryYear-error" className="text-danger"></div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <div className="form-group">
              <label className="wizard-form-text-label">CVV2*</label>
              <input
                type="text"
                className="form-control wizard-required"
                id="cvv2"
                name="cvv"
                onChange={(e) => {
                  validate("cardForm", "cvv2");
                }}
                isCvv="true"
              />
              <div id="cvv2-error" className="text-danger"></div>
            </div>
          </div>

          <div className="col-6">
            <input
              type="button"
              name="orderSubmit"
              value="Submit Your Order"
              className="text-light bg-dark"
              onClick={(e) => {
                paymentAuthorize(e, props.setCart);
              }}
            />
          </div>
        </div>
      </form>
      <div className="form-group clearfix">
        <a href="javascript:;" className="form-wizard-previous-btn float-left">
          Previous
        </a>
      </div>
      <div
        id="paymentAlert"
        className="alert alert-danger d-none"
        role="alert"
      ></div>
    </fieldset>
  );
};
export default PaymentInfo;
