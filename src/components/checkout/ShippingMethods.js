import React from "react";
import { validate } from "../../controllers/smartValidator";

const ShippingMethods = (props) => {
  const handleChange = (e) => {
    const { name, value } = e.target;

    props.setShippingMethod({ name: name, amount: value });
  };

  return (
    <fieldset id="wizard-p-1" className="wizard-fieldset">
      <h5>Shipping Method</h5>
      <form name="shippingMethodForm" id="shippingMethodForm">
        <div className="form-group col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="wizard-form-radio">
            <input
              name="Nick Shipping ($0.00)"
              id="nickShipping"
              type="radio"
              data-name="Nick Shipping ($0.00)"
              value={0.0}
              onChange={(e) => {
                handleChange(e);
              }}
              defaultChecked={
                props.shippingMethod.name === "Nick Shipping ($0.00)"
              }
              checked={props.shippingMethod.name === "Nick Shipping ($0.00)"}
            />
            <label>Nick Shipping ($0.00)</label>
          </div>
        </div>
        <div className="form-group col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="wizard-form-radio">
            <input
              name="UPS 2ND Day Air ($6.00)"
              data-name="UPS 2ND Day Air ($6.00)"
              id="ups2ndDayAir"
              type="radio"
              value={6.0}
              onChange={(e) => {
                handleChange(e);
              }}
              defaultChecked={
                props.shippingMethod.name === "UPS 2ND Day Air ($6.00)"
              }
              checked={props.shippingMethod.name === "UPS 2ND Day Air ($6.00)"}
            />
            <label>UPS 2ND Day Air ($6.00)</label>
          </div>
        </div>
        <div className="form-group col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="wizard-form-radio">
            <input
              name="FEDEX 2 Day ($5.00)"
              data-name="FEDEX 2 Day ($5.00)"
              id="fedex"
              type="radio"
              value={5.0}
              onChange={(e) => {
                handleChange(e);
              }}
              defaultChecked={
                props.shippingMethod.name === "FEDEX 2 Day ($5.00)"
              }
              checked={props.shippingMethod.name === "FEDEX 2 Day ($5.00)"}
            />
            <label>FEDEX 2 Day ($5.00)</label>
          </div>
        </div>
        <div className="form-group col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="wizard-form-radio">
            <input
              name="In Store Pickup ($0.00)"
              data-name="In Store Pickup ($0.00)"
              id="instore"
              type="radio"
              value={0.0}
              onChange={(e) => {
                handleChange(e);
              }}
              defaultChecked={
                props.shippingMethod.name === "In Store Pickup ($0.00)"
              }
              checked={props.shippingMethod.name === "In Store Pickup ($0.00)"}
            />
            <label>In Store Pickup ($0.00)</label>
          </div>
        </div>
      </form>

      <div className="form-group clearfix">
        <a
          href="javascript:;"
          className="form-wizard-previous-btn float-left"
          onClick={() => {
            document.getElementById("wizard-t-1").style.background = "#e9e0cf";
          }}
        >
          Previous
        </a>
        <a
          href="javascript:;"
          className="form-wizard-next-btn float-right"
          formID="PassValidation"
          onClick={(e) => {
            validate("shippingMethodForm");
          }}
        >
          Next
        </a>
      </div>
    </fieldset>
  );
};

export default ShippingMethods;
