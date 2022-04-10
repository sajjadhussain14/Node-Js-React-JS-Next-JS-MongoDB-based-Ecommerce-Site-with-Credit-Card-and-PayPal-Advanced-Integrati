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
  } else {
    pageSeoText = seoTxt;
  }

  return (
    <div className="row">
      <div className="col-12">
        {pageSeoHTML && pageSeoHTML != "" ? (
          <div dangerouslySetInnerHTML={{ __html: pageSeoHTML }} />
        ) : (
          <p>{pageSeoText}</p>
        )}
      </div>
    </div>
  );
};

export default seoText;
