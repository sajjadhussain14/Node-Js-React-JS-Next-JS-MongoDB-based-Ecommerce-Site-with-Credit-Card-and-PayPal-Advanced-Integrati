import React from "react";

const error = () => {
  return (
    <div>
      <section id="contentHolder">
        <div id="category">
          <div className="container">
            <div className="row">
              <div class="alert alert-warning" role="alert">
                Something Went Wrong! Please Try Again.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default error;
