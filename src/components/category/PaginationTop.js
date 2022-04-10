import React from "react";
import Pagination from "react-js-pagination";
import { useSelector } from "react-redux";
import { handlePageChange } from "../../controllers/category";

const PaginationTop = (props) => {
  const allProducts = useSelector((state) => state.products);
  const currentProducts = useSelector((state) => state.crntProducts);
  return (
    <section
      id="Pagination"
      className="col-6 py-0 d-flex mx-auto justify-content-between"
    >
      <nav aria-label="pagination">
        <Pagination
          activePage={props.activePage}
          itemsCountPerPage={props.productsPerPage}
          totalItemsCount={props.currentProducts.length}
          pageRangeDisplayed={4}
          onChange={(e) => {
            handlePageChange(props.setCurrentPage, e);
          }}
        />
      </nav>
    </section>
  );
};

export default PaginationTop;
