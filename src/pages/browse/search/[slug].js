import React, { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/router";

import Head from "next/head";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setAllProducts } from "../../../redux/productSlice";
import { setCategoryMode } from "../../../redux/categoryModeSlice";

import { setCrntProducts } from "../../../redux/currentProductsSlice";
import { setAllFilters } from "../../../redux/allFiltersSlice";
import { setAllTaxonomy } from "../../../redux/taxonomySlice";
import { setLandingCategories } from "../../../redux/landingCategoriesSlice";

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
    localStorage.setItem("shop", `/browse/search/${slug}`);
  }, [slug]);

  const dispatch = useDispatch();

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

  const allProducts = useSelector((state) => state.products);
  const alltaxonomy = useSelector((state) => state.taxonomy);
  const allFilters = useSelector((state) => state.allFilters);

  const [cProducts, setCProducts] = useState([]);

  //HOOK FOR PERPAGE PRODUCTS
  const [perpageProductscount, setPerpageProductscount] = useState(18);
  //HOOK FOR ACTIVE PAGE
  const [activePage, setCurrentPage] = useState(1);
  //PRODUCTS PER PAGE

  let productsPerPage = perpageProductscount;

  let urlTaxonomy = useMemo(() => {}, []);

  let urlData = [];
  let { products, settingsData, categoryMode, landingCategories } = props.data;
  let taxanomy = props.taxonomy;

  categoryMode = "category";

  let temProducts = [];
  let entryTime = "Y";
  let isSearch = "yes";
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

  useEffect(() => {
    try {
      setTimeout(() => {
        dispatch(setCategoryMode(categoryMode));
      }, 0);
    } catch (err) {}
  }, [urlTaxonomy]);

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
    try {
      setTimeout(() => {
        dispatch(setAllProducts(products));
        dispatch(setAllTaxonomy(taxanomy));

        setLoading(false);
      }, 0);
    } catch (err) {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    dispatch(setLandingCategories(landingCategories));
  }, [props.data.categoryMode]);

  let currentproducts = [];

  currentproducts = [...temProducts];

  currentproducts = SortProducts(property, currentproducts);

  currentproducts = PaginationCalc(
    currentproducts,
    productsPerPage,
    activePage,
    setCurrentPage
  ).currentproducts;

  useEffect(() => {
    dispatch(setCrntProducts(currentproducts));
  }, [currentproducts]);

  let taxanomyFilters = { categories: [] };
  taxanomyFilters["categories"] = urlData;

  useEffect(() => {
    setTimeout(() => {
      dispatch(setAllFilters(taxanomyFilters));
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
      <Layout
        products={products}
        currentProducts={temProducts}
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
        isSearch={isSearch}
        slug={slug}
      />
    </>
  );
  // END DISPLAY CATEGORY PAGE LAYOUT
};

// START SERVER SIDE RENDERING FOR DATA FETCH
export async function getServerSideProps(context) {
  const { slug } = context.query;

  let { URL } = process.env;

  let data = {
    products: [],
    landingCategories: [],

    settingsData: {},
    categoryMode: "category",
  };
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
