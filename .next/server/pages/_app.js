"use strict";
(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888,7356];
exports.modules = {

/***/ 5069:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wh": () => (/* binding */ getMotionVariants)
/* harmony export */ });
/* unused harmony exports getCheckoutScripts, getAccountcripts, getHeaderScripts */
const getCheckoutScripts = ($)=>{
    $.noConflict();
    $("#showlogin").on("click", function() {
        $("#checkout-login").slideToggle(500);
    });
    $("#showcoupon").on("click", function() {
        $("#checkout-coupon").slideToggle(500);
    });
    $("#chekout-box").on("change", function() {
        $(".account-create").slideToggle("100");
    });
    $("#chekout-box-2").on("change", function() {
        $(".ship-box-info").slideToggle("100");
    });
    $(document).ready(function() {
        // click on next button
        //click on previous button
        $(".form-wizard-previous-btn").click(function() {
            var counter = parseInt($(".wizard-counter").text());
            var prev = $(this);
            var currentActiveStep = $(this).parents(".form-wizard").find(".form-wizard-steps .active");
            prev.parents(".wizard-fieldset").removeClass("show", "400");
            prev.parents(".wizard-fieldset").prev(".wizard-fieldset").addClass("show", "400");
            currentActiveStep.removeClass("active").prev().removeClass("activated").addClass("active", "400");
            $(document).find(".wizard-fieldset").each(function() {
                if ($(this).hasClass("show")) {
                    var formAtrr = $(this).attr("data-tab-content");
                    $(document).find(".form-wizard-steps .form-wizard-step-item").each(function() {
                        if ($(this).attr("data-attr") == formAtrr) {
                            $(this).addClass("active");
                            var innerWidth = $(this).innerWidth();
                            var position = $(this).position();
                            $(document).find(".form-wizard-step-move").css({
                                left: position.left,
                                width: innerWidth
                            });
                        } else {
                            $(this).removeClass("active");
                        }
                    });
                }
            });
        });
        //click on form submit button
        $(document).on("click", ".form-wizard .form-wizard-next-btn", function() {
            var parentFieldset = $(this).parents(".wizard-fieldset");
            var currentActiveStep = $(this).parents(".form-wizard").find(".form-wizard-steps .active");
            parentFieldset.find(".wizard-required").each(function() {
                var thisValue = $(this).val();
                if (thisValue == "") {
                    $(this).siblings(".wizard-form-error").slideDown();
                } else {
                    $(this).siblings(".wizard-form-error").slideUp();
                }
            });
        });
        // focus on input field check empty or not
        $(".form-control").on("focus", function() {
            var tmpThis = $(this).val();
            if (tmpThis == "") {
                $(this).parent().addClass("focus-input");
            } else if (tmpThis != "") {
                $(this).parent().addClass("focus-input");
            }
        }).on("blur", function() {
            var tmpThis = $(this).val();
            if (tmpThis == "") {
                $(this).parent().removeClass("focus-input");
                $(this).siblings(".wizard-form-error").slideDown("3000");
            } else if (tmpThis != "") {
                $(this).parent().addClass("focus-input");
                $(this).siblings(".wizard-form-error").slideUp("3000");
            }
        });
    });
    $(".wizard ul li a").click(function() {
        $(this).parent().addClass("checked");
        $(this).parent().prevAll().addClass("checked");
        $(this).parent().nextAll().removeClass("checked");
    });
    $("#wizard-t-0").on("click", function() {
        $(".form-wizard .wizard-fieldset:nth-of-type(1)").addClass("show");
        $(".form-wizard .wizard-fieldset:nth-of-type(2)").removeClass("show");
        $(".form-wizard .wizard-fieldset:nth-of-type(3)").removeClass("show");
        $(".form-wizard .wizard-fieldset:nth-of-type(4)").removeClass("show");
    });
    $("#wizard-t-1").on("click", function() {
        $(".form-wizard .wizard-fieldset:nth-of-type(1)").removeClass("show");
        $(".form-wizard .wizard-fieldset:nth-of-type(2)").addClass("show");
        $(".form-wizard .wizard-fieldset:nth-of-type(3)").removeClass("show");
        $(".form-wizard .wizard-fieldset:nth-of-type(4)").removeClass("show");
    });
    $("#wizard-t-2").on("click", function() {
        $(".form-wizard .wizard-fieldset:nth-of-type(1)").removeClass("show");
        $(".form-wizard .wizard-fieldset:nth-of-type(2)").removeClass("show");
        $(".form-wizard .wizard-fieldset:nth-of-type(3)").addClass("show");
        $(".form-wizard .wizard-fieldset:nth-of-type(4)").removeClass("show");
    });
    $("#wizard-t-3").on("click", function() {
        $(".form-wizard .wizard-fieldset:nth-of-type(1)").removeClass("show");
        $(".form-wizard .wizard-fieldset:nth-of-type(2)").removeClass("show");
        $(".form-wizard .wizard-fieldset:nth-of-type(3)").removeClass("show");
        $(".form-wizard .wizard-fieldset:nth-of-type(4)").addClass("show");
    });
    $(".form-wizard .wizard-fieldset:nth-of-type(1) .form-wizard-next-btn").click(function() {
        let formID = $(this).attr("formID");
        let isvalidated = $(`#${formID}-validate-state`).val();
        if (isvalidated == "true") {
            $("li.prev").addClass("checked");
        }
    });
    $(".form-wizard .wizard-fieldset:nth-of-type(2) .form-wizard-next-btn").click(function() {
        $("li.current").addClass("checked");
    });
    $(".form-wizard .wizard-fieldset:nth-of-type(3) .form-wizard-next-btn").click(function() {
        $("li.last").addClass("checked");
    });
    $(".form-wizard .wizard-fieldset:nth-of-type(2) .form-wizard-previous-btn").click(function() {
        $("li.prev").removeClass("checked");
    });
    $(".form-wizard .wizard-fieldset:nth-of-type(3) .form-wizard-previous-btn").click(function() {
        $("li.current").removeClass("checked");
    });
    $(".form-wizard .wizard-fieldset:nth-of-type(4) .form-wizard-previous-btn").click(function() {
        $("li.last").removeClass("checked");
    });
};
const getAccountcripts = ($)=>{
    $(document).ready(function() {
        var numItems = $("li.fancyTab").length;
        if (numItems == 12) {
            $("li.fancyTab").width("8.3%");
        }
        if (numItems == 11) {
            $("li.fancyTab").width("9%");
        }
        if (numItems == 10) {
            $("li.fancyTab").width("10%");
        }
        if (numItems == 9) {
            $("li.fancyTab").width("11.1%");
        }
        if (numItems == 8) {
            $("li.fancyTab").width("12.5%");
        }
        if (numItems == 7) {
            $("li.fancyTab").width("14.2%");
        }
        if (numItems == 6) {
            $("li.fancyTab").width("16.666666666666667%");
        }
        if (numItems == 5) {
            $("li.fancyTab").width("20%");
        }
        if (numItems == 4) {
            $("li.fancyTab").width("25%");
        }
        if (numItems == 3) {
            $("li.fancyTab").width("33.3%");
        }
        if (numItems == 2) {
            $("li.fancyTab").width("50%");
        }
    });
    $(window).on(function() {
        $(".fancyTabs").each(function() {
            var highestBox = 0;
            $(".fancyTab a", this).each(function() {
                if ($(this).height() > highestBox) highestBox = $(this).height();
            });
            $(".fancyTab a", this).height(highestBox);
        });
    });
    var a = document.querySelectorAll(".fancyTabs a");
    for(var i = 0, length = a.length; i < length; i++){
        a[i].onclick = function() {
            var b = document.querySelector(".fancyTabs li.active");
            if (b) b.classList.remove("active");
            this.parentNode.classList.add("active");
        };
    }
};
const getHeaderScripts = ($)=>{
    $(document).ready(function() {
        $("a.cartDisp").on("click", function() {
            $("div#cartDrpDown").parent().addClass("hoverToggle");
            try {
                setCart([]);
            } catch (err) {}
        });
    });
    $("#dropCartCloser").on("click", function() {
        $("div#cartDrpDown").parent().removeClass("hoverToggle");
    });
    $("#cartCloser1").on("click", function() {
        $("div#cartDrpDown").parent().removeClass("hoverToggle");
    });
    $("#cartCloser2").on("click", function() {
        $("div#cartDrpDown").parent().removeClass("hoverToggle");
    });
    $(".anchor").on("click", function() {
        $("div#cartDrpDown").parent().removeClass("hoverToggle");
    });
    $(".edtCart").on("click", function() {
        $("div#cartDrpDown").parent().removeClass("hoverToggle");
    });
    $("header .navbar-dark .navbar-nav .nav-item a.nav-link").on("click", function() {
        $(this).next().removeClass("show");
        $(this).parent().parent().parent().removeClass("show");
    });
    $("header .navbar-dark .navbar-nav .dropdown-menu a.title").on("click", function() {
        $(this).parent().parent().parent().parent().removeClass("show");
        $(this).parent().parent().parent().parent().parent().parent().parent().removeClass("show");
    });
};
const getMotionVariants = ()=>{
    let variants = {
        hidden: {
            opacity: 0,
            x: -200
        },
        enter: {
            opacity: 1,
            x: 0,
            y: 0
        },
        exit: {
            opacity: 0,
            x: 0,
            y: 0
        }
    };
    variants = {
        hidden: {
            scale: 0.9,
            opacity: 1
        },
        enter: {
            scale: 1,
            opacity: 1,
            transition: {
                delay: 0.1
            }
        },
        exit: {
            opacity: 0,
            x: 0,
            y: 0
        }
    };
    return variants;
};


/***/ }),

/***/ 2730:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
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
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7420);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4780);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_header_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4264);
/* harmony import */ var _components_footer_Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4715);
/* harmony import */ var _assets_js_main__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5069);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__]);
framer_motion__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


























function MyApp({ Component , pageProps , taxonomy  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    let variants = (0,_assets_js_main__WEBPACK_IMPORTED_MODULE_10__/* .getMotionVariants */ .wh)();
    let cartData = [];
    if (false) {}
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                href: "https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600;700;800&display=swap",
                rel: "stylesheet"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                href: "https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@400;600;700&display=swap",
                rel: "stylesheet"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css",
                rel: "stylesheet"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                href: "https://template1.cumulusbetasites.com//css/bootstrap.min.css",
                rel: "stylesheet",
                type: "text/css",
                media: "all"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_redux__WEBPACK_IMPORTED_MODULE_5__.Provider, {
                store: _redux_store__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                    variants: variants,
                    initial: "hidden" // Set the initial state to variants.hidden
                    ,
                    animate: "enter" // Animated state to variants.enter
                    ,
                    exit: "exit" // Exit state (used later) to variants.exit
                    ,
                    className: "",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                        ...pageProps,
                        taxonomy: taxonomy,
                        cartData: cartData,
                        router: router
                    })
                }, router.route)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_footer_Footer__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                src: "https://cdn.celerantwebservices.com/jquery/3.5.1/jquery.min.js"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                defer: true,
                src: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                defer: true,
                src: "https://template1.cumulusbetasites.com/js/bootstrap.min.js"
            })
        ]
    });
}
MyApp.getInitialProps = async (ctx)=>{
    let { URL  } = process.env;
    // Fetch taxanomy from external API
    let res = {};
    let taxanomy = [];
    try {
        res = await fetch(URL + "/api/taxonomy/taxonomy");
        taxanomy = await res.json();
    } catch (err) {
        taxanomy = [];
    }
    return {
        taxonomy: taxanomy
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7420:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _productSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3729);
/* harmony import */ var _taxonomySlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1543);
/* harmony import */ var _currentProductsSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(615);
/* harmony import */ var _allFiltersSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4069);
/* harmony import */ var _categoryModeSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7496);
/* harmony import */ var _landingCategoriesSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5472);
/* harmony import */ var _cartSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5707);








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
    reducer: {
        products: _productSlice__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP,
        crntProducts: _currentProductsSlice__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP,
        taxonomy: _taxonomySlice__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP,
        allFilters: _allFiltersSlice__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP,
        categoryMode: _categoryModeSlice__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP,
        landingCategories: _landingCategoriesSlice__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP,
        cart: _cartSlice__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP
    }
}));


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

/***/ 4780:
/***/ ((module) => {

module.exports = require("next/script");

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

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5895,2623,4524,4264,4715,2816], () => (__webpack_exec__(2730)));
module.exports = __webpack_exports__;

})();