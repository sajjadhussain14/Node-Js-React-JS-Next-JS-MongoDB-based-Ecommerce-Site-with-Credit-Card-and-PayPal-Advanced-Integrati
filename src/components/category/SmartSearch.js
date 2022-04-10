import React from "react";
import { RefineSearch, ReSearch } from "../../controllers/category";

const SmartSearch = (props) => {
  let searchTXT = "";
  if (props.isSearch && props.isSearch == "yes") {
    searchTXT = props.slug;
  }
  let branURL = "";
  return (
    <section id="cat-search-container" className="row">
      <div className="col-12">
        <input
          type="text"
          className="w-100 border-1 mb-4 py-2 pl-2"
          placeholder="Search Here"
          name="searchProds"
          id="searchProds"
          defaultValue={searchTXT}
          onChange={(e) => {
            RefineSearch(e, props.setSearchText);
          }}
          onLoad={ReSearch(props.setSearchText, searchTXT)}
        />
      </div>
    </section>
  );
};

export default SmartSearch;
