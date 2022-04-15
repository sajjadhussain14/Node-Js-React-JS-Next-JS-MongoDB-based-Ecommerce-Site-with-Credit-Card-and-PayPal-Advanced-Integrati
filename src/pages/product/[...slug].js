import React, { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { useDispatch } from "react-redux";
import { getBreadCrumbs, magicZoomEffect } from "../../controllers/product";
import BreadCrumbs from "../../components/product/BreadCrumbs";
import MainImage from "../../components/product/MainImage";
import AltImages from "../../components/product/AltImages";
import ProductInfo from "../../components/product/ProductInfo";
import ProductPrice from "../../components/product/ProductPrice";
import AddtoCartArea from "../../components/product/AddtoCartArea";
import ProductSwap from "../../components/product/ProductSwap";
import AdditionalInformation from "../../components/product/AdditionalInformation";
import RelatedProducts from "../../components/product/RelatedProducts";
import CartPopUP from "../../components/cart/CartPopUP";
import WishListPopUp from "../../components/product/WishListPopUp";
import { getUserWishLists } from "../../controllers/wishlist";
import Header from "../../components/header/Header";

const Product = (props) => {
  const [cart, setCart] = useState([]);
  const [fakeState, setFakeState] = useState("");
  const [userLists, setUserLists] = useState([]);
  const dispatch = useDispatch();
  const router = useRouter();
  const { slug } = router.query;
  if (!slug || slug.length < 1) {
    return "Invalid product ID or URL";
  }

  let cartValue = [];
  if (typeof window != "undefined") {
    cartValue = JSON.parse(localStorage.getItem("cart"));
  }

  let getProducts = [];
  let { product, rProducts } = props.data;

  let taxanomy = props.taxonomy;
  getProducts = { ...product };
  let breadCrumsContent = getBreadCrumbs(taxanomy, product);
  // START DISPLAY META DATA
  <Head>
    <title>{getProducts.name}</title>
    <meta name="description" content={getProducts.name} />
  </Head>;
  // END DISPLAY META DATA

  // START DISPLAY PRODUCT PAGE LAYOUT
  //const cartItems = useSelector((state) => state.cart);

  useEffect(() => {
    try {
      magicZoomEffect();
    } catch (err) {}
  }, []);

  let userID = "";
  useEffect(async () => {
    userID = localStorage.getItem("currentAliveUser");

    let lists = await getUserWishLists(userID);
    setUserLists(lists);
  }, [fakeState]);

  // SET SEO TAGS
  let title = "";
  let desc = "";
  let keywords = "";
  try {
    title = getProducts.name;
  } catch (err) {}

  try {
    desc = getProducts.name;
  } catch (err) {}

  try {
    keywords = getProducts.name;
  } catch (err) {}
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={desc} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index, follow" />
      </Head>
      <Header taxonomy={props.taxonomy} cartData={cartValue} />

      <section id="contentHolder">
        <div id="productcontent" className="bagecolorbg">
          <div className="container-fluid product-container mx-auto no-gutters nopadding">
            <BreadCrumbs breadCrumsContent={breadCrumsContent} />

            <div className="row  procontainer">
              <div className="col-xl-6 col-lg-6 col-md-6  col-sm-6 col-12 mt-3 product-img">
                <MainImage getProducts={getProducts} />
                <AltImages getProducts={getProducts} />
              </div>

              <div
                className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mt-lg-3 mt-sm-0  bg-white"
                id="purchasing"
              >
                <div className="inner">
                  <ProductInfo getProducts={getProducts} />

                  <div id="atcHolder">
                    <ProductPrice getProducts={getProducts} />
                    <AddtoCartArea
                      getProducts={getProducts}
                      cart={cart}
                      setCart={setCart}
                    />
                  </div>

                  <ProductSwap getProducts={getProducts} />
                </div>
              </div>
            </div>

            <AdditionalInformation getProducts={getProducts} />

            <RelatedProducts products={rProducts} />

            <CartPopUP cart={cart} ID={getProducts.id} products={rProducts} />
            <WishListPopUp
              currentProduct={getProducts}
              userLists={userLists}
              setUserLists={setUserLists}
              setFakeState={setFakeState}
            />
          </div>
        </div>
      </section>
    </>
  );
  // END DISPLAY CATEGORY PAGE LAYOUT
};

// START SERVER SIDE RENDERING FOR DATA FETCH
export async function getServerSideProps(context) {
  let { URL } = process.env;

  const { slug } = context.query;
  let productID = 0;
  let productName = "";
  try {
    productID = slug[0];
  } catch (err) {}
  try {
    productName = slug[1];
  } catch (err) {}

  let data = {
    taxanomy: [],
    product: {},
    rProducts: [],
  };

  let taxanomy = [];
  let prod = {};
  let related = [];

  // Fetch taxanomy from external API
  let res = {};

  // Fetch product data from external API
  try {
    res = await fetch(URL + `/api/product/${productID}`);
    prod = await res.json();
    data.product = prod;
  } catch (err) {
    data.product = {};
  }

  let currentProductDEPT = "";

  if (!data.product.Dept || data.product.Dept == "") {
    currentProductDEPT = "";
  } else {
    currentProductDEPT = data.product.Dept;
  }

  // Fetch related products data from external API
  let prodLimit = 10;
  try {
    res = await fetch(
      URL + `/api/product/realtedProducts/${currentProductDEPT}/${prodLimit}`
    );
    related = await res.json();
    data.rProducts = related;
  } catch (err) {
    data.rProducts = [];
  }

  // Pass data to the page via props
  return { props: { data } };
}
// END SERVER SIDE RENDERING FOR DATA FETCH

export default Product;
