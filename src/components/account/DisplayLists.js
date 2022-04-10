import React, { useState, useEffect } from "react";
import Link from "next/link";
import { deleteWishLists } from "../../controllers/wishlist";
import DisplayListitems from "../account/DisplayListItems";

const DisplayLists = (props) => {
  let userID = 0;
  if (typeof window != "undefined") {
    userID = localStorage.getItem("currentAliveUser");
  }
  let { URL } = process.env;

  let lists = [];
  lists = props.userLists;

  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
      {lists && lists.length > 0
        ? lists.map((list, index) => {
            let row = index + 1;
            return (
              <div className="accordion-item" key={list.name}>
                <h2 className="accordion-header" id={"flush-heading" + index}>
                  <span>
                    <em>{index + 1}</em>
                  </span>
                  <span>
                    Name<em>{list.name}</em>
                  </span>
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={"#flush-collapse" + index}
                    aria-expanded="false"
                    aria-controls={"flush-collapse" + index}
                    onClick={() => {
                      props.setListName(list.name);
                    }}
                  ></button>
                  <button
                    onClick={() => {
                      deleteWishLists(userID, list.name, props.setUserLists);
                    }}
                  >
                    <img className="m-0" src={URL + "/images/trash-2.svg"} />
                  </button>
                </h2>
                <div
                  id={"flush-collapse" + index}
                  className="accordion-collapse collapse"
                  aria-labelledby={"flush-heading" + index}
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <>
                      {list.name == props.listName ? (
                        <section id="cart">
                          <div className="row">
                            <div className="col-md-12 cart">
                              <DisplayListitems
                                wishListItems={props.wishListItems}
                                setUserLists={props.setUserLists}
                                userLists={props.userLists}
                                userID={userID}
                                listName={props.listName}
                                setListName={props.setListName}
                                setWishListChanged={props.setWishListChanged}
                              />
                            </div>
                          </div>
                        </section>
                      ) : (
                        ""
                      )}
                    </>
                  </div>
                </div>
              </div>
            );
          })
        : ""}
    </div>
  );
  return (
    <>
      <p>Click on the below List to View List Items</p>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>List</th>
            <th>View List Items</th>

            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {lists && lists.length > 0
            ? lists.map((list, index) => {
                let row = index + 1;
                return (
                  <tr key={list} className="cursor-pointer">
                    <td>{row}</td>
                    <td className="col-8">{list.name}</td>
                    <td
                      onClick={() => {
                        props.setListName(list.name);
                      }}
                    >
                      <i className="fa fa-eye" aria-hidden="true"></i> View
                    </td>
                    <td
                      onClick={() => {
                        deleteWishLists(userID, list.name, props.setUserLists);
                      }}
                    >
                      <i className="fas fa-trash" aria-hidden="false"></i>{" "}
                      Delete
                    </td>
                  </tr>
                );
              })
            : ""}
        </tbody>
      </table>
      <section id="cart" className="card">
        <div className="row">
          <div className="col-md-12 cart">
            <DisplayListitems
              wishListItems={props.wishListItems}
              setUserLists={props.setUserLists}
              userLists={props.userLists}
              userID={userID}
              listName={props.listName}
              setListName={props.setListName}
              setWishListChanged={props.setWishListChanged}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default DisplayLists;
