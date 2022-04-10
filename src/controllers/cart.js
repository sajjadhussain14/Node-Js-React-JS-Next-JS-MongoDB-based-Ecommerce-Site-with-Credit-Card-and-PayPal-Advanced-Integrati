import Router from "next/router";
import { setCart } from "../redux/cartSlice";
let { URL } = process.env;

export const AddToCart = (e, item, cartData, setCart) => {
  e.preventDefault();
  let cartContent = [];
  cartContent = JSON.parse(localStorage.getItem("cart"));
  let cart = [];
  try {
    cart = [...cartContent];
  } catch (err) {}
  if (!cart || cart.length < 1) {
    cart = [];
  }
  let index = -1;
  try {
    index = cart.findIndex((prod) => prod.id === item.id);
  } catch (err) {}
  if (index > -1) {
    let prodQTY = cart[index].qty;
    let prodTotal = cart[index].total;

    prodQTY++;
    cart[index] = { ...cart[index], qty: prodQTY };
    cart[index] = { ...cart[index], total: prodTotal * prodQTY };
  } else {
    let tempCart = [];

    // tempCart.push(item);

    cart = [...cart, item];
  }
  try {
    localStorage.setItem("cart", JSON.stringify(cart));
  } catch (err) {}
  setCart(cart);
  try {
    document.getElementById("header-cartQTY").innerHTML = cart.length;
  } catch (err) {}
};

export const clearCart = (e, setCart) => {
  e.preventDefault();
  try {
    localStorage.setItem("cart", JSON.stringify([]));
  } catch (err) {}

  setCart([]);
};

export const UpdateCartQTY = (e, action, id, setCart) => {
  e.preventDefault();
  let cart = [];
  let cartQty = 0;
  try {
    cartQty = document.getElementById("qtyBox" + id).value;
  } catch (err) {}

  if (cartQty.match(/[a-z]/i)) {
    alert("Please Enter a Valid Number");
    document.getElementById("qtyBox" + id).value = 1;
    return;
  }

  if (action == "increment") {
    cartQty = parseInt(cartQty) + 1;
    document.getElementById("qtyBox" + id).value = cartQty;
  } else if (action == "decrement") {
    cartQty = parseInt(cartQty) - 1;
    if (cartQty < 1) {
      cartQty = 1;
    }
    document.getElementById("qtyBox" + id).value = cartQty;
  } else {
    if (cartQty < 1) {
      cartQty = 1;
    }
    document.getElementById("qtyBox" + id).value = cartQty;
  }

  try {
    cart = JSON.parse(localStorage.getItem("cart"));
  } catch (err) {}
  let index = -1;
  try {
    index = cart.findIndex((prod) => prod.id === id);
  } catch (err) {}

  if (index > -1) {
    let prodQTY = cartQty;
    let prodPrice = cart[index].itemPrice;
    cart[index] = { ...cart[index], qty: prodQTY };
    cart[index] = { ...cart[index], total: prodPrice * prodQTY };

    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (err) {}
    //  Router.push("/cart");
    setCart(cart);
  }
};

export const removeItem = (id, setCart) => {
  let cart = [];
  try {
    cart = JSON.parse(localStorage.getItem("cart"));
  } catch (err) {}

  if (!cart || cart.length < 1) {
    cart = [];
  }

  let newCart = cart.filter((item) => item.id != id);
  try {
    localStorage.setItem("cart", JSON.stringify(newCart));
  } catch (err) {}
  setCart(newCart);
  try {
    document.getElementById("header-cartQTY").innerHTML = newCart.length;
  } catch (err) {}
};

export const getContinueShoppingURL = () => {
  let shopURL = "";
  try {
    shopURL = localStorage.getItem("shop");
  } catch (err) {}

  if (!shopURL || shopURL == "" || shopURL == null) {
    shopURL = "/";
  }
  return shopURL;
};

export const csHandleChange = () => {
  let shopURL = "";
  shopURL = getContinueShoppingURL();
  Router.push(URL + shopURL);
};
