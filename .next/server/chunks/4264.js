"use strict";
exports.id = 4264;
exports.ids = [4264];
exports.modules = {

/***/ 4264:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ header_Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: ./src/components/header/Top.js


const Top = ()=>{
    let { URL  } = process.env;
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        id: "top",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("section", {
                        className: "col-lg-6 col-md-6 col-sm-12 col-12 one text-left",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "tel:+17183512000",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fa fa-phone"
                                    }),
                                    "\xa0 (718)-351-2000"
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("section", {
                        className: "col-lg-6 col-md-6 col-sm-12 col-12 one text-right",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://www.instagram.com/company/celerant-technology",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: URL + "/images/header_instagram_icon.png"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://www.facebook.com/CelerantTechnologyCorp",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: URL + "/images/header_facebook_icon.png"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://twitter.com/celeranttech",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: URL + "/images/header_twitter_icon.png"
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const header_Top = (Top);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./src/pages/account/LoginPopUp.js
var LoginPopUp = __webpack_require__(4524);
// EXTERNAL MODULE: external "jquery"
var external_jquery_ = __webpack_require__(2947);
// EXTERNAL MODULE: ./src/controllers/cart.js
var controllers_cart = __webpack_require__(2358);
;// CONCATENATED MODULE: ./src/components/header/DropCart.js




const DropCart = (props)=>{
    const { 0: cart , 1: setCart  } = (0,external_react_.useState)([]);
    const { 0: checkcart , 1: setcheckCart  } = (0,external_react_.useState)([]);
    let { URL  } = process.env;
    let cartItems = [];
    cartItems = props.cartItems;
    if (!cartItems || cartItems.length < 1) {
        cartItems = [];
    }
    let subtotal = 0;
    try {
        subtotal = cartItems.reduce((prod, { total  })=>prod + total
        , 0);
    } catch (err) {}
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "mini-cart ",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            id: "cartDrpDown",
            className: "sub-menu mini-cart-content",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mini-cart ",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "content-inner",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                            className: "box-title",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/cart",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "edtCart",
                                        children: "edit cart"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: void 0,
                                    onClick: (e)=>{
                                        e.preventDefault();
                                    },
                                    id: "dropCartCloser",
                                    className: "close",
                                    children: "x"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            className: "cartItem",
                            children: [
                                "items in cart: ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "count",
                                    children: cartItems.length
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            className: "list-item-cart",
                            children: cartItems.map((product)=>{
                                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: "item-cart active",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "thumb",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: URL + product.product_url,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "image anchor",
                                                    title: product.name,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: product.image,
                                                        alt: product.name
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "product-info",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "productBrand",
                                                    children: product.brand
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                    className: "product-name",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                        href: URL + product.product_url,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "",
                                                            className: "anchor",
                                                            children: product.name
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    className: "price",
                                                    children: [
                                                        "Price: ",
                                                        product.itemPrice
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    className: "price",
                                                    children: [
                                                        "QTY: ",
                                                        product.qty
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    className: "price",
                                                    children: [
                                                        "Total: $",
                                                        product.total.toFixed(2)
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            id: "cart",
                                                            className: "col-lg-8 col-md-8 col-sm-6 col-8 qtyInner p-0",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                    className: "minus",
                                                                    onClick: (e)=>{
                                                                        updateQTY(e, "decrement", product.id, props.setCart);
                                                                    },
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fa fa-minus"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                    type: "text",
                                                                    className: "form-control addminus",
                                                                    value: product.qty,
                                                                    min: "1",
                                                                    id: "qtyBox1" + product.id,
                                                                    name: "qty",
                                                                    onChange: (e)=>{
                                                                        updateQTY(e, "none", product.id, props.setCart);
                                                                    }
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                    className: "plus",
                                                                    onClick: (e)=>{
                                                                        updateQTY(e, "increment", product.id, props.setCart);
                                                                    },
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fa fa-plus"
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "|"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "javascript:0",
                                                            className: "",
                                                            onClick: ()=>{
                                                                (0,controllers_cart/* removeItem */.cl)(product.id, props.setCart);
                                                            },
                                                            "data-index": "11358",
                                                            children: "remove"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }, product.name);
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "subtotal",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                children: [
                                    "Subtotal:",
                                    " ",
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: "amount float-right",
                                        children: [
                                            "$",
                                            subtotal.toFixed(2)
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "action-btn",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/checkout",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        id: "cartCloser1",
                                        className: "btn btn-primary w-100",
                                        children: "CHECKOUT"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                    clear: "all"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/cart",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        id: "cartCloser2",
                                        className: "btn btn-secondary w-100",
                                        children: "SHOPPING BAG"
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const header_DropCart = (DropCart);
const updateQTY = (e, action, id, setCart)=>{
    let cartQty = 0;
    try {
        cartQty = document.getElementById("qtyBox1" + id).value;
    } catch (err) {}
    if (cartQty.match(/[a-z]/i)) {
        alert("Please Enter a Valid Number");
        document.getElementById("qtyBox1" + id).value = 1;
        return;
    }
    if (action == "increment") {
        cartQty = parseInt(cartQty) + 1;
        document.getElementById("qtyBox1" + id).value = cartQty;
    } else if (action == "decrement") {
        cartQty = parseInt(cartQty) - 1;
        if (cartQty < 1) {
            cartQty = 1;
        }
        document.getElementById("qtyBox1" + id).value = cartQty;
    } else {
        if (cartQty < 1) {
            cartQty = 1;
        }
        document.getElementById("qtyBox1" + id).value = cartQty;
    }
    (0,controllers_cart/* UpdateCartQTY */.ls)(e, id, setCart, cartQty);
};

// EXTERNAL MODULE: ./node_modules/next/dist/server/router.js
var router = __webpack_require__(3288);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: ./src/components/header/Middle.js









const Middle = (props)=>{
    const { 0: cart , 1: setCart  } = (0,external_react_.useState)([]);
    const { 0: checkcart , 1: setcheckCart  } = (0,external_react_.useState)([]);
    let { URL  } = process.env;
    let cartValue = [];
    if (false) {}
    (0,external_react_.useEffect)(()=>{
        cartValue = JSON.parse(localStorage.getItem("cart"));
    }, [
        JSON.stringify(cart)
    ]);
    let loginstatus = "";
    if (false) {}
    if (!loginstatus) {
        loginstatus = "";
    }
    let cartItems = 0;
    try {
        cartItems = cartValue;
    } catch (err) {}
    let cartLen = 0;
    try {
        cartLen = props.cartData.length;
    } catch (err1) {}
    if (false) {}
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(LoginPopUp["default"], {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                id: "middle",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(header_DropCart, {
                        cartItems: cartItems,
                        cart: cart,
                        setCart: setCart,
                        checkcart: checkcart,
                        setcheckCart: setcheckCart
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-3 col-md-3 col-sm-12 col-12 logo",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: URL,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    alt: "",
                                                    height: "110",
                                                    src: "https://template1.cumulusbetasites.com/ccms/default/assets/Image/logo.png",
                                                    width: "100"
                                                })
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-6 col-md-6 col-sm-12 col-12 search",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                        role: "search",
                                        action: "",
                                        method: "post",
                                        name: "myForm",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                name: "Search",
                                                placeholder: "Search ",
                                                id: "searchTxt",
                                                type: "text"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                type: "button",
                                                onClick: ()=>{
                                                    searchIt();
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: URL + "/images/header_search_icon.png"
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "col-lg-3 col-md-3 col-sm-4 col-12 profile",
                                    children: [
                                        loginstatus && loginstatus == "yes" ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            className: "accountIcon",
                                            onClick: ()=>{
                                                router_default().push("/account");
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fas fa-user"
                                                }),
                                                "My Account"
                                            ]
                                        }) : "",
                                        !loginstatus || loginstatus != "yes" ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                            type: "button",
                                            "data-toggle": "modal",
                                            "data-target": "#loginModal",
                                            className: "border-0 bg-transparent",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: URL + "/images/icon-account.png"
                                                }),
                                                "Sign in"
                                            ]
                                        }) : "",
                                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "javascript:void(0)",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                id: "header-cart",
                                                className: "cartDisp",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: URL + "/images/icon-cart.png"
                                                    }),
                                                    "cart",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        id: "header-cartQTY",
                                                        children: cartLen
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const header_Middle = (Middle);
const searchIt = ()=>{
    let searchValue = document.getElementById("searchTxt").value;
    if (!searchValue || searchValue == "") {
        alert("Please write something to search");
    } else {
        router_default().push("/browse/search/" + searchValue);
    }
};

;// CONCATENATED MODULE: ./src/controllers/header.js
const getDepts = (taxonomy)=>{
    let depts = [];
    if (!taxonomy || taxonomy.length < 1) {
        taxonomy = [];
    }
    depts = taxonomy.filter((category)=>category.TYP == "EMPTY"
    );
    if (!depts || depts == "") depts = [];
    return depts;
};
const getTyps = (taxonomy, dept)=>{
    let typs = [];
    typs = taxonomy.filter((category)=>category.DEPT == dept && category.SUBTYP_1 == "EMPTY" && category.TYP != "EMPTY"
    );
    if (!typs || typs == "") typs = [];
    return typs;
};

;// CONCATENATED MODULE: ./src/components/header/Nav.js





const Nav = (props)=>{
    let { URL  } = process.env;
    let taxonomy = props.taxonomy;
    let ShowDeptsOnly = [
        "firearms",
        "apparel",
        "ammunition",
        "archery",
        "accessories",
        "air guns",
        "gun parts", 
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
            className: "navbar navbar-expand-lg navbar-dark static-top",
            style: {
                position: "relative",
                top: "auto"
            },
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "navbar-toggler",
                        type: "button",
                        "data-toggle": "collapse",
                        "data-target": "#navbarResponsive",
                        "aria-controls": "navbarResponsive",
                        "aria-expanded": "false",
                        "aria-label": "Toggle navigation",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "navbar-toggler-icon"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "collapse navbar-collapse",
                        id: "navbarResponsive",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            className: "navbar-nav ml-auto",
                            id: "boxes",
                            children: getDepts(taxonomy) && getDepts(taxonomy).length > 0 ? getDepts(taxonomy).map((depts, index)=>{
                                if (ShowDeptsOnly.includes(depts.DEPT.toLowerCase())) {
                                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: "nav-item active ",
                                        "data-toggle": "collapse",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                type: "button",
                                                "data-toggle": "collapse",
                                                "data-target": "#down" + index,
                                                "aria-controls": "down" + index,
                                                "aria-expanded": "false",
                                                "aria-label": "Toggle navigation",
                                                id: "drop",
                                                className: "d-lg-none border-0 d-md-block d-sm-block d-block p-0 m-0 bg-transparent",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fa fa-angle-down"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: {
                                                    pathname: `${URL}/category/[slug]`,
                                                    query: {
                                                        slug: depts.URL
                                                    }
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "nav-link",
                                                    children: depts.DEPT.toLowerCase()
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                id: "down" + index,
                                                className: "dropdown-menu collapse",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "container",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "row",
                                                        children: getTyps(taxonomy, depts.DEPT) && getTyps(taxonomy, depts.DEPT).length > 0 ? getTyps(taxonomy, depts.DEPT).map((typs)=>{
                                                            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "col-ag-2 col-md-12 col-12 first",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                    href: {
                                                                        pathname: `${URL}/category/[slug]`,
                                                                        query: {
                                                                            slug: typs.URL
                                                                        }
                                                                    },
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        className: "title",
                                                                        children: typs.TYP.toLowerCase()
                                                                    })
                                                                })
                                                            }, typs.TYP);
                                                        }) : ""
                                                    })
                                                })
                                            })
                                        ]
                                    }, "deptLevel " + depts.DEPT);
                                }
                            }) : ""
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const header_Nav = (Nav);

;// CONCATENATED MODULE: ./src/components/header/Header.js






const Header = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(header_Top, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(header_Middle, {
                    cartData: props.cartData
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(header_Nav, {
                    taxonomy: props.taxonomy
                })
            ]
        })
    });
};
/* harmony default export */ const header_Header = (Header);


/***/ })

};
;