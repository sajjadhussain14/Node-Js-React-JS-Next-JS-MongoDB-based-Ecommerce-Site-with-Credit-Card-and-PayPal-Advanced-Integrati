import React from "react";

const BreadCrumbs = (props) => {
  return (
    <section id="BreadCrumbs" className="col-12 pt-3 d-none">
      <nav aria-label="breadcrumb" className="bg-transparent p-0">
        <ol className="breadcrumb bg-transparent p-0">
          {props.breadCrumsContent.map((item) => {
            return item;
          })}
        </ol>
      </nav>
    </section>
  );
};

export default BreadCrumbs;
