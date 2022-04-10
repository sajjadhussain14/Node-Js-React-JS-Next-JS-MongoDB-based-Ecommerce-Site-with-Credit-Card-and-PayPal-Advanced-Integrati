import React from "react";
const ProductInfo = (props) => {
  let getProducts = props.getProducts;

  return (
    <>
      {" "}
      <h1 className="name">{getProducts.name}</h1>
      <div className="prod-pricing-container">
        <div id="pricing" className="w-100">
          {getProducts.price > 0 ? (
          <>
            <span id="price">${getProducts.price}</span>
          </>
        ) : (
          <span id="price"></span>
        )}
        <strong>
        <i class="fas fa-circle-check"></i> In stock
        </strong>
        </div>
      </div>
      <p className="pratings">
        <img
          className="previewstar"
          src="https://template1.cumulusbetasites.com/images/reviews_star/star_full.png"
        />
        <img
          className="previewstar"
          src="https://template1.cumulusbetasites.com/images/reviews_star/star_full.png"
        />
        <img
          className="previewstar"
          src="https://template1.cumulusbetasites.com/images/reviews_star/star_full.png"
        />
        <img
          className="previewstar"
          src="https://template1.cumulusbetasites.com/images/reviews_star/star_full.png"
        />
        <img
          className="previewstar"
          src="https://template1.cumulusbetasites.com/images/reviews_star/star_empty.png"
        />
        <a href="#exTab1" className="preview-totalcount">
          2 Ratings
        </a>
      </p>
      <p id="pcode">
        <strong>product ID:</strong>
        <span>{getProducts.style}</span>
      </p>
      <p id="pcode">
        <strong>UPC:</strong>
        <span>{getProducts.upc}</span>
      </p>
      <p id="brandprod">
        <strong>Brand:</strong>
        <span>{getProducts.brand}</span>
      </p>
      <p id="avail">
        <strong>UPC:</strong>
        <span>
          In stock
        </span>
      </p>
    </>
  );
};

export default ProductInfo;
