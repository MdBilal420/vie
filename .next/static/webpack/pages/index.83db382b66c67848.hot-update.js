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

/***/ "./src/components/Custom-Design/custom-button.jsx":
/*!********************************************************!*\
  !*** ./src/components/Custom-Design/custom-button.jsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_mdbilal_projects_vie_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Intro6_intro6__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Intro6/intro6 */ \"./src/components/Intro6/intro6.jsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\mdbilal\\\\projects\\\\vie\\\\src\\\\components\\\\Custom-Design\\\\custom-button.jsx\",\n    _this = undefined,\n    _templateObject;\n\n\n\n\n\nvar CustomButton = function CustomButton(_ref) {\n  var onClick = _ref.onClick;\n  var Button = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].button(_templateObject || (_templateObject = (0,C_Users_mdbilal_projects_vie_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n        border-radius:50%;\\n        width:100px;\\n        height:100px;\\n        font-family: 'Avenir Next';\\n        font-size: 1rem;\\n        color: $color-black;\\n        box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5);\\n        border: solid 3px transparent;\\n        background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(to right, #12c2e9, #c471ed, #f64f59);\\n        background-origin: border-box;\\n        background-clip: content-box, border-box;\\n        box-shadow: 2px 1000px 1px #fff inset;\\n      \\n      &:hover {\\n        box-shadow: none;\\n        color: white;\\n        cursor:pointer\\n      }\\n    \"])));\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Button, {\n    className: \"button\",\n    onClick: onClick,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n      style: {\n        fontSize: \"20px\",\n        fontFamily: \"cursive\"\n      },\n      children: \"Start\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 9\n  }, _this);\n};\n\n_c = CustomButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomButton);\n\nvar _c;\n\n$RefreshReg$(_c, \"CustomButton\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DdXN0b20tRGVzaWduL2N1c3RvbS1idXR0b24uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFHQSxJQUFNRSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFlO0FBQUEsTUFBYkMsT0FBYSxRQUFiQSxPQUFhO0FBRWhDLE1BQU1DLE1BQU0sR0FBR0osZ0VBQUgseTBCQUFaO0FBcUJBLHNCQUNJLDhEQUFDLE1BQUQ7QUFBUSxhQUFTLEVBQUMsUUFBbEI7QUFBMkIsV0FBTyxFQUFFRyxPQUFwQztBQUFBLDJCQUNJO0FBQU0sV0FBSyxFQUFFO0FBQUNHLFFBQUFBLFFBQVEsRUFBQyxNQUFWO0FBQWlCQyxRQUFBQSxVQUFVLEVBQUM7QUFBNUIsT0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQUtILENBNUJEOztLQUFNTDtBQThCTiwrREFBZUEsWUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DdXN0b20tRGVzaWduL2N1c3RvbS1idXR0b24uanN4PzIyMTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgSW50cm82IGZyb20gXCIuLi9JbnRybzYvaW50cm82XCJcclxuXHJcblxyXG5jb25zdCBDdXN0b21CdXR0b24gPSAoe29uQ2xpY2t9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICAgICAgICBib3JkZXItcmFkaXVzOjUwJTtcclxuICAgICAgICB3aWR0aDoxMDBweDtcclxuICAgICAgICBoZWlnaHQ6MTAwcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdBdmVuaXIgTmV4dCc7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3ItYmxhY2s7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDZweCAwIHJnYmEoMTU3LCA5NiwgMjEyLCAwLjUpO1xyXG4gICAgICAgIGJvcmRlcjogc29saWQgM3B4IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApKSwgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMTJjMmU5LCAjYzQ3MWVkLCAjZjY0ZjU5KTtcclxuICAgICAgICBiYWNrZ3JvdW5kLW9yaWdpbjogYm9yZGVyLWJveDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IGNvbnRlbnQtYm94LCBib3JkZXItYm94O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDJweCAxMDAwcHggMXB4ICNmZmYgaW5zZXQ7XHJcbiAgICAgIFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBjdXJzb3I6cG9pbnRlclxyXG4gICAgICB9XHJcbiAgICBgO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b25cIiBvbkNsaWNrPXtvbkNsaWNrfT5cclxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tmb250U2l6ZTpcIjIwcHhcIixmb250RmFtaWx5OlwiY3Vyc2l2ZVwifX0+U3RhcnQ8L3NwYW4+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEN1c3RvbUJ1dHRvbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJJbnRybzYiLCJDdXN0b21CdXR0b24iLCJvbkNsaWNrIiwiQnV0dG9uIiwiYnV0dG9uIiwiZm9udFNpemUiLCJmb250RmFtaWx5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Custom-Design/custom-button.jsx\n");

/***/ })

});