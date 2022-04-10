import React from "react";

const FooterBottom = () => {
  let { URL } = process.env;
  return (
    <section id="footer-bottom">
      <section className="copyright container">
        <div className="row">
        <section className="col-lg-4 col-md-4 col-12 text-left company">
            <p>
              ecommerce site by{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.celerant.com/cumulus-retail/"
              >
                <img
                  alt="Cumulus retail logo"
                  src={URL+"/images/iCumulus-logo.png"}
                  height="100"
                  width="100"
                />
              </a>
            </p>
          </section>

          <section className="col-lg-4 col-md-3 col-12 text-center reserve">
            <p>
              © <span id="demo">2022</span>&nbsp;All Rights Reserved by Cumulus.
            </p>
          </section>
          <section className="col-lg-4 col-md-5 col-12 payment">
          <a
                target="_blank"
                rel="noreferrer"
                href="/"
              >
                Terms of Use
              </a>

              <a
                target="_blank"
                rel="noreferrer"
                href="/"
              >
                Privacy Policy
              </a>
          </section>
          
        </div>
      </section>
    </section>
  );
};

export default FooterBottom;
