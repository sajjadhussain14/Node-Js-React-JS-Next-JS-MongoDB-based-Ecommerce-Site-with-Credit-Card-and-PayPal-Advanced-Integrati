import React from "react";
import Image from "next/image";

const CategoryBanner = (props) => {
  let bannerPath = "";
  let cmsPath = "/ccms/default/assets/Image/";
  let imageExists = false;

  let currentDEPT = "";
  try {
    currentDEPT = props.urlTaxonomy.DEPT;
  } catch (err) {}

  if (currentDEPT && currentDEPT != "") {
    bannerPath =
      "https://template1.cumulusbetasites.com/ccms/default/assets/Image/" +
      currentDEPT +
      ".jpg";

    try {
      var xhr = new XMLHttpRequest();
      xhr.open("HEAD", bannerPath, false);
      xhr.send();

      if (xhr.status == "404") {
        imageExists = false;
      } else {
        imageExists = true;
      }
    } catch (err) {
      imageExists = false;
    }
  } else {
    imageExists = false;
  }

  return (
    <>
      {imageExists ? (
        <section id="banner-image-container" className="col-12 mb-3">
          <img
            src={bannerPath}
            title={currentDEPT + " PRODUCTS"}
            alt={currentDEPT + " PRODUCTS"}
          />
        </section>
      ) : (
        ""
      )}
    </>
  );
};

export default CategoryBanner;
