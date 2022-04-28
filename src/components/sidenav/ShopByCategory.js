import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";

import { AddCategories } from "../../controllers/sideNav";

const ShopByCategory = (props) => {
  let { URL } = process.env;

  const categoryModeValue = props.categoryMode;

  return (
    <div id="CategoryFilter" className="accordion-item border-bottom border-1">
      <h2 className="accordion-header" id="flush-headingOne">
        <button
          className="accordion-button collapsed text-uppercase fw-bold border-0 px-0 outline-none bg-transparent"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExampleCategory"
          aria-expanded="false"
          aria-controls="collapseExampleCategory"
        >
          {categoryModeValue == "landing" && props.taxonomy == "Dept"
            ? "Department"
            : "Category"}
        </button>
      </h2>
      <div className="collapse border-0" id="collapseExampleCategory">
        <div className="accordion-body px-1 pt-0">
          {props.categories
            ? props.categories.map((category, index) => {
                let status = false;
                let CurrentCategoryUrl = "";
                CurrentCategoryUrl = props.urls[index];

                return (
                  <Link
                    href={URL + "/category/" + CurrentCategoryUrl}
                    key={"category" + category + index}
                  >
                    <a
                      data-url={CurrentCategoryUrl}
                      className="text-decoration-none active text-capitalize d-block mb-2"
                      onClick={(e) => {
                        AddCategories(
                          props.filters,
                          props.taxonomy,
                          category,
                          CurrentCategoryUrl,
                          props.dispatch,
                          props.setAllFilters
                        );
                      }}
                    >
                      {category}
                    </a>
                  </Link>
                );
              })
            : ""}
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
