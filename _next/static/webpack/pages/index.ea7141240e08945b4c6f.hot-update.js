webpackHotUpdate_N_E("pages/index",{

/***/ "./src/Placeholder.tsx":
/*!*****************************!*\
  !*** ./src/Placeholder.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_andreasfaust_components_react_strapi_img_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_andreasfaust_components_react_strapi_img_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/andreasfaust/components/react-strapi-img/src/Placeholder.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_Users_andreasfaust_components_react_strapi_img_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  object-fit: \", \";\\n  object-position: \", \";\\n  position: absolute;\\n  top: 0;\\n  bottom: 0;\\n  left: 0;\\n  right: 0;\\n  width: 100%;\\n  height: 100%;\\n  transition: opacity 0.3s;\\n  opacity: \", \";\\n  filter: blur(10px);\\n  transform: scale(1.1);\\n  transformorigin: center;\\n  zindex: 100;\\n  pointerevents: none;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\nvar StyledPlaceholder = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].img(_templateObject(), function (props) {\n  return props.objectFit;\n}, function (props) {\n  return props.objectPosition;\n}, function (props) {\n  return props.imageLoaded ? 0 : 1;\n});\n_c = StyledPlaceholder;\n\nvar ImageWrapper = function ImageWrapper(_ref) {\n  _s();\n\n  var base64 = _ref.base64,\n      alt = _ref.alt,\n      objectFit = _ref.objectFit,\n      objectPosition = _ref.objectPosition,\n      imageLoaded = _ref.imageLoaded;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(true),\n      _React$useState2 = Object(_Users_andreasfaust_components_react_strapi_img_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      render = _React$useState2[0],\n      setRender = _React$useState2[1];\n\n  function onTransitionEnd() {\n    setRender(false);\n  }\n\n  return render && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(StyledPlaceholder, {\n    src: base64,\n    alt: alt,\n    onTransitionEnd: onTransitionEnd,\n    objectFit: objectFit,\n    objectPosition: objectPosition,\n    imageLoaded: imageLoaded\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 53,\n    columnNumber: 7\n  }, _this);\n};\n\n_s(ImageWrapper, \"rk8td8c7SqkJnYNm2MPUOvt/9EA=\");\n\n_c2 = ImageWrapper;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageWrapper);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"StyledPlaceholder\");\n$RefreshReg$(_c2, \"ImageWrapper\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1BsYWNlaG9sZGVyLnRzeD9lMmJiIl0sIm5hbWVzIjpbIlN0eWxlZFBsYWNlaG9sZGVyIiwic3R5bGVkIiwiaW1nIiwicHJvcHMiLCJvYmplY3RGaXQiLCJvYmplY3RQb3NpdGlvbiIsImltYWdlTG9hZGVkIiwiSW1hZ2VXcmFwcGVyIiwiYmFzZTY0IiwiYWx0IiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInJlbmRlciIsInNldFJlbmRlciIsIm9uVHJhbnNpdGlvbkVuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBa0JBLElBQU1BLGlCQUFpQixHQUFHQyx5REFBTSxDQUFDQyxHQUFWLG9CQUNQLFVBQUNDLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLFNBQWpCO0FBQUEsQ0FETyxFQUVGLFVBQUNELEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNFLGNBQWpCO0FBQUEsQ0FGRSxFQVdWLFVBQUNGLEtBQUQ7QUFBQSxTQUFZQSxLQUFLLENBQUNHLFdBQU4sR0FBb0IsQ0FBcEIsR0FBd0IsQ0FBcEM7QUFBQSxDQVhVLENBQXZCO0tBQU1OLGlCOztBQW1CTixJQUFNTyxZQUE2QixHQUFHLFNBQWhDQSxZQUFnQyxPQU1oQztBQUFBOztBQUFBLE1BTEpDLE1BS0ksUUFMSkEsTUFLSTtBQUFBLE1BSkpDLEdBSUksUUFKSkEsR0FJSTtBQUFBLE1BSEpMLFNBR0ksUUFISkEsU0FHSTtBQUFBLE1BRkpDLGNBRUksUUFGSkEsY0FFSTtBQUFBLE1BREpDLFdBQ0ksUUFESkEsV0FDSTs7QUFBQSx3QkFDd0JJLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxJQUFmLENBRHhCO0FBQUE7QUFBQSxNQUNHQyxNQURIO0FBQUEsTUFDV0MsU0FEWDs7QUFFSixXQUFTQyxlQUFULEdBQTJCO0FBQ3pCRCxhQUFTLENBQUMsS0FBRCxDQUFUO0FBQ0Q7O0FBQ0QsU0FDRUQsTUFBTSxpQkFDSixxRUFBQyxpQkFBRDtBQUNFLE9BQUcsRUFBRUosTUFEUDtBQUVFLE9BQUcsRUFBRUMsR0FGUDtBQUdFLG1CQUFlLEVBQUVLLGVBSG5CO0FBSUUsYUFBUyxFQUFFVixTQUpiO0FBS0Usa0JBQWMsRUFBRUMsY0FMbEI7QUFNRSxlQUFXLEVBQUVDO0FBTmY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUZKO0FBWUQsQ0F2QkQ7O0dBQU1DLFk7O01BQUFBLFk7QUF5QlNBLDJFQUFmIiwiZmlsZSI6Ii4vc3JjL1BsYWNlaG9sZGVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRPYmplY3RGaXQgfSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgYmFzZTY0OiBzdHJpbmc7XG4gIGFsdDogc3RyaW5nO1xuICBvYmplY3RGaXQ6IFRPYmplY3RGaXQ7XG4gIG9iamVjdFBvc2l0aW9uOiBzdHJpbmc7XG4gIGltYWdlTG9hZGVkOiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgU3R5bGVkUHJvcHMge1xuICBzcmM6IHN0cmluZztcbiAgYWx0OiBzdHJpbmc7XG4gIG9iamVjdEZpdDogVE9iamVjdEZpdDtcbiAgb2JqZWN0UG9zaXRpb246IHN0cmluZztcbiAgaW1hZ2VMb2FkZWQ6IGJvb2xlYW47XG59XG5cbmNvbnN0IFN0eWxlZFBsYWNlaG9sZGVyID0gc3R5bGVkLmltZzxTdHlsZWRQcm9wcz5gXG4gIG9iamVjdC1maXQ6ICR7KHByb3BzKSA9PiBwcm9wcy5vYmplY3RGaXR9O1xuICBvYmplY3QtcG9zaXRpb246ICR7KHByb3BzKSA9PiBwcm9wcy5vYmplY3RQb3NpdGlvbn07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3M7XG4gIG9wYWNpdHk6ICR7KHByb3BzKSA9PiAocHJvcHMuaW1hZ2VMb2FkZWQgPyAwIDogMSl9O1xuICBmaWx0ZXI6IGJsdXIoMTBweCk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgdHJhbnNmb3Jtb3JpZ2luOiBjZW50ZXI7XG4gIHppbmRleDogMTAwO1xuICBwb2ludGVyZXZlbnRzOiBub25lO1xuYDtcblxuY29uc3QgSW1hZ2VXcmFwcGVyOiBSZWFjdC5GQzxQcm9wcz4gPSAoe1xuICBiYXNlNjQsXG4gIGFsdCxcbiAgb2JqZWN0Rml0LFxuICBvYmplY3RQb3NpdGlvbixcbiAgaW1hZ2VMb2FkZWQsXG59KSA9PiB7XG4gIGNvbnN0IFtyZW5kZXIsIHNldFJlbmRlcl0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcbiAgZnVuY3Rpb24gb25UcmFuc2l0aW9uRW5kKCkge1xuICAgIHNldFJlbmRlcihmYWxzZSk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICByZW5kZXIgJiYgKFxuICAgICAgPFN0eWxlZFBsYWNlaG9sZGVyXG4gICAgICAgIHNyYz17YmFzZTY0fVxuICAgICAgICBhbHQ9e2FsdH1cbiAgICAgICAgb25UcmFuc2l0aW9uRW5kPXtvblRyYW5zaXRpb25FbmR9XG4gICAgICAgIG9iamVjdEZpdD17b2JqZWN0Rml0fVxuICAgICAgICBvYmplY3RQb3NpdGlvbj17b2JqZWN0UG9zaXRpb259XG4gICAgICAgIGltYWdlTG9hZGVkPXtpbWFnZUxvYWRlZH1cbiAgICAgIC8+XG4gICAgKVxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VXcmFwcGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Placeholder.tsx\n");

/***/ })

})