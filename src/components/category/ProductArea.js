import React from "react";
import { useSelector } from "react-redux";

import CategoryBanner from "./CategoryBanner";
import CategoryHeading from "./CategoryHeading";
import CurrentCount from "./CurrentCount";
import ListviewGridViewFilter from "./ListviewGridViewFilter";
import PaginationTop from "./PaginationTop";
import SeoText from "./SeoText";
import PaginationBottom from "./PaginationBottom";

import SmartSearch from "./SmartSearch";
import SortByProperty from "./SortByProperty";
import Thumbnail from "./Thumbnail";
import ViewByNumber from "./ViewByNumber";
import Landing from "./Landing";

const ProductArea = (props) => {
  const categoryModeValue = props.categoryMode;

  try {
    if (
      categoryModeValue == "landing" &&
      props.urlTaxonomy.TYP &&
      props.urlTaxonomy.TYP == "EMPTY"
    ) {
      return (
        <Landing
          urlTaxonomy={props.urlTaxonomy}
          landingCategories={props.landingCategories}
        />
      );
    }

    return (
      <section id="CategoryProducts" className="col-lg-10 col-md-8 col-12">
        {props.categoryMode != "category" ? (
          <div className="row">
            <CategoryBanner urlTaxonomy={props.urlTaxonomy} />
          </div>
        ) : (
          ""
        )}

        <div className="row">
          <CategoryHeading urlTaxonomy={props.urlTaxonomy} />
          <PaginationTop
            currentProducts={props.currentProducts}
            activePage={props.activePage}
            productsPerPage={props.productsPerPage}
            setCurrentPage={props.setCurrentPage}
            allProducts={props.allProducts}
            crntProducts={props.crntProducts}
          />
        </div>
        <div id="catproductinner" className="row catproductinner">
          <div className="col-lg-6 col-md-12 col-12 categoryselect">
            <div className="row">
              <SortByProperty
                property={props.property}
                setProperty={props.setProperty}
                sortNewestStatus={props.sortNewestStatus}
                sortBrandStatus={props.sortBrandStatus}
                entryTime={props.entryTime}
              />
              <ViewByNumber
                setPerpageProductscount={props.setPerpageProductscount}
                allProducts={props.allProducts}
              />
            </div>
          </div>
          <CurrentCount
            currentProducts={props.currentProducts}
            crntProducts={props.crntProducts}
          />
          <ListviewGridViewFilter
            listGridViews={props.listGridViews}
            setListGridViews={props.setListGridViews}
          />
        </div>
        <SmartSearch
          setSearchText={props.setSearchText}
          isSearch={props.isSearch}
          slug={props.slug}
        />

        {props.currentProducts && props.currentProducts.length > 0 ? (
          <Thumbnail
            listGridViews={props.listGridViews}
            crntProducts={props.crntProducts}
          />
        ) : (
          <section id="catproducts" className="row ">
            <p>No Products Avaialable</p>
          </section>
        )}
        <PaginationBottom
          currentProducts={props.currentProducts}
          activePage={props.activePage}
          productsPerPage={props.productsPerPage}
          setCurrentPage={props.setCurrentPage}
          allProducts={props.allProducts}
          crntProducts={props.crntProducts}
        />
        <SeoText urlTaxonomy={props.urlTaxonomy} />
        <br className="clear" />
      </section>
    );
  } catch (err) {
    return "";
  }
};

export default ProductArea;
