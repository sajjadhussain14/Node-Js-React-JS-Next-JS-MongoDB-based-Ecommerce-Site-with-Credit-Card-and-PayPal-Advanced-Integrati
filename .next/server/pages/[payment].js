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
exports.id = "pages/[payment]";
exports.ids = ["pages/[payment]"];
exports.modules = {

/***/ "./src/controllers/order.js":
/*!**********************************!*\
  !*** ./src/controllers/order.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initOrderDetails\": () => (/* binding */ initOrderDetails),\n/* harmony export */   \"setOrderDetails\": () => (/* binding */ setOrderDetails),\n/* harmony export */   \"getOrderDetails\": () => (/* binding */ getOrderDetails)\n/* harmony export */ });\nconst initOrderDetails = ()=>{\n    let orderDetails = {\n        items: [],\n        user: [],\n        payment: {\n            id: \"\",\n            paymentMethod: \"\",\n            currency: \"\",\n            payer_id: \"\",\n            status: \"\"\n        },\n        order: {\n            shipping: {\n                name: \"\",\n                amount: \"\"\n            },\n            total: 0,\n            tax: 0,\n            subTotal: 0\n        }\n    };\n    return orderDetails;\n};\nconst setOrderDetails = (name, data)=>{\n    if (false) {}\n};\nconst getOrderDetails = (name)=>{\n    let data = {};\n    if (false) {}\n    if (!data) {\n        data = {};\n    }\n    return data;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udHJvbGxlcnMvb3JkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQU8sTUFBTUEsZ0JBQWdCLEdBQUcsSUFBTTtJQUNwQyxJQUFJQyxZQUFZLEdBQUc7UUFDakJDLEtBQUssRUFBRSxFQUFFO1FBQ1RDLElBQUksRUFBRSxFQUFFO1FBQ1JDLE9BQU8sRUFBRTtZQUNQQyxFQUFFLEVBQUUsRUFBRTtZQUNOQyxhQUFhLEVBQUUsRUFBRTtZQUNqQkMsUUFBUSxFQUFFLEVBQUU7WUFDWkMsUUFBUSxFQUFFLEVBQUU7WUFDWkMsTUFBTSxFQUFFLEVBQUU7U0FDWDtRQUNEQyxLQUFLLEVBQUU7WUFDTEMsUUFBUSxFQUFFO2dCQUFFQyxJQUFJLEVBQUUsRUFBRTtnQkFBRUMsTUFBTSxFQUFFLEVBQUU7YUFBRTtZQUNsQ0MsS0FBSyxFQUFFLENBQUM7WUFDUkMsR0FBRyxFQUFFLENBQUM7WUFDTkMsUUFBUSxFQUFFLENBQUM7U0FDWjtLQUNGO0lBQ0QsT0FBT2YsWUFBWSxDQUFDO0NBQ3JCLENBQUM7QUFFSyxNQUFNZ0IsZUFBZSxHQUFHLENBQUNMLElBQUksRUFBRU0sSUFBSSxHQUFLO0lBQzdDLElBQUksS0FBNEIsRUFBRSxFQUVqQztDQUNGLENBQUM7QUFFSyxNQUFNSyxlQUFlLEdBQUcsQ0FBQ1gsSUFBSSxHQUFLO0lBQ3ZDLElBQUlNLElBQUksR0FBRyxFQUFFO0lBQ2IsSUFBSSxLQUE0QixFQUFFLEVBTWpDO0lBQ0QsSUFBSSxDQUFDQSxJQUFJLEVBQUU7UUFDVEEsSUFBSSxHQUFHLEVBQUUsQ0FBQztLQUNYO0lBQ0QsT0FBT0EsSUFBSSxDQUFDO0NBQ2IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21vZGVybi8uL3NyYy9jb250cm9sbGVycy9vcmRlci5qcz9hMmIzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBpbml0T3JkZXJEZXRhaWxzID0gKCkgPT4ge1xyXG4gIGxldCBvcmRlckRldGFpbHMgPSB7XHJcbiAgICBpdGVtczogW10sXHJcbiAgICB1c2VyOiBbXSxcclxuICAgIHBheW1lbnQ6IHtcclxuICAgICAgaWQ6IFwiXCIsXHJcbiAgICAgIHBheW1lbnRNZXRob2Q6IFwiXCIsXHJcbiAgICAgIGN1cnJlbmN5OiBcIlwiLFxyXG4gICAgICBwYXllcl9pZDogXCJcIixcclxuICAgICAgc3RhdHVzOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIG9yZGVyOiB7XHJcbiAgICAgIHNoaXBwaW5nOiB7IG5hbWU6IFwiXCIsIGFtb3VudDogXCJcIiB9LFxyXG4gICAgICB0b3RhbDogMCxcclxuICAgICAgdGF4OiAwLFxyXG4gICAgICBzdWJUb3RhbDogMCxcclxuICAgIH0sXHJcbiAgfTtcclxuICByZXR1cm4gb3JkZXJEZXRhaWxzO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldE9yZGVyRGV0YWlscyA9IChuYW1lLCBkYXRhKSA9PiB7XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obmFtZSwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRPcmRlckRldGFpbHMgPSAobmFtZSkgPT4ge1xyXG4gIGxldCBkYXRhID0ge307XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obmFtZSkpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmICghZGF0YSkge1xyXG4gICAgZGF0YSA9IHt9O1xyXG4gIH1cclxuICByZXR1cm4gZGF0YTtcclxufTtcclxuIl0sIm5hbWVzIjpbImluaXRPcmRlckRldGFpbHMiLCJvcmRlckRldGFpbHMiLCJpdGVtcyIsInVzZXIiLCJwYXltZW50IiwiaWQiLCJwYXltZW50TWV0aG9kIiwiY3VycmVuY3kiLCJwYXllcl9pZCIsInN0YXR1cyIsIm9yZGVyIiwic2hpcHBpbmciLCJuYW1lIiwiYW1vdW50IiwidG90YWwiLCJ0YXgiLCJzdWJUb3RhbCIsInNldE9yZGVyRGV0YWlscyIsImRhdGEiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImdldE9yZGVyRGV0YWlscyIsInBhcnNlIiwiZ2V0SXRlbSIsImVyciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/controllers/order.js\n");

/***/ }),

/***/ "./src/pages/[payment].js":
/*!********************************!*\
  !*** ./src/pages/[payment].js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _controllers_order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../controllers/order */ \"./src/controllers/order.js\");\n\n\n\n\n\n\nconst captureOrder = (props)=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { 0: paymentData , 1: setPaymentData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const { token  } = router.query;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(async ()=>{\n        const response = await fetch(\"http://localhost:3000\" + \"/api/payment/capture-order\", {\n            method: \"POST\",\n            body: JSON.stringify(token)\n        });\n        const data = await response.json();\n        setPaymentData(data);\n        setLoading(false);\n    }, [\n        token\n    ]);\n    let orderDetails = {};\n    orderDetails = (0,_controllers_order__WEBPACK_IMPORTED_MODULE_4__.getOrderDetails)(\"orderDetails\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (loading == false) {\n            if (paymentData.code == 200) {\n                try {\n                    orderDetails.payment.id = paymentData.data.id;\n                    orderDetails.payment.payer_id = paymentData.data.payer_id;\n                    orderDetails.payment.status = paymentData.data.status;\n                } catch (err) {}\n                (0,_controllers_order__WEBPACK_IMPORTED_MODULE_4__.setOrderDetails)(\"orderDetails\", orderDetails);\n                if (false) {}\n            } else {\n                if (false) {}\n            }\n        }\n    }, [\n        loading\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"ssss\"\n    }, void 0, false, {\n        fileName: \"D:\\\\modern\\\\src\\\\pages\\\\[payment].js\",\n        lineNumber: 53,\n        columnNumber: 10\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (captureOrder);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvW3BheW1lbnRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUE0RDtBQUNwQjtBQUNkO0FBRU87QUFDdUM7QUFFeEUsTUFBTVMsWUFBWSxHQUFHLENBQUNDLEtBQUssR0FBSztJQUM5QixNQUFNQyxNQUFNLEdBQUdQLHNEQUFTLEVBQUU7SUFDMUIsTUFBTSxFQVRSLEdBU1NRLFdBQVcsR0FUcEIsR0FTc0JDLGNBQWMsTUFBSVgsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFDbEQsTUFBTSxFQVZSLEdBVVNZLE9BQU8sR0FWaEIsR0FVa0JDLFVBQVUsTUFBSWIsK0NBQVEsQ0FBQyxJQUFJLENBQUM7SUFFNUMsTUFBTSxFQUFFYyxLQUFLLEdBQUUsR0FBR0wsTUFBTSxDQUFDTSxLQUFLO0lBRTlCaEIsZ0RBQVMsQ0FBQyxVQUFZO1FBQ3BCLE1BQU1pQixRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUMxQkMsdUJBQWUsR0FBRyw0QkFBNEIsRUFDOUM7WUFDRUcsTUFBTSxFQUFFLE1BQU07WUFDZEMsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ1YsS0FBSyxDQUFDO1NBQzVCLENBQ0Y7UUFDRCxNQUFNVyxJQUFJLEdBQUcsTUFBTVQsUUFBUSxDQUFDVSxJQUFJLEVBQUU7UUFDbENmLGNBQWMsQ0FBQ2MsSUFBSSxDQUFDLENBQUM7UUFDckJaLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNuQixFQUFFO1FBQUNDLEtBQUs7S0FBQyxDQUFDLENBQUM7SUFDWixJQUFJYSxZQUFZLEdBQUcsRUFBRTtJQUNyQkEsWUFBWSxHQUFHdEIsbUVBQWUsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUUvQ04sZ0RBQVMsQ0FBQyxJQUFNO1FBQ2QsSUFBSWEsT0FBTyxJQUFJLEtBQUssRUFBRTtZQUNwQixJQUFJRixXQUFXLENBQUNrQixJQUFJLElBQUksR0FBRyxFQUFFO2dCQUMzQixJQUFJO29CQUNGRCxZQUFZLENBQUNFLE9BQU8sQ0FBQ0MsRUFBRSxHQUFHcEIsV0FBVyxDQUFDZSxJQUFJLENBQUNLLEVBQUUsQ0FBQztvQkFDOUNILFlBQVksQ0FBQ0UsT0FBTyxDQUFDRSxRQUFRLEdBQUdyQixXQUFXLENBQUNlLElBQUksQ0FBQ00sUUFBUSxDQUFDO29CQUMxREosWUFBWSxDQUFDRSxPQUFPLENBQUNHLE1BQU0sR0FBR3RCLFdBQVcsQ0FBQ2UsSUFBSSxDQUFDTyxNQUFNLENBQUM7aUJBQ3ZELENBQUMsT0FBT0MsR0FBRyxFQUFFLEVBQUU7Z0JBRWhCM0IsbUVBQWUsQ0FBQyxjQUFjLEVBQUVxQixZQUFZLENBQUMsQ0FBQztnQkFFOUMsSUFBSSxLQUE0QixFQUFFLEVBRWpDO2FBQ0YsTUFBTTtnQkFDTCxJQUFJLEtBQTRCLEVBQUUsRUFJakM7YUFDRjtTQUNGO0tBQ0YsRUFBRTtRQUFDZixPQUFPO0tBQUMsQ0FBQyxDQUFDO0lBQ2QscUJBQU8sOERBQUN1QixLQUFHO2tCQUFDLE1BQUk7Ozs7O2lCQUFNLENBQUM7Q0FDeEI7QUFFRCxpRUFBZTVCLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21vZGVybi8uL3NyYy9wYWdlcy9bcGF5bWVudF0uanM/YmQ5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgZ2V0T3JkZXJEZXRhaWxzLCBzZXRPcmRlckRldGFpbHMgfSBmcm9tIFwiLi4vY29udHJvbGxlcnMvb3JkZXJcIjtcclxuXHJcbmNvbnN0IGNhcHR1cmVPcmRlciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtwYXltZW50RGF0YSwgc2V0UGF5bWVudERhdGFdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBjb25zdCB7IHRva2VuIH0gPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBwcm9jZXNzLmVudi5VUkwgKyBcIi9hcGkvcGF5bWVudC9jYXB0dXJlLW9yZGVyXCIsXHJcbiAgICAgIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHRva2VuKSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBzZXRQYXltZW50RGF0YShkYXRhKTtcclxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gIH0sIFt0b2tlbl0pO1xyXG4gIGxldCBvcmRlckRldGFpbHMgPSB7fTtcclxuICBvcmRlckRldGFpbHMgPSBnZXRPcmRlckRldGFpbHMoXCJvcmRlckRldGFpbHNcIik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobG9hZGluZyA9PSBmYWxzZSkge1xyXG4gICAgICBpZiAocGF5bWVudERhdGEuY29kZSA9PSAyMDApIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgb3JkZXJEZXRhaWxzLnBheW1lbnQuaWQgPSBwYXltZW50RGF0YS5kYXRhLmlkO1xyXG4gICAgICAgICAgb3JkZXJEZXRhaWxzLnBheW1lbnQucGF5ZXJfaWQgPSBwYXltZW50RGF0YS5kYXRhLnBheWVyX2lkO1xyXG4gICAgICAgICAgb3JkZXJEZXRhaWxzLnBheW1lbnQuc3RhdHVzID0gcGF5bWVudERhdGEuZGF0YS5zdGF0dXM7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7fVxyXG5cclxuICAgICAgICBzZXRPcmRlckRldGFpbHMoXCJvcmRlckRldGFpbHNcIiwgb3JkZXJEZXRhaWxzKTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgUm91dGVyLnB1c2gocHJvY2Vzcy5lbnYuVVJMICsgXCIvdGhhbmsteW91XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaChwcm9jZXNzLmVudi5VUkwgKyBcIi9lcnJvclwiKTtcclxuXHJcbiAgICAgICAgICByZXR1cm4gPGRpdj57cGF5bWVudERhdGEubWVzc2FnZX08L2Rpdj47XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW2xvYWRpbmddKTtcclxuICByZXR1cm4gPGRpdj5zc3NzPC9kaXY+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2FwdHVyZU9yZGVyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZU1lbW8iLCJ1c2VSb3V0ZXIiLCJheGlvcyIsIlJvdXRlciIsImdldE9yZGVyRGV0YWlscyIsInNldE9yZGVyRGV0YWlscyIsImNhcHR1cmVPcmRlciIsInByb3BzIiwicm91dGVyIiwicGF5bWVudERhdGEiLCJzZXRQYXltZW50RGF0YSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidG9rZW4iLCJxdWVyeSIsInJlc3BvbnNlIiwiZmV0Y2giLCJwcm9jZXNzIiwiZW52IiwiVVJMIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwianNvbiIsIm9yZGVyRGV0YWlscyIsImNvZGUiLCJwYXltZW50IiwiaWQiLCJwYXllcl9pZCIsInN0YXR1cyIsImVyciIsInB1c2giLCJkaXYiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/[payment].js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/[payment].js"));
module.exports = __webpack_exports__;

})();