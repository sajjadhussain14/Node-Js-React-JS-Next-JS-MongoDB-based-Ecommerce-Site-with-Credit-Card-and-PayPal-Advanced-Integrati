import React from "react";
import Image from "next/image";

const MiniBanner3 = () => {
  let { URL } = process.env;
  return (
    <section className="col-lg-4 col-md-4 col-sm-12 col-12 half hover-effect hover-effect-10">
      <Image
        width={419}
        height={282}
        layout="responsive"
        className="img-fluid"
        alt="Minni banner 2"
        src={URL + "/images/mini-banner/mini-banner2.png"}
        loading="lazy"
      />

      <section className="overlay">
        <h5>placeholder header</h5>
        <span>Ammunition</span>{" "}
        <a href="http://template1icumulus-com.ntc5-p2stl.ezhostingserver.com/products/ammunition-centerfire-pistol">
          shop now
        </a>
      </section>
    </section>
  );
};

export default MiniBanner3;
