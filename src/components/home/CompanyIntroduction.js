import React from "react";
import Image from "next/image";

const CompanyIntroduction = () => {
  let { URL } = process.env;
  return (
    <>
      <section id="textvideo">
        <div className="container">
          <div className="row mx-0">
            <section className="col-lg-7 col-md-7 col-sm-12 col-12 p-0 text">
              <img
                className="img-fluid"
                alt="Minni banner 1"
                src={URL + "/images/welcome-bg.png"}
              />
            </section>
            <section className="col-lg-5 col-md-5 col-sm-12 col-12 p-0 video">
              <p>
                <h3>Firearms</h3>
                <span>
                  We sell firearms online, sale online firearms. We offer best
                  deals to purchase firearms at affordable price. We are dealing
                  in &apos;handguns&apos; also. this is &apos;our&apos; main
                  site that&apos;s
                </span>
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanyIntroduction;
