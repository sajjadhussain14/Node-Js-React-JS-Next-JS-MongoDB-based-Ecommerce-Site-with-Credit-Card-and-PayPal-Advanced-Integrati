"use strict";
(() => {
var exports = {};
exports.id = 2023;
exports.ids = [2023];
exports.modules = {

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const fsp = (__webpack_require__(7147).promises);
async function handler(req, res) {
    res.setHeader("Cache-Control", "s-maxage=86400");
    const { ID  } = req.query;
    let dataURL = process.cwd() + `/data/users/users.json`;
    const rawData = await fsp.readFile(dataURL);
    const usersData = JSON.parse(rawData);
    let userRecord = usersData.filter((person)=>person.id.toString() == ID.toString()
    );
    let stCode = 409;
    let response = "";
    let userInfo = [];
    if (userRecord && userRecord.length > 0) {
        userInfo = userRecord[0];
        stCode = 200;
    } else {
        userInfo = [];
        stCode = 409;
    }
    res.status(stCode).json({
        response: response,
        status: stCode,
        userInfo: userInfo
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1871));
module.exports = __webpack_exports__;

})();