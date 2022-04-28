import React from "react";
import Link from "next/link";

const CartSummary = (props) => {
  let { URL } = process.env;

  let tax = 0.0;
  let subTotal = 0;
  let cart = [];
  cart = props.cartItems;

  if (!cart || cart.length < 1) {
    cart = {};
  }

  let cartTotal = 0.0;

  try {
    cartTotal = cart.reduce((prod, { total }) => prod + total, 0);
    cartTotal = cartTotal.toFixed(2);
  } catch (err) {}
  subTotal = cartTotal + tax;
  return (
    <section id="cartSummary" className="col-md-4 col-sm-4 col-12 summary">
      <div>
        <h5>
          <b>Pricing Summary</b>
        </h5>
      </div>
      <hr />
      <div className="row">
        <div className="col" style={{ paddingLeft: 0 }}>
          ITEMS{" "}
        </div>
        <div className="col text-right">{cart.length}</div>
      </div>
      <hr />
      <div className="row">
        <div className="col" style={{ paddingLeft: 0 }}>
          CART TOTAL
        </div>
        <div className="col text-right">$ {cartTotal}</div>
      </div>
      <hr />
      <div className="row">
        <div className="col" style={{ paddingLeft: 0 }}>
          TAX
        </div>
        <div className="col text-right">$ 0.00</div>
      </div>
      <hr />
      <div className="row">
        <div className="col"style={{ paddingLeft: 0 }}><strong>TOTAL PRICE</strong></div>
        <div className="col text-right"> <strong>$ {subTotal}</strong></div>
      </div>
      <Link href={URL + "/checkout"}>
        <a className="btn"><img className="mr-2" src={URL+"/images/Group 131.svg"}/>CHECKOUT</a>
      </Link>
    </section>
  );
};

export default CartSummary;
