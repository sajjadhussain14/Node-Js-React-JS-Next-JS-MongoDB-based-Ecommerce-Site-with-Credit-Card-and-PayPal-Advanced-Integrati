import React from "react";
import Heading from "./Heading";
import WizardDots from "./WizardDots";
import ReturningCustomer from "./ReturningCustomer";

import ShippingInfo from "./ShippingInfo";
import ShippingMethods from "./ShippingMethods";

import BillingInfo from "./BillingInfo";
import PaymentInfo from "./PaymentInfo";
import Cart from "./Cart";
import OrderSummary from "./OrderSummary";
import OrderAdditional from "./OrderAdditional";

const Layout = (props) => {
  return (
    <main className="page-content">
      <section id="checkout-main-content" className="section-ptb">
        <div className="container">
          <Heading />

          <section className="checkout-details-wrapper">
            <div className="row">
              <section id="left-portion" className="col-lg-4 col-md-6 left">
                <div className="form-wizard">
                  <form
                    action=""
                    method="post"
                    role="application"
                    id="wizard"
                    className="wizard clearfix"
                  >
                    <WizardDots
                      userData={props.userData}
                      setUserData={props.setUserData}
                    />
                    <section id="left-portion-middle" className="row">
                      <div className="col">
                        <div className="coupon-area">
                          <ReturningCustomer
                            screen={props.screen}
                            setScreen={props.setScreen}
                            userData={props.userData}
                          />
                        </div>
                      </div>
                    </section>

                    <ShippingInfo
                      userData={props.userData}
                      setUserData={props.setUserData}
                    />

                    <ShippingMethods
                      shippingMethod={props.shippingMethod}
                      setShippingMethod={props.setShippingMethod}
                    />

                    <BillingInfo
                      userData={props.userData}
                      setUserData={props.setUserData}
                    />

                    <PaymentInfo />
                  </form>
                </div>
              </section>
              <section id="right-portion" className="col-lg-8 col-md-6 right">
                <section className="your-order-wrapper">
                  <div className="row">
                    <div className="col-lg-12 col-md-12 p-sm-4 p-2">
                      <div id="products-list" className="me-sm-3">
                        <Cart cart={props.cart} setCart={props.setCart} />
                      </div>
                    </div>
                  </div>
                </section>

                <section className="order-summary-checkout">
                  <div className="row mx-0">
                    <div className="col-lg-12 col-md-12 pl-sm-4 pr-sm-4 pb-0">
                      <div id="products-list" className="me-sm-3">
                        <OrderAdditional />
                      </div>
                    </div>
                  </div>
                </section>

                <section className="order-summary-checkout">
                  <div className="row mx-0">
                    <div className="col-lg-12 col-md-12 pl-sm-4 pr-sm-4  p-2">
                      <div id="products-list" className="me-sm-3">
                        <OrderSummary
                          cart={props.cart}
                          shippingMethod={props.shippingMethod}
                          setShippingMethod={props.setShippingMethod}
                          tax={props.tax}
                          setTax={props.setTax}
                        />
                      </div>
                    </div>
                  </div>
                </section>
              </section>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};

export default Layout;
