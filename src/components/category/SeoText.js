import React from "react";

const seoText = (props) => {
  let seoTxt = "";

  try {
    seoTxt = props.urlTaxonomy.seo_cat_text;
  } catch (err) {}
  let pageSeoText = "";
  let pageSeoHTML = "";
  let isHtml = /<([A-Za-z][A-Za-z0-9]*)\b[^>]*>(.*?)<\/\1>/.test(seoTxt);

  if (isHtml) {
    pageSeoHTML = seoTxt;
    if (!pageSeoHTML || pageSeoHTML == "") {
      pageSeoHTML =
        "Find a wide variety of guns online from innovative and reliable brands designed with accuracy in mind. Choose from Centerfire Rifles and Rimfire Rifles for target shooting and hunting from a tree stand. For open and concealed carry, shop Centerfire Pistols and Rimfire Pistols. When you are ready to shoot clay pigeons and targets, choose from our selection of Shotguns.";
    }
  } else {
    pageSeoText = seoTxt;
    if (!pageSeoText || pageSeoText == "") {
      pageSeoText =
        "Find a wide variety of guns online from innovative and reliable brands designed with accuracy in mind. Choose from Centerfire Rifles and Rimfire Rifles for target shooting and hunting from a tree stand. For open and concealed carry, shop Centerfire Pistols and Rimfire Pistols. When you are ready to shoot clay pigeons and targets, choose from our selection of Shotguns.";
    }
  }

  return (
    <div className="row">
      <div className="col-12">
        {pageSeoHTML && pageSeoHTML != "" ? (
          <div dangerouslySetInnerHTML={{ __html: pageSeoHTML }} />
        ) : (
          <p className="mb-0">{pageSeoText}</p>
        )}
      </div>
    </div>
  );
};

export default seoText;
