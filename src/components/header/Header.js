import React from "react";
import { useSelector } from "react-redux";

import Top from "./Top";
import Middle from "./Middle";
import Nav from "./Nav";

const Header = (props) => {
  return (
    <>
      <header>
        <Top />
        <Middle cartData={props.cartData} />
        <Nav taxonomy={props.taxonomy} />
      </header>
    </>
  );
};

export default Header;
