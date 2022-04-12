import React, { useEffect, useState } from "react";
import { getOrderDetails } from "../controllers/order";

const thankYou = () => {
  const [loading, setLoading] = useState(true);
  let orderDetails = {};

  useEffect(() => {
    orderDetails = getOrderDetails("orderDetails");
  }, []);
  console.log("orderDetails", orderDetails);
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
                <strong class="d-block mt-1">11</strong>
              </p>
            </div>
            <div class="col">
              <p class="text-uppercase">
                Date:
                <strong class="d-block mt-1">May 21 , 2020</strong>
              </p>
            </div>
            <div class="col">
              <p class="text-uppercase">
                email:
                <strong class="d-block mt-1">info@markhendriksen.com</strong>
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
