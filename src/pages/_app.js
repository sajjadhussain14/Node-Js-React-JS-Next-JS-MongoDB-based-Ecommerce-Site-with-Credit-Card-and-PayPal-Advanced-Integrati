import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

import Head from "next/head";

import "../../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "../../styles/header.css";
import "../../styles/home.css";
import "../../styles/myaccount.css";
import "../../styles/checkout.css";
import "../../styles/dropCart.css";

import "../../styles/cart-popup.css";
import "../../styles/loader.css";

import "../../styles/viewCart.css";

import "../../styles/product.css";

import "../../styles/category.css";

import "../../styles/footer.css";
import "../../styles/magicZoomPlus.css";

import { Provider } from "react-redux";
import store from "../redux/store";
import Script from "next/script";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

function MyApp({ Component, pageProps, taxonomy }) {
  const router = useRouter();

  let variants = {
    hidden: { opacity: 0, x: -200 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 0 },
  };

  variants = {
    hidden: {
      scale: 0.9,
      opacity: 1,
    },

    enter: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
    exit: { opacity: 0, x: 0, y: 0 },
  };

  let cartData = [];
  if (typeof window != "undefined") {
    cartData = JSON.parse(localStorage.getItem("cart"));
  }
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css"
        rel="stylesheet"
      ></link>
      <link
        rel="stylesheet"
        href="https://template1.cumulusbetasites.com/css/owl.carousel.css"
      />
      <link
        rel="stylesheet"
        href="https://template1.cumulusbetasites.com/css/owl.theme.default.min.css"
      />
      <link
        href="https://template1.cumulusbetasites.com//css/bootstrap.min.css"
        rel="stylesheet"
        type="text/css"
        media="all"
      />

      <Header taxonomy={taxonomy} cartData={cartData} />

      <Provider store={store}>
        <motion.div
          key={router.route}
          variants={variants} // Pass the variant object into Framer Motion
          initial="hidden" // Set the initial state to variants.hidden
          animate="enter" // Animated state to variants.enter
          exit="exit" // Exit state (used later) to variants.exit
          className=""
        >
          <Component
            {...pageProps}
            taxonomy={taxonomy}
            cartData={cartData}
            router={router}
          />
        </motion.div>
      </Provider>
      <Footer />

      <script
        defer
        src="https://cdn.celerantwebservices.com/jquery/3.5.1/jquery.min.js"
      ></script>

      <script
        defer
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
      ></script>
      <script
        defer
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
      ></script>
      <script
        defer
        src="https://template1.cumulusbetasites.com/js/bootstrap.min.js"
      ></script>
    </>
  );
}

MyApp.getInitialProps = async (ctx) => {
  let { URL } = process.env;

  // Fetch taxanomy from external API
  let res = {};
  let taxanomy = [];
  try {
    res = await fetch(URL + "/api/taxonomy/taxonomy");
    taxanomy = await res.json();
  } catch (err) {
    taxanomy = [];
  }

  return { taxonomy: taxanomy };
};
export default MyApp;