import React from "react";
import Link from "next/link";

const Breadcrumbs = () => {
  return (
    <section id="BreadCrumbs" className="col-12 pt-3 d-none">
      <nav aria-label="breadcrumb" className="bg-transparent p-0">
        <ol className="breadcrumb bg-transparent p-0">
          <li className="breadcrumb-item">
            <Link href="/">
              <a className="text-dark text-decoration-none">Home</a>
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            My Account
          </li>
        </ol>
      </nav>
    </section>
  );
};

export default Breadcrumbs;
