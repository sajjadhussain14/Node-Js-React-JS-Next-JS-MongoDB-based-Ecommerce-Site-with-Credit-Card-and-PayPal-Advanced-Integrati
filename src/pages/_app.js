import React from "react";
import { useRouter } from "next/router";
import Router from "next/router";
import Script from "next/script";
import Head from "next/head";

import "../../styles/bootstrap.min.css";

import "../../styles/globals.css";
import "../../styles/thankYou.css";

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

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const start = () => {
      console.log("start");

      setLoading(true);
    };
    const end = () => {
      console.log("findished");
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  const router = useRouter();

  let cartData = [];
  if (typeof window != "undefined") {
    cartData = JSON.parse(localStorage.getItem("cart"));
  }
  const today = new Date();
  const nextweek = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 7
  );
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <html lang="en" />

        <meta
          httpEquiv="Cache-control"
          content="public"
          max-age="31536000"
          immutable="true"
        />
        <meta httpEquiv="Expires" content={nextweek} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
        <Component {...pageProps} cartData={cartData} router={router} />
      </>

      <Script
        id="googletagmanager"
        strategy="afterInteractive"
        src={"https://www.googletagmanager.com/gtag/js?id=UA-227223662-1"}
      />

      <Script id="gtag" strategy="afterInteractive">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'UA-227223662-1', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>

      <Script
        async
        defer
        src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"
        strategy="beforeInteractive"
      />

      <Script
        async
        defer
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
      />

      <Script
        async
        defer
        src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.min.js"
        strategy="afterInteractive"
      />
    </>
  );
}
export default MyApp;
