import React from "react";
import Link from "next/link";
import { logOut } from "../../controllers/account";

const HomeTabContent = (props) => {
  return (
    <div
      className="tab-pane active in"
      id="tabBody0"
      role="tabpanel"
      aria-labelledby="tab0"
      aria-hidden="false"
    >
      {props.currentTab && props.currentTab == "home" ? (
        <div>
          <div className="row">
            <div className="col-md-12">
              <div className="my-account">
                <h3 className="welcome">Welcome to your account.</h3>
                <p>
                  Thank you for shopping! If you have any questions regarding
                  your order, please call us at 718-350-2000 or email us at:
                  info@celerant.com
                </p>
                
                <ul className="list-unstyled">
                  <li>
                    <button
                      className="btn-danger"
                      onClick={() => {
                        logOut();
                      }}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default HomeTabContent;
