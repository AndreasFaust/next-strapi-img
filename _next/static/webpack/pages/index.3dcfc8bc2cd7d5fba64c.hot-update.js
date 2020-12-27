webpackHotUpdate_N_E("pages/index",{

/***/ "./src/ImageProvider.tsx":
/*!*******************************!*\
  !*** ./src/ImageProvider.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _useWebp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useWebp */ \"./src/useWebp.ts\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context */ \"./src/context.ts\");\n\n\nvar _jsxFileName = \"/Users/andreasfaust/web/react-strapi-img/src/ImageProvider.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar ImageProvider = function ImageProvider(_ref) {\n  _s();\n\n  var objectFit = _ref.objectFit,\n      objectPosition = _ref.objectPosition,\n      width = _ref.width,\n      height = _ref.height,\n      proportionalHeight = _ref.proportionalHeight,\n      rootMargin = _ref.rootMargin,\n      threshold = _ref.threshold,\n      alternativeText = _ref.alternativeText,\n      sizes = _ref.sizes,\n      _ref$className = _ref.className,\n      className = _ref$className === void 0 ? \"\" : _ref$className,\n      _ref$style = _ref.style,\n      style = _ref$style === void 0 ? \"\" : _ref$style,\n      _ref$stylePlaceholder = _ref.stylePlaceholder,\n      stylePlaceholder = _ref$stylePlaceholder === void 0 ? \"\" : _ref$stylePlaceholder,\n      _ref$styleImg = _ref.styleImg,\n      styleImg = _ref$styleImg === void 0 ? \"\" : _ref$styleImg,\n      _ref$prefix = _ref.prefix,\n      prefix = _ref$prefix === void 0 ? \"\" : _ref$prefix,\n      children = _ref.children,\n      onLoad = _ref.onLoad,\n      onError = _ref.onError;\n  var webp = Object(_useWebp__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  var handleLoad = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback(function (event) {\n    if (onLoad) onLoad(event);\n  }, []);\n  var handleError = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback(function (event) {\n    if (onError) onError(event);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_context__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Provider, {\n    value: {\n      objectFit: objectFit,\n      objectPosition: objectPosition,\n      width: width,\n      height: height,\n      proportionalHeight: proportionalHeight,\n      rootMargin: rootMargin,\n      threshold: threshold,\n      alternativeText: alternativeText,\n      className: className,\n      style: style,\n      stylePlaceholder: stylePlaceholder,\n      styleImg: styleImg,\n      prefix: prefix,\n      webp: webp,\n      sizes: sizes,\n      onLoad: handleLoad,\n      onError: handleError\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ImageProvider, \"uzJQr/n2HpiuIkjpwouaseYjw50=\", false, function () {\n  return [_useWebp__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n});\n\n_c = ImageProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(ImageProvider));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ImageProvider\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0ltYWdlUHJvdmlkZXIudHN4P2QwNzQiXSwibmFtZXMiOlsiSW1hZ2VQcm92aWRlciIsIm9iamVjdEZpdCIsIm9iamVjdFBvc2l0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJwcm9wb3J0aW9uYWxIZWlnaHQiLCJyb290TWFyZ2luIiwidGhyZXNob2xkIiwiYWx0ZXJuYXRpdmVUZXh0Iiwic2l6ZXMiLCJjbGFzc05hbWUiLCJzdHlsZSIsInN0eWxlUGxhY2Vob2xkZXIiLCJzdHlsZUltZyIsInByZWZpeCIsImNoaWxkcmVuIiwib25Mb2FkIiwib25FcnJvciIsIndlYnAiLCJ1c2VXZWJwIiwiaGFuZGxlTG9hZCIsIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJldmVudCIsImhhbmRsZUVycm9yIiwibWVtbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxhQUFzQyxHQUFHLFNBQXpDQSxhQUF5QyxPQWtCekM7QUFBQTs7QUFBQSxNQWpCSkMsU0FpQkksUUFqQkpBLFNBaUJJO0FBQUEsTUFoQkpDLGNBZ0JJLFFBaEJKQSxjQWdCSTtBQUFBLE1BZkpDLEtBZUksUUFmSkEsS0FlSTtBQUFBLE1BZEpDLE1BY0ksUUFkSkEsTUFjSTtBQUFBLE1BYkpDLGtCQWFJLFFBYkpBLGtCQWFJO0FBQUEsTUFaSkMsVUFZSSxRQVpKQSxVQVlJO0FBQUEsTUFYSkMsU0FXSSxRQVhKQSxTQVdJO0FBQUEsTUFWSkMsZUFVSSxRQVZKQSxlQVVJO0FBQUEsTUFUSkMsS0FTSSxRQVRKQSxLQVNJO0FBQUEsNEJBUkpDLFNBUUk7QUFBQSxNQVJKQSxTQVFJLCtCQVJRLEVBUVI7QUFBQSx3QkFQSkMsS0FPSTtBQUFBLE1BUEpBLEtBT0ksMkJBUEksRUFPSjtBQUFBLG1DQU5KQyxnQkFNSTtBQUFBLE1BTkpBLGdCQU1JLHNDQU5lLEVBTWY7QUFBQSwyQkFMSkMsUUFLSTtBQUFBLE1BTEpBLFFBS0ksOEJBTE8sRUFLUDtBQUFBLHlCQUpKQyxNQUlJO0FBQUEsTUFKSkEsTUFJSSw0QkFKSyxFQUlMO0FBQUEsTUFISkMsUUFHSSxRQUhKQSxRQUdJO0FBQUEsTUFGSkMsTUFFSSxRQUZKQSxNQUVJO0FBQUEsTUFESkMsT0FDSSxRQURKQSxPQUNJO0FBQ0osTUFBTUMsSUFBSSxHQUFHQyx3REFBTyxFQUFwQjtBQUNBLE1BQU1DLFVBQVUsR0FBR0MsNENBQUssQ0FBQ0MsV0FBTixDQUFrQixVQUFDQyxLQUFELEVBQVc7QUFDOUMsUUFBSVAsTUFBSixFQUFZQSxNQUFNLENBQUNPLEtBQUQsQ0FBTjtBQUNiLEdBRmtCLEVBRWhCLEVBRmdCLENBQW5CO0FBR0EsTUFBTUMsV0FBVyxHQUFHSCw0Q0FBSyxDQUFDQyxXQUFOLENBQWtCLFVBQUNDLEtBQUQsRUFBVztBQUMvQyxRQUFJTixPQUFKLEVBQWFBLE9BQU8sQ0FBQ00sS0FBRCxDQUFQO0FBQ2QsR0FGbUIsRUFFakIsRUFGaUIsQ0FBcEI7QUFJQSxzQkFDRSxxRUFBQyxnREFBRCxDQUFTLFFBQVQ7QUFDRSxTQUFLLEVBQUU7QUFDTHRCLGVBQVMsRUFBVEEsU0FESztBQUVMQyxvQkFBYyxFQUFkQSxjQUZLO0FBR0xDLFdBQUssRUFBTEEsS0FISztBQUlMQyxZQUFNLEVBQU5BLE1BSks7QUFLTEMsd0JBQWtCLEVBQWxCQSxrQkFMSztBQU1MQyxnQkFBVSxFQUFWQSxVQU5LO0FBT0xDLGVBQVMsRUFBVEEsU0FQSztBQVFMQyxxQkFBZSxFQUFmQSxlQVJLO0FBU0xFLGVBQVMsRUFBVEEsU0FUSztBQVVMQyxXQUFLLEVBQUxBLEtBVks7QUFXTEMsc0JBQWdCLEVBQWhCQSxnQkFYSztBQVlMQyxjQUFRLEVBQVJBLFFBWks7QUFhTEMsWUFBTSxFQUFOQSxNQWJLO0FBY0xJLFVBQUksRUFBSkEsSUFkSztBQWVMVCxXQUFLLEVBQUxBLEtBZks7QUFnQkxPLFlBQU0sRUFBRUksVUFoQkg7QUFpQkxILGFBQU8sRUFBRU87QUFqQkosS0FEVDtBQUFBLGNBcUJHVDtBQXJCSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF5QkQsQ0FwREQ7O0dBQU1mLGE7VUFtQlNtQixnRDs7O0tBbkJUbkIsYTtBQXNEUyxrRkFBQXFCLDRDQUFLLENBQUNJLElBQU4sQ0FBV3pCLGFBQVgsQ0FBZiIsImZpbGUiOiIuL3NyYy9JbWFnZVByb3ZpZGVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFByb3ZpZGVyUHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IHVzZVdlYnAgZnJvbSBcIi4vdXNlV2VicFwiO1xuaW1wb3J0IENvbnRleHQgZnJvbSBcIi4vY29udGV4dFwiO1xuXG5jb25zdCBJbWFnZVByb3ZpZGVyOiBSZWFjdC5GQzxQcm92aWRlclByb3BzPiA9ICh7XG4gIG9iamVjdEZpdCxcbiAgb2JqZWN0UG9zaXRpb24sXG4gIHdpZHRoLFxuICBoZWlnaHQsXG4gIHByb3BvcnRpb25hbEhlaWdodCxcbiAgcm9vdE1hcmdpbixcbiAgdGhyZXNob2xkLFxuICBhbHRlcm5hdGl2ZVRleHQsXG4gIHNpemVzLFxuICBjbGFzc05hbWUgPSBcIlwiLFxuICBzdHlsZSA9IFwiXCIsXG4gIHN0eWxlUGxhY2Vob2xkZXIgPSBcIlwiLFxuICBzdHlsZUltZyA9IFwiXCIsXG4gIHByZWZpeCA9IFwiXCIsXG4gIGNoaWxkcmVuLFxuICBvbkxvYWQsXG4gIG9uRXJyb3IsXG59KSA9PiB7XG4gIGNvbnN0IHdlYnAgPSB1c2VXZWJwKCk7XG4gIGNvbnN0IGhhbmRsZUxvYWQgPSBSZWFjdC51c2VDYWxsYmFjaygoZXZlbnQpID0+IHtcbiAgICBpZiAob25Mb2FkKSBvbkxvYWQoZXZlbnQpO1xuICB9LCBbXSk7XG4gIGNvbnN0IGhhbmRsZUVycm9yID0gUmVhY3QudXNlQ2FsbGJhY2soKGV2ZW50KSA9PiB7XG4gICAgaWYgKG9uRXJyb3IpIG9uRXJyb3IoZXZlbnQpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgb2JqZWN0Rml0LFxuICAgICAgICBvYmplY3RQb3NpdGlvbixcbiAgICAgICAgd2lkdGgsXG4gICAgICAgIGhlaWdodCxcbiAgICAgICAgcHJvcG9ydGlvbmFsSGVpZ2h0LFxuICAgICAgICByb290TWFyZ2luLFxuICAgICAgICB0aHJlc2hvbGQsXG4gICAgICAgIGFsdGVybmF0aXZlVGV4dCxcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICBzdHlsZSxcbiAgICAgICAgc3R5bGVQbGFjZWhvbGRlcixcbiAgICAgICAgc3R5bGVJbWcsXG4gICAgICAgIHByZWZpeCxcbiAgICAgICAgd2VicCxcbiAgICAgICAgc2l6ZXMsXG4gICAgICAgIG9uTG9hZDogaGFuZGxlTG9hZCxcbiAgICAgICAgb25FcnJvcjogaGFuZGxlRXJyb3IsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0NvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKEltYWdlUHJvdmlkZXIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ImageProvider.tsx\n");

/***/ })

})