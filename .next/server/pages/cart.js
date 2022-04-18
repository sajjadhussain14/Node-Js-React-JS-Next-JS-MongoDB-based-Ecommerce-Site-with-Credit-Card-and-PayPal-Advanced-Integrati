"use strict";
(() => {
var exports = {};
exports.id = 9190;
exports.ids = [9190,7356];
exports.modules = {

/***/ 3722:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ cart)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./src/components/cart/EmptyCart.js
var EmptyCart = __webpack_require__(1210);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./src/controllers/cart.js
var controllers_cart = __webpack_require__(2358);
;// CONCATENATED MODULE: ./src/components/cart/CartContent.js





const CartContent = (props)=>{
    let { URL  } = process.env;
    let cart = [];
    cart = props.cartItems;
    if (!cart || cart.length < 1) {
        cart = [];
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        id: "cartContent",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row bg-light py-2 d-lg-flex d-md-flex d-none",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-2",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                            className: "mb-0",
                            children: "Image"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-3",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                            className: "mb-0",
                            children: "Description"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-3",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                            className: "mb-0",
                            children: "Quantity"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-2",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                            className: "mb-0",
                            children: "Price"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-2",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                            className: "mb-0",
                            children: "Total"
                        })
                    })
                ]
            }),
            cart && cart.length > 0 ? cart.map((product)=>{
                return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row ",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row main align-items-center border-bottom py-0 px-0",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-2 col-md-2 col-sm-6 col-6",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: product.product_url,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            className: "img-fluid",
                                            src: product.image
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-3 col-md-3 col-sm-6 col-6",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: product.product_url,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "row pbrand",
                                                children: product.brand.toLowerCase()
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "row pname",
                                                children: product.name.toLowerCase()
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "col-lg-3 col-md-3 col-sm-8 col-8 qtyInner",
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
                                        defaultValue: product.qty,
                                        min: "1",
                                        id: "qtyBox" + product.id,
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
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "javascript:void(0)",
                                        className: "p-0",
                                        onClick: ()=>{
                                            (0,controllers_cart/* removeItem */.cl)(product.id, props.setCart);
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "fas fa-trash ml-1"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-2 col-md-2 col-sm-4 col-5",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    className: "pprice",
                                    children: [
                                        "$",
                                        product.itemPrice.toFixed(2)
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-2 col-md-2 col-sm-4 col-5",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    className: "pprice",
                                    children: [
                                        "$ ",
                                        product.total.toFixed(2),
                                        " "
                                    ]
                                })
                            })
                        ]
                    })
                }, product.name);
            }) : ""
        ]
    });
};
/* harmony default export */ const cart_CartContent = (CartContent);
const updateQTY = (e, action, id, setCart)=>{
    let cartQty = 0;
    try {
        cartQty = document.getElementById("qtyBox" + id).value;
    } catch (err) {}
    if (cartQty.match(/[a-z]/i)) {
        alert("Please Enter a Valid Number");
        document.getElementById("qtyBox" + id).value = 1;
        return;
    }
    if (action == "increment") {
        cartQty = parseInt(cartQty) + 1;
        document.getElementById("qtyBox" + id).value = cartQty;
    } else if (action == "decrement") {
        cartQty = parseInt(cartQty) - 1;
        if (cartQty < 1) {
            cartQty = 1;
        }
        document.getElementById("qtyBox" + id).value = cartQty;
    } else {
        if (cartQty < 1) {
            cartQty = 1;
        }
        document.getElementById("qtyBox" + id).value = cartQty;
    }
    (0,controllers_cart/* UpdateCartQTY */.ls)(e, id, setCart, cartQty);
};

;// CONCATENATED MODULE: ./src/components/cart/CartSummary.js



const CartSummary = (props)=>{
    let { URL  } = process.env;
    let tax = 0;
    let subTotal = 0;
    let cart = [];
    cart = props.cartItems;
    if (!cart || cart.length < 1) {
        cart = {};
    }
    let cartTotal = 0;
    try {
        cartTotal = cart.reduce((prod, { total  })=>prod + total
        , 0);
        cartTotal = cartTotal.toFixed(2);
    } catch (err) {}
    subTotal = cartTotal + tax;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        id: "cartSummary",
        className: "col-md-4 summary",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("b", {
                        children: "Pricing Summary"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col",
                        style: {
                            paddingLeft: 0
                        },
                        children: [
                            "ITEMS",
                            " "
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col text-right",
                        children: cart.length
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col",
                        style: {
                            paddingLeft: 0
                        },
                        children: "CART TOTAL"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col text-right",
                        children: [
                            "$ ",
                            cartTotal
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col",
                        style: {
                            paddingLeft: 0
                        },
                        children: "TAX"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col text-right",
                        children: "$ 0.00"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col",
                        style: {
                            paddingLeft: 0
                        },
                        children: "TOTAL PRICE"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col text-right",
                        children: [
                            "$ ",
                            subTotal
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: URL + "/checkout",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    className: "btn",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            className: "mr-2",
                            src: URL + "/images/Group 131.svg"
                        }),
                        "CHECKOUT"
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const cart_CartSummary = (CartSummary);

;// CONCATENATED MODULE: ./src/components/cart/CartTop.js




const CartTop = (props)=>{
    let cart = [];
    try {
        cart = JSON.parse(localStorage.getItem("cart"));
    } catch (err) {}
    if (!cart || cart.length < 1) {
        cart = [];
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        id: "cartTop",
        className: "title mb-3 mt-5",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                    className: "col-12 text-center pb-2",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                        children: "Your Shopping Bag"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-12",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("small", {
                                children: [
                                    " (",
                                    cart.length,
                                    " items)"
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: " text-muted btn-light text-dark border-0 rounded py-2 px-3",
                                onClick: (e)=>{
                                    (0,controllers_cart/* clearCart */.LL)(e, props.setCart);
                                },
                                children: "Clear Cart"
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const cart_CartTop = (CartTop);

;// CONCATENATED MODULE: ./src/components/cart/Layout.js





const Layout = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        id: "cart",
        className: "container",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "row",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(cart_CartTop, {
                    cartItems: props.cart,
                    setCart: props.setCart
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-md-8 cart",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(cart_CartContent, {
                        cartItems: props.cart,
                        setCart: props.setCart
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(cart_CartSummary, {
                    cartItems: props.cart,
                    setCart: props.setCart
                })
            ]
        })
    });
};
/* harmony default export */ const cart_Layout = (Layout);

// EXTERNAL MODULE: ./src/components/header/Header.js + 5 modules
var Header = __webpack_require__(4264);
;// CONCATENATED MODULE: ./src/pages/cart.js






const Cart = (props)=>{
    let { URL  } = process.env;
    const { 0: cart , 1: setCart  } = (0,external_react_.useState)([]);
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(true);
    let cartValue = [];
    if (false) {}
    let cartData = [];
    if (false) {}
    let checkCart = "";
    try {
        checkCart = JSON.stringify(cartData);
    } catch (err) {}
    (0,external_react_.useEffect)(()=>{
        setCart(cartData);
        setLoading(false);
    }, [
        checkCart
    ]);
    if (false) {}
    let sum = 0;
    try {
        sum = cartData.reduce((prod, { total  })=>prod + total
        , 0);
    } catch (err1) {}
    if (loading) {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            style: {
                height: "400px"
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `overlay `,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "loading ",
                    children: [
                        "Loading....",
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "spinner-grow text-danger",
                            role: "status",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "visually-hidden",
                                children: "Loading..."
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "spinner-grow text-warning",
                            role: "status",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "visually-hidden",
                                children: "Loading..."
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "spinner-grow text-info",
                            role: "status",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "visually-hidden",
                                children: "Loading..."
                            })
                        })
                    ]
                })
            })
        });
    }
    if (!cart || cart.length < 1) {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {
                    taxonomy: props.taxonomy,
                    cartData: cartValue
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(EmptyCart/* default */.Z, {
                    cart: cart,
                    page: "cart"
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "View Cart | Optimized and SEO Friendly Demo Site"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "title",
                        content: "View Cart | Optimized and SEO Friendly Demo Site"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "View cart of Optimized and SEO Friendly Ecommerce site that will boost your sales and conversions"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "keywords",
                        content: "ecommerce, modern, SEO friendly, cumulus"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {
                taxonomy: props.taxonomy,
                cartData: cartValue
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(cart_Layout, {
                cart: cart,
                setCart: setCart
            })
        ]
    });
};
/* harmony default export */ const cart = (Cart);


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
var __webpack_exports__ = __webpack_require__.X(0, [5895,2623,5675,4524,4264,1210], () => (__webpack_exec__(3722)));
module.exports = __webpack_exports__;

})();