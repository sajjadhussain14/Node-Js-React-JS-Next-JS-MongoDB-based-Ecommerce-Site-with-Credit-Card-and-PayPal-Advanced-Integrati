import React, { useEffect, useState } from "react";
import Router from "next/router";
import { setOrderDetails, getOrderDetails } from "../controllers/order";
import { setCartContent } from "../controllers/cart";
import TopPaypal from "../components/thankYou/topPaypal";
import TopCreditCard from "../components/thankYou/topCreditCard";
import Header from "../components/header/Header";

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

  order = {
    orderNumber: "63egeajfjj43gc8g0224",
    orderDesc: "",
    date_created: "2022-04-20T11:27:32.740Z",
    orderStatus: "processing",
    accountNumber: "",
    accountType: "",
    networkTransId: "",
    transId: "",
    userID: "",
    items: [
      {
        id: "266175",
        brand: "SPRINGFIELD",
        name: "XDM OSP 9MM 4.5IN ALL DESERT FDE W/ 3 SIGHT BASES 219RND MAGS | 706397932497",
        image:
          "https://cdn-cumulusdata.celerantwebservices.com/SSPRODIMAGES/120943.jpg",
        product_url:
          "/product/266175/XDMOSP9MM45INALLDESERTFDEW3SIGHTBASES219RNDMAGS",
        qty: 1,
        itemPrice: 658.8,
        salesPrice: 0,
        total: 658.8,
      },
    ],
    user: {
      id: "d5idcg5dcfhdd0he875a",
      billing: {
        first_name: "sad",
        last_name: "Hussain",
        phone: "19285675467",
        address1: "yerggd dgsdg",
        address2: "gfdgd",
        email: "sam22@s.com",
        city: "ny",
        state: "Iowa",
        zip_code: "85030",
        country: "us",
      },
      shipping: {
        first_name: "sss",
        last_name: "hussain",
        phone: "19285675467",
        address1: "yerggd dgsdg",
        address2: "gfdgd",
        email: "sajjadast786@gmail.com",
        city: "ny",
        state: "Arizona",
        zip_code: "85030",
        country: "us",
      },
    },
    payment: {
      id: "0XJ57085KA647631S",
      paymentMethod: "paypal",
      currency: "USD",
      status: "COMPLETED",
    },
    order: {
      shipping: {
        name: "Nick Shipping ($0.00)",
        amount: 0,
        description: "",
      },
      duty: {
        name: "",
        amount: "",
        description: "",
      },
      credit: {
        name: "",
        amount: "",
        description: "",
      },
      coupon: {
        name: "",
        amount: "",
        description: "",
      },
      taxDetail: {
        name: "tax",
        amount: 0,
        description: "tax",
      },
      orderCommensts: "",
      giftNotes: "",
      total: "658.80",
      tax: 0,
      subTotal: "658.00",
    },
    error: "",
    UserID: "d5idcg5dcfhdd0he875a",
  };

  if (typeof window != "undefined") {
    if (!order.orderNumber || order.orderNumber == "") {
      return (
        <>
          <Header taxonomy={props.taxonomy} cartData={cartValue} />

          <section className="thankYou">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h3 className="text-center ">No data Avaiable</h3>
                </div>{" "}
              </div>
            </div>{" "}
          </section>
        </>
      );
    }
  }
  return (
    <>
      <Header taxonomy={props.taxonomy} cartData={cartValue} />

      {order && Object.keys(order).length != 0 ? (
        <section className="thankYou">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 className="text-center">Thanks For Ordering With Us!</h1>
                <h3 className="text-center headingsze">
                  If you do not see your email confirmation immediately in your
                  Inbox, please check your Spam or Junk folder.
                </h3>
                <h3 className="text-center">
                  Celerant Demo Order Confirmation
                </h3>
                <hr />
              </div>
              {order && order.payment.paymentMethod == "paypal" ? (
                <TopPaypal order={order} />
              ) : (
                <TopCreditCard order={order} />
              )}
              <hr />
              <div className="col-12">
                <h2>Order Details</h2>
              </div>
              <div className="col-12">
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
                            <tr>
                              <th scope="row">{product.name}</th>
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
              <br />
              <div className="col-12 mt-2">
                <h2>Contact Details</h2>
              </div>

              <div className="container">
                <div className="row">
                  <table className="table table-borderless">
                    <thead>
                      <tr className="headingstyl">
                        <th colspan="3" scope="col">
                          Customer, Billing and Shipping Info
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <b>Customer:</b>
                          <br />
                          {order.user.billing.first_name +
                            " " +
                            order.user.billing.last_name}
                          <br />
                          {order.user.id}
                          <br />
                          {order.user.billing.email}
                          <br />
                        </td>
                        <td>
                          <b>Billing:</b>
                          <br />
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
                        </td>
                        <td>
                          <b>Shipping:</b>
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
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
};

export default thankYou;
