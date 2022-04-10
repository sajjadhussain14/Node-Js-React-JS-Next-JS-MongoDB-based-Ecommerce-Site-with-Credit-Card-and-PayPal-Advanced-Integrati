const fsp = require("fs").promises;

export default async function handler(req, res) {
  let { userID, listName } = req.body;
  let wishLists = [];
  let dataURL = process.cwd() + `/data/wishlists/wishlists.json`;
  let response = "";
  let stcode = 409;
  fsp.readFile(dataURL).then((rawData) => {
    try {
      wishLists = JSON.parse(rawData);
    } catch (err) {
      wishLists = [];
    }

    if (!wishLists || wishLists.length < 1) {
      wishLists = [];
    }
    console.log("all", wishLists);
    let newLists = [];

    newLists = wishLists.filter(
      (list) => list.userID == userID && list.name == listName
    );
    stcode = 200;
    return res.json(newLists);
  });
}
