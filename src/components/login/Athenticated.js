import React from "react";
import Router from "next/router";
import { getContinueShoppingURL } from "../../controllers/cart";

const Athenticated = () => {
  return (
    <div className="form-inner ">
      <div className="form-group">
        <div className="alert alert-primary" role="alert">
          Loggedin Successfully. Please choose one of below actions
        </div>

        <hr />
        <div className="row">
          <div className="col-3  ">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                Router.push("/account");
              }}
              data-dismiss="modal"
            >
              Account
            </button>
          </div>
          <div className="col-3 ">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                Router.push("/checkout");
              }}
              data-dismiss="modal"
            >
              Checkout
            </button>
          </div>
          <div className="col-6 ">
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                let shopURL = "/";
                if (!shopURL) {
                  shopURL = "/";
                }
                shopURL = getContinueShoppingURL();
                Router.push(shopURL);
              }}
              data-dismiss="modal"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Athenticated;
