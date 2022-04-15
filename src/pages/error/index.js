import React from "react";
import { getOrderDetails, setOrderDetails } from "../../controllers/order";

const error = () => {
  let error = "";

  let orderDetails = getOrderDetails("orderDetails");
  try {
    error = orderDetails.error;
  } catch (err) {}
  console.log("erorrrrr", orderDetails);

  setTimeout(() => {
    setOrderDetails("orderDetails", {});
  }, 2000);

  return (
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
  );
};

export default error;
