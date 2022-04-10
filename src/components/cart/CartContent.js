import React from "react";
import Link from "next/link";
import Image from "next/image";

import { UpdateCartQTY, removeItem } from "../../controllers/cart";

const CartContent = (props) => {
  let { URL } = process.env;
  let cart = [];
  cart = props.cartItems;

  if (!cart || cart.length < 1) {
    cart = [];
  }
  return (
    <section id="cartContent">
      <div className="row bg-light py-2 d-lg-flex d-md-flex d-none">                
        <div className="col-2">
          <h5 className="mb-0">Image</h5>
        </div>
        <div className="col-3">
          <h5 className="mb-0">Description</h5>
        </div>
        <div className="col-3">
          <h5 className="mb-0">Quantity</h5>
        </div>
        <div className="col-2">
          <h5 className="mb-0">Price</h5>
        </div>
        <div className="col-2">
          <h5 className="mb-0">Total</h5>
        </div>
      </div>
      {cart && cart.length > 0
        ? cart.map((product) => {
            return (
             
              <div className="row " key={product.name}>
                <div className="row main align-items-center border-bottom py-0 px-0">
                  <div className="col-lg-2 col-md-2 col-sm-6 col-6">
                    <Link href={product.product_url}>
                      <a>
                        <img className="img-fluid" src={product.image} />
                      </a>
                    </Link>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                    <Link href={product.product_url}>
                      <a>
                        <div className="row pbrand">
                          {product.brand.toLowerCase()}
                        </div>
                        <div className="row pname">
                          {product.name.toLowerCase()}
                        </div>
                       
                      </a>
                    </Link>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-8 col-8 qtyInner">
                    <button
                      className="minus"
                      onClick={(e) => {
                        UpdateCartQTY(
                          e,
                          "decrement",
                          product.id,
                          props.setCart
                        );
                      }}
                    >
                       <i class="fa fa-minus"></i>
                    </button>
                    <input
                      type="text"
                      className="form-control  addminus"
                      defaultValue={product.qty}
                      min="1"
                      id={"qtyBox" + product.id}
                      name="qty"
                      onChange={(e) => {
                        UpdateCartQTY(e, "none", product.id, props.setCart);
                      }}
                    />
                    <button
                      className="plus"
                      onClick={(e) => {
                        UpdateCartQTY(
                          e,
                          "increment",
                          product.id,
                          props.setCart
                        );
                      }}
                    >
                       <i class="fa fa-plus"></i>
                    </button>
                   
                   <a href="javascript:void(0)" className="p-0">
                      <i class="fas fa-trash ml-1"></i>
                    </a>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-4 col-5">
                      <span class="pprice">${product.itemPrice.toFixed(2)}</span>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-4 col-5">
                    <span className="pprice">${" "}
                          {product.total.toFixed(2)}{" "}</span>
                  </div>
                </div>
              </div>
            );
          })
        : ""}
    </section>
  );
};

export default CartContent;
