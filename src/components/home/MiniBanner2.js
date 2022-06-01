import React from "react";
import Image from "next/image";

const MiniBanner2 = () => {
  let { URL } = process.env;
  return (
    <section className="col-lg-4 col-md-4 col-sm-12 col-12 half hover-effect hover-effect-10">
      <Image
        width={419}
        height={282}
        layout="responsive"
        src={URL + "/images/mini-banner/mini-banner2.png"}
        loading="lazy"
        alt="Mini Banner 2"
        title="Mini Banner 2"
      />

      <section className="overlay">
        <h5>placeholder header</h5>
        <span>Lorem ipsum dolor sit amet</span>{" "}
        <a href="#">shop now</a>
      </section>
    </section>
  );
};

export default MiniBanner2;
