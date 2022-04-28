import React from "react";
import Link from "next/link";
import { getDepts } from "../../controllers/header";
import { getTyps } from "../../controllers/header";
const Nav = (props) => {
  let { URL } = process.env;

  let taxonomy = props.taxonomy;

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark  static-top"
        style={{ position: "relative", top: "auto" }}
      >
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto" id="boxes">
              {getDepts(taxonomy) && getDepts(taxonomy).length > 0
                ? getDepts(taxonomy).map((depts, index) => {
                    return (
                      <li
                        className="nav-item active "
                        data-toggle="collapse"
                        key={"deptLevel " + depts.DEPT}
                      >
                        <button
                          type="button"
                          data-toggle="collapse"
                          data-target={"#down" + index}
                          aria-controls={"down" + index}
                          aria-expanded="false"
                          aria-label="Toggle navigation"
                          id="drop"
                          className="d-lg-none border-0 d-md-block d-sm-block d-block p-0 m-0 bg-transparent"
                        >
                          <i className="fa fa-angle-down"></i>
                        </button>
                        <Link href={"/category/" + depts.URL}>
                          <a className="nav-link">{depts.DEPT.toLowerCase()}</a>
                        </Link>
                        <div
                          id={"down" + index}
                          className="dropdown-menu collapse"
                        >
                          <div className="container">
                            <div className="row">
                              {getTyps(taxonomy, depts.DEPT) &&
                              getTyps(taxonomy, depts.DEPT).length > 0
                                ? getTyps(taxonomy, depts.DEPT).map((typs) => {
                                    return (
                                      <div
                                        className="col-ag-2 col-md-12 col-12 first"
                                        key={typs.TYP}
                                      >
                                        <Link href={"/category/" + typs.URL}>
                                          <a className="title">
                                            {typs.TYP.toLowerCase()}
                                          </a>
                                        </Link>
                                      </div>
                                    );
                                  })
                                : ""}
                            </div>
                          </div>
                        </div>
                      </li>
                    );
                  })
                : ""}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
