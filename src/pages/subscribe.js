import React, { useState, useEffect } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const Subscribe = ({ data }) => {
  let { taxanomy } = data;

  return (
    <>
      <Header taxonomy={taxanomy} />
      <h1>Coming soon</h1>
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

export default Subscribe;
