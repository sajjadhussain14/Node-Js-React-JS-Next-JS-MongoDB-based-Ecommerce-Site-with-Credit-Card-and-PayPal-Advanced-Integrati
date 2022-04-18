"use strict";
(() => {
var exports = {};
exports.id = 3459;
exports.ids = [3459,7356];
exports.modules = {

/***/ 5881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ login)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/header/Header.js + 5 modules
var Header = __webpack_require__(4264);
;// CONCATENATED MODULE: ./src/components/login/Heading.js


const Heading = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "col-12",
        children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
            children: "Sign in to your Account"
        })
    });
};
/* harmony default export */ const login_Heading = (Heading);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: ./src/controllers/cart.js
var cart = __webpack_require__(2358);
;// CONCATENATED MODULE: ./src/components/login/Athenticated.js




const Athenticated = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "form-inner ",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "form-group",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "alert alert-primary",
                    role: "alert",
                    children: "Loggedin Successfully. Please choose one of below actions"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-3 ",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                type: "button",
                                className: "btn btn-primary",
                                onClick: ()=>{
                                    router_default().push("/account");
                                },
                                "data-dismiss": "modal",
                                children: "Account"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-3 ",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                type: "button",
                                className: "btn btn-secondary",
                                onClick: ()=>{
                                    router_default().push("/checkout");
                                },
                                "data-dismiss": "modal",
                                children: "Checkout"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-6 ",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                type: "button",
                                className: "btn btn-success",
                                onClick: ()=>{
                                    let shopURL = "/";
                                    if (!shopURL) {
                                        shopURL = "/";
                                    }
                                    shopURL = (0,cart/* getContinueShoppingURL */.x6)();
                                    router_default().push(shopURL);
                                },
                                "data-dismiss": "modal",
                                children: "Continue Shopping"
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const login_Athenticated = (Athenticated);

// EXTERNAL MODULE: ./src/controllers/account.js
var account = __webpack_require__(961);
;// CONCATENATED MODULE: ./src/components/login/LoginScreen.js



const LoginScreen = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "form-inner",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "form-group",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                        className: "loginLabel",
                        title: "login_email",
                        children: [
                            "Email Address: ",
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "required",
                                children: "*"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {
                        clear: "all"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        className: "loginInput form-control",
                        placeholder: "Your Email",
                        type: "text",
                        id: "login_email2",
                        name: "login_email",
                        "data-required": "true",
                        "data-validation": "email"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "form-group",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                        className: "loginLabel",
                        title: "login_email",
                        children: [
                            "Password:",
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "required",
                                children: "*"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        className: "loginInput form-control",
                        type: "password",
                        placeholder: "Password",
                        id: "login_password2",
                        name: "login_password",
                        "data-required": "true",
                        "data-validation": "password"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "form-group w-100",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "",
                        className: "btn w-100 d-inline-block text-left p-0 text-decoration-underline",
                        children: "Forgot password"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: (e)=>{
                            (0,account/* authenticateUserFromLogin */.oT)(e, props.setScreen, "loginPage");
                        },
                        className: "btn btn-dark mybtn",
                        children: "Sign in"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "form-group",
                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    children: "Sign Up"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "form-group",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "w-100",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "m-0 w-100 text-center",
                            children: "You can now easily set up an account"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "btn btn-secondary mybtn",
                            onClick: (e)=>{
                                (0,account/* createAccountHandle */.ns)(e, props.setScreen);
                            },
                            children: "Create an Account"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "login-user2",
                className: "alert d-none",
                role: "alert"
            })
        ]
    });
};
/* harmony default export */ const login_LoginScreen = (LoginScreen);

;// CONCATENATED MODULE: ./src/components/login/CreateAccount.js



const CreateAccount = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                name: "newCustForm",
                id: "newCustForm",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                        className: "modal-title",
                        id: "",
                        children: [
                            "Login Credientials:",
                            " "
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {
                        clear: "all"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-12 col-sm-6",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "form-group",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                            className: "loginLabel",
                                            title: "email",
                                            children: [
                                                "Email Address: ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "required",
                                                    children: "*"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                            clear: "all"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            className: "loginInput form-control",
                                            type: "text",
                                            id: "new-email",
                                            name: "email",
                                            "data-required": "true",
                                            "data-validate": "email"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-12 col-sm-6",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "form-group",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                            className: "loginLabel",
                                            title: "email",
                                            children: [
                                                "Password: ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "required",
                                                    children: "*"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                            clear: "all"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            className: "loginInput form-control",
                                            type: "password",
                                            id: "new-password",
                                            name: "passwrd",
                                            "data-required": "true",
                                            "data-validation": "password"
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {
                        clear: "all"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                        className: "modal-title",
                        id: "",
                        children: "Billing Address:"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {
                        clear: "all"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "col-12 col-sm-6",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                className: "loginLabel",
                                                title: "first_name",
                                                children: [
                                                    "First Name: ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "required ",
                                                        children: "*"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                                clear: "all"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                className: "loginInput form-control",
                                                type: "text",
                                                id: "new-fname",
                                                name: "first_name",
                                                "data-required": "true"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                className: "loginLabel",
                                                title: "last_name",
                                                children: [
                                                    "Last Name: ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "required",
                                                        children: "*"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                                clear: "all"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                className: "loginInput form-control",
                                                type: "text",
                                                id: "new-lname",
                                                name: "last_name",
                                                "data-required": "true"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                className: "loginLabel",
                                                title: "phone",
                                                children: [
                                                    "Phone: ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "required",
                                                        children: "*"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                                clear: "all"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                className: "loginInput form-control",
                                                type: "text",
                                                id: "new-phone",
                                                name: "phone",
                                                "data-required": "true",
                                                "data-validate": "phone"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "col-12 col-sm-6",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                className: "loginLabel",
                                                title: "address1",
                                                children: [
                                                    "Street: ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "required",
                                                        children: "*"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                                clear: "all"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                className: "loginInput form-control",
                                                type: "text",
                                                id: "new-address1",
                                                name: "address1",
                                                "data-required": "true"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                className: "loginLabel",
                                                title: "address2",
                                                children: [
                                                    "Unit/Suite:",
                                                    " "
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                                clear: "all"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                className: "loginInput form-control",
                                                type: "text",
                                                id: "new-address2",
                                                name: "address2",
                                                "data-required": "false"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                className: "loginLabel",
                                                title: "city",
                                                children: [
                                                    "City: ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "required",
                                                        children: "*"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                                clear: "all"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                className: "loginInput form-control",
                                                type: "text",
                                                id: "new-city",
                                                name: "city",
                                                "data-required": "true"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                className: "loginLabel",
                                                title: "state",
                                                children: [
                                                    "State: ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "required",
                                                        children: "*"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                                clear: "all"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                                className: "loginSelect form-control",
                                                name: "state",
                                                id: "new-state",
                                                "data-required": "true",
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
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                className: "loginLabel",
                                                title: "zip",
                                                children: [
                                                    "Zip Code: ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "required",
                                                        children: "*"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                                clear: "all"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                className: "loginInput form-control",
                                                type: "text",
                                                id: "new-zcode",
                                                name: "zip",
                                                "data-required": "true",
                                                "data-validate": "zip"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                className: "loginLabel",
                                                title: "zip",
                                                children: [
                                                    "Country: ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "required",
                                                        children: "*"
                                                    })
                                                ]
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
                                                    children: "United States"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "modal-footer",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "btn btn-dark mybtn",
                        onClick: (e)=>{
                            (0,account/* CreateUser */.lF)(e, props.setScreen);
                        },
                        children: "Create Account"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "button",
                        className: "btn btn-secondary mybtn",
                        "data-dismiss": "modal",
                        onClick: ()=>{
                            (0,account/* resetScreen */.Ps)(props.setScreen);
                        },
                        children: "Close"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "create-user",
                className: "alert d-none",
                role: "alert"
            })
        ]
    });
};
/* harmony default export */ const login_CreateAccount = (CreateAccount);

;// CONCATENATED MODULE: ./src/components/login/Layout.js






const Layout = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        id: "contentHolder",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            id: "loginPageContainer",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(login_Heading, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "loginPage col-6 mx-auto py-3",
                        children: props.screen && props.screen == "authenticated" ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(login_Athenticated, {
                                setScreen: props.setScreen
                            })
                        }) : props.screen && props.screen == "login" ? /*#__PURE__*/ jsx_runtime_.jsx(login_LoginScreen, {
                            setScreen: props.setScreen
                        }) : /*#__PURE__*/ jsx_runtime_.jsx(login_CreateAccount, {
                            setScreen: props.setScreen
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const login_Layout = (Layout);

;// CONCATENATED MODULE: ./src/pages/login.js




const Login = (props)=>{
    const { 0: isLogin , 1: setIsLogin  } = (0,external_react_.useState)("no");
    const { 0: screen , 1: setScreen  } = (0,external_react_.useState)("login");
    let loginstatus = "";
    if (false) {}
    (0,external_react_.useEffect)(()=>{
        setIsLogin(loginstatus);
    }, []);
    let cartValue = [];
    if (false) {}
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {
                taxonomy: props.taxonomy,
                cartData: cartValue
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(login_Layout, {
                screen: screen,
                setScreen: setScreen,
                isLogin: isLogin,
                setIsLogin: setIsLogin
            })
        ]
    });
};
/* harmony default export */ const login = (Login);


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

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [5895,2623,4524,4264], () => (__webpack_exec__(5881)));
module.exports = __webpack_exports__;

})();