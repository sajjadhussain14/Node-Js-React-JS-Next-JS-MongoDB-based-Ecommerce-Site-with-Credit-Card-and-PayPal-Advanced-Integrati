import React, { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import Router from "next/router";
import { getOrderDetails, setOrderDetails } from "../controllers/order";

const captureOrder = (props) => {
  const router = useRouter();
  const [paymentData, setPaymentData] = useState({});
  const [loading, setLoading] = useState(true);

  const { token } = router.query;

  useEffect(async () => {
    const response = await fetch(
      process.env.URL + "/api/payment/capture-order",
      {
        method: "POST",
        body: JSON.stringify(token),
      }
    );
    const data = await response.json();
    setPaymentData(data);
    setLoading(false);
  }, [token]);
  let orderDetails = {};
  orderDetails = getOrderDetails("orderDetails");
  let OrderNumber = Array.from(Array(20), () =>
    Math.floor(Math.random() * 20).toString(20)
  ).join("");

  useEffect(() => {
    if (loading == false) {
      if (paymentData.code == 200) {
        try {
          orderDetails.payment.id = paymentData.data.id;
          orderDetails.payment.payer_id = paymentData.data.payer_id;
          orderDetails.payment.status = paymentData.data.status;
        } catch (err) {}

        setOrderDetails("orderDetails", orderDetails);

        if (typeof window != "undefined") {
          Router.push(process.env.URL + "/thank-you");
        }
      } else {
        if (typeof window != "undefined") {
          Router.push(process.env.URL + "/error");

          return <div>{paymentData.message}</div>;
        }
      }
    }
  }, [loading]);
  return <div>ssss</div>;
};

export default captureOrder;
