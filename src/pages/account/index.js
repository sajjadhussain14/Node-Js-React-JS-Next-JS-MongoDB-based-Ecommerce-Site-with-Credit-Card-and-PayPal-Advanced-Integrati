import React, { useState, useEffect } from "react";
import Head from "next/head";
import $ from "jquery";
import { getUserWishLists } from "../../controllers/wishlist";
import { getAccountcripts } from "../../assets/js/main";
import Layout from "../../components/account/Layout";

const Account = ({ data }) => {
  const [userData, setUserData] = useState([]);
  const [currentTab, setCurrentTab] = useState("home");

  const [userLists, setUserLists] = useState([]);
  const [listName, setListName] = useState("");

  const [wishListItems, setWishListItems] = useState([]);

  let loginstatus = "";
  let currentUserID = 0;
  if (typeof window != "undefined") {
    loginstatus = localStorage.getItem("isLogin");
    currentUserID = localStorage.getItem("currentAliveUser");
  }

  if (typeof window != "undefined") {
    getAccountcripts($);
  }
  let userID = "";

  if (typeof window != "undefined") {
    userID = localStorage.getItem("currentAliveUser");
  }

  useEffect(async () => {
    let lists = await getUserWishLists(userID);
    setUserLists(lists);
  }, []);

  useEffect(() => {
    let currentListItems = [];
    currentListItems = userLists.filter(
      (list) => list.userID === userID && list.name == listName
    );

    setWishListItems(currentListItems);
  }, [listName, userLists]);

  return (
    <>
      <Head>
        <title>My Account | Optimized and SEO Friendly Demo Site</title>
        <meta
          name="title"
          content="My Account | Optimized and SEO Friendly Demo Site"
        />
        <meta
          name="description"
          content="My Account of Optimized and SEO Friendly Ecommerce site that will boost your sales and conversions"
        />
        <meta
          name="keywords"
          content="ecommerce, modern, SEO friendly, cumulus"
        />
      </Head>

      <Layout
        userData={userData}
        setUserData={setUserData}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        userLists={userLists}
        setUserLists={setUserLists}
        listName={listName}
        setListName={setListName}
        wishListItems={wishListItems}
      />
    </>
  );
};

export default Account;
