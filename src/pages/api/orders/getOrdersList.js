const fsp = require("fs").promises;

export default async function handler(req, res) {
  let data = req.body;
  try {
    data = JSON.parse(data);
  } catch (err) {}
  let userID = data.userID;
  let orders = [];

  let dataURL = process.cwd() + `/data/orders/orders.json`;
  let orders_rsp = await fsp.readFile(dataURL);

  try {
    orders = JSON.parse(orders_rsp);
  } catch (err) {
    orders = [];
  }

  if (!orders || orders.length < 1) {
    orders = [];
  }

  orders = orders.filter((order) => order.UserID == userID);

  if (!orders || orders.length < 0) {
    orders = [];
  }
  res.json(orders);
}
