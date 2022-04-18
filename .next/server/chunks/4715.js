"use strict";
exports.id = 4715;
exports.ids = [4715];
exports.modules = {

/***/ 4715:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ footer_Footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/components/footer/CompanyIntro.js



const CompanyIntro = ()=>{
    let { URL  } = process.env;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "col-lg-3 col-md-6 col-12 unique",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                className: "nav-title collapsed",
                "data-toggle": "collapse",
                "data-target": "#accordtwo",
                "aria-expanded": "false",
                children: "company info"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                id: "accordtwo",
                className: "collapse",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: URL + "/info/privacy-policy",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: "Privacy Policy"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: URL + "/info/about-us",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: "About Us"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: URL + "/info/shipping-and-return",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: "Shipping and Returns"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        className: "nav-title collapsed",
                        "data-toggle": "collapse",
                        "data-target": "#accordtwo",
                        "aria-expanded": "false",
                        children: "Working Hours"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Monday - Friday 10AM - 8PM, Saturday 10AM - 6PM"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const footer_CompanyIntro = (CompanyIntro);

;// CONCATENATED MODULE: ./src/components/footer/CustomerService.js



const CustomerService = ()=>{
    let { URL  } = process.env;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "col-lg-3 col-md-6 col-12 unique",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                className: "nav-title collapsed",
                "data-toggle": "collapse",
                "data-target": "#accordzero",
                "aria-expanded": "false",
                children: "customer service"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "accordzero",
                className: "collapse",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: URL + "/info/your-account",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: "Your Account"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: URL + "/info/contact-us",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: "Contact Us"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: URL + "/info/gift-cards",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: "Gift Cards"
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const footer_CustomerService = (CustomerService);

;// CONCATENATED MODULE: ./src/components/footer/FooterBottom.js


const FooterBottom = ()=>{
    let { URL  } = process.env;
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        id: "footer-bottom",
        children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
            className: "copyright container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("section", {
                        className: "col-lg-4 col-md-4 col-12 text-left company",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            children: [
                                "ecommerce site by",
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    target: "_blank",
                                    rel: "noreferrer",
                                    href: "https://www.celerant.com/cumulus-retail/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        alt: "Cumulus retail logo",
                                        src: URL + "/images/iCumulus-logo.png",
                                        height: "100",
                                        width: "100"
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("section", {
                        className: "col-lg-4 col-md-3 col-12 text-center reserve",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            children: [
                                "\xa9 ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    id: "demo",
                                    children: "2022"
                                }),
                                "\xa0All Rights Reserved by Cumulus."
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        className: "col-lg-4 col-md-5 col-12 payment",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                target: "_blank",
                                rel: "noreferrer",
                                href: "/",
                                children: "Terms of Use"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                target: "_blank",
                                rel: "noreferrer",
                                href: "/",
                                children: "Privacy Policy"
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const footer_FooterBottom = (FooterBottom);

;// CONCATENATED MODULE: ./src/components/footer/Information.js



const Information = ()=>{
    let { URL  } = process.env;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "col-lg-3 col-md-6 col-12 unique",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                className: "nav-title collapsed",
                "data-toggle": "collapse",
                "data-target": "#accordone",
                "aria-expanded": "false",
                children: "information"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "accordone",
                className: "collapse",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: URL + "/info/terms-and-conditions",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: "Terms and Conditions"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: URL + "/info/visit-our-blog",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: "Visit Our Blog"
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const footer_Information = (Information);

;// CONCATENATED MODULE: ./src/components/footer/NewsLetter.js


const NewsLetter = ()=>{
    let { URL  } = process.env;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "col-lg-3 col-md-6 col-12 normal",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                action: "https://template1.cumulusbetasites.com/toolset/emailsignup.cfm",
                className: "navbar-form",
                method: "post",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        className: "nav-title",
                        children: "Subscribe Newsletter"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Our weekly newsletter provides you with the latest and most important happenings in the industry."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                        children: "Email:"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "form-control",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: "input",
                            name: "emailSubscription",
                            placeholder: "Enter e-mail address",
                            required: "required",
                            type: "text"
                        })
                    })
                ]
            }),
            " ",
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: "text-left",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://www.instagram.com/CelerantTechnologyCorp",
                        rel: "noreferrer",
                        target: "_blank",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            alt: "footer instagram",
                            src: URL + "/images/footer-instagram-icon.png",
                            className: "img-fluid"
                        })
                    }),
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://www.facebook.com/CelerantTechnologyCorp",
                        rel: "noreferrer",
                        target: "_blank",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            alt: "footer facebook",
                            src: URL + "/images/footer-facebook-icon.png",
                            className: "img-fluid"
                        })
                    }),
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://twitter.com/celeranttech",
                        rel: "noreferrer",
                        target: "_blank",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            alt: "footer twitter",
                            src: URL + "/images/footer-twitter-icon.png",
                            className: "img-fluid"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const footer_NewsLetter = (NewsLetter);

;// CONCATENATED MODULE: ./src/components/footer/Footer.js







const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "innerfooter",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row desktop",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(footer_CustomerService, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(footer_Information, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(footer_CompanyIntro, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(footer_NewsLetter, {})
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(footer_FooterBottom, {})
        ]
    });
};
/* harmony default export */ const footer_Footer = (Footer);


/***/ })

};
;