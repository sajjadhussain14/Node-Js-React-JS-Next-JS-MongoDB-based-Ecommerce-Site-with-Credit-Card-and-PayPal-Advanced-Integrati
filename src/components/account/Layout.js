import React from "react";
import Breadcrumbs from "./Breadcrumbs";
import TabsHeadings from "./TabsHeadings";
import HomeTabContent from "./HomeTabContent";
import BillingAddressTab from "./BillingAddressTab";
import ShippingAddressTab from "./ShippingAddressTab";
import OrdersTabContent from "./OrdersTabContent";
import WishListTabContent from "./WishListTabContent";
import { getBillingAddress, logOut } from "../../controllers/account";

const Layout = (props) => {
  return (
    <section id="myAccountPage" className="container-fluid">
      <Breadcrumbs />
      <div className="tabs-container">
        <section>
          <TabsHeadings
            currentTab={props.currentTab}
            setCurrentTab={props.setCurrentTab}
            userData={props.userData}
            setUserData={props.setUserData}
          />

          <div
            id="myTabContent"
            className="tab-content fancyTabContent"
            aria-live="polite"
          >
            <HomeTabContent
              currentTab={props.currentTab}
              setCurrentTab={props.setCurrentTab}
              userData={props.userData}
              setUserData={props.setUserData}
            />

            <BillingAddressTab
              currentTab={props.currentTab}
              setCurrentTab={props.setCurrentTab}
              userData={props.userData}
              setUserData={props.setUserData}
            />

            <ShippingAddressTab
              currentTab={props.currentTab}
              setCurrentTab={props.setCurrentTab}
              userData={props.userData}
              setUserData={props.setUserData}
            />

            <OrdersTabContent
              currentTab={props.currentTab}
              setCurrentTab={props.setCurrentTab}
            />

            <WishListTabContent
              userData={props.userData}
              setUserData={props.setUserData}
              currentTab={props.currentTab}
              setCurrentTab={props.setCurrentTab}
              userLists={props.userLists}
              setUserLists={props.setUserLists}
              listName={props.listName}
              setListName={props.setListName}
              wishListItems={props.wishListItems}
            />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Layout;
