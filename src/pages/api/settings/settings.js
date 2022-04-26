const fsp = require("fs").promises;

export default async function handler(req, res) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=86400, stale-while-revalidate=59"
  );

  const { slug } = req.query;
  let settingsURL = process.cwd() + `/data/settings.json`;
  const rawData = await fsp.readFile(settingsURL);
  const data = JSON.parse(rawData);

  res.status(200).json(data);
}
