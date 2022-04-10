import React from "react";
import { clearCart } from "../../controllers/cart";
import Image from "next/image";

const CartTop = (props) => {
  let cart = [];
  try {
    cart = JSON.parse(localStorage.getItem("cart"));
  } catch (err) {}
  if (!cart || cart.length < 1) {
    cart = [];
  }
  return (
    <section id="cartTop" className="title mb-3 mt-5">
      <div className="row">
        <h4 className="col-12 text-center pb-2"><strong>Your Shopping Bag</strong></h4>
      </div>
      <div className="row">
        <div className="col-12">
          <h4>
            <small> ({cart.length} items)</small>
            <button
            className=" text-muted btn-light text-dark border-0 rounded py-2 px-3"
            onClick={(e) => {
              clearCart(e, props.setCart);
            }}
          >
            Clear Cart
          </button>
          </h4>
        </div>
      </div>
    </section>
  );
};

export default CartTop;
