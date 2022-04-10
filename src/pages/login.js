import React, { useState, useEffect } from "react";
import Layout from "../components/login/Layout";

const Login = () => {
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

  return (
    <>
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
