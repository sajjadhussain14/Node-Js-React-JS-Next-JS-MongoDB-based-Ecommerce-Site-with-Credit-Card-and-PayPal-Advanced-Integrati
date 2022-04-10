import React, { useState, useEffect } from "react";
import Router from "next/router";
import {
  addItemToWishList,
  getUserWishLists,
} from "../../controllers/wishlist";

const WishListPopUp = (props) => {
  const [wishListMode, setWishListMode] = useState("add");

  const [currentList, setCurrentList] = useState("Default List");

  const listHandleChange = (e) => {
    setCurrentList(e.target.value);
  };

  return (
    <div
      className="modal fade show"
      id="wishListModal"
      role="dialog"
      aria-labelledby="wishListModalLabel"
      aria-modal="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="wishListModalLabel">
              Add item to list
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span
                aria-hidden="true"
                onClick={() => {
                  setWishListMode("add");
                  props.setFakeState("OK");
                }}
              >
                ×
              </span>
            </button>
          </div>
          <div className="modal-body">
            {wishListMode == "add" ? (
              <>
                <div className="form-group">
                  <label className="loginLabel w-100" title="list_id">
                    List:
                    <span
                      className="pull-right border-none float-right"
                      onClick={() => {
                        setWishListMode("create");
                      }}
                    >
                      Create New List
                    </span>
                  </label>
                  <br clear="all" />
                  <select
                    className="loginSelect form-control"
                    name="list_id"
                    id="listName"
                    data-required="true"
                    defaultValue={"Default List"}
                    onChange={(e) => {
                      listHandleChange(e);
                    }}
                    value={currentList}
                  >
                    <option value="Default List">Default List </option>
                    {props.userLists && props.userLists.length > 0
                      ? props.userLists.map((list) => {
                          return list.name != "Default List" ? (
                            <option value={list.name} key={list.name}>
                              {list.name}
                            </option>
                          ) : (
                            ""
                          );
                        })
                      : ""}
                  </select>
                </div>

                <div className="form-group">
                  <label className="loginLabel" title="qty">
                    Quantity:
                  </label>
                  <br clear="all" />
                  <input
                    className="loginInput form-control qtyInput"
                    type="tel"
                    id="listQty"
                    name="qty"
                    defaultValue={1}
                  />
                </div>
                <div className="modal-footer">
                  <button
                    className="btn btn-primary mybtn btn-add"
                    data-cartid="0"
                    onClick={(e) => {
                      addItemToWishList(
                        e,
                        props.currentProduct,
                        props.setFakeState
                      );

                      setWishListMode("added");
                    }}
                  >
                    Add to List
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary mybtn"
                    data-dismiss="modal"
                    onClick={(e) => {
                      setWishListMode("add");
                      props.setFakeState("OK");
                    }}
                  >
                    Close
                  </button>
                </div>
              </>
            ) : (
              ""
            )}
            {wishListMode == "create" ? (
              <>
                <div className="form-group">
                  <label className="loginLabel w-100" title="list_id">
                    List:{" "}
                    <span
                      className="pull-right float-right"
                      onClick={() => {
                        setWishListMode("add");
                      }}
                    >
                      Use Existing List
                    </span>
                  </label>
                  <br clear="all" />
                  <select
                    className="loginSelect form-control d-none"
                    name="list_id"
                    id="list_id"
                    data-required="true"
                  >
                    {props.userLists && props.userLists.length > 0
                      ? props.userLists.map((list) => {
                          return (
                            <option value={list.name} key={list.name}>
                              {list.name}
                            </option>
                          );
                        })
                      : ""}
                  </select>
                  <input
                    className="loginInput form-control"
                    type="text"
                    id="listName"
                    name="new_list"
                    placeholder="New List Name..."
                  />
                </div>

                <div className="form-group">
                  <label className="loginLabel" title="qty">
                    Quantity:
                  </label>
                  <br clear="all" />
                  <input
                    className="loginInput form-control qtyInput"
                    type="tel"
                    id="listQty"
                    defaultValue={1}
                    name="qty"
                  />
                </div>
                <div className="modal-footer">
                  <button
                    href="javascript:void(0);"
                    className="btn btn-primary mybtn btn-add"
                    onClick={(e) => {
                      addItemToWishList(
                        e,
                        props.currentProduct,
                        props.setFakeState
                      );

                      setWishListMode("added");
                    }}
                  >
                    Add to List
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary mybtn"
                    data-dismiss="modal"
                    onClick={() => {
                      setWishListMode("add");
                      props.setFakeState("OK");
                    }}
                  >
                    Close
                  </button>
                </div>
              </>
            ) : (
              ""
            )}

            {wishListMode == "added" ? (
              <>
                <div className="alert alert-success">
                  Item successfully added to list.
                </div>
                <div className="modal-footer">
                  <button
                    onClick={() => {
                      Router.push("/account");
                    }}
                    data-dismiss="modal"
                    className="btn btn-primary mybtn"
                  >
                    Manage List
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary mybtn"
                    data-dismiss="modal"
                    onClick={() => {
                      setWishListMode("add");
                      props.setFakeState("OK");
                    }}
                  >
                    Close
                  </button>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishListPopUp;
