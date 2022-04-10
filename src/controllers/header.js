export const getDepts = (taxonomy) => {
  let depts = [];

  if (!taxonomy || taxonomy.length < 1) {
    taxonomy = [];
  }
  depts = taxonomy.filter((category) => category.TYP == "EMPTY");
  if (!depts || depts == "") depts = [];
  return depts;
};

export const getTyps = (taxonomy, dept) => {
  let typs = [];
  typs = taxonomy.filter(
    (category) =>
      category.DEPT == dept &&
      category.SUBTYP_1 == "EMPTY" &&
      category.TYP != "EMPTY"
  );
  if (!typs || typs == "") typs = [];
  return typs;
};
