export const addItemToWishList = async (e, product, setFakeState) => {
  e.preventDefault();
  let { URL } = process.env;

  let listName = "";
  let itemQTY = "";

  let listVisibility = "";
  let listType = "";
  let userID = "";
  try {
    listName = document.getElementById("listName").value;
  } catch (error) {}

  try {
    itemQTY = document.getElementById("listQty").value;
    itemQTY = parseInt(itemQTY);
  } catch (error) {}

  try {
    userID = localStorage.getItem("currentAliveUser");
  } catch (error) {}

  if (!product.price || product.price == "") {
    product.itemPrice = 0;
  } else {
    if (product.termsaleprice && product.termsaleprice > 0) {
      product.itemPrice = product.price;
      product.salesPrice = product.termsaleprice;
    } else {
      product.itemPrice = product.price;
    }
  }

  let newProduct = product;
  newProduct["qty"] = itemQTY;
  let wishListItem = {
    name: listName,
    visibility: listVisibility,
    typ: listType,
    userID: userID,
    items: newProduct,
  };

  const response = await fetch(URL + "/api/wishlist", {
    method: "POST",
    body: JSON.stringify({
      data: wishListItem,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  setFakeState("OK");
  return response;
};

export const getUserWishLists = async (userID) => {
  let { URL } = process.env;

  const lists = await fetch(URL + "/api/wishlist/getUserWishLists", {
    method: "POST",
    body: JSON.stringify({
      userID: userID,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  let userLists = await lists.json();
  return userLists;
};

export const deleteWishLists = async (userID, listName, setUserLists) => {
  let { URL } = process.env;

  const lists = await fetch(URL + "/api/wishlist/deleteWishlists", {
    method: "POST",
    body: JSON.stringify({
      userID: userID,
      listName: listName,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  let wishLists = await lists.json();
  setUserLists(wishLists);
  return wishLists;
};

export const showListItems = async (userID, listName) => {
  let { URL } = process.env;

  const lists = await fetch(URL + "/api/wishlist/deleteWishlists", {
    method: "POST",
    body: JSON.stringify({
      userID: userID,
      listName: listName,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  let wishLists = await lists.json();
  setUserLists(wishLists);
  return wishLists;
};

export const UpdateWishListQTY = async (
  e,
  action,
  id,
  setUserLists,
  userLists,
  userID,
  listName
) => {
  e.preventDefault();
  let { URL } = process.env;

  let itemQty = 0;
  try {
    itemQty = document.getElementById("qtyBox" + id).value;
  } catch (err) {}

  if (itemQty.match(/[a-z]/i)) {
    alert("Please Enter a Valid Number");
    document.getElementById("qtyBox" + id).value = 1;
    return;
  }

  if (action == "increment") {
    itemQty = parseInt(itemQty) + 1;
    document.getElementById("qtyBox" + id).value = itemQty;
  } else if (action == "decrement") {
    itemQty = parseInt(itemQty) - 1;
    if (itemQty < 1) {
      itemQty = 1;
    }
    document.getElementById("qtyBox" + id).value = itemQty;
  } else {
    if (itemQty < 1) {
      itemQty = 1;
    }
    document.getElementById("qtyBox" + id).value = itemQty;
  }

  let index = -1;
  try {
    index = userLists.findIndex(
      (list) => list.userID === userID && list.name == listName
    );
  } catch (err) {}

  if (index > -1) {
    let targetListItems = userLists[index].items;

    let itemsIndex = -1;
    try {
      itemsIndex = targetListItems.findIndex((prod) => prod.id === id);
    } catch (err) {}

    if (itemsIndex > -1) {
      let prodQTY = itemQty;
      let prodPrice = targetListItems[itemsIndex].itemPrice;

      targetListItems[itemsIndex] = {
        ...targetListItems[itemsIndex],
        qty: prodQTY,
      };

      targetListItems[itemsIndex] = {
        ...targetListItems[itemsIndex],
        total: prodPrice * prodQTY,
      };

      userLists[index].items = targetListItems;

      setUserLists(userLists);

      const lists = await fetch(URL + "/api/wishlist/updateWishlistsItem", {
        method: "POST",
        body: JSON.stringify({
          udpatedWishList: userLists,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  }
};

export const deleteWishListItem = async (
  e,
  id,
  setUserLists,
  userLists,
  userID,
  listName,
  setWishListChanged,
  setListName
) => {
  e.preventDefault();
  let { URL } = process.env;

  let index = -1;
  try {
    index = userLists.findIndex(
      (list) =>
        list.userID === userID &&
        list.name.toLowerCase() == listName.toLowerCase()
    );
  } catch (err) {}
  console.log("222", userLists);
  if (index > -1) {
    let targetListItems = userLists[index].items;
    let newslistItems = targetListItems.filter((item) => item.id != id);
    userLists[index].items = newslistItems;

    const lists = await fetch(URL + "/api/wishlist/deleteWishlistsItem", {
      method: "POST",
      body: JSON.stringify({
        udpatedWishList: userLists,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setUserLists(userLists);
    setListName("");
    setListName(listName);
  }
};
