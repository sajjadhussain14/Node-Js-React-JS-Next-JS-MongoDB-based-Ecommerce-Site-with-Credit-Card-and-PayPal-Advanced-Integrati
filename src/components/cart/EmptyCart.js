import React from "react";
import Link from "next/link";
import { csHandleChange } from "../../controllers/cart";

const EmptyCart = (props) => {
  return (
    <section id="cart" className="card">
      <div className="row">
        <div className="col-sm-12 main-content" id="cartPageInner">
          <nav className="celerant-breadcrumb breadcrumbs">
            <Link href="/">
              <a>Home</a>
            </Link>
            Cart
          </nav>
          <p>
            <strong>There are no items in your shopping bag.</strong>
          </p>
          <ul>
            <li>
              <Link href="/">
                <a title="Start Shopping">Start Shopping »</a>
              </Link>
            </li>
            <li>
              Having problems? Please{" "}
              <a href="mailto:orders@celerant.com" className="highlight">
                email us
              </a>{" "}
              or call <strong>(123) 456-789</strong>
            </li>
          </ul>
          <br />
          <button
            id="continue-shopping"
            className="btn btn-info"
            onClick={() => {
              csHandleChange();
            }}
          >
            Continue Shopping
          </button>
          <br clear="all" /> <br clear="all" />
        </div>
      </div>
    </section>
  );
};
export default EmptyCart;
