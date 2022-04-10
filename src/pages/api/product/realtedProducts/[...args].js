const fsp = require("fs").promises;

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "s-maxage=86400");

  let products = [];
  let dept = "";
  let limit = 0;
  const { args } = req.query;

  dept = args[0];
  limit = args[1];

  try {
    let dataURL = process.cwd() + `/data/all-products.json`;
    const rawData = await fsp.readFile(dataURL);
    const data = JSON.parse(rawData);

    products = data.filter(
      (prod) => prod.Dept.toLowerCase() == dept.toLowerCase()
    );

    if (products.length > limit) {
      products.length = limit;
    }
    // products = prods;
  } catch (err) {
    products = [];
    console.log(err);
  }

  //let product = data.find((prod) => prod.id == id);
  if (!products || products.length < 0) {
    products = [];
  }
  res.status(200).json(products);
}
