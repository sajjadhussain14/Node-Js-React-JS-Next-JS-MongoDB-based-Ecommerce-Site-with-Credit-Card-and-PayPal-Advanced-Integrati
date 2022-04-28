import React from "react";
import Link from "next/link";
import Image from "next/image";

const MainImage = (props) => {
  let getProducts = props.getProducts;

  return (
    <Link href={getProducts.image}>
      <a
        id="zoomer"
        className="MagicZoomPlus"
        data-options="rightClick: true; expand: false;"
      >
        <Image
          className="prodImage"
          src={getProducts.image}
          width={627}
          height={477}
          loading="lazy"
          name={getProducts.name}
          alt={getProducts.name}
        />
      </a>
    </Link>
  );
};

export default MainImage;
