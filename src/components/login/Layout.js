import React from "react";

import Heading from "./Heading";
import Athenticated from "./Athenticated";
import LoginScreen from "./LoginScreen";
import CreateAccount from "./CreateAccount";

const Layout = (props) => {
  return (
    <section id="contentHolder">
      <div className="container" id="loginPageContainer">
        <div className="row">
          <Heading />
          <div className="loginPage col-6 mx-auto py-3">
            {props.screen && props.screen == "authenticated" ? (
              <>
                <Athenticated setScreen={props.setScreen} />
              </>
            ) : props.screen && props.screen == "login" ? (
              <LoginScreen setScreen={props.setScreen} />
            ) : (
              <CreateAccount setScreen={props.setScreen} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Layout;
