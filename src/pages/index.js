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
        <meta
          httpEquiv="Cache-control"
          content="public"
          max-age="31536000"
          immutable
        />
      </Head>
      <Header taxonomy={props.data.taxanomy} cartData={cartValue} />
      <Layout />
      <Footer />
    </>
  );
}

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
