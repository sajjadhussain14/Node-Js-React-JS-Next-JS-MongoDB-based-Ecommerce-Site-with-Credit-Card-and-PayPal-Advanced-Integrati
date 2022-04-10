import React from "react";
import CategoryBanner from "./CategoryBanner";
import CategoryHeading from "./CategoryHeading";
import LandingCategories from "./LandingCategories";

const Landing = (props) => {
  return (
    <section id="CategoryProducts" className="col-lg-10 col-md-8 col-12">
      <div className="row">
        <CategoryBanner urlTaxonomy={props.urlTaxonomy} />
      </div>
      <div className="row">
        <CategoryHeading urlTaxonomy={props.urlTaxonomy} />
      </div>
      <LandingCategories dept={props.urlTaxonomy.DEPT} />
    </section>
  );
};

export default Landing;
