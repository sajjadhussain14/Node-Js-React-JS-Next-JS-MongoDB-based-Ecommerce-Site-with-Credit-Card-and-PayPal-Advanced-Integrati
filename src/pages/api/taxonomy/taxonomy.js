const fsp = require("fs").promises;

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "s-maxage=86400");

  let { URL } = process.env;
  let product = {};
  let taxonomy = [];
  try {
    let dataURL = process.cwd() + `/data/taxonomy.json`;
    const rawData = await fsp.readFile(dataURL);
    const data = JSON.parse(rawData);
    taxonomy = data;
  } catch (err) {
    taxonomy = [];
  }

  res.status(200).json(taxonomy);
}
