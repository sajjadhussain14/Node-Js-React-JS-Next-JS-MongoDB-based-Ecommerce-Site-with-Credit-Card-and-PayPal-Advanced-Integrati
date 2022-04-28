import React, { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../../../components/header/Header";
import Layout from "../../../components/category/Layout";
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
} from "../../../controllers/category";
import Footer from "../../../components/footer/Footer";

const Category = (props) => {
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    localStorage.setItem("shop", `/browse/collection/${slug}`);
  }, [slug]);

  let taxanomy = props.taxonomy;
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

  const [cProducts, setCProducts] = useState([]);
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
  categoryMode = "category";

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
  let taxo = {
    key: "FAKE_DEPT",
    taxonomy: "DEPT",
    value: slug,
    url: slug,
  };
  urlData.push(taxo);

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
    dataBy = "search"; // not this for search and brand
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
  fproducts = liveProdsRGXSearch(searchText, products);

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
  if (loading) {
    return (
      <div style={{ height: "400px" }}>
        <div className={`overlay `}>
          <div className="loading ">
            Loading....
            <div className="spinner-grow text-danger" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-warning" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-info" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    );
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

  // START DISPLAY CATEGORY PAGE LAYOUT

  let cartValue = [];
  if (typeof window != "undefined") {
    cartValue = JSON.parse(localStorage.getItem("cart"));
  }

  if (!title || title == "") {
    title = slug.replace(/-/g, " ");
  }

  if (!desc || desc == "") {
    desc = "find all about " + slug.replace(/-/g, " ");
  }

  if (!keywords || keywords == "") {
    keywords = slug.replace(/-/g, " ");
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
      ;
      <div className={`overlay ${loading == true ? "" : " d-none"}`}>
        <div className="loading">
          <div className="spinner-grow text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-info" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
      <Header taxonomy={props.taxonomy} cartData={cartValue} />
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
export async function getServerSideProps(context) {
  const { slug } = context.query;

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
  let res = {};

  // Fetch data from external API
  try {
    res = await fetch(URL + `/api/search/${slug}`);
    products = await res.json();
    data.products = products;
    data.categoryMode = "category";
  } catch (err) {
    data.products = [];
  }
  data.categoryMode = "category";

  try {
    res = await fetch(URL + `/api/settings/settings`);
    settings = await res.json();
    data.settingsData = settings;
  } catch (err) {
    data.settingsData = {};
  }

  // Pass data to the page via props
  return { props: { data } };
}
// END SERVER SIDE RENDERING FOR DATA FETCH

export default Category;
