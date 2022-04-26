import React from "react";

const TopPaypal = (props) => {
  let order = props.order;
  return (
    <>
      <div className="row order mx-0">
        <div className="col-lg-2 col-md-4 col-sm-6 col-12">
          <p>
            Order number:
            <strong className="d-block">{order.orderNumber}</strong>
          </p>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 col-12">
          <p>
          Transaction ID:
            <strong className="d-block">{order.transId}</strong>
          </p>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 col-12">
          <p>
          Order Status:
            <strong className="d-block">{order.orderStatus}</strong>
          </p>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 col-12">
          <p>
            Payment Method:
            <strong className="d-block">{order.payment.paymentMethod}</strong>
          </p>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 col-12">
          <p>
            Payment Status:
            <strong className="d-block">{order.payment.status}</strong>
          </p>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 col-12">
          <p>
          Payment ID:
            <strong className="d-block">{order.payment.id}</strong>
          </p>
          
        </div>  
      </div>

      <div className="row order mx-0">
      <div className="col-lg-2 col-md-4 col-sm-6 col-12">
          <p>
            Account Number:
            <strong className="d-block">{order.accountNumber}</strong>
          </p>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 col-12">
          <p>
            Order Date:
            <strong className="d-block">{order.date_created}</strong>
          </p>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 col-12">
        <p>
          Order Total:
            <strong className="d-block">${order.order.total}</strong>
          </p>
        </div>  
        <div className="col-lg-2 col-md-4 col-sm-6 col-12">
          <p>
          Tax:
            <strong className="d-block">{order.order.tax}</strong>
          </p>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 col-12">
          <p>
            Shipping:
            <strong className="d-block">{order.order.shipping.name}</strong>
          </p>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 col-12">
        <p>
           Subtotal:
            <strong className="d-block">${order.order.subTotal}</strong>
          </p>
        </div>
      </div>

      
      

      
      

     
      {/* <div className="row mx-0 total">
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
      </div> */}
    </>
  );
};

export default TopPaypal;
