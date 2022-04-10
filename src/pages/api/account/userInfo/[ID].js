const fsp = require("fs").promises;

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "s-maxage=86400");

  const { ID } = req.query;
  let dataURL = process.cwd() + `/data/users/users.json`;
  const rawData = await fsp.readFile(dataURL);
  const usersData = JSON.parse(rawData);
  let userRecord = usersData.filter(
    (person) => person.id.toString() == ID.toString()
  );

  let stCode = 409;
  let response = "";
  let userInfo = [];
  if (userRecord && userRecord.length > 0) {
    userInfo = userRecord[0];
    stCode = 200;
  } else {
    userInfo = [];
    stCode = 409;
  }
  res.status(stCode).json({
    response: response,
    status: stCode,
    userInfo: userInfo,
  });
}
