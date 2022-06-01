"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/account/updateAccount";
exports.ids = ["pages/api/account/updateAccount"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./src/pages/api/account/updateAccount.js":
/*!************************************************!*\
  !*** ./src/pages/api/account/updateAccount.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst fsp = (__webpack_require__(/*! fs */ \"fs\").promises);\nasync function handler(req, res) {\n    let user = req.body.data;\n    let dataURL = process.cwd() + `/data/users/users.json`;\n    let response = \"\";\n    let stcode = 409;\n    let users = [];\n    fsp.readFile(dataURL).then((rawData)=>{\n        try {\n            users = JSON.parse(rawData);\n        } catch (err) {\n            users = [];\n        }\n        if (!users || users.length < 1) {\n            users = [];\n        }\n        // let record = users.filter((person) => person.credentials.id == user.id);\n        let index = -1;\n        index = users.findIndex((person)=>person.id.toString() == user.id.toString()\n        );\n        let newUsers = [\n            ...users\n        ];\n        if (index > -1) {\n            newUsers[index] = user;\n            try {\n                fsp.writeFile(dataURL, JSON.stringify(newUsers)).then((rsp)=>{\n                    response = \"User Updated Successfully!\";\n                });\n                stcode = 200;\n            } catch (err) {\n                response = \"User Updation Failed!\" + err;\n                stcode = 409;\n            }\n        }\n        return res.status(stcode).send(response);\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2FjY291bnQvdXBkYXRlQWNjb3VudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsR0FBRyxHQUFHQyw4Q0FBc0I7QUFFbkIsZUFBZUUsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxJQUFJQyxJQUFJLEdBQUdGLEdBQUcsQ0FBQ0csSUFBSSxDQUFDQyxJQUFJO0lBQ3hCLElBQUlDLE9BQU8sR0FBR0MsT0FBTyxDQUFDQyxHQUFHLEVBQUUsR0FBRyxDQUFDLHNCQUFzQixDQUFDO0lBQ3RELElBQUlDLFFBQVEsR0FBRyxFQUFFO0lBQ2pCLElBQUlDLE1BQU0sR0FBRyxHQUFHO0lBQ2hCLElBQUlDLEtBQUssR0FBRyxFQUFFO0lBQ2RkLEdBQUcsQ0FBQ2UsUUFBUSxDQUFDTixPQUFPLENBQUMsQ0FBQ08sSUFBSSxDQUFDLENBQUNDLE9BQU8sR0FBSztRQUN0QyxJQUFJO1lBQ0ZILEtBQUssR0FBR0ksSUFBSSxDQUFDQyxLQUFLLENBQUNGLE9BQU8sQ0FBQyxDQUFDO1NBQzdCLENBQUMsT0FBT0csR0FBRyxFQUFFO1lBQ1pOLEtBQUssR0FBRyxFQUFFLENBQUM7U0FDWjtRQUVELElBQUksQ0FBQ0EsS0FBSyxJQUFJQSxLQUFLLENBQUNPLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDOUJQLEtBQUssR0FBRyxFQUFFLENBQUM7U0FDWjtRQUNELDJFQUEyRTtRQUMzRSxJQUFJUSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2RBLEtBQUssR0FBR1IsS0FBSyxDQUFDUyxTQUFTLENBQ3JCLENBQUNDLE1BQU0sR0FBS0EsTUFBTSxDQUFDQyxFQUFFLENBQUNDLFFBQVEsRUFBRSxJQUFJcEIsSUFBSSxDQUFDbUIsRUFBRSxDQUFDQyxRQUFRLEVBQUU7UUFBQSxDQUN2RCxDQUFDO1FBRUYsSUFBSUMsUUFBUSxHQUFHO2VBQUliLEtBQUs7U0FBQztRQUV6QixJQUFJUSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDZEssUUFBUSxDQUFDTCxLQUFLLENBQUMsR0FBR2hCLElBQUksQ0FBQztZQUV2QixJQUFJO2dCQUNGTixHQUFHLENBQUM0QixTQUFTLENBQUNuQixPQUFPLEVBQUVTLElBQUksQ0FBQ1csU0FBUyxDQUFDRixRQUFRLENBQUMsQ0FBQyxDQUFDWCxJQUFJLENBQUMsQ0FBQ2MsR0FBRyxHQUFLO29CQUM3RGxCLFFBQVEsR0FBRyw0QkFBNEIsQ0FBQztpQkFDekMsQ0FBQyxDQUFDO2dCQUNIQyxNQUFNLEdBQUcsR0FBRyxDQUFDO2FBQ2QsQ0FBQyxPQUFPTyxHQUFHLEVBQUU7Z0JBQ1pSLFFBQVEsR0FBRyx1QkFBdUIsR0FBR1EsR0FBRyxDQUFDO2dCQUN6Q1AsTUFBTSxHQUFHLEdBQUcsQ0FBQzthQUNkO1NBQ0Y7UUFDRCxPQUFPUixHQUFHLENBQUMwQixNQUFNLENBQUNsQixNQUFNLENBQUMsQ0FBQ21CLElBQUksQ0FBQ3BCLFFBQVEsQ0FBQyxDQUFDO0tBQzFDLENBQUMsQ0FBQztDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9kZXJuLy4vc3JjL3BhZ2VzL2FwaS9hY2NvdW50L3VwZGF0ZUFjY291bnQuanM/MWM2YyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmc3AgPSByZXF1aXJlKFwiZnNcIikucHJvbWlzZXM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgbGV0IHVzZXIgPSByZXEuYm9keS5kYXRhO1xyXG4gIGxldCBkYXRhVVJMID0gcHJvY2Vzcy5jd2QoKSArIGAvZGF0YS91c2Vycy91c2Vycy5qc29uYDtcclxuICBsZXQgcmVzcG9uc2UgPSBcIlwiO1xyXG4gIGxldCBzdGNvZGUgPSA0MDk7XHJcbiAgbGV0IHVzZXJzID0gW107XHJcbiAgZnNwLnJlYWRGaWxlKGRhdGFVUkwpLnRoZW4oKHJhd0RhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHVzZXJzID0gSlNPTi5wYXJzZShyYXdEYXRhKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICB1c2VycyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdXNlcnMgfHwgdXNlcnMubGVuZ3RoIDwgMSkge1xyXG4gICAgICB1c2VycyA9IFtdO1xyXG4gICAgfVxyXG4gICAgLy8gbGV0IHJlY29yZCA9IHVzZXJzLmZpbHRlcigocGVyc29uKSA9PiBwZXJzb24uY3JlZGVudGlhbHMuaWQgPT0gdXNlci5pZCk7XHJcbiAgICBsZXQgaW5kZXggPSAtMTtcclxuICAgIGluZGV4ID0gdXNlcnMuZmluZEluZGV4KFxyXG4gICAgICAocGVyc29uKSA9PiBwZXJzb24uaWQudG9TdHJpbmcoKSA9PSB1c2VyLmlkLnRvU3RyaW5nKClcclxuICAgICk7XHJcblxyXG4gICAgbGV0IG5ld1VzZXJzID0gWy4uLnVzZXJzXTtcclxuXHJcbiAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICBuZXdVc2Vyc1tpbmRleF0gPSB1c2VyO1xyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBmc3Aud3JpdGVGaWxlKGRhdGFVUkwsIEpTT04uc3RyaW5naWZ5KG5ld1VzZXJzKSkudGhlbigocnNwKSA9PiB7XHJcbiAgICAgICAgICByZXNwb25zZSA9IFwiVXNlciBVcGRhdGVkIFN1Y2Nlc3NmdWxseSFcIjtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzdGNvZGUgPSAyMDA7XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHJlc3BvbnNlID0gXCJVc2VyIFVwZGF0aW9uIEZhaWxlZCFcIiArIGVycjtcclxuICAgICAgICBzdGNvZGUgPSA0MDk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXMuc3RhdHVzKHN0Y29kZSkuc2VuZChyZXNwb25zZSk7XHJcbiAgfSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImZzcCIsInJlcXVpcmUiLCJwcm9taXNlcyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJ1c2VyIiwiYm9keSIsImRhdGEiLCJkYXRhVVJMIiwicHJvY2VzcyIsImN3ZCIsInJlc3BvbnNlIiwic3Rjb2RlIiwidXNlcnMiLCJyZWFkRmlsZSIsInRoZW4iLCJyYXdEYXRhIiwiSlNPTiIsInBhcnNlIiwiZXJyIiwibGVuZ3RoIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJwZXJzb24iLCJpZCIsInRvU3RyaW5nIiwibmV3VXNlcnMiLCJ3cml0ZUZpbGUiLCJzdHJpbmdpZnkiLCJyc3AiLCJzdGF0dXMiLCJzZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/account/updateAccount.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/account/updateAccount.js"));
module.exports = __webpack_exports__;

})();