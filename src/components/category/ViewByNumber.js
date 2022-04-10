import React from "react";
import { handleChangePerPage } from "../../controllers/category";
import { useSelector } from "react-redux";

const ViewByNumber = (props) => {
  const allProducts = useSelector((state) => state.products);

  return (
    <section
      className="col-md mb-2"
      onChange={(e) => handleChangePerPage(props.setPerpageProductscount, e)}
    >
      <span>View:</span>
      <select className="form-select one" id="view" aria-label="select">
        <option value="12">12</option>
        <option value="36">36</option>
        <option value="72">72</option>
        <option value={allProducts.length}>All</option>
      </select>
    </section>
  );
};

export default ViewByNumber;
