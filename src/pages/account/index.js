import React, { useState, useEffect } from "react";
import Head from "next/head";
import $ from "jquery";
import { getUserWishLists } from "../../controllers/wishlist";
import { getAccountcripts } from "../../assets/js/main";
import Layout from "../../components/account/Layout";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const Account = (props) => {
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

  let cartValue = [];
  if (typeof window != "undefined") {
    cartValue = JSON.parse(localStorage.getItem("cart"));
  }

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
      <Header taxonomy={props.data.taxanomy} cartData={cartValue} />
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
export default Account;
