"use strict";
(() => {
var exports = {};
exports.id = 5405;
exports.ids = [5405,7356];
exports.modules = {

/***/ 8177:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./src/components/header/Header.js + 5 modules
var Header = __webpack_require__(4264);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./src/components/home/BrandSlider.js



//const OwlCarousel1 = dynamic(import("react-owl-carousel"), { ssr: false });


var $ = __webpack_require__(2947);
if (false) {}
const OwlCarousel = (0,dynamic["default"])(null, {
    loadableGenerated: {
        modules: [
            "..\\components\\home\\BrandSlider.js -> " + "react-owl-carousel"
        ]
    },
    ssr: false
});
const options = {
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: false,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1
        },
        400: {
            items: 2
        },
        600: {
            items: 3
        },
        700: {
            items: 4
        },
        1000: {
            items: 7
        }
    }
};
const BrandSlider = ()=>{
    let { URL  } = process.env;
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
            id: "brandslider",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-12 heading",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: "brands"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(OwlCarousel, {
                            className: "owl-theme",
                            loop: true,
                            margin: 0,
                            items: 7,
                            nav: true,
                            navText: [
                                '<img src="/images/Arrow_left.png" />',
                                '<img src="/images/Arrow_right.png" />', 
                            ],
                            dots: false,
                            animateIn: true,
                            ...options,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "item",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        alt: "brand logo",
                                        src: URL + "/images/brands/Bromley mountain logo.png",
                                        className: "img-fluid"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "item",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        alt: "brand logo",
                                        src: URL + "/images/brands/hunter-mountain.png",
                                        className: "img-fluid"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "item",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        alt: "brand logo",
                                        src: URL + "/images/brands/jiminy.png",
                                        className: "img-fluid"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "item",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        alt: "brand logo",
                                        src: URL + "/images/brands/PFM-Okemo.png",
                                        width: 90,
                                        height: 63,
                                        layout: "responsive",
                                        loading: "lazy",
                                        className: "img-fluid"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "item",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        alt: "brand logo",
                                        src: URL + "/images/brands/PFM-Okemo.png",
                                        className: "img-fluid"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "item",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        alt: "brand logo",
                                        src: URL + "/images/brands/stwejpg.png",
                                        className: "img-fluid"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "item",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        alt: "brand logo",
                                        src: URL + "/images/brands/white-face.png",
                                        className: "img-fluid"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "item",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        alt: "brand logo",
                                        src: "https://template1.cumulusbetasites.com/ccms/default/assets/Image/brand-smith-and-wesson.png",
                                        className: "img-fluid"
                                    })
                                }),
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "item",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        alt: "brand logo",
                                        src: "https://template1.cumulusbetasites.com/ccms/default/assets/Image/brand-smith-and-wesson.png",
                                        className: "img-fluid"
                                    })
                                }),
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "item",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        alt: "brand logo",
                                        src: "https://template1.cumulusbetasites.com/ccms/default/assets/Image/brand-smith-and-wesson.png",
                                        className: "img-fluid"
                                    })
                                }),
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "item",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        alt: "brand logo",
                                        src: "https://template1.cumulusbetasites.com/ccms/default/assets/Image/brand-smith-and-wesson.png",
                                        className: "img-fluid"
                                    })
                                }),
                                " "
                            ]
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const home_BrandSlider = (BrandSlider);

;// CONCATENATED MODULE: ./src/components/home/CompanyIntroduction.js



const CompanyIntroduction = ()=>{
    let { URL  } = process.env;
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
            id: "textvideo",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row mx-0",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("section", {
                            className: "col-lg-7 col-md-7 col-sm-12 col-12 p-0 text",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                width: 729,
                                height: 400,
                                layout: "responsive",
                                className: "img-fluid",
                                alt: "Minni banner 1",
                                src: URL + "/images/welcome-bg.png"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("section", {
                            className: "col-lg-5 col-md-5 col-sm-12 col-12 p-0 video",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        children: "Firearms"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "We sell firearms online, sale online firearms. We offer best deals to purchase firearms at affordable price. We are dealing in 'handguns' also. this is 'our' main site that's"
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const home_CompanyIntroduction = (CompanyIntroduction);

;// CONCATENATED MODULE: ./src/components/home/IndexSlider.js



const IndexSlider = ()=>{
    let { URL  } = process.env;
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
            id: "indexSlider",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container-fluid p-0",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        id: "carouselExampleIndicators",
                        className: "carousel slide",
                        "data-bs-ride": "carousel",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                class: "carousel-indicators",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        type: "button",
                                        "data-bs-target": "#carouselExampleIndicators",
                                        "data-bs-slide-to": "0",
                                        class: "active",
                                        "aria-current": "true",
                                        "aria-label": "Slide 1"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        type: "button",
                                        "data-bs-target": "#carouselExampleIndicators",
                                        "data-bs-slide-to": "1",
                                        "aria-label": "Slide 2"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        type: "button",
                                        "data-bs-target": "#carouselExampleIndicators",
                                        "data-bs-slide-to": "2",
                                        "aria-label": "Slide 3"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                                id: "sliderpictures",
                                className: "carousel-inner",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                                        className: "carousel-item",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                className: "img-fluid",
                                                alt: "banner 1",
                                                src: URL + "/images/main-banner/main-banner.png"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                                children: [
                                                    "banner text goes here ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis mattis aliquam faucibus purus."
                                                    }),
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: URL,
                                                        children: "shop now"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                                        className: "carousel-item",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                className: "img-fluid",
                                                alt: "banner 2",
                                                src: URL + "/images/main-banner/main-banner.png"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                                children: [
                                                    "banner text goes here2 ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis mattis aliquam faucibus purus."
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: URL,
                                                        children: "shop now"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                                        className: "carousel-item active",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                className: "img-fluid",
                                                alt: "banner 3",
                                                src: URL + "/images/main-banner/main-banner.png"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                                children: [
                                                    "banner text goes here3 ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis mattis aliquam faucibus purus."
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: URL,
                                                        children: "shop now"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "carousel-control-prev",
                                href: "#carouselExampleIndicators",
                                role: "button",
                                "data-slide": "prev",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    "aria-hidden": "true",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fas fa-angle-left"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "carousel-control-next",
                                href: "#carouselExampleIndicators",
                                role: "button",
                                "data-slide": "next",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    "aria-hidden": "true",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fas fa-angle-right"
                                    })
                                })
                            })
                        ]
                    })
                })
            })
        })
    });
};
/* harmony default export */ const home_IndexSlider = (IndexSlider);

;// CONCATENATED MODULE: ./src/components/home/MiniBanner1.js



const MiniBanner1 = ()=>{
    let { URL  } = process.env;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "col-lg-4 col-md-4 col-sm-12 col-12 half hover-effect hover-effect-10",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                width: 419,
                height: 282,
                layout: "responsive",
                className: "img-fluid",
                alt: "Minni banner 1",
                src: URL + "/images/mini-banner/mini-banner1.png"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "overlay",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                        children: "placeholder header"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "Lorem ipsum dolor sit amet"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://www.google.com",
                        children: "shop now"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const home_MiniBanner1 = (MiniBanner1);

;// CONCATENATED MODULE: ./src/components/home/MiniBanner2.js



const MiniBanner2 = ()=>{
    let { URL  } = process.env;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "col-lg-4 col-md-4 col-sm-12 col-12 half hover-effect hover-effect-10",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                width: 419,
                height: 282,
                layout: "responsive",
                src: URL + "/images/mini-banner/mini-banner2.png"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "overlay",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                        children: "placeholder header"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "Lorem ipsum dolor sit amet"
                    }),
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://www.google.com",
                        children: "shop now"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const home_MiniBanner2 = (MiniBanner2);

;// CONCATENATED MODULE: ./src/components/home/MiniBanner3.js



const MiniBanner3 = ()=>{
    let { URL  } = process.env;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "col-lg-4 col-md-4 col-sm-12 col-12 half hover-effect hover-effect-10",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                width: 419,
                height: 282,
                layout: "responsive",
                className: "img-fluid",
                alt: "Minni banner 2",
                src: URL + "/images/mini-banner/mini-banner2.png"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "overlay",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                        children: "placeholder header"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "Ammunition"
                    }),
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "http://template1icumulus-com.ntc5-p2stl.ezhostingserver.com/products/ammunition-centerfire-pistol",
                        children: "shop now"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const home_MiniBanner3 = (MiniBanner3);

;// CONCATENATED MODULE: ./src/components/home/Layout.js








const Layout = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        id: "index",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(home_IndexSlider, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                id: "threebanner",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(home_MiniBanner1, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(home_MiniBanner2, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(home_MiniBanner3, {})
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(home_CompanyIntroduction, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx(home_BrandSlider, {})
        ]
    });
};
/* harmony default export */ const home_Layout = (Layout);

;// CONCATENATED MODULE: ./src/pages/index.js




function Home(props) {
    let cartValue = [];
    if (false) {}
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Optimized and SEO Friendly Demo Site"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "title",
                        content: "Optimized and SEO Friendly Demo Site"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Optimized and SEO Friendly Ecommerce site that will boost your sales and conversions"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "keywords",
                        content: "ecommerce, modern, SEO friendly, cumulus"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "robots",
                        content: "index, follow"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {
                taxonomy: props.taxonomy,
                cartData: cartValue
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(home_Layout, {})
        ]
    });
};


/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 2947:
/***/ ((module) => {

module.exports = require("jquery");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 2779:
/***/ ((module) => {

module.exports = require("next/dist/server/request-meta.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 5753:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-match.js");

/***/ }),

/***/ 9521:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/prepare-destination.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 4241:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/routing-items.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5895,2623,5675,5152,4524,4264], () => (__webpack_exec__(8177)));
module.exports = __webpack_exports__;

})();