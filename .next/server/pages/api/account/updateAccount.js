"use strict";
(() => {
var exports = {};
exports.id = 9235;
exports.ids = [9235];
exports.modules = {

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 400:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const fsp = (__webpack_require__(7147).promises);
async function handler(req, res) {
    let user = req.body.data;
    let dataURL = process.cwd() + `/data/users/users.json`;
    let response = "";
    let stcode = 409;
    let users = [];
    fsp.readFile(dataURL).then((rawData)=>{
        try {
            users = JSON.parse(rawData);
        } catch (err) {
            users = [];
        }
        if (!users || users.length < 1) {
            users = [];
        }
        // let record = users.filter((person) => person.credentials.id == user.id);
        let index = -1;
        index = users.findIndex((person)=>person.id.toString() == user.id.toString()
        );
        let newUsers = [
            ...users
        ];
        if (index > -1) {
            newUsers[index] = user;
            try {
                fsp.writeFile(dataURL, JSON.stringify(newUsers)).then((rsp)=>{
                    response = "User Updated Successfully!";
                });
                stcode = 200;
            } catch (err) {
                response = "User Updation Failed!" + err;
                stcode = 409;
            }
        }
        res.status(stcode).send(response);
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(400));
module.exports = __webpack_exports__;

})();