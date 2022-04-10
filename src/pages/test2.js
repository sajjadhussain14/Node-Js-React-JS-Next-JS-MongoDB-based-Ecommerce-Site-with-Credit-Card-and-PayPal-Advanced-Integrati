import React from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });

import Head from "next/head";

const Test2 = () => {
  <Head></Head>;
  return (
    <>
      {/***
      <section id="index">
        <OwlCarousel
          className="owl-theme"
          loop
          margin={10}
          items={4}
          nav={true}
          navText={[
            '<i class="fas fa-angle-left" aria-hidden="true"></i>',
            '<i class="fas fa-angle-right" aria-hidden="true"></i>',
          ]}
          dots={true}
          animateIn={true}
        >
          <div class="item">
            <img
              alt=""
              src="https://template1.cumulusbetasites.com/ccms/default/assets/Image/brand-smith-and-wesson.png"
            />
          </div>
          <div class="item">
            <img
              alt=""
              src="https://template1.cumulusbetasites.com/ccms/default/assets/Image/brand-smith-and-wesson.png"
            />{" "}
          </div>
          <div class="item">
            <img
              alt=""
              src="https://template1.cumulusbetasites.com/ccms/default/assets/Image/brand-smith-and-wesson.png"
            />{" "}
          </div>
          <div class="item">
            <img
              alt=""
              src="https://template1.cumulusbetasites.com/ccms/default/assets/Image/brand-smith-and-wesson.png"
            />{" "}
          </div>
          <div class="item">
            <img
              alt=""
              src="https://template1.cumulusbetasites.com/ccms/default/assets/Image/brand-smith-and-wesson.png"
            />{" "}
          </div>
          <div class="item">
            <img
              alt=""
              src="https://template1.cumulusbetasites.com/ccms/default/assets/Image/brand-smith-and-wesson.png"
            />{" "}
          </div>{" "}
          <div class="item">
            <img
              alt=""
              src="https://template1.cumulusbetasites.com/ccms/default/assets/Image/brand-smith-and-wesson.png"
            />{" "}
          </div>{" "}
          <div class="item">
            <img
              alt=""
              src="https://template1.cumulusbetasites.com/ccms/default/assets/Image/brand-smith-and-wesson.png"
            />{" "}
          </div>{" "}
          <div class="item">
            <img
              alt=""
              src="https://template1.cumulusbetasites.com/ccms/default/assets/Image/brand-smith-and-wesson.png"
            />{" "}
          </div>{" "}
          <div class="item">
            <img
              alt=""
              src="https://template1.cumulusbetasites.com/ccms/default/assets/Image/brand-smith-and-wesson.png"
            />{" "}
          </div>{" "}
          <div class="item">
            <img
              alt=""
              src="https://template1.cumulusbetasites.com/ccms/default/assets/Image/brand-smith-and-wesson.png"
            />{" "}
          </div>{" "}
          <div class="item">
            <img
              alt=""
              src="https://template1.cumulusbetasites.com/ccms/default/assets/Image/brand-smith-and-wesson.png"
            />{" "}
          </div>{" "}
          <div class="item">
            <img
              alt=""
              src="https://template1.cumulusbetasites.com/ccms/default/assets/Image/brand-smith-and-wesson.png"
            />{" "}
          </div>{" "}
          <div class="item">
            <img
              alt=""
              src="https://template1.cumulusbetasites.com/ccms/default/assets/Image/brand-smith-and-wesson.png"
            />{" "}
          </div>{" "}
          <div class="item">
            <img
              alt=""
              src="https://template1.cumulusbetasites.com/ccms/default/assets/Image/brand-smith-and-wesson.png"
            />{" "}
          </div>{" "}
          <div class="item">
            <img
              alt=""
              src="https://template1.cumulusbetasites.com/ccms/default/assets/Image/brand-smith-and-wesson.png"
            />{" "}
          </div>{" "}
          <div class="item">
            <img
              alt=""
              src="https://template1.cumulusbetasites.com/ccms/default/assets/Image/brand-smith-and-wesson.png"
            />{" "}
          </div>
          <div class="item">
            <img
              alt=""
              src="https://template1.cumulusbetasites.com/ccms/default/assets/Image/brand-smith-and-wesson.png"
            />{" "}
          </div>
          <div class="item">
            <img
              alt=""
              src="https://template1.cumulusbetasites.com/ccms/default/assets/Image/brand-smith-and-wesson.png"
            />{" "}
          </div>
          <div class="item">
            <img
              alt=""
              src="https://template1.cumulusbetasites.com/ccms/default/assets/Image/brand-smith-and-wesson.png"
            />{" "}
          </div>
          <div class="item">
            <img
              alt=""
              src="https://template1.cumulusbetasites.com/ccms/default/assets/Image/brand-smith-and-wesson.png"
            />{" "}
          </div>
          <div class="item">
            <img
              alt=""
              src="https://template1.cumulusbetasites.com/ccms/default/assets/Image/brand-smith-and-wesson.png"
            />{" "}
          </div>
          <div class="item">
            <img
              alt=""
              src="https://template1.cumulusbetasites.com/ccms/default/assets/Image/brand-smith-and-wesson.png"
            />{" "}
          </div>
          <div class="item">
            <img
              alt=""
              src="https://template1.cumulusbetasites.com/ccms/default/assets/Image/brand-smith-and-wesson.png"
            />{" "}
          </div>{" "}
          <div class="item">
            <img
              alt=""
              src="https://template1.cumulusbetasites.com/ccms/default/assets/Image/brand-smith-and-wesson.png"
            />{" "}
          </div>
          <div class="item">
            <img
              alt=""
              src="https://template1.cumulusbetasites.com/ccms/default/assets/Image/brand-smith-and-wesson.png"
            />{" "}
          </div>
          <div class="item">
            <img
              alt=""
              src="https://template1.cumulusbetasites.com/ccms/default/assets/Image/brand-smith-and-wesson.png"
            />{" "}
          </div>{" "}
          <div class="item">
            <img
              alt=""
              src="https://template1.cumulusbetasites.com/ccms/default/assets/Image/brand-smith-and-wesson.png"
            />{" "}
          </div>
          <div class="item">
            <img
              alt=""
              src="https://template1.cumulusbetasites.com/ccms/default/assets/Image/brand-smith-and-wesson.png"
            />{" "}
          </div>{" "}
          <div class="item">
            <img
              alt=""
              src="https://template1.cumulusbetasites.com/ccms/default/assets/Image/brand-smith-and-wesson.png"
            />{" "}
          </div>
          <div class="item">
            <img
              alt=""
              src="https://template1.cumulusbetasites.com/ccms/default/assets/Image/brand-smith-and-wesson.png"
            />{" "}
          </div>
          <div class="item">
            <img
              alt=""
              src="https://template1.cumulusbetasites.com/ccms/default/assets/Image/brand-smith-and-wesson.png"
            />{" "}
          </div>
          <div class="item">
            <img
              alt=""
              src="https://template1.cumulusbetasites.com/ccms/default/assets/Image/brand-smith-and-wesson.png"
            />{" "}
          </div>
          <div class="item">
            <img
              alt=""
              src="https://template1.cumulusbetasites.com/ccms/default/assets/Image/brand-smith-and-wesson.png"
            />{" "}
          </div>
        </OwlCarousel>
        ;
        </section> ***/}
    </>
  );
};

export default Test2;
