import React, { useEffect, useState } from "react";
import { getCurrentUserID } from "../../controllers/account";
import { csHandleChange } from "../../controllers/cart";
import { getOrders } from "../../controllers/order";

const Order = (props) => {
  const [orders, setOrders] = useState([]);
  useEffect(async () => {
    let userID = await getCurrentUserID();

    let ordersData = await getOrders(userID);

    setOrders(ordersData);
  }, []);
  return (
    <div className="row">
      <div className="accountBody col-12 col-sm-7 col-md-8 col-lg-10">
        <div className="page-heading">Order History</div>
        <br clear="all" />
        <div className="account-page">
          <p className="infoTXT">
            There are <strong className="larger_bold">0</strong> orders under
            your account.
          </p>
          <table id="order-history" className="table table-striped">
            <thead>
              <tr>
                <th align="center">Order Number</th>
                <th align="center">Date</th>
                <th align="center">Total</th>
                <th align="center">Shipping</th>
                <th align="center">Tax</th>
                <th align="center">Subtotal</th>
                <th align="center"></th>
              </tr>
            </thead>
            <tbody>
              {orders && orders.length > 0
                ? orders.map((orderData) => {
                    return (
                      <tr>
                        <td>{orderData.orderNumber}</td>
                        <td>{orderData.date_created}</td>
                        <td>${orderData.order.total}</td>
                        <td>{orderData.order.shipping.name}</td>
                        <td>${orderData.order.tax}</td>
                        <td>${orderData.order.subTotal}</td>
                      </tr>
                    );
                  })
                : ""}
            </tbody>
          </table>

          <br />
          <div className="actionBtns">
            <button
              title="Continue Shopping"
              className="btn btn-secondary"
              onClick={() => {
                csHandleChange();
              }}
            >
              Continue Shopping
            </button>
            <button title="My Account" className="btn btn-primary">
              Account Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
