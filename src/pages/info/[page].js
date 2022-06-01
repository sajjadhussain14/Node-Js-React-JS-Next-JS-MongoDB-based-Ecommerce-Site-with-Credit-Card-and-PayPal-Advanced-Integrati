import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import { useRouter } from "next/router";
import Footer from "../../components/footer/Footer";
const Info = (props) => {
  let { taxanomy } = props.data;
  const router = useRouter();
  let { page } = router.query;

  page = page.replace(/#|-/g, " ");

  let cartValue = [];
  if (typeof window != "undefined") {
    cartValue = JSON.parse(localStorage.getItem("cart"));
  }

  return (
    <>
      <Header taxonomy={taxanomy} cartData={cartValue} />;
      <h1>Coming soon page {page}</h1>
      <Footer />
    </>
  );
};
// START SERVER SIDE RENDERING FOR DATA FETCH

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

export default Info;
