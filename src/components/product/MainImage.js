import React from "react";
import Link from "next/link";

const MainImage = (props) => {
  let getProducts = props.getProducts;

  return (
    <Link href={getProducts.image}>
      <a
        id="zoomer"
        className="MagicZoomPlus"
        data-options="rightClick: true; expand: false;"
      >
        <img
          className="prodImage"
          src={getProducts.image}
          style={{ maxWidth: "500px", maxHeight: "1024px" }}
        />
      </a>
    </Link>
  );
};

export default MainImage;
