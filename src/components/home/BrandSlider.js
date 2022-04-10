import React from "react";
import dynamic from "next/dynamic";
//const OwlCarousel1 = dynamic(import("react-owl-carousel"), { ssr: false });
import "owl.carousel/dist/assets/owl.carousel.css";

import Head from "next/head";
import Image from "next/image";
var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const options = {
  responsiveClass: true,
  nav: true,
  dots: false,
  autoplay: false,
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 2,
    },
    600: {
      items: 3,
    },
    700: {
      items: 4,
    },
    1000: {
      items: 7,
    },
  },
};

const BrandSlider = () => {
  <Head></Head>;
  let { URL } = process.env;
  return (
    <>
      <section id="brandslider">
        <div className="container">
          <div className="row">
            <div className="col-12 heading">
              <h3>brands</h3>
            </div>
            <OwlCarousel
              className="owl-theme"
              loop
              margin={0}
              items={7}
              nav={true}
              navText={[
                '<img src="/images/Arrow_left.png" />',
                '<img src="/images/Arrow_right.png" />',
              ]}
              dots={false}
              animateIn={true}
              {...options}
            >
              <div className="item">
                <img
                  alt="brand logo"
                  src={URL + "/images/brands/Bromley mountain logo.png"}
                  className="img-fluid"
                />
              </div>
              <div className="item">
                <img
                  alt="brand logo"
                  src={URL + "/images/brands/hunter-mountain.png"}
                  className="img-fluid"
                />
              </div>
              <div className="item">
                <img
                  alt="brand logo"
                  src={URL + "/images/brands/jiminy.png"}
                  className="img-fluid"
                />
              </div>
              <div className="item">
                <img
                  alt="brand logo"
                  src={URL + "/images/brands/PFM-Okemo.png"}
                  width={90}
                  height={63}
                  layout="responsive"
                  loading="lazy"
                  className="img-fluid"
                />
              </div>
              <div className="item">
                <img
                  alt="brand logo"
                  src={URL + "/images/brands/PFM-Okemo.png"}
                  className="img-fluid"
                />
              </div>
              <div className="item">
                <img
                  alt="brand logo"
                  src={URL + "/images/brands/stwejpg.png"}
                  className="img-fluid"
                />
              </div>
              <div className="item">
                <img
                  alt="brand logo"
                  src={URL + "/images/brands/white-face.png"}
                  className="img-fluid"
                />
              </div>
              <div className="item">
                <img
                  alt="brand logo"
                  src="https://template1.cumulusbetasites.com/ccms/default/assets/Image/brand-smith-and-wesson.png"
                  className="img-fluid"
                />
              </div>{" "}
              <div className="item">
                <img
                  alt="brand logo"
                  src="https://template1.cumulusbetasites.com/ccms/default/assets/Image/brand-smith-and-wesson.png"
                  className="img-fluid"
                />
              </div>{" "}
              <div className="item">
                <img
                  alt="brand logo"
                  src="https://template1.cumulusbetasites.com/ccms/default/assets/Image/brand-smith-and-wesson.png"
                  className="img-fluid"
                />
              </div>{" "}
              <div className="item">
                <img
                  alt="brand logo"
                  src="https://template1.cumulusbetasites.com/ccms/default/assets/Image/brand-smith-and-wesson.png"
                  className="img-fluid"
                />
              </div>{" "}
            </OwlCarousel>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandSlider;
