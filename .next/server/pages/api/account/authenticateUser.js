"use strict";
(() => {
var exports = {};
exports.id = 7000;
exports.ids = [7000];
exports.modules = {

/***/ 1490:
/***/ ((module) => {

module.exports = require("md5");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 2202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const fsp = (__webpack_require__(7147).promises);
const md5 = __webpack_require__(1490);
async function handler(req, res) {
    let data = req.body;
    let login_email = data.email;
    let login_password = data.password;
    let dataURL = process.cwd() + `/data/users/users.json`;
    const rawData = await fsp.readFile(dataURL);
    const usersData = JSON.parse(rawData);
    let record = usersData.filter((person)=>person.credentials.email == login_email && person.credentials.password == md5(login_password)
    );
    console.log("record", record);
    let stCode = "409";
    let response = "";
    let ID = "";
    if (record && record.length > 0) {
        stCode = 200;
        response = "Login Successfully";
        ID = record[0].id;
    } else {
        stCode = 409;
        response = "Login Failed";
    }
    res.status(stCode).json({
        response: response,
        status: stCode,
        data: {
            ID: ID
        }
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2202));
module.exports = __webpack_exports__;

})();