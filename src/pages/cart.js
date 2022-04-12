import React, { useState, useEffect } from "react";
import Head from "next/head";
import EmptyCart from "../components/cart/EmptyCart";
import Layout from "../components/cart/Layout";

const Cart = () => {
  let { URL } = process.env;

  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  let cartData = [];

  if (typeof window != "undefined") {
    try {
      cartData = JSON.parse(localStorage.getItem("cart"));
    } catch (err) {}
  }
  let checkCart = "";
  try {
    checkCart = JSON.stringify(cartData);
  } catch (err) {}

  useEffect(() => {
    setCart(cartData);
    setLoading(false);
  }, [checkCart]);

  if (typeof window != "undefined") {
    try {
    } catch (err) {}
  }

  let sum = 0;
  try {
    sum = cartData.reduce((prod, { total }) => prod + total, 0);
  } catch (err) {}

  if (loading) {
    return (
      <div style={{ height: "400px" }}>
        <div className={`overlay `}>
          <div className="loading ">
            Loading....
            <div className="spinner-grow text-danger" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-warning" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-info" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!cart || cart.length < 1) {
    return (
      <>
        <EmptyCart cart={cart} page="cart" />
      </>
    );
  }
  return (
    <>
      <Head>
        <title>View Cart | Optimized and SEO Friendly Demo Site</title>
        <meta
          name="title"
          content="View Cart | Optimized and SEO Friendly Demo Site"
        />
        <meta
          name="description"
          content="View cart of Optimized and SEO Friendly Ecommerce site that will boost your sales and conversions"
        />
        <meta
          name="keywords"
          content="ecommerce, modern, SEO friendly, cumulus"
        />
      </Head>

      <Layout cart={cart} setCart={setCart} />
    </>
  );
};
export default Cart;
