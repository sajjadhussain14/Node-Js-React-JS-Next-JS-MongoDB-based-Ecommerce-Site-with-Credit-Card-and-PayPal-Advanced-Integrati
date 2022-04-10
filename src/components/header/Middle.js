import React, { useState, useEffect } from "react";
import Link from "next/link";
import LoginPopUp from "../../pages/account/LoginPopUp";
import $ from "jquery";
import DropCart from "./DropCart";
import { route } from "next/dist/server/router";
import Router from "next/router";
import { getHeaderScripts } from "../../assets/js/main";
const Middle = (props) => {
  const [cart, setCart] = useState([]);
  const [checkcart, setcheckCart] = useState([]);
  let { URL } = process.env;

  let cartValue = [];
  if (typeof window != "undefined") {
    cartValue = JSON.parse(localStorage.getItem("cart"));
  }

  useEffect(() => {
    cartValue = JSON.parse(localStorage.getItem("cart"));
  }, [JSON.stringify(cart)]);

  let loginstatus = "";
  if (typeof window != "undefined") {
    loginstatus = localStorage.getItem("isLogin");
  }
  if (!loginstatus) {
    loginstatus = "";
  }

  let cartItems = 0;
  try {
    cartItems = cartValue;
  } catch (err) {}

  let cartLen = 0;

  try {
    cartLen = props.cartData.length;
  } catch (err) {}
  if (typeof window != "undefined") {
    getHeaderScripts($);
  }

  return (
    <>
      <LoginPopUp />

      <section id="middle">
        <DropCart
          cartItems={cartItems}
          cart={cart}
          setCart={setCart}
          checkcart={checkcart}
          setcheckCart={setcheckCart}
        />

        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12 col-12 logo">
              <Link href={URL}>
                <a>
                  <p>
                    <img
                      alt=""
                      height="110"
                      src="https://template1.cumulusbetasites.com/ccms/default/assets/Image/logo.png"
                      width="100"
                    />
                  </p>
                </a>
              </Link>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 search">
              <form role="search" action="" method="post" name="myForm">
                <input name="Search" placeholder="Search " type="text" />
                <button type="submit">
                  <img src={URL + "/images/header_search_icon.png"} />
                </button>
              </form>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-4 col-12 profile">
              {loginstatus && loginstatus == "yes" ? (
                <span
                  className="accountIcon"
                  onClick={() => {
                    Router.push("/account");
                  }}
                >
                  <i className="fas fa-user"></i>
                  My Account
                </span>
              ) : (
                ""
              )}

              {!loginstatus || loginstatus != "yes" ? (
                <button
                  type="button"
                  data-toggle="modal"
                  data-target="#loginModal"
                  className="border-0 bg-transparent"
                >
                  <img src={URL + "/images/icon-account.png"} />
                  Sign in
                </button>
              ) : (
                ""
              )}
                <Link href="javascript:void(0)">
                <a id="header-cart" className="cartDisp">
                  <img src={URL + "/images/icon-cart.png"} />
                  cart
                  <span id="header-cartQTY">{cartLen}</span>
                </a>
                </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Middle;
