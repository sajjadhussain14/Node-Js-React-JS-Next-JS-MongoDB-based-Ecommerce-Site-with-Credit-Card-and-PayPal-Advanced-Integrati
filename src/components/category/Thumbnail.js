import React from "react";
import { motion } from "framer-motion";

import Link from "next/link";
import Image from "next/image";

const Thumbnail = (props) => {
  let { URL } = process.env;

  const currentProducts = props.crntProducts;
  let variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };
  return (
    <motion.div
      key={currentProducts}
      variants={variants} // Pass the variant object into Framer Motion
      initial="hidden" // Set the initial state to variants.hidden
      animate="enter" // Animated state to variants.enter
      exit="exit" // Exit state (used later) to variants.exit
      transition={{ type: "linear" }} // Set the transition to linear
      className=""
    >
      <section id="catproducts" className="row ">
        {currentProducts.length > 0
          ? currentProducts.map((product) => {
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
                  key={product.name}
                  className={
                    "col-lg-3 col-md-4 col-sm-6 col-6 " + props.listGridViews
                  }
                >
                  <div className="productListing text-center react-products-listings">
                    <Link href={product.product_url}>
                      <a
                        style={{ zIndex: -1, position: "relative" }}
                        className="product text-decoration-none text-left"
                      >
                        <div className="caption">
                          <h2 className="brand">{product.brand}</h2>
                          <h3 className="name">{product.name}</h3>
                        </div>
                        <span className="image text-left mb-2 d-block">
                          <Image
                            id={"img" + product.id}
                            src={product.image}
                            alt={product.name}
                            width={221}
                            height={200}
                            loading="lazy"
                          />
                        </span>
                        {totalReviews > 0 ? (
                          <div className="reviewContainer d-flex align-items-start justify-content-start flex-row float-left w-100 my-3">
                            <span className="reviews-stars w-auto d-block">
                              {/***  <StarRatings
                            rating={prodRatings}
                            starRatedColor="rgb(255, 215, 0)"
                            numberOfStars={starsNum}
                            starDimension={"20px"}
                            starSpacing={"0px"}
                            name="rating"
                            isSelectable={false}
                          />***/}
                            </span>
                            <span
                              title={
                                prodRatings +
                                "/" +
                                starsNum +
                                " Rating in " +
                                totalReviews +
                                " Reviews"
                              }
                              className="reviews-count ml-1 w-auto"
                            >
                              ({totalReviews})
                            </span>
                          </div>
                        ) : (
                          <div className="null-reviews"></div>
                        )}
                        <h3
                          className={
                            product.available.toLowerCase() == "out of stock"
                              ? "outstock"
                              : "instock"
                          }
                        >
                          {product.available}{" "}
                        </h3>
                        {product.price_range && product.price_range != "" ? (
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
                        )}
                      </a>
                    </Link>
                    {product.claimer && product.claimer.toLowerCase() == "y" ? (
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title={`"GLOCK"" is a federally registered trademark of GLOCK, Inc. and is one of many trademarks owned by GLOCK, Inc. or GLOCK Ges.m.b.H.  Neither RSR Group, Inc. nor this site are affiliated in any manner with, or otherwise endorsed by, GLOCK, Inc. or GLOCK Ges.m.b.H.  The use of "GLOCK" on this page is merely to advertise the sale of GLOCK pistols, parts, or components.  For genuine GLOCK, Inc. and GLOCK Ges.m.b.H. products and parts visit <a href="https://www.glock.com" target="_blank">www.glock.com</a>.`}
                      >
                        <h3 className="catdisclaimerheading">
                          <i
                            className="fa fa-exclamation-triangle"
                            aria-hidden="true"
                          ></i>
                          Glock Disclaimer
                        </h3>
                      </button>
                    ) : (
                      ""
                    )}
                    <div className="cart-button text-center">
                      <a href={product.product_url} className="details">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              );
            })
          : ""}
      </section>
    </motion.div>
  );
};

export default Thumbnail;
