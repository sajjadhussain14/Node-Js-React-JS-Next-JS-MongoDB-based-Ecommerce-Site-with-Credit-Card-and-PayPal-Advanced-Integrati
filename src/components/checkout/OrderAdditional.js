import React from "react";

const OrderAdditional = () => {
  return (
    <div className="row order-alter">
      <div className="col-12">
        <div className="form-group">
          <input
            className="loginInput form-control"
            type="text"
            id="lookup"
            value=""
            name="lookup"
            placeholder="Coupon or Promotion Code"
          />
          <button type="submit" className="btn btn-primary" id="couponSubmit">
            Submit
          </button>
        </div>
        <ul className="activeCoupons  d-none"></ul>
      </div>
      <div className="col-12">
        <div className="form-group">
          <input
            className="loginInput form-control"
            type="text"
            id="gift_card"
            value=""
            name="gift_card"
            placeholder="Gift Card, Certificate, or Credit"
          />
          <button type="submit" className="btn btn-primary" id="gcSubmit">
            Submit
          </button>
        </div>
        <ul className="activeGiftCards d-none"></ul>
      </div>
      <div className="col-12">
        <div className="form-group">
          <textarea
            className="loginInput form-control"
            type="text"
            name="comments"
            id="comments"
            placeholder="Order Comments"
          ></textarea>
        </div>
      </div>
      <div className="col-12">
        <div className="form-group">
          <textarea
            className="loginInput form-control"
            type="text"
            name="giftNote"
            id="giftNote"
            placeholder="Gift Notes"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default OrderAdditional;
