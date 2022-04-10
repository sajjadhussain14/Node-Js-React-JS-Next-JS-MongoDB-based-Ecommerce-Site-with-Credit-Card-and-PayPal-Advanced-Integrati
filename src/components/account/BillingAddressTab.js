import React from "react";
import BillingAddress from "./BillingAddress";

const PersonalInformationTabContent = (props) => {
  return (
    <div
      className="tab-pane  fade"
      id="tabBody1"
      role="tabpanel"
      aria-labelledby="tab1"
      aria-hidden="true"
    >
      {props.currentTab && props.currentTab == "billing" ? (
        <BillingAddress
          userData={props.userData}
          setUserData={props.setUserData}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default PersonalInformationTabContent;
