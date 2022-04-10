import React, { useEffect, useState } from "react";

import Link from "next/link";
import { AddToCart } from "../../controllers/cart";
import WishListPopUp from "./WishListPopUp";

const AddtoCartArea = (props) => {
  let { URL } = process.env;

  let getProducts = props.getProducts;
  let currentProduct = {
    id: 0,
    brand: "",
    name: "",
    image: "",
    product_url: "",
    qty: 0,
    itemPrice: 0,
    salesPrice: 0,
    total: 0,
  };
  currentProduct.id = getProducts.id;
  currentProduct.name = getProducts.name;
  currentProduct.brand = getProducts.brand;
  currentProduct.image = getProducts.image;
  currentProduct.product_url = getProducts.product_url;

  if (!getProducts.price || getProducts.price == "") {
    currentProduct.itemPrice = 0;
  } else {
    if (getProducts.termsaleprice && getProducts.termsaleprice > 0) {
      currentProduct.itemPrice = getProducts.price;
      currentProduct.salesPrice = getProducts.termsaleprice;
    } else {
      currentProduct.itemPrice = getProducts.price;
    }
  }
  currentProduct.qty = 1;

  if (currentProduct.salesPrice && currentProduct.salesPrice > 0) {
    currentProduct.total = 1 * currentProduct.salesPrice;
  } else {
    currentProduct.total = 1 * currentProduct.itemPrice;
  }

  let loginstatus = "";
  if (typeof window != "undefined") {
    loginstatus = localStorage.getItem("isLogin");
  }
  if (!loginstatus) {
    loginstatus = "";
  }

  return (
    <>
      <div className="product-addcart">
        <p>
          <button
            type="button"
            className="addTocart"
            onClick={(e) => {
              AddToCart(e, currentProduct, props.cart, props.setCart);
            }}
            data-toggle="modal"
            data-target="#cartModal"
          >
            Add to Cart
          </button>
        </p>
        {loginstatus != "yes" ? (
          <Link href={URL + "/login"}>
            <a style={{ color: "#00" }}>
              <h3 className="wishlistText" style={{ textAlign: "center" }}>
                Log in to add to your wishlist.
              </h3>
            </a>
          </Link>
        ) : (
          ""
        )}

        {loginstatus == "yes" ? (
          <button
            style={{ color: "#00", textAlign: "center" }}
            className="wishlistText"
            data-toggle="modal"
            data-target="#wishListModal"
          >
            Add to WishList
          </button>
        ) : (
          ""
        )}
      </div>
      <div className="prod-avail">
        <span
          className="credova-button"
          data-amount="423.54"
          data-type="popup"
        ></span>
      </div>
    </>
  );
};

export default AddtoCartArea;
