const fsp = require("fs").promises;

export default async function handler(req, res) {
  let data = req.body;
  try {
    data = JSON.parse(data);
  } catch (err) {}
  let orderID = data.orderID;
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
  console.log(orders);

  orders = orders.filter(
    (order) => order.orderNumber.toLowerCase() == orderID.toLowerCase()
  );

  if (orders && orders.length > 0) {
    orders = orders[0];
  }
  if (!orders || orders.length < 0) {
    orders = [];
  }
  res.json(orders);
}
