const fsp = require("fs").promises;
const md5 = require("md5");

export default async function handler(req, res) {
  let { URL } = process.env;
  let orders = [];
  let { orderDertails } = req.body;
  let dataURL = process.cwd() + `/data/orders/orders.json`;
  let response = "";
  let stcode = 409;
  fsp.readFile(dataURL).then((rawData) => {
    try {
      orders = JSON.parse(rawData);
    } catch (err) {
      orders = [];
    }

    if (!orders || orders.length < 1) {
      orders = [];
    }
    try {
      orders.push(orderDertails);
      fsp.writeFile(dataURL, JSON.stringify(orders)).then((rsp) => {
        response = "order Created Successfully!";
      });
      stcode = 200;
      return res.status(stcode).send(response);
    } catch (err) {
      response = "order Creation Failed!" + err;
      stcode = 301;
      return res.status(stcode).send(response);
    }
  });
}
