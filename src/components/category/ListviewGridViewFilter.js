import React from "react";
import Link from "next/link";
import { toggleListGridViews } from "../../controllers/category";
const ListviewGridViewFilter = (props) => {
  return (
    <>
      <section className="col-lg-3 col-md-6 col-12 display-mode h4">
        <Link href="/">
          <a
            id="grid"
            className="change-view active text-dark"
            onClick={(e) => {
              toggleListGridViews(e, " ", props.setListGridViews);
            }}
          >
            <i className="fas fa-th"></i>
          </a>
        </Link>

        <Link href="/">
          <a
            id="list"
            className="change-view text-dark"
            onClick={(e) => {
              toggleListGridViews(
                e,
                " list-group-item ",
                props.setListGridViews
              );
            }}
          >
            <i className="fas fa-list"></i>
          </a>
        </Link>
      </section>
    </>
  );
};

export default ListviewGridViewFilter;
