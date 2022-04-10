import React from "react";

const PaymentInfo = () => {
  return (
    <fieldset className="wizard-fieldset">
      <h5>Payment Information</h5>
      <div className="checkout-paypal">
        <h6>
          <img
            src="https://thepediazone.com/wp-content/uploads/2021/04/paypal-information.png"
            alt=""
          />
          Checkout
        </h6>
      </div>
      <div className="form-group">
        <div className="payment-methods">
          <span>We Accept</span> <i className="fab fa-cc-visa"></i>
          <i className="fab fa-cc-mastercard"></i>
          <i className="fab fa-cc-amex"></i>
        </div>
      </div>
      <div className="form-group">
        <label for="honame" className="wizard-form-text-label">
          Name On Card*
        </label>
        <input
          type="text"
          className="form-control wizard-required"
          id="honame"
        />
        <div className="wizard-form-error"></div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="form-group">
            <label for="cardname" className="wizard-form-text-label">
              Card Number*
            </label>
            <input
              type="text"
              className="form-control wizard-required"
              id="cardname"
            />
            <div className="wizard-form-error"></div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <label for="expirationdate" className="wizard-form-text-label">
            Expiration Date*
          </label>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6">
          <div className="form-group">
            <select className="form-control">
              <option value="">Month</option>
              <option value="">jan</option>
              <option value="">Feb</option>
              <option value="">March</option>
              <option value="">April</option>
              <option value="">May</option>
              <option value="">June</option>
              <option value="">Jully</option>
              <option value="">August</option>
              <option value="">Sept</option>
              <option value="">Oct</option>
              <option value="">Nov</option>
              <option value="">Dec</option>
            </select>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6">
          <div className="form-group">
            <select className="form-control">
              <option value="">Years</option>
              <option value="">2019</option>
              <option value="">2020</option>
              <option value="">2021</option>
              <option value="">2022</option>
              <option value="">2023</option>
              <option value="">2024</option>
              <option value="">2025</option>
              <option value="">2026</option>
              <option value="">2027</option>
              <option value="">2028</option>
              <option value="">2029</option>
              <option value="">2030</option>
              <option value="">2031</option>
              <option value="">2032</option>
              <option value="">2033</option>
              <option value="">2034</option>
              <option value="">2035</option>
              <option value="">2036</option>
              <option value="">2037</option>
              <option value="">2038</option>
              <option value="">2039</option>
              <option value="">2040</option>
            </select>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <div className="form-group">
            <label for="cvv2" className="wizard-form-text-label">
              CVV2*
            </label>
            <input
              type="text"
              className="form-control wizard-required"
              id="cvv2"
            />
            <div className="wizard-form-error"></div>
          </div>
        </div>
        <div className="col-6">
          <input
            type="submit"
            name="orderSubmit"
            value="Submit Your Order"
            className="text-light bg-dark"
          />
        </div>
      </div>
      <div className="form-group clearfix">
        <a href="javascript:;" className="form-wizard-previous-btn float-left">
          Previous
        </a>
      </div>
    </fieldset>
  );
};

export default PaymentInfo;