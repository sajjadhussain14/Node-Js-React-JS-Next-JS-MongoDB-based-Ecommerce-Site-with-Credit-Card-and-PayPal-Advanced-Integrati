import React from "react";
import { useRouter } from "next/router";

const CategoryHeading = (props) => {
  const router = useRouter();

  let categoryTitle = "";
  try {
    if (
      props.urlTaxonomy.seo_cat_title &&
      props.urlTaxonomy.seo_cat_title != ""
    ) {
      categoryTitle = props.urlTaxonomy.seo_cat_title;
    } else {
      categoryTitle = props.urlTaxonomy.URL;
      categoryTitle = categoryTitle.replace(/[^a-zA-Z0-9]/g, " ");
    }
  } catch (err) {
    try {
      const { slug } = router.query;

      categoryTitle = slug;
      categoryTitle = categoryTitle.replace(/[^a-zA-Z0-9]/g, " ");
    } catch (error) {}
  }
  return (
    <section className="col-6 catheading pb-2">
      <h1 className=" border-bottom border-2 pb-1 w-100">{categoryTitle}</h1>
    </section>
  );
};

export default CategoryHeading;
