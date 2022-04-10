import React from "react";
import { CheckAvailable } from "../../controllers/sideNav";

const ShopByAvailability = (props) => {
  return (
    <div
      id="avaiabilityFilter"
      className="accordion-item border-bottom border-1"
    >
      <h2 className="accordion-header" id="flush-headingTwo">
        <button
          className="accordion-button collapsed text-uppercase px-0 border-0 fw-bold bg-transparent"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseAvaialAbility"
          aria-expanded="false"
          aria-controls="collapseAvaialAbility"
        >
          Availability
        </button>
      </h2>
      <div className="collapse border-0 accordion-body px-0 pt-0 " id="collapseAvaialAbility">
        <div className="form-check" key="all-items">
          <input
            className="form-check-input"
            type="radio"
            checked={
              props.checkAvailability === "all-items" ? "checked" : false
            }
            name="checkAvailable"
            id="all-items"
            onClick={() => {
              CheckAvailable(props.setCheckAvailability, "all-items");
            }}
            value="Show All Items"
          />
          <label className="form-check-label btn ">Show All Items</label>
        </div>
        <div className="form-check" key="out-of-stock-items">
          <input
            className="form-check-input"
            type="radio"
            checked={
              props.checkAvailability === "out-of-stock-items"
                ? "checked"
                : false
            }
            name="checkAvailable"
            id="out-of-stock-items"
            onClick={() => {
              CheckAvailable(props.setCheckAvailability, "out-of-stock-items");
            }}
          />
          <label className="form-check-label btn ">Out of Stock Items</label>
        </div>
        <div className="form-check" key="in-stock-items">
          <input
            className="form-check-input"
            type="radio"
            checked={
              props.checkAvailability === "in-stock-items" ? "checked" : false
            }
            name="checkAvailable"
            id="in-stock-items"
            onClick={() => {
              CheckAvailable(props.setCheckAvailability, "in-stock-items");
            }}
          />
          <label className="form-check-label btn ">In Stock Items</label>
        </div>
      </div>
    </div>
  );
};

export default ShopByAvailability;
