import React from "react";
import Link from "next/link";

const CustomerService = () => {
  let { URL } = process.env;

  return (
    <section className="col-lg-3 col-md-6 col-12 unique">
      <h4
        className="nav-title collapsed"
        data-toggle="collapse"
        data-target="#accordzero"
        aria-expanded="false"
      >
        customer service
      </h4>
      <div id="accordzero" className="collapse">
        <p>
          <Link href={URL + "/info/your-account"}>
            <a>
             Your Account
            </a>
          </Link>
          <Link href={URL + "/info/contact-us"}>
            <a>
              Contact Us
            </a>
          </Link>
          <Link href={URL + "/info/gift-cards"}>
            <a>
              Gift Cards
            </a>
          </Link>
        </p>
      </div>
    </section>
  );
};

export default CustomerService;
