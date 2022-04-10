import React from "react";
import ShippingAddress from "./ShippingAddress";

const ShippingAddressTab = (props) => {
  return (
    <div
      className="tab-pane  fade"
      id="tabBody2"
      role="tabpanel"
      aria-labelledby="tab2"
      aria-hidden="true"
    >
      {props.currentTab && props.currentTab == "shipping" ? (
        <ShippingAddress
          userData={props.userData}
          setUserData={props.setUserData}
        />
      ) : (
        "uuu"
      )}
    </div>
  );
};

export default ShippingAddressTab;
