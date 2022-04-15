import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getOrdersByID } from "../../controllers/order";

const orderbyID = () => {
  const router = useRouter();
  const { id } = router.query;

  const [order, setOrder] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    let orderData = await getOrdersByID(id);
    setOrder(orderData);
    setLoading(false);
  }, []);

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

  return (
    <>
      {order && Object.keys(order).length != 0 ? (
        <section className="thankYou">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 className="text-center">Order Details</h1>
                <hr />
              </div>
              <div className="row">
                <div className="col">
                  <p className="text-uppercase">
                    order number:
                    <strong className="d-block mt-1">
                      {order.orderNumber}
                    </strong>
                  </p>
                </div>
                <div className="col">
                  <p className="text-uppercase">
                    Payment ID:
                    <strong className="d-block mt-1">{order.payment.id}</strong>
                  </p>
                </div>

                <div className="col">
                  <p className="text-uppercase">
                    Order Status:
                    <strong className="d-block mt-1">
                      {order.orderStatus}
                    </strong>
                  </p>
                </div>
                <div className="col">
                  <p className="text-uppercase">
                    payment method:
                    <strong className="d-block mt-1">
                      {order.payment.paymentMethod}
                    </strong>
                  </p>
                </div>
                <div className="col">
                  <p className="text-uppercase">
                    payment Status:
                    <strong className="d-block mt-1">
                      {order.payment.status}
                    </strong>
                  </p>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col">
                  <p className="text-uppercase">
                    Date:
                    <strong className="d-block mt-1">
                      {order.date_created}
                    </strong>
                  </p>
                </div>

                <div className="col">
                  <p className="text-uppercase">
                    Total:
                    <strong className="d-block mt-1">
                      ${order.order.total}
                    </strong>
                  </p>
                </div>
                <div className="col">
                  <p className="text-uppercase">
                    Tax:
                    <strong className="d-block mt-1">{order.order.tax}</strong>
                  </p>
                </div>
                <div className="col">
                  <p className="text-uppercase">
                    shipping:
                    <strong className="d-block mt-1">
                      {order.order.shipping.name}
                    </strong>
                  </p>
                </div>
                <div className="col">
                  <p className="text-uppercase">
                    Subtotal:
                    <strong className="d-block mt-1">
                      {order.order.subTotal}
                    </strong>
                  </p>
                </div>
              </div>
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

              <hr />
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

export default orderbyID;
