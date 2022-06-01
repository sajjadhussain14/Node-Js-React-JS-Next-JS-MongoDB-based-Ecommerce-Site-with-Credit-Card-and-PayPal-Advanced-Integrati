import React, { useEffect, useState } from "react";
import { setOrderDetails, getOrderDetails } from "../controllers/order";
import { setCartContent } from "../controllers/cart";
import TopPaypal from "../components/thankYou/topPaypal";
import TopCreditCard from "../components/thankYou/topCreditCard";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Head from "next/head";

const thankYou = (props) => {
  let orderdata = {};
  let order = {};
  orderdata = getOrderDetails("orderDetails");
  order = { ...orderdata };

  setTimeout(() => {
    setOrderDetails("orderDetails", {});
    setCartContent("cart", []);
  }, 2000);
  let cartValue = [];
  if (typeof window != "undefined") {
    cartValue = JSON.parse(localStorage.getItem("cart"));
  }

  let { URL } = process.env;
  if (typeof window != "undefined") {
    if (!order.orderNumber || order.orderNumber == "") {
      return (
        <>
          <Head>
            <title>Thank You Page | Optimized and SEO Friendly Demo Site</title>
            <meta
              name="title"
              content="Thank You Page | Optimized and SEO Friendly Demo Site"
            />
            <meta
              name="description"
              content="Thank You Page of Optimized and SEO Friendly Ecommerce site that will boost your sales and conversions"
            />
            <meta
              name="keywords"
              content="ecommerce, modern, SEO friendly, cumulus"
            />
          </Head>

          <Header taxonomy={props.data.taxanomy} cartData={cartValue} />

          <section className="thankYou">
            <div className="container-fluid thankYouInner">
              <div className="row mx-0">
                <div className="col-12">
                  <h3 className="text-center ">No data Avaiable</h3>
                </div>{" "}
              </div>
            </div>{" "}
          </section>
          <Footer />
        </>
      );
    }
  }
  return (
    <>
      <Head>
        <title>Thank You Page | Optimized and SEO Friendly Demo Site</title>
        <meta
          name="title"
          content="Thank You Page | Optimized and SEO Friendly Demo Site"
        />
        <meta
          name="description"
          content="Thank You Page of Optimized and SEO Friendly Ecommerce site that will boost your sales and conversions"
        />
        <meta
          name="keywords"
          content="ecommerce, modern, SEO friendly, cumulus"
        />
      </Head>

      <Header taxonomy={props.data.taxonomy} cartData={cartValue} />

      {order && Object.keys(order).length != 0 ? (
        <section className="thankYou">
          <div className="container-fluid thankYouInner">
            <div className="row mx-0">
              <div className="col-12">
                <h1 className="text-center">Thanks For Ordering With Us!</h1>
              </div>
            </div>
            {order && order.payment.paymentMethod == "CreditCard" ? (
              <TopPaypal order={order} />
            ) : (
              <TopCreditCard order={order} />
            )}

            <div className="container-fluid orderDetails">
              <div className="row mx-0">
                <div className="col-12 mt-2 p-0">
                  <h2>Order Details</h2>
                </div>
              </div>
              <div className="row mx-0">
                <div className="col-lg-4 col-md-4 col-sm-12 col-12 p-0">
                  <p>
                    Customer:
                    <strong className="d-block">
                      {order.user.billing.first_name +
                        " " +
                        order.user.billing.last_name}
                      <br />
                      {order.user.id}
                      <br />
                      {order.user.billing.email}
                      <br />
                    </strong>
                  </p>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-12 col-12 p-0">
                  <p>
                    Billing:
                    <strong className="d-block">
                      {order.user.billing.first_name +
                        " " +
                        order.user.billing.last_name}
                      <br />
                      {order.user.billing.address1}
                      <br />
                      {order.user.billing.address2}
                      <br />
                      {order.user.billing.city}
                      <br />

                      {order.user.billing.state}
                      <br />

                      {order.user.billing.zip_code}
                      <br />
                      {order.user.billing.country}
                      <br />
                      {order.user.billing.phone}
                      <br />
                    </strong>
                  </p>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-6 col-12 p-0">
                  <p>
                    Shipping:
                    <strong className="d-block">
                      {order.user.billing.address1}
                      <br />
                      {order.user.shipping.first_name +
                        " " +
                        order.user.shipping.last_name}
                      <br />
                      {order.user.shipping.address1}
                      <br />
                      {order.user.shipping.address2}
                      <br />
                      {order.user.shipping.city}
                      <br />

                      {order.user.shipping.state}
                      <br />

                      {order.user.shipping.zip_code}
                      <br />
                      {order.user.shipping.country}
                      <br />
                      {order.user.shipping.phone}
                      <br />
                    </strong>
                  </p>
                </div>
              </div>
              <hr />
            </div>
            <div className="row mx-0 orderSummary">
              <div className="col-12">
                <h2>Order Details</h2>
              </div>
              <table className="table  table-hover">
                <thead>
                  <tr className="headingstyl">
                    <th scope="col">product</th>
                    <th scope="col">price</th>
                    <th scope="col">Qty</th>

                    <th scope="col">subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {order.items && order.items.length > 0
                    ? order.items.map((product) => {
                        let total = 0;
                        total = product.itemPrice * product.qty;
                        total = total.toFixed(2);
                        return (
                          <tr key={product.name}>
                            <th scope="row">
                              <img src="https://via.placeholder.com/100" />{" "}
                              {product.name}
                            </th>
                            <td>${product.itemPrice.toFixed(2)}</td>
                            <td>{product.qty}</td>
                            <td>${total}</td>
                          </tr>
                        );
                      })
                    : ""}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      ) : (
        ""
      )}
      <Footer />
    </>
  );
};

export async function getServerSideProps({ query, res }) {
  let { URL } = process.env;

  try {
    res.setHeader(
      "Cache-Control",
      "public, s-maxage=43200, stale-while-revalidate=60"
    );
  } catch (err) {}
  let data = {
    taxanomy: [],
  };

  let resp = {};
  try {
    resp = await fetch(URL + "/api/taxonomy/taxonomy");
    data.taxanomy = await resp.json();
  } catch (err) {
    data.taxanomy = [];
  }
  // Pass data to the page via props
  return { props: { data } };
}

export default thankYou;
