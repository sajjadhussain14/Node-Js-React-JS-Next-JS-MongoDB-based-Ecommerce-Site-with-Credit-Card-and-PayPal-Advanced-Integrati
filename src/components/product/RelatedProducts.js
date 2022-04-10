import React from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Image from "next/image";
import Link from "next/link";
var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});


const RelatedProducts = (props) => {
  let { URL } = process.env;

  let products = [];

  if (props.products && props.products.length > 0) {
    products = props.products;
  }
  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: false,
    smartSpeed: 1000,
    navClass: ["owl-prev", "owl-next"],
    navText: [
      '<img src="/images/Arrow_left.png" />',
      '<img src="/images/Arrow_right.png" />',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  };
  return (
    <div className="row no-gutters">
      <div
        className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-3 pb-2 bg-white"
        id="related-prod-container"
      >
        <h3 className="text-center">
          <span className="heading float-left w-100">Your Shopping Bag</span>
        </h3>
        <ul id="owl-prod-featured" className="owl-carousel owl-loaded owl-drag">
          <OwlCarousel
            className="owl-theme"
            loop
            margin={4}
            nav={true}
            navText={[
              '<img src="/images/Arrow_left.png" />',
              '<img src="/images/Arrow_right.png" />',
            ]}
            dots={false}
            animateIn={true}
            {...options}
          >
            {products && products.length > 0
              ? products.map((product) => {
                  let termsaleprice = 0;
                  try {
                    termsaleprice = product.termsaleprice;
                  } catch (err) {}
                  if (
                    !termsaleprice ||
                    termsaleprice == null ||
                    termsaleprice == ""
                  ) {
                    termsaleprice = 0;
                  }
                  let prodRatings = 0;
                  prodRatings = product.rating;
                  if (!prodRatings) prodRatings = 0;
                  let starsNum = 5;
                  starsNum = product.stars_numbers;
                  if (!starsNum) starsNum = 5;
                  let totalReviews = 0;
                  totalReviews = product.total_num_reviews;
                  if (!totalReviews) totalReviews = 0;

                  return (
                    <div
                      id="related-prod"
                      className="item float-left w-100"
                      key={product.name}
                    >
                      <div className="productListing col-lg-5th col-md-4 col-sm-6 col-xs-12">
                        <Link href={URL + `${product.product_url}`}>
                          <a className="product float-left">
                            <span className="image text-center">
                              <Image
                                id={"img" + product.id}
                                src={product.image}
                                width={200}
                                height={200}
                                layout="intrinsic"
                                loading="lazy"
                                alt={product.name}
                              />
                            </span>
                            <h5 className="brand text-capitalize float-left">
                              {product.brand}
                            </h5>
                            <span className="name">{product.name}</span>
                            {product.price_range &&
                            product.price_range != "" ? (
                              <span className="pricing">
                                <strong className="itemPrice">
                                  Price: {product.price_range}
                                </strong>
                              </span>
                            ) : product.price > 0 && termsaleprice > 0 ? (
                              <span className="pricing">
                                <strong className="itemPrice text-decoration-line-through ">
                                  <del> Price: ${product.price.toFixed(2)}</del>
                                </strong>
                                <strong className="itemPrice text-danger font-weight-bold">
                                  Sale: ${product.termsaleprice.toFixed(2)}
                                </strong>
                              </span>
                            ) : product.price > 0 && termsaleprice == 0 ? (
                              <span className="pricing">
                                <strong className="itemPrice">
                                  Price: ${product.price.toFixed(2)}
                                </strong>
                              </span>
                            ) : (
                              ""
                            )}{" "}
                          </a>
                        </Link>
                      </div>
                    </div>
                  );
                })
              : ""}
          </OwlCarousel>
        </ul>
      </div>
    </div>
  );
};

export default RelatedProducts;
