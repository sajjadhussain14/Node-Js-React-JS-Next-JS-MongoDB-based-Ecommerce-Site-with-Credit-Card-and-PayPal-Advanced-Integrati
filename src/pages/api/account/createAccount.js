const fsp = require("fs").promises;
const md5 = require("md5");

export default async function handler(req, res) {
  let data = req.body;
  let users = [];
  let user = {
    id: data.ID,
    credentials: {
      email: data.email,
      password: md5(data.password),
    },
    billing: {
      first_name: data.fname,
      last_name: data.lname,
      phone: data.phone,
      address1: data.address1,
      address2: data.address2,
      email: data.email,
      city: data.city,
      state: data.state,
      zip_code: data.zcode,
      country: data.country,
    },

    shipping: {
      first_name: "",
      last_name: "",
      phone: "",
      address1: "",
      address2: "",
      email: data.email,
      city: "",
      state: "",
      zip_code: "",
      country: "",
    },
  };

  let dataURL = process.cwd() + `/data/users/users.json`;
  let response = "";
  let stcode = 409;
  fsp.readFile(dataURL).then((rawData) => {
    try {
      users = JSON.parse(rawData);
    } catch (err) {
      users = [];
    }

    if (!users || users.length < 1) {
      users = [];
    }
    let record = users.filter(
      (person) => person.credentials.email == user.credentials.email
    );

    if (record && record.length > 0) {
      response = "User Creation Failed! User Already Exixts.";
      stcode = 409;
      return res.status(stcode).send(response);
    } else {
      try {
        users.push(user);
        fsp.writeFile(dataURL, JSON.stringify(users)).then((rsp) => {
          response = "User Created Successfully!";
        });
        stcode = 200;
        return res.status(stcode).send(response);
      } catch (err) {
        response = "User Creation Failed!" + err;
        stcode = 301;
        return res.status(stcode).send(response);
      }
    }
  });
}
