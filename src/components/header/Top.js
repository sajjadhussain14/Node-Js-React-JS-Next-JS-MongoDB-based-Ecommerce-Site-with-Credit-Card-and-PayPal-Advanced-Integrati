import React from "react";

const Top = () => {
  let { URL } = process.env;
  return (
    <section id="top">
      <div className="container">
        <div className="row">
          <section className="col-lg-6 col-md-6 col-sm-12 col-12 one text-left">
            <p>
              <a href="tel:+17183512000">
                <i className="fa fa-phone"></i>&nbsp; (718)-351-2000
              </a>
            </p>
          </section>
          <section className="col-lg-6 col-md-6 col-sm-12 col-12 one text-right">
            <p>
              <a
                href="https://www.instagram.com/company/celerant-technology"
                target="_blank"
                rel="noreferrer"
              >
                <img src={URL+"/images/header_instagram_icon.png"} />
              </a>
              <a
                href="https://www.facebook.com/CelerantTechnologyCorp"
                target="_blank"
                rel="noreferrer"
              >
                <img src={URL+"/images/header_facebook_icon.png"} />
              </a>
              <a
                href="https://twitter.com/celeranttech"
                target="_blank"
                rel="noreferrer"
              >
                <img src={URL+"/images/header_twitter_icon.png"} />
              </a>
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Top;
