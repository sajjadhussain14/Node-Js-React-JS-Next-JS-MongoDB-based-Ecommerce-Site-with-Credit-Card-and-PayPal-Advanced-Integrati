import React from "react";

const TopCreditCard = (props) => {
  let order = props.order;

  return (
    <>
      <div className="row">
        <div className="col">
          <p className="text-uppercase">
            order number:
            <strong className="d-block mt-1">{order.orderNumber}</strong>
          </p>
        </div>
        <div className="col">
          <p className="text-uppercase">
            Transaction ID:
            <strong className="d-block mt-1">{order.transId}</strong>
          </p>
        </div>
        <div className="col">
          <p className="text-uppercase">
            Order Status:
            <strong className="d-block mt-1">{order.orderStatus}</strong>
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
            <strong className="d-block mt-1">{order.payment.status}</strong>
          </p>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col">
          <p className="text-uppercase">
            Date:
            <strong className="d-block mt-1">{order.date_created}</strong>
          </p>
        </div>

        <div className="col">
          <p className="text-uppercase">
            Total:
            <strong className="d-block mt-1">${order.order.total}</strong>
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
            <strong className="d-block mt-1">${order.order.subTotal}</strong>
          </p>
        </div>
      </div>
    </>
  );
};

export default TopCreditCard;
