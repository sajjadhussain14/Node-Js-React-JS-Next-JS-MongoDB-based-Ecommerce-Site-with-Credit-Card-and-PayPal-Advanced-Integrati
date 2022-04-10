import React from "react";

const ProductSwap = (props) => {
  let getProducts = props.getProducts;

  return (
    <div id="swap" className="row bg-white text-center align-middle mt-3 d-none">
      <div className="col-12 product-form p-lg-5 p-md-4 p-sm-3 p-xs-2">
        <form
          name="CFForm_1"
          id="CFForm_1"
          className="form-inline"
          method=""
          action="/subscribe"
        >
          <div className="form-group mb-2 w-100">
            <h4 className="d-block">subscribe here for price alerts</h4>
          </div>
          <div className="form-group w-50 mb-3">
            <input
              type="text"
              readOnly
              className="form-control-plaintext"
              id="staticEmail2"
              value="Email:"
            />
            <input
              name="aemail"
              id="aemail"
              type="text"
              className="form-control"
            />
          </div>
          <button type="submit" className="btn w-50 btn-primary mt-4">
            sign me up
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductSwap;
