import React from "react";
import CartContent from "./CartContent";
import CartSummary from "./CartSummary";
import CartTop from "./CartTop";

const Layout = (props) => {
  return (
    <section id="cart" className="container">
      <div className="row">
        <CartTop cartItems={props.cart} setCart={props.setCart} />
        <div className="col-md-8 cart">
          <CartContent cartItems={props.cart} setCart={props.setCart} />
        </div>
        <CartSummary cartItems={props.cart} setCart={props.setCart} />
      </div>
    </section>
  );
};

export default Layout;
