import React, { useEffect } from "react";
import { getOrderDetails, setOrderDetails } from "../../controllers/order";

const OrderSummary = (props) => {
  let tax = props.tax;

  let shippingMode = props.shippingMethod.name;
  let shippingCharges = props.shippingMethod.amount;

  let subTotal = 0;
  let cart = [];
  cart = props.cart;

  if (!cart || cart.length < 1) {
    cart = {};
  }

  let cartTotal = 0.0;

  try {
    cartTotal = cart.reduce((prod, { total }) => prod + total, 0);
    cartTotal = Number(cartTotal).toFixed(2);
  } catch (err) {}

  if (!tax || tax == "") tax = 0;

  try {
    subTotal = parseInt(cartTotal) + parseInt(tax);
  } catch (err) {}

  try {
    subTotal = parseInt(subTotal) + parseInt(shippingCharges);
  } catch (err) {}
  subTotal = Number(subTotal).toFixed(2);

  props.setGrandTotal(subTotal);

  let orderDetails = {};
  orderDetails = getOrderDetails("orderDetails");

  setTimeout(() => {
    try {
      orderDetails.order.shipping.name = shippingMode;
    } catch (err) {}

    try {
      orderDetails.order.shipping.amount = shippingCharges;
    } catch (err) {}

    try {
      orderDetails.order.total = cartTotal;
    } catch (err) {}
    try {
      orderDetails.order.tax = tax;
      orderDetails.order.taxDetail = {
        name: "tax",
        amount: tax,
        description: "tax",
      };
    } catch (err) {}
    try {
      orderDetails.order.subTotal = subTotal;
    } catch (err) {}

    setOrderDetails("orderDetails", orderDetails);
  }, 0);

  return (
    <>
      <ul className="list-group order-totals ">
        <li className="list-group-item " data-key="TOTALPRICE">
          <span className="row mx-0">
            <span className="col-7 displayName">Total Cost of Items:</span>
            <span
              className="col-5 displayValue text-right"
              data-key="TOTALPRICE"
            >
              ${cartTotal}
            </span>
          </span>
        </li>

        <li className="list-group-item d-none" data-key="DISCOUNTS">
          <span className="row mx-0">
            <span className="col-7 displayName">Discounts:</span>
            <span
              className="col-5 displayValue text-right"
              data-key="DISCOUNTS"
            >
              $0.00
            </span>
          </span>
        </li>

        <li className="list-group-item " data-key="SHIPPING_CHARGE">
          <span className="row mx-0">
            <span className="col-7 displayName">Shipping & handling:</span>
            <span
              className="col-5 displayValue text-right"
              data-key="SHIPPING_CHARGE"
            >
              ${shippingMode}
            </span>
          </span>
        </li>

        <li className="list-group-item " data-key="FINAL_SALES_TAX">
          <span className="row mx-0">
            <span className="col-7 displayName">Estimated Tax:</span>
            <span
              className="col-5 displayValue text-right"
              data-key="FINAL_SALES_TAX"
            >
              ${tax}
            </span>
          </span>
        </li>

        <li className="list-group-item d-none" data-key="GC_TOTAL">
          <span className="row mx-0">
            <span className="col-7 displayName">Gift Cards:</span>
            <span className="col-5 displayValue text-right" data-key="GC_TOTAL">
              $0.00
            </span>
          </span>
        </li>

        <li className="list-group-item d-none" data-key="TOTALITEMPRICE">
          <span className="row mx-0">
            <span className="col-7 displayName">NULL</span>
            <span
              className="col-5 displayValue text-right"
              data-key="TOTALITEMPRICE"
            >
              $468.99
            </span>
          </span>
        </li>

        <li className="list-group-item d-none" data-key="RANGETOTALPRICE">
          <span className="row mx-0">
            <span className="col-7 displayName">
              Total Cost of Reservations:
            </span>
            <span
              className="col-5 displayValue text-right"
              data-key="RANGETOTALPRICE"
            >
              $0.00
            </span>
          </span>
        </li>

        <li className="list-group-item d-none" data-key="TOTALPROMOPRICE">
          <span className="row mx-0">
            <span className="col-7 displayName">NULL</span>
            <span
              className="col-5 displayValue text-right"
              data-key="TOTALPROMOPRICE"
            >
              $468.99
            </span>
          </span>
        </li>

        <li className="list-group-item d-none" data-key="TOTALCREDITS">
          <span className="row mx-0">
            <span className="col-7 displayName">Credits:</span>
            <span
              className="col-5 displayValue text-right"
              data-key="TOTALCREDITS"
            >
              $0.00
            </span>
          </span>
        </li>

        <li className="amountDue list-group-item" data-key="AMOUNT_DUE">
          <span className="row mx-0">
            <span className="col-7 displayName">Subtotal:</span>
            <span
              className="col-5 displayValue text-right"
              data-key="amount_due"
            >
              ${subTotal}
            </span>
          </span>
        </li>
        <input type="button" value="Place order" />
      </ul>
    </>
  );
};

export default OrderSummary;
