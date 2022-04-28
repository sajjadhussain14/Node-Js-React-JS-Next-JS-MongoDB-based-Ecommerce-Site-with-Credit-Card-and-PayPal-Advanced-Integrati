import React from "react";
import { useRouter } from "next/router";
import Router from "next/router";
import Script from "next/script";
import Head from "next/head";

import "../../styles/globals.css";
import "../../styles/thankYou.css";

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

function MyApp({ Component, pageProps, taxonomy }) {
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
      <Script
        strategy="lazyOnload"
        src={"https://www.googletagmanager.com/gtag/js?id=UA-227223662-1"}
      />

      <Script strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'UA-227223662-1', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>

      <Head>
        <title>Welcome!</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta
          http-equiv="Cache-control"
          content="public"
          max-age="31536000"
          immutable
        />
        <meta http-equiv="Expires" content={nextweek} />
      </Head>

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
        href="/css/bootstrap.min.css"
        rel="stylesheet"
        type="text/css"
        media="all"
      />

      <>
        {loading ? (
          <div style={{ height: "200px" }}>
            <div className={`overlay `}>
              <div className="loading " style={{ top: "25%", left: "40%" }}>
                <img src="/images/loader.gif" alt="loader" />
              </div>
            </div>
          </div>
        ) : (
          <>
            <Component
              {...pageProps}
              taxonomy={taxonomy}
              cartData={cartData}
              router={router}
            />
          </>
        )}
      </>

      <Script
        async
        defer
        src="/js/jquery/3.5.1/jquery.min.js"
        strategy="lazyOnload"
      />

      <Script
        async
        defer
        src="/js/bootstrap/5.1.3/bootstrap.bundle.min.js"
        strategy="afterInteractive"
      />

      <Script
        async
        defer
        src="/js/bootstrap/v4_6_0/bootstrap.min.js"
        strategy="afterInteractive"
      />
    </>
  );
}

MyApp.getInitialProps = async ({ query, res }) => {
  try {
    res.setHeader(
      "Cache-Control",
      "public, s-maxage=43200, stale-while-revalidate=60"
    );
  } catch (err) {}
  let { URL } = process.env;

  // Fetch taxanomy from external API
  let resp = {};
  let taxanomy = [];
  try {
    resp = await fetch(URL + "/api/taxonomy/taxonomy");
    taxanomy = await resp.json();
  } catch (err) {
    taxanomy = [];
  }

  return { taxonomy: taxanomy };
};
export default MyApp;
