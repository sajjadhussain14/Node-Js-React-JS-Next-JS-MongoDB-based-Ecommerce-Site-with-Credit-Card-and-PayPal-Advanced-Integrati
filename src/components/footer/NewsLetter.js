import React from "react";

const NewsLetter = () => {
  let { URL } = process.env;
  return (
    <section className="col-lg-3 col-md-6 col-12 normal">
      <form
        action="https://template1.cumulusbetasites.com/toolset/emailsignup.cfm"
        className="navbar-form"
        method="post"
      >
        <h4 className="nav-title">Subscribe Newsletter</h4>
        <p>
          Our weekly newsletter provides you with the latest and most important
          happenings in the industry.
        </p>
        <strong>Email:</strong>
        <div className="form-control">
          <input
            className="input"
            name="emailSubscription"
            placeholder="Enter e-mail address"
            required="required"
            type="text"
          />
        </div>
      </form>{" "}
      <p className="text-left">
        <a
          href="https://www.instagram.com/CelerantTechnologyCorp"
          rel="noreferrer"
          target="_blank"
        >
          <i class="fab fa-instagram" aria-hidden="true"></i>
        </a>
        <a
          href="https://www.facebook.com/CelerantTechnologyCorp"
          rel="noreferrer"
          target="_blank"
        >
          <i class="fab fa-facebook" aria-hidden="true"></i>
        </a>
        <a
          href="https://twitter.com/celeranttech"
          rel="noreferrer"
          target="_blank"
        >
          <i class="fab fa-twitter" aria-hidden="true"></i>
        </a>
      </p>
    </section>
  );
};

export default NewsLetter;
