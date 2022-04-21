const fsp = require("fs").promises;

export default async function handler(req, res) {
  let user = req.body.data;
  let dataURL = process.cwd() + `/data/users/users.json`;
  let response = "";
  let stcode = 409;
  let users = [];
  fsp.readFile(dataURL).then((rawData) => {
    try {
      users = JSON.parse(rawData);
    } catch (err) {
      users = [];
    }

    if (!users || users.length < 1) {
      users = [];
    }
    // let record = users.filter((person) => person.credentials.id == user.id);
    let index = -1;
    index = users.findIndex(
      (person) => person.id.toString() == user.id.toString()
    );

    let newUsers = [...users];

    if (index > -1) {
      newUsers[index] = user;

      try {
        fsp.writeFile(dataURL, JSON.stringify(newUsers)).then((rsp) => {
          response = "User Updated Successfully!";
        });
        stcode = 200;
      } catch (err) {
        response = "User Updation Failed!" + err;
        stcode = 409;
      }
    }
    return res.status(stcode).send(response);
  });
}
