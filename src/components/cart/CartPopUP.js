import React from "react";
import Link from "next/link";
import Router from "next/router";
import { csHandleChange, getContinueShoppingURL } from "../../controllers/cart";

const CartPopUP = (props) => {
  let { URL } = process.env;

  let relatedProducts = [];

  relatedProducts = props.products;
  if (relatedProducts.length > 3) {
    relatedProducts.length = 3;
  }
  let cart = [];

  cart = props.cart;

  if (!cart || cart.length < 1) {
    cart = {};
  }

  let tempCart = [];

  try {
    tempCart = cart.filter((item) => item.id == props.ID);
  } catch (err) {}

  if (tempCart.length > 1) {
    tempCart.length = 1;
  }

  let cartTotal = 0;
  try {
    cartTotal = cart.reduce((prod, { total }) => prod + total, 0);
  } catch (err) {}

  let shopURL = "";
  shopURL = getContinueShoppingURL();

  return (
    <>
      <link href="/css/cart-popup.css" rel="stylesheet"></link>

      <div
        className="modal fade"
        id="cartModal"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header border-bottom-0">
              <h5 className="modal-title" id="exampleModalLabel">
                Added to Cart
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <section>
                <div className="container">
                  {tempCart && tempCart.length > 0
                    ? tempCart.map((product) => {
                        return (
                          <div className="row" key={product.name}>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                              <img src={product.image} width={120} />
                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-12">
                              <span className="d-block">{product.brand}</span>
                              <span className="d-block">
                                {product.name.substring(1, 50) +
                                  "..." +
                                  " - " +
                                  product.id}
                              </span>
                              <span className="d-block">
                                Qty: {product.qty}
                              </span>
                              <span>Price: </span>
                              <span>${product.itemPrice}</span>
                            </div>
                          </div>
                        );
                      })
                    : ""}
                </div>
              </section>
              <section>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 mt-4">
                      <p>
                        <strong>Cart subtotal: ${cartTotal}</strong> (
                        {cart.length} items)
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 cartbtn justify-content-stretch">
                      <button
                        type="button"
                        data-dismiss="modal"
                        aria-label="Close"
                        onClick={() => {
                          cartHandleChange(URL);
                        }}
                        className="primaryC col-lg-4 col-md-4 col-sm-4 m-2 align-left"
                      >
                        Cart & Checkout
                      </button>

                      <button
                        type="button"
                        data-dismiss="modal"
                        aria-label="Close"
                        onClick={() => {
                          csHandleChange();
                        }}
                        className="secondaryC  col-lg-6 col-md-6 col-sm-6  align-right"
                      >
                        Continue Shopping
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 mt-4">
                      <p>
                        <strong>You May Also Like</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="featureProds">
                <div className="container">
                  <div className="row">
                    {relatedProducts && relatedProducts.length > 0
                      ? relatedProducts.map((product) => {
                          return (
                            <div
                              className="col-lg-4 col-md-4 col-sm-12 mt-4 mb-4"
                              key={product.name}
                            >
                              <img
                                className="text-center"
                                src={product.image}
                                width={120}
                              />
                              <span className="d-block mt-4">
                                {product.brand}
                              </span>
                              <span className="d-block">
                                {product.name.substring(1, 10) +
                                  "..." +
                                  " - " +
                                  product.id}{" "}
                              </span>
                              <span>Price: </span>
                              <span>${product.price}</span>
                            </div>
                          );
                        })
                      : ""}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const cartHandleChange = (URL) => {
  Router.push(URL + "/cart");
};
export default CartPopUP;
