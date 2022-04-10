import React from "react";
import { SortHandleChange } from "../../controllers/category";

const SortByProperty = (props) => {
  return (
    <section name="productsSort" title="Products Sort" className="col-md mb-2">
      <span>Sort:</span>
      <select
        className="form-select two"
        id="sort"
        aria-label="select"
        value={props.property}
        onChange={(e) => {
          SortHandleChange(e, props.setProperty);
        }}
      >
        <option value="default">Default</option>
        <option value="name(a-z)">Name(A-Z)</option>
        <option value="name(z-a)">Name(Z-A)</option>
        <option value="price-high-to-low">Price(High-Low)</option>
        <option value="price-low-to-high">Price(Low-High)</option>
        {props.sortNewestStatus && props.sortNewestStatus == "yes" ? (
          props.entryTime && props.entryTime == "N" ? (
            ""
          ) : (
            <option value="newest">Newest</option>
          )
        ) : (
          ""
        )}

        {props.sortBrandStatus && props.sortBrandStatus == "yes" ? (
          <option value="brands">Brands</option>
        ) : (
          ""
        )}
      </select>
    </section>
  );
};

export default SortByProperty;
