import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { getOrderDetails, setOrderDetails } from "../../controllers/order";

const error = (props) => {
  let error = "";

  let orderDetails = getOrderDetails("orderDetails");
  try {
    error = orderDetails.error;
  } catch (err) {}
  console.log("erorrrrr", orderDetails);

  setTimeout(() => {
    setOrderDetails("orderDetails", {});
  }, 2000);

  let cartValue = [];
  if (typeof window != "undefined") {
    cartValue = JSON.parse(localStorage.getItem("cart"));
  }

  return (
    <>
      <Header taxonomy={props.taxonomy} cartData={cartValue} />;
      <div>
        <section id="contentHolder">
          <div id="category">
            <div className="container">
              <div className="row">
                <div class="alert alert-warning" role="alert">
                  <p>{error}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default error;
