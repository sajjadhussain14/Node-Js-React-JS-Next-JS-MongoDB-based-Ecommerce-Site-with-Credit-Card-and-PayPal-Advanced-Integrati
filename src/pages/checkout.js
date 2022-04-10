import React, { useState, useEffect } from "react";
import $ from "jquery";
import Layout from "../components/checkout/Layout";
import { getCheckoutScripts } from "../assets/js/main";
import { getCurrentUserData } from "../controllers/account";
import Head from "next/head";
const Checkout = () => {
  let { URL } = process.env;
  const [cart, setCart] = useState([]);
  const [shippingMethod, setShippingMethod] = useState({ name: "", amount: 0 });
  const [tax, setTax] = useState(0.0);
  const [screen, setScreen] = useState("");
  const [userData, setUserData] = useState([]);
  let loginstatus = "";
  let userID = 0;
  if (typeof window != "undefined") {
    loginstatus = localStorage.getItem("isLogin");
    userID = localStorage.getItem("currentAliveUser");
  }
  useEffect(async () => {
    let user = await getCurrentUserData("");
    setUserData(user);
  }, []);

  let cartData = [];

  let checkCart = "";
  try {
    checkCart = JSON.stringify(cartData);
  } catch (err) {}

  useEffect(() => {
    cartData = JSON.parse(localStorage.getItem("cart"));
  }, [checkCart]);

  useEffect(() => {
    setCart(cartData);
  }, [checkCart]);

  // START LOAD JQUERY JAVASCRIPT ADDITIONAL CODE
  if (typeof window != "undefined") {
    getCheckoutScripts($);
  }
  // END LOAD JQUERY JAVASCRIPT ADDITIONAL CODE

  return (
    <>
      <Head>
        <title>CheckOut Page | Optimized and SEO Friendly Demo Site</title>
        <meta
          name="title"
          content="CheckOut Page | Optimized and SEO Friendly Demo Site"
        />
        <meta
          name="description"
          content="Checkout Page of Optimized and SEO Friendly Ecommerce site that will boost your sales and conversions"
        />
        <meta
          name="keywords"
          content="ecommerce, modern, SEO friendly, cumulus"
        />
      </Head>

      <Layout
        userData={userData}
        setUserData={setUserData}
        cart={cart}
        setCart={setCart}
        shippingMethod={shippingMethod}
        setShippingMethod={setShippingMethod}
        tax={tax}
        setTax={setTax}
        screen={screen}
        setScreen={setScreen}
      />
    </>
  );
};

export default Checkout;
