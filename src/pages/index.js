import Head from "next/head";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Layout from "../components/home/Layout";

export default function Home(props) {
  let cartValue = [];
  if (typeof window != "undefined") {
    cartValue = JSON.parse(localStorage.getItem("cart"));
  }
  return (
    <>
      <Head>
        <title>Optimized and SEO Friendly Demo Site</title>
        <meta name="title" content="Optimized and SEO Friendly Demo Site" />
        <meta
          name="description"
          content="Optimized and SEO Friendly Ecommerce site that will boost your sales and conversions"
        />
        <meta
          name="keywords"
          content="ecommerce, modern, SEO friendly, cumulus"
        />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          http-equiv="Cache-control"
          content="public"
          max-age="31536000"
          immutable
        />
      </Head>
      <Header taxonomy={props.taxonomy} cartData={cartValue} />
      <Layout />
      <Footer />
    </>
  );
}
