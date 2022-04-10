import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  UpdateWishListQTY,
  deleteWishListItem,
} from "../../controllers/wishlist";
import { AddToCart } from "../../controllers/cart";

const DisplayListItems = (props) => {
  const [cart, setCart] = useState([]);

  let cartData = [];
  if (typeof window != "undefined") {
    cartData = JSON.parse(localStorage.getItem("cart"));
  }

  let listItems = [];
  let { URL } = process.env;
  if (props.wishListItems && props.wishListItems.length > 0) {
    listItems = props.wishListItems[0].items;
  } else {
    listItems = [];
  }
  useEffect(() => {
    setCart(cartData);
  }, [listItems]);
  return (
    <section id="wishlistContent">
      {listItems && listItems.length > 0 ? (
        listItems.map((product) => {
          if (product.itemPrice) {
            let iTotal = 0;

            if (!product.itemPrice) {
              product.itemPrice = product.price;
            }
            try {
              iTotal = product.itemPrice * product.qty;
            } catch (err) {
              iTotal = product.price * product.qty;
            }
            return (
              <div className="row  " key={product.name}>
                <div className="row main align-items-center">
                  <div className="col-2">
                    <Link href={product.product_url}>
                      <a>
                        <img className="img-fluid" src={product.image} />
                      </a>
                    </Link>
                  </div>
                  <div className="col-2">
                    <Link href={product.product_url}>
                      <a>
                        <div className="row text-muted">{product.brand}</div>
                        <div className="row">{product.name}</div>
                      </a>
                    </Link>
                  </div>
                  <div className="col-2 qtyInner">
                    <button
                      className="minus"
                      onClick={(e) => {
                        UpdateWishListQTY(
                          e,
                          "decrement",
                          product.id,
                          props.setUserLists,
                          props.userLists,
                          props.userID,
                          props.listName
                        );
                      }}
                    >
                      -
                    </button>
                    <input
                      type="text"
                      className="addminus"
                      defaultValue={product.qty}
                      min="1"
                      id={"qtyBox" + product.id}
                      name="qty"
                      onChange={(e) => {
                        UpdateWishListQTY(
                          e,
                          "none",
                          product.id,
                          props.setUserLists,
                          props.userLists,
                          props.userID,
                          props.listName
                        );
                      }}
                    />
                    <button
                      className="plus"
                      onClick={(e) => {
                        UpdateWishListQTY(
                          e,
                          "increment",
                          product.id,
                          props.setUserLists,
                          props.userLists,
                          props.userID,
                          props.listName
                        );
                      }}
                    >
                      +
                    </button>
                  </div>
                  <div className="col-2">${iTotal.toFixed(2)} </div>

                  <div className="col-2">
                    <button
                      className="bg-transparent border-0 align-right"
                      onClick={(e) => {
                        deleteWishListItem(
                          e,
                          product.id,
                          props.setUserLists,
                          props.userLists,
                          props.userID,
                          props.listName,
                          props.setWishListChanged,
                          props.setListName
                        );
                      }}
                    >
                      <img className="mr-2" src={URL + "/images/trash-2.svg"} />
                      Remove
                    </button>
                  </div>

                  <div className="col-2" style={{ textAlign: "right" }}>
                    <button
                      className="btn btn-dark align-right"
                      onClick={(e) => {
                        AddToCart(e, product, cart, setCart);

                        setTimeout(() => {
                          deleteWishListItem(
                            e,
                            product.id,
                            props.setUserLists,
                            props.userLists,
                            props.userID,
                            props.listName,
                            props.setWishListChanged,
                            props.setListName
                          );
                        }, 1000);
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          }
        })
      ) : (
        <>
          <p>
            No Items are currently in the list <strong>{props.listName}</strong>
          </p>
        </>
      )}
    </section>
  );
};

export default DisplayListItems;
