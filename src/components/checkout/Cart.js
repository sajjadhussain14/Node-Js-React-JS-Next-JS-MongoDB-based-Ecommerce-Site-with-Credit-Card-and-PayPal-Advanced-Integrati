import React from "react";
import { removeItem, UpdateCartQTY } from "../../controllers/cart";

const Cart = (props) => {
  let cart = [];
  cart = props.cart;
  if (!cart || cart.length < 1) {
    cart = [];
  }
  let { URL } = process.env;
  let total = 0;
  return (
    <>
      {cart && cart.length > 0
        ? cart.map((product) => {
            let prodName = "";
            prodName = product.name;
            if (prodName.length > 30) {
              prodName = prodName.substring(0, 300);
              prodName = prodName + "...";

              try {
                total = product.qty * product.total;
              } catch (err) {}
            }
            return (
              <article className="row product m-sm-4 m-2" key={product.name}>
                <div className="col px-sm-3 px-2 pt-3 pb-3 d-flex justify-content-center col-lg-4 col-md-12 col-sm-12 col-12">
                  <img src={product.image} alt="" className="product-img" />
                </div>
                <div className="col px-sm-3 px-2 pt-3 col-lg-8 col-md-12 col-sm-12 col-12">
                  <div className="d-flex flex-column justify-content-between">
                    <span href="#" className="text-decoration-none pb-3 name">
                      {prodName}
                    </span>
                    <div className="d-flex row">
                      <div className="d-flex flex-column attr col-lg-3 col-md-12 col-sm-12 col-12">
                        <div>Price: ${product.itemPrice}</div>
                      </div>
                      <div className="d-flex flex-column col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="d-flex align-items-center">
                          <div className="btn btn-primary">
                            <span
                              className="fas fa-plus"
                              onClick={(e) => {
                                updateQTY(
                                  e,
                                  "increment",
                                  product.id,
                                  props.setCart
                                );
                              }}
                            ></span>
                          </div>
                          <div className="bg-light number">
                            <input
                              defaultValue={product.qty}
                              type="text"
                              id={"qtyBox" + product.id}
                              onChange={(e) => {
                                updateQTY(e, "none", product.id, props.setCart);
                              }}
                            />
                          </div>
                          <div className="btn btn-primary">
                            <span
                              className="fas fa-minus"
                              onClick={(e) => {
                                updateQTY(
                                  e,
                                  "decrement",
                                  product.id,
                                  props.setCart
                                );
                              }}
                            ></span>
                          </div>
                        </div>
                      </div>
                      <div className="border-0 col-lg-3 col-md-12 col-sm-12 col-12">
                        <div className="w-100">
                          <span className="total">Total Price</span>
                          <span className="final">${total}</span>
                        </div>
                        <img
                          className="mr-1"
                          src={URL + "/images/trash-2.svg"}
                          onClick={() => {
                            removeItem(product.id, props.setCart);
                          }}
                        />
                        <span>remove</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })
        : ""}
    </>
  );
};

export default Cart;

const updateQTY = (e, action, id, setCart) => {
  let cartQty = 0;
  try {
    cartQty = document.getElementById("qtyBox" + id).value;
  } catch (err) {}

  if (cartQty.match(/[a-z]/i)) {
    alert("Please Enter a Valid Number");
    document.getElementById("qtyBox" + id).value = 1;
    return;
  }

  if (action == "increment") {
    cartQty = parseInt(cartQty) + 1;
    document.getElementById("qtyBox" + id).value = cartQty;
  } else if (action == "decrement") {
    cartQty = parseInt(cartQty) - 1;
    if (cartQty < 1) {
      cartQty = 1;
    }
    document.getElementById("qtyBox" + id).value = cartQty;
  } else {
    if (cartQty < 1) {
      cartQty = 1;
    }
    document.getElementById("qtyBox" + id).value = cartQty;
  }

  UpdateCartQTY(e, id, setCart, cartQty);
};
