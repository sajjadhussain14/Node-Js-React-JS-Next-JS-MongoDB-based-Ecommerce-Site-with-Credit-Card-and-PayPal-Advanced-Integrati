import React, { useState, useEffect } from "react";
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
      <Header taxonomy={props.taxonomy} cartData={cartValue} />
      <Layout
        screen={screen}
        setScreen={setScreen}
        isLogin={isLogin}
        setIsLogin={setIsLogin}
      />
    </>
  );
};

export default Login;
