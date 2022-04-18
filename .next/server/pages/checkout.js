"use strict";
(() => {
var exports = {};
exports.id = 2222;
exports.ids = [2222,7356];
exports.modules = {

/***/ 4404:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ checkout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "jquery"
var external_jquery_ = __webpack_require__(2947);
;// CONCATENATED MODULE: ./src/components/checkout/Heading.js


const Heading = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        id: "checkout-heading",
        className: "row",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "col-12 mainheading text-center",
            children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "text-center",
                children: "Check out"
            })
        })
    });
};
/* harmony default export */ const checkout_Heading = (Heading);

// EXTERNAL MODULE: ./src/controllers/account.js
var account = __webpack_require__(961);
;// CONCATENATED MODULE: ./src/components/checkout/WizardDots.js



const WizardDots = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        id: "wizard-dots",
        className: "form-wizard-header",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "Fill all form field to go next step"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "steps clearfix",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    role: "tablist",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            role: "tab",
                            "aria-disabled": "false",
                            className: "first checked done",
                            "aria-selected": "false",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                id: "wizard-t-0",
                                href: "javascript:void(0)",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "number",
                                    children: "1."
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            role: "tab",
                            "aria-disabled": "false",
                            className: "prev",
                            "aria-selected": "true",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                id: "wizard-t-1",
                                href: "javascript:void(0)",
                                "aria-controls": "wizard-p-1",
                                onClick: (e)=>{
                                    UpdateShipping(e, props.userData, props.setUserData);
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "current-info audible",
                                        children: "current step: "
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "number",
                                        children: "2."
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            role: "tab",
                            "aria-disabled": "false",
                            className: "current",
                            "aria-selected": "true",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                id: "wizard-t-2",
                                href: "#wizard-h-2",
                                "aria-controls": "wizard-p-1",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "current-info audible",
                                        children: "current step: "
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "number",
                                        children: "3."
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            role: "tab",
                            "aria-disabled": "false",
                            className: "last",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                id: "wizard-t-3",
                                href: "javascript:void(0)",
                                "aria-controls": "wizard-p-3",
                                onClick: (e)=>{
                                    UpdateBilling(e, props.userData, props.setUserData);
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "number",
                                    children: "4."
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
};
const UpdateShipping = async (e, userData, setUserData)=>{
    e.preventDefault();
    let { URL  } = process.env;
    let shipping = {
        first_name: document.getElementById("shipping_fname").value,
        last_name: document.getElementById("shipping_lname").value,
        phone: document.getElementById("shipping_phone").value,
        address1: document.getElementById("shipping_address1").value,
        address2: document.getElementById("shipping_address2").value,
        email: document.getElementById("shipping_email").value,
        city: document.getElementById("shipping_city").value,
        state: document.getElementById("shipping_state").value,
        zip_code: document.getElementById("shipping_zcode").value,
        country: document.getElementById("shipping_country").value
    };
    let newUser = userData;
    newUser = {
        ...newUser,
        shipping: shipping
    };
    let response = await (0,account/* updateAccountInfo */.ZC)(e, newUser);
    if (response.status == 200) {
        let user = await (0,account/* getCurrentUserData */.Ts)(e);
        setUserData(user);
    }
};
const UpdateBilling = async (e, userData, setUserData)=>{
    e.preventDefault();
    let { URL  } = process.env;
    try {
        let billing = {
            first_name: document.getElementById("billing_fname").value,
            last_name: document.getElementById("billing_lname").value,
            phone: document.getElementById("billing_phone").value,
            address1: document.getElementById("billing_address1").value,
            address2: document.getElementById("billing_address2").value,
            email: document.getElementById("billing_email").value,
            city: document.getElementById("billing_city").value,
            state: document.getElementById("billing_state").value,
            zip_code: document.getElementById("billing_zcode").value,
            country: document.getElementById("billing_country").value
        };
        let newUser = userData;
        newUser = {
            ...newUser,
            billing: billing
        };
        let response = await (0,account/* updateAccountInfo */.ZC)(e, newUser);
        if (response.status == 200) {
            let user = await (0,account/* getCurrentUserData */.Ts)(e);
            setUserData(user);
        }
    } catch (err) {}
};
/* harmony default export */ const checkout_WizardDots = (WizardDots);

;// CONCATENATED MODULE: ./src/components/checkout/ReturningCustomer.js



const ReturningCustomer = (props)=>{
    let user = props.userData;
    let loginstatus = "";
    let currentUserID = "";
    if (false) {}
    let userName = "";
    try {
        userName = user.billing.first_name;
    } catch (err) {}
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: props.screen == "authenticated" || loginstatus == "yes" ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                    children: [
                        "Welcome ",
                        /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                            children: userName
                        }),
                        ". You are logged in. Please proceed to the Billing & Shipping section to checkout your Order."
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("br", {})
            ]
        }) : /*#__PURE__*/ jsx_runtime_.jsx("section", {
            name: "returning-customer",
            className: "accordion accordion-flush",
            id: "accordionFlushrCustomer",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "accordion-item",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "accordion-header",
                        id: "flush-headingReturningCustomer",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "accordion-button collapsed",
                            type: "button",
                            "data-bs-toggle": "collapse",
                            "data-bs-target": "#flush-collapseReturningCustomer",
                            "aria-expanded": "false",
                            "aria-controls": "flush-collapseReturningCustomer",
                            children: "Returning customer? Click here to login"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        id: "flush-collapseReturningCustomer",
                        className: "accordion-collapse collapse",
                        "aria-labelledby": "flush-headingReturningCustomer",
                        "data-bs-parent": "#accordionFlushrCustomer",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "accordion-body p-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "If you have shopped with us before, please enter your details in the boxes below. If you are a new customer, please proceed to the Billing & Shipping section."
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    className: "coupon-input form-row-first",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                            children: [
                                                "Username or email",
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "required",
                                                    children: "*"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "text",
                                            name: "email",
                                            id: "login_email2"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    className: "coupon-input form-row-last",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                            children: [
                                                "password",
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "required",
                                                    children: "*"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "password",
                                            name: "password",
                                            id: "login_password2"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "clear"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    className: "text-left",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            id: "login-user2",
                                            className: "alert d-none",
                                            role: "alert",
                                            children: "ssss"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            type: "button",
                                            className: "button-login btn",
                                            name: "login",
                                            onClick: (e)=>{
                                                (0,account/* authenticateUser */.So)(e, props.setScreen, "checkout");
                                            },
                                            children: "Login"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "lost-password",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#",
                                        children: "Lost your password?"
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
/* harmony default export */ const checkout_ReturningCustomer = (ReturningCustomer);

;// CONCATENATED MODULE: external "validator"
const external_validator_namespaceObject = require("validator");
var external_validator_default = /*#__PURE__*/__webpack_require__.n(external_validator_namespaceObject);
;// CONCATENATED MODULE: ./src/controllers/smartValidator.js
// START VALIDATOR


let validatedStatus = false;
const validate = (formID)=>{
    validateInputs(formID);
    validateSelect(formID);
};
const validateInputs = (formID)=>{
    var form = document.getElementById(formID);
    let formInputs = [];
    try {
        formInputs = form.getElementsByTagName("input");
    } catch (err) {}
    validateNow(formID, formInputs);
};
const validateSelect = (formID)=>{
    var form = document.getElementById(formID);
    let formInputs = [];
    try {
        formInputs = form.getElementsByTagName("select");
    } catch (err) {}
    validateNow(formID, formInputs);
};
const validateNow = (formID, formInputs)=>{
    if (!formInputs || formInputs == "") {
        validatedStatus = true;
    }
    for(let i = 0; i < formInputs.length; i++){
        let e = formInputs[i];
        let id = e.id;
        let value = e.value;
        let name = e.name;
        let attrs = [
            {
                key: "isRequired",
                f: checkisRequired
            },
            {
                key: "isAlpha",
                f: checkAlpha
            },
            {
                key: "isNumeric",
                f: checkNumeric
            },
            {
                key: "isCreditCard",
                f: checkCreditCard
            },
            {
                key: "isCvv",
                f: checkCvv
            },
            {
                key: "isEmail",
                f: checkEmail
            },
            {
                key: "isZip",
                f: checkZip
            },
            {
                key: "isPhone",
                f: checkPhone
            },
            {
                key: "isPhone",
                f: checkPhone
            },
            {
                key: "isPhone",
                f: checkPhone
            }, 
        ];
        let keyVal = false;
        let key = "";
        for(let i1 = 0; i1 < attrs.length; i1++){
            key = attrs[i1].key;
            try {
                keyVal = e.getAttribute(key);
            } catch (err) {}
            if (keyVal) {
                attrs[i1].f(id, name, value);
            }
        }
    }
    if (!validatedStatus) {
        try {
            document.getElementById(formID + "-validate-state").value = false;
        } catch (err) {}
    } else {
        try {
            document.getElementById(formID + "-validate-state").value = true;
        } catch (err) {}
    }
};
const checkisRequired = (id, name, value)=>{
    try {
        value = value.replace(/ /g, "");
    } catch (err) {}
    let v = true;
    if (external_validator_default().isEmpty(value, {
        ignore_whitespace: true
    })) {
        document.getElementById(id + "-error").innerHTML = name + " Should not be empty...";
        v = false;
        validatedStatus = false;
    }
    if (v != false) {
        validatedStatus = true;
        try {
            document.getElementById(id + "-error").innerHTML = "";
            setTimeout(()=>{}, 2000);
        } catch (err) {}
    }
};
const checkAlpha = (id, name, value)=>{
    let v = true;
    if (!external_validator_default().isAlpha(value)) {
        document.getElementById(id + "-error").innerHTML = name + " is Invalid...";
        v = false;
        validatedStatus = false;
    }
    if (v != false) {
        validatedStatus = true;
        try {
            document.getElementById(id + "-error").innerHTML = "";
        } catch (err) {}
    }
};
const checkNumeric = (id, name, value)=>{
    let v = true;
    if (!external_validator_default().isNumeric(value, {
        no_symbols: false
    })) {
        document.getElementById(id + "-error").innerHTML = name + " should be Numeric...";
        v = false;
        validatedStatus = false;
    }
    if (v != false) {
        validatedStatus = true;
        try {
            document.getElementById(id + "-error").innerHTML = "";
        } catch (err) {}
    }
};
const checkCreditCard = (id, name, value)=>{
    let v = true;
    if (!external_validator_default().isCreditCard(value)) {
        document.getElementById(id + "-error").innerHTML = name + "is Invalid Credit Card Number...";
        v = false;
        validatedStatus = false;
    }
    if (v != false) {
        validatedStatus = true;
        try {
            document.getElementById(id + "-error").innerHTML = "";
        } catch (err) {}
    }
};
const checkCvv = (id, name, value)=>{
    let v = true;
    if (!external_validator_default().isNumeric(value, {
        ignore_whitespace: true
    }) || value.length < 3 || value.length > 4) {
        document.getElementById(id + "-error").innerHTML = name + " is Invalid...";
        v = false;
        validatedStatus = false;
    }
    if (v != false) {
        validatedStatus = true;
        try {
            document.getElementById(id + "-error").innerHTML = "";
        } catch (err) {}
    }
};
const checkEmail = (id, name, value)=>{
    let v = true;
    if (!external_validator_default().isEmail(value)) {
        document.getElementById(id + "-error").innerHTML = name + " is Invalid Email...";
        v = false;
        validatedStatus = false;
    }
    if (v != false) {
        validatedStatus = true;
        try {
            document.getElementById(id + "-error").innerHTML = "";
        } catch (err) {}
    }
};
const checkZip = (id, name, value)=>{
    let v = true;
    if (!/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(value)) {
        document.getElementById(id + "-error").innerHTML = name + " is Invalid Email...";
        v = false;
        validatedStatus = false;
    }
    if (v != false) {
        validatedStatus = true;
        try {
            document.getElementById(id + "-error").innerHTML = "";
        } catch (err) {}
    }
};
const checkPhone = (id, name, value)=>{
    let v = true;
    if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(value)) {
        document.getElementById(id + "-error").innerHTML = name + " is Invalid...";
        v = false;
        validatedStatus = false;
    }
    if (v != false) {
        validatedStatus = true;
        try {
            document.getElementById(id + "-error").innerHTML = "";
        } catch (err) {}
    }
};
const smartValidator_checkPasswordMatch = (p, cp)=>{
    let v = true;
    let pass = document.getElementById(p).value;
    let cPass = document.getElementById(cp).value;
    if (pass == cPass) {} else {
        document.getElementById(cp + "-error").innerHTML = "Password and Confirm password do not match";
        v = false;
        validatedStatus = false;
    }
    if (v != false) {
        validatedStatus = true;
        try {
            document.getElementById(cp + "-error").innerHTML = "";
        } catch (err) {}
    }
};
// END VALIDATOR
if (false) {}
const validateOnInputChange = ()=>{
    $("input").on("input", function(e) {
        let id = e.target.id;
        let name = e.target.name;
        let value = e.target.value;
        let attrs = [
            {
                key: "isRequired",
                f: checkisRequired
            },
            {
                key: "isAlpha",
                f: checkAlpha
            },
            {
                key: "isNumeric",
                f: checkNumeric
            },
            {
                key: "isCreditCard",
                f: checkCreditCard
            },
            {
                key: "isCvv",
                f: checkCvv
            },
            {
                key: "isEmail",
                f: checkEmail
            },
            {
                key: "isZip",
                f: checkZip
            },
            {
                key: "isPhone",
                f: checkPhone
            }, 
        ];
        let keyVal = false;
        let key = "";
        for(let i = 0; i < attrs.length; i++){
            key = attrs[i].key;
            keyVal = e.target.getAttribute(key);
            if (keyVal) {
                attrs[i].f(id, name, value);
            }
        }
    });
};
const validateOnSelectChange = ()=>{
    $("select").on("input", function(e) {
        let id = e.target.id;
        let name = e.target.name;
        let value = e.target.value;
        let attrs = [
            {
                key: "isRequired",
                f: checkisRequired
            },
            {
                key: "isAlpha",
                f: checkAlpha
            },
            {
                key: "isNumeric",
                f: checkNumeric
            },
            {
                key: "isCreditCard",
                f: checkCreditCard
            },
            {
                key: "isCvv",
                f: checkCvv
            },
            {
                key: "isEmail",
                f: checkEmail
            },
            {
                key: "isZip",
                f: checkZip
            },
            {
                key: "isPhone",
                f: checkPhone
            }, 
        ];
        let keyVal = false;
        let key = "";
        for(let i = 0; i < attrs.length; i++){
            key = attrs[i].key;
            keyVal = e.target.getAttribute(key);
            if (keyVal) {
                attrs[i].f(id, name, value);
            }
        }
    });
};
if (false) {}
const moveToNextStep = (e)=>{
    let formID = e.attr("formID");
    var parentFieldset = e.parents(".wizard-fieldset");
    var currentActiveStep = e.parents(".form-wizard").find(".form-wizard-steps .active");
    var next = e;
    let isvalidated = $(`#${formID}-validate-state`).val();
    var nextWizardStep = false;
    if (isvalidated == "true") {
        nextWizardStep = true;
    }
    parentFieldset.find(".wizard-required").each(function() {
        var thisValue = e.val();
        if (thisValue == "") {
            e.siblings(".wizard-form-error").slideDown();
            nextWizardStep = false;
        } else {
            e.siblings(".wizard-form-error").slideUp();
        }
    });
    if (nextWizardStep) {
        next.parents(".wizard-fieldset").removeClass("show", "400");
        currentActiveStep.removeClass("active").addClass("activated").next().addClass("active", "400");
        next.parents(".wizard-fieldset").next(".wizard-fieldset").addClass("show", "400");
        $(document).find(".wizard-fieldset").each(function() {
            if (e.hasClass("show")) {
                var formAtrr = e.attr("data-tab-content");
                $(document).find(".form-wizard-steps .form-wizard-step-item").each(function() {
                    if (e.attr("data-attr") == formAtrr) {
                        e.addClass("active");
                        var innerWidth = e.innerWidth();
                        var position = e.position();
                        $(document).find(".form-wizard-step-move").css({
                            left: position.left,
                            width: innerWidth
                        });
                    } else {
                        e.removeClass("active");
                    }
                });
            }
        });
    }
};

;// CONCATENATED MODULE: ./src/components/checkout/ShippingInfo.js




const ShippingInfo = (props)=>{
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
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("fieldset", {
        id: "wizard-p-0",
        className: "wizard-fieldset show",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                children: "Shipping Information"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                name: "shippingForm",
                id: "shippingForm",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        name: "shippingForm-validate-state",
                        id: "shippingForm-validate-state",
                        type: "hidden",
                        defaultValue: "false"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row mx-0",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "form-group col-lg-6 col-md-6 col-sm-12 col-12",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "text",
                                        className: "form-control",
                                        id: "shipping_fname",
                                        name: "First Name",
                                        placeholder: "First Name*",
                                        defaultValue: fname,
                                        isRequired: "true",
                                        isAlpha: "true"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        id: "shipping_fname-error",
                                        className: "text-danger"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "form-group col-lg-6 col-md-6 col-sm-12 col-12",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "text",
                                        className: "form-control",
                                        id: "shipping_lname",
                                        name: "Last Name",
                                        placeholder: "Last Name*",
                                        defaultValue: lname,
                                        isRequired: "true",
                                        isAlpha: "true"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        id: "shipping_lname-error",
                                        className: "text-danger"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "form-group col-lg-6 col-md-6 col-sm-12 col-12",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        isEmail: "true",
                                        type: "email",
                                        className: "form-control",
                                        id: "shipping_email",
                                        name: "Email",
                                        placeholder: "Email*",
                                        defaultValue: email
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        id: "shipping_email-error",
                                        className: "text-danger"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "form-group col-lg-6 col-md-6 col-sm-12 col-12",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "text",
                                        className: "form-control",
                                        id: "shipping_city",
                                        name: "City",
                                        placeholder: "City*",
                                        defaultValue: city,
                                        isRequired: "true",
                                        isAlpha: "true"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        id: "shipping_city-error",
                                        className: "text-danger"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "form-group col-12",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "text",
                                        className: "form-control",
                                        id: "shipping_address1",
                                        name: "Street",
                                        placeholder: "Street*",
                                        defaultValue: address1,
                                        isRequired: "true"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        id: "shipping_address1-error",
                                        className: "text-danger"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "form-group col-12",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "text",
                                        className: "form-control",
                                        id: "shipping_address2",
                                        name: "Unit/Suite",
                                        placeholder: "Unit/Suite:*",
                                        defaultValue: address2,
                                        isRequired: "true"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        id: "shipping_address2-error",
                                        className: "text-danger"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "form-group col-lg-6 col-md-6 col-sm-12 col-12",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                        className: "form-select col-lg-6 col-md-6 col-sm-12 col-12 form-control",
                                        "aria-label": "state select",
                                        id: "shipping_state",
                                        name: "State",
                                        defaultValue: state,
                                        isRequired: "true",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                value: "",
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
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        id: "shipping_state-error",
                                        className: "text-danger"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "form-group col-lg-6 col-md-6 col-sm-12 col-12",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                        className: "form-select col-lg-6 col-md-6 col-sm-12 col-12 form-control",
                                        "aria-label": "CountrySelect",
                                        id: "shipping_country",
                                        name: "Country",
                                        defaultValue: country,
                                        isRequired: "true",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                value: "",
                                                children: "Country"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                value: "us",
                                                children: "US"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        id: "shipping_country-error",
                                        className: "text-danger"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "form-group col-lg-6 col-md-6 col-sm-12 col-12",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "text",
                                        className: "form-control",
                                        id: "shipping_zcode",
                                        name: "Zip Code",
                                        placeholder: "Zip Code*",
                                        defaultValue: zcode,
                                        isZip: "true"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        id: "shipping_zcode-error",
                                        className: "text-danger"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "form-group col-lg-6 col-md-6 col-sm-12 col-12",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "text",
                                        className: "form-control",
                                        id: "shipping_phone",
                                        name: "Phone",
                                        placeholder: "Phone*",
                                        defaultValue: phone,
                                        isPhone: "true"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        id: "shipping_phone-error",
                                        className: "text-danger"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "form-group clearfix col-12 text-left",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "javascript:;",
                                    className: "form-wizard-next-btn",
                                    formID: "shippingForm",
                                    onClick: (e)=>{
                                        validate("shippingForm");
                                        ShippingInfo_UpdateShipping(e, props.userData, props.setUserData);
                                    },
                                    children: "Next"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const checkout_ShippingInfo = (ShippingInfo);
const ShippingInfo_UpdateShipping = async (e, userData, setUserData)=>{
    e.preventDefault();
    let { URL  } = process.env;
    let shipping = {
        first_name: document.getElementById("shipping_fname").value,
        last_name: document.getElementById("shipping_lname").value,
        phone: document.getElementById("shipping_phone").value,
        address1: document.getElementById("shipping_address1").value,
        address2: document.getElementById("shipping_address2").value,
        email: document.getElementById("shipping_email").value,
        city: document.getElementById("shipping_city").value,
        state: document.getElementById("shipping_state").value,
        zip_code: document.getElementById("shipping_zcode").value,
        country: document.getElementById("shipping_country").value
    };
    let newUser = userData;
    newUser = {
        ...newUser,
        shipping: shipping
    };
    let response = await (0,account/* updateAccountInfo */.ZC)(e, newUser);
    if (response.status == 200) {
        let user = await (0,account/* getCurrentUserData */.Ts)(e);
        setUserData(user);
    }
};

;// CONCATENATED MODULE: ./src/components/checkout/ShippingMethods.js



const ShippingMethods = (props)=>{
    const handleChange = (e)=>{
        const { name , value  } = e.target;
        props.setShippingMethod({
            name: name,
            amount: value
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("fieldset", {
        id: "wizard-p-1",
        className: "wizard-fieldset",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                children: "Shipping Method"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                name: "shippingMethodForm",
                id: "shippingMethodForm",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        name: "shippingMethodForm-validate-state",
                        id: "shippingMethodForm-validate-state",
                        type: "text",
                        defaultValue: "false"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "form-group col-lg-12 col-md-12 col-sm-12 col-12",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "wizard-form-radio",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    name: "Nick Shipping ($0.00)",
                                    id: "nickShipping",
                                    type: "radio",
                                    "data-name": "Nick Shipping ($0.00)",
                                    value: 0,
                                    onChange: (e)=>{
                                        handleChange(e);
                                    },
                                    defaultChecked: props.shippingMethod.name === "Nick Shipping ($0.00)",
                                    checked: props.shippingMethod.name === "Nick Shipping ($0.00)"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    children: "Nick Shipping ($0.00)"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "form-group col-lg-12 col-md-12 col-sm-12 col-12",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "wizard-form-radio",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    name: "UPS 2ND Day Air ($6.00)",
                                    "data-name": "UPS 2ND Day Air ($6.00)",
                                    id: "ups2ndDayAir",
                                    type: "radio",
                                    value: 6,
                                    onChange: (e)=>{
                                        handleChange(e);
                                    },
                                    defaultChecked: props.shippingMethod.name === "UPS 2ND Day Air ($6.00)",
                                    checked: props.shippingMethod.name === "UPS 2ND Day Air ($6.00)"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    children: "UPS 2ND Day Air ($6.00)"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "form-group col-lg-12 col-md-12 col-sm-12 col-12",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "wizard-form-radio",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    name: "FEDEX 2 Day ($5.00)",
                                    "data-name": "FEDEX 2 Day ($5.00)",
                                    id: "fedex",
                                    type: "radio",
                                    value: 5,
                                    onChange: (e)=>{
                                        handleChange(e);
                                    },
                                    defaultChecked: props.shippingMethod.name === "FEDEX 2 Day ($5.00)",
                                    checked: props.shippingMethod.name === "FEDEX 2 Day ($5.00)"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    children: "FEDEX 2 Day ($5.00)"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "form-group col-lg-12 col-md-12 col-sm-12 col-12",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "wizard-form-radio",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    name: "In Store Pickup ($0.00)",
                                    "data-name": "In Store Pickup ($0.00)",
                                    id: "instore",
                                    type: "radio",
                                    value: 0,
                                    onChange: (e)=>{
                                        handleChange(e);
                                    },
                                    defaultChecked: props.shippingMethod.name === "In Store Pickup ($0.00)",
                                    checked: props.shippingMethod.name === "In Store Pickup ($0.00)"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    children: "In Store Pickup ($0.00)"
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "form-group clearfix",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "javascript:;",
                        className: "form-wizard-previous-btn float-left",
                        children: "Previous"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "javascript:;",
                        className: "form-wizard-next-btn float-right",
                        formID: "shippingMethodForm",
                        onClick: (e)=>{
                            validate("shippingMethodForm");
                        },
                        children: "Next"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const checkout_ShippingMethods = (ShippingMethods);

;// CONCATENATED MODULE: ./src/controllers/checkout.js
const selectShipping = (e, setShippingCharges, setShippingMethod)=>{
    e.preventDefault();
// setShippingCharges(e.target.value);
// setShippingMethod(e.target.getAttribute("data-name"));
};
const sameBillingAsShippingAddress = (e, userData, setUserData, setSameBillingAsShipping, setBillingEdit)=>{
    e.preventDefault();
    let ship = userData.shipping;
    let bil = userData.billing;
    let newUserdata = userData;
    newUserdata.billing = ship;
    setUserData(newUserdata);
    setSameBillingAsShipping(true);
    setBillingEdit(false);
};
const editBillingAddress = (e, setBillingEdit, setSameBillingAsShipping)=>{
    setBillingEdit(true);
    setSameBillingAsShipping(false);
};

;// CONCATENATED MODULE: ./src/components/checkout/BillingInfo.js





const BillingInfo = (props)=>{
    const { 0: billingEdit , 1: setBillingEdit  } = (0,external_react_.useState)(false);
    const { 0: sameBillingAsShipping , 1: setSameBillingAsShipping  } = (0,external_react_.useState)(false);
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
    return /*#__PURE__*/ jsx_runtime_.jsx("fieldset", {
        className: "wizard-fieldset",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
            name: "billingForm",
            id: "billingForm",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                    name: "billingForm-validate-state",
                    id: "billingForm-validate-state",
                    type: "hidden",
                    defaultValue: "true"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    id: "billingAddress",
                    className: "row",
                    children: [
                        fname && fname != "" ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "col-lg-6 col-md-6 col-sm-12 col-12",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                    className: "font-weight-bold",
                                    children: "Billing Address"
                                }),
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
                                        editBillingAddress(e, setBillingEdit, setSameBillingAsShipping);
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                        children: " Edit"
                                    })
                                })
                            ]
                        }) : "",
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-6 col-md-6 col-sm-12 col-12",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "shipping",
                                href: "javascript:;",
                                onClick: (e)=>{
                                    sameBillingAsShippingAddress(e, props.userData, props.setUserData, setSameBillingAsShipping, setBillingEdit);
                                },
                                children: "Same as Shipping"
                            })
                        })
                    ]
                }),
                billingEdit ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row mx-0",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "form-group col-lg-6 col-md-6 col-sm-12 col-12",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "text",
                                    className: "form-control",
                                    id: "billing_fname",
                                    name: "First Name",
                                    placeholder: "First Name*",
                                    defaultValue: fname,
                                    isAlpha: "true"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    id: "billing_fname-error",
                                    className: "text-danger"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "form-group col-lg-6 col-md-6 col-sm-12 col-12",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "text",
                                    className: "form-control",
                                    id: "billing_lname",
                                    name: "Last Name",
                                    defaultValue: lname,
                                    placeholder: "Last Name",
                                    isRequired: true,
                                    isAlpha: "true"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    id: "billing_lname-error",
                                    className: "text-danger"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "form-group col-lg-6 col-md-6 col-sm-12 col-12",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "email",
                                    className: "form-control",
                                    id: "billing_email",
                                    name: "Email",
                                    defaultValue: email,
                                    placeholder: "Email",
                                    isEmail: "true"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    id: "billing_email-error",
                                    className: "text-danger"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "form-group col-lg-6 col-md-6 col-sm-12 col-12",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "password",
                                    className: "form-control",
                                    id: "billing_password",
                                    name: "Password",
                                    defaultValue: password,
                                    placeholder: "Password",
                                    isPassword: "true",
                                    pMatch: "true"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    id: "billing_password-error",
                                    className: "text-danger"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "form-group col-lg-6 col-md-6 col-sm-12 col-12",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "password",
                                    className: "form-control",
                                    id: "billing_cpassword",
                                    name: "Confirm Password",
                                    defaultValue: password,
                                    placeholder: "Confirm Password",
                                    isPassword: "true",
                                    cpMatch: "true",
                                    onChange: ()=>{
                                        checkPasswordMatch("billing_cpassword", "billing_cpassword");
                                    }
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    id: "billing_cpassword-error",
                                    className: "text-danger"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "form-group col-lg-6 col-md-6 col-sm-12 col-12",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "text",
                                    className: "form-control",
                                    id: "billing_city",
                                    name: "City",
                                    defaultValue: city,
                                    placeholder: "City",
                                    isAlpha: "true"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    id: "billing_city-error",
                                    className: "text-danger"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "form-group col-lg-12 col-md-12 col-sm-12 col-12",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "text",
                                    className: "form-control",
                                    id: "billing_address1",
                                    name: "Street",
                                    defaultValue: address1,
                                    placeholder: "Street",
                                    isRequired: "true"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    id: "billing_address1-error",
                                    className: "text-danger"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "form-group col-lg-12 col-md-12 col-sm-12 col-12",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "text",
                                    className: "form-control",
                                    id: "billing_address2",
                                    name: "Suit/Unit",
                                    defaultValue: address2,
                                    placeholder: "Suit/Unit",
                                    isRequired: "true"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    id: "billing_address2-error",
                                    className: "text-danger"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "form-group col-lg-6 col-md-6 col-sm-12 col-12",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                    className: "form-select col-lg-6 col-md-6 col-sm-12 col-12 form-control",
                                    "aria-label": "state select",
                                    id: "billing_state",
                                    name: "State",
                                    defaultValue: state,
                                    placeholder: "State",
                                    isRequired: "true",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                            value: "",
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
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    id: "billing_state-error",
                                    className: "text-danger"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "form-group col-lg-6 col-md-6 col-sm-12 col-12",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                    className: "form-select col-lg-6 col-md-6 col-sm-12 col-12 form-control",
                                    id: "billing_country",
                                    name: "Country",
                                    defaultValue: country,
                                    placeholder: "Country",
                                    isRequired: "true",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                            value: "",
                                            children: "Country"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                            value: "us",
                                            children: "US"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    id: "billing_country-error",
                                    className: "text-danger"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "form-group col-lg-6 col-md-6 col-sm-12 col-12",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "text",
                                    className: "form-control",
                                    id: "billing_zcode",
                                    name: "Zip Code",
                                    defaultValue: zcode,
                                    placeholder: "Zip Code",
                                    isZip: "true"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    id: "billing_zcode-error",
                                    className: "text-danger"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "form-group col-lg-6 col-md-6 col-sm-12 col-12",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "text",
                                    className: "form-control",
                                    id: "billing_phone",
                                    name: "Phone",
                                    defaultValue: phone,
                                    placeholder: "Phone",
                                    isPhone: "True"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    id: "billing_phone-error",
                                    className: "text-danger"
                                })
                            ]
                        })
                    ]
                }) : "",
                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                sameBillingAsShipping ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "alert alert-dark",
                    role: "alert",
                    children: "Same Billing has been Selected as Shipping"
                }) : "",
                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "form-group clearfix",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "javascript:;",
                            className: "form-wizard-previous-btn float-left",
                            children: "Previous"
                        }),
                        billingEdit ? /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "javascript:;",
                            className: "form-wizard-next-btn float-right",
                            onClick: (e)=>{
                                BillingInfo_UpdateBilling(e, props.userData, props.setUserData);
                            },
                            formID: "billingForm",
                            children: "Next"
                        }) : /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "javascript:;",
                            className: "form-wizard-next-btn float-right",
                            onClick: (e)=>{
                                BillingInfo_UpdateBilling(e, props.userData, props.setUserData);
                            },
                            formID: "billingForm",
                            children: "Next"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const checkout_BillingInfo = (BillingInfo);
const BillingInfo_UpdateBilling = async (e, userData, setUserData)=>{
    e.preventDefault();
    let { URL  } = process.env;
    try {
        let billing = {
            first_name: document.getElementById("billing_fname").value,
            last_name: document.getElementById("billing_lname").value,
            phone: document.getElementById("billing_phone").value,
            address1: document.getElementById("billing_address1").value,
            address2: document.getElementById("billing_address2").value,
            email: document.getElementById("billing_email").value,
            city: document.getElementById("billing_city").value,
            state: document.getElementById("billing_state").value,
            zip_code: document.getElementById("billing_zcode").value,
            country: document.getElementById("billing_country").value
        };
        let newUser = userData;
        newUser = {
            ...newUser,
            billing: billing
        };
        let response = await (0,account/* updateAccountInfo */.ZC)(e, newUser);
        if (response.status == 200) {
            let user = await (0,account/* getCurrentUserData */.Ts)(e);
            setUserData(user);
        }
    } catch (err) {}
};

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: ./src/controllers/paypal.js
var paypal = __webpack_require__(9809);
// EXTERNAL MODULE: ./src/controllers/order.js
var order = __webpack_require__(998);
// EXTERNAL MODULE: ./src/controllers/cart.js
var controllers_cart = __webpack_require__(2358);
;// CONCATENATED MODULE: ./src/controllers/authorize.net.js





const authenticateMerchant = (ApiContracts)=>{
    console.log("api id", process.env.AUTHORIZE_API_LOGIN_ID);
    const merchantAuthenticationType = new ApiContracts.MerchantAuthenticationType();
    merchantAuthenticationType.setName(process.env.AUTHORIZE_API_LOGIN_ID);
    merchantAuthenticationType.setTransactionKey(process.env.AUTHORIZE_TRANSACTION_KEY);
    return merchantAuthenticationType;
};
const setCardValues = (ApiContracts, cardInfo)=>{
    const creditCard = new ApiContracts.CreditCardType();
    creditCard.setCardNumber(cardInfo.cardNumber);
    creditCard.setExpirationDate(cardInfo.expiry);
    creditCard.setCardCode(cardInfo.cvv);
    return creditCard;
};
const setPaymentType = (ApiContracts, creditCard)=>{
    const paymentType = new ApiContracts.PaymentType();
    paymentType.setCreditCard(creditCard);
    return paymentType;
};
const setOderDetails = (ApiContracts, orderData)=>{
    const order = new ApiContracts.OrderType();
    order.setInvoiceNumber(orderData.orderNumber);
    order.setDescription(orderData.orderDesc);
    return order;
};
const setTaxDetails = (ApiContracts, orderData)=>{
    const tax = new ApiContracts.ExtendedAmountType();
    tax.setAmount(parseFloat(orderData.order.taxDetail.amount));
    tax.setName(orderData.order.taxDetail.name);
    tax.setDescription(orderData.order.taxDetail.description);
    return tax;
};
const setDutyAmount = (ApiContracts, orderData)=>{
    let dutyAmount = "0.0";
    dutyAmount = orderData.order.duty.amount;
    if (!dutyAmount || dutyAmount == "") {
        dutyAmount = "0.0";
    }
    const duty = new ApiContracts.ExtendedAmountType();
    duty.setAmount(dutyAmount);
    duty.setName(orderData.order.duty.name);
    duty.setDescription(orderData.order.duty.description);
    return duty;
};
const setShippingAmount = (ApiContracts, orderData)=>{
    const shipping = new ApiContracts.ExtendedAmountType();
    shipping.setAmount(parseFloat(orderData.order.shipping.amount));
    shipping.setName(orderData.order.name);
    shipping.setDescription(orderData.order.description);
    return shipping;
};
const setBillTo = (ApiContracts, orderData)=>{
    const billTo = new ApiContracts.CustomerAddressType();
    billTo.setFirstName(orderData.user.billing.first_name);
    billTo.setLastName(orderData.user.billing.last_name);
    billTo.setCompany(orderData.user.billing.company);
    billTo.setAddress(orderData.user.billing.address1 + " " + orderData.user.billing.address2);
    billTo.setCity(orderData.user.billing.city);
    billTo.setState(orderData.user.billing.state);
    billTo.setZip(orderData.user.billing.zip_code);
    billTo.setCountry(orderData.user.billing.country);
    return billTo;
};
const setShipTo = (ApiContracts, orderData)=>{
    var shipTo = new ApiContracts.CustomerAddressType();
    shipTo.setFirstName(orderData.user.shipping.first_name);
    shipTo.setLastName(orderData.user.shipping.last_name);
    shipTo.setCompany(orderData.user.shipping.company);
    shipTo.setAddress(orderData.user.shipping.address1 + " " + orderData.user.shipping.address2);
    shipTo.setCity(orderData.user.shipping.city);
    shipTo.setState(orderData.user.shipping.state);
    shipTo.setZip(orderData.user.shipping.zip_code);
    shipTo.setCountry(orderData.user.shipping.country);
    return shipTo;
};
const setLineItems = (ApiContracts, orderData)=>{
    var lineItem_id1 = new ApiContracts.LineItemType();
    lineItem_id1.setItemId("1");
    lineItem_id1.setName("vase");
    lineItem_id1.setDescription("cannes logo");
    lineItem_id1.setQuantity("18");
    lineItem_id1.setUnitPrice(45);
    let lineItem_id2 = new ApiContracts.LineItemType();
    lineItem_id2.setItemId("2");
    lineItem_id2.setName("vase2");
    lineItem_id2.setDescription("cannes logo2");
    lineItem_id2.setQuantity("28");
    lineItem_id2.setUnitPrice("25.00");
    let lineItemList = [];
    lineItemList.push(lineItem_id1);
    lineItemList.push(lineItem_id2);
    let lineItems = new ApiContracts.ArrayOfLineItem();
    lineItems.setLineItem(lineItemList);
    return lineItems;
};
const preventDuplicateTransaction = (ApiContracts)=>{
    const transactionSetting1 = new ApiContracts.SettingType();
    transactionSetting1.setSettingName("duplicateWindow");
    transactionSetting1.setSettingValue("120");
    return transactionSetting1;
};
const setRecurringBilling = (ApiContracts)=>{
    const transactionSetting2 = new ApiContracts.SettingType();
    transactionSetting2.setSettingName("recurringBilling");
    transactionSetting2.setSettingValue("false");
    return transactionSetting2;
};
const setTransactionType = (ApiContracts)=>{
    const transactionRequestType = new ApiContracts.TransactionRequestType();
    transactionRequestType.setTransactionType(ApiContracts.TransactionTypeEnum.AUTHCAPTURETRANSACTION);
    return transactionRequestType;
};
const processTransaction = (ApiContracts, ctrl, res)=>{
    ctrl.execute(function() {
        var apiResponse = ctrl.getResponse();
        var response = new ApiContracts.CreateTransactionResponse(apiResponse);
        //pretty print response
        //console.log(JSON.stringify(response, null, 2));
        if (response != null) {
            if (response.getMessages().getResultCode() == ApiContracts.MessageTypeEnum.OK) {
                if (response.getTransactionResponse().getMessages() != null) {
                    console.log("Successfully created transaction with Transaction ID: " + response.getTransactionResponse().getTransId());
                    console.log("Response Code: " + response.getTransactionResponse().getResponseCode());
                    console.log("Message Code: " + response.getTransactionResponse().getMessages().getMessage()[0].getCode());
                    console.log("Description: " + response.getTransactionResponse().getMessages().getMessage()[0].getDescription());
                } else {
                    console.log("Failed Transaction.");
                    if (response.getTransactionResponse().getErrors() != null) {
                        console.log("Error Code: " + response.getTransactionResponse().getErrors().getError()[0].getErrorCode());
                        console.log("Error message: " + response.getTransactionResponse().getErrors().getError()[0].getErrorText());
                    }
                }
            } else {
                console.log("Failed Transaction. ");
                if (response.getTransactionResponse() != null && response.getTransactionResponse().getErrors() != null) {
                    console.log("Error Code: " + response.getTransactionResponse().getErrors().getError()[0].getErrorCode());
                    console.log("Error message: " + response.getTransactionResponse().getErrors().getError()[0].getErrorText());
                } else {
                    console.log("Error Code: " + response.getMessages().getMessage()[0].getCode());
                    console.log("Error message: " + response.getMessages().getMessage()[0].getText());
                }
            }
        } else {
            console.log("Null Response.");
        }
        return res.json(response);
    });
};
const paymentAuthorize = async (e, setCart)=>{
    let { URL  } = process.env;
    e.preventDefault();
    let orderNumber = Array.from(Array(20), ()=>Math.floor(Math.random() * 20).toString(20)
    ).join("");
    const dateTime = new Date();
    let orderDescription = "";
    let orderDetails = {};
    orderDetails = (0,order/* getOrderDetails */.s$)("orderDetails");
    let cardInfo = {
        cardHolderName: "",
        cardNumber: "",
        expiry: "",
        cvv: ""
    };
    try {
        cardInfo.cardHolderName = document.getElementById("cardHolder").value;
    } catch (err) {}
    try {
        cardInfo.cardNumber = document.getElementById("cardNumber").value;
    } catch (err1) {}
    try {
        let expiry = document.getElementById("expiryMonth").value + "/" + document.getElementById("expiryYear").value;
        cardInfo.expiry = expiry;
    } catch (err2) {}
    try {
        cardInfo.cvv = document.getElementById("cvv2").value;
    } catch (err3) {}
    orderDescription = cardInfo.cardHolderName + " " + dateTime + " " + orderNumber;
    orderDetails.orderNumber = orderNumber;
    orderDetails.orderDesc = orderDescription;
    orderDetails.date_created = dateTime;
    (0,order/* setOrderDetails */.gF)("orderDetails", orderDetails);
    const response = await fetch(URL + "/api/payment/authorize.net/create-order", {
        method: "POST",
        body: JSON.stringify({
            orderDetails: orderDetails,
            cardInfo: cardInfo
        })
    });
    const data = await response.json();
    if (external_validator_default().isCreditCard(cardInfo.cardNumber)) {
        processOrder(data, orderDetails, setCart);
    } else {
        alert("invalid card number");
    }
};
const processOrder = (data, orderDetails, setCart)=>{
    let tCode = "";
    try {
        tCode = data.messages.resultCode.toLowerCase();
    } catch (err) {}
    if (tCode == "ok") {
        let orderDetails = (0,order/* getOrderDetails */.s$)("orderDetails");
        orderDetails.payment.id = data.transactionResponse.transId;
        orderDetails.payment.paymentMethod = "Credit Card";
        orderDetails.payment.status = "transaction approved";
        orderDetails.accountNumber = data.transactionResponse.accountNumber;
        orderDetails.accountType = data.transactionResponse.accountType;
        orderDetails.networkTransId = data.transactionResponse.networkTransId;
        orderDetails.transId = data.transactionResponse.transId;
        (0,order/* setOrderDetails */.gF)("orderDetails", orderDetails);
        (0,controllers_cart/* setCartContent */._P)("cart", []);
        setCart([]);
        setTimeout(()=>{
            router_default().push("/thank-you");
        }, 0);
    } else {
        try {
            orderDetails.error = data.transactionResponse.errors.error[0].errorText;
        } catch (err) {
            orderDetails.error = "Something Went Wrong! Please Try Again.";
        }
        (0,order/* setOrderDetails */.gF)("orderDetails", orderDetails);
        setTimeout(()=>{
            router_default().push("/error");
        }, 0);
    }
};

;// CONCATENATED MODULE: ./src/components/checkout/PaymentInfo.js






let validated = true;
const PaymentInfo = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("fieldset", {
        className: "wizard-fieldset",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                children: "Payment Information"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "checkout-paypal",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                    type: "button",
                    onClick: (e)=>{
                        (0,paypal/* processPaymentPaypal */.Du)(e, props.currency, props.grandTotal);
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            id: "checkout",
                            src: "https://thepediazone.com/wp-content/uploads/2021/04/paypal-information.png",
                            alt: ""
                        }),
                        "Checkout"
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "form-group",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "payment-methods",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "We Accept"
                        }),
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "fab fa-cc-visa"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "fab fa-cc-mastercard"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "fab fa-cc-amex"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                name: "cardForm",
                id: "cardForm",
                method: "",
                action: "",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "form-group",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: "wizard-form-text-label",
                                children: "Name On Card*"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "text",
                                className: "form-control wizard-required",
                                id: "cardHolder",
                                name: "Name on Card",
                                onChange: (e)=>{
                                    validate("cardForm", "cardHolder");
                                },
                                required: "true",
                                isAlpha: "true"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                id: "cardHolder-error",
                                className: "text-danger"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-12",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "form-group",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        className: "wizard-form-text-label",
                                        children: "Card Number*"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "text",
                                        className: "form-control wizard-required",
                                        id: "cardNumber",
                                        name: "Card Number",
                                        onChange: (e)=>{
                                            validate("cardForm", "cardNumber");
                                        },
                                        isCreditCard: "true"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        id: "cardNumber-error",
                                        className: "text-danger"
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-12",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    className: "wizard-form-text-label",
                                    children: "Expiration Date*"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-6 col-md-6 col-sm-6",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "form-group",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                            className: "form-control",
                                            id: "expiryMonth",
                                            name: "Expiry Month",
                                            onChange: (e)=>{
                                                validate("cardForm", "expiryMonth");
                                            },
                                            required: "true",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "",
                                                    children: "Month"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "1",
                                                    children: "jan"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "2",
                                                    children: "Feb"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "3",
                                                    children: "March"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "4",
                                                    children: "April"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "5",
                                                    children: "May"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "6",
                                                    children: "June"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "7",
                                                    children: "Jully"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "8",
                                                    children: "August"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "9",
                                                    children: "Sept"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "10",
                                                    children: "Oct"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "11",
                                                    children: "Nov"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "12",
                                                    children: "Dec"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            id: "expiryMonth-error",
                                            className: "text-danger"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-6 col-md-6 col-sm-6",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "form-group",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                            className: "form-control",
                                            name: "Expiry Year",
                                            id: "expiryYear",
                                            onChange: (e)=>{
                                                validate("cardForm", "expiryYear");
                                            },
                                            required: "true",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "",
                                                    children: "Years"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "2019",
                                                    children: "2019"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "2020",
                                                    children: "2020"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "2021",
                                                    children: "2021"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "2022",
                                                    children: "2022"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "2023",
                                                    children: "2023"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "2024",
                                                    children: "2024"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "2025",
                                                    children: "2025"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "2026",
                                                    children: "2026"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "2027",
                                                    children: "2027"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "2028",
                                                    children: "2028"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "2029",
                                                    children: "2029"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "2030",
                                                    children: "2030"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "2031",
                                                    children: "2031"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "2032",
                                                    children: "2032"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "2033",
                                                    children: "2033"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "2034",
                                                    children: "2034"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "2035",
                                                    children: "2035"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "2036",
                                                    children: "2036"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "2037",
                                                    children: "2037"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "2038",
                                                    children: "2038"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "2039",
                                                    children: "2039"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                    value: "2040",
                                                    children: "2040"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            id: "expiryYear-error",
                                            className: "text-danger"
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-6",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "form-group",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                            className: "wizard-form-text-label",
                                            children: "CVV2*"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "text",
                                            className: "form-control wizard-required",
                                            id: "cvv2",
                                            name: "cvv",
                                            onChange: (e)=>{
                                                validate("cardForm", "cvv2");
                                            },
                                            isCvv: "true"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            id: "cvv2-error",
                                            className: "text-danger"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-6",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "button",
                                    name: "orderSubmit",
                                    value: "Submit Your Order",
                                    className: "text-light bg-dark",
                                    onClick: (e)=>{
                                        paymentAuthorize(e, props.setCart);
                                    }
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "form-group clearfix",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "javascript:;",
                    className: "form-wizard-previous-btn float-left",
                    children: "Previous"
                })
            })
        ]
    });
};
/* harmony default export */ const checkout_PaymentInfo = (PaymentInfo);

;// CONCATENATED MODULE: ./src/components/checkout/Cart.js



const Cart = (props)=>{
    let cart = [];
    cart = props.cart;
    if (!cart || cart.length < 1) {
        cart = [];
    }
    let { URL  } = process.env;
    let total = 0;
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: cart && cart.length > 0 ? cart.map((product)=>{
            let prodName = "";
            prodName = product.name;
            if (prodName.length > 30) {
                prodName = prodName.substring(0, 300);
                prodName = prodName + "...";
                try {
                    total = product.qty * product.total;
                } catch (err) {}
            }
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
                className: "row product m-sm-4 m-2",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col px-sm-3 px-2 pt-3 pb-3 d-flex justify-content-center col-lg-4 col-md-12 col-sm-12 col-12",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: product.image,
                            alt: "",
                            className: "product-img"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col px-sm-3 px-2 pt-3 col-lg-8 col-md-12 col-sm-12 col-12",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "d-flex flex-column justify-content-between",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    href: "#",
                                    className: "text-decoration-none pb-3 name",
                                    children: prodName
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "d-flex row",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "d-flex flex-column attr col-lg-3 col-md-12 col-sm-12 col-12",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                children: [
                                                    "Price: $",
                                                    product.itemPrice
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "d-flex flex-column col-lg-6 col-md-12 col-sm-12 col-12",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "d-flex align-items-center",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "btn btn-primary",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "fas fa-plus",
                                                            onClick: (e)=>{
                                                                updateQTY(e, "increment", product.id, props.setCart);
                                                            }
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "bg-light number",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            defaultValue: product.qty,
                                                            type: "text",
                                                            id: "qtyBox" + product.id,
                                                            onChange: (e)=>{
                                                                updateQTY(e, "none", product.id, props.setCart);
                                                            }
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "btn btn-primary",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "fas fa-minus",
                                                            onClick: (e)=>{
                                                                updateQTY(e, "decrement", product.id, props.setCart);
                                                            }
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "border-0 col-lg-3 col-md-12 col-sm-12 col-12",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "w-100",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "total",
                                                            children: "Total Price"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                            className: "final",
                                                            children: [
                                                                "$",
                                                                total
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    className: "mr-1",
                                                    src: URL + "/images/trash-2.svg",
                                                    onClick: ()=>{
                                                        (0,controllers_cart/* removeItem */.cl)(product.id, props.setCart);
                                                    }
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "remove"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            }, product.name);
        }) : ""
    });
};
/* harmony default export */ const checkout_Cart = (Cart);
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

;// CONCATENATED MODULE: ./src/components/checkout/OrderSummary.js



const OrderSummary = (props)=>{
    let tax = props.tax;
    let shippingMode = props.shippingMethod.name;
    let shippingCharges = props.shippingMethod.amount;
    let subTotal = 0;
    let cart = [];
    cart = props.cart;
    if (!cart || cart.length < 1) {
        cart = {};
    }
    let cartTotal = 0;
    try {
        cartTotal = cart.reduce((prod, { total  })=>prod + total
        , 0);
        cartTotal = Number(cartTotal).toFixed(2);
    } catch (err) {}
    if (!tax || tax == "") tax = 0;
    try {
        subTotal = parseInt(cartTotal) + parseInt(tax);
    } catch (err1) {}
    try {
        subTotal = parseInt(subTotal) + parseInt(shippingCharges);
    } catch (err2) {}
    subTotal = Number(subTotal).toFixed(2);
    props.setGrandTotal(subTotal);
    let orderDetails = {};
    orderDetails = (0,order/* getOrderDetails */.s$)("orderDetails");
    setTimeout(()=>{
        try {
            orderDetails.order.shipping.name = shippingMode;
        } catch (err) {}
        try {
            orderDetails.order.shipping.amount = shippingCharges;
        } catch (err3) {}
        try {
            orderDetails.order.total = cartTotal;
        } catch (err4) {}
        try {
            orderDetails.order.tax = tax;
            orderDetails.order.taxDetail = {
                name: "tax",
                amount: tax,
                description: "tax"
            };
        } catch (err5) {}
        try {
            orderDetails.order.subTotal = subTotal;
        } catch (err6) {}
        (0,order/* setOrderDetails */.gF)("orderDetails", orderDetails);
    }, 0);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
            className: "list-group order-totals ",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: "list-group-item ",
                    "data-key": "TOTALPRICE",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        className: "row mx-0",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "col-7 displayName",
                                children: "Total Cost of Items:"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                className: "col-5 displayValue text-right",
                                "data-key": "TOTALPRICE",
                                children: [
                                    "$",
                                    cartTotal
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: "list-group-item d-none",
                    "data-key": "DISCOUNTS",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        className: "row mx-0",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "col-7 displayName",
                                children: "Discounts:"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "col-5 displayValue text-right",
                                "data-key": "DISCOUNTS",
                                children: "$0.00"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: "list-group-item ",
                    "data-key": "SHIPPING_CHARGE",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        className: "row mx-0",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "col-7 displayName",
                                children: "Shipping & handling:"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                className: "col-5 displayValue text-right",
                                "data-key": "SHIPPING_CHARGE",
                                children: [
                                    "$",
                                    shippingMode
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: "list-group-item ",
                    "data-key": "FINAL_SALES_TAX",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        className: "row mx-0",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "col-7 displayName",
                                children: "Estimated Tax:"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                className: "col-5 displayValue text-right",
                                "data-key": "FINAL_SALES_TAX",
                                children: [
                                    "$",
                                    tax
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: "list-group-item d-none",
                    "data-key": "GC_TOTAL",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        className: "row mx-0",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "col-7 displayName",
                                children: "Gift Cards:"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "col-5 displayValue text-right",
                                "data-key": "GC_TOTAL",
                                children: "$0.00"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: "list-group-item d-none",
                    "data-key": "TOTALITEMPRICE",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        className: "row mx-0",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "col-7 displayName",
                                children: "NULL"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "col-5 displayValue text-right",
                                "data-key": "TOTALITEMPRICE",
                                children: "$468.99"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: "list-group-item d-none",
                    "data-key": "RANGETOTALPRICE",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        className: "row mx-0",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "col-7 displayName",
                                children: "Total Cost of Reservations:"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "col-5 displayValue text-right",
                                "data-key": "RANGETOTALPRICE",
                                children: "$0.00"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: "list-group-item d-none",
                    "data-key": "TOTALPROMOPRICE",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        className: "row mx-0",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "col-7 displayName",
                                children: "NULL"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "col-5 displayValue text-right",
                                "data-key": "TOTALPROMOPRICE",
                                children: "$468.99"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: "list-group-item d-none",
                    "data-key": "TOTALCREDITS",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        className: "row mx-0",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "col-7 displayName",
                                children: "Credits:"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "col-5 displayValue text-right",
                                "data-key": "TOTALCREDITS",
                                children: "$0.00"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: "amountDue list-group-item",
                    "data-key": "AMOUNT_DUE",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        className: "row mx-0",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "col-7 displayName",
                                children: "Subtotal:"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                className: "col-5 displayValue text-right",
                                "data-key": "amount_due",
                                children: [
                                    "$",
                                    subTotal
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                    type: "button",
                    value: "Place order"
                })
            ]
        })
    });
};
/* harmony default export */ const checkout_OrderSummary = (OrderSummary);

;// CONCATENATED MODULE: ./src/components/checkout/OrderAdditional.js


const OrderAdditional = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "row order-alter",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "col-12",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "form-group",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                className: "loginInput form-control",
                                type: "text",
                                id: "lookup",
                                value: "",
                                name: "lookup",
                                placeholder: "Coupon or Promotion Code"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                type: "submit",
                                className: "btn btn-primary",
                                id: "couponSubmit",
                                children: "Submit"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        className: "activeCoupons d-none"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "col-12",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "form-group",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                className: "loginInput form-control",
                                type: "text",
                                id: "gift_card",
                                value: "",
                                name: "gift_card",
                                placeholder: "Gift Card, Certificate, or Credit"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                type: "submit",
                                className: "btn btn-primary",
                                id: "gcSubmit",
                                children: "Submit"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        className: "activeGiftCards d-none"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "col-12",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "form-group",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                        className: "loginInput form-control",
                        type: "text",
                        name: "comments",
                        id: "comments",
                        placeholder: "Order Comments"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "col-12",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "form-group",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                        className: "loginInput form-control",
                        type: "text",
                        name: "giftNote",
                        id: "giftNote",
                        placeholder: "Gift Notes"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const checkout_OrderAdditional = (OrderAdditional);

;// CONCATENATED MODULE: ./src/components/checkout/Layout.js












const Layout = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("main", {
        className: "page-content",
        children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
            id: "checkout-main-content",
            className: "section-ptb",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(checkout_Heading, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("section", {
                        className: "checkout-details-wrapper",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("section", {
                                    id: "left-portion",
                                    className: "col-lg-4 col-md-6 left",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "form-wizard",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                            action: "",
                                            method: "post",
                                            role: "application",
                                            id: "wizard",
                                            className: "wizard clearfix",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(checkout_WizardDots, {
                                                    userData: props.userData,
                                                    setUserData: props.setUserData
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("section", {
                                                    id: "left-portion-middle",
                                                    className: "row",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "col",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "coupon-area",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(checkout_ReturningCustomer, {
                                                                screen: props.screen,
                                                                setScreen: props.setScreen,
                                                                userData: props.userData
                                                            })
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(checkout_ShippingInfo, {
                                                    userData: props.userData,
                                                    setUserData: props.setUserData
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(checkout_ShippingMethods, {
                                                    shippingMethod: props.shippingMethod,
                                                    setShippingMethod: props.setShippingMethod
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(checkout_BillingInfo, {
                                                    userData: props.userData,
                                                    setUserData: props.setUserData
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(checkout_PaymentInfo, {
                                                    setCart: props.setCart,
                                                    currency: props.currency,
                                                    grandTotal: props.grandTotal
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                                    id: "right-portion",
                                    className: "col-lg-8 col-md-6 right",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("section", {
                                            className: "your-order-wrapper",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "row",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-lg-12 col-md-12 p-sm-4 p-2",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        id: "products-list",
                                                        className: "me-sm-3",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(checkout_Cart, {
                                                            cart: props.cart,
                                                            setCart: props.setCart
                                                        })
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("section", {
                                            className: "order-summary-checkout",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "row mx-0",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-lg-12 col-md-12 pl-sm-4 pr-sm-4 pb-0",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        id: "products-list",
                                                        className: "me-sm-3",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(checkout_OrderAdditional, {})
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("section", {
                                            className: "order-summary-checkout",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "row mx-0",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-lg-12 col-md-12 pl-sm-4 pr-sm-4 p-2",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        id: "products-list",
                                                        className: "me-sm-3",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(checkout_OrderSummary, {
                                                            cart: props.cart,
                                                            shippingMethod: props.shippingMethod,
                                                            setShippingMethod: props.setShippingMethod,
                                                            tax: props.tax,
                                                            setTax: props.setTax,
                                                            setGrandTotal: props.setGrandTotal
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const checkout_Layout = (Layout);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./src/components/cart/EmptyCart.js
var EmptyCart = __webpack_require__(1210);
// EXTERNAL MODULE: ./src/components/header/Header.js + 5 modules
var Header = __webpack_require__(4264);
;// CONCATENATED MODULE: ./src/pages/checkout.js











const Checkout = (props)=>{
    let { URL  } = process.env;
    const { 0: cart , 1: setCart  } = (0,external_react_.useState)([]);
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(true);
    const { 0: currency , 1: setCurrency  } = (0,external_react_.useState)("USD");
    const { 0: grandTotal , 1: setGrandTotal  } = (0,external_react_.useState)("0.00");
    const { 0: paymentMethod , 1: setPaymentMethod  } = (0,external_react_.useState)("paypal");
    const { 0: shippingMethod , 1: setShippingMethod  } = (0,external_react_.useState)({
        name: "Nick Shipping ($0.00)",
        amount: 0
    });
    const { 0: tax , 1: setTax  } = (0,external_react_.useState)(0);
    const { 0: screen , 1: setScreen  } = (0,external_react_.useState)("");
    const { 0: userData , 1: setUserData  } = (0,external_react_.useState)([]);
    let loginstatus = "";
    let userID = 0;
    if (false) {}
    (0,external_react_.useEffect)(async ()=>{
        let user = await (0,account/* getCurrentUserData */.Ts)("");
        delete user.credentials;
        setUserData(user);
    }, []);
    let cartData = [];
    let checkCart = "";
    try {
        checkCart = JSON.stringify(cartData);
    } catch (err) {}
    (0,external_react_.useEffect)(()=>{
        cartData = JSON.parse(localStorage.getItem("cart"));
        setLoading(false);
    }, [
        checkCart
    ]);
    (0,external_react_.useEffect)(()=>{
        setCart(cartData);
    }, [
        checkCart
    ]);
    // START LOAD JQUERY JAVASCRIPT ADDITIONAL CODE
    if (false) {}
    let cartValue = [];
    if (false) {}
    // END LOAD JQUERY JAVASCRIPT ADDITIONAL CODE
    if (loading == false && cart && cart.length < 1) {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {
                    taxonomy: props.taxonomy,
                    cartData: cartValue
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(EmptyCart/* default */.Z, {
                    page: "checkout"
                }),
                " "
            ]
        });
    }
    let orderDetails = (0,order/* initOrderDetails */.Ek)();
    orderDetails.items = cart;
    orderDetails.UserID = userData.id;
    orderDetails.user = userData;
    orderDetails.payment.paymentMethod = paymentMethod;
    orderDetails.payment.currency = currency;
    orderDetails.order.shipping.name = shippingMethod.name;
    orderDetails.order.shipping.amount = shippingMethod.amount;
    (0,order/* setOrderDetails */.gF)("orderDetails", orderDetails);
    let od = (0,order/* getOrderDetails */.s$)("orderDetails");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "CheckOut Page | Optimized and SEO Friendly Demo Site"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "title",
                        content: "CheckOut Page | Optimized and SEO Friendly Demo Site"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Checkout Page of Optimized and SEO Friendly Ecommerce site that will boost your sales and conversions"
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
            /*#__PURE__*/ jsx_runtime_.jsx(checkout_Layout, {
                userData: userData,
                setUserData: setUserData,
                cart: cart,
                setCart: setCart,
                shippingMethod: shippingMethod,
                setShippingMethod: setShippingMethod,
                tax: tax,
                setTax: setTax,
                screen: screen,
                setScreen: setScreen,
                currency: currency,
                setCurrency: setCurrency,
                grandTotal: grandTotal,
                setGrandTotal: setGrandTotal,
                paymentMethod: paymentMethod,
                setPaymentMethod: setPaymentMethod
            })
        ]
    });
};
/* harmony default export */ const checkout = (Checkout);


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
var __webpack_exports__ = __webpack_require__.X(0, [5895,2623,4524,4264,998,1210,9809], () => (__webpack_exec__(4404)));
module.exports = __webpack_exports__;

})();