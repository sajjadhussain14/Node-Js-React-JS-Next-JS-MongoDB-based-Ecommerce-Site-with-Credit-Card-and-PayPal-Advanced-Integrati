"use strict";
exports.id = 3008;
exports.ids = [3008];
exports.modules = {

/***/ 1057:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export BreadCrumbs */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);



// START BREADCRUMBS
const BreadCrumbs = (breadcrumbs)=>{
    let { URL  } = process.env;
    let breadcrumbsContent = [];
    breadcrumbsContent.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
        className: "breadcrumb-item",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
            href: URL,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                className: "text-dark text-decoration-none",
                children: "Home"
            })
        })
    }, "home"));
    let i = -1;
    for (const [key, value] of Object.entries(breadcrumbs.urlData)){
        i++;
        if (i == breadcrumbs.urlData.length - 1) {
            breadcrumbsContent.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "breadcrumb-item active",
                "aria-current": "page",
                children: value.value
            }, value.value));
        } else {
            breadcrumbsContent.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "breadcrumb-item",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    href: URL + "/category/" + value.url,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: "text-dark text-decoration-none",
                        children: value.value
                    })
                })
            }, value.value));
        }
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
            id: "BreadCrumbs",
            className: "col-12 pt-3",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                "aria-label": "breadcrumb",
                className: "bg-transparent p-0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ol", {
                    className: "breadcrumb bg-transparent p-0",
                    children: breadcrumbsContent.map((item)=>{
                        return item;
                    })
                })
            })
        })
    });
};
// END BREADCRUMBS
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BreadCrumbs);


/***/ }),

/***/ 8262:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);



const CategoryBanner = (props)=>{
    let bannerPath = "";
    let cmsPath = "/ccms/default/assets/Image/";
    let imageExists = false;
    let currentDEPT = "";
    try {
        currentDEPT = props.urlTaxonomy.DEPT;
    } catch (err) {}
    if (currentDEPT && currentDEPT != "") {
        bannerPath = "https://template1.cumulusbetasites.com/ccms/default/assets/Image/" + currentDEPT + ".jpg";
        try {
            var xhr = new XMLHttpRequest();
            xhr.open("HEAD", bannerPath, false);
            xhr.send();
            if (xhr.status == "404") {
                imageExists = false;
            } else {
                imageExists = true;
            }
        } catch (err) {
            imageExists = false;
        }
    } else {
        imageExists = false;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: imageExists ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
            id: "banner-image-container",
            className: "col-12 mb-3",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: bannerPath,
                title: currentDEPT + " PRODUCTS",
                alt: currentDEPT + " PRODUCTS"
            })
        }) : ""
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoryBanner);


/***/ }),

/***/ 3391:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);



const CategoryHeading = (props)=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    let categoryTitle = "";
    try {
        if (props.urlTaxonomy.seo_cat_title && props.urlTaxonomy.seo_cat_title != "") {
            categoryTitle = props.urlTaxonomy.seo_cat_title;
        } else {
            categoryTitle = props.urlTaxonomy.URL;
            categoryTitle = categoryTitle.replace(/[^a-zA-Z0-9]/g, " ");
        }
    } catch (err) {
        try {
            const { slug  } = router.query;
            categoryTitle = slug;
            categoryTitle = categoryTitle.replace(/[^a-zA-Z0-9]/g, " ");
        } catch (error) {}
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "col-6 catheading pb-2",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
            className: " border-bottom border-2 pb-1 w-100",
            children: categoryTitle
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoryHeading);


/***/ }),

/***/ 6797:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);



const CurrentCount = (props)=>{
    const allProducts = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.products
    );
    const currentProducts = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.crntProducts
    );
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "col-lg-3 col-md-6 col-12 totalproduct",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
            className: "text-capitalize catgrey",
            children: [
                currentProducts.length,
                " of Total ",
                props.currentProducts.length,
                " ",
                "products"
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CurrentCount);


/***/ }),

/***/ 8642:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ category_Landing)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/category/CategoryBanner.js
var CategoryBanner = __webpack_require__(8262);
// EXTERNAL MODULE: ./src/components/category/CategoryHeading.js
var CategoryHeading = __webpack_require__(3391);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: ./src/components/category/LandingCategories.js





const LandingCategories = (props)=>{
    let { URL  } = process.env;
    let typs = [];
    const categories = (0,external_react_redux_.useSelector)((state)=>state.landingCategories
    );
    try {
        categories.map((elements)=>{
            if (elements.Dept == props.dept) {
                typs = elements.Typs;
            }
        });
    } catch (err) {}
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
            id: "CategoryProducts",
            className: "col-lg-12 col-md-10 col-12",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-12",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row",
                        children: typs && typs.length > 0 ? typs.map((category)=>{
                            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-3 col-md-6 col-sm-12 col-12 cat",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "inner innerMore styleMore",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: {
                                            pathname: `${URL}/category/[slug]`,
                                            query: {
                                                slug: category.typ_url
                                            }
                                        },
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    title: category.typ_name,
                                                    alt: category.typ_name,
                                                    className: "cat-thumb",
                                                    src: category.prod_image
                                                }),
                                                category.typ_name
                                            ]
                                        })
                                    })
                                })
                            }, "categories " + category.typ_name);
                        }) : ""
                    })
                })
            })
        })
    });
};
/* harmony default export */ const category_LandingCategories = (LandingCategories);

;// CONCATENATED MODULE: ./src/components/category/Landing.js





const Landing = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        id: "CategoryProducts",
        className: "col-lg-10 col-md-8 col-12",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ jsx_runtime_.jsx(CategoryBanner/* default */.Z, {
                    urlTaxonomy: props.urlTaxonomy
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ jsx_runtime_.jsx(CategoryHeading/* default */.Z, {
                    urlTaxonomy: props.urlTaxonomy
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(category_LandingCategories, {
                dept: props.urlTaxonomy.DEPT
            })
        ]
    });
};
/* harmony default export */ const category_Landing = (Landing);


/***/ }),

/***/ 3008:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BreadCrumbs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1057);
/* harmony import */ var _sidenav_Sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6233);
/* harmony import */ var _ProductArea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3274);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ProductArea__WEBPACK_IMPORTED_MODULE_4__]);
_ProductArea__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const Layout = (props)=>{
    const cProducts = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.crntProducts
    );
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        id: "contentHolder",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            id: "category",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BreadCrumbs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            urlData: props.urlData
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_sidenav_Sidenav__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            allCurrentProducts: props.products,
                            products: props.currentProducts,
                            urlTaxonomy: props.urlTaxonomy,
                            urlData: props.urlData,
                            checkAvailability: props.checkAvailability,
                            setCheckAvailability: props.setCheckAvailability,
                            setSearchText: props.setSearchText
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProductArea__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            currentProducts: props.currentProducts,
                            urlTaxonomy: props.urlTaxonomy,
                            activePage: props.activePage,
                            productsPerPage: props.productsPerPage,
                            setCurrentPage: props.setCurrentPage,
                            property: props.property,
                            setProperty: props.setProperty,
                            listGridViews: props.listGridViews,
                            setListGridViews: props.setListGridViews,
                            setPerpageProductscount: props.setPerpageProductscount,
                            sortNewestStatus: props.sortNewestStatus,
                            sortBrandStatus: props.sortBrandStatus,
                            entryTime: props.entryTime,
                            setSearchText: props.setSearchText,
                            isSearch: props.isSearch,
                            slug: props.slug,
                            categoryMode: props.categoryMode
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8293:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var _controllers_category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1291);




const ListviewGridViewFilter = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
            className: "col-lg-3 col-md-6 col-12 display-mode h4",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    href: "/",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        id: "grid",
                        className: "change-view active text-dark",
                        onClick: (e)=>{
                            (0,_controllers_category__WEBPACK_IMPORTED_MODULE_3__/* .toggleListGridViews */ .gk)(e, " ", props.setListGridViews);
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "fas fa-th"
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    href: "/",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        id: "list",
                        className: "change-view text-dark",
                        onClick: (e)=>{
                            (0,_controllers_category__WEBPACK_IMPORTED_MODULE_3__/* .toggleListGridViews */ .gk)(e, " list-group-item ", props.setListGridViews);
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "fas fa-list"
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListviewGridViewFilter);


/***/ }),

/***/ 4162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_js_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5636);
/* harmony import */ var react_js_pagination__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_js_pagination__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _controllers_category__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1291);





const PaginationBottom = (props)=>{
    const allProducts = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.products
    );
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        id: "PaginationBottom",
        className: "col-6 py-0 d-flex mx-auto justify-content-between",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
            "aria-label": "pagination",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_js_pagination__WEBPACK_IMPORTED_MODULE_2___default()), {
                activePage: props.activePage,
                itemsCountPerPage: props.productsPerPage,
                totalItemsCount: props.currentProducts.length,
                pageRangeDisplayed: 4,
                onChange: (e)=>{
                    (0,_controllers_category__WEBPACK_IMPORTED_MODULE_4__/* .handlePageChange */ .Dg)(props.setCurrentPage, e);
                }
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaginationBottom);


/***/ }),

/***/ 9912:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_js_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5636);
/* harmony import */ var react_js_pagination__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_js_pagination__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _controllers_category__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1291);





const PaginationTop = (props)=>{
    const allProducts = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.products
    );
    const currentProducts = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.crntProducts
    );
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        id: "Pagination",
        className: "col-6 py-0 d-flex mx-auto justify-content-between",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
            "aria-label": "pagination",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_js_pagination__WEBPACK_IMPORTED_MODULE_2___default()), {
                activePage: props.activePage,
                itemsCountPerPage: props.productsPerPage,
                totalItemsCount: props.currentProducts.length,
                pageRangeDisplayed: 4,
                onChange: (e)=>{
                    (0,_controllers_category__WEBPACK_IMPORTED_MODULE_4__/* .handlePageChange */ .Dg)(props.setCurrentPage, e);
                }
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaginationTop);


/***/ }),

/***/ 3274:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CategoryBanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8262);
/* harmony import */ var _CategoryHeading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3391);
/* harmony import */ var _CurrentCount__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6797);
/* harmony import */ var _ListviewGridViewFilter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8293);
/* harmony import */ var _PaginationTop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9912);
/* harmony import */ var _SeoText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7659);
/* harmony import */ var _PaginationBottom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4162);
/* harmony import */ var _SmartSearch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3231);
/* harmony import */ var _SortByProperty__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4633);
/* harmony import */ var _Thumbnail__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4596);
/* harmony import */ var _ViewByNumber__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3863);
/* harmony import */ var _Landing__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8642);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Thumbnail__WEBPACK_IMPORTED_MODULE_12__]);
_Thumbnail__WEBPACK_IMPORTED_MODULE_12__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];















const ProductArea = (props)=>{
    const categoryModeValue = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.categoryMode
    );
    try {
        if (categoryModeValue == "landing" && props.urlTaxonomy.TYP && props.urlTaxonomy.TYP == "EMPTY") {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Landing__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                urlTaxonomy: props.urlTaxonomy
            });
        }
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
            id: "CategoryProducts",
            className: "col-lg-10 col-md-8 col-12",
            children: [
                props.categoryMode != "category" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CategoryBanner__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        urlTaxonomy: props.urlTaxonomy
                    })
                }) : "",
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CategoryHeading__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            urlTaxonomy: props.urlTaxonomy
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PaginationTop__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            currentProducts: props.currentProducts,
                            activePage: props.activePage,
                            productsPerPage: props.productsPerPage,
                            setCurrentPage: props.setCurrentPage
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    id: "catproductinner",
                    className: "row catproductinner",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-6 col-md-12 col-12 categoryselect",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SortByProperty__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                        property: props.property,
                                        setProperty: props.setProperty,
                                        sortNewestStatus: props.sortNewestStatus,
                                        sortBrandStatus: props.sortBrandStatus,
                                        entryTime: props.entryTime
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ViewByNumber__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                        setPerpageProductscount: props.setPerpageProductscount
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CurrentCount__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            currentProducts: props.currentProducts
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ListviewGridViewFilter__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            listGridViews: props.listGridViews,
                            setListGridViews: props.setListGridViews
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SmartSearch__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    setSearchText: props.setSearchText,
                    isSearch: props.isSearch,
                    slug: props.slug
                }),
                props.currentProducts && props.currentProducts.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Thumbnail__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                    listGridViews: props.listGridViews
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                    id: "catproducts",
                    className: "row ",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "No Products Avaialable"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PaginationBottom__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    currentProducts: props.currentProducts,
                    activePage: props.activePage,
                    productsPerPage: props.productsPerPage,
                    setCurrentPage: props.setCurrentPage
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SeoText__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    urlTaxonomy: props.urlTaxonomy
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                    className: "clear"
                })
            ]
        });
    } catch (err) {
        return "";
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductArea);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7659:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const seoText = (props)=>{
    let seoTxt = "";
    try {
        seoTxt = props.urlTaxonomy.seo_cat_text;
    } catch (err) {}
    let pageSeoText = "";
    let pageSeoHTML = "";
    let isHtml = /<([A-Za-z][A-Za-z0-9]*)\b[^>]*>(.*?)<\/\1>/.test(seoTxt);
    if (isHtml) {
        pageSeoHTML = seoTxt;
    } else {
        pageSeoText = seoTxt;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "row",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-12",
            children: pageSeoHTML && pageSeoHTML != "" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                dangerouslySetInnerHTML: {
                    __html: pageSeoHTML
                }
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: pageSeoText
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (seoText);


/***/ }),

/***/ 3231:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _controllers_category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1291);



const SmartSearch = (props)=>{
    let searchTXT = "";
    if (props.isSearch && props.isSearch == "yes") {
        searchTXT = props.slug;
    }
    let branURL = "";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        id: "cat-search-container",
        className: "row",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-12",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: "text",
                className: "w-100 border-1 mb-4 py-2 pl-2",
                placeholder: "Search Here",
                name: "searchProds",
                id: "searchProds",
                defaultValue: searchTXT,
                onChange: (e)=>{
                    (0,_controllers_category__WEBPACK_IMPORTED_MODULE_2__/* .RefineSearch */ .Gr)(e, props.setSearchText);
                },
                onLoad: (0,_controllers_category__WEBPACK_IMPORTED_MODULE_2__/* .ReSearch */ .qO)(props.setSearchText, searchTXT)
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SmartSearch);


/***/ }),

/***/ 4633:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _controllers_category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1291);



const SortByProperty = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        name: "productsSort",
        title: "Products Sort",
        className: "col-md mb-2",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: "Sort:"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                className: "form-select two",
                id: "sort",
                "aria-label": "select",
                value: props.property,
                onChange: (e)=>{
                    (0,_controllers_category__WEBPACK_IMPORTED_MODULE_2__/* .SortHandleChange */ .v6)(e, props.setProperty);
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        value: "default",
                        children: "Default"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        value: "name(a-z)",
                        children: "Name(A-Z)"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        value: "name(z-a)",
                        children: "Name(Z-A)"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        value: "price-high-to-low",
                        children: "Price(High-Low)"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        value: "price-low-to-high",
                        children: "Price(Low-High)"
                    }),
                    props.sortNewestStatus && props.sortNewestStatus == "yes" ? props.entryTime && props.entryTime == "N" ? "" : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        value: "newest",
                        children: "Newest"
                    }) : "",
                    props.sortBrandStatus && props.sortBrandStatus == "yes" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        value: "brands",
                        children: "Brands"
                    }) : ""
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SortByProperty);


/***/ }),

/***/ 4596:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const Thumbnail = (props)=>{
    let { URL  } = process.env;
    const currentProducts = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.crntProducts
    );
    let variants = {
        hidden: {
            opacity: 0,
            x: -200,
            y: 0
        },
        enter: {
            opacity: 1,
            x: 0,
            y: 0
        },
        exit: {
            opacity: 0,
            x: 0,
            y: -100
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
        variants: variants,
        initial: "hidden" // Set the initial state to variants.hidden
        ,
        animate: "enter" // Animated state to variants.enter
        ,
        exit: "exit" // Exit state (used later) to variants.exit
        ,
        transition: {
            type: "linear"
        },
        className: "",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
            id: "catproducts",
            className: "row ",
            children: currentProducts.length > 0 ? currentProducts.map((product)=>{
                let termsaleprice = 0;
                try {
                    termsaleprice = product.termsaleprice;
                } catch (err) {}
                if (!termsaleprice || termsaleprice == null || termsaleprice == "") {
                    termsaleprice = 0;
                }
                let prodRatings = 0;
                prodRatings = product.rating;
                if (!prodRatings) prodRatings = 0;
                let starsNum = 5;
                starsNum = product.stars_numbers;
                if (!starsNum) starsNum = 5;
                let totalReviews = 0;
                totalReviews = product.total_num_reviews;
                if (!totalReviews) totalReviews = 0;
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-lg-3 col-md-4 col-sm-6 col-6 " + props.listGridViews,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "productListing text-center react-products-listings",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                href: `${URL}/product/[...slug]`,
                                as: `${URL + product.product_url}`,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    style: {
                                        zIndex: -1,
                                        position: "relative"
                                    },
                                    className: "product text-decoration-none text-left",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "caption",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    className: "brand",
                                                    children: product.brand
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    className: "name",
                                                    children: product.name
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "image text-left mb-2 d-block",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                id: "img" + product.id,
                                                src: product.image,
                                                alt: product.name
                                            })
                                        }),
                                        totalReviews > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "reviewContainer d-flex align-items-start justify-content-start flex-row float-left w-100 my-3",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "reviews-stars w-auto d-block"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    title: prodRatings + "/" + starsNum + " Rating in " + totalReviews + " Reviews",
                                                    className: "reviews-count ml-1 w-auto",
                                                    children: [
                                                        "(",
                                                        totalReviews,
                                                        ")"
                                                    ]
                                                })
                                            ]
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "null-reviews"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                            className: product.available.toLowerCase() == "out of stock" ? "outstock" : "instock",
                                            children: [
                                                product.available,
                                                " "
                                            ]
                                        }),
                                        product.price_range && product.price_range != "" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "pricing",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", {
                                                className: "itemPrice",
                                                children: [
                                                    "Price: ",
                                                    product.price_range
                                                ]
                                            })
                                        }) : product.price > 0 && termsaleprice > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: "pricing",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                    className: "itemPrice text-decoration-line-through ",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("del", {
                                                        children: [
                                                            " Price: $",
                                                            product.price.toFixed(2)
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", {
                                                    className: "itemPrice text-danger font-weight-bold",
                                                    children: [
                                                        "Sale: $",
                                                        product.termsaleprice.toFixed(2)
                                                    ]
                                                })
                                            ]
                                        }) : product.price > 0 && termsaleprice == 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "pricing",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", {
                                                className: "itemPrice",
                                                children: [
                                                    "Price: $",
                                                    product.price.toFixed(2)
                                                ]
                                            })
                                        }) : ""
                                    ]
                                })
                            }),
                            product.claimer && product.claimer.toLowerCase() == "y" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "button",
                                className: "btn btn-secondary",
                                "data-bs-toggle": "tooltip",
                                "data-bs-placement": "top",
                                title: `"GLOCK"" is a federally registered trademark of GLOCK, Inc. and is one of many trademarks owned by GLOCK, Inc. or GLOCK Ges.m.b.H.  Neither RSR Group, Inc. nor this site are affiliated in any manner with, or otherwise endorsed by, GLOCK, Inc. or GLOCK Ges.m.b.H.  The use of "GLOCK" on this page is merely to advertise the sale of GLOCK pistols, parts, or components.  For genuine GLOCK, Inc. and GLOCK Ges.m.b.H. products and parts visit <a href="https://www.glock.com" target="_blank">www.glock.com</a>.`,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                    className: "catdisclaimerheading",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fa fa-exclamation-triangle",
                                            "aria-hidden": "true"
                                        }),
                                        "Glock Disclaimer"
                                    ]
                                })
                            }) : "",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "cart-button text-center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: product.product_url,
                                    className: "details",
                                    children: "View Details"
                                })
                            })
                        ]
                    })
                }, product.name);
            }) : ""
        })
    }, currentProducts);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Thumbnail);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3863:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _controllers_category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1291);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);




const ViewByNumber = (props)=>{
    const allProducts = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.products
    );
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "col-md mb-2",
        onChange: (e)=>(0,_controllers_category__WEBPACK_IMPORTED_MODULE_2__/* .handleChangePerPage */ .zQ)(props.setPerpageProductscount, e)
        ,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: "View:"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                className: "form-select one",
                id: "view",
                "aria-label": "select",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        value: "12",
                        children: "12"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        value: "36",
                        children: "36"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        value: "72",
                        children: "72"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        value: allProducts.length,
                        children: "All"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ViewByNumber);


/***/ }),

/***/ 6233:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ sidenav_Sidenav)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./src/redux/allFiltersSlice.js
var allFiltersSlice = __webpack_require__(4069);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: ./src/controllers/sideNav.js


const ShopByCategories = (currentFilters, prodData, taxonomy)=>{
    const categoryModeValue = (0,external_react_redux_.useSelector)((state)=>state.categoryMode
    );
    let level = 0;
    let categoryData = {
        taxonomy: "",
        categories: [],
        URL: []
    };
    level = taxonomyLevels(currentFilters);
    if (categoryModeValue == "landing") {
        level = 0;
    }
    if (level == 4) {
        prodData.map((product)=>{
            if (product.SUBTYP_3) {
                if (categoryData.categories.includes(product.SUBTYP_3)) {} else {
                    if (product.SUBTYP_2.toUpperCase() == currentFilters.SUBTYP_2.toUpperCase() && product.SUBTYP_3 != "EMPTY") {
                        taxonomy.map((cats)=>{
                            if (cats.SUBTYP_3 && cats.SUBTYP_3 !== "" && cats.SUBTYP_3 !== "EMPTY" && cats.DEPT.toUpperCase() == product.Dept.toUpperCase() && cats.TYP.toUpperCase() == product.Typ.toUpperCase() && cats.SUBTYP_1.toUpperCase() == product.SUBTYP_1.toUpperCase() && cats.SUBTYP_2.toUpperCase() == product.SUBTYP_2.toUpperCase() && cats.SUBTYP_3.toUpperCase() == product.SUBTYP_3.toUpperCase()) {
                                if (categoryData.categories.includes(product.SUBTYP_3)) {} else {
                                    categoryData.categories.push(product.SUBTYP_3);
                                    categoryData.taxonomy = "SUBTYP_3";
                                    categoryData.URL.push(cats.URL);
                                }
                            }
                        });
                    }
                }
            }
        });
    } else if (level == 3) {
        prodData.map((product)=>{
            if (product.SUBTYP_2) {
                if (categoryData.categories.includes(product.SUBTYP_2)) {} else {
                    if (product.SUBTYP_1.toUpperCase() == currentFilters.SUBTYP_1.toUpperCase() && product.SUBTYP_2 != "EMPTY") {
                        taxonomy.map((cats)=>{
                            if (cats.SUBTYP_2 && cats.SUBTYP_2 !== "" && cats.SUBTYP_2 !== "EMPTY" && cats.DEPT.toUpperCase() == product.Dept.toUpperCase() && cats.TYP.toUpperCase() == product.Typ.toUpperCase() && cats.SUBTYP_1.toUpperCase() == product.SUBTYP_1.toUpperCase() && cats.SUBTYP_2.toUpperCase() == product.SUBTYP_2.toUpperCase()) {
                                if (categoryData.categories.includes(product.SUBTYP_2)) {} else {
                                    categoryData.categories.push(product.SUBTYP_2);
                                    categoryData.taxonomy = "SUBTYP_2";
                                    categoryData.URL.push(cats.URL);
                                }
                            }
                        });
                    }
                }
            }
        });
    } else if (level == 2) {
        prodData.map((product)=>{
            if (product.SUBTYP_1) {
                if (categoryData.categories.includes(product.SUBTYP_1)) {} else {
                    try {
                        if (currentFilters.TYP.toUpperCase() && product.Typ.toUpperCase() == currentFilters.TYP.toUpperCase() && product.SUBTYP_1 != "EMPTY") {
                            taxonomy.map((cats)=>{
                                if (cats.SUBTYP_1 && cats.SUBTYP_1 !== "" && cats.SUBTYP_1 !== "EMPTY" && cats.SUBTYP_2 == "EMPTY" && cats.SUBTYP_1.toUpperCase() == product.SUBTYP_1.toUpperCase() && cats.DEPT.toUpperCase() == product.Dept.toUpperCase() && cats.TYP.toUpperCase() == product.Typ.toUpperCase() && cats.SUBTYP_1.toUpperCase() == product.SUBTYP_1.toUpperCase()) {
                                    if (categoryData.categories.includes(product.SUBTYP_1)) {} else {
                                        categoryData.categories.push(product.SUBTYP_1);
                                        categoryData.taxonomy = "SUBTYP_1";
                                        categoryData.URL.push(cats.URL);
                                    }
                                }
                            });
                        }
                    } catch (err) {
                        console.log(err);
                    }
                }
            }
        });
    } else if (level == 1) {
        prodData.map((product)=>{
            if (product.Typ) {
                if (categoryData.categories.includes(product.Typ)) {} else {
                    if (product.Typ != "EMPTY") {
                        taxonomy.map((cats)=>{
                            if (cats.TYP && cats.TYP !== "" && cats.TYP !== "EMPTY" && cats.SUBTYP_1 == "EMPTY" && cats.DEPT.toUpperCase() == product.Dept.toUpperCase() && cats.TYP.toUpperCase() == product.Typ.toUpperCase()) {
                                if (categoryData.categories.includes(product.Typ)) {} else {
                                    categoryData.categories.push(product.Typ);
                                    categoryData.taxonomy = "Typ";
                                    categoryData.URL.push(cats.URL);
                                }
                            }
                        });
                    }
                }
            }
        });
    } else if (level == 0) {
        taxonomy.map((cats)=>{
            if (cats.TYP == "EMPTY") {
                if (categoryData.categories.includes(cats.DEPT) || cats.DEPT == "" || cats.DEPT == " " || cats.DEPT == "EMPTY") {} else {
                    categoryData.categories.push(cats.DEPT);
                    categoryData.taxonomy = "Dept";
                    categoryData.URL.push(cats.URL);
                }
            }
        });
    } else {}
    // categoryData.categories = categoryData.categories.sort();
    return categoryData;
};
const taxonomyLevels = (filters)=>{
    let taxonomyLetvel = 0;
    try {
        if (filters.SUBTYP_2 && filters.SUBTYP_2 != "EMPTY") taxonomyLetvel = 4;
        else if (filters.SUBTYP_1 && filters.SUBTYP_1 != "EMPTY") taxonomyLetvel = 3;
        else if (filters.TYP && filters.TYP != "EMPTY") taxonomyLetvel = 2;
        else if (filters.DEPT && filters.DEPT != "EMPTY") taxonomyLetvel = 1;
        else taxonomyLetvel = 0;
    } catch (err) {}
    return taxonomyLetvel;
};
const ShopByAttributes = (getProducts)=>{
    let attributes = {
        name: "",
        values: []
    };
    let arrayAttr = [];
    getProducts.map((product, index1)=>{
        if (product.attributes) {
            product.attributes.map((attr)=>{
                let attrName = "";
                let attrValues = [];
                let attrCount = [];
                let counter = 0;
                let attrIndex = -1;
                if (attr.name && attr.name != "") {
                    attrName = attr.name;
                    try {
                        attr.value.map((v)=>{
                            if (v && v != "") {
                                attrValues.push(v);
                                attrCount.push(1);
                            }
                        });
                    } catch (err) {
                        if (attr.value && attr.value != "") {
                            attrValues.push(attr.value);
                            attrCount.push(1);
                        }
                    }
                    let index = arrayAttr.findIndex((x)=>x.name == attrName
                    );
                    if (index == -1) {
                        arrayAttr.push({
                            name: attrName,
                            values: attrValues,
                            count: attrCount
                        });
                    } else {
                        if (Object.entries(attrValues).length > 1) {
                            attrValues.map((v)=>{
                                if (v && v != "") {
                                    let indexCheck = arrayAttr.findIndex((x)=>x.name == attrName && x.values.includes(v)
                                    );
                                    if (indexCheck == -1) {
                                        arrayAttr[index].values.push(v);
                                        arrayAttr[index].count.push(1);
                                    } else {
                                    // let valIndex = arrayAttr[index].values.indexOf(v);
                                    // let prevCount = arrayAttr[index].count[valIndex];
                                    // arrayAttr[index].count[valIndex] =
                                    //   arrayAttr[index].count[valIndex] + 1;
                                    }
                                }
                            });
                        } else {
                            if (attrValues[0] && attrValues[0] != "") {
                                let indexCheck = arrayAttr.findIndex((x)=>x.name == attrName && x.values.includes(attrValues[0])
                                );
                                if (indexCheck == -1) {
                                    arrayAttr[index].values.push(attrValues[0]);
                                    arrayAttr[index].count.push(1);
                                } else {
                                    let valIndex = arrayAttr[index].values.indexOf(attrValues[0]);
                                    let prevCount = arrayAttr[index].count[valIndex];
                                    arrayAttr[index].count[valIndex] = prevCount + 1;
                                }
                            }
                        }
                    }
                }
            });
        }
    });
    let sortedArray = [];
    arrayAttr.map((el)=>{
        let i = -1;
        let name = el.name;
        let fields = [];
        el.values.map((v)=>{
            if (v && v != "") {
                i++;
                fields.push({
                    value: v,
                    count: el.count[i]
                });
                fields.sort(dynamicSort("value"));
            }
        });
        sortedArray.push({
            name: name,
            value: fields
        });
    });
    return sortedArray;
};
function dynamicSort(property) {
    let sortOrder = 1;
    if (property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function(a, b) {
        /* next line works with strings and numbers,
     * and you may want to customize it to your needs
     */ let letters = /^[A-Za-z]+$/;
        let num = /^[0-9]+$/;
        if (a.value && a.value.includes("$")) {
            return Number(a.value.match(/(\d+)/g)[0]) - Number(b.value.match(/(\d+)/g)[0]);
        } else if (letters.test(a.value)) {
            return a.value.toUpperCase().localeCompare(b.value.toUpperCase());
        } else if (num.test(a.value)) {
            return a.value - b.value;
        } else {
            return a.value > b.value ? 1 : a.value < b.value ? -1 : 0;
        }
    };
}
const attributesCount = (getProducts, attributesList, attrValues)=>{
    let iCount = [];
    for(let x = 0; x < attributesList.length; x++){
        for(let i = 0; i < attrValues.length; i++){
            let itemCount = 0;
            getProducts.map((prods)=>{
                if (prods.attributes) {
                    prods.attributes.map((attr)=>{
                        if (attr.name == attributesList[x]) {
                            try {
                                attr.value.map((v)=>{
                                    if (v && v != "") {
                                        if (v == attrValues[i]) {
                                            itemCount++;
                                        }
                                    }
                                });
                            } catch (err) {
                                if (attr.value && attr.value != "") {
                                    if (attr.value == attrValues[i]) {
                                        itemCount++;
                                    }
                                }
                            }
                        }
                    });
                }
            });
            iCount[i] = itemCount;
        }
    }
    return iCount;
};
//********************** SRART ADDTHISFILTERS*********************
const AddThisFilter = (filters, status, keyterm, keyValue, filterType, setSearchText, dispatch, setAllFilters)=>{
    console.log("keyterm", keyterm);
    try {
        document.getElementById("searchProds").value = "";
        setSearchText("");
    } catch (err) {}
    if (status == true) {
        let tempFilters = {};
        tempFilters = JSON.parse(JSON.stringify(filters));
        if (tempFilters[keyterm] && tempFilters[keyterm].length == 1) {
            delete tempFilters[keyterm];
            let abc = {
                ...tempFilters
            };
            dispatch(setAllFilters(abc));
        } else {
            tempFilters[keyterm] = tempFilters[keyterm].filter((el)=>el != keyValue
            );
            let abc = {
                ...tempFilters
            };
            dispatch(setAllFilters(abc));
        }
    } else {
        let tempFilters = {};
        tempFilters = JSON.parse(JSON.stringify(filters));
        if (tempFilters[keyterm] == null || tempFilters[keyterm].length == 0) {
            tempFilters[keyterm] = JSON.parse(JSON.stringify([]));
        } else {}
        tempFilters[keyterm].push(keyValue);
        let abc = {
            ...tempFilters
        };
        dispatch(setAllFilters(abc));
    }
};
//********************** END ADDTHISFILTERS*********************
const RemoveFilter = (slectedFilters, term, value, dispatch, setAllFilters)=>{
    let newFilters = [];
    let cFilters = JSON.parse(JSON.stringify(slectedFilters));
    if (cFilters[term] && cFilters[term].length <= 1) {
        delete cFilters[term];
        newFilters = JSON.parse(JSON.stringify(cFilters));
    } else {
        let tempFilters = JSON.parse(JSON.stringify(cFilters));
        let index = tempFilters[term].indexOf(value);
        if (index && index !== -1) {
            tempFilters[term].splice(index, 1);
        }
        newFilters = JSON.parse(JSON.stringify(tempFilters));
    }
    dispatch(setAllFilters(newFilters));
};
const AddCategories = (slectedFilters, term, value, url, dispatch, setAllFilters)=>{
    let newFilters = [];
    let filterCategories = JSON.parse(JSON.stringify(slectedFilters["categories"]));
    let catItem = {
        key: term,
        taxonomy: term,
        value: value,
        url,
        url
    };
    filterCategories.push(catItem);
    let newcats = {
        ...slectedFilters
    };
    newcats["categories"] = [
        ...filterCategories
    ];
    console.log("filterCategories", newcats);
    dispatch(setAllFilters(newcats));
};
const RemoveCategories = (slectedFilters, term, value, url, dispatch, setAllFilters)=>{
    let newFilters = [];
    let tempFilters = JSON.parse(JSON.stringify(slectedFilters));
    tempFilters["categories"] = tempFilters["categories"].filter((el)=>el.url != url
    );
    let abc = {
        ...tempFilters
    };
    dispatch(setAllFilters(abc));
};
const CheckAvailable = (setCheckAvailability, value)=>{
    setCheckAvailability(value);
};

;// CONCATENATED MODULE: ./src/components/sidenav/SelectedFilters.js



const SelectedFilters = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "accordion-item",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "accordion-header",
                id: "flush-headingPrice",
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "accordion-button collapsed text-uppercase px-0 border-0 fw-bold bg-transparent",
                    type: "button",
                    "data-bs-toggle": "collapse",
                    "data-bs-target": "#collapsePrice",
                    "aria-expanded": "false",
                    "aria-controls": "collapsePrice",
                    children: "Selected"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "collapsePrice",
                className: "accordion-collapse collapse",
                "aria-labelledby": "flush-headingPrice",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "accordion-body px-1 pt-0",
                    children: Object.entries(props.filters).map(([key, value], i)=>{
                        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                            children: [
                                key == "categories" ? value.map((item)=>{
                                    console.log(item.key);
                                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: "d-block mb-2",
                                        children: [
                                            item.key && item.key == "FAKE_DEPT" ? "" : /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fa fa-times pr-2",
                                                onClick: ()=>{
                                                    RemoveCategories(props.filters, key, item.value, item.url, props.dispatch, props.setAllFilters);
                                                }
                                            }),
                                            item.value
                                        ]
                                    }, key + item.value);
                                }) : "",
                                key != "categories" && value.length > 0 ? value.map((val)=>{
                                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: "d-block mb-2",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fa fa-times pr-2",
                                                onClick: ()=>{
                                                    RemoveFilter(props.filters, key, val, props.dispatch, props.setAllFilters);
                                                }
                                            }),
                                            val
                                        ]
                                    }, key + val);
                                }) : ""
                            ]
                        });
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const sidenav_SelectedFilters = (SelectedFilters);

;// CONCATENATED MODULE: ./src/components/sidenav/ShopByAvailability.js



const ShopByAvailability = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        id: "avaiabilityFilter",
        className: "accordion-item border-bottom border-1",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "accordion-header",
                id: "flush-headingTwo",
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "accordion-button collapsed text-uppercase px-0 border-0 fw-bold bg-transparent",
                    type: "button",
                    "data-bs-toggle": "collapse",
                    "data-bs-target": "#collapseAvaialAbility",
                    "aria-expanded": "false",
                    "aria-controls": "collapseAvaialAbility",
                    children: "Availability"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "collapse border-0 accordion-body px-0 pt-0 ",
                id: "collapseAvaialAbility",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "form-check",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                className: "form-check-input",
                                type: "radio",
                                checked: props.checkAvailability === "all-items" ? "checked" : false,
                                name: "checkAvailable",
                                id: "all-items",
                                onClick: ()=>{
                                    CheckAvailable(props.setCheckAvailability, "all-items");
                                },
                                value: "Show All Items"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: "form-check-label btn ",
                                children: "Show All Items"
                            })
                        ]
                    }, "all-items"),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "form-check",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                className: "form-check-input",
                                type: "radio",
                                checked: props.checkAvailability === "out-of-stock-items" ? "checked" : false,
                                name: "checkAvailable",
                                id: "out-of-stock-items",
                                onClick: ()=>{
                                    CheckAvailable(props.setCheckAvailability, "out-of-stock-items");
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: "form-check-label btn ",
                                children: "Out of Stock Items"
                            })
                        ]
                    }, "out-of-stock-items"),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "form-check",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                className: "form-check-input",
                                type: "radio",
                                checked: props.checkAvailability === "in-stock-items" ? "checked" : false,
                                name: "checkAvailable",
                                id: "in-stock-items",
                                onClick: ()=>{
                                    CheckAvailable(props.setCheckAvailability, "in-stock-items");
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: "form-check-label btn ",
                                children: "In Stock Items"
                            })
                        ]
                    }, "in-stock-items")
                ]
            })
        ]
    });
};
/* harmony default export */ const sidenav_ShopByAvailability = (ShopByAvailability);

;// CONCATENATED MODULE: ./src/components/sidenav/ShopByCategory.js





const ShopByCategory = (props)=>{
    let { URL  } = process.env;
    const categoryModeValue = (0,external_react_redux_.useSelector)((state)=>state.categoryMode
    );
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        id: "CategoryFilter",
        className: "accordion-item border-bottom border-1",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "accordion-header",
                id: "flush-headingOne",
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "accordion-button collapsed text-uppercase fw-bold border-0 px-0 outline-none bg-transparent",
                    type: "button",
                    "data-bs-toggle": "collapse",
                    "data-bs-target": "#collapseExampleCategory",
                    "aria-expanded": "false",
                    "aria-controls": "collapseExampleCategory",
                    children: categoryModeValue == "landing" && props.taxonomy == "Dept" ? "Department" : "Category"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "collapse border-0",
                id: "collapseExampleCategory",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "accordion-body px-1 pt-0",
                    children: props.categories ? props.categories.map((category, index)=>{
                        let status = false;
                        let CurrentCategoryUrl = "";
                        CurrentCategoryUrl = props.urls[index];
                        return /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: URL + "/category/" + CurrentCategoryUrl,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                "data-url": CurrentCategoryUrl,
                                className: "text-decoration-none active text-capitalize d-block mb-2",
                                onClick: (e)=>{
                                    AddCategories(props.filters, props.taxonomy, category, CurrentCategoryUrl, props.dispatch, props.setAllFilters);
                                },
                                children: category
                            })
                        }, "category" + category + index);
                    }) : ""
                })
            })
        ]
    });
};
/* harmony default export */ const sidenav_ShopByCategory = (ShopByCategory);

;// CONCATENATED MODULE: ./src/components/sidenav/ShopByDynamicAttribute.js



const ShopByDynamicAttribute = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: props.attributes.map((attres, index)=>{
            if (attres.name && attres.name != "") {
                let attrName = "";
                let attrDisplayName = "";
                let readDisbaled = false;
                attrName = attres.name;
                attrDisplayName = attres.name;
                if (attrDisplayName.indexOf("_") !== -1) {
                    attrDisplayName = attrDisplayName.replaceAll("_", " ");
                }
                if (attrName.indexOf("_") !== -1) {
                    attrName = attrName.replaceAll("_", " ");
                }
                try {
                    if (attrName.indexOf(" ") !== -1) {
                        attrName = attrName.replaceAll(" ", "_");
                    }
                } catch (err) {}
                return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        id: "CategoryFilter",
                        className: "accordion-item border-bottom border-1",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "accordion-header",
                                id: "flush-headingOne",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "accordion-button collapsed text-uppercase fw-bold border-0 px-0 outline-none bg-transparent",
                                    type: "button",
                                    "data-bs-toggle": "collapse",
                                    "data-bs-target": "#collapse" + attrName,
                                    "aria-expanded": "false",
                                    "aria-controls": "collapse" + attrName,
                                    children: attrDisplayName
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "collapse border-0",
                                id: "collapse" + attrName,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "accordion-body px-1 pt-0",
                                    children: attres.value.map((attrValues, index)=>{
                                        let status = false;
                                        try {
                                            if (props.filters[attres.name].includes(attrValues.value.toLowerCase())) {
                                                status = true;
                                            } else {
                                                status = false;
                                            }
                                        } catch (err) {}
                                        let attrV = attrValues.value;
                                        try {
                                            attrValues.value = attrValues.value.toLowerCase();
                                        } catch (err1) {}
                                        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "form-check",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    className: "form-check-input active",
                                                    type: "checkbox",
                                                    defaultChecked: attrValues.value.toLowerCase(),
                                                    checked: status == true ? "checked" : false,
                                                    value: attrValues.value.toLowerCase(),
                                                    onChange: ()=>{},
                                                    onClick: ()=>{
                                                        AddThisFilter(props.filters, status, attres.name, attrValues.value.toLowerCase(), "dynamic", props.setSearchText, props.dispatch, props.setAllFilters);
                                                    },
                                                    disabled: readDisbaled ? "disabled" : false
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                    className: `form-check-label ${status ? " active " : " "} text-capitalize `,
                                                    children: [
                                                        attrValues.value,
                                                        "(",
                                                        attrValues.count,
                                                        ")"
                                                    ]
                                                })
                                            ]
                                        }, attrValues.value.toLowerCase());
                                    })
                                })
                            })
                        ]
                    }, "attrName" + attrName + index)
                });
            }
        })
    });
};
/* harmony default export */ const sidenav_ShopByDynamicAttribute = (ShopByDynamicAttribute);

;// CONCATENATED MODULE: ./src/components/sidenav/Sidenav.js











const Sidenav = (props)=>{
    const dispatch = (0,external_react_redux_.useDispatch)();
    const allProducts = props.products;
    const alltaxonomy = (0,external_react_redux_.useSelector)((state)=>state.taxonomy
    );
    const filters = (0,external_react_redux_.useSelector)((state)=>state.allFilters
    );
    const categoryModeValue = (0,external_react_redux_.useSelector)((state)=>state.categoryMode
    );
    let attributes = [];
    let attributesCount = [];
    const { 0: atrs , 1: setAtrs  } = (0,external_react_.useState)([]);
    let CategoriesData = {};
    let taxonomy = "";
    let categories = [];
    let urls = [];
    CategoriesData = ShopByCategories(props.urlTaxonomy, props.allCurrentProducts, alltaxonomy);
    taxonomy = CategoriesData.taxonomy;
    categories = CategoriesData.categories;
    urls = CategoriesData.URL;
    (0,external_react_.useEffect)(async ()=>{
        attributes = await ShopByAttributes(allProducts);
        setAtrs(attributes);
    }, [
        props.products
    ]);
    attributes = atrs;
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        id: "SideNav",
        className: "col-lg-2 col-md-4 col-12 filters pt-5-lg pt-3-md pt-1-sm pt-2",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "accordion accordion-flush pt-5-lg pt-3-md pt-1-sm pt-2",
            id: "accordionFlush",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    id: "filterby",
                    className: "mb-3 w-100",
                    "data-bs-toggle": "collapse",
                    "data-bs-target": "#flush-collapse",
                    "aria-expanded": "false",
                    "aria-controls": "flush-collapse",
                    children: "Filter By"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    id: "flush-collapse",
                    className: " collapse border-white border",
                    "aria-labelledby": "flush-heading",
                    "data-bs-parent": "#accordionFlush",
                    children: [
                        categoryModeValue == "category" ? /*#__PURE__*/ jsx_runtime_.jsx(sidenav_SelectedFilters, {
                            filters: filters,
                            dispatch: dispatch,
                            setAllFilters: allFiltersSlice/* setAllFilters */.sV
                        }) : "",
                        categoryModeValue == "category" ? /*#__PURE__*/ jsx_runtime_.jsx(sidenav_ShopByAvailability, {
                            setCheckAvailability: props.setCheckAvailability,
                            checkAvailability: props.checkAvailability
                        }) : "",
                        categories && categories.length > 0 ? /*#__PURE__*/ jsx_runtime_.jsx(sidenav_ShopByCategory, {
                            categories: categories,
                            filters: filters,
                            dispatch: dispatch,
                            setAllFilters: allFiltersSlice/* setAllFilters */.sV,
                            taxonomy: taxonomy,
                            urls: urls
                        }) : "",
                        /*#__PURE__*/ jsx_runtime_.jsx(sidenav_ShopByDynamicAttribute, {
                            attributes: attributes,
                            filters: filters,
                            dispatch: dispatch,
                            setAllFilters: allFiltersSlice/* setAllFilters */.sV,
                            setSearchText: props.setSearchText
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const sidenav_Sidenav = (Sidenav);


/***/ }),

/***/ 1291:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "xo": () => (/* binding */ GetProducts),
/* harmony export */   "_1": () => (/* binding */ PaginationCalc),
/* harmony export */   "Dg": () => (/* binding */ handlePageChange),
/* harmony export */   "Np": () => (/* binding */ GetUrlTaxonomy),
/* harmony export */   "f6": () => (/* binding */ GetUrlData),
/* harmony export */   "IU": () => (/* binding */ SortProducts),
/* harmony export */   "v6": () => (/* binding */ SortHandleChange),
/* harmony export */   "gk": () => (/* binding */ toggleListGridViews),
/* harmony export */   "zQ": () => (/* binding */ handleChangePerPage),
/* harmony export */   "EM": () => (/* binding */ setInitAvailable),
/* harmony export */   "t9": () => (/* binding */ avaialbilityFilter),
/* harmony export */   "Pj": () => (/* binding */ LoadSettings),
/* harmony export */   "Ss": () => (/* binding */ liveProdsRGXSearch),
/* harmony export */   "Gr": () => (/* binding */ RefineSearch),
/* harmony export */   "qO": () => (/* binding */ ReSearch)
/* harmony export */ });
/* unused harmony exports productsByDynamicFilters, CheckAvailable, routeNotFound, ShopByLandingCategories, getTypsWithThumbs */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);



const GetProducts = (filters, products, property, url, taxonomy, category, databy)=>{
    let getProducts = [];
    let allProducts = products;
    if (url == "all-products") {
        filters["all-products"] = "all-products";
    }
    getProducts = allProducts;
    if (taxonomy == "SUBTYP_3") {
        getProducts = allProducts.filter((prod)=>prod.SUBTYP_3.toUpperCase() == category.toUpperCase() && //   &&    prod.SUBTYP_3 == "EMPTY"
            prod.SUBTYP_3 != "EMPTY"
        );
    } else if (taxonomy == "SUBTYP_2") {
        getProducts = allProducts.filter((prod)=>prod.SUBTYP_2.toUpperCase() == category.toUpperCase() && //   &&    prod.SUBTYP_3 == "EMPTY"
            prod.SUBTYP_2 != "EMPTY"
        );
    } else if (taxonomy == "SUBTYP_1") {
        getProducts = allProducts.filter((prod)=>prod.SUBTYP_1.toUpperCase() == category.toUpperCase() && //  prod.SUBTYP_2 == "EMPTY" &&
            prod.SUBTYP_1 != "EMPTY"
        );
    } else if (taxonomy == "TYP") {
        getProducts = allProducts.filter((prod)=>prod.Typ.toUpperCase() == category.toUpperCase() && //  prod.SUBTYP_1 == "EMPTY" &&
            prod.Typ != "EMPTY"
        );
    } else if (taxonomy == "DEPT") {
        if (databy == "search") {} else {
            if (allProducts && allProducts.length > 0) {
                getProducts = allProducts.filter((prod)=>prod.Dept.toUpperCase() == category.toUpperCase()
                );
            }
        }
    } else if (url == "all-products") {
        getProducts = [];
        getProducts = allProducts;
    } else {
        getProducts = [];
    }
    if (Object.entries(filters) && Object.entries(filters).length > 0) {
        //Load products by seleted color filters
        for(let prop in filters){
            getProducts = productsByDynamicFilters(filters, getProducts, prop);
        }
    //Load products by seleted price Ranges filters
    } else {}
    if (property == "default") {} else {
        getProducts = SortProducts(property, getProducts);
    }
    let p1 = [];
    let p2 = [];
    let p3 = [];
    let p4 = [];
    let finalP = [];
    getProducts.map((sortedProd)=>{
        if (sortedProd.available.toUpperCase() == "IN STOCK") {
            p1.push(sortedProd);
        } else if (sortedProd.available.toUpperCase() == "IN STOCK VENDOR") {
            p2.push(sortedProd);
        } else if (sortedProd.available.toUpperCase() == "OUT OF STOCK") {
            p3.push(sortedProd);
        } else {
            p4.push(sortedProd);
        }
    });
    if (!p1) p1 = [];
    if (!p2) p2 = [];
    if (!p3) p3 = [];
    if (!p4) p4 = [];
    finalP = [
        ...p1,
        ...p2,
        ...p3,
        ...p4
    ];
    return finalP;
};
// END FILTER PRODUCTS AGAINST TAXONOMY AND FILTERS
const productsByDynamicFilters = (filters, getProducts, prop)=>{
    let selectedProducts = [];
    let keyFound = false;
    if (getProducts) {
        getProducts.map((prods)=>{
            if (prods.attributes) {
                prods.attributes.map((attr)=>{
                    if (prop == attr.name) {
                        keyFound = true;
                        if (Object.entries(filters[prop]).length > 1) {
                            filters[prop].map((filterProp)=>{
                                try {
                                    attr.value.map((val)=>{
                                        if (val.toUpperCase() == filterProp.toUpperCase()) {
                                            if (selectedProducts.includes(prods)) {} else {
                                                selectedProducts.push(prods);
                                            }
                                        } else {}
                                    });
                                } catch (err) {}
                            });
                        } else {
                            try {
                                attr.value.map((val)=>{
                                    if (val == filters[prop]) {
                                        if (selectedProducts.includes(prods)) {} else {
                                            selectedProducts.push(prods);
                                        }
                                    } else {}
                                });
                            } catch (err) {
                                let filterPropsValue = "";
                                let attrVal = "";
                                attrVal = attr.value;
                                try {
                                    filterPropsValue = filters[prop][0];
                                } catch (error) {
                                    filterPropsValue = filters[prop];
                                }
                                try {
                                    filterPropsValue = filterPropsValue.toUpperCase();
                                } catch (err) {}
                                try {
                                    attrVal = attrVal.toUpperCase();
                                } catch (err1) {}
                                if (attrVal == filterPropsValue) {
                                    if (selectedProducts.includes(prods)) {} else {
                                        selectedProducts.push(prods);
                                    }
                                } else {}
                            }
                        }
                    } else {}
                });
            }
        });
    } else {
        selectedProducts = [];
    }
    if (keyFound == false) {
        selectedProducts = getProducts;
    }
    return selectedProducts;
};
const PaginationCalc = (products, productsPerPage, activePage, setCurrentPage)=>{
    let pagination = {};
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        activePage = 1;
        setCurrentPage(1);
    }, [
        productsPerPage
    ]);
    // Logic for displaying current products
    const indexOfLastProduct = activePage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentproducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (products.length <= productsPerPage) {
            activePage = 1;
            setCurrentPage(1);
        }
    }, [
        products.length
    ]);
    pagination.currentproducts = currentproducts;
    return pagination;
};
// PAGINATION PAGE HANDLE
const handlePageChange = (setCurrentPage, e)=>{
    setCurrentPage(e);
};
const GetUrlTaxonomy = (allTaxonomy, url)=>{
    let taxonomy = {};
    try {
        taxonomy = allTaxonomy.find(function(taxono, index) {
            if (taxono.URL == url) {
                return taxono;
            }
        });
    } catch (err) {
        taxonomy = {};
    }
    return taxonomy;
};
const GetUrlData = async (filters, allTaxonomy)=>{
    let urlData = [];
    try {
        if (filters.DEPT && filters.DEPT.toUpperCase() != "EMPTY" && filters.DEPT.toUpperCase() != "") {
            let taxonomyUrl = "";
            GetTaxonomyURL("DEPT", filters.DEPT, allTaxonomy).then((url)=>{
                let taxonomy = {
                    key: "DEPT",
                    taxonomy: "DEPT",
                    value: filters.DEPT,
                    url: url
                };
                urlData.push(taxonomy);
            });
        }
        if (filters.TYP && filters.TYP.toUpperCase() != "EMPTY" && filters.TYP.toUpperCase() != "") {
            let taxonomyUrl = await GetTaxonomyURL("TYP", filters.TYP, allTaxonomy);
            let taxonomy = {
                key: "TYP",
                taxonomy: "TYP",
                value: filters.TYP,
                url: taxonomyUrl
            };
            urlData.push(taxonomy);
        }
        if (filters.SUBTYP_1 && filters.SUBTYP_1.toUpperCase() != "EMPTY" && filters.SUBTYP_1.toUpperCase() != "") {
            let taxonomyUrl = await GetTaxonomyURL("SUBTYP_1", filters.SUBTYP_1, allTaxonomy);
            let taxonomy = {
                key: "SUBTYP_1",
                taxonomy: "SUBTYP_1",
                value: filters.SUBTYP_1,
                url: taxonomyUrl
            };
            urlData.push(taxonomy);
        }
        if (filters.SUBTYP_2 && filters.SUBTYP_2.toUpperCase() != "EMPTY" && filters.SUBTYP_2.toUpperCase() != "") {
            let taxonomyUrl = await GetTaxonomyURL("SUBTYP_2", filters.SUBTYP_2, allTaxonomy);
            let taxonomy = {
                key: "SUBTYP_2",
                taxonomy: "SUBTYP_2",
                value: filters.SUBTYP_2,
                url: taxonomyUrl
            };
            urlData.push(taxonomy);
        }
        if (filters.SUBTYP_3 && filters.SUBTYP_3.toUpperCase() != "EMPTY" && filters.SUBTYP_3.toUpperCase() != "") {
            let taxonomyUrl = await GetTaxonomyURL("SUBTYP_3", filters.SUBTYP_3, allTaxonomy);
            let taxonomy = {
                key: "SUBTYP_3",
                taxonomy: "SUBTYP_3",
                value: filters.SUBTYP_3,
                url: taxonomyUrl
            };
            urlData.push(taxonomy);
        }
    } catch (err) {}
    return urlData;
};
const GetTaxonomyURL = async (k, v, alltaxonomy)=>{
    let url = "";
    alltaxonomy.map((taxo)=>{
        if (k == "DEPT") {
            if (taxo.DEPT != "EMPTY" && taxo.TYP == "EMPTY" && taxo[k] == v) url = taxo.URL;
        }
        if (k == "TYP") {
            if (taxo.TYP != "EMPTY" && taxo.SUBTYP_1 == "EMPTY" && taxo[k] == v) url = taxo.URL;
        }
        if (k == "SUBTYP_1") {
            if (taxo.SUBTYP_1 != "EMPTY" && taxo.SUBTYP_2 == "EMPTY" && taxo[k] == v) url = taxo.URL;
        }
        if (k == "SUBTYP_2") {
            if (taxo.SUBTYP_2 != "EMPTY" && taxo.SUBTYP_3 == "EMPTY" && taxo[k] == v) url = taxo.URL;
        }
        if (k == "SUBTYP_3") {
            if (taxo.SUBTYP_3 != "EMPTY" && taxo.SUBTYP_4 == "EMPTY" && taxo[k] == v) url = taxo.URL;
        }
    });
    return url;
};
// START PRODUCT SORT FUNCTIONALITY
const SortProducts = (property, currentproducts)=>{
    let tempProducts = [];
    let Sorting = {
        value: "default",
        order: "ASC"
    };
    if (property == "name(a-z)") {
        Sorting = {
            value: "name",
            order: "ASC"
        };
    } else if (property == "name(z-a)") {
        Sorting = {
            value: "name",
            order: "DESC"
        };
    } else if (property == "featuredASC") {
        Sorting = {
            value: "FEATURED",
            order: "ASC"
        };
    } else if (property == "price-high-to-low") {
        Sorting = {
            value: "price",
            order: "DESC"
        };
    } else if (property == "price-low-to-high") {
        Sorting = {
            value: "price",
            order: "ASC"
        };
    } else if (property == "newest") {
        Sorting = {
            value: "entry_date",
            order: "DESC"
        };
    } else if (property == "brands") {
        Sorting = {
            value: "brand",
            order: "ASC"
        };
    } else {
        Sorting = {
            value: "default",
            order: "ASC"
        };
    }
    let copyArray = [
        ...currentproducts
    ];
    tempProducts = copyArray.sort(SortProcess(Sorting));
    return tempProducts;
};
// END PRODUCT SORT FUNCTIONALITY
// START PRODUCT SORT PROCESSING
const SortProcess = (sorting)=>{
    let property = "default";
    let order = "ASC";
    property = sorting.value;
    order = sorting.order;
    var sortOrder = 1;
    if (property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function(a, b) {
        if (order == "ASC") {
            var result = a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
        } else {
            var result = a[property] > b[property] ? -1 : a[property] < b[property] ? 1 : 0;
        }
        return result * sortOrder;
    };
};
// END PRODUCT SORT PROCESSING
const SortHandleChange = (e, setProperty)=>{
    let sortValue = "";
    sortValue = e.target.value;
    setProperty(sortValue);
};
const toggleListGridViews = (e, viewValue, setListGridViews)=>{
    e.preventDefault();
    setListGridViews(viewValue);
};
//START SET PRODUCT COUNT
const handleChangePerPage = (setPerpageProductscount, e)=>{
    let value = e.target.value;
    setPerpageProductscount(value);
};
//END SET PRODUCT COUNT
const CheckAvailable = (setCheckAvailability, value)=>{
    setCheckAvailability(value);
};
const setInitAvailable = (checkAvailable, setCheckAvailability)=>{
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(async ()=>{
        try {
            setTimeout(()=>{
                setCheckAvailability(checkAvailable);
            }, 0);
        } catch (err) {
            setCheckAvailability("all-items");
        }
    }, []);
};
const avaialbilityFilter = (temProducts, checkAvailability)=>{
    if (checkAvailability == "out-of-stock-items") {
        temProducts = temProducts.filter((prods)=>prods.available == "Out of Stock"
        );
    } else if (checkAvailability == "in-stock-items") {
        temProducts = temProducts.filter((prods)=>prods.available.startsWith("In Stock")
        );
    } else {}
    return temProducts;
};
const LoadSettings = (settingsData, setSortBrandStatus, setSortNewestStatus, setCheckAvailability, setSortDefault, useEffect1)=>{
    let brandSortingSettings = "no";
    let newestSortingSettings = "no";
    let checkAvaiableSettings = "all-products";
    let sortingDefaultSettings = "Default";
    try {
        brandSortingSettings = settingsData.brandSorting.option;
    } catch (err) {}
    try {
        newestSortingSettings = settingsData.newestSorting.option;
    } catch (err2) {}
    try {
        checkAvaiableSettings = settingsData.availability.option;
    } catch (err3) {}
    try {
        sortingDefaultSettings = settingsData.sortingDefault.option;
    } catch (err4) {}
    useEffect1(async ()=>{
        try {
            setSortBrandStatus(brandSortingSettings);
            setSortNewestStatus(newestSortingSettings);
            setCheckAvailability(checkAvaiableSettings);
            setSortDefault(sortingDefaultSettings);
        } catch (err) {}
    }, []);
};
const liveProdsRGXSearch = (searchText, allProducts)=>{
    let fproducts = [];
    if (searchText && searchText != "") {
        let wordsArray = [];
        try {
            wordsArray = searchText.split(" ");
        } catch (err) {}
        // do something to match a complete word
        for(var i = 0; i < wordsArray.length; i++){
            if (i == wordsArray.length - 1) {
                wordsArray[i] = wordsArray[i];
            } else {
                wordsArray[i] = wordsArray[i] + " ";
            }
        }
        //Remove null elemets
        wordsArray = wordsArray.filter((item)=>item !== ""
        );
        // add Regex rules around words
        for(var i = 0; i < wordsArray.length; i++){
            wordsArray[i] = "^(?=.*" + wordsArray[i] + ")";
        }
        // convert array to string
        let strElements = wordsArray.toString();
        // Remove , between elements
        strElements = strElements.replace(/,/g, "");
        // Regx constructor
        var regex = new RegExp("\\b^(?:" + strElements + ")\\b", "igm");
        // filter products according to Regex rules
        fproducts = allProducts.filter((product)=>regex.test(product.brand + " " + product.name + " ")
        );
    } else {
        fproducts = allProducts;
    }
    return fproducts;
};
const RefineSearch = (e, setSearchText)=>{
    e.preventDefault();
    let text = e.target.value;
    setSearchText(text);
};
const ReSearch = (setSearchText, brandURL)=>{
//START CHECKING SEARCH OR BRAND SEARCH IS INVOLVED
};
const routeNotFound = ()=>{
    return /*#__PURE__*/ _jsx("section", {
        id: "contentHolder",
        children: /*#__PURE__*/ _jsx("div", {
            id: "category",
            children: /*#__PURE__*/ _jsx("div", {
                className: "container-fluid",
                children: /*#__PURE__*/ _jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ _jsx("div", {
                        class: "alert alert-danger",
                        role: "alert",
                        children: "INVALID ROUTE! No Data Available for This Route"
                    })
                })
            })
        })
    });
};
const ShopByLandingCategories = (dept)=>{
    let categories = [];
    const alltaxonomy = useSelector((state)=>state.taxonomy
    );
    alltaxonomy.map((category)=>{
        if (category.DEPT == dept && category.TYP != "" && category.TYP != "EMPTY" && category.SUBTYP_1 == "EMPTY") {
            categories.push(category);
        }
    });
    return categories;
};
const getTypsWithThumbs = async (Dept)=>{
    let typs = [];
    let data = [];
    try {
        const response = await axios("/data/typs-with-thumbs.json");
        data = response.data;
        data.map((elements)=>{
            if (elements.Dept == Dept) {
                typs = elements.Typs;
            }
        });
    } catch (err) {}
    return typs;
};


/***/ })

};
;