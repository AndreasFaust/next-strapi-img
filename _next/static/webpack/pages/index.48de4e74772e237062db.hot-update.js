webpackHotUpdate_N_E("pages/index",{

/***/ "./src/Placeholder.tsx":
/*!*****************************!*\
  !*** ./src/Placeholder.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_andreasfaust_web_react_strapi_img_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\n\nvar _jsxFileName = \"/Users/andreasfaust/web/react-strapi-img/src/Placeholder.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\nvar StyledPlaceholder = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].img.withConfig({\n  displayName: \"Placeholder__StyledPlaceholder\",\n  componentId: \"h5tses-0\"\n})([\"object-fit:\", \";object-position:\", \";position:absolute;top:0;bottom:0;left:0;right:0;width:100%;height:100%;transition:opacity 0.4s;opacity:\", \";filter:blur(10px);transform:scale(1.1);transform-origin:center;z-index:100;pointerevents:none;\", \"\"], function (props) {\n  return props.objectFit;\n}, function (props) {\n  return props.objectPosition;\n}, function (props) {\n  return props.imageLoaded ? 0 : 1;\n}, function (props) {\n  return props.stylesPlaceholder;\n});\n_c = StyledPlaceholder;\n\nvar ImageWrapper = function ImageWrapper(_ref) {\n  _s();\n\n  var base64 = _ref.base64,\n      alternativeText = _ref.alternativeText,\n      objectFit = _ref.objectFit,\n      objectPosition = _ref.objectPosition,\n      imageLoaded = _ref.imageLoaded,\n      stylesPlaceholder = _ref.stylesPlaceholder;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(true),\n      _React$useState2 = Object(_Users_andreasfaust_web_react_strapi_img_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      render = _React$useState2[0],\n      setRender = _React$useState2[1];\n\n  function onTransitionEnd() {\n    setRender(false);\n  }\n\n  return render && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(StyledPlaceholder, {\n    src: base64,\n    alternativeText: alternativeText,\n    onTransitionEnd: onTransitionEnd,\n    objectFit: objectFit,\n    objectPosition: objectPosition,\n    imageLoaded: imageLoaded,\n    stylesPlaceholder: stylesPlaceholder\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 56,\n    columnNumber: 7\n  }, _this);\n};\n\n_s(ImageWrapper, \"rk8td8c7SqkJnYNm2MPUOvt/9EA=\");\n\n_c2 = ImageWrapper;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageWrapper);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"StyledPlaceholder\");\n$RefreshReg$(_c2, \"ImageWrapper\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1BsYWNlaG9sZGVyLnRzeD9lMmJiIl0sIm5hbWVzIjpbIlN0eWxlZFBsYWNlaG9sZGVyIiwic3R5bGVkIiwiaW1nIiwicHJvcHMiLCJvYmplY3RGaXQiLCJvYmplY3RQb3NpdGlvbiIsImltYWdlTG9hZGVkIiwic3R5bGVzUGxhY2Vob2xkZXIiLCJJbWFnZVdyYXBwZXIiLCJiYXNlNjQiLCJhbHRlcm5hdGl2ZVRleHQiLCJSZWFjdCIsInVzZVN0YXRlIiwicmVuZGVyIiwic2V0UmVuZGVyIiwib25UcmFuc2l0aW9uRW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFtQkEsSUFBTUEsaUJBQWlCLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsNFBBQ1AsVUFBQ0MsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsU0FBakI7QUFBQSxDQURPLEVBRUYsVUFBQ0QsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0UsY0FBakI7QUFBQSxDQUZFLEVBV1YsVUFBQ0YsS0FBRDtBQUFBLFNBQVlBLEtBQUssQ0FBQ0csV0FBTixHQUFvQixDQUFwQixHQUF3QixDQUFwQztBQUFBLENBWFUsRUFpQm5CLFVBQUNILEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNJLGlCQUFqQjtBQUFBLENBakJtQixDQUF2QjtLQUFNUCxpQjs7QUFvQk4sSUFBTVEsWUFBNkIsR0FBRyxTQUFoQ0EsWUFBZ0MsT0FPaEM7QUFBQTs7QUFBQSxNQU5KQyxNQU1JLFFBTkpBLE1BTUk7QUFBQSxNQUxKQyxlQUtJLFFBTEpBLGVBS0k7QUFBQSxNQUpKTixTQUlJLFFBSkpBLFNBSUk7QUFBQSxNQUhKQyxjQUdJLFFBSEpBLGNBR0k7QUFBQSxNQUZKQyxXQUVJLFFBRkpBLFdBRUk7QUFBQSxNQURKQyxpQkFDSSxRQURKQSxpQkFDSTs7QUFBQSx3QkFDd0JJLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxJQUFmLENBRHhCO0FBQUE7QUFBQSxNQUNHQyxNQURIO0FBQUEsTUFDV0MsU0FEWDs7QUFFSixXQUFTQyxlQUFULEdBQTJCO0FBQ3pCRCxhQUFTLENBQUMsS0FBRCxDQUFUO0FBQ0Q7O0FBQ0QsU0FDRUQsTUFBTSxpQkFDSixxRUFBQyxpQkFBRDtBQUNFLE9BQUcsRUFBRUosTUFEUDtBQUVFLG1CQUFlLEVBQUVDLGVBRm5CO0FBR0UsbUJBQWUsRUFBRUssZUFIbkI7QUFJRSxhQUFTLEVBQUVYLFNBSmI7QUFLRSxrQkFBYyxFQUFFQyxjQUxsQjtBQU1FLGVBQVcsRUFBRUMsV0FOZjtBQU9FLHFCQUFpQixFQUFFQztBQVByQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRko7QUFhRCxDQXpCRDs7R0FBTUMsWTs7TUFBQUEsWTtBQTJCU0EsMkVBQWYiLCJmaWxlIjoiLi9zcmMvUGxhY2Vob2xkZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgT2JqZWN0Rml0IH0gZnJvbSBcIi4vdHlwZXNcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGJhc2U2NDogc3RyaW5nO1xuICBhbHRlcm5hdGl2ZVRleHQ6IHN0cmluZztcbiAgb2JqZWN0Rml0OiBPYmplY3RGaXQ7XG4gIG9iamVjdFBvc2l0aW9uOiBzdHJpbmc7XG4gIGltYWdlTG9hZGVkOiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgU3R5bGVkUHJvcHMge1xuICBzcmM6IHN0cmluZztcbiAgYWx0ZXJuYXRpdmVUZXh0OiBzdHJpbmc7XG4gIG9iamVjdEZpdDogT2JqZWN0Rml0O1xuICBvYmplY3RQb3NpdGlvbjogc3RyaW5nO1xuICBpbWFnZUxvYWRlZDogYm9vbGVhbjtcbiAgb25UcmFuc2l0aW9uRW5kOiAoKSA9PiB2b2lkO1xufVxuXG5jb25zdCBTdHlsZWRQbGFjZWhvbGRlciA9IHN0eWxlZC5pbWc8U3R5bGVkUHJvcHM+YFxuICBvYmplY3QtZml0OiAkeyhwcm9wcykgPT4gcHJvcHMub2JqZWN0Rml0fTtcbiAgb2JqZWN0LXBvc2l0aW9uOiAkeyhwcm9wcykgPT4gcHJvcHMub2JqZWN0UG9zaXRpb259O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzO1xuICBvcGFjaXR5OiAkeyhwcm9wcykgPT4gKHByb3BzLmltYWdlTG9hZGVkID8gMCA6IDEpfTtcbiAgZmlsdGVyOiBibHVyKDEwcHgpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgei1pbmRleDogMTAwO1xuICBwb2ludGVyZXZlbnRzOiBub25lO1xuICAkeyhwcm9wcykgPT4gcHJvcHMuc3R5bGVzUGxhY2Vob2xkZXJ9XG5gO1xuXG5jb25zdCBJbWFnZVdyYXBwZXI6IFJlYWN0LkZDPFByb3BzPiA9ICh7XG4gIGJhc2U2NCxcbiAgYWx0ZXJuYXRpdmVUZXh0LFxuICBvYmplY3RGaXQsXG4gIG9iamVjdFBvc2l0aW9uLFxuICBpbWFnZUxvYWRlZCxcbiAgc3R5bGVzUGxhY2Vob2xkZXIsXG59KSA9PiB7XG4gIGNvbnN0IFtyZW5kZXIsIHNldFJlbmRlcl0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcbiAgZnVuY3Rpb24gb25UcmFuc2l0aW9uRW5kKCkge1xuICAgIHNldFJlbmRlcihmYWxzZSk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICByZW5kZXIgJiYgKFxuICAgICAgPFN0eWxlZFBsYWNlaG9sZGVyXG4gICAgICAgIHNyYz17YmFzZTY0fVxuICAgICAgICBhbHRlcm5hdGl2ZVRleHQ9e2FsdGVybmF0aXZlVGV4dH1cbiAgICAgICAgb25UcmFuc2l0aW9uRW5kPXtvblRyYW5zaXRpb25FbmR9XG4gICAgICAgIG9iamVjdEZpdD17b2JqZWN0Rml0fVxuICAgICAgICBvYmplY3RQb3NpdGlvbj17b2JqZWN0UG9zaXRpb259XG4gICAgICAgIGltYWdlTG9hZGVkPXtpbWFnZUxvYWRlZH1cbiAgICAgICAgc3R5bGVzUGxhY2Vob2xkZXI9e3N0eWxlc1BsYWNlaG9sZGVyfVxuICAgICAgLz5cbiAgICApXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbWFnZVdyYXBwZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Placeholder.tsx\n");

/***/ })

})