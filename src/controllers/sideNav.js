import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Router from "next/router";

export const ShopByCategories = (
  currentFilters,
  prodData,
  taxonomy,
  categoryModeValue
) => {
  let level = 0;
  let categoryData = {
    taxonomy: "",
    categories: [],
    URL: [],
  };
  level = taxonomyLevels(currentFilters);
  if (categoryModeValue == "landing") {
    level = 0;
  }
  if (level == 4) {
    prodData.map((product) => {
      if (product.SUBTYP_3) {
        if (categoryData.categories.includes(product.SUBTYP_3)) {
        } else {
          if (
            product.SUBTYP_2.toUpperCase() ==
              currentFilters.SUBTYP_2.toUpperCase() &&
            product.SUBTYP_3 != "EMPTY"
          ) {
            taxonomy.map((cats) => {
              if (
                cats.SUBTYP_3 &&
                cats.SUBTYP_3 !== "" &&
                cats.SUBTYP_3 !== "EMPTY" &&
                cats.DEPT.toUpperCase() == product.Dept.toUpperCase() &&
                cats.TYP.toUpperCase() == product.Typ.toUpperCase() &&
                cats.SUBTYP_1.toUpperCase() == product.SUBTYP_1.toUpperCase() &&
                cats.SUBTYP_2.toUpperCase() == product.SUBTYP_2.toUpperCase() &&
                cats.SUBTYP_3.toUpperCase() == product.SUBTYP_3.toUpperCase()
              ) {
                if (categoryData.categories.includes(product.SUBTYP_3)) {
                } else {
                  categoryData.categories.push(product.SUBTYP_3);
                  categoryData.taxonomy = "SUBTYP_3";
                  categoryData.URL.push(cats.URL);
                }
              }
            });
          }
        }
      }
    });
  } else if (level == 3) {
    prodData.map((product) => {
      if (product.SUBTYP_2) {
        if (categoryData.categories.includes(product.SUBTYP_2)) {
        } else {
          if (
            product.SUBTYP_1.toUpperCase() ==
              currentFilters.SUBTYP_1.toUpperCase() &&
            product.SUBTYP_2 != "EMPTY"
          ) {
            taxonomy.map((cats) => {
              if (
                cats.SUBTYP_2 &&
                cats.SUBTYP_2 !== "" &&
                cats.SUBTYP_2 !== "EMPTY" &&
                cats.DEPT.toUpperCase() == product.Dept.toUpperCase() &&
                cats.TYP.toUpperCase() == product.Typ.toUpperCase() &&
                cats.SUBTYP_1.toUpperCase() == product.SUBTYP_1.toUpperCase() &&
                cats.SUBTYP_2.toUpperCase() == product.SUBTYP_2.toUpperCase()
              ) {
                if (categoryData.categories.includes(product.SUBTYP_2)) {
                } else {
                  categoryData.categories.push(product.SUBTYP_2);
                  categoryData.taxonomy = "SUBTYP_2";
                  categoryData.URL.push(cats.URL);
                }
              }
            });
          }
        }
      }
    });
  } else if (level == 2) {
    prodData.map((product) => {
      if (product.SUBTYP_1) {
        if (categoryData.categories.includes(product.SUBTYP_1)) {
        } else {
          try {
            if (
              currentFilters.TYP.toUpperCase() &&
              product.Typ.toUpperCase() == currentFilters.TYP.toUpperCase() &&
              product.SUBTYP_1 != "EMPTY"
            ) {
              taxonomy.map((cats) => {
                if (
                  cats.SUBTYP_1 &&
                  cats.SUBTYP_1 !== "" &&
                  cats.SUBTYP_1 !== "EMPTY" &&
                  cats.SUBTYP_2 == "EMPTY" &&
                  cats.SUBTYP_1.toUpperCase() ==
                    product.SUBTYP_1.toUpperCase() &&
                  cats.DEPT.toUpperCase() == product.Dept.toUpperCase() &&
                  cats.TYP.toUpperCase() == product.Typ.toUpperCase() &&
                  cats.SUBTYP_1.toUpperCase() == product.SUBTYP_1.toUpperCase()
                ) {
                  if (categoryData.categories.includes(product.SUBTYP_1)) {
                  } else {
                    categoryData.categories.push(product.SUBTYP_1);
                    categoryData.taxonomy = "SUBTYP_1";
                    categoryData.URL.push(cats.URL);
                  }
                }
              });
            }
          } catch (err) {
            console.log(err);
          }
        }
      }
    });
  } else if (level == 1) {
    prodData.map((product) => {
      if (product.Typ) {
        if (categoryData.categories.includes(product.Typ)) {
        } else {
          if (product.Typ != "EMPTY") {
            taxonomy.map((cats) => {
              if (
                cats.TYP &&
                cats.TYP !== "" &&
                cats.TYP !== "EMPTY" &&
                cats.SUBTYP_1 == "EMPTY" &&
                cats.DEPT.toUpperCase() == product.Dept.toUpperCase() &&
                cats.TYP.toUpperCase() == product.Typ.toUpperCase()
              ) {
                if (categoryData.categories.includes(product.Typ)) {
                } else {
                  categoryData.categories.push(product.Typ);
                  categoryData.taxonomy = "Typ";
                  categoryData.URL.push(cats.URL);
                }
              }
            });
          }
        }
      }
    });
  } else if (level == 0) {
    taxonomy.map((cats) => {
      if (cats.TYP == "EMPTY") {
        if (
          categoryData.categories.includes(cats.DEPT) ||
          cats.DEPT == "" ||
          cats.DEPT == " " ||
          cats.DEPT == "EMPTY"
        ) {
        } else {
          categoryData.categories.push(cats.DEPT);
          categoryData.taxonomy = "Dept";
          categoryData.URL.push(cats.URL);
        }
      }
    });
  } else {
  }

  // categoryData.categories = categoryData.categories.sort();
  return categoryData;
};

export const taxonomyLevels = (filters) => {
  let taxonomyLetvel = 0;
  try {
    if (filters.SUBTYP_2 && filters.SUBTYP_2 != "EMPTY") taxonomyLetvel = 4;
    else if (filters.SUBTYP_1 && filters.SUBTYP_1 != "EMPTY")
      taxonomyLetvel = 3;
    else if (filters.TYP && filters.TYP != "EMPTY") taxonomyLetvel = 2;
    else if (filters.DEPT && filters.DEPT != "EMPTY") taxonomyLetvel = 1;
    else taxonomyLetvel = 0;
  } catch (err) {}
  return taxonomyLetvel;
};

export const ShopByAttributes = (getProducts) => {
  let attributes = { name: "", values: [] };
  let arrayAttr = [];

  getProducts.map((product, index) => {
    if (product.attributes) {
      product.attributes.map((attr) => {
        let attrName = "";
        let attrValues = [];
        let attrCount = [];

        let counter = 0;
        let attrIndex = -1;

        if (attr.name && attr.name != "") {
          attrName = attr.name;

          try {
            attr.value.map((v) => {
              if (v && v != "") {
                attrValues.push(v);
                attrCount.push(1);
              }
            });
          } catch (err) {
            if (attr.value && attr.value != "") {
              attrValues.push(attr.value);
              attrCount.push(1);
            }
          }

          let index = arrayAttr.findIndex((x) => x.name == attrName);
          if (index == -1) {
            arrayAttr.push({
              name: attrName,
              values: attrValues,
              count: attrCount,
            });
          } else {
            if (Object.entries(attrValues).length > 1) {
              attrValues.map((v) => {
                if (v && v != "") {
                  let indexCheck = arrayAttr.findIndex(
                    (x) => x.name == attrName && x.values.includes(v)
                  );
                  if (indexCheck == -1) {
                    arrayAttr[index].values.push(v);
                    arrayAttr[index].count.push(1);
                  } else {
                    // let valIndex = arrayAttr[index].values.indexOf(v);
                    // let prevCount = arrayAttr[index].count[valIndex];
                    // arrayAttr[index].count[valIndex] =
                    //   arrayAttr[index].count[valIndex] + 1;
                  }
                }
              });
            } else {
              if (attrValues[0] && attrValues[0] != "") {
                let indexCheck = arrayAttr.findIndex(
                  (x) => x.name == attrName && x.values.includes(attrValues[0])
                );
                if (indexCheck == -1) {
                  arrayAttr[index].values.push(attrValues[0]);
                  arrayAttr[index].count.push(1);
                } else {
                  let valIndex = arrayAttr[index].values.indexOf(attrValues[0]);
                  let prevCount = arrayAttr[index].count[valIndex];
                  arrayAttr[index].count[valIndex] = prevCount + 1;
                }
              }
            }
          }
        }
      });
    }
  });

  let sortedArray = [];
  arrayAttr.map((el) => {
    let i = -1;
    let name = el.name;
    let fields = [];
    el.values.map((v) => {
      if (v && v != "") {
        i++;
        fields.push({ value: v, count: el.count[i] });

        fields.sort(dynamicSort("value"));
      }
    });
    sortedArray.push({ name: name, value: fields });
  });
  return sortedArray;
};
function dynamicSort(property) {
  let sortOrder = 1;
  if (property[0] === "-") {
    sortOrder = -1;
    property = property.substr(1);
  }
  return function (a, b) {
    /* next line works with strings and numbers,
     * and you may want to customize it to your needs
     */

    let letters = /^[A-Za-z]+$/;
    let num = /^[0-9]+$/;

    if (a.value && a.value.includes("$")) {
      return (
        Number(a.value.match(/(\d+)/g)[0]) - Number(b.value.match(/(\d+)/g)[0])
      );
    } else if (letters.test(a.value)) {
      return a.value.toUpperCase().localeCompare(b.value.toUpperCase());
    } else if (num.test(a.value)) {
      return a.value - b.value;
    } else {
      return a.value > b.value ? 1 : a.value < b.value ? -1 : 0;
    }
  };
}

export const attributesCount = (getProducts, attributesList, attrValues) => {
  let iCount = [];
  for (let x = 0; x < attributesList.length; x++) {
    for (let i = 0; i < attrValues.length; i++) {
      let itemCount = 0;
      getProducts.map((prods) => {
        if (prods.attributes) {
          prods.attributes.map((attr) => {
            if (attr.name == attributesList[x]) {
              try {
                attr.value.map((v) => {
                  if (v && v != "") {
                    if (v == attrValues[i]) {
                      itemCount++;
                    }
                  }
                });
              } catch (err) {
                if (attr.value && attr.value != "") {
                  if (attr.value == attrValues[i]) {
                    itemCount++;
                  }
                }
              }
            }
          });
        }
      });
      iCount[i] = itemCount;
    }
  }
  return iCount;
};

//********************** SRART ADDTHISFILTERS*********************
export const AddThisFilter = (
  filters,
  status,
  keyterm,
  keyValue,
  filterType,
  setSearchText,
  dispatch,
  setAllFilters
) => {
  try {
    document.getElementById("searchProds").value = "";
    setSearchText("");
  } catch (err) {}

  if (status == true) {
    let tempFilters = {};
    tempFilters = JSON.parse(JSON.stringify(filters));

    if (tempFilters[keyterm] && tempFilters[keyterm].length == 1) {
      delete tempFilters[keyterm];
      let abc = { ...tempFilters };
      setAllFilters(abc);
    } else {
      tempFilters[keyterm] = tempFilters[keyterm].filter(
        (el) => el != keyValue
      );
      let abc = { ...tempFilters };
      setAllFilters(abc);
    }
  } else {
    let tempFilters = {};
    tempFilters = JSON.parse(JSON.stringify(filters));

    if (tempFilters[keyterm] == null || tempFilters[keyterm].length == 0) {
      tempFilters[keyterm] = JSON.parse(JSON.stringify([]));
    } else {
    }
    tempFilters[keyterm].push(keyValue);
    let abc = { ...tempFilters };

    setAllFilters(abc);
  }
};
//********************** END ADDTHISFILTERS*********************

export const RemoveFilter = (
  slectedFilters,
  term,
  value,
  dispatch,
  setAllFilters
) => {
  let newFilters = [];
  let cFilters = JSON.parse(JSON.stringify(slectedFilters));
  if (cFilters[term] && cFilters[term].length <= 1) {
    delete cFilters[term];
    newFilters = JSON.parse(JSON.stringify(cFilters));
  } else {
    let tempFilters = JSON.parse(JSON.stringify(cFilters));
    let index = tempFilters[term].indexOf(value);
    if (index && index !== -1) {
      tempFilters[term].splice(index, 1);
    }
    newFilters = JSON.parse(JSON.stringify(tempFilters));
  }

  setAllFilters(newFilters);
};

export const AddCategories = (
  slectedFilters,
  term,
  value,
  url,
  dispatch,
  setAllFilters
) => {
  let newFilters = [];
  let filterCategories = JSON.parse(
    JSON.stringify(slectedFilters["categories"])
  );

  let catItem = { key: term, taxonomy: term, value: value, url, url };
  filterCategories.push(catItem);
  let newcats = { ...slectedFilters };
  newcats["categories"] = [...filterCategories];

  setAllFilters(newcats);
};

export const RemoveCategories = (slectedFilters, url, setAllFilters) => {
  let newFilters = [];
  let tempFilters = JSON.parse(JSON.stringify(slectedFilters));

  tempFilters["categories"] = tempFilters["categories"].filter(
    (el) => el.url != url
  );
  let abc = { ...tempFilters };

  setAllFilters(abc);

  try {
    if (abc.categories && abc.categories.length > 0) {
    }
    try {
      Router.push(abc.categories[abc.categories.length - 1].url);
    } catch (err) {}
  } catch (err) {}
};

export const CheckAvailable = (setCheckAvailability, value) => {
  setCheckAvailability(value);
};
