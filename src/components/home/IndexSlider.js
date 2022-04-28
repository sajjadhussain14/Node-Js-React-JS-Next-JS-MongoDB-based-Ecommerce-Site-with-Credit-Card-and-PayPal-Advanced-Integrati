import React from "react";
import Image from "next/image";

const IndexSlider = () => {
  let { URL } = process.env;

  return (
    <>
      <section id="indexSlider">
        <div className="container-fluid p-0">
          <div className="row">
            <section
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>

              <section id="sliderpictures" className="carousel-inner">
                <section className="carousel-item">
                  <Image
                    className="img-fluid"
                    alt="banner 1"
                    src={URL + "/images/main-banner/main-banner.png"}
                    width={1335}
                    height={327}
                    loading="lazy"
                  />
                  <h2>
                    banner text goes here <br />
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Lobortis mattis aliquam faucibus purus.
                    </span>{" "}
                    <a href={URL}>shop now</a>
                  </h2>
                </section>

                <section className="carousel-item">
                  <Image
                    className="img-fluid"
                    alt="banner 2"
                    src={URL + "/images/main-banner/main-banner.png"}
                    width={1335}
                    height={327}
                    loading="lazy"
                  />

                  <h2>
                    banner text goes here2 <br />
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Lobortis mattis aliquam faucibus purus.
                    </span>
                    <a href={URL}>shop now</a>
                  </h2>
                </section>

                <section className="carousel-item active">
                  <Image
                    className="img-fluid"
                    alt="banner 3"
                    src={URL + "/images/main-banner/main-banner.png"}
                    width={1335}
                    height={327}
                    layout="responsive"
                    loading="lazy"
                  />
                  <h2>
                    banner text goes here3 <br />
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Lobortis mattis aliquam faucibus purus.
                    </span>
                    <a href={URL}>shop now</a>
                  </h2>
                </section>
              </section>

              <a
                className="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span aria-hidden="true">
                  <i className="fas fa-angle-left"></i>
                </span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span aria-hidden="true">
                  <i className="fas fa-angle-right"></i>
                </span>
              </a>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default IndexSlider;
