"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Custom-Design/curly-header.jsx":
/*!*******************************************************!*\
  !*** ./src/components/Custom-Design/curly-header.jsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"C:\\\\Users\\\\mdbilal\\\\projects\\\\vie\\\\src\\\\components\\\\Custom-Design\\\\curly-header.jsx\",\n    _this = undefined;\n\n/*\r\n\r\nDraws text around a circule (the object).\r\n\r\nText is centered at the top of the circle.\r\n\r\nDepends on styled-components, but can be adapted for other frameworks.\r\n\r\n<CurvedText\r\n  text=\"I'm curved\"\r\n  objectSize={100} // diameter of the circle to wrap the text around\r\n  spacing={12} // padding between the circle and text\r\n  offset={30} // ammount of space for text, make this bigger to stop larger text from being cropped\r\n  overlap={true} // sets the bottom margin to negative so that the text is centered around the object\r\n/>\r\n\r\n*/\n\n\n\nvar CurlyHeader = function CurlyHeader() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"svg\", {\n    viewBox: \"0 40 500 120\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"path\", {\n      id: \"curve\",\n      d: \"M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97\",\n      style: {\n        fill: \"transparent\"\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"text\", {\n      width: \"600\",\n      style: {\n        fontSize: \"22px\",\n        fill: \"#C86EE1\"\n      },\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"textPath\", {\n        xlinkHref: \"#curve\",\n        children: \"International Corporations and Brands\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = CurlyHeader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CurlyHeader);\n\nvar _c;\n\n$RefreshReg$(_c, \"CurlyHeader\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DdXN0b20tRGVzaWduL2N1cmx5LWhlYWRlci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFFQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBRXhCLHNCQUNFO0FBQUssV0FBTyxFQUFDLGNBQWI7QUFBQSw0QkFDQTtBQUFNLFFBQUUsRUFBQyxPQUFUO0FBQWlCLE9BQUMsRUFBQyxzRUFBbkI7QUFBMEYsV0FBSyxFQUFFO0FBQUNDLFFBQUFBLElBQUksRUFBQztBQUFOO0FBQWpHO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEQSxlQUVBO0FBQU0sV0FBSyxFQUFDLEtBQVo7QUFBa0IsV0FBSyxFQUFFO0FBQUNDLFFBQUFBLFFBQVEsRUFBQyxNQUFWO0FBQWlCRCxRQUFBQSxJQUFJLEVBQUM7QUFBdEIsT0FBekI7QUFBQSw2QkFDRTtBQUFVLGlCQUFTLEVBQUMsUUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFVRCxDQVpEOztLQUFNRDtBQWNOLCtEQUFlQSxXQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0N1c3RvbS1EZXNpZ24vY3VybHktaGVhZGVyLmpzeD9mZGZjIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXHJcblxyXG5EcmF3cyB0ZXh0IGFyb3VuZCBhIGNpcmN1bGUgKHRoZSBvYmplY3QpLlxyXG5cclxuVGV4dCBpcyBjZW50ZXJlZCBhdCB0aGUgdG9wIG9mIHRoZSBjaXJjbGUuXHJcblxyXG5EZXBlbmRzIG9uIHN0eWxlZC1jb21wb25lbnRzLCBidXQgY2FuIGJlIGFkYXB0ZWQgZm9yIG90aGVyIGZyYW1ld29ya3MuXHJcblxyXG48Q3VydmVkVGV4dFxyXG4gIHRleHQ9XCJJJ20gY3VydmVkXCJcclxuICBvYmplY3RTaXplPXsxMDB9IC8vIGRpYW1ldGVyIG9mIHRoZSBjaXJjbGUgdG8gd3JhcCB0aGUgdGV4dCBhcm91bmRcclxuICBzcGFjaW5nPXsxMn0gLy8gcGFkZGluZyBiZXR3ZWVuIHRoZSBjaXJjbGUgYW5kIHRleHRcclxuICBvZmZzZXQ9ezMwfSAvLyBhbW1vdW50IG9mIHNwYWNlIGZvciB0ZXh0LCBtYWtlIHRoaXMgYmlnZ2VyIHRvIHN0b3AgbGFyZ2VyIHRleHQgZnJvbSBiZWluZyBjcm9wcGVkXHJcbiAgb3ZlcmxhcD17dHJ1ZX0gLy8gc2V0cyB0aGUgYm90dG9tIG1hcmdpbiB0byBuZWdhdGl2ZSBzbyB0aGF0IHRoZSB0ZXh0IGlzIGNlbnRlcmVkIGFyb3VuZCB0aGUgb2JqZWN0XHJcbi8+XHJcblxyXG4qL1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgQ3VybHlIZWFkZXIgPSAoKSA9PiB7XHJcbiBcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyB2aWV3Qm94PVwiMCA0MCA1MDAgMTIwXCI+XHJcbiAgICA8cGF0aCBpZD1cImN1cnZlXCIgZD1cIk03My4yLDE0OC42YzQtNi4xLDY1LjUtOTYuOCwxNzguNi05NS42YzExMS4zLDEuMiwxNzAuOCw5MC4zLDE3NS4xLDk3XCIgc3R5bGU9e3tmaWxsOlwidHJhbnNwYXJlbnRcIn19IC8+XHJcbiAgICA8dGV4dCB3aWR0aD1cIjYwMFwiIHN0eWxlPXt7Zm9udFNpemU6XCIyMnB4XCIsZmlsbDpcIiNDODZFRTFcIn19PlxyXG4gICAgICA8dGV4dFBhdGggeGxpbmtIcmVmPVwiI2N1cnZlXCI+XHJcbiAgICAgIEludGVybmF0aW9uYWwgQ29ycG9yYXRpb25zIGFuZCBCcmFuZHNcclxuICAgICAgPC90ZXh0UGF0aD5cclxuICAgIDwvdGV4dD5cclxuICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEN1cmx5SGVhZGVyIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ3VybHlIZWFkZXIiLCJmaWxsIiwiZm9udFNpemUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Custom-Design/curly-header.jsx\n");

/***/ })

});