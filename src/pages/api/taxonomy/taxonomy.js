const fsp = require("fs").promises;

export default async function handler(req, res) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=86400, stale-while-revalidate=59"
  );

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
  if (taxonomy && taxonomy.length > 157) {
    taxonomy.length = 157;
  }
  res.status(200).json(taxonomy);
}
