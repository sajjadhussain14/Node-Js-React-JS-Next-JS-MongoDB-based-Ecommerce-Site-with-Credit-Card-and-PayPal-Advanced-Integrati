const fsp = require("fs").promises;

export default async function handler(req, res) {
  let { data } = req.body;
  let wishLists = [];
  let wishList = {
    name: data.name,
    visibility: data.visibility,
    typ: data.type,
    userID: data.userID,
    items: [data.items],
  };
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

    let index = -1;
    index = wishLists.findIndex(
      (list) => list.userID.toString() == data.userID.toString()
    );
    let newWishLists = [...wishLists];
    if (index > -1) {
      let listIndex = -1;
      listIndex = wishLists.findIndex(
        (list) => list.name.toString() == data.name.toString()
      );

      if (listIndex > -1) {
        let listPreItems = [];
        listPreItems = newWishLists[listIndex].items;

        let itemIndex = -1;
        itemIndex = listPreItems.findIndex(
          (item) => item.id.toString() == wishList.items[0].id.toString()
        );

        if (itemIndex > -1) {
          newWishLists[listIndex].items[itemIndex].qty = wishList.items[0].qty;
          fsp.writeFile(dataURL, JSON.stringify(newWishLists)).then((rsp) => {
            response = "Item Added Successfully!";
          });
          stcode = 200;
          return res.status(stcode).send(response);
        } else {
          newWishLists[listIndex].items.push(wishList.items[0]);
          fsp.writeFile(dataURL, JSON.stringify(newWishLists)).then((rsp) => {
            response = "Item Added Successfully!";
          });
          stcode = 200;
          return res.status(stcode).send(response);
        }
      } else {
        wishLists.push(wishList);
        fsp.writeFile(dataURL, JSON.stringify(wishLists)).then((rsp) => {
          response = "Item Added Successfully!";
        });
        stcode = 200;
        return res.status(stcode).send(response);
      }
    } else {
      try {
        wishLists.push(wishList);
        fsp.writeFile(dataURL, JSON.stringify(wishLists)).then((rsp) => {
          response = "Item Added Successfully!";
        });
        stcode = 200;
        return res.status(stcode).send(response);
      } catch (err) {
        response = "Failed!" + err;
        stcode = 301;
        return res.status(stcode).send(response);
      }
    }
  });
}
