import React from "react";
import { useSelector } from "react-redux";

const CurrentCount = (props) => {
  const allProducts = useSelector((state) => state.products);

  const currentProducts = useSelector((state) => state.crntProducts);

  return (
    <section className="col-lg-3 col-md-6 col-12 totalproduct">
      <span className="text-capitalize catgrey">
        {currentProducts.length} of Total {props.currentProducts.length}{" "}
        products
      </span>
    </section>
  );
};

export default CurrentCount;
