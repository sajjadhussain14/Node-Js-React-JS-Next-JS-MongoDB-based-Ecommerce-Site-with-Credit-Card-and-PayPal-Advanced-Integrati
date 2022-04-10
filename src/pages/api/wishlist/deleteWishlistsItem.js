const fsp = require("fs").promises;

export default async function handler(req, res) {
  let { udpatedWishList } = req.body;
  let wishLists = [];
  let dataURL = process.cwd() + `/data/wishlists/wishlists.json`;
  let response = "";
  let stcode = 409;
  fsp.writeFile(dataURL, JSON.stringify(udpatedWishList)).then((rsp) => {
    response = "Deleted Successfully!";
  });

  stcode = 200;
  return res.json(udpatedWishList);
}
