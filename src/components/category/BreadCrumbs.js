import React from "react";
import Link from "next/link";

// START BREADCRUMBS
export const BreadCrumbs = (breadcrumbs) => {
  let { URL } = process.env;

  let breadcrumbsContent = [];
  breadcrumbsContent.push(
    <li key="home" className="breadcrumb-item">
      <Link href={URL}>
        <a className="text-dark text-decoration-none">Home</a>
      </Link>
    </li>
  );

  let i = -1;
  for (const [key, value] of Object.entries(breadcrumbs.urlData)) {
    i++;

    if (i == breadcrumbs.urlData.length - 1) {
      breadcrumbsContent.push(
        <li
          key={value.value}
          className="breadcrumb-item active"
          aria-current="page"
        >
          {value.value}
        </li>
      );
    } else {
      breadcrumbsContent.push(
        <li key={value.value} className="breadcrumb-item">
          <Link href={URL + "/category/" + value.url}>
            <a className="text-dark text-decoration-none">{value.value}</a>
          </Link>
        </li>
      );
    }
  }
  return (
    <>
      <section id="BreadCrumbs" className="col-12 pt-3">
        <nav aria-label="breadcrumb" className="bg-transparent p-0">
          <ol className="breadcrumb bg-transparent p-0">
            {breadcrumbsContent.map((item) => {
              return item;
            })}
          </ol>
        </nav>
      </section>
    </>
  );
};
// END BREADCRUMBS

export default BreadCrumbs;
