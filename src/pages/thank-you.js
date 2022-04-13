import React, { useEffect, useState } from "react";
import Router from "next/router";
import { getOrderDetails } from "../controllers/order";

const thankYou = () => {
  const [loading, setLoading] = useState(true);
  let orderDetails = {};

  orderDetails = getOrderDetails("orderDetails");

  if (typeof window != "undefined") {
    if (!orderDetails.orderNumber || orderDetails.orderNumber == "") {
      Router.push("/");
      return "";
    }
  }
  let email = "";
  let total = "";
  let paymentMethod = "";
  let items = [];
  let billing = {};
  let shipping = {};

  try {
    email = orderDetails.user.billing.email;
  } catch (err) {}

  try {
    total = orderDetails.order.total;
  } catch (err) {}

  try {
    total = orderDetails.order.total;
  } catch (err) {}

  console.log(orderDetails);
  return (
    <>
      <section>
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h1>Order Received</h1>
              <p>Thankyou . Your order has been Received</p>
            </div>
            <div class="col">
              <p class="text-uppercase">
                order number:
                <strong class="d-block mt-1">{orderDetails.orderNumber}</strong>
              </p>
            </div>
            <div class="col">
              <p class="text-uppercase">
                Date:
                <strong class="d-block mt-1">
                  {orderDetails.date_created}
                </strong>
              </p>
            </div>
            <div class="col">
              <p class="text-uppercase">
                email:
                <strong class="d-block mt-1">{email}</strong>
              </p>
            </div>
            <div class="col">
              <p class="text-uppercase">
                total:
                <strong class="d-block mt-1">$499.00</strong>
              </p>
            </div>
            <div class="col">
              <p class="text-uppercase">
                payment method:
                <strong class="d-block mt-1">cash on delivery</strong>
              </p>
            </div>
            <div class="col-12">
              <p>Pay with cash upon delivery</p>
              <h2>order details</h2>
            </div>
            <div class="col-12">
              <p class="py-2 d-flex justify-content-between border px-2">
                <strong class="w-50">Product</strong>
                <strong class="w-50">Total</strong>
              </p>
              <p class="py-2 d-flex justify-content-between border px-2">
                <strong class="w-50">Bank * 1</strong>
                <strong class="w-50">$499.00</strong>
              </p>
              <p class="py-2 d-flex justify-content-between border px-2">
                <strong class="w-50">Subtotal:</strong>
                <strong class="w-50">$499.00</strong>
              </p>
              <p class="py-2 d-flex justify-content-between border px-2">
                <strong class="w-50">Payment method</strong>
                <strong class="w-50">Cash on delivery</strong>
              </p>
              <p class="py-2 d-flex justify-content-between border px-2">
                <strong class="w-50">Total:</strong>
                <strong class="w-50">$499.00</strong>
              </p>
            </div>
            <div class="col-lg-6 col-md-6 col-6">
              <div class="inner border">
                <h3>Billing Address</h3>
                <p>Markhendriksen.com</p>
                <p>Mark Hendriksen</p>
                <p>De Wilgen 22</p>
                <p>5427 TP Boekel</p>
                <p>061-792522</p>
                <a href="##">info@markhendriksen.com</a>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-6">
              <div class="inner border">
                <h3>shipping Address</h3>
                <p>Markhendriksen.com</p>
                <p>Mark Hendriksen</p>
                <p>De Wilgen 22</p>
                <p>5427 TP Boekel</p>
                <p>061-792522</p>
                <a href="##">info@markhendriksen.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default thankYou;
