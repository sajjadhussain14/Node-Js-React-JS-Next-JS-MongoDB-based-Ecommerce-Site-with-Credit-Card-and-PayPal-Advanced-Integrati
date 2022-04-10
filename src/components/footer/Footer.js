import React from "react";
import CompanyIntro from "./CompanyIntro";
import CustomerService from "./CustomerService";
import FooterBottom from "./FooterBottom";
import Information from "./Information";
import NewsLetter from "./NewsLetter";

const Footer = () => {
  return (
    <footer>
      <section className="innerfooter">
        <div className="container">
          <div className="row desktop">
            <CustomerService />

            <Information />

            <CompanyIntro />

            <NewsLetter />
          </div>
        </div>
      </section>

      <FooterBottom />
    </footer>
  );
};

export default Footer;
