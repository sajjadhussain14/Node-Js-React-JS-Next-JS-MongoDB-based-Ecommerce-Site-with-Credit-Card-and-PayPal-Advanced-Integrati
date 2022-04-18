"use strict";
(() => {
var exports = {};
exports.id = 3560;
exports.ids = [3560];
exports.modules = {

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 7164:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const fsp = (__webpack_require__(7147).promises);
async function handler(req, res) {
    let { data  } = req.body;
    let wishLists = [];
    let wishList = {
        name: data.name,
        visibility: data.visibility,
        typ: data.type,
        userID: data.userID,
        items: [
            data.items
        ]
    };
    let dataURL = process.cwd() + `/data/wishlists/wishlists.json`;
    let response = "";
    let stcode = 409;
    fsp.readFile(dataURL).then((rawData)=>{
        try {
            wishLists = JSON.parse(rawData);
        } catch (err) {
            wishLists = [];
        }
        if (!wishLists || wishLists.length < 1) {
            wishLists = [];
        }
        let index = -1;
        index = wishLists.findIndex((list)=>list.userID.toString() == data.userID.toString()
        );
        let newWishLists = [
            ...wishLists
        ];
        if (index > -1) {
            let listIndex = -1;
            listIndex = wishLists.findIndex((list)=>list.name.toString() == data.name.toString()
            );
            if (listIndex > -1) {
                let listPreItems = [];
                listPreItems = newWishLists[listIndex].items;
                let itemIndex = -1;
                itemIndex = listPreItems.findIndex((item)=>item.id.toString() == wishList.items[0].id.toString()
                );
                if (itemIndex > -1) {
                    newWishLists[listIndex].items[itemIndex].qty = wishList.items[0].qty;
                    fsp.writeFile(dataURL, JSON.stringify(newWishLists)).then((rsp)=>{
                        response = "Item Added Successfully!";
                    });
                    stcode = 200;
                    return res.status(stcode).send(response);
                } else {
                    newWishLists[listIndex].items.push(wishList.items[0]);
                    fsp.writeFile(dataURL, JSON.stringify(newWishLists)).then((rsp)=>{
                        response = "Item Added Successfully!";
                    });
                    stcode = 200;
                    return res.status(stcode).send(response);
                }
            } else {
                wishLists.push(wishList);
                fsp.writeFile(dataURL, JSON.stringify(wishLists)).then((rsp)=>{
                    response = "Item Added Successfully!";
                });
                stcode = 200;
                return res.status(stcode).send(response);
            }
        } else {
            try {
                wishLists.push(wishList);
                fsp.writeFile(dataURL, JSON.stringify(wishLists)).then((rsp)=>{
                    response = "Item Added Successfully!";
                });
                stcode = 200;
                return res.status(stcode).send(response);
            } catch (err) {
                response = "Failed!" + err;
                stcode = 301;
                return res.status(stcode).send(response);
            }
        }
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7164));
module.exports = __webpack_exports__;

})();