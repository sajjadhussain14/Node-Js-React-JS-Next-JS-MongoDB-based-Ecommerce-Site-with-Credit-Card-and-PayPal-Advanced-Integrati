import React, { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/router";
import Router from "next/router";
import { captureOrder, processOrder } from "../../controllers/paypal";
import { getOrderDetails } from "../../controllers/order";

const Payments = (props) => {
  const router = useRouter();
  const { token, PayerID } = router.query;
  const [paymentData, setPaymentData] = useState({});
  const [loading, setLoading] = useState(true);

  if (!token && !PayerID) {
    if (typeof window != "undefined") {
      // Router.push("checkout");
    }
  }

  useEffect(async () => {
    captureOrder(token, setPaymentData, setLoading);
  }, [token]);

  let orderDetails = {};
  orderDetails = getOrderDetails("orderDetails");

  let orderNumber = Array.from(Array(20), () =>
    Math.floor(Math.random() * 20).toString(20)
  ).join("");

  useEffect(() => {
    if (loading == false) {
      processOrder(paymentData, orderDetails, orderNumber, Router);
    }
  }, [loading]);

  return (
    <>
      <div style={{ height: "400px" }}>
        <div className={`overlay `}>
          <div className="loading ">
            <div className="spinner-grow text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-secondary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-success" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-danger" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-warning" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-info" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-light" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-dark" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payments;
