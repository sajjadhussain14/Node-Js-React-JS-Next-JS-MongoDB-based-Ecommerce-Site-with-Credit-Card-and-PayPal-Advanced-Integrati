import React, { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Layout from "../../components/category/Layout";
import {
  avaialbilityFilter,
  GetProducts,
  GetUrlData,
  GetUrlTaxonomy,
  liveProdsRGXSearch,
  LoadSettings,
  PaginationCalc,
  setInitAvailable,
  SortProducts,
} from "../../controllers/category";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const Category = (props) => {
  const router = useRouter();
  const { slug } = router.query;

  let taxanomy = props.data.taxanomy;

  if (!taxanomy || taxanomy.length < 1) {
    taxanomy = [];
  }
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [level, setLevel] = useState(0);
  const [property, setProperty] = useState("default");
  const [listGridViews, setListGridViews] = useState("");
  const [checkAvailability, setCheckAvailability] = useState("all-items");
  const [uData, setUData] = useState([]);
  const [searchText, setSearchText] = useState("");

  const [seoH1Text, setseoH1Text] = useState("");
  const [setLongText, setSeoLongText] = useState("");

  const [sortDefault, setSortDefault] = useState("");
  const [sortNewestStatus, setSortNewestStatus] = useState("");
  const [sortBrandStatus, setSortBrandStatus] = useState("");
  const [allFilters, setAllFilters] = useState([]);

  //HOOK FOR PERPAGE PRODUCTS
  const [perpageProductscount, setPerpageProductscount] = useState(18);
  //HOOK FOR ACTIVE PAGE
  const [activePage, setCurrentPage] = useState(1);
  //PRODUCTS PER PAGE
  let productsPerPage = perpageProductscount;

  let urlTaxonomy = useMemo(() => {}, []);

  let urlData = [];
  let { products, settingsData, categoryMode, landingCategories } = props.data;

  let temProducts = [];
  let entryTime = "Y";

  // START EXTRACT SETTINGS DATA

  LoadSettings(
    settingsData,
    setSortBrandStatus,
    setSortNewestStatus,
    setCheckAvailability,
    setSortDefault,
    useEffect
  );
  // END EXTRACT SETTINGS DATA

  urlTaxonomy = GetUrlTaxonomy(taxanomy, slug);

  setInitAvailable(checkAvailability, setCheckAvailability);

  useEffect(() => {
    try {
      if (urlTaxonomy.typ.toUpperCase() == "EMPTY") {
        setLevel(1);
      } else {
        setLevel(2);
      }
    } catch (err) {
      setLevel(0);
    }
  }, [urlTaxonomy]);

  useEffect(() => {
    GetUrlData(urlTaxonomy, taxanomy).then((data) => {
      setUData(data);
    });
  }, [taxanomy, urlTaxonomy]);

  // START DISPLAY META DATA
  urlData = [...uData];

  if (!property || property == "") property = sortDefault;
  let taxonomyName = "";
  let taxonomyValue = "";
  let dataBy = "";
  let parentDept = "";

  try {
    parentDept = urlData.parentDept;
  } catch (err) {}

  if (urlData && urlData.length > 0) {
    let currentIncex = urlData.length - 1;

    taxonomyName = urlData[currentIncex].taxonomy;
    taxonomyValue = urlData[currentIncex].value;
    dataBy = "taxanomy"; // not this for search and brand
  }

  useEffect(() => {
    setLoading(true);

    try {
      setTimeout(() => {
        setAllProducts(products);
        setLoading(false);
      }, 100);
    } catch (err) {
      setLoading(false);
    }
  }, [slug]);

  /*********START SEARCH PRODUCTS USING REGEX*************/
  let fproducts = [];
  fproducts = liveProdsRGXSearch(searchText, allProducts);

  /*****END SEARCH PRODUCTS USING REGEX*******************/

  temProducts = GetProducts(
    allFilters,
    fproducts,
    property,
    slug,
    taxonomyName,
    taxonomyValue,
    dataBy
  );

  /*****************************END GETTING PRODUCTS ACCORING TO FILTERS***************************/
  //START STATES HOOK IS HANDLING DATA ACCORING TO AVAIALBILITY FILTERS
  temProducts = avaialbilityFilter(temProducts, checkAvailability);
  //END STATES HOOK IS HANDLING DATA ACCORING TO AVAIALBILITY FILTERS

  useEffect(() => {
    setLoading(true);

    try {
      setTimeout(() => {
        setLoading(false);
      }, 100);
    } catch (err) {
      setLoading(false);
    }
  }, [slug]);

  let currentproducts = [];

  currentproducts = [...temProducts];

  currentproducts = SortProducts(property, currentproducts);

  currentproducts = PaginationCalc(
    currentproducts,
    productsPerPage,
    activePage,
    setCurrentPage
  ).currentproducts;

  let taxanomyFilters = { categories: [] };
  taxanomyFilters["categories"] = urlData;
  useEffect(() => {
    setTimeout(() => {
      setAllFilters(taxanomyFilters);
    }, 0);
  }, [uData]);

  // END DISPLAY META DATA

  let currentProducts = [];
  currentProducts = currentproducts;
  if (!currentProducts || currentProducts.length < 1) {
    currentProducts = [];
  } else {
  }

  // SET SEO TAGS
  let title = "";
  let desc = "";
  let keywords = "";
  try {
    title = urlTaxonomy.TITLE;
  } catch (err) {}

  try {
    desc = urlTaxonomy.seo_cat_text;
  } catch (err) {}

  try {
    keywords = urlTaxonomy.KEYWORDS;
  } catch (err) {}

  if (!title || title == "") {
    title = slug.replace(/-/g, " ");
  }

  if (!desc || desc == "") {
    desc = "find all about " + slug.replace(/-/g, " ");
  }

  if (!keywords || keywords == "") {
    keywords = slug.replace(/-/g, " ");
  }

  // START DISPLAY CATEGORY PAGE LAYOUT

  let cartValue = [];
  if (typeof window != "undefined") {
    cartValue = JSON.parse(localStorage.getItem("cart"));
  }

  if (loading) {
    return (
      <>
        <Head>
          <title>{title}</title>
          <meta name="title" content={title} />
          <meta name="description" content={desc} />
          <meta name="keywords" content={keywords} />
          <meta name="robots" content="index, follow" />
        </Head>

        <div style={{ height: "400px" }}>
          <div className="d-none">
            <h1>{title}</h1>
            <h2>Shop {title}</h2>
            <h3>Please wait data is being loaed in a moment</h3>
            <p>
              Find a wide variety of guns online from innovative and reliable
              brands designed with accuracy in mind. Choose from Centerfire
              Rifles and Rimfire Rifles for target shooting and hunting from a
              tree stand. For open and concealed carry, shop Centerfire Pistols
              and Rimfire Pistols. When you are ready to shoot clay pigeons and
              targets, choose from our selection of Shotguns.
            </p>
          </div>
          <div style={{ height: "200px" }}>
            <div className={`overlay `}>
              <div className="loading " style={{ top: "25%", left: "40%" }}>
                <img src="/images/loader.gif" alt="loader" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={desc} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index, follow" />
      </Head>
      <Header taxonomy={taxanomy} cartData={cartValue} />;
      <Layout
        products={products}
        allTaxonomy={taxanomy}
        allFilters={allFilters}
        setAllFilters={setAllFilters}
        currentProducts={temProducts}
        crntProducts={currentproducts}
        urlData={urlData}
        urlTaxonomy={urlTaxonomy}
        activePage={activePage}
        productsPerPage={productsPerPage}
        setCurrentPage={setCurrentPage}
        property={property}
        setProperty={setProperty}
        listGridViews={listGridViews}
        setListGridViews={setListGridViews}
        setPerpageProductscount={setPerpageProductscount}
        checkAvailability={checkAvailability}
        setCheckAvailability={setCheckAvailability}
        searchText={searchText}
        setSearchText={setSearchText}
        sortNewestStatus={sortNewestStatus}
        sortBrandStatus={sortBrandStatus}
        entryTime={entryTime}
        categoryMode={categoryMode}
        landingCategories={landingCategories}
      />
      <Footer />
    </>
  );
  // END DISPLAY CATEGORY PAGE LAYOUT
};

// START SERVER SIDE RENDERING FOR DATA FETCH
export async function getServerSideProps({ query, res }) {
  try {
    res.setHeader(
      "Cache-Control",
      "public, s-maxage=43200, stale-while-revalidate=60"
    );
  } catch (err) {}

  const { slug } = query;

  let { URL } = process.env;

  let data = {
    taxanomy: [],
    products: [],
    landingCategories: [],

    settingsData: {},
    categoryMode: "category",
  };
  let taxanomy = [];
  let products = [];
  let landingCategories = [];

  let settings = {};

  // Fetch taxanomy from external API
  let resp = {};

  // Fetch data from external API

  try {
    resp = await fetch(URL + "/api/taxonomy/taxonomy");
    data.taxanomy = await resp.json();
  } catch (err) {
    data.taxanomy = [];
  }

  try {
    resp = await fetch(URL + `/api/category/${slug}`);
    products = await resp.json();
    data.products = products;
    data.categoryMode = "category";
  } catch (err) {
    data.categoryMode = "landing";
    data.products = [];
  }

  try {
    resp = await fetch(URL + `/api/settings/settings`);
    settings = await resp.json();
    data.settingsData = settings;
  } catch (err) {
    data.settingsData = {};
  }

  if (data.categoryMode == "landing") {
    try {
      resp = await fetch(URL + `/api/landing/categories`);
      landingCategories = await resp.json();
      data.landingCategories = landingCategories;
    } catch (err) {
      data.landingCategories = [];
    }
  }
  // Pass data to the page via props
  return { props: { data } };
}
// END SERVER SIDE RENDERING FOR DATA FETCH

export default Category;
