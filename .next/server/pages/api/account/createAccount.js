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
exports.id = "pages/api/account/createAccount";
exports.ids = ["pages/api/account/createAccount"];
exports.modules = {

/***/ "md5":
/*!**********************!*\
  !*** external "md5" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("md5");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./src/pages/api/account/createAccount.js":
/*!************************************************!*\
  !*** ./src/pages/api/account/createAccount.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst fsp = (__webpack_require__(/*! fs */ \"fs\").promises);\nconst md5 = __webpack_require__(/*! md5 */ \"md5\");\nasync function handler(req, res) {\n    let data = req.body;\n    let users = [];\n    let user = {\n        id: data.ID,\n        credentials: {\n            email: data.email,\n            password: md5(data.password)\n        },\n        billing: {\n            first_name: data.fname,\n            last_name: data.lname,\n            phone: data.phone,\n            address1: data.address1,\n            address2: data.address2,\n            email: data.email,\n            city: data.city,\n            state: data.state,\n            zip_code: data.zcode,\n            country: data.country\n        },\n        shipping: {\n            first_name: \"\",\n            last_name: \"\",\n            phone: \"\",\n            address1: \"\",\n            address2: \"\",\n            email: data.email,\n            city: \"\",\n            state: \"\",\n            zip_code: \"\",\n            country: \"\"\n        }\n    };\n    let dataURL = process.cwd() + `/data/users/users.json`;\n    let response = \"\";\n    let stcode = 409;\n    fsp.readFile(dataURL).then((rawData)=>{\n        try {\n            users = JSON.parse(rawData);\n        } catch (err) {\n            users = [];\n        }\n        if (!users || users.length < 1) {\n            users = [];\n        }\n        let record = users.filter((person)=>person.credentials.email == user.credentials.email\n        );\n        if (record && record.length > 0) {\n            response = \"User Creation Failed! User Already Exixts.\";\n            stcode = 409;\n            return res.status(stcode).send(response);\n        } else {\n            try {\n                users.push(user);\n                fsp.writeFile(dataURL, JSON.stringify(users)).then((rsp)=>{\n                    response = \"User Created Successfully!\";\n                });\n                stcode = 200;\n                return res.status(stcode).send(response);\n            } catch (err) {\n                response = \"User Creation Failed!\" + err;\n                stcode = 301;\n                return res.status(stcode).send(response);\n            }\n        }\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2FjY291bnQvY3JlYXRlQWNjb3VudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsR0FBRyxHQUFHQyw4Q0FBc0I7QUFDbEMsTUFBTUUsR0FBRyxHQUFHRixtQkFBTyxDQUFDLGdCQUFLLENBQUM7QUFFWCxlQUFlRyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLElBQUlDLElBQUksR0FBR0YsR0FBRyxDQUFDRyxJQUFJO0lBQ25CLElBQUlDLEtBQUssR0FBRyxFQUFFO0lBQ2QsSUFBSUMsSUFBSSxHQUFHO1FBQ1RDLEVBQUUsRUFBRUosSUFBSSxDQUFDSyxFQUFFO1FBQ1hDLFdBQVcsRUFBRTtZQUNYQyxLQUFLLEVBQUVQLElBQUksQ0FBQ08sS0FBSztZQUNqQkMsUUFBUSxFQUFFWixHQUFHLENBQUNJLElBQUksQ0FBQ1EsUUFBUSxDQUFDO1NBQzdCO1FBQ0RDLE9BQU8sRUFBRTtZQUNQQyxVQUFVLEVBQUVWLElBQUksQ0FBQ1csS0FBSztZQUN0QkMsU0FBUyxFQUFFWixJQUFJLENBQUNhLEtBQUs7WUFDckJDLEtBQUssRUFBRWQsSUFBSSxDQUFDYyxLQUFLO1lBQ2pCQyxRQUFRLEVBQUVmLElBQUksQ0FBQ2UsUUFBUTtZQUN2QkMsUUFBUSxFQUFFaEIsSUFBSSxDQUFDZ0IsUUFBUTtZQUN2QlQsS0FBSyxFQUFFUCxJQUFJLENBQUNPLEtBQUs7WUFDakJVLElBQUksRUFBRWpCLElBQUksQ0FBQ2lCLElBQUk7WUFDZkMsS0FBSyxFQUFFbEIsSUFBSSxDQUFDa0IsS0FBSztZQUNqQkMsUUFBUSxFQUFFbkIsSUFBSSxDQUFDb0IsS0FBSztZQUNwQkMsT0FBTyxFQUFFckIsSUFBSSxDQUFDcUIsT0FBTztTQUN0QjtRQUVEQyxRQUFRLEVBQUU7WUFDUlosVUFBVSxFQUFFLEVBQUU7WUFDZEUsU0FBUyxFQUFFLEVBQUU7WUFDYkUsS0FBSyxFQUFFLEVBQUU7WUFDVEMsUUFBUSxFQUFFLEVBQUU7WUFDWkMsUUFBUSxFQUFFLEVBQUU7WUFDWlQsS0FBSyxFQUFFUCxJQUFJLENBQUNPLEtBQUs7WUFDakJVLElBQUksRUFBRSxFQUFFO1lBQ1JDLEtBQUssRUFBRSxFQUFFO1lBQ1RDLFFBQVEsRUFBRSxFQUFFO1lBQ1pFLE9BQU8sRUFBRSxFQUFFO1NBQ1o7S0FDRjtJQUVELElBQUlFLE9BQU8sR0FBR0MsT0FBTyxDQUFDQyxHQUFHLEVBQUUsR0FBRyxDQUFDLHNCQUFzQixDQUFDO0lBQ3RELElBQUlDLFFBQVEsR0FBRyxFQUFFO0lBQ2pCLElBQUlDLE1BQU0sR0FBRyxHQUFHO0lBQ2hCbEMsR0FBRyxDQUFDbUMsUUFBUSxDQUFDTCxPQUFPLENBQUMsQ0FBQ00sSUFBSSxDQUFDLENBQUNDLE9BQU8sR0FBSztRQUN0QyxJQUFJO1lBQ0Y1QixLQUFLLEdBQUc2QixJQUFJLENBQUNDLEtBQUssQ0FBQ0YsT0FBTyxDQUFDLENBQUM7U0FDN0IsQ0FBQyxPQUFPRyxHQUFHLEVBQUU7WUFDWi9CLEtBQUssR0FBRyxFQUFFLENBQUM7U0FDWjtRQUVELElBQUksQ0FBQ0EsS0FBSyxJQUFJQSxLQUFLLENBQUNnQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzlCaEMsS0FBSyxHQUFHLEVBQUUsQ0FBQztTQUNaO1FBQ0QsSUFBSWlDLE1BQU0sR0FBR2pDLEtBQUssQ0FBQ2tDLE1BQU0sQ0FDdkIsQ0FBQ0MsTUFBTSxHQUFLQSxNQUFNLENBQUMvQixXQUFXLENBQUNDLEtBQUssSUFBSUosSUFBSSxDQUFDRyxXQUFXLENBQUNDLEtBQUs7UUFBQSxDQUMvRDtRQUVELElBQUk0QixNQUFNLElBQUlBLE1BQU0sQ0FBQ0QsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUMvQlIsUUFBUSxHQUFHLDRDQUE0QyxDQUFDO1lBQ3hEQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1lBQ2IsT0FBTzVCLEdBQUcsQ0FBQ3VDLE1BQU0sQ0FBQ1gsTUFBTSxDQUFDLENBQUNZLElBQUksQ0FBQ2IsUUFBUSxDQUFDLENBQUM7U0FDMUMsTUFBTTtZQUNMLElBQUk7Z0JBQ0Z4QixLQUFLLENBQUNzQyxJQUFJLENBQUNyQyxJQUFJLENBQUMsQ0FBQztnQkFDakJWLEdBQUcsQ0FBQ2dELFNBQVMsQ0FBQ2xCLE9BQU8sRUFBRVEsSUFBSSxDQUFDVyxTQUFTLENBQUN4QyxLQUFLLENBQUMsQ0FBQyxDQUFDMkIsSUFBSSxDQUFDLENBQUNjLEdBQUcsR0FBSztvQkFDMURqQixRQUFRLEdBQUcsNEJBQTRCLENBQUM7aUJBQ3pDLENBQUMsQ0FBQztnQkFDSEMsTUFBTSxHQUFHLEdBQUcsQ0FBQztnQkFDYixPQUFPNUIsR0FBRyxDQUFDdUMsTUFBTSxDQUFDWCxNQUFNLENBQUMsQ0FBQ1ksSUFBSSxDQUFDYixRQUFRLENBQUMsQ0FBQzthQUMxQyxDQUFDLE9BQU9PLEdBQUcsRUFBRTtnQkFDWlAsUUFBUSxHQUFHLHVCQUF1QixHQUFHTyxHQUFHLENBQUM7Z0JBQ3pDTixNQUFNLEdBQUcsR0FBRyxDQUFDO2dCQUNiLE9BQU81QixHQUFHLENBQUN1QyxNQUFNLENBQUNYLE1BQU0sQ0FBQyxDQUFDWSxJQUFJLENBQUNiLFFBQVEsQ0FBQyxDQUFDO2FBQzFDO1NBQ0Y7S0FDRixDQUFDLENBQUM7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL21vZGVybi8uL3NyYy9wYWdlcy9hcGkvYWNjb3VudC9jcmVhdGVBY2NvdW50LmpzPzcwNWUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZnNwID0gcmVxdWlyZShcImZzXCIpLnByb21pc2VzO1xyXG5jb25zdCBtZDUgPSByZXF1aXJlKFwibWQ1XCIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGxldCBkYXRhID0gcmVxLmJvZHk7XHJcbiAgbGV0IHVzZXJzID0gW107XHJcbiAgbGV0IHVzZXIgPSB7XHJcbiAgICBpZDogZGF0YS5JRCxcclxuICAgIGNyZWRlbnRpYWxzOiB7XHJcbiAgICAgIGVtYWlsOiBkYXRhLmVtYWlsLFxyXG4gICAgICBwYXNzd29yZDogbWQ1KGRhdGEucGFzc3dvcmQpLFxyXG4gICAgfSxcclxuICAgIGJpbGxpbmc6IHtcclxuICAgICAgZmlyc3RfbmFtZTogZGF0YS5mbmFtZSxcclxuICAgICAgbGFzdF9uYW1lOiBkYXRhLmxuYW1lLFxyXG4gICAgICBwaG9uZTogZGF0YS5waG9uZSxcclxuICAgICAgYWRkcmVzczE6IGRhdGEuYWRkcmVzczEsXHJcbiAgICAgIGFkZHJlc3MyOiBkYXRhLmFkZHJlc3MyLFxyXG4gICAgICBlbWFpbDogZGF0YS5lbWFpbCxcclxuICAgICAgY2l0eTogZGF0YS5jaXR5LFxyXG4gICAgICBzdGF0ZTogZGF0YS5zdGF0ZSxcclxuICAgICAgemlwX2NvZGU6IGRhdGEuemNvZGUsXHJcbiAgICAgIGNvdW50cnk6IGRhdGEuY291bnRyeSxcclxuICAgIH0sXHJcblxyXG4gICAgc2hpcHBpbmc6IHtcclxuICAgICAgZmlyc3RfbmFtZTogXCJcIixcclxuICAgICAgbGFzdF9uYW1lOiBcIlwiLFxyXG4gICAgICBwaG9uZTogXCJcIixcclxuICAgICAgYWRkcmVzczE6IFwiXCIsXHJcbiAgICAgIGFkZHJlc3MyOiBcIlwiLFxyXG4gICAgICBlbWFpbDogZGF0YS5lbWFpbCxcclxuICAgICAgY2l0eTogXCJcIixcclxuICAgICAgc3RhdGU6IFwiXCIsXHJcbiAgICAgIHppcF9jb2RlOiBcIlwiLFxyXG4gICAgICBjb3VudHJ5OiBcIlwiLFxyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICBsZXQgZGF0YVVSTCA9IHByb2Nlc3MuY3dkKCkgKyBgL2RhdGEvdXNlcnMvdXNlcnMuanNvbmA7XHJcbiAgbGV0IHJlc3BvbnNlID0gXCJcIjtcclxuICBsZXQgc3Rjb2RlID0gNDA5O1xyXG4gIGZzcC5yZWFkRmlsZShkYXRhVVJMKS50aGVuKChyYXdEYXRhKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICB1c2VycyA9IEpTT04ucGFyc2UocmF3RGF0YSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgdXNlcnMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXVzZXJzIHx8IHVzZXJzLmxlbmd0aCA8IDEpIHtcclxuICAgICAgdXNlcnMgPSBbXTtcclxuICAgIH1cclxuICAgIGxldCByZWNvcmQgPSB1c2Vycy5maWx0ZXIoXHJcbiAgICAgIChwZXJzb24pID0+IHBlcnNvbi5jcmVkZW50aWFscy5lbWFpbCA9PSB1c2VyLmNyZWRlbnRpYWxzLmVtYWlsXHJcbiAgICApO1xyXG5cclxuICAgIGlmIChyZWNvcmQgJiYgcmVjb3JkLmxlbmd0aCA+IDApIHtcclxuICAgICAgcmVzcG9uc2UgPSBcIlVzZXIgQ3JlYXRpb24gRmFpbGVkISBVc2VyIEFscmVhZHkgRXhpeHRzLlwiO1xyXG4gICAgICBzdGNvZGUgPSA0MDk7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKHN0Y29kZSkuc2VuZChyZXNwb25zZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHVzZXJzLnB1c2godXNlcik7XHJcbiAgICAgICAgZnNwLndyaXRlRmlsZShkYXRhVVJMLCBKU09OLnN0cmluZ2lmeSh1c2VycykpLnRoZW4oKHJzcCkgPT4ge1xyXG4gICAgICAgICAgcmVzcG9uc2UgPSBcIlVzZXIgQ3JlYXRlZCBTdWNjZXNzZnVsbHkhXCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc3Rjb2RlID0gMjAwO1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKHN0Y29kZSkuc2VuZChyZXNwb25zZSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHJlc3BvbnNlID0gXCJVc2VyIENyZWF0aW9uIEZhaWxlZCFcIiArIGVycjtcclxuICAgICAgICBzdGNvZGUgPSAzMDE7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoc3Rjb2RlKS5zZW5kKHJlc3BvbnNlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJmc3AiLCJyZXF1aXJlIiwicHJvbWlzZXMiLCJtZDUiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiZGF0YSIsImJvZHkiLCJ1c2VycyIsInVzZXIiLCJpZCIsIklEIiwiY3JlZGVudGlhbHMiLCJlbWFpbCIsInBhc3N3b3JkIiwiYmlsbGluZyIsImZpcnN0X25hbWUiLCJmbmFtZSIsImxhc3RfbmFtZSIsImxuYW1lIiwicGhvbmUiLCJhZGRyZXNzMSIsImFkZHJlc3MyIiwiY2l0eSIsInN0YXRlIiwiemlwX2NvZGUiLCJ6Y29kZSIsImNvdW50cnkiLCJzaGlwcGluZyIsImRhdGFVUkwiLCJwcm9jZXNzIiwiY3dkIiwicmVzcG9uc2UiLCJzdGNvZGUiLCJyZWFkRmlsZSIsInRoZW4iLCJyYXdEYXRhIiwiSlNPTiIsInBhcnNlIiwiZXJyIiwibGVuZ3RoIiwicmVjb3JkIiwiZmlsdGVyIiwicGVyc29uIiwic3RhdHVzIiwic2VuZCIsInB1c2giLCJ3cml0ZUZpbGUiLCJzdHJpbmdpZnkiLCJyc3AiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/account/createAccount.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/account/createAccount.js"));
module.exports = __webpack_exports__;

})();