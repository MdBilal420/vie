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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_mdbilal_projects_vie_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\mdbilal\\\\projects\\\\vie\\\\src\\\\components\\\\Custom-Design\\\\curly-header.jsx\",\n    _this = undefined,\n    _templateObject;\n\n/*\r\n\r\nDraws text around a circule (the object).\r\n\r\nText is centered at the top of the circle.\r\n\r\nDepends on styled-components, but can be adapted for other frameworks.\r\n\r\n<CurvedText\r\n  text=\"I'm curved\"\r\n  objectSize={100} // diameter of the circle to wrap the text around\r\n  spacing={12} // padding between the circle and text\r\n  offset={30} // ammount of space for text, make this bigger to stop larger text from being cropped\r\n  overlap={true} // sets the bottom margin to negative so that the text is centered around the object\r\n/>\r\n\r\n*/\n\n\n\n\nvar CurlyHeader = function CurlyHeader(_ref) {\n  var _ref$text = _ref.text,\n      text = _ref$text === void 0 ? \"hello\" : _ref$text,\n      _ref$objectSize = _ref.objectSize,\n      objectSize = _ref$objectSize === void 0 ? 120 : _ref$objectSize,\n      _ref$spacing = _ref.spacing,\n      spacing = _ref$spacing === void 0 ? 12 : _ref$spacing,\n      _ref$offset = _ref.offset,\n      offset = _ref$offset === void 0 ? 30 : _ref$offset,\n      _ref$overlap = _ref.overlap,\n      overlap = _ref$overlap === void 0 ? false : _ref$overlap;\n  var d = objectSize + spacing * 2;\n  var r = objectSize / 2 + spacing / 2;\n  var CurvedText = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject || (_templateObject = (0,C_Users_mdbilal_projects_vie_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    margin-bottom: \", \";\\n    width: \", \"px;\\n    height: \", \"px;\\n\\n    path {\\n      fill: transparent;\\n    }\\n\\n    text {\\n      fill: currentColor;\\n      text-anchor: middle;\\n    }\\n  \"])), overlap ? \"-\".concat(r, \"px\") : '0', d + offset * 2, r + offset);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(CurvedText, {\n    className: \"curved-text\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"svg\", {\n      viewBox: \"0 0 \".concat(d + offset * 2, \" \").concat(r + offset * 2),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"path\", {\n        id: \"curve\",\n        d: \"M\".concat(offset, \",\").concat(r + offset, \" A\").concat(r, \",\").concat(r, \" 0 0,1 \").concat(d + offset, \",\").concat(r + offset)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"text\", {\n        width: \"500\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"textPath\", {\n          xlinkHref: \"#curve\",\n          startOffset: \"50%\",\n          className: \"wow color-font\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h4\", {\n            className: \"wow color-font\",\n            children: \"International Corporations and Brands\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 46,\n            columnNumber: 11\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 41,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = CurlyHeader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CurlyHeader);\n\nvar _c;\n\n$RefreshReg$(_c, \"CurlyHeader\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DdXN0b20tRGVzaWduL2N1cmx5LWhlYWRlci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUEsSUFBTUUsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBb0Y7QUFBQSx1QkFBakZDLElBQWlGO0FBQUEsTUFBakZBLElBQWlGLDBCQUE1RSxPQUE0RTtBQUFBLDZCQUFuRUMsVUFBbUU7QUFBQSxNQUFuRUEsVUFBbUUsZ0NBQXRELEdBQXNEO0FBQUEsMEJBQWpEQyxPQUFpRDtBQUFBLE1BQWpEQSxPQUFpRCw2QkFBdkMsRUFBdUM7QUFBQSx5QkFBbkNDLE1BQW1DO0FBQUEsTUFBbkNBLE1BQW1DLDRCQUExQixFQUEwQjtBQUFBLDBCQUF0QkMsT0FBc0I7QUFBQSxNQUF0QkEsT0FBc0IsNkJBQVosS0FBWTtBQUN0RyxNQUFNQyxDQUFDLEdBQUdKLFVBQVUsR0FBR0MsT0FBTyxHQUFHLENBQWpDO0FBQ0EsTUFBTUksQ0FBQyxHQUFHTCxVQUFVLEdBQUcsQ0FBYixHQUFpQkMsT0FBTyxHQUFHLENBQXJDO0FBQ0EsTUFBTUssVUFBVSxHQUFHVCw2REFBSCx1WEFDR00sT0FBTyxjQUFPRSxDQUFQLFVBQWUsR0FEekIsRUFFTEQsQ0FBQyxHQUFHRixNQUFNLEdBQUcsQ0FGUixFQUdKRyxDQUFDLEdBQUdILE1BSEEsQ0FBaEI7QUFlQSxzQkFDRSw4REFBQyxVQUFEO0FBQVksYUFBUyxFQUFDLGFBQXRCO0FBQUEsMkJBQ0U7QUFBSyxhQUFPLGdCQUFTRSxDQUFDLEdBQUdGLE1BQU0sR0FBRyxDQUF0QixjQUEyQkcsQ0FBQyxHQUFHSCxNQUFNLEdBQUcsQ0FBeEMsQ0FBWjtBQUFBLDhCQUNFO0FBQU0sVUFBRSxFQUFDLE9BQVQ7QUFBaUIsU0FBQyxhQUFNQSxNQUFOLGNBQWdCRyxDQUFDLEdBQUdILE1BQXBCLGVBQStCRyxDQUEvQixjQUFvQ0EsQ0FBcEMsb0JBQStDRCxDQUFDLEdBQUdGLE1BQW5ELGNBQTZERyxDQUFDLEdBQUdILE1BQWpFO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQU0sYUFBSyxFQUFDLEtBQVo7QUFBQSwrQkFDRTtBQUFVLG1CQUFTLEVBQUMsUUFBcEI7QUFBNkIscUJBQVcsRUFBQyxLQUF6QztBQUErQyxtQkFBUyxFQUFDLGdCQUF6RDtBQUFBLGlDQUNBO0FBQUkscUJBQVMsRUFBQyxnQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBY0QsQ0FoQ0Q7O0tBQU1KO0FBa0NOLCtEQUFlQSxXQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0N1c3RvbS1EZXNpZ24vY3VybHktaGVhZGVyLmpzeD9mZGZjIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXHJcblxyXG5EcmF3cyB0ZXh0IGFyb3VuZCBhIGNpcmN1bGUgKHRoZSBvYmplY3QpLlxyXG5cclxuVGV4dCBpcyBjZW50ZXJlZCBhdCB0aGUgdG9wIG9mIHRoZSBjaXJjbGUuXHJcblxyXG5EZXBlbmRzIG9uIHN0eWxlZC1jb21wb25lbnRzLCBidXQgY2FuIGJlIGFkYXB0ZWQgZm9yIG90aGVyIGZyYW1ld29ya3MuXHJcblxyXG48Q3VydmVkVGV4dFxyXG4gIHRleHQ9XCJJJ20gY3VydmVkXCJcclxuICBvYmplY3RTaXplPXsxMDB9IC8vIGRpYW1ldGVyIG9mIHRoZSBjaXJjbGUgdG8gd3JhcCB0aGUgdGV4dCBhcm91bmRcclxuICBzcGFjaW5nPXsxMn0gLy8gcGFkZGluZyBiZXR3ZWVuIHRoZSBjaXJjbGUgYW5kIHRleHRcclxuICBvZmZzZXQ9ezMwfSAvLyBhbW1vdW50IG9mIHNwYWNlIGZvciB0ZXh0LCBtYWtlIHRoaXMgYmlnZ2VyIHRvIHN0b3AgbGFyZ2VyIHRleHQgZnJvbSBiZWluZyBjcm9wcGVkXHJcbiAgb3ZlcmxhcD17dHJ1ZX0gLy8gc2V0cyB0aGUgYm90dG9tIG1hcmdpbiB0byBuZWdhdGl2ZSBzbyB0aGF0IHRoZSB0ZXh0IGlzIGNlbnRlcmVkIGFyb3VuZCB0aGUgb2JqZWN0XHJcbi8+XHJcblxyXG4qL1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuY29uc3QgQ3VybHlIZWFkZXIgPSAoeyB0ZXh0PVwiaGVsbG9cIiwgb2JqZWN0U2l6ZSA9IDEyMCwgc3BhY2luZyA9IDEyLCBvZmZzZXQgPSAzMCwgb3ZlcmxhcCA9IGZhbHNlIH0pID0+IHtcclxuICBjb25zdCBkID0gb2JqZWN0U2l6ZSArIHNwYWNpbmcgKiAyXHJcbiAgY29uc3QgciA9IG9iamVjdFNpemUgLyAyICsgc3BhY2luZyAvIDJcclxuICBjb25zdCBDdXJ2ZWRUZXh0ID0gc3R5bGVkLmRpdmBcclxuICAgIG1hcmdpbi1ib3R0b206ICR7b3ZlcmxhcCA/IGAtJHtyfXB4YCA6ICcwJ307XHJcbiAgICB3aWR0aDogJHtkICsgb2Zmc2V0ICogMn1weDtcclxuICAgIGhlaWdodDogJHtyICsgb2Zmc2V0fXB4O1xyXG5cclxuICAgIHBhdGgge1xyXG4gICAgICBmaWxsOiB0cmFuc3BhcmVudDtcclxuICAgIH1cclxuXHJcbiAgICB0ZXh0IHtcclxuICAgICAgZmlsbDogY3VycmVudENvbG9yO1xyXG4gICAgICB0ZXh0LWFuY2hvcjogbWlkZGxlO1xyXG4gICAgfVxyXG4gIGBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDdXJ2ZWRUZXh0IGNsYXNzTmFtZT1cImN1cnZlZC10ZXh0XCI+XHJcbiAgICAgIDxzdmcgdmlld0JveD17YDAgMCAke2QgKyBvZmZzZXQgKiAyfSAke3IgKyBvZmZzZXQgKiAyfWB9PlxyXG4gICAgICAgIDxwYXRoIGlkPVwiY3VydmVcIiBkPXtgTSR7b2Zmc2V0fSwke3IgKyBvZmZzZXR9IEEke3J9LCR7cn0gMCAwLDEgJHtkICsgb2Zmc2V0fSwke3IgKyBvZmZzZXR9YH0gLz5cclxuICAgICAgICA8dGV4dCB3aWR0aD1cIjUwMFwiPlxyXG4gICAgICAgICAgPHRleHRQYXRoIHhsaW5rSHJlZj1cIiNjdXJ2ZVwiIHN0YXJ0T2Zmc2V0PVwiNTAlXCIgY2xhc3NOYW1lPVwid293IGNvbG9yLWZvbnRcIj5cclxuICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ3b3cgY29sb3ItZm9udFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50ZXJuYXRpb25hbCBDb3Jwb3JhdGlvbnMgYW5kIEJyYW5kc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgPC90ZXh0UGF0aD5cclxuICAgICAgICA8L3RleHQ+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgPC9DdXJ2ZWRUZXh0PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3VybHlIZWFkZXIiXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJDdXJseUhlYWRlciIsInRleHQiLCJvYmplY3RTaXplIiwic3BhY2luZyIsIm9mZnNldCIsIm92ZXJsYXAiLCJkIiwiciIsIkN1cnZlZFRleHQiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Custom-Design/curly-header.jsx\n");

/***/ })

});