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

  setTimeout(() => {
    setOrderDetails("orderDetails", {});
  }, 2000);

  let cartValue = [];
  if (typeof window != "undefined") {
    cartValue = JSON.parse(localStorage.getItem("cart"));
  }

  return (
    <>
      <Header taxonomy={props.data.taxanomy} cartData={cartValue} />;
      <div>
        <section id="contentHolder">
          <div id="category">
            <div className="container">
              <div className="row">
                <div className="alert alert-warning" role="alert">
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

export async function getServerSideProps({ query, res }) {
  let { URL } = process.env;

  try {
    res.setHeader(
      "Cache-Control",
      "public, s-maxage=43200, stale-while-revalidate=60"
    );
  } catch (err) {}
  let data = {
    taxanomy: [],
  };

  let resp = {};
  try {
    resp = await fetch(URL + "/api/taxonomy/taxonomy");
    data.taxanomy = await resp.json();
  } catch (err) {
    data.taxanomy = [];
  }
  // Pass data to the page via props
  return { props: { data } };
}

export default error;
