webpackHotUpdate_N_E("pages/index",{

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! exports provided: default, Types */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_andreasfaust_web_react_strapi_img_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _useIntersectionObserver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useIntersectionObserver */ \"./src/useIntersectionObserver.ts\");\n/* harmony import */ var _getSrcSet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getSrcSet */ \"./src/getSrcSet.ts\");\n/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Image */ \"./src/Image.tsx\");\n/* harmony import */ var _Placeholder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Placeholder */ \"./src/Placeholder.tsx\");\n/* harmony import */ var _Wrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Wrapper */ \"./src/Wrapper.tsx\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./types */ \"./src/types.ts\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, \"Types\", function() { return _types__WEBPACK_IMPORTED_MODULE_8__; });\n\n\n\nvar _jsxFileName = \"/Users/andreasfaust/web/react-strapi-img/src/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar ReactStrapiImg = function ReactStrapiImg(_ref) {\n  _s();\n\n  var url = _ref.url,\n      formats = _ref.formats,\n      _ref$objectFit = _ref.objectFit,\n      objectFit = _ref$objectFit === void 0 ? \"cover\" : _ref$objectFit,\n      _ref$objectPosition = _ref.objectPosition,\n      objectPosition = _ref$objectPosition === void 0 ? \"center\" : _ref$objectPosition,\n      width = _ref.width,\n      height = _ref.height,\n      proportionalHeight = _ref.proportionalHeight,\n      _ref$rootMargin = _ref.rootMargin,\n      rootMargin = _ref$rootMargin === void 0 ? \"50px\" : _ref$rootMargin,\n      _ref$threshold = _ref.threshold,\n      threshold = _ref$threshold === void 0 ? 0 : _ref$threshold,\n      _ref$alternativeText = _ref.alternativeText,\n      alternativeText = _ref$alternativeText === void 0 ? \"Alternative-Text\" : _ref$alternativeText,\n      _ref$className = _ref.className,\n      className = _ref$className === void 0 ? \"\" : _ref$className,\n      _ref$style = _ref.style,\n      style = _ref$style === void 0 ? null : _ref$style,\n      _ref$stylePlaceholder = _ref.stylePlaceholder,\n      stylePlaceholder = _ref$stylePlaceholder === void 0 ? null : _ref$stylePlaceholder,\n      _ref$styleImg = _ref.styleImg,\n      styleImg = _ref$styleImg === void 0 ? null : _ref$styleImg,\n      _ref$prefix = _ref.prefix,\n      prefix = _ref$prefix === void 0 ? \"\" : _ref$prefix,\n      _ref$lazy = _ref.lazy,\n      lazy = _ref$lazy === void 0 ? true : _ref$lazy;\n  var ref = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(null);\n\n  var _useIntersectionObser = Object(_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n    elementRef: ref,\n    freezeOnceVisible: true,\n    rootMargin: rootMargin,\n    threshold: threshold,\n    disable: !lazy\n  }),\n      _useIntersectionObser2 = Object(_Users_andreasfaust_web_react_strapi_img_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useIntersectionObser, 1),\n      isVisible = _useIntersectionObser2[0];\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),\n      _React$useState2 = Object(_Users_andreasfaust_web_react_strapi_img_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      imageLoaded = _React$useState2[0],\n      setImageLoaded = _React$useState2[1];\n\n  var handleLoad = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(function () {\n    // storage.set(url);\n    setImageLoaded(true);\n  }, []);\n  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {\n    if (isCached(url)) {\n      setImageLoaded(true);\n    }\n  }, []);\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(!lazy),\n      _React$useState4 = Object(_Users_andreasfaust_web_react_strapi_img_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState3, 2),\n      show = _React$useState4[0],\n      setShow = _React$useState4[1];\n\n  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {\n    if (isVisible) {\n      setShow(true);\n    }\n  }, [isVisible]);\n  var srcSetWebp = react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(function () {\n    return Object(_getSrcSet__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n      formats: formats,\n      prefix: prefix,\n      webp: true\n    });\n  }, []);\n  var srcSet = react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(function () {\n    return Object(_getSrcSet__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n      formats: formats,\n      prefix: prefix\n    });\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Wrapper__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    ref: ref,\n    className: className,\n    style: style,\n    width: width,\n    height: height,\n    proportionalHeight: proportionalHeight,\n    children: [lazy && formats && formats.base64[0] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Placeholder__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      alternativeText: alternativeText,\n      base64: formats.base64[0].url,\n      objectFit: objectFit,\n      objectPosition: objectPosition,\n      imageLoaded: imageLoaded,\n      stylePlaceholder: stylePlaceholder\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 9\n    }, _this), show && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Image__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      onLoad: handleLoad,\n      url: url,\n      srcSetWebp: srcSetWebp,\n      srcSet: srcSet,\n      objectFit: objectFit,\n      objectPosition: objectPosition,\n      prefix: prefix,\n      alternativeText: alternativeText,\n      styleImg: styleImg\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 65,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ReactStrapiImg, \"Ye8wGrLYPi4mu8Zyw40d7Uc4wSw=\", false, function () {\n  return [_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n});\n\n_c = ReactStrapiImg;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ReactStrapiImg);\n\n\nvar _c;\n\n$RefreshReg$(_c, \"ReactStrapiImg\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2luZGV4LnRzeD9kOTg2Il0sIm5hbWVzIjpbIlJlYWN0U3RyYXBpSW1nIiwidXJsIiwiZm9ybWF0cyIsIm9iamVjdEZpdCIsIm9iamVjdFBvc2l0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJwcm9wb3J0aW9uYWxIZWlnaHQiLCJyb290TWFyZ2luIiwidGhyZXNob2xkIiwiYWx0ZXJuYXRpdmVUZXh0IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJzdHlsZVBsYWNlaG9sZGVyIiwic3R5bGVJbWciLCJwcmVmaXgiLCJsYXp5IiwicmVmIiwiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVsZW1lbnRSZWYiLCJmcmVlemVPbmNlVmlzaWJsZSIsImRpc2FibGUiLCJpc1Zpc2libGUiLCJ1c2VTdGF0ZSIsImltYWdlTG9hZGVkIiwic2V0SW1hZ2VMb2FkZWQiLCJoYW5kbGVMb2FkIiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJpc0NhY2hlZCIsInNob3ciLCJzZXRTaG93Iiwic3JjU2V0V2VicCIsInVzZU1lbW8iLCJnZXRTcmNTZXQiLCJ3ZWJwIiwic3JjU2V0IiwiYmFzZTY0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxjQUEwQyxHQUFHLFNBQTdDQSxjQUE2QyxPQWlCN0M7QUFBQTs7QUFBQSxNQWhCSkMsR0FnQkksUUFoQkpBLEdBZ0JJO0FBQUEsTUFmSkMsT0FlSSxRQWZKQSxPQWVJO0FBQUEsNEJBZEpDLFNBY0k7QUFBQSxNQWRKQSxTQWNJLCtCQWRRLE9BY1I7QUFBQSxpQ0FiSkMsY0FhSTtBQUFBLE1BYkpBLGNBYUksb0NBYmEsUUFhYjtBQUFBLE1BWkpDLEtBWUksUUFaSkEsS0FZSTtBQUFBLE1BWEpDLE1BV0ksUUFYSkEsTUFXSTtBQUFBLE1BVkpDLGtCQVVJLFFBVkpBLGtCQVVJ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cUMsTUFBUixDQUFlLENBQWYsRUFBa0J0QyxHQUY1QjtBQUdFLGVBQVMsRUFBRUUsU0FIYjtBQUlFLG9CQUFjLEVBQUVDLGNBSmxCO0FBS0UsaUJBQVcsRUFBRXNCLFdBTGY7QUFNRSxzQkFBZ0IsRUFBRWI7QUFOcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVRKLEVBa0JHbUIsSUFBSSxpQkFDSCxxRUFBQyw4Q0FBRDtBQUNFLFlBQU0sRUFBRUosVUFEVjtBQUVFLFNBQUcsRUFBRTNCLEdBRlA7QUFHRSxnQkFBVSxFQUFFaUMsVUFIZDtBQUlFLFlBQU0sRUFBRUksTUFKVjtBQUtFLGVBQVMsRUFBRW5DLFNBTGI7QUFNRSxvQkFBYyxFQUFFQyxjQU5sQjtBQU9FLFlBQU0sRUFBRVcsTUFQVjtBQVFFLHFCQUFlLEVBQUVMLGVBUm5CO0FBU0UsY0FBUSxFQUFFSTtBQVRaO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFuQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFrQ0QsQ0F2RkQ7O0dBQU1kLGM7VUFvQmdCb0IsZ0U7OztLQXBCaEJwQixjO0FBeUZTQSw2RUFBZjtBQUNBIiwiZmlsZSI6Ii4vc3JjL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1c2VJbnRlcnNlY3Rpb25PYnNlcnZlciBmcm9tIFwiLi91c2VJbnRlcnNlY3Rpb25PYnNlcnZlclwiO1xuaW1wb3J0IGdldFNyY1NldCBmcm9tIFwiLi9nZXRTcmNTZXRcIjtcblxuaW1wb3J0IEltYWdlIGZyb20gXCIuL0ltYWdlXCI7XG5pbXBvcnQgUGxhY2Vob2xkZXIgZnJvbSBcIi4vUGxhY2Vob2xkZXJcIjtcbmltcG9ydCBXcmFwcGVyIGZyb20gXCIuL1dyYXBwZXJcIjtcbmltcG9ydCAqIGFzIHN0b3JhZ2UgZnJvbSBcIi4vc3RvcmFnZVwiO1xuaW1wb3J0ICogYXMgVHlwZXMgZnJvbSBcIi4vdHlwZXNcIjtcblxuY29uc3QgUmVhY3RTdHJhcGlJbWc6IFJlYWN0LkZDPFR5cGVzLkltYWdlUHJvcHM+ID0gKHtcbiAgdXJsLFxuICBmb3JtYXRzLFxuICBvYmplY3RGaXQgPSBcImNvdmVyXCIsXG4gIG9iamVjdFBvc2l0aW9uID0gXCJjZW50ZXJcIixcbiAgd2lkdGgsXG4gIGhlaWdodCxcbiAgcHJvcG9ydGlvbmFsSGVpZ2h0LFxuICByb290TWFyZ2luID0gXCI1MHB4XCIsXG4gIHRocmVzaG9sZCA9IDAsXG4gIGFsdGVybmF0aXZlVGV4dCA9IFwiQWx0ZXJuYXRpdmUtVGV4dFwiLFxuICBjbGFzc05hbWUgPSBcIlwiLFxuICBzdHlsZSA9IG51bGwsXG4gIHN0eWxlUGxhY2Vob2xkZXIgPSBudWxsLFxuICBzdHlsZUltZyA9IG51bGwsXG4gIHByZWZpeCA9IFwiXCIsXG4gIGxhenkgPSB0cnVlLFxufSkgPT4ge1xuICBjb25zdCByZWYgPSBSZWFjdC51c2VSZWY8SFRNTERpdkVsZW1lbnQgfCBudWxsPihudWxsKTtcblxuICBjb25zdCBbaXNWaXNpYmxlXSA9IHVzZUludGVyc2VjdGlvbk9ic2VydmVyKHtcbiAgICBlbGVtZW50UmVmOiByZWYsXG4gICAgZnJlZXplT25jZVZpc2libGU6IHRydWUsXG4gICAgcm9vdE1hcmdpbixcbiAgICB0aHJlc2hvbGQsXG4gICAgZGlzYWJsZTogIWxhenksXG4gIH0pO1xuXG4gIGNvbnN0IFtpbWFnZUxvYWRlZCwgc2V0SW1hZ2VMb2FkZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBoYW5kbGVMb2FkID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIC8vIHN0b3JhZ2Uuc2V0KHVybCk7XG4gICAgc2V0SW1hZ2VMb2FkZWQodHJ1ZSk7XG4gIH0sIFtdKTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaXNDYWNoZWQodXJsKSkge1xuICAgICAgc2V0SW1hZ2VMb2FkZWQodHJ1ZSk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgY29uc3QgW3Nob3csIHNldFNob3ddID0gUmVhY3QudXNlU3RhdGUoIWxhenkpO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzVmlzaWJsZSkge1xuICAgICAgc2V0U2hvdyh0cnVlKTtcbiAgICB9XG4gIH0sIFtpc1Zpc2libGVdKTtcblxuICBjb25zdCBzcmNTZXRXZWJwID0gUmVhY3QudXNlTWVtbyhcbiAgICAoKSA9PiBnZXRTcmNTZXQoeyBmb3JtYXRzLCBwcmVmaXgsIHdlYnA6IHRydWUgfSksXG4gICAgW11cbiAgKTtcbiAgY29uc3Qgc3JjU2V0ID0gUmVhY3QudXNlTWVtbygoKSA9PiBnZXRTcmNTZXQoeyBmb3JtYXRzLCBwcmVmaXggfSksIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxXcmFwcGVyXG4gICAgICByZWY9e3JlZn1cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICBwcm9wb3J0aW9uYWxIZWlnaHQ9e3Byb3BvcnRpb25hbEhlaWdodH1cbiAgICA+XG4gICAgICB7bGF6eSAmJiBmb3JtYXRzICYmIGZvcm1hdHMuYmFzZTY0WzBdICYmIChcbiAgICAgICAgPFBsYWNlaG9sZGVyXG4gICAgICAgICAgYWx0ZXJuYXRpdmVUZXh0PXthbHRlcm5hdGl2ZVRleHR9XG4gICAgICAgICAgYmFzZTY0PXtmb3JtYXRzLmJhc2U2NFswXS51cmx9XG4gICAgICAgICAgb2JqZWN0Rml0PXtvYmplY3RGaXR9XG4gICAgICAgICAgb2JqZWN0UG9zaXRpb249e29iamVjdFBvc2l0aW9ufVxuICAgICAgICAgIGltYWdlTG9hZGVkPXtpbWFnZUxvYWRlZH1cbiAgICAgICAgICBzdHlsZVBsYWNlaG9sZGVyPXtzdHlsZVBsYWNlaG9sZGVyfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHtzaG93ICYmIChcbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgb25Mb2FkPXtoYW5kbGVMb2FkfVxuICAgICAgICAgIHVybD17dXJsfVxuICAgICAgICAgIHNyY1NldFdlYnA9e3NyY1NldFdlYnB9XG4gICAgICAgICAgc3JjU2V0PXtzcmNTZXR9XG4gICAgICAgICAgb2JqZWN0Rml0PXtvYmplY3RGaXR9XG4gICAgICAgICAgb2JqZWN0UG9zaXRpb249e29iamVjdFBvc2l0aW9ufVxuICAgICAgICAgIHByZWZpeD17cHJlZml4fVxuICAgICAgICAgIGFsdGVybmF0aXZlVGV4dD17YWx0ZXJuYXRpdmVUZXh0fVxuICAgICAgICAgIHN0eWxlSW1nPXtzdHlsZUltZ31cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9XcmFwcGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3RTdHJhcGlJbWc7XG5leHBvcnQgeyBUeXBlcyB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.tsx\n");

/***/ })

})