import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const GetProducts = (
  filters,
  products,

  property,
  url,
  taxonomy,
  category,
  databy
) => {
  let getProducts = [];
  let allProducts = products;

  if (url == "all-products") {
    filters["all-products"] = "all-products";
  }
  getProducts = allProducts;

  if (taxonomy == "SUBTYP_3") {
    getProducts = allProducts.filter(
      (prod) =>
        prod.SUBTYP_3.toUpperCase() == category.toUpperCase() &&
        //   &&    prod.SUBTYP_3 == "EMPTY"
        prod.SUBTYP_3 != "EMPTY"
    );
  } else if (taxonomy == "SUBTYP_2") {
    getProducts = allProducts.filter(
      (prod) =>
        prod.SUBTYP_2.toUpperCase() == category.toUpperCase() &&
        //   &&    prod.SUBTYP_3 == "EMPTY"
        prod.SUBTYP_2 != "EMPTY"
    );
  } else if (taxonomy == "SUBTYP_1") {
    getProducts = allProducts.filter(
      (prod) =>
        prod.SUBTYP_1.toUpperCase() == category.toUpperCase() &&
        //  prod.SUBTYP_2 == "EMPTY" &&
        prod.SUBTYP_1 != "EMPTY"
    );
  } else if (taxonomy == "TYP") {
    getProducts = allProducts.filter(
      (prod) =>
        prod.Typ.toUpperCase() == category.toUpperCase() &&
        //  prod.SUBTYP_1 == "EMPTY" &&
        prod.Typ != "EMPTY"
    );
  } else if (taxonomy == "DEPT") {
    if (databy == "search") {
    } else {
      if (allProducts && allProducts.length > 0) {
        getProducts = allProducts.filter(
          (prod) => prod.Dept.toUpperCase() == category.toUpperCase()
          //    &&          prod.Typ == "EMPTY"
        );
      }
    }
  } else if (url == "all-products") {
    getProducts = [];
    getProducts = allProducts;
  } else {
    getProducts = [];
  }

  if (Object.entries(filters) && Object.entries(filters).length > 0) {
    //Load products by seleted color filters
    for (let prop in filters) {
      getProducts = productsByDynamicFilters(filters, getProducts, prop);
    }

    //Load products by seleted price Ranges filters
  } else {
  }

  if (property == "default") {
  } else {
    getProducts = SortProducts(property, getProducts);
  }
  let p1 = [];
  let p2 = [];
  let p3 = [];
  let p4 = [];

  let finalP = [];
  getProducts.map((sortedProd) => {
    if (sortedProd.available.toUpperCase() == "IN STOCK") {
      p1.push(sortedProd);
    } else if (sortedProd.available.toUpperCase() == "IN STOCK VENDOR") {
      p2.push(sortedProd);
    } else if (sortedProd.available.toUpperCase() == "OUT OF STOCK") {
      p3.push(sortedProd);
    } else {
      p4.push(sortedProd);
    }
  });
  if (!p1) p1 = [];
  if (!p2) p2 = [];
  if (!p3) p3 = [];
  if (!p4) p4 = [];

  finalP = [...p1, ...p2, ...p3, ...p4];

  return finalP;
};
// END FILTER PRODUCTS AGAINST TAXONOMY AND FILTERS

export const productsByDynamicFilters = (filters, getProducts, prop) => {
  let selectedProducts = [];
  let keyFound = false;

  if (getProducts) {
    getProducts.map((prods) => {
      if (prods.attributes) {
        prods.attributes.map((attr) => {
          if (prop == attr.name) {
            keyFound = true;

            if (Object.entries(filters[prop]).length > 1) {
              filters[prop].map((filterProp) => {
                try {
                  attr.value.map((val) => {
                    if (val.toUpperCase() == filterProp.toUpperCase()) {
                      if (selectedProducts.includes(prods)) {
                      } else {
                        selectedProducts.push(prods);
                      }
                    } else {
                    }
                  });
                } catch (err) {}
              });
            } else {
              try {
                attr.value.map((val) => {
                  if (val == filters[prop]) {
                    if (selectedProducts.includes(prods)) {
                    } else {
                      selectedProducts.push(prods);
                    }
                  } else {
                  }
                });
              } catch (err) {
                let filterPropsValue = "";
                let attrVal = "";
                attrVal = attr.value;

                try {
                  filterPropsValue = filters[prop][0];
                } catch (error) {
                  filterPropsValue = filters[prop];
                }

                try {
                  filterPropsValue = filterPropsValue.toUpperCase();
                } catch (err) {}
                try {
                  attrVal = attrVal.toUpperCase();
                } catch (err) {}

                if (attrVal == filterPropsValue) {
                  if (selectedProducts.includes(prods)) {
                  } else {
                    selectedProducts.push(prods);
                  }
                } else {
                }
              }
            }
          } else {
          }
        });
      }
    });
  } else {
    selectedProducts = [];
  }
  if (keyFound == false) {
    selectedProducts = getProducts;
  }

  return selectedProducts;
};

export const PaginationCalc = (
  products,
  productsPerPage,
  activePage,
  setCurrentPage
) => {
  let pagination = {};
  useEffect(() => {
    activePage = 1;
    setCurrentPage(1);
  }, [productsPerPage]);

  // Logic for displaying current products
  const indexOfLastProduct = activePage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentproducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  useEffect(() => {
    if (products.length <= productsPerPage) {
      activePage = 1;
      setCurrentPage(1);
    }
  }, [products.length]);

  pagination.currentproducts = currentproducts;
  return pagination;
};

// PAGINATION PAGE HANDLE
export const handlePageChange = (setCurrentPage, e) => {
  setCurrentPage(e);
};

export const GetUrlTaxonomy = (allTaxonomy, url) => {
  let taxonomy = {};
  try {
    taxonomy = allTaxonomy.find(function (taxono, index) {
      if (taxono.URL == url) {
        return taxono;
      }
    });
  } catch (err) {
    taxonomy = {};
  }
  return taxonomy;
};

export const GetUrlData = async (filters, allTaxonomy) => {
  let urlData = [];

  try {
    if (
      filters.DEPT &&
      filters.DEPT.toUpperCase() != "EMPTY" &&
      filters.DEPT.toUpperCase() != ""
    ) {
      let taxonomyUrl = "";
      GetTaxonomyURL("DEPT", filters.DEPT, allTaxonomy).then((url) => {
        let taxonomy = {
          key: "DEPT",
          taxonomy: "DEPT",
          value: filters.DEPT,
          url: url,
        };
        urlData.push(taxonomy);
      });
    }
    if (
      filters.TYP &&
      filters.TYP.toUpperCase() != "EMPTY" &&
      filters.TYP.toUpperCase() != ""
    ) {
      let taxonomyUrl = await GetTaxonomyURL("TYP", filters.TYP, allTaxonomy);
      let taxonomy = {
        key: "TYP",
        taxonomy: "TYP",
        value: filters.TYP,
        url: taxonomyUrl,
      };
      urlData.push(taxonomy);
    }
    if (
      filters.SUBTYP_1 &&
      filters.SUBTYP_1.toUpperCase() != "EMPTY" &&
      filters.SUBTYP_1.toUpperCase() != ""
    ) {
      let taxonomyUrl = await GetTaxonomyURL(
        "SUBTYP_1",
        filters.SUBTYP_1,
        allTaxonomy
      );
      let taxonomy = {
        key: "SUBTYP_1",
        taxonomy: "SUBTYP_1",
        value: filters.SUBTYP_1,
        url: taxonomyUrl,
      };
      urlData.push(taxonomy);
    }
    if (
      filters.SUBTYP_2 &&
      filters.SUBTYP_2.toUpperCase() != "EMPTY" &&
      filters.SUBTYP_2.toUpperCase() != ""
    ) {
      let taxonomyUrl = await GetTaxonomyURL(
        "SUBTYP_2",
        filters.SUBTYP_2,
        allTaxonomy
      );
      let taxonomy = {
        key: "SUBTYP_2",
        taxonomy: "SUBTYP_2",
        value: filters.SUBTYP_2,
        url: taxonomyUrl,
      };
      urlData.push(taxonomy);
    }
    if (
      filters.SUBTYP_3 &&
      filters.SUBTYP_3.toUpperCase() != "EMPTY" &&
      filters.SUBTYP_3.toUpperCase() != ""
    ) {
      let taxonomyUrl = await GetTaxonomyURL(
        "SUBTYP_3",
        filters.SUBTYP_3,
        allTaxonomy
      );
      let taxonomy = {
        key: "SUBTYP_3",
        taxonomy: "SUBTYP_3",
        value: filters.SUBTYP_3,
        url: taxonomyUrl,
      };
      urlData.push(taxonomy);
    }
  } catch (err) {}
  return urlData;
};

const GetTaxonomyURL = async (k, v, alltaxonomy) => {
  let url = "";

  alltaxonomy.map((taxo) => {
    if (k == "DEPT") {
      if (taxo.DEPT != "EMPTY" && taxo.TYP == "EMPTY" && taxo[k] == v)
        url = taxo.URL;
    }

    if (k == "TYP") {
      if (taxo.TYP != "EMPTY" && taxo.SUBTYP_1 == "EMPTY" && taxo[k] == v)
        url = taxo.URL;
    }

    if (k == "SUBTYP_1") {
      if (taxo.SUBTYP_1 != "EMPTY" && taxo.SUBTYP_2 == "EMPTY" && taxo[k] == v)
        url = taxo.URL;
    }

    if (k == "SUBTYP_2") {
      if (taxo.SUBTYP_2 != "EMPTY" && taxo.SUBTYP_3 == "EMPTY" && taxo[k] == v)
        url = taxo.URL;
    }

    if (k == "SUBTYP_3") {
      if (taxo.SUBTYP_3 != "EMPTY" && taxo.SUBTYP_4 == "EMPTY" && taxo[k] == v)
        url = taxo.URL;
    }
  });
  return url;
};

// START PRODUCT SORT FUNCTIONALITY
export const SortProducts = (property, currentproducts) => {
  let tempProducts = [];
  let Sorting = { value: "default", order: "ASC" };

  if (property == "name(a-z)") {
    Sorting = { value: "name", order: "ASC" };
  } else if (property == "name(z-a)") {
    Sorting = { value: "name", order: "DESC" };
  } else if (property == "featuredASC") {
    Sorting = { value: "FEATURED", order: "ASC" };
  } else if (property == "price-high-to-low") {
    Sorting = { value: "price", order: "DESC" };
  } else if (property == "price-low-to-high") {
    Sorting = { value: "price", order: "ASC" };
  } else if (property == "newest") {
    Sorting = { value: "entry_date", order: "DESC" };
  } else if (property == "brands") {
    Sorting = { value: "brand", order: "ASC" };
  } else {
    Sorting = { value: "default", order: "ASC" };
  }
  let copyArray = [...currentproducts];
  tempProducts = copyArray.sort(SortProcess(Sorting));

  return tempProducts;
};
// END PRODUCT SORT FUNCTIONALITY
// START PRODUCT SORT PROCESSING
const SortProcess = (sorting) => {
  let property = "default";
  let order = "ASC";
  property = sorting.value;
  order = sorting.order;

  var sortOrder = 1;
  if (property[0] === "-") {
    sortOrder = -1;
    property = property.substr(1);
  }
  return function (a, b) {
    if (order == "ASC") {
      var result =
        a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
    } else {
      var result =
        a[property] > b[property] ? -1 : a[property] < b[property] ? 1 : 0;
    }
    return result * sortOrder;
  };
};
// END PRODUCT SORT PROCESSING

export const SortHandleChange = (e, setProperty) => {
  let sortValue = "";
  sortValue = e.target.value;
  setProperty(sortValue);
};

export const toggleListGridViews = (e, viewValue, setListGridViews) => {
  e.preventDefault();
  setListGridViews(viewValue);
};

//START SET PRODUCT COUNT
export const handleChangePerPage = (setPerpageProductscount, e) => {
  let value = e.target.value;
  setPerpageProductscount(value);
};
//END SET PRODUCT COUNT

export const CheckAvailable = (setCheckAvailability, value) => {
  setCheckAvailability(value);
};

export const setInitAvailable = (checkAvailable, setCheckAvailability) => {
  useEffect(async () => {
    try {
      setTimeout(() => {
        setCheckAvailability(checkAvailable);
      }, 0);
    } catch (err) {
      setCheckAvailability("all-items");
    }
  }, []);
};

export const avaialbilityFilter = (temProducts, checkAvailability) => {
  if (checkAvailability == "out-of-stock-items") {
    temProducts = temProducts.filter(
      (prods) => prods.available == "Out of Stock"
    );
  } else if (checkAvailability == "in-stock-items") {
    temProducts = temProducts.filter((prods) =>
      prods.available.startsWith("In Stock")
    );
  } else {
  }
  return temProducts;
};

export const LoadSettings = (
  settingsData,
  setSortBrandStatus,
  setSortNewestStatus,
  setCheckAvailability,
  setSortDefault,
  useEffect
) => {
  let brandSortingSettings = "no";
  let newestSortingSettings = "no";
  let checkAvaiableSettings = "all-products";
  let sortingDefaultSettings = "Default";

  try {
    brandSortingSettings = settingsData.brandSorting.option;
  } catch (err) {}

  try {
    newestSortingSettings = settingsData.newestSorting.option;
  } catch (err) {}

  try {
    checkAvaiableSettings = settingsData.availability.option;
  } catch (err) {}

  try {
    sortingDefaultSettings = settingsData.sortingDefault.option;
  } catch (err) {}

  useEffect(async () => {
    try {
      setSortBrandStatus(brandSortingSettings);
      setSortNewestStatus(newestSortingSettings);
      setCheckAvailability(checkAvaiableSettings);
      setSortDefault(sortingDefaultSettings);
    } catch (err) {}
  }, []);
};

export const liveProdsRGXSearch = (searchText, allProducts) => {
  let fproducts = [];

  if (searchText && searchText != "") {
    let wordsArray = [];
    try {
      wordsArray = searchText.split(" ");
    } catch (err) {}
    // do something to match a complete word
    for (var i = 0; i < wordsArray.length; i++) {
      if (i == wordsArray.length - 1) {
        wordsArray[i] = wordsArray[i];
      } else {
        wordsArray[i] = wordsArray[i] + " ";
      }
    }

    //Remove null elemets
    wordsArray = wordsArray.filter((item) => item !== "");

    // add Regex rules around words
    for (var i = 0; i < wordsArray.length; i++) {
      wordsArray[i] = "^(?=.*" + wordsArray[i] + ")";
    }

    // convert array to string
    let strElements = wordsArray.toString();
    // Remove , between elements
    strElements = strElements.replace(/,/g, "");

    // Regx constructor
    var regex = new RegExp("\\b^(?:" + strElements + ")\\b", "igm");

    // filter products according to Regex rules
    fproducts = allProducts.filter((product) =>
      regex.test(product.brand + " " + product.name + " ")
    );
  } else {
    fproducts = allProducts;
  }
  return fproducts;
};

export const RefineSearch = (e, setSearchText) => {
  e.preventDefault();
  let text = e.target.value;
  setSearchText(text);
};

export const ReSearch = (setSearchText, brandURL) => {
  //START CHECKING SEARCH OR BRAND SEARCH IS INVOLVED
};

export const routeNotFound = () => {
  return (
    <section id="contentHolder">
      <div id="category">
        <div className="container-fluid">
          <div className="row">
            <div class="alert alert-danger" role="alert">
              INVALID ROUTE! No Data Available for This Route
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ShopByLandingCategories = (dept) => {
  let categories = [];
  const alltaxonomy = useSelector((state) => state.taxonomy);

  alltaxonomy.map((category) => {
    if (
      category.DEPT == dept &&
      category.TYP != "" &&
      category.TYP != "EMPTY" &&
      category.SUBTYP_1 == "EMPTY"
    ) {
      categories.push(category);
    }
  });

  return categories;
};

export const getTypsWithThumbs = async (Dept) => {
  let typs = [];
  let data = [];

  try {
    const response = await axios("/data/typs-with-thumbs.json");
    data = response.data;

    data.map((elements) => {
      if (elements.Dept == Dept) {
        typs = elements.Typs;
      }
    });
  } catch (err) {}

  return typs;
};
