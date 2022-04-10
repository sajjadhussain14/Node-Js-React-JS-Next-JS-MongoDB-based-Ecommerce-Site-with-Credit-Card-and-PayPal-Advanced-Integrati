import React, { useState, useEffect } from "react";
import Link from "next/link";
import { setAllFilters } from "../../redux/allFiltersSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
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
  const dispatch = useDispatch();

  const allProducts = props.products;
  const alltaxonomy = useSelector((state) => state.taxonomy);
  const filters = useSelector((state) => state.allFilters);

  const categoryModeValue = useSelector((state) => state.categoryMode);

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
    alltaxonomy
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
              dispatch={dispatch}
              setAllFilters={setAllFilters}
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
              dispatch={dispatch}
              setAllFilters={setAllFilters}
              taxonomy={taxonomy}
              urls={urls}
            />
          ) : (
            ""
          )}
          {/**************** END SHOP BY CATEGORY ******************* */}

          {/****************START DYNAMIC FILTERS******************* */}
          <ShopByDynamicAttribute
            attributes={attributes}
            filters={filters}
            dispatch={dispatch}
            setAllFilters={setAllFilters}
            setSearchText={props.setSearchText}
          />

          {/****************END DYNAMIC FILTERS******************* */}
        </div>
      </div>
    </section>
  );
};

export default Sidenav;
