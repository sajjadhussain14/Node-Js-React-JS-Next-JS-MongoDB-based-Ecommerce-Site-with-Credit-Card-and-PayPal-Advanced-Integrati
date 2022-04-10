import Head from "next/head";
import Layout from "../components/home/Layout";

export default function Home() {
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
      </Head>

      <Layout />
    </>
  );
}
