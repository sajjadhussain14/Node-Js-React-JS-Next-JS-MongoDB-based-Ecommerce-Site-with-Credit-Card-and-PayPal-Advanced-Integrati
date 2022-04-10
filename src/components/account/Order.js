import React from "react";
import { csHandleChange } from "../../controllers/cart";

const Order = () => {
  return (
    <div className="row">
      <div className="accountBody col-12 col-sm-7 col-md-8 col-lg-10">
        <div className="page-heading">Order History</div>
        <br clear="all" />
        <div className="account-page">
          <p className="infoTXT">
            There are <strong className="larger_bold">0</strong> orders under
            your account.
          </p>
          <table id="order-history">
            <thead>
              <tr>
                <th align="center">Order Number</th>
                <th align="center">Date</th>
                <th align="center">Subtotal</th>
                <th align="center">Tax</th>
                <th align="center">Shipping</th>
                <th align="center">Total</th>
                <th align="center"></th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>

          <br />
          <div className="actionBtns">
            <button
              title="Continue Shopping"
              className="btn btn-secondary"
              onClick={() => {
                csHandleChange();
              }}
            >
              Continue Shopping
            </button>
            <button title="My Account" className="btn btn-primary">
              Account Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
