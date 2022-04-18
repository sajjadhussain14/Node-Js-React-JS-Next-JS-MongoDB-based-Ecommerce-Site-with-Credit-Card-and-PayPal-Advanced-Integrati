"use strict";
(() => {
var exports = {};
exports.id = 7966;
exports.ids = [7966,7356];
exports.modules = {

/***/ 1849:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_account)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "jquery"
var external_jquery_ = __webpack_require__(2947);
// EXTERNAL MODULE: ./src/controllers/wishlist.js
var wishlist = __webpack_require__(2836);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/components/account/Breadcrumbs.js



const Breadcrumbs = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        id: "BreadCrumbs",
        className: "col-12 pt-3 d-none",
        children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
            "aria-label": "breadcrumb",
            className: "bg-transparent p-0",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ol", {
                className: "breadcrumb bg-transparent p-0",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "breadcrumb-item",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "text-dark text-decoration-none",
                                children: "Home"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "breadcrumb-item active",
                        "aria-current": "page",
                        children: "My Account"
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const account_Breadcrumbs = (Breadcrumbs);

// EXTERNAL MODULE: ./src/controllers/account.js
var account = __webpack_require__(961);
;// CONCATENATED MODULE: ./src/components/account/TabsHeadings.js



const TabsHeadings = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        id: "tabs-heading",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
            className: "nav nav-tabs fancyTabs",
            role: "tablist",
            id: "MyAccountTabs",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                    className: "tab fancyTab active",
                    onClick: (e)=>{
                        loadHome(e, "account", props.setUserData, props.setCurrentTab);
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "arrow-down",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "arrow-down-inner"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            id: "tab0",
                            href: "#tabBody0",
                            role: "tab",
                            "aria-controls": "tabBody0",
                            "aria-selected": "true",
                            "data-bs-toggle": "tab",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "fa fa-home"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "d-inline-block",
                                    children: "Home"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "whiteBlock"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                    className: "tab fancyTab",
                    onClick: (e)=>{
                        loadBilling(e, "account", props.setUserData, props.setCurrentTab);
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "arrow-down",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "arrow-down-inner"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            id: "tab1",
                            href: "#tabBody1",
                            role: "tab",
                            "aria-controls": "tabBody1",
                            "aria-selected": "true",
                            "data-bs-toggle": "tab",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "fa fa-users-cog"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "d-inline-block",
                                    children: "Billing Address"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "whiteBlock"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                    className: "tab fancyTab",
                    onClick: (e)=>{
                        loadShipping(e, "account", props.setUserData, props.setCurrentTab);
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "arrow-down",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "arrow-down-inner"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            id: "tab2",
                            href: "#tabBody2",
                            role: "tab",
                            "aria-controls": "tabBody2",
                            "aria-selected": "true",
                            "data-bs-toggle": "tab",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "fa fa-address-book"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "d-inline-block",
                                    children: "Shipping Address"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "whiteBlock"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                    className: "tab fancyTab",
                    onClick: (e)=>{
                        loadOrders(e, "account", props.setUserData, props.setCurrentTab);
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "arrow-down",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "arrow-down-inner"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            id: "tab3",
                            href: "#tabBody3",
                            role: "tab",
                            "aria-controls": "tabBody3",
                            "aria-selected": "true",
                            "data-bs-toggle": "tab",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "fa fa-boxes"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "d-inline-block",
                                    children: "order"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "whiteBlock"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                    className: "tab fancyTab",
                    onClick: (e)=>{
                        loadWishlist(e, "account", props.setUserData, props.setCurrentTab);
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "arrow-down",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "arrow-down-inner"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            id: "tab4",
                            href: "#tabBody4",
                            role: "tab",
                            "aria-controls": "tabBody4",
                            "aria-selected": "true",
                            "data-bs-toggle": "tab",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "fa fa-gifts"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "d-inline-block",
                                    children: "wishlist"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "whiteBlock"
                        })
                    ]
                })
            ]
        })
    });
};
const loadShipping = async (e, frompage, setUserData, setCurrentTab)=>{
    setCurrentTab("shipping");
    let user = await (0,account/* getCurrentUserData */.Ts)(e);
    setUserData(user);
};
const loadHome = (e, frompage, setUserData, setCurrentTab)=>{
    setCurrentTab("home");
};
const loadBilling = async (e, frompage, setUserData, setCurrentTab)=>{
    setCurrentTab("billing");
    let user = await (0,account/* getCurrentUserData */.Ts)(e);
    setUserData(user);
};
const loadOrders = (e, frompage, setUserData, setCurrentTab)=>{
    setCurrentTab("orders");
};
const loadWishlist = (e, frompage, setUserData, setCurrentTab)=>{
    setCurrentTab("wishlist");
};
/* harmony default export */ const account_TabsHeadings = (TabsHeadings);

;// CONCATENATED MODULE: ./src/components/account/HomeTabContent.js




const HomeTabContent = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "tab-pane active in",
        id: "tabBody0",
        role: "tabpanel",
        "aria-labelledby": "tab0",
        "aria-hidden": "false",
        children: props.currentTab && props.currentTab == "home" ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-md-12",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "my-account",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "welcome",
                                children: "Welcome to your account."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Thank you for shopping! If you have any questions regarding your order, please call us at 718-350-2000 or email us at: info@celerant.com"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                className: "list-unstyled",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: "btn-danger",
                                        onClick: ()=>{
                                            (0,account/* logOut */.ni)();
                                        },
                                        children: "Logout"
                                    })
                                })
                            })
                        ]
                    })
                })
            })
        }) : ""
    });
};
/* harmony default export */ const account_HomeTabContent = (HomeTabContent);

;// CONCATENATED MODULE: ./src/components/account/BillingAddress.js



const BillingAddress = (props)=>{
    const { 0: editBillingFlag , 1: setEditBillingFlag  } = (0,external_react_.useState)(false);
    let fname = "";
    let lname = "";
    let phone = "";
    let email = "";
    let password = "";
    let address1 = "";
    let address2 = "";
    let city = "";
    let state = "";
    let zcode = "";
    let country = "";
    try {
        fname = props.userData.billing.first_name;
    } catch (err) {}
    try {
        lname = props.userData.billing.last_name;
    } catch (err1) {}
    try {
        phone = props.userData.billing.phone;
    } catch (err2) {}
    try {
        email = props.userData.billing.email;
    } catch (err3) {}
    try {
        password = props.userData.billing.password;
    } catch (err4) {}
    try {
        address1 = props.userData.billing.address1;
    } catch (err5) {}
    try {
        address2 = props.userData.billing.address2;
    } catch (err6) {}
    try {
        city = props.userData.billing.city;
    } catch (err7) {}
    try {
        state = props.userData.billing.state;
    } catch (err8) {}
    try {
        zcode = props.userData.billing.zip_code;
    } catch (err9) {}
    try {
        country = props.userData.billing.country;
    } catch (err10) {}
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row",
                children: fname && fname != "" && editBillingFlag == false ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "col-lg-12 col-md-12 col-sm-12 col-12",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: fname + " " + lname
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: address1
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: address2
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            children: [
                                state,
                                ", ",
                                zcode
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: country
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "edit text-info",
                            href: "javascript:;",
                            onClick: (e)=>{
                                setEditBillingFlag(true);
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                children: " Edit"
                            })
                        })
                    ]
                }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                    children: editBillingFlag == false ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            "No Billing Address Found. \xa0\xa0",
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: " btn btn-secondary",
                                href: "javascript:;",
                                onClick: (e)=>{
                                    setEditBillingFlag(true);
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                    children: " Enter Billing Address"
                                })
                            })
                        ]
                    }) : ""
                })
            }),
            editBillingFlag ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-md-12",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("form", {
                        name: "billingForm",
                        id: "billingForm",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            id: "divAddressContainer",
                            className: "row",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "accountHolder col-12 col-sm-6",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                    title: "emailAddress",
                                                    className: "loginLabel form-label",
                                                    children: "First Name:*"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                                    clear: "all"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    name: "first_name",
                                                    type: "text",
                                                    defaultValue: fname,
                                                    id: "first_name",
                                                    className: "loginInput form-control"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                    title: "emailAddress",
                                                    className: "loginLabel form-label",
                                                    children: "Last Name:*"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                                    clear: "all"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    name: "last_name",
                                                    type: "text",
                                                    defaultValue: lname,
                                                    alt: "last_name",
                                                    id: "last_name",
                                                    className: "loginInput form-control"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                    title: "emailAddress",
                                                    className: "loginLabel form-label",
                                                    children: "Phone:*"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                                    clear: "all"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    name: "phone1",
                                                    type: "text",
                                                    defaultValue: phone,
                                                    alt: "phone1",
                                                    id: "phone",
                                                    className: "loginInput form-control"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                    title: "emailAddress",
                                                    className: "loginLabel form-label",
                                                    children: "Email Address:*"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                                    clear: "all"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    name: "Email1",
                                                    type: "text",
                                                    defaultValue: email,
                                                    alt: "Email1",
                                                    id: "email",
                                                    className: "loginInput form-control"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                    title: "passwrd",
                                                    className: "loginLabel form-label",
                                                    children: "Password:"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                                    className: "clear"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    name: "password",
                                                    type: "password",
                                                    defaultValue: password,
                                                    alt: "password",
                                                    id: "password",
                                                    className: "loginInput form-control"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "accountHolder col-12 col-sm-6",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                    title: "emailAddress",
                                                    className: "loginLabel form-label",
                                                    children: "Street:*"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                                    clear: "all"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    name: "address1",
                                                    type: "text",
                                                    defaultValue: address1,
                                                    maxLength: "30",
                                                    id: "address1",
                                                    className: "loginInput form-control"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                    title: "emailAddress",
                                                    className: "loginLabel form-label",
                                                    children: "Unit/Suite:"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                                    clear: "all"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    type: "text",
                                                    id: "address2",
                                                    name: "address2",
                                                    className: "loginInput form-control",
                                                    defaultValue: address2
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                    title: "emailAddress",
                                                    className: "loginLabel form-label",
                                                    children: "City:*"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                                    clear: "all"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    name: "City",
                                                    type: "text",
                                                    defaultValue: city,
                                                    id: "city",
                                                    className: "loginInput form-control"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                    title: "state",
                                                    className: "loginLabel form-label",
                                                    children: "State:*"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                                    clear: "all"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                                    name: "state",
                                                    className: "loginSelect",
                                                    id: "state",
                                                    defaultValue: state,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "--",
                                                            children: "--"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "AL",
                                                            "data-type": "STATE",
                                                            children: "Alabama"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "AK",
                                                            "data-type": "STATE",
                                                            children: "Alaska"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "AZ",
                                                            "data-type": "STATE",
                                                            children: "Arizona"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "AR",
                                                            "data-type": "STATE",
                                                            children: "Arkansas"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "CA",
                                                            "data-type": "STATE",
                                                            children: "California"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "CO",
                                                            "data-type": "STATE",
                                                            children: "Colorado"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "CT",
                                                            "data-type": "STATE",
                                                            children: "Connecticut"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "DE",
                                                            "data-type": "STATE",
                                                            children: "Delaware"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "DC",
                                                            "data-type": "STATE",
                                                            children: "District of Columbia"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "FL",
                                                            "data-type": "STATE",
                                                            children: "Florida"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "GA",
                                                            "data-type": "STATE",
                                                            children: "Georgia"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "ID",
                                                            "data-type": "STATE",
                                                            children: "Idaho"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "IL",
                                                            "data-type": "STATE",
                                                            children: "Illinois"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "IN",
                                                            "data-type": "STATE",
                                                            children: "Indiana"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "IA",
                                                            "data-type": "STATE",
                                                            children: "Iowa"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "KS",
                                                            "data-type": "STATE",
                                                            children: "Kansas"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "KY",
                                                            "data-type": "STATE",
                                                            children: "Kentucky"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "LA",
                                                            "data-type": "STATE",
                                                            children: "Louisiana"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "ME",
                                                            "data-type": "STATE",
                                                            children: "Maine"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "MD",
                                                            "data-type": "STATE",
                                                            children: "Maryland"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "MA",
                                                            "data-type": "STATE",
                                                            children: "Massachusetts"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "MI",
                                                            "data-type": "STATE",
                                                            children: "Michigan"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "MN",
                                                            "data-type": "STATE",
                                                            children: "Minnesota"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "MS",
                                                            "data-type": "STATE",
                                                            children: "Mississippi"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "MO",
                                                            "data-type": "STATE",
                                                            children: "Missouri"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "MT",
                                                            "data-type": "STATE",
                                                            children: "Montana"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "NE",
                                                            "data-type": "STATE",
                                                            children: "Nebraska"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "NV",
                                                            "data-type": "STATE",
                                                            children: "Nevada"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "NH",
                                                            "data-type": "STATE",
                                                            children: "New Hampshire"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "NJ",
                                                            "data-type": "STATE",
                                                            children: "New Jersey"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "NM",
                                                            "data-type": "STATE",
                                                            children: "New Mexico"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "NY",
                                                            "data-type": "STATE",
                                                            children: "New York"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "NC",
                                                            "data-type": "STATE",
                                                            children: "North Carolina"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "ND",
                                                            "data-type": "STATE",
                                                            children: "North Dakota"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "OH",
                                                            "data-type": "STATE",
                                                            children: "Ohio"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "OK",
                                                            "data-type": "STATE",
                                                            children: "Oklahoma"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "OR",
                                                            "data-type": "STATE",
                                                            children: "Oregon"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "PA",
                                                            "data-type": "STATE",
                                                            children: "Pennsylvania"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "RI",
                                                            "data-type": "STATE",
                                                            children: "Rhode Island"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "SC",
                                                            "data-type": "STATE",
                                                            children: "South Carolina"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "SD",
                                                            "data-type": "STATE",
                                                            children: "South Dakota"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "TN",
                                                            "data-type": "STATE",
                                                            children: "Tennessee"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "TX",
                                                            "data-type": "STATE",
                                                            children: "Texas"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "UT",
                                                            "data-type": "STATE",
                                                            children: "Utah"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "VT",
                                                            "data-type": "STATE",
                                                            children: "Vermont"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "VA",
                                                            "data-type": "STATE",
                                                            children: "Virginia"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "WA",
                                                            "data-type": "STATE",
                                                            children: "Washington"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "WV",
                                                            "data-type": "STATE",
                                                            children: "West Virginia"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "WI",
                                                            "data-type": "STATE",
                                                            children: "Wisconsin"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "WY",
                                                            "data-type": "STATE",
                                                            children: "Wyoming"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                    title: "emailAddress",
                                                    className: "loginLabel form-label",
                                                    children: "Zip Code:*"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                                    clear: "all"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    name: "ZIP",
                                                    type: "text",
                                                    defaultValue: zcode,
                                                    maxLength: "10",
                                                    id: "zip_code",
                                                    className: "loginInput form-control"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                    title: "emailAddress",
                                                    className: "loginLabel form-label",
                                                    children: "Country:*"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                                    clear: "all"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("select", {
                                                    name: "country",
                                                    className: "loginSelect",
                                                    id: "country",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                        value: "US",
                                                        defaultValue: country,
                                                        children: "United States"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "col-12 actionBtns",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            className: "btn btn-secondary",
                                            onClick: ()=>{
                                                setEditBillingFlag(false);
                                            },
                                            children: "Cancel"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            type: "button",
                                            name: "SubmitInfo",
                                            className: "btn btn-primary",
                                            onClick: (e)=>{
                                                UpdateBilling(e, props.userData, setEditBillingFlag, props.setUserData);
                                            },
                                            children: "Save & Continue"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    id: "update-user",
                                    className: "alert d-none",
                                    role: "alert"
                                })
                            ]
                        })
                    })
                })
            }) : ""
        ]
    });
};
const UpdateBilling = async (e, userData, setEditBillingFlag, setUserData)=>{
    e.preventDefault();
    let { URL  } = process.env;
    let billing = {
        first_name: document.getElementById("first_name").value,
        last_name: document.getElementById("last_name").value,
        phone: document.getElementById("phone").value,
        address1: document.getElementById("address1").value,
        address2: document.getElementById("address2").value,
        email: document.getElementById("email").value,
        city: document.getElementById("city").value,
        state: document.getElementById("state").value,
        zip_code: document.getElementById("zip_code").value,
        country: document.getElementById("country").value
    };
    let newUser = userData;
    newUser = {
        ...newUser,
        billing: billing
    };
    let response = await (0,account/* updateAccountInfo */.ZC)(e, newUser);
    let uAlert = document.getElementById("update-user");
    if (response.status == 200) {
        try {
            uAlert.classList.remove("d-none");
        } catch (err) {}
        try {
            uAlert.classList.remove("alert-danger");
        } catch (err11) {}
        try {
            uAlert.classList.add("alert-primary");
        } catch (err12) {}
        uAlert.innerHTML = "Updates Billing Information  Successfully";
    } else {
        try {
            uAlert.classList.remove("d-none");
        } catch (err) {}
        try {
            uAlert.classList.remove("alert-primary");
        } catch (err13) {}
        try {
            uAlert.classList.add("alert-danger");
        } catch (err14) {}
        uAlert.innerHTML = "Failed. Please Try Again";
    }
    setTimeout(()=>{
        try {
            uAlert.classList.add("d-none");
        } catch (err) {}
        uAlert.innerHTML = "";
        setEditBillingFlag(false);
    }, 3000);
    let user = await (0,account/* getCurrentUserData */.Ts)(e);
    setUserData(user);
};
/* harmony default export */ const account_BillingAddress = (BillingAddress);

;// CONCATENATED MODULE: ./src/components/account/BillingAddressTab.js



const PersonalInformationTabContent = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "tab-pane fade",
        id: "tabBody1",
        role: "tabpanel",
        "aria-labelledby": "tab1",
        "aria-hidden": "true",
        children: props.currentTab && props.currentTab == "billing" ? /*#__PURE__*/ jsx_runtime_.jsx(account_BillingAddress, {
            userData: props.userData,
            setUserData: props.setUserData
        }) : ""
    });
};
/* harmony default export */ const BillingAddressTab = (PersonalInformationTabContent);

;// CONCATENATED MODULE: ./src/components/account/ShippingAddress.js



const ShippingAddress = (props)=>{
    const { 0: editShippingFlag , 1: setEditShippingFlag  } = (0,external_react_.useState)(false);
    let fname = "";
    let lname = "";
    let phone = "";
    let email = "";
    let password = "";
    let address1 = "";
    let address2 = "";
    let city = "";
    let state = "";
    let zcode = "";
    let country = "";
    try {
        fname = props.userData.shipping.first_name;
    } catch (err) {}
    try {
        lname = props.userData.shipping.last_name;
    } catch (err1) {}
    try {
        phone = props.userData.shipping.phone;
    } catch (err2) {}
    try {
        email = props.userData.shipping.email;
    } catch (err3) {}
    try {
        password = props.userData.shipping.password;
    } catch (err4) {}
    try {
        address1 = props.userData.shipping.address1;
    } catch (err5) {}
    try {
        address2 = props.userData.shipping.address2;
    } catch (err6) {}
    try {
        city = props.userData.shipping.city;
    } catch (err7) {}
    try {
        state = props.userData.shipping.state;
    } catch (err8) {}
    try {
        zcode = props.userData.shipping.zip_code;
    } catch (err9) {}
    try {
        country = props.userData.shipping.country;
    } catch (err10) {}
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            fname && fname != "" && editShippingFlag == false ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "col-lg-12 col-md-12 col-sm-12 col-12",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: fname + " " + lname
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: address1
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: address2
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            children: [
                                state,
                                ", ",
                                zcode
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: country
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "edit text-info",
                            href: "javascript:;",
                            onClick: (e)=>{
                                setEditShippingFlag(true);
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                children: " Edit"
                            })
                        })
                    ]
                })
            }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: editShippingFlag == false ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        "No Shipping Address Found. \xa0\xa0",
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: " btn btn-secondary",
                            href: "javascript:;",
                            onClick: (e)=>{
                                setEditShippingFlag(true);
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                children: " Enter Shipping Address"
                            })
                        })
                    ]
                }) : ""
            }),
            editShippingFlag ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-md-12",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("form", {
                        name: "billingForm",
                        id: "billingForm",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            id: "divAddressContainer",
                            className: "row",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "accountHolder col-12 col-sm-6",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                    title: "emailAddress",
                                                    className: "loginLabel form-label",
                                                    children: "First Namesss:*"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                                    clear: "all"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    name: "first_name",
                                                    type: "text",
                                                    defaultValue: fname,
                                                    id: "first_name",
                                                    className: "loginInput form-control"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                    title: "emailAddress",
                                                    className: "loginLabel form-label",
                                                    children: "Last Name:*"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                                    clear: "all"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    name: "last_name",
                                                    type: "text",
                                                    defaultValue: lname,
                                                    alt: "last_name",
                                                    id: "last_name",
                                                    className: "loginInput form-control"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                    title: "emailAddress",
                                                    className: "loginLabel form-label",
                                                    children: "Phone:*"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                                    clear: "all"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    name: "phone",
                                                    type: "text",
                                                    defaultValue: phone,
                                                    alt: "phone1",
                                                    id: "phone",
                                                    className: "loginInput form-control"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                    title: "emailAddress",
                                                    className: "loginLabel form-label",
                                                    children: "Email Address:*"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                                    clear: "all"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    name: "Email1",
                                                    type: "text",
                                                    defaultValue: email,
                                                    alt: "Email1",
                                                    id: "email",
                                                    className: "loginInput form-control"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "accountHolder col-12 col-sm-6",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                    title: "emailAddress",
                                                    className: "loginLabel form-label",
                                                    children: "Street:*"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                                    clear: "all"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    name: "address1",
                                                    type: "text",
                                                    defaultValue: address1,
                                                    maxLength: "30",
                                                    id: "address1",
                                                    className: "loginInput form-control"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                    title: "emailAddress",
                                                    className: "loginLabel form-label",
                                                    children: "Unit/Suite:"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                                    clear: "all"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    type: "text",
                                                    id: "address2",
                                                    name: "address2",
                                                    className: "loginInput form-control",
                                                    defaultValue: address2
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                    title: "emailAddress",
                                                    className: "loginLabel form-label",
                                                    children: "City:*"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                                    clear: "all"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    name: "City",
                                                    type: "text",
                                                    defaultValue: city,
                                                    id: "city",
                                                    className: "loginInput form-control"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                    title: "state",
                                                    className: "loginLabel form-label",
                                                    children: "State:*"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                                    clear: "all"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                                    name: "state",
                                                    className: "loginSelect",
                                                    id: "state",
                                                    defaultValue: state,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "--",
                                                            "data-type": "STATE",
                                                            children: "--"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "Alabama",
                                                            "data-type": "STATE",
                                                            children: "Alabama"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "Alaska",
                                                            "data-type": "STATE",
                                                            children: "Alaska"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "Arizona",
                                                            "data-type": "STATE",
                                                            children: "Arizona"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "Arkansas",
                                                            "data-type": "STATE",
                                                            children: "Arkansas"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "California",
                                                            "data-type": "STATE",
                                                            children: "California"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "Colorado",
                                                            "data-type": "STATE",
                                                            children: "Colorado"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "Connecticut",
                                                            "data-type": "STATE",
                                                            children: "Connecticut"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "Delaware",
                                                            "data-type": "STATE",
                                                            children: "Delaware"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "District of Columbia",
                                                            "data-type": "STATE",
                                                            children: "District of Columbia"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "Florida",
                                                            "data-type": "STATE",
                                                            children: "Florida"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "Georgia",
                                                            "data-type": "STATE",
                                                            children: "Georgia"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "Idaho",
                                                            "data-type": "STATE",
                                                            children: "Idaho"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "Illinois",
                                                            "data-type": "STATE",
                                                            children: "Illinois"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "Indiana",
                                                            "data-type": "STATE",
                                                            selected: "selected",
                                                            children: "Indiana"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "Iowa",
                                                            "data-type": "STATE",
                                                            children: "Iowa"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "Kansas",
                                                            "data-type": "STATE",
                                                            children: "Kansas"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "Kentucky",
                                                            "data-type": "STATE",
                                                            children: "Kentucky"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "Louisiana",
                                                            "data-type": "STATE",
                                                            children: "Louisiana"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "Maine",
                                                            "data-type": "STATE",
                                                            children: "Maine"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "Maryland",
                                                            "data-type": "STATE",
                                                            children: "Maryland"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "Massachusetts",
                                                            "data-type": "STATE",
                                                            children: "Massachusetts"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "Michigan",
                                                            "data-type": "STATE",
                                                            children: "Michigan"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "Minnesota",
                                                            "data-type": "STATE",
                                                            children: "Minnesota"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "Mississippi",
                                                            "data-type": "STATE",
                                                            children: "Mississippi"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "Missouri",
                                                            "data-type": "STATE",
                                                            children: "Missouri"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "Montana",
                                                            "data-type": "STATE",
                                                            children: "Montana"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "Nebraska",
                                                            "data-type": "STATE",
                                                            children: "Nebraska"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "Nevada",
                                                            "data-type": "STATE",
                                                            children: "Nevada"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "New Hampshire",
                                                            "data-type": "STATE",
                                                            children: "New Hampshire"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "New Jersey",
                                                            "data-type": "STATE",
                                                            children: "New Jersey"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "New Mexico",
                                                            "data-type": "STATE",
                                                            children: "New Mexico"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "New York",
                                                            "data-type": "STATE",
                                                            children: "New York"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "North Carolina",
                                                            "data-type": "STATE",
                                                            children: "North Carolina"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "North Dakota",
                                                            "data-type": "STATE",
                                                            children: "North Dakota"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "Ohio",
                                                            "data-type": "STATE",
                                                            children: "Ohio"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "Oklahoma",
                                                            "data-type": "STATE",
                                                            children: "Oklahoma"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "Oregon",
                                                            "data-type": "STATE",
                                                            children: "Oregon"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "Pennsylvania",
                                                            "data-type": "STATE",
                                                            children: "Pennsylvania"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "Rhode Island",
                                                            "data-type": "STATE",
                                                            children: "Rhode Island"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "South Carolina",
                                                            "data-type": "STATE",
                                                            children: "South Carolina"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "South Dakota",
                                                            "data-type": "STATE",
                                                            children: "South Dakota"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "Tennessee",
                                                            "data-type": "STATE",
                                                            children: "Tennessee"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "Texas",
                                                            "data-type": "STATE",
                                                            children: "Texas"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "Utah",
                                                            "data-type": "STATE",
                                                            children: "Utah"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "Vermont",
                                                            "data-type": "STATE",
                                                            children: "Vermont"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "Virginia",
                                                            "data-type": "STATE",
                                                            children: "Virginia"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "Washington",
                                                            "data-type": "STATE",
                                                            children: "Washington"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "West Virginia",
                                                            "data-type": "STATE",
                                                            children: "West Virginia"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "Wisconsin",
                                                            "data-type": "STATE",
                                                            children: "Wisconsin"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: "Wyoming",
                                                            "data-type": "STATE",
                                                            children: "Wyoming"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                    title: "emailAddress",
                                                    className: "loginLabel form-label",
                                                    children: "Zip Code:*"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                                    clear: "all"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    name: "ZIP",
                                                    type: "text",
                                                    defaultValue: zcode,
                                                    maxLength: "10",
                                                    id: "zip_code",
                                                    className: "loginInput form-control"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                    title: "emailAddress",
                                                    className: "loginLabel form-label",
                                                    children: "Country:*"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                                    clear: "all"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("select", {
                                                    name: "country",
                                                    className: "loginSelect",
                                                    id: "country",
                                                    defaultValue: country,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                        selected: "selected",
                                                        value: "US",
                                                        children: "United States"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "col-12 actionBtns",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            type: "button",
                                            className: "btn btn-secondary",
                                            onClick: (e)=>{
                                                setEditShippingFlag(false);
                                            },
                                            children: "Cancelsss"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            type: "button",
                                            name: "SubmitInfo",
                                            className: "btn btn-primary",
                                            onClick: (e)=>{
                                                UpdateShipping(e, props.userData, setEditShippingFlag, props.setUserData);
                                            },
                                            children: "Save & Continue"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    id: "update-user",
                                    className: "alert d-none",
                                    role: "alert"
                                })
                            ]
                        })
                    })
                })
            }) : ""
        ]
    });
};
const UpdateShipping = async (e, userData, setEditShippingFlag, setUserData)=>{
    e.preventDefault();
    let { URL  } = process.env;
    let shipping = {
        first_name: document.getElementById("first_name").value,
        last_name: document.getElementById("last_name").value,
        phone: document.getElementById("phone").value,
        address1: document.getElementById("address1").value,
        address2: document.getElementById("address2").value,
        email: document.getElementById("email").value,
        city: document.getElementById("city").value,
        state: document.getElementById("state").value,
        zip_code: document.getElementById("zip_code").value,
        country: document.getElementById("country").value
    };
    let newUser = userData;
    newUser = {
        ...newUser,
        shipping: shipping
    };
    let response = await (0,account/* updateAccountInfo */.ZC)(e, newUser);
    let uAlert = document.getElementById("update-user");
    if (response.status == 200) {
        try {
            uAlert.classList.remove("d-none");
        } catch (err) {}
        try {
            uAlert.classList.remove("alert-danger");
        } catch (err11) {}
        try {
            uAlert.classList.add("alert-primary");
        } catch (err12) {}
        uAlert.innerHTML = "Updates Shipping Information  Successfully";
    } else {
        try {
            uAlert.classList.remove("d-none");
        } catch (err) {}
        try {
            uAlert.classList.remove("alert-primary");
        } catch (err13) {}
        try {
            uAlert.classList.add("alert-danger");
        } catch (err14) {}
        uAlert.innerHTML = "Failed. Please Try Again";
    }
    setTimeout(()=>{
        try {
            uAlert.classList.add("d-none");
        } catch (err) {}
        uAlert.innerHTML = "";
        setEditShippingFlag(false);
    }, 3000);
    let user = await (0,account/* getCurrentUserData */.Ts)(e);
    setUserData(user);
};
/* harmony default export */ const account_ShippingAddress = (ShippingAddress);

;// CONCATENATED MODULE: ./src/components/account/ShippingAddressTab.js



const ShippingAddressTab = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "tab-pane fade",
        id: "tabBody2",
        role: "tabpanel",
        "aria-labelledby": "tab2",
        "aria-hidden": "true",
        children: props.currentTab && props.currentTab == "shipping" ? /*#__PURE__*/ jsx_runtime_.jsx(account_ShippingAddress, {
            userData: props.userData,
            setUserData: props.setUserData
        }) : "uuu"
    });
};
/* harmony default export */ const account_ShippingAddressTab = (ShippingAddressTab);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: ./src/controllers/cart.js
var controllers_cart = __webpack_require__(2358);
// EXTERNAL MODULE: ./src/controllers/order.js
var order = __webpack_require__(998);
;// CONCATENATED MODULE: ./src/components/account/Order.js






const Order = (props)=>{
    const { 0: orders , 1: setOrders  } = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(async ()=>{
        let userID = await (0,account/* getCurrentUserID */.x5)();
        let ordersData = await (0,order/* getOrders */.AU)(userID);
        setOrders(ordersData);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "row",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "accountBody col-12 col-sm-7 col-md-8 col-lg-10",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "page-heading",
                    children: "Order History"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("br", {
                    clear: "all"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "account-page",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            className: "infoTXT",
                            children: [
                                "There are ",
                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                    className: "larger_bold",
                                    children: "0"
                                }),
                                " orders under your account."
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                            id: "order-history",
                            className: "table table-striped",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                align: "center",
                                                children: "Order Number"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                align: "center",
                                                children: "Date"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                align: "center",
                                                children: "Total"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                align: "center",
                                                children: "Shipping"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                align: "center",
                                                children: "Tax"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                align: "center",
                                                children: "Subtotal"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                align: "center",
                                                children: "View"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("tbody", {
                                    children: orders && orders.length > 0 ? orders.map((orderData)=>{
                                        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                    children: orderData.orderNumber
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                    children: orderData.date_created
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                                    children: [
                                                        "$",
                                                        orderData.order.total
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                    children: orderData.order.shipping.name
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                                    children: [
                                                        "$",
                                                        orderData.order.tax
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                                    children: [
                                                        "$",
                                                        orderData.order.subTotal
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                    style: {
                                                        cursor: "pointer"
                                                    },
                                                    onClick: ()=>{
                                                        router_default().push("/orders/" + orderData.orderNumber);
                                                    },
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        class: "fa fa-eye",
                                                        "aria-hidden": "true"
                                                    })
                                                })
                                            ]
                                        });
                                    }) : ""
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "actionBtns",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    title: "Continue Shopping",
                                    className: "btn btn-secondary",
                                    onClick: ()=>{
                                        (0,controllers_cart/* csHandleChange */.oA)();
                                    },
                                    children: "Continue Shopping"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    title: "My Account",
                                    className: "btn btn-primary",
                                    children: "Account Home"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const account_Order = (Order);

;// CONCATENATED MODULE: ./src/components/account/OrdersTabContent.js



const OrdersTabContent = (props)=>{
    {
        props.currentTab && props.currentTab == "shipping" ? "aaa" : "bbb";
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "tab-pane fade",
        id: "tabBody3",
        role: "tabpanel",
        "aria-labelledby": "tab3",
        "aria-hidden": "true",
        children: props.currentTab && props.currentTab == "orders" ? /*#__PURE__*/ jsx_runtime_.jsx(account_Order, {}) : ""
    });
};
/* harmony default export */ const account_OrdersTabContent = (OrdersTabContent);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./src/components/account/DisplayListItems.js






const DisplayListItems = (props)=>{
    const { 0: cart , 1: setCart  } = (0,external_react_.useState)([]);
    let cartData = [];
    if (false) {}
    let listItems = [];
    let { URL  } = process.env;
    if (props.wishListItems && props.wishListItems.length > 0) {
        listItems = props.wishListItems[0].items;
    } else {
        listItems = [];
    }
    (0,external_react_.useEffect)(()=>{
        setCart(cartData);
    }, [
        listItems
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        id: "wishlistContent",
        children: listItems && listItems.length > 0 ? listItems.map((product)=>{
            if (product.itemPrice) {
                let iTotal = 0;
                if (!product.itemPrice) {
                    product.itemPrice = product.price;
                }
                try {
                    iTotal = product.itemPrice * product.qty;
                } catch (err) {
                    iTotal = product.price * product.qty;
                }
                return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row ",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row main align-items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-2",
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
                                className: "col-2",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: product.product_url,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "row text-muted",
                                                children: product.brand
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "row",
                                                children: product.name
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "col-2 qtyInner",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: "minus",
                                        onClick: (e)=>{
                                            (0,wishlist/* UpdateWishListQTY */.gU)(e, "decrement", product.id, props.setUserLists, props.userLists, props.userID, props.listName);
                                        },
                                        children: "-"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "text",
                                        className: "addminus",
                                        defaultValue: product.qty,
                                        min: "1",
                                        id: "qtyBox" + product.id,
                                        name: "qty",
                                        onChange: (e)=>{
                                            (0,wishlist/* UpdateWishListQTY */.gU)(e, "none", product.id, props.setUserLists, props.userLists, props.userID, props.listName);
                                        }
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: "plus",
                                        onClick: (e)=>{
                                            (0,wishlist/* UpdateWishListQTY */.gU)(e, "increment", product.id, props.setUserLists, props.userLists, props.userID, props.listName);
                                        },
                                        children: "+"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "col-2",
                                children: [
                                    "$",
                                    iTotal.toFixed(2),
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-2",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                    className: "bg-transparent border-0 align-right",
                                    onClick: (e)=>{
                                        (0,wishlist/* deleteWishListItem */.PT)(e, product.id, props.setUserLists, props.userLists, props.userID, props.listName, props.setWishListChanged, props.setListName);
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            className: "mr-2",
                                            src: URL + "/images/trash-2.svg"
                                        }),
                                        "Remove"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-2",
                                style: {
                                    textAlign: "right"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "btn btn-dark align-right",
                                    onClick: (e)=>{
                                        (0,controllers_cart/* AddToCart */.o4)(e, product, cart, setCart);
                                        setTimeout(()=>{
                                            (0,wishlist/* deleteWishListItem */.PT)(e, product.id, props.setUserLists, props.userLists, props.userID, props.listName, props.setWishListChanged, props.setListName);
                                        }, 1000);
                                    },
                                    children: "Add to Cart"
                                })
                            })
                        ]
                    })
                }, product.name);
            }
        }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                children: [
                    "No Items are currently in the list ",
                    /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                        children: props.listName
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const account_DisplayListItems = (DisplayListItems);

;// CONCATENATED MODULE: ./src/components/account/DisplayLists.js





const DisplayLists = (props)=>{
    let userID = 0;
    if (false) {}
    let { URL  } = process.env;
    let lists = [];
    lists = props.userLists;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "accordion accordion-flush",
        id: "accordionFlushExample",
        children: lists && lists.length > 0 ? lists.map((list, index)=>{
            let row = index + 1;
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "accordion-item",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                        className: "accordion-header",
                        id: "flush-heading" + index,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("em", {
                                    children: index + 1
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                children: [
                                    "Name",
                                    /*#__PURE__*/ jsx_runtime_.jsx("em", {
                                        children: list.name
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "accordion-button collapsed",
                                type: "button",
                                "data-bs-toggle": "collapse",
                                "data-bs-target": "#flush-collapse" + index,
                                "aria-expanded": "false",
                                "aria-controls": "flush-collapse" + index,
                                onClick: ()=>{
                                    props.setListName(list.name);
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                onClick: ()=>{
                                    (0,wishlist/* deleteWishLists */.qn)(userID, list.name, props.setUserLists);
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    className: "m-0",
                                    src: URL + "/images/trash-2.svg"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        id: "flush-collapse" + index,
                        className: "accordion-collapse collapse",
                        "aria-labelledby": "flush-heading" + index,
                        "data-bs-parent": "#accordionFlushExample",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "accordion-body",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                children: list.name == props.listName ? /*#__PURE__*/ jsx_runtime_.jsx("section", {
                                    id: "cart",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "row",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-md-12 cart",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(account_DisplayListItems, {
                                                wishListItems: props.wishListItems,
                                                setUserLists: props.setUserLists,
                                                userLists: props.userLists,
                                                userID: userID,
                                                listName: props.listName,
                                                setListName: props.setListName,
                                                setWishListChanged: props.setWishListChanged
                                            })
                                        })
                                    })
                                }) : ""
                            })
                        })
                    })
                ]
            }, list.name);
        }) : ""
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "Click on the below List to View List Items"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                className: "table table-hover",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                    children: "#"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                    children: "List"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                    children: "View List Items"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                    children: "delete"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("tbody", {
                        children: lists && lists.length > 0 ? lists.map((list, index)=>{
                            let row = index + 1;
                            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                className: "cursor-pointer",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                        children: row
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                        className: "col-8",
                                        children: list.name
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                        onClick: ()=>{
                                            props.setListName(list.name);
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fa fa-eye",
                                                "aria-hidden": "true"
                                            }),
                                            " View"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                        onClick: ()=>{
                                            (0,wishlist/* deleteWishLists */.qn)(userID, list.name, props.setUserLists);
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fas fa-trash",
                                                "aria-hidden": "false"
                                            }),
                                            " ",
                                            "Delete"
                                        ]
                                    })
                                ]
                            }, list);
                        }) : ""
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                id: "cart",
                className: "card",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-12 cart",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(account_DisplayListItems, {
                            wishListItems: props.wishListItems,
                            setUserLists: props.setUserLists,
                            userLists: props.userLists,
                            userID: userID,
                            listName: props.listName,
                            setListName: props.setListName,
                            setWishListChanged: props.setWishListChanged
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const account_DisplayLists = (DisplayLists);

;// CONCATENATED MODULE: ./src/components/account/WishListTabContent.js



const WishListTabContent = (props)=>{
    const { 0: wishListChanged , 1: setWishListChanged  } = (0,external_react_.useState)("");
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: props.currentTab && props.currentTab == "wishlist" ? /*#__PURE__*/ jsx_runtime_.jsx(account_DisplayLists, {
            userLists: props.userLists,
            setUserLists: props.setUserLists,
            setWishListChanged: setWishListChanged,
            listName: props.listName,
            setListName: props.setListName,
            wishListItems: props.wishListItems
        }) : ""
    });
};
/* harmony default export */ const account_WishListTabContent = (WishListTabContent);

;// CONCATENATED MODULE: ./src/components/account/Layout.js










const Layout = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        id: "myAccountPage",
        className: "container-fluid",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(account_Breadcrumbs, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "tabs-container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(account_TabsHeadings, {
                            currentTab: props.currentTab,
                            setCurrentTab: props.setCurrentTab,
                            userData: props.userData,
                            setUserData: props.setUserData
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            id: "myTabContent",
                            className: "tab-content fancyTabContent",
                            "aria-live": "polite",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(account_HomeTabContent, {
                                    currentTab: props.currentTab,
                                    setCurrentTab: props.setCurrentTab,
                                    userData: props.userData,
                                    setUserData: props.setUserData
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(BillingAddressTab, {
                                    currentTab: props.currentTab,
                                    setCurrentTab: props.setCurrentTab,
                                    userData: props.userData,
                                    setUserData: props.setUserData
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(account_ShippingAddressTab, {
                                    currentTab: props.currentTab,
                                    setCurrentTab: props.setCurrentTab,
                                    userData: props.userData,
                                    setUserData: props.setUserData
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(account_OrdersTabContent, {
                                    currentTab: props.currentTab,
                                    setCurrentTab: props.setCurrentTab
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(account_WishListTabContent, {
                                    userData: props.userData,
                                    setUserData: props.setUserData,
                                    currentTab: props.currentTab,
                                    setCurrentTab: props.setCurrentTab,
                                    userLists: props.userLists,
                                    setUserLists: props.setUserLists,
                                    listName: props.listName,
                                    setListName: props.setListName,
                                    wishListItems: props.wishListItems
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const account_Layout = (Layout);

// EXTERNAL MODULE: ./src/components/header/Header.js + 5 modules
var Header = __webpack_require__(4264);
;// CONCATENATED MODULE: ./src/pages/account/index.js








const Account = (props)=>{
    const { 0: userData , 1: setUserData  } = (0,external_react_.useState)([]);
    const { 0: currentTab , 1: setCurrentTab  } = (0,external_react_.useState)("home");
    const { 0: userLists , 1: setUserLists  } = (0,external_react_.useState)([]);
    const { 0: listName , 1: setListName  } = (0,external_react_.useState)("");
    const { 0: wishListItems , 1: setWishListItems  } = (0,external_react_.useState)([]);
    let loginstatus = "";
    let currentUserID = 0;
    if (false) {}
    if (false) {}
    let userID = "";
    if (false) {}
    (0,external_react_.useEffect)(async ()=>{
        let lists = await (0,wishlist/* getUserWishLists */.Ok)(userID);
        setUserLists(lists);
    }, []);
    (0,external_react_.useEffect)(()=>{
        let currentListItems = [];
        currentListItems = userLists.filter((list)=>list.userID === userID && list.name == listName
        );
        setWishListItems(currentListItems);
    }, [
        listName,
        userLists
    ]);
    let cartValue = [];
    if (false) {}
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "My Account | Optimized and SEO Friendly Demo Site"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "title",
                        content: "My Account | Optimized and SEO Friendly Demo Site"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "My Account of Optimized and SEO Friendly Ecommerce site that will boost your sales and conversions"
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
            /*#__PURE__*/ jsx_runtime_.jsx(account_Layout, {
                userData: userData,
                setUserData: setUserData,
                currentTab: currentTab,
                setCurrentTab: setCurrentTab,
                userLists: userLists,
                setUserLists: setUserLists,
                listName: listName,
                setListName: setListName,
                wishListItems: wishListItems
            })
        ]
    });
};
/* harmony default export */ const pages_account = (Account);


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
var __webpack_exports__ = __webpack_require__.X(0, [5895,2623,5675,4524,4264,998,2836], () => (__webpack_exec__(1849)));
module.exports = __webpack_exports__;

})();