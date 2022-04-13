import React from "react";
import Order from "./Order";

const OrdersTabContent = (props) => {
  {
    props.currentTab && props.currentTab == "shipping" ? "aaa" : "bbb";
  }
  return (
    <div
      className="tab-pane  fade"
      id="tabBody3"
      role="tabpanel"
      aria-labelledby="tab3"
      aria-hidden="true"
    >
      {props.currentTab && props.currentTab == "orders" ? <Order /> : ""}
    </div>
  );
};

export default OrdersTabContent;
