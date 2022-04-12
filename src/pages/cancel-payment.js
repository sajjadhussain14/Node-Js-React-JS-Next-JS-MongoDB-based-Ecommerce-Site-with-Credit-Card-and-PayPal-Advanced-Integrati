import React from "react";
import Router from "next/router";
const cancelPayment = () => {
  setTimeout(() => {
    Router.push("/");
  }, 2000);
  return <div>You have Cancel Your Pament</div>;
};

export default cancelPayment;
