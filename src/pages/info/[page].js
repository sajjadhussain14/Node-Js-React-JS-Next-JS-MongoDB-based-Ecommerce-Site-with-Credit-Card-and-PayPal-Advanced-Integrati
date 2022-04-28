import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import { useRouter } from "next/router";
import Footer from "../../components/footer/Footer";
const Info = (props) => {
  let { taxanomy } = prpps.data;
  const router = useRouter();
  let { page } = router.query;

  page = page.replace(/#|-/g, " ");

  let cartValue = [];
  if (typeof window != "undefined") {
    cartValue = JSON.parse(localStorage.getItem("cart"));
  }

  return (
    <>
      <Header taxonomy={props.taxonomy} cartData={cartValue} />;
      <h1>Coming soon page {page}</h1>
      <Footer />
    </>
  );
};
// START SERVER SIDE RENDERING FOR DATA FETCH
export async function getServerSideProps(context) {
  let { URL } = process.env;

  let data = {
    taxanomy: [],
  };

  let taxanomy = [];

  // Fetch taxanomy from external API
  let res = {};
  try {
    res = await fetch(URL + "/api/taxonomy/taxonomy");
    taxanomy = await res.json();
    data.taxanomy = taxanomy;
  } catch (err) {
    data.taxanomy = [];
  }

  // Pass data to the page via props
  return { props: { data } };
}
// END SERVER SIDE RENDERING FOR DATA FETCH

export default Info;
