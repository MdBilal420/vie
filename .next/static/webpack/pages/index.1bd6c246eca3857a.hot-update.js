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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_mdbilal_projects_vie_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\mdbilal\\\\projects\\\\vie\\\\src\\\\components\\\\Custom-Design\\\\custom-button.jsx\",\n    _templateObject,\n    _this = undefined;\n\n\n\nvar Button = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].button(_templateObject || (_templateObject = (0,C_Users_mdbilal_projects_vie_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n        border-radius:50%;\\n        width:100px;\\n        height:100px;\\n        font-family: 'Avenir Next';\\n        font-size: 1rem;\\n        color: $color-black;\\n        box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5);\\n        border: solid 5px transparent;\\n        background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(to right, #12c2e9, #c471ed, #f64f59);\\n        background-origin: border-box;\\n        background-clip: content-box, border-box;\\n        box-shadow: 2px 1000px 1px #fff inset;\\n      \\n      &:hover {\\n        box-shadow: none;\\n        color: white;\\n        cursor:pointer;\\n        border: solid 5px white;\\n      }\\n    \"])));\n_c = Button;\n\nvar CustomButton = function CustomButton(_ref) {\n  var onClick = _ref.onClick,\n      title = _ref.title;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Button, {\n    onClick: onClick,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n      style: {\n        fontSize: \"20px\",\n        fontFamily: \"cursive\"\n      },\n      children: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 9\n  }, _this);\n};\n\n_c2 = CustomButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomButton);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Button\");\n$RefreshReg$(_c2, \"CustomButton\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DdXN0b20tRGVzaWduL2N1c3RvbS1idXR0b24uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBLElBQU1DLE1BQU0sR0FBR0QsZ0VBQUgsNDJCQUFaO0tBQU1DOztBQXVCTixJQUFNRSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFxQjtBQUFBLE1BQW5CQyxPQUFtQixRQUFuQkEsT0FBbUI7QUFBQSxNQUFYQyxLQUFXLFFBQVhBLEtBQVc7QUFFdEMsc0JBQ0ksOERBQUMsTUFBRDtBQUFRLFdBQU8sRUFBRUQsT0FBakI7QUFBQSwyQkFDSTtBQUFNLFdBQUssRUFBRTtBQUFDRSxRQUFBQSxRQUFRLEVBQUMsTUFBVjtBQUFpQkMsUUFBQUEsVUFBVSxFQUFDO0FBQTVCLE9BQWI7QUFBQSxnQkFBc0RGO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFLSCxDQVBEOztNQUFNRjtBQVNOLCtEQUFlQSxZQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0N1c3RvbS1EZXNpZ24vY3VzdG9tLWJ1dHRvbi5qc3g/MjIxMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czo1MCU7XHJcbiAgICAgICAgd2lkdGg6MTAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OjEwMHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQXZlbmlyIE5leHQnO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICBjb2xvcjogJGNvbG9yLWJsYWNrO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCA2cHggMCByZ2JhKDE1NywgOTYsIDIxMiwgMC41KTtcclxuICAgICAgICBib3JkZXI6IHNvbGlkIDVweCB0cmFuc3BhcmVudDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSksIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzEyYzJlOSwgI2M0NzFlZCwgI2Y2NGY1OSk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1vcmlnaW46IGJvcmRlci1ib3g7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jbGlwOiBjb250ZW50LWJveCwgYm9yZGVyLWJveDtcclxuICAgICAgICBib3gtc2hhZG93OiAycHggMTAwMHB4IDFweCAjZmZmIGluc2V0O1xyXG4gICAgICBcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICAgICAgYm9yZGVyOiBzb2xpZCA1cHggd2hpdGU7XHJcbiAgICAgIH1cclxuICAgIGA7XHJcblxyXG5cclxuY29uc3QgQ3VzdG9tQnV0dG9uID0gKHtvbkNsaWNrLHRpdGxlfSkgPT4ge1xyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17b25DbGlja30+XHJcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Zm9udFNpemU6XCIyMHB4XCIsZm9udEZhbWlseTpcImN1cnNpdmVcIn19Pnt0aXRsZX08L3NwYW4+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEN1c3RvbUJ1dHRvbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJCdXR0b24iLCJidXR0b24iLCJDdXN0b21CdXR0b24iLCJvbkNsaWNrIiwidGl0bGUiLCJmb250U2l6ZSIsImZvbnRGYW1pbHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Custom-Design/custom-button.jsx\n");

/***/ })

});