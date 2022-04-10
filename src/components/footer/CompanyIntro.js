import React from "react";
import Link from "next/link";
const CompanyIntro = () => {
  let { URL } = process.env;

  return (
    <section className="col-lg-3 col-md-6 col-12 unique">
      <h4
        className="nav-title collapsed"
        data-toggle="collapse"
        data-target="#accordtwo"
        aria-expanded="false"
      >
        company info
      </h4>
      <div id="accordtwo" className="collapse">
        <p>
          <Link href={URL + "/info/privacy-policy"}>
            <a>
               Privacy Policy
            </a>
          </Link>
          <Link href={URL + "/info/about-us"}>
            <a>
              About Us
            </a>
          </Link>
          <Link href={URL + "/info/shipping-and-return"}>
            <a>
              Shipping and Returns
            </a>
          </Link>
        </p>
        <h4
          className="nav-title collapsed"
          data-toggle="collapse"
          data-target="#accordtwo"
          aria-expanded="false"
        >
          Working Hours
        </h4>
        <p>Monday - Friday 10AM - 8PM, Saturday 10AM - 6PM</p>
      </div>
    </section>
  );
};

export default CompanyIntro;
