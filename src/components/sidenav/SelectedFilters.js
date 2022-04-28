import React from "react";

import { RemoveCategories, RemoveFilter } from "../../controllers/sideNav";

const SelectedFilters = (props) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="flush-headingPrice">
        <button
          className="accordion-button collapsed text-uppercase px-0 border-0 fw-bold bg-transparent"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsePrice"
          aria-expanded="false"
          aria-controls="collapsePrice"
        >
          Selected
        </button>
      </h2>
      <div
        id="collapsePrice"
        className="accordion-collapse collapse"
        aria-labelledby="flush-headingPrice"
      >
        <div className="accordion-body px-1 pt-0">
          {Object.entries(props.filters).map(([key, value], i) => {
            return (
              <>
                {key == "categories"
                  ? value.map((item) => {
                      return (
                        <span className="d-block mb-2" key={key + item.value}>
                          {item.key && item.key == "FAKE_DEPT" ? (
                            ""
                          ) : (
                            <i
                              className="fa fa-times pr-2"
                              onClick={() => {
                                RemoveCategories(
                                  props.filters,
                                  item.url,
                                  props.setAllFilters
                                );
                              }}
                            ></i>
                          )}

                          {item.value}
                        </span>
                      );
                    })
                  : ""}

                {key != "categories" && value.length > 0
                  ? value.map((val) => {
                      return (
                        <span className="d-block mb-2" key={key + val}>
                          <i
                            className="fa fa-times pr-2"
                            onClick={() => {
                              RemoveFilter(
                                props.filters,
                                key,
                                val,
                                props.dispatch,
                                props.setAllFilters
                              );
                            }}
                          ></i>

                          {val}
                        </span>
                      );
                    })
                  : ""}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SelectedFilters;
