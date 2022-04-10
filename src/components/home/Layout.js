import React from "react";
import BrandSlider from "./BrandSlider";
import CompanyIntroduction from "./CompanyIntroduction";
import IndexSlider from "./IndexSlider";
import MiniBanner1 from "./MiniBanner1";
import MiniBanner2 from "./MiniBanner2";
import MiniBanner3 from "./MiniBanner3";

const Layout = () => {
  return (
    <section id="index">
      <IndexSlider />
      <section id="threebanner">
        <div className="container">
          <div className="row">
            <MiniBanner1 />
            <MiniBanner2 />
            <MiniBanner3 />
          </div>
        </div>
      </section>
      <CompanyIntroduction />
      <br />
      <BrandSlider />
    </section>
  );
};

export default Layout;
