import React, { useState, useEffect } from "react";
import Link from "next/link";
import { removeItem, UpdateCartQTY } from "../../controllers/cart";

const DropCart = (props) => {
  const [cart, setCart] = useState([]);
  const [checkcart, setcheckCart] = useState([]);

  let { URL } = process.env;

  let cartItems = [];
  cartItems = props.cartItems;
  if (!cartItems || cartItems.length < 1) {
    cartItems = [];
  }
  let subtotal = 0;
  try {
    subtotal = cartItems.reduce((prod, { total }) => prod + total, 0);
  } catch (err) {}

  return (
    <div className="mini-cart ">
      <div id="cartDrpDown" className="sub-menu mini-cart-content">
        <div className="mini-cart ">
          <div className="content-inner">
            <h3 className="box-title">
              <Link href="/cart">
                <a className="edtCart">edit cart</a>
              </Link>
              <a
                href={void 0}
                onClick={(e) => {
                  e.preventDefault();
                }}
                id="dropCartCloser"
                className="close"
              >
                x
              </a>
            </h3>
            <p className="cartItem">
              items in cart: <span className="count">{cartItems.length}</span>
            </p>
            <ul className="list-item-cart">
              {cartItems.map((product) => {
                return (
                  <li className="item-cart active" key={product.name}>
                    <div className="thumb">
                      <Link href={URL + product.product_url}>
                        <a className="image anchor" title={product.name}>
                          <img src={product.image} alt={product.name} />
                        </a>
                      </Link>
                    </div>
                    <div className="product-info">
                      <span className="productBrand">{product.brand}</span>
                      <h4 className="product-name">
                        <Link href={URL + product.product_url}>
                          <a href="" className="anchor">
                            {product.name}
                          </a>
                        </Link>
                      </h4>
                      <span className="price">Price: {product.itemPrice}</span>
                      <span className="price">QTY: {product.qty}</span>
                      <span className="price">Total: ${product.total}</span>

                      <p>
                        <div
                          id="cart"
                          className="col-lg-8 col-md-8 col-sm-6 col-8 qtyInner p-0"
                        >
                          <button
                            className="minus"
                            onClick={(e) => {
                              updateQTY(
                                e,
                                "decrement",
                                product.id,
                                props.setCart
                              );
                            }}
                          >
                            <i className="fa fa-minus"></i>
                          </button>
                          <input
                            type="text"
                            className="form-control  addminus"
                            value={product.qty}
                            min="1"
                            id={"qtyBox1" + product.id}
                            name="qty"
                            onChange={(e) => {
                              updateQTY(e, "none", product.id, props.setCart);
                            }}
                          />
                          <button
                            className="plus"
                            onClick={(e) => {
                              updateQTY(
                                e,
                                "increment",
                                product.id,
                                props.setCart
                              );
                            }}
                          >
                            <i className="fa fa-plus"></i>
                          </button>
                        </div>
                        <span>|</span>
                        <a
                          href="javascript:0"
                          className=""
                          onClick={() => {
                            removeItem(product.id, props.setCart);
                          }}
                          data-index="11358"
                        >
                          remove
                        </a>
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="subtotal">
              <p>
                Subtotal:{" "}
                <span className="amount float-right">${subtotal}</span>
              </p>
            </div>
            <div className="action-btn">
              <Link href="/checkout">
                <a id="cartCloser1" className="btn btn-primary w-100">
                  CHECKOUT
                </a>
              </Link>
              <br clear="all" />
              <Link href="/cart">
                <a id="cartCloser2" className="btn btn-secondary w-100">
                  SHOPPING BAG
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropCart;
const updateQTY = (e, action, id, setCart) => {
  let cartQty = 0;
  try {
    cartQty = document.getElementById("qtyBox1" + id).value;
  } catch (err) {}

  if (cartQty.match(/[a-z]/i)) {
    alert("Please Enter a Valid Number");
    document.getElementById("qtyBox1" + id).value = 1;
    return;
  }

  if (action == "increment") {
    cartQty = parseInt(cartQty) + 1;
    document.getElementById("qtyBox1" + id).value = cartQty;
  } else if (action == "decrement") {
    cartQty = parseInt(cartQty) - 1;
    if (cartQty < 1) {
      cartQty = 1;
    }
    document.getElementById("qtyBox1" + id).value = cartQty;
  } else {
    if (cartQty < 1) {
      cartQty = 1;
    }
    document.getElementById("qtyBox1" + id).value = cartQty;
  }

  UpdateCartQTY(e, id, setCart, cartQty);
};
