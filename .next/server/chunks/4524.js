"use strict";
exports.id = 4524;
exports.ids = [4524];
exports.modules = {

/***/ 961:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ns": () => (/* binding */ createAccountHandle),
/* harmony export */   "lF": () => (/* binding */ CreateUser),
/* harmony export */   "So": () => (/* binding */ authenticateUser),
/* harmony export */   "oT": () => (/* binding */ authenticateUserFromLogin),
/* harmony export */   "Ps": () => (/* binding */ resetScreen),
/* harmony export */   "Ts": () => (/* binding */ getCurrentUserData),
/* harmony export */   "ZC": () => (/* binding */ updateAccountInfo),
/* harmony export */   "ni": () => (/* binding */ logOut),
/* harmony export */   "x5": () => (/* binding */ getCurrentUserID)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);

let { URL  } = process.env;
const createAccountHandle = (e, setScreen)=>{
    e.preventDefault();
    setScreen("create");
};
const CreateUser = async (e, setScreen)=>{
    e.preventDefault();
    let { URL: URL1  } = process.env;
    let ID = Array.from(Array(20), ()=>Math.floor(Math.random() * 20).toString(20)
    ).join("");
    let email = document.getElementById("new-email").value;
    let password = document.getElementById("new-password").value;
    let fname = document.getElementById("new-fname").value;
    let lname = document.getElementById("new-lname").value;
    let phone = document.getElementById("new-phone").value;
    let address1 = document.getElementById("new-address1").value;
    let address2 = document.getElementById("new-address2").value;
    let city = document.getElementById("new-city").value;
    let state = document.getElementById("new-state").value;
    let zcode = document.getElementById("new-zcode").value;
    let country = document.getElementById("country").value;
    const response = await fetch(URL1 + "/api/account/createAccount", {
        method: "POST",
        body: JSON.stringify({
            ID: ID,
            email: email,
            password: password,
            fname: fname,
            lname: lname,
            phone: phone,
            address1: address1,
            address2: address2,
            city: city,
            state: state,
            zcode: zcode,
            country: country
        }),
        headers: {
            "Content-Type": "application/json"
        }
    });
    let uAlert = document.getElementById("create-user");
    if (response.status == 200) {
        try {
            uAlert.classList.remove("d-none");
        } catch (err) {}
        try {
            uAlert.classList.remove("alert-danger");
        } catch (err1) {}
        try {
            uAlert.classList.add("alert-primary");
        } catch (err2) {}
        uAlert.innerHTML = "User Created Successfully";
        setTimeout(()=>{
            setScreen("login");
        }, 2000);
    } else if (response.status == 409) {
        try {
            uAlert.classList.remove("d-none");
        } catch (err) {}
        try {
            uAlert.classList.remove("alert-primary");
        } catch (err3) {}
        try {
            uAlert.classList.add("alert-danger");
        } catch (err4) {}
        uAlert.innerHTML = "Failed. User Already Exists!";
    } else {
        try {
            uAlert.classList.remove("d-none");
        } catch (err) {}
        try {
            uAlert.classList.remove("alert-primary");
        } catch (err5) {}
        try {
            uAlert.classList.add("alert-danger");
        } catch (err6) {}
        uAlert.innerHTML = "User Creation Failed. Please Try Again";
    }
    setTimeout(()=>{
        try {
            uAlert.classList.add("d-none");
        } catch (err) {}
        uAlert.innerHTML = "";
    }, 3000);
};
const authenticateUser = async (e, setScreen, fromPage)=>{
    e.preventDefault();
    let { URL: URL2  } = process.env;
    let email = document.getElementById("login_email").value;
    let password = document.getElementById("login_password").value;
    const resp = await fetch(URL2 + "/api/account/authenticateUser", {
        method: "POST",
        body: JSON.stringify({
            email: email,
            password: password
        }),
        headers: {
            "Content-Type": "application/json"
        }
    });
    let response = await resp.json();
    let loginAlert = document.getElementById("login-user");
    if (response.status == 200) {
        try {
            loginAlert.classList.remove("d-none");
        } catch (err) {}
        try {
            loginAlert.classList.remove("alert-danger");
        } catch (err7) {}
        try {
            loginAlert.classList.add("alert-primary");
        } catch (err8) {}
        loginAlert.innerHTML = "User Logged in Successfully";
        localStorage.setItem("isLogin", "yes");
        localStorage.setItem("currentAliveUser", response.data.ID);
        if (fromPage && fromPage == "loginPage") {
            next_router__WEBPACK_IMPORTED_MODULE_0___default().push(URL2 + "/account");
        } else {
            setScreen("authenticated");
        }
    } else {
        try {
            loginAlert.classList.remove("d-none");
        } catch (err) {}
        try {
            loginAlert.classList.add("alert-danger");
        } catch (err9) {}
        try {
            loginAlert.classList.remove("alert-primary");
        } catch (err10) {}
        loginAlert.innerHTML = "Failed! Invalid Email or Password. Please try Agian.";
    }
    if (fromPage == "checkout") {
        next_router__WEBPACK_IMPORTED_MODULE_0___default().push(URL2 + "/checkout");
    }
};
const authenticateUserFromLogin = async (e, setScreen, fromPage)=>{
    e.preventDefault();
    let { URL: URL3  } = process.env;
    let email = document.getElementById("login_email2").value;
    let password = document.getElementById("login_password2").value;
    const resp = await fetch(URL3 + "/api/account/authenticateUser", {
        method: "POST",
        body: JSON.stringify({
            email: email,
            password: password
        }),
        headers: {
            "Content-Type": "application/json"
        }
    });
    let response = await resp.json();
    let loginAlert = document.getElementById("login-user2");
    if (response.status == 200) {
        try {
            loginAlert.classList.remove("d-none");
        } catch (err) {}
        try {
            loginAlert.classList.remove("alert-danger");
        } catch (err11) {}
        try {
            loginAlert.classList.add("alert-primary");
        } catch (err12) {}
        loginAlert.innerHTML = "User Logged in Successfully";
        localStorage.setItem("isLogin", "yes");
        localStorage.setItem("currentAliveUser", response.data.ID);
        if (fromPage && fromPage == "loginPage") {
            next_router__WEBPACK_IMPORTED_MODULE_0___default().push(URL3 + "/account");
        } else {
            setScreen("authenticated");
        }
    } else {
        try {
            loginAlert.classList.remove("d-none");
        } catch (err) {}
        try {
            loginAlert.classList.add("alert-danger");
        } catch (err13) {}
        try {
            loginAlert.classList.remove("alert-primary");
        } catch (err14) {}
        loginAlert.innerHTML = "Failed! Invalid Email or Password. Please try Agian.";
    }
};
const resetScreen = (setScreen, loginstatus)=>{
    if (loginstatus && loginstatus == "yes") {
        next_router__WEBPACK_IMPORTED_MODULE_0___default().reload();
    }
    setScreen("login");
};
const getCurrentUserData = async (e)=>{
    try {
        e.preventDefault();
    } catch (err) {}
    let { URL: URL4  } = process.env;
    let ID = localStorage.getItem("currentAliveUser");
    let userInfo = [];
    const response = await fetch(URL4 + `/api/account/userInfo/${ID}`);
    let responseData = await response.json();
    if (!responseData.length > 0) {
        userInfo = responseData.userInfo;
    } else {
        userInfo = [];
    }
    return userInfo;
};
const updateAccountInfo = async (e, user)=>{
    e.preventDefault();
    let { URL: URL5  } = process.env;
    const response = await fetch(URL5 + "/api/account/updateAccount", {
        method: "POST",
        body: JSON.stringify({
            data: user
        }),
        headers: {
            "Content-Type": "application/json"
        }
    });
    return response;
};
const logOut = ()=>{
    if (false) {}
};
const getCurrentUserID = async ()=>{
    let userID = "";
    if (false) {}
    return userID;
};


/***/ }),

/***/ 2358:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o4": () => (/* binding */ AddToCart),
/* harmony export */   "LL": () => (/* binding */ clearCart),
/* harmony export */   "ls": () => (/* binding */ UpdateCartQTY),
/* harmony export */   "cl": () => (/* binding */ removeItem),
/* harmony export */   "x6": () => (/* binding */ getContinueShoppingURL),
/* harmony export */   "oA": () => (/* binding */ csHandleChange),
/* harmony export */   "_P": () => (/* binding */ setCartContent)
/* harmony export */ });
/* unused harmony export getCartContent */
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_cartSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5707);


let { URL  } = process.env;
const AddToCart = (e, item, cartData, setCart1)=>{
    e.preventDefault();
    let cartContent = [];
    cartContent = JSON.parse(localStorage.getItem("cart"));
    let cart = [];
    try {
        cart = [
            ...cartContent
        ];
    } catch (err) {}
    if (!cart || cart.length < 1) {
        cart = [];
    }
    let index = -1;
    try {
        index = cart.findIndex((prod)=>prod.id === item.id
        );
    } catch (err1) {}
    if (index > -1) {
        let prodQTY = cart[index].qty;
        let prodPrice = cart[index].itemPrice;
        prodQTY++;
        cart[index] = {
            ...cart[index],
            qty: prodQTY
        };
        cart[index] = {
            ...cart[index],
            total: prodPrice * prodQTY
        };
    } else {
        let tempCart = [];
        // tempCart.push(item);
        cart = [
            ...cart,
            item
        ];
    }
    try {
        localStorage.setItem("cart", JSON.stringify(cart));
    } catch (err2) {}
    setCart1(cart);
    try {
        document.getElementById("header-cartQTY").innerHTML = cart.length;
    } catch (err3) {}
};
const clearCart = (e, setCart2)=>{
    e.preventDefault();
    try {
        localStorage.setItem("cart", JSON.stringify([]));
    } catch (err) {}
    setCart2([]);
};
const UpdateCartQTY = (e, id, setCart3, cartQty)=>{
    e.preventDefault();
    let cart = [];
    try {
        cart = JSON.parse(localStorage.getItem("cart"));
    } catch (err) {}
    let index = -1;
    try {
        index = cart.findIndex((prod)=>prod.id === id
        );
    } catch (err4) {}
    if (index > -1) {
        let prodQTY = cartQty;
        let prodPrice = cart[index].itemPrice;
        cart[index] = {
            ...cart[index],
            qty: prodQTY
        };
        cart[index] = {
            ...cart[index],
            total: prodPrice * prodQTY
        };
        try {
            localStorage.setItem("cart", JSON.stringify(cart));
        } catch (err) {}
        //  Router.push("/cart");
        setCart3(cart);
    }
};
const removeItem = (id, setCart4)=>{
    let cart = [];
    try {
        cart = JSON.parse(localStorage.getItem("cart"));
    } catch (err) {}
    if (!cart || cart.length < 1) {
        cart = [];
    }
    let newCart = cart.filter((item)=>item.id != id
    );
    try {
        localStorage.setItem("cart", JSON.stringify(newCart));
    } catch (err5) {}
    setCart4(newCart);
    try {
        document.getElementById("header-cartQTY").innerHTML = newCart.length;
    } catch (err6) {}
};
const getContinueShoppingURL = ()=>{
    let shopURL = "";
    try {
        shopURL = localStorage.getItem("shop");
    } catch (err) {}
    if (!shopURL || shopURL == "" || shopURL == null) {
        shopURL = "/";
    }
    return shopURL;
};
const csHandleChange = ()=>{
    let shopURL = "";
    shopURL = getContinueShoppingURL();
    next_router__WEBPACK_IMPORTED_MODULE_0___default().push(URL + shopURL);
};
const setCartContent = (name, data)=>{
    if (false) {}
};
const getCartContent = (name)=>{
    let cart = [];
    if (false) {}
    if (!cart || cart.length < 1) {
        cart = [];
    }
    return cart;
};


/***/ }),

/***/ 4524:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _controllers_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2358);
/* harmony import */ var _controllers_account__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(961);





const LoginPopUp = (props)=>{
    const { 0: isLogin , 1: setIsLogin  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("no");
    let loginstatus = "";
    try {
        loginstatus = localStorage.getItem("isLogin");
    } catch (err) {}
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setIsLogin(loginstatus);
    }, []);
    const { 0: screen , 1: setScreen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("login");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "modal fade",
        id: "loginModal",
        role: "dialog",
        "aria-labelledby": "loginModalLabel",
        "aria-hidden": "true",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "modal-dialog modal-lg modal-dialog-centered",
            role: "document",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "modal-content",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "modal-header border-bottom-0",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "button",
                            className: "close",
                            "data-dismiss": "modal",
                            "aria-label": "Close",
                            onClick: ()=>{
                                (0,_controllers_account__WEBPACK_IMPORTED_MODULE_4__/* .resetScreen */ .Ps)(setScreen, loginstatus);
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                "aria-hidden": "true",
                                children: "\xd7"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container",
                            children: screen && screen == "authenticated" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "modal-body",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "form-inner",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "form-group",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "alert alert-primary",
                                                    role: "alert",
                                                    children: "Logged in Successfully. Please choose one of below actions"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "row",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "col-3 ",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                type: "button",
                                                                className: "btn btn-primary",
                                                                onClick: ()=>{
                                                                    next_router__WEBPACK_IMPORTED_MODULE_2___default().push("/account");
                                                                },
                                                                "data-dismiss": "modal",
                                                                children: "Account"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "col-3 ",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                type: "button",
                                                                className: "btn btn-secondary",
                                                                onClick: ()=>{
                                                                    next_router__WEBPACK_IMPORTED_MODULE_2___default().push("/checkout");
                                                                },
                                                                "data-dismiss": "modal",
                                                                children: "Checkout"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "col-6 ",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                type: "button",
                                                                className: "btn btn-success",
                                                                onClick: ()=>{
                                                                    let shopURL = "/";
                                                                    if (!shopURL) {
                                                                        shopURL = "/";
                                                                    }
                                                                    shopURL = (0,_controllers_cart__WEBPACK_IMPORTED_MODULE_3__/* .getContinueShoppingURL */ .x6)();
                                                                    next_router__WEBPACK_IMPORTED_MODULE_2___default().push(shopURL);
                                                                },
                                                                "data-dismiss": "modal",
                                                                children: "Continue Shopping"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                })
                            }) : screen && screen == "login" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "modal-body",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "form-inner",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "form-group",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                children: "sign in"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "form-group",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                    className: "loginLabel",
                                                    title: "login_email",
                                                    children: [
                                                        "Email Address: ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "required",
                                                            children: "*"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                                    clear: "all"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    className: "loginInput form-control",
                                                    placeholder: "Your Email",
                                                    type: "text",
                                                    id: "login_email",
                                                    name: "login_email",
                                                    "data-required": "true",
                                                    "data-validation": "email"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "form-group",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                className: "loginInput form-control",
                                                type: "password",
                                                placeholder: "Password",
                                                id: "login_password",
                                                name: "login_password",
                                                "data-required": "true",
                                                "data-validation": "password"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "form-group d-flex w-100 flex-column justify-content-center align-items-center",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    onClick: (e)=>{
                                                        (0,_controllers_account__WEBPACK_IMPORTED_MODULE_4__/* .authenticateUser */ .So)(e, setScreen);
                                                    },
                                                    className: "btn btn-dark mybtn w-100",
                                                    children: "Sign in"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "",
                                                    className: "btn",
                                                    children: "Forgot password"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "form-group",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "d-flex w-100 flex-column justify-content-center align-items-center",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        children: "Sign Up"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "You can now easily set up an account"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        className: "btn btn-secondary mybtn w-100",
                                                        onClick: (e)=>{
                                                            (0,_controllers_account__WEBPACK_IMPORTED_MODULE_4__/* .createAccountHandle */ .ns)(e, setScreen);
                                                        },
                                                        children: "Create an Account"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            id: "login-user",
                                            className: "alert d-none",
                                            role: "alert",
                                            children: "ssss"
                                        })
                                    ]
                                })
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "modal-body",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                        name: "newCustForm",
                                        id: "newCustForm",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                                                className: "modal-title",
                                                id: "",
                                                children: [
                                                    "Login Credientials:",
                                                    " "
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                                clear: "all"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "row",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "col-12 col-sm-6",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "form-group",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                    className: "loginLabel",
                                                                    title: "email",
                                                                    children: [
                                                                        "Email Address: ",
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "required",
                                                                            children: "*"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                                                    clear: "all"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
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
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "col-12 col-sm-6",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "form-group",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                    className: "loginLabel",
                                                                    title: "email",
                                                                    children: [
                                                                        "Password: ",
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "required",
                                                                            children: "*"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                                                    clear: "all"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
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
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                                clear: "all"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                                                className: "modal-title",
                                                id: "",
                                                children: [
                                                    "Billing Address:",
                                                    " "
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                                clear: "all"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "row",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "col-12 col-sm-6",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "form-group",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                        className: "loginLabel",
                                                                        title: "first_name",
                                                                        children: [
                                                                            "First Name: ",
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: "required ",
                                                                                children: "*"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                                                        clear: "all"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                        className: "loginInput form-control",
                                                                        type: "text",
                                                                        id: "new-fname",
                                                                        name: "first_name",
                                                                        "data-required": "true"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "form-group",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                        className: "loginLabel",
                                                                        title: "last_name",
                                                                        children: [
                                                                            "Last Name: ",
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: "required",
                                                                                children: "*"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                                                        clear: "all"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                        className: "loginInput form-control",
                                                                        type: "text",
                                                                        id: "new-lname",
                                                                        name: "last_name",
                                                                        "data-required": "true"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "form-group",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                        className: "loginLabel",
                                                                        title: "phone",
                                                                        children: [
                                                                            "Phone: ",
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: "required",
                                                                                children: "*"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                                                        clear: "all"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
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
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "col-12 col-sm-6",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "form-group",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                        className: "loginLabel",
                                                                        title: "address1",
                                                                        children: [
                                                                            "Street: ",
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: "required",
                                                                                children: "*"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                                                        clear: "all"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                        className: "loginInput form-control",
                                                                        type: "text",
                                                                        id: "new-address1",
                                                                        name: "address1",
                                                                        "data-required": "true"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "form-group",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                        className: "loginLabel",
                                                                        title: "address2",
                                                                        children: [
                                                                            "Unit/Suite:",
                                                                            " "
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                                                        clear: "all"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                        className: "loginInput form-control",
                                                                        type: "text",
                                                                        id: "new-address2",
                                                                        name: "address2",
                                                                        "data-required": "false"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "form-group",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                        className: "loginLabel",
                                                                        title: "city",
                                                                        children: [
                                                                            "City: ",
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: "required",
                                                                                children: "*"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                                                        clear: "all"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                        className: "loginInput form-control",
                                                                        type: "text",
                                                                        id: "new-city",
                                                                        name: "city",
                                                                        "data-required": "true"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "form-group",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                        className: "loginLabel",
                                                                        title: "state",
                                                                        children: [
                                                                            "State: ",
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: "required",
                                                                                children: "*"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                                                        clear: "all"
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                                        className: "loginSelect form-control",
                                                                        name: "state",
                                                                        id: "new-state",
                                                                        "data-required": "true",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                value: "--",
                                                                                children: "--"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                value: "AL",
                                                                                "data-type": "STATE",
                                                                                children: "Alabama"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                value: "AK",
                                                                                "data-type": "STATE",
                                                                                children: "Alaska"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                value: "AZ",
                                                                                "data-type": "STATE",
                                                                                children: "Arizona"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                value: "AR",
                                                                                "data-type": "STATE",
                                                                                children: "Arkansas"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                value: "CA",
                                                                                "data-type": "STATE",
                                                                                children: "California"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                value: "CO",
                                                                                "data-type": "STATE",
                                                                                children: "Colorado"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                value: "CT",
                                                                                "data-type": "STATE",
                                                                                children: "Connecticut"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                value: "DE",
                                                                                "data-type": "STATE",
                                                                                children: "Delaware"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                value: "DC",
                                                                                "data-type": "STATE",
                                                                                children: "District of Columbia"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                value: "FL",
                                                                                "data-type": "STATE",
                                                                                children: "Florida"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                value: "GA",
                                                                                "data-type": "STATE",
                                                                                children: "Georgia"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                value: "ID",
                                                                                "data-type": "STATE",
                                                                                children: "Idaho"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                value: "IL",
                                                                                "data-type": "STATE",
                                                                                children: "Illinois"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                value: "IN",
                                                                                "data-type": "STATE",
                                                                                children: "Indiana"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                value: "IA",
                                                                                "data-type": "STATE",
                                                                                children: "Iowa"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                value: "KS",
                                                                                "data-type": "STATE",
                                                                                children: "Kansas"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                value: "KY",
                                                                                "data-type": "STATE",
                                                                                children: "Kentucky"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                value: "LA",
                                                                                "data-type": "STATE",
                                                                                children: "Louisiana"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                value: "ME",
                                                                                "data-type": "STATE",
                                                                                children: "Maine"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                value: "MD",
                                                                                "data-type": "STATE",
                                                                                children: "Maryland"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                value: "MA",
                                                                                "data-type": "STATE",
                                                                                children: "Massachusetts"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                value: "MI",
                                                                                "data-type": "STATE",
                                                                                children: "Michigan"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                value: "MN",
                                                                                "data-type": "STATE",
                                                                                children: "Minnesota"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                value: "MS",
                                                                                "data-type": "STATE",
                                                                                children: "Mississippi"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                value: "MO",
                                                                                "data-type": "STATE",
                                                                                children: "Missouri"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                value: "MT",
                                                                                "data-type": "STATE",
                                                                                children: "Montana"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                value: "NE",
                                                                                "data-type": "STATE",
                                                                                children: "Nebraska"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                value: "NV",
                                                                                "data-type": "STATE",
                                                                                children: "Nevada"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                value: "NH",
                                                                                "data-type": "STATE",
                                                                                children: "New Hampshire"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                value: "NJ",
                                                                                "data-type": "STATE",
                                                                                children: "New Jersey"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                value: "NM",
                                                                                "data-type": "STATE",
                                                                                children: "New Mexico"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                value: "NY",
                                                                                "data-type": "STATE",
                                                                                children: "New York"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                value: "NC",
                                                                                "data-type": "STATE",
                                                                                children: "North Carolina"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                value: "ND",
                                                                                "data-type": "STATE",
                                                                                children: "North Dakota"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                value: "OH",
                                                                                "data-type": "STATE",
                                                                                children: "Ohio"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                value: "OK",
                                                                                "data-type": "STATE",
                                                                                children: "Oklahoma"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                value: "OR",
                                                                                "data-type": "STATE",
                                                                                children: "Oregon"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                value: "PA",
                                                                                "data-type": "STATE",
                                                                                children: "Pennsylvania"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                value: "RI",
                                                                                "data-type": "STATE",
                                                                                children: "Rhode Island"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                value: "SC",
                                                                                "data-type": "STATE",
                                                                                children: "South Carolina"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                value: "SD",
                                                                                "data-type": "STATE",
                                                                                children: "South Dakota"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                value: "TN",
                                                                                "data-type": "STATE",
                                                                                children: "Tennessee"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                value: "TX",
                                                                                "data-type": "STATE",
                                                                                children: "Texas"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                value: "UT",
                                                                                "data-type": "STATE",
                                                                                children: "Utah"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                value: "VT",
                                                                                "data-type": "STATE",
                                                                                children: "Vermont"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                value: "VA",
                                                                                "data-type": "STATE",
                                                                                children: "Virginia"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                value: "WA",
                                                                                "data-type": "STATE",
                                                                                children: "Washington"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                value: "WV",
                                                                                "data-type": "STATE",
                                                                                children: "West Virginia"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                value: "WI",
                                                                                "data-type": "STATE",
                                                                                children: "Wisconsin"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                value: "WY",
                                                                                "data-type": "STATE",
                                                                                children: "Wyoming"
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "form-group",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                        className: "loginLabel",
                                                                        title: "zip",
                                                                        children: [
                                                                            "Zip Code: ",
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: "required",
                                                                                children: "*"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                                                        clear: "all"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                        className: "loginInput form-control",
                                                                        type: "text",
                                                                        id: "new-zcode",
                                                                        name: "zip",
                                                                        "data-required": "true",
                                                                        "data-validate": "zip"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "form-group",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                        title: "emailAddress",
                                                                        className: "loginLabel form-label",
                                                                        children: "Country:*"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                                                        clear: "all"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                                                                        name: "country",
                                                                        className: "loginSelect",
                                                                        id: "country",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
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
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "modal-footer",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: "btn btn-dark mybtn",
                                                onClick: (e)=>{
                                                    (0,_controllers_account__WEBPACK_IMPORTED_MODULE_4__/* .CreateUser */ .lF)(e, setScreen);
                                                },
                                                children: "Create Account"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                type: "button",
                                                className: "btn btn-secondary mybtn",
                                                "data-dismiss": "modal",
                                                onClick: ()=>{
                                                    (0,_controllers_account__WEBPACK_IMPORTED_MODULE_4__/* .resetScreen */ .Ps)(setScreen);
                                                },
                                                children: "Close"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        id: "create-user",
                                        className: "alert d-none",
                                        role: "alert"
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginPopUp);


/***/ }),

/***/ 5707:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports cartSlice, setCartData */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const cartSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "cart",
    initialState: [],
    reducers: {
        setCartData: (state, action)=>{
            return action.payload;
        }
    }
});
const { setCartData  } = cartSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cartSlice.reducer);


/***/ })

};
;