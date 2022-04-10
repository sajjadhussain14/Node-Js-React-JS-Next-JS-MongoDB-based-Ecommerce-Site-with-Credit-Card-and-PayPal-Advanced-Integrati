import React, { useState, useEffect } from "react";
import DisplayLists from "./DisplayLists";

const WishListTabContent = (props) => {
  const [wishListChanged, setWishListChanged] = useState("");

  return (
    <>
      {props.currentTab && props.currentTab == "wishlist" ? (
        <DisplayLists
          userLists={props.userLists}
          setUserLists={props.setUserLists}
          setWishListChanged={setWishListChanged}
          listName={props.listName}
          setListName={props.setListName}
          wishListItems={props.wishListItems}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default WishListTabContent;
