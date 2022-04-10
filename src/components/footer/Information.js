import React from "react";
import Link from "next/link";

const Information = () => {
  let { URL } = process.env;

  return (
    <section className="col-lg-3 col-md-6 col-12 unique">
      <h4
        className="nav-title collapsed"
        data-toggle="collapse"
        data-target="#accordone"
        aria-expanded="false"
      >
        information
      </h4>
      <div id="accordone" className="collapse">
        <p>
          <Link href={URL + "/info/terms-and-conditions"}>
            <a>
             Terms and Conditions
            </a>
          </Link>
          <Link href={URL + "/info/visit-our-blog"}>
            <a>
              Visit Our Blog
            </a>
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Information;
