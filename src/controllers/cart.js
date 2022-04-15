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
    let prodPrice = cart[index].itemPrice;

    prodQTY++;
    cart[index] = { ...cart[index], qty: prodQTY };
    cart[index] = { ...cart[index], total: prodPrice * prodQTY };
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

export const UpdateCartQTY = (e, id, setCart, cartQty) => {
  e.preventDefault();
  let cart = [];

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

export const setCartContent = (name, data) => {
  if (typeof window != "undefined") {
    try {
      localStorage.setItem(name, JSON.stringify(data));
    } catch (err) {}
  }
};

export const getCartContent = (name) => {
  let cart = [];
  if (typeof window != "undefined") {
    try {
      cart = JSON.parse(localStorage.getItem(name));
    } catch (err) {}
  }
  if (!cart || cart.length < 1) {
    cart = [];
  }
  return cart;
};
