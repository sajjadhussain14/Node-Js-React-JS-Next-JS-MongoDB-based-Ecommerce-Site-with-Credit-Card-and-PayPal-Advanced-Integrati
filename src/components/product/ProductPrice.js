import React from "react";

const ProductPrice = (props) => {
  let getProducts = props.getProducts;

  return (
    <div className="prod-pricing-container d-none">
      <div id="pricing" className="float-right">
        {getProducts.price > 0 ? (
          <>
            <span id="price">${getProducts.price}</span>
          </>
        ) : (
          <span id="price"></span>
        )}
      </div>
      <span
        className="credova-button"
        data-amount="#val(Product.Price)#"
        data-type="popup"
      ></span>
    </div>
  );
};

export default ProductPrice;
