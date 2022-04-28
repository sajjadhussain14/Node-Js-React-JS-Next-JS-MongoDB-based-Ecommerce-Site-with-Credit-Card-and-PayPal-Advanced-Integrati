const fsp = require("fs").promises;
const md5 = require("md5");

export default async function handler(req, res) {
  let data = req.body;
  let login_email = data.email;
  let login_password = data.password;
  let dataURL = process.cwd() + `/data/users/users.json`;
  console.log("here");

  const rawData = await fsp.readFile(dataURL);
  let usersData = [];
  try {
    usersData = JSON.parse(rawData);
  } catch (err) {
    usersData = [];
  }
  let record = usersData.filter(
    (person) =>
      person.credentials.email == login_email &&
      person.credentials.password == md5(login_password)
  );
  console.log(record);
  let stCode = "409";
  let response = "";
  let ID = "";
  if (record && record.length > 0) {
    stCode = 200;
    response = "Login Successfully";

    ID = record[0].id;
  } else {
    stCode = 409;
    response = "Login Failed";
  }
  res.status(stCode).json({
    response: response,
    status: stCode,
    data: { ID: ID },
  });
}
