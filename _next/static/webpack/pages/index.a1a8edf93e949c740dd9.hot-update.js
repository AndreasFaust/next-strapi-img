webpackHotUpdate_N_E("pages/index",{

/***/ "./src/Image.tsx":
/*!***********************!*\
  !*** ./src/Image.tsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_andreasfaust_components_react_strapi_img_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _getSrcSet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getSrcSet */ \"./src/getSrcSet.ts\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\n\nvar _jsxFileName = \"/Users/andreasfaust/components/react-strapi-img/src/Image.tsx\",\n    _this = undefined;\n\nfunction _templateObject() {\n  var data = Object(_Users_andreasfaust_components_react_strapi_img_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  object-fit: \", \";\\n  object-position: \", \";\\n  position: \\\"absolute\\\";\\n  top: 0;\\n  bottom: 0;\\n  left: 0;\\n  right: 0;\\n  width: \\\"100%\\\";\\n  height: \\\"100%\\\";\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar StyledImage = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject(), function (props) {\n  return props.objectFit;\n}, function (props) {\n  return props.objectPosition;\n});\n\nvar Image = function Image(_ref) {\n  var url = _ref.url,\n      formats = _ref.formats,\n      _ref$objectFit = _ref.objectFit,\n      objectFit = _ref$objectFit === void 0 ? \"cover\" : _ref$objectFit,\n      _ref$objectPosition = _ref.objectPosition,\n      objectPosition = _ref$objectPosition === void 0 ? \"center\" : _ref$objectPosition,\n      _ref$alt = _ref.alt,\n      alt = _ref$alt === void 0 ? \"Alt-Text\" : _ref$alt,\n      _ref$prefix = _ref.prefix,\n      prefix = _ref$prefix === void 0 ? \"\" : _ref$prefix,\n      onLoad = _ref.onLoad;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"picture\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"source\", {\n      srcSet: Object(_getSrcSet__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n        formats: formats,\n        prefix: prefix,\n        webp: true\n      }),\n      type: \"image/webp\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"source\", {\n      srcSet: Object(_getSrcSet__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n        formats: formats,\n        prefix: prefix\n      }),\n      type: \"image/jpeg\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"img\", {\n      src: prefix + url,\n      alt: alt,\n      onLoad: onLoad,\n      style: {\n        objectFit: objectFit,\n        objectPosition: objectPosition,\n        position: \"absolute\",\n        top: 0,\n        bottom: 0,\n        left: 0,\n        right: 0,\n        width: \"100%\",\n        height: \"100%\"\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 50,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Image;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Image);\n\nvar _c;\n\n$RefreshReg$(_c, \"Image\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0ltYWdlLnRzeD9mNDJhIl0sIm5hbWVzIjpbIlN0eWxlZEltYWdlIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJvYmplY3RGaXQiLCJvYmplY3RQb3NpdGlvbiIsIkltYWdlIiwidXJsIiwiZm9ybWF0cyIsImFsdCIsInByZWZpeCIsIm9uTG9hZCIsImdldFNyY1NldCIsIndlYnAiLCJwb3NpdGlvbiIsInRvcCIsImJvdHRvbSIsImxlZnQiLCJyaWdodCIsIndpZHRoIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUF3QkEsSUFBTUEsV0FBVyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLG9CQUNELFVBQUNDLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLFNBQWpCO0FBQUEsQ0FEQyxFQUVJLFVBQUNELEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNFLGNBQWpCO0FBQUEsQ0FGSixDQUFqQjs7QUFZQSxJQUFNQyxLQUFzQixHQUFHLFNBQXpCQSxLQUF5QixPQVF6QjtBQUFBLE1BUEpDLEdBT0ksUUFQSkEsR0FPSTtBQUFBLE1BTkpDLE9BTUksUUFOSkEsT0FNSTtBQUFBLDRCQUxKSixTQUtJO0FBQUEsTUFMSkEsU0FLSSwrQkFMUSxPQUtSO0FBQUEsaUNBSkpDLGNBSUk7QUFBQSxNQUpKQSxjQUlJLG9DQUphLFFBSWI7QUFBQSxzQkFISkksR0FHSTtBQUFBLE1BSEpBLEdBR0kseUJBSEUsVUFHRjtBQUFBLHlCQUZKQyxNQUVJO0FBQUEsTUFGSkEsTUFFSSw0QkFGSyxFQUVMO0FBQUEsTUFESkMsTUFDSSxRQURKQSxNQUNJO0FBQ0osc0JBQ0U7QUFBQSw0QkFDRTtBQUNFLFlBQU0sRUFBRUMsMERBQVMsQ0FBQztBQUFFSixlQUFPLEVBQVBBLE9BQUY7QUFBV0UsY0FBTSxFQUFOQSxNQUFYO0FBQW1CRyxZQUFJLEVBQUU7QUFBekIsT0FBRCxDQURuQjtBQUVFLFVBQUksRUFBQztBQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUtFO0FBQVEsWUFBTSxFQUFFRCwwREFBUyxDQUFDO0FBQUVKLGVBQU8sRUFBUEEsT0FBRjtBQUFXRSxjQUFNLEVBQU5BO0FBQVgsT0FBRCxDQUF6QjtBQUFnRCxVQUFJLEVBQUM7QUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxGLGVBTUU7QUFDRSxTQUFHLEVBQUVBLE1BQU0sR0FBR0gsR0FEaEI7QUFFRSxTQUFHLEVBQUVFLEdBRlA7QUFHRSxZQUFNLEVBQUVFLE1BSFY7QUFJRSxXQUFLLEVBQUU7QUFDTFAsaUJBQVMsRUFBRUEsU0FETjtBQUVMQyxzQkFBYyxFQUFFQSxjQUZYO0FBR0xTLGdCQUFRLEVBQUUsVUFITDtBQUlMQyxXQUFHLEVBQUUsQ0FKQTtBQUtMQyxjQUFNLEVBQUUsQ0FMSDtBQU1MQyxZQUFJLEVBQUUsQ0FORDtBQU9MQyxhQUFLLEVBQUUsQ0FQRjtBQVFMQyxhQUFLLEVBQUUsTUFSRjtBQVNMQyxjQUFNLEVBQUU7QUFUSDtBQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXlCRCxDQWxDRDs7S0FBTWQsSztBQW9DU0Esb0VBQWYiLCJmaWxlIjoiLi9zcmMvSW1hZ2UudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGdldFNyY1NldCBmcm9tIFwiLi9nZXRTcmNTZXRcIjtcbmltcG9ydCB7IFRPYmplY3RGaXQgfSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdXJsOiBzdHJpbmc7XG4gIGZvcm1hdHM/OiBhbnk7XG4gIG9iamVjdEZpdD86IFRPYmplY3RGaXQ7XG4gIG9iamVjdFBvc2l0aW9uPzogc3RyaW5nO1xuICBvcmlnaW5hbFdpZHRoPzogbnVtYmVyO1xuICBvcmlnaW5hbEhlaWdodD86IG51bWJlcjtcbiAgcHJvcG9ydGlvbmFsSGVpZ2h0PzogbnVtYmVyO1xuICBhbHQ/OiBzdHJpbmc7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgc3R5bGU/OiBvYmplY3Q7XG4gIHByZWZpeD86IHN0cmluZztcbiAgb25Mb2FkOiAoKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgU3R5bGVkUHJvcHMge1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICBzdHlsZT86IG9iamVjdDtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbn1cblxuY29uc3QgU3R5bGVkSW1hZ2UgPSBzdHlsZWQuZGl2PFN0eWxlZFByb3BzPmBcbiAgb2JqZWN0LWZpdDogJHsocHJvcHMpID0+IHByb3BzLm9iamVjdEZpdH07XG4gIG9iamVjdC1wb3NpdGlvbjogJHsocHJvcHMpID0+IHByb3BzLm9iamVjdFBvc2l0aW9ufTtcbiAgcG9zaXRpb246IFwiYWJzb2x1dGVcIjtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogXCIxMDAlXCI7XG4gIGhlaWdodDogXCIxMDAlXCI7XG5gO1xuXG5jb25zdCBJbWFnZTogUmVhY3QuRkM8UHJvcHM+ID0gKHtcbiAgdXJsLFxuICBmb3JtYXRzLFxuICBvYmplY3RGaXQgPSBcImNvdmVyXCIsXG4gIG9iamVjdFBvc2l0aW9uID0gXCJjZW50ZXJcIixcbiAgYWx0ID0gXCJBbHQtVGV4dFwiLFxuICBwcmVmaXggPSBcIlwiLFxuICBvbkxvYWQsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHBpY3R1cmU+XG4gICAgICA8c291cmNlXG4gICAgICAgIHNyY1NldD17Z2V0U3JjU2V0KHsgZm9ybWF0cywgcHJlZml4LCB3ZWJwOiB0cnVlIH0pfVxuICAgICAgICB0eXBlPVwiaW1hZ2Uvd2VicFwiXG4gICAgICAvPlxuICAgICAgPHNvdXJjZSBzcmNTZXQ9e2dldFNyY1NldCh7IGZvcm1hdHMsIHByZWZpeCB9KX0gdHlwZT1cImltYWdlL2pwZWdcIiAvPlxuICAgICAgPGltZ1xuICAgICAgICBzcmM9e3ByZWZpeCArIHVybH1cbiAgICAgICAgYWx0PXthbHR9XG4gICAgICAgIG9uTG9hZD17b25Mb2FkfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIG9iamVjdEZpdDogb2JqZWN0Rml0LFxuICAgICAgICAgIG9iamVjdFBvc2l0aW9uOiBvYmplY3RQb3NpdGlvbixcbiAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC9waWN0dXJlPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Image.tsx\n");

/***/ })

})