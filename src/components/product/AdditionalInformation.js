import React from "react";

const AdditionalInformation = (props) => {
  let getProducts = props.getProducts;
  return (
    <div className="row no-gutters">
      <div className="col-xl-12 col-lg-12 col-md-12  col-sm-12 col-12 pb-4 bg-white product-desc-container">
        <div id="exTab1" className="container-fluid">
          <ul className="nav nav-pills row" id="myTab" role="tablist">
            <li className="active col-4">
              <button
                className="nav-link active"
                id="desc-tab"
                data-bs-toggle="tab"
                data-bs-target="#desc"
                type="button"
                role="tab"
                aria-controls="desc"
                aria-selected="true"
              >
                Description
              </button>
            </li>
            <li className="col-4">
              <button
                lass="nav-link"
                id="specs-tab"
                data-bs-toggle="tab"
                data-bs-target="#specs"
                type="button"
                role="tab"
                aria-controls="specs"
                aria-selected="false"
              >
                Specs
              </button>
            </li>
            <li className="col-4">
              <button
                className="nav-link"
                id="rev-tab"
                data-bs-toggle="tab"
                data-bs-target="#rev"
                type="button"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                Reviews
              </button>
            </li>
          </ul>
          <div className="tab-content clearfix">
            <div
              className="tab-pane show active"
              id="desc"
              role="tabpanel"
              aria-labelledby="desc-tab"
            >
              <div className="card-body desc-content">
                <p>
                  <strong>
                    Note: This product must be shipped to an Federal Firearms
                    Licensed Dealer(FFL Dealer)
                  </strong>
                </p>
                <p>
                  <strong>Specifications:</strong>
                </p>
                <p></p>
              </div>
            </div>
            <div
              className="tab-pane"
              id="specs"
              role="tabpanel"
              aria-labelledby="specs-tab"
            >
              <div className="card-body desc-content">1</div>
            </div>
            <div
              className="tab-pane"
              id="rev"
              role="tabpanel"
              aria-labelledby="rev-tab"
            >
              <div className="card-body desc-content">
                <div id="CommentsTab">1</div>
                <div>
                  <h4 className="line-title">
                    <span style={{ border: "0px", margin: "15px 0 0 0" }}>
                      Leave a Review!
                    </span>
                  </h4>

                  <div className="row">
                    <form name="CFForm_2" id="CFForm_2" method="post">
                      <div className="col-sm-12 col-md-6  col-lg-4">
                        <input
                          name="styleid"
                          id="styleid"
                          type="hidden"
                          value="268743"
                        />
                        <input
                          name="style"
                          id="style"
                          type="hidden"
                          value="89014"
                        />
                        <input
                          name="brand"
                          id="brand"
                          type="hidden"
                          value="MOSSBERG"
                        />
                        <span style={{ fontWeight: "bold" }}>Name:</span>{" "}
                        <input
                          name="name"
                          id="name"
                          type="text"
                          className="form-control"
                        />
                        <span style={{ fontWeight: "bold" }}>Email:</span>{" "}
                        <input
                          name="email"
                          id="email"
                          type="text"
                          className="form-control"
                        />
                      </div>
                      <div className="col-sm-12 col-md-6  col-lg-4">
                        <span style={{ fontWeight: "bold" }}>
                          Review Title:
                        </span>
                        <input
                          name="title"
                          id="title"
                          type="text"
                          className="form-control"
                        />
                        <span style={{ fontWeight: "bold" }}>Review:</span>
                        <textarea
                          name="comment"
                          id="comment"
                          className="form-control"
                        ></textarea>
                        <span style={{ fontWeight: "bold" }}>Rating:</span>
                        <select
                          name="rating"
                          id="rating"
                          className="form-control"
                          size="1"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>
                      <div
                        className="col-sm-12 col-md-6  col-lg-4"
                        style={{ textAlign: "right", marginTop: "10px" }}
                      >
                        <input
                          className="btn-review"
                          type="submit"
                          value="Submit"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInformation;
