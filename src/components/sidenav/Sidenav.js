import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  AddCategories,
  AddThisFilter,
  CheckAvailable,
  RemoveCategories,
  RemoveFilter,
  ShopByAttributes,
  ShopByCategories,
} from "../../controllers/sideNav";
import SelectedFilters from "./SelectedFilters";
import ShopByAvailability from "./ShopByAvailability";
import ShopByCategory from "./ShopByCategory";
import ShopByDynamicAttribute from "./ShopByDynamicAttribute";

const Sidenav = (props) => {
  const allProducts = props.allProducts;
  const alltaxonomy = props.allTaxonomy;
  const filters = props.allFilters;

  const categoryModeValue = props.categoryMode;

  let attributes = [];
  let attributesCount = [];
  const [atrs, setAtrs] = useState([]);
  let CategoriesData = {};

  let taxonomy = "";
  let categories = [];
  let urls = [];
  CategoriesData = ShopByCategories(
    props.urlTaxonomy,
    props.allCurrentProducts,
    alltaxonomy,
    props.categoryMode
  );
  taxonomy = CategoriesData.taxonomy;
  categories = CategoriesData.categories;
  urls = CategoriesData.URL;

  useEffect(async () => {
    attributes = await ShopByAttributes(allProducts);
    setAtrs(attributes);
  }, [props.products]);
  attributes = atrs;
  return (
    <section
      id="SideNav"
      className="col-lg-2 col-md-4 col-12 filters pt-5-lg pt-3-md pt-1-sm pt-2"
    >
      <div
        className="accordion accordion-flush pt-5-lg pt-3-md pt-1-sm pt-2"
        id="accordionFlush"
      >
        <button
          id="filterby"
          className="mb-3 w-100"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapse"
          aria-expanded="false"
          aria-controls="flush-collapse"
        >
          Filter By
        </button>
        <div
          id="flush-collapse"
          className=" collapse border-white border"
          aria-labelledby="flush-heading"
          data-bs-parent="#accordionFlush"
        >
          {categoryModeValue == "category" ? (
            <SelectedFilters
              filters={filters}
              setAllFilters={props.setAllFilters}
            />
          ) : (
            ""
          )}

          {categoryModeValue == "category" ? (
            <ShopByAvailability
              setCheckAvailability={props.setCheckAvailability}
              checkAvailability={props.checkAvailability}
            />
          ) : (
            ""
          )}

          {/**************** START SHOP BY CATEGORY ******************* */}

          {categories && categories.length > 0 ? (
            <ShopByCategory
              categories={categories}
              filters={filters}
              setAllFilters={props.setAllFilters}
              taxonomy={taxonomy}
              urls={urls}
              categoryMode={categoryModeValue}
            />
          ) : (
            ""
          )}
          {/**************** END SHOP BY CATEGORY ******************* */}

          {/****************START DYNAMIC FILTERS******************* */}
          <ShopByDynamicAttribute
            attributes={attributes}
            filters={filters}
            setAllFilters={props.setAllFilters}
            setSearchText={props.setSearchText}
          />

          {/****************END DYNAMIC FILTERS******************* */}
        </div>
      </div>
    </section>
  );
};

export default Sidenav;
