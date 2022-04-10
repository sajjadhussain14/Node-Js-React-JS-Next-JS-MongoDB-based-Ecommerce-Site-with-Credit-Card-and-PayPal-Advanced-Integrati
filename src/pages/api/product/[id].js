const fsp = require("fs").promises;

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "s-maxage=86400");

  let product = {};
  const { id } = req.query;
  try {
    let dataURL = process.cwd() + `/data/all-products.json`;
    const rawData = await fsp.readFile(dataURL);
    const data = JSON.parse(rawData);
    let pData = data.filter((pro) => pro.price > 0);
    product = pData.sort(() => 0.5 - Math.random())[0];
  } catch (err) {
    console.log(err);
  }

  //let product = data.find((prod) => prod.id == id);
  if (!product || !product.name) {
    product = {};
  }
  res.status(200).json(product);
}
