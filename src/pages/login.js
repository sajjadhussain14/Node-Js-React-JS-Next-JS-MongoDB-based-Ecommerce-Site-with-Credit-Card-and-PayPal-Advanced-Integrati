import React, { useState, useEffect } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Layout from "../components/login/Layout";

const Login = (props) => {
  const [isLogin, setIsLogin] = useState("no");
  const [screen, setScreen] = useState("login");

  let loginstatus = "";

  if (typeof window != "undefined") {
    try {
      loginstatus = localStorage.getItem("isLogin");
    } catch (err) {}
  }
  useEffect(() => {
    setIsLogin(loginstatus);
  }, []);
  let cartValue = [];
  if (typeof window != "undefined") {
    cartValue = JSON.parse(localStorage.getItem("cart"));
  }

  return (
    <>
      <Header taxonomy={props.data.taxanomy} cartData={cartValue} />
      <Layout
        screen={screen}
        setScreen={setScreen}
        isLogin={isLogin}
        setIsLogin={setIsLogin}
      />
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

export default Login;
