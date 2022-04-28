import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
const LandingCategories = (props) => {
  let { URL } = process.env;

  let typs = [];

  const categories = props.landingCategories;

  try {
    categories.map((elements) => {
      if (elements.Dept == props.dept) {
        typs = elements.Typs;
      }
    });
  } catch (err) {}

  return (
    <>
      <section id="CategoryProducts" className="col-lg-12 col-md-10 col-12">
        <div className="row">
          <div className="col-12">
            <div className="row">
              {typs && typs.length > 0
                ? typs.map((category) => {
                    return (
                      <div
                        className="col-lg-3 col-md-6 col-sm-12 col-12 cat"
                        key={"categories " + category.typ_name}
                      >
                        <div className="inner innerMore styleMore">
                          <Link
                            href={{
                              pathname: `${URL}/category/[slug]`,
                              query: { slug: category.typ_url },
                            }}
                          >
                            <a>
                              <img
                                title={category.typ_name}
                                alt={category.typ_name}
                                className="cat-thumb"
                                src={category.prod_image}
                              />

                              {category.typ_name}
                            </a>
                          </Link>
                        </div>
                      </div>
                    );
                  })
                : ""}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingCategories;
