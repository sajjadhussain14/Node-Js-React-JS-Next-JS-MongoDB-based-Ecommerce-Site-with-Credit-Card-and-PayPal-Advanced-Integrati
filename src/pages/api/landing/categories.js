const fsp = require("fs").promises;

export default async function handler(req, res) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=86400, stale-while-revalidate=59"
  );

  let dataURL = process.cwd() + `/data/typs-with-thumbs.json`;
  const rawData = await fsp.readFile(dataURL);
  const data = JSON.parse(rawData);
  res.status(200).json(data);
}
