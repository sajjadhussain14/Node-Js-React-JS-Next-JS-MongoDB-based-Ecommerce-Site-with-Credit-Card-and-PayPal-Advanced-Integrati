import React from "react";
import { getCurrentUserData } from "../../controllers/account";

const TabsHeadings = (props) => {
  return (
    <section id="tabs-heading">
      <ul className="nav nav-tabs fancyTabs" role="tablist" id="MyAccountTabs">
        <li
          className="tab fancyTab active"
          onClick={(e) => {
            loadHome(e, "account", props.setUserData, props.setCurrentTab);
          }}
        >
          <div className="arrow-down">
            <div className="arrow-down-inner"></div>
          </div>
          <a
            id="tab0"
            href="#tabBody0"
            role="tab"
            aria-controls="tabBody0"
            aria-selected="true"
            data-bs-toggle="tab"
          >
            <span className="fa fa-home"></span>
            <span className="d-inline-block">Home</span>
          </a>
          <div className="whiteBlock"></div>
        </li>

        <li
          className="tab fancyTab"
          onClick={(e) => {
            loadBilling(e, "account", props.setUserData, props.setCurrentTab);
          }}
        >
          <div className="arrow-down">
            <div className="arrow-down-inner"></div>
          </div>
          <a
            id="tab1"
            href="#tabBody1"
            role="tab"
            aria-controls="tabBody1"
            aria-selected="true"
            data-bs-toggle="tab"
          >
            <span className="fa fa-users-cog"></span>
            <span className="d-inline-block">Billing Address</span>
          </a>
          <div className="whiteBlock"></div>
        </li>

        <li
          className="tab fancyTab"
          onClick={(e) => {
            loadShipping(e, "account", props.setUserData, props.setCurrentTab);
          }}
        >
          <div className="arrow-down">
            <div className="arrow-down-inner"></div>
          </div>
          <a
            id="tab2"
            href="#tabBody2"
            role="tab"
            aria-controls="tabBody2"
            aria-selected="true"
            data-bs-toggle="tab"
          >
            <span className="fa fa-address-book"></span>
            <span className="d-inline-block">Shipping Address</span>
          </a>
          <div className="whiteBlock"></div>
        </li>

        <li
          className="tab fancyTab"
          onClick={(e) => {
            loadOrders(e, "account", props.setUserData, props.setCurrentTab);
          }}
        >
          <div className="arrow-down">
            <div className="arrow-down-inner"></div>
          </div>
          <a
            id="tab3"
            href="#tabBody3"
            role="tab"
            aria-controls="tabBody3"
            aria-selected="true"
            data-bs-toggle="tab"
          >
            <span className="fa fa-boxes"></span>
            <span className="d-inline-block">order</span>
          </a>
          <div className="whiteBlock"></div>
        </li>

        <li
          className="tab fancyTab"
          onClick={(e) => {
            loadWishlist(e, "account", props.setUserData, props.setCurrentTab);
          }}
        >
          <div className="arrow-down">
            <div className="arrow-down-inner"></div>
          </div>
          <a
            id="tab4"
            href="#tabBody4"
            role="tab"
            aria-controls="tabBody4"
            aria-selected="true"
            data-bs-toggle="tab"
          >
            <span className="fa fa-gifts"></span>
            <span className="d-inline-block">wishlist</span>
          </a>
          <div className="whiteBlock"></div>
        </li>
      </ul>
    </section>
  );
};

const loadShipping = async (e, frompage, setUserData, setCurrentTab) => {
  setCurrentTab("shipping");
  let user = await getCurrentUserData(e);
  setUserData(user);
};

const loadHome = (e, frompage, setUserData, setCurrentTab) => {
  setCurrentTab("home");
};

const loadBilling = async (e, frompage, setUserData, setCurrentTab) => {
  setCurrentTab("billing");

  let user = await getCurrentUserData(e);
  setUserData(user);
};

const loadOrders = (e, frompage, setUserData, setCurrentTab) => {
  setCurrentTab("orders");
};

const loadWishlist = (e, frompage, setUserData, setCurrentTab) => {
  setCurrentTab("wishlist");
};

export default TabsHeadings;
