const fsp = require("fs").promises;

export default async function handler(req, res) {
  let { userID } = req.body;
  let wishLists = [];
  let userLists = [];

  let dataURL = process.cwd() + `/data/wishlists/wishlists.json`;
  let list_rsp = await fsp.readFile(dataURL);

  try {
    wishLists = JSON.parse(list_rsp);
  } catch (err) {
    wishLists = [];
  }

  if (!wishLists || wishLists.length < 1) {
    wishLists = [];
  }
  userLists = wishLists.filter((list) => list.userID == userID);

  if (!userLists || userLists.length < 0) {
    userLists = [];
  }

  res.json(userLists);
}
