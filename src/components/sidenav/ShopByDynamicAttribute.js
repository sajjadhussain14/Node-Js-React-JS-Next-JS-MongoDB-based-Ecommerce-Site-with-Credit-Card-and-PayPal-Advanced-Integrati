import React from "react";
import { AddThisFilter } from "../../controllers/sideNav";

const ShopByDynamicAttribute = (props) => {
  return (
    <>
      {props.attributes.map((attres, index) => {
        if (attres.name && attres.name != "") {
          let attrName = "";
          let attrDisplayName = "";
          let readDisbaled = false;

          attrName = attres.name;
          attrDisplayName = attres.name;
          if (attrDisplayName.indexOf("_") !== -1) {
            attrDisplayName = attrDisplayName.replaceAll("_", " ");
          }

          if (attrName.indexOf("_") !== -1) {
            attrName = attrName.replaceAll("_", " ");
          }

          try {
            if (attrName.indexOf(" ") !== -1) {
              attrName = attrName.replaceAll(" ", "_");
            }
          } catch (err) {}

          return (
            <>
              <div
                key={"attrName" + attrName + index}
                id="CategoryFilter"
                className="accordion-item border-bottom border-1"
              >
                <h2 className="accordion-header" id="flush-headingOne">
                  <button
                    className="accordion-button collapsed text-uppercase fw-bold border-0 px-0 outline-none bg-transparent"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={"#collapse" + attrName}
                    aria-expanded="false"
                    aria-controls={"collapse" + attrName}
                  >
                    {attrDisplayName}
                  </button>
                </h2>
                <div className="collapse border-0" id={"collapse" + attrName}>
                  <div className="accordion-body px-1 pt-0">
                    {attres.value.map((attrValues, index) => {
                      let status = false;
                      try {
                        if (
                          props.filters[attres.name].includes(
                            attrValues.value.toLowerCase()
                          )
                        ) {
                          status = true;
                        } else {
                          status = false;
                        }
                      } catch (err) {}
                      let attrV = attrValues.value;
                      try {
                        attrValues.value = attrValues.value.toLowerCase();
                      } catch (err) {}
                      return (
                        <div
                          className="form-check"
                          key={attrValues.value.toLowerCase()}
                        >
                          <input
                            className="form-check-input active"
                            type="checkbox"
                            defaultChecked={attrValues.value.toLowerCase()}
                            checked={status == true ? "checked" : false}
                            value={attrValues.value.toLowerCase()}
                            onChange={() => {}}
                            onClick={() => {
                              AddThisFilter(
                                props.filters,
                                status,
                                attres.name,
                                attrValues.value.toLowerCase(),
                                "dynamic",
                                props.setSearchText,
                                props.dispatch,
                                props.setAllFilters
                              );
                            }}
                            disabled={readDisbaled ? "disabled" : false}
                          />
                          <label
                            className={`form-check-label ${
                              status ? " active " : " "
                            } text-capitalize `}
                          >
                            {attrValues.value}({attrValues.count})
                          </label>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </>
          );
        }
      })}
    </>
  );
};

export default ShopByDynamicAttribute;
