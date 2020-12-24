webpackHotUpdate_N_E("pages/index",{

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! exports provided: default, Types */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_andreasfaust_web_react_strapi_img_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _useIntersectionObserver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useIntersectionObserver */ \"./src/useIntersectionObserver.ts\");\n/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Image */ \"./src/Image.tsx\");\n/* harmony import */ var _Placeholder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Placeholder */ \"./src/Placeholder.tsx\");\n/* harmony import */ var _Wrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Wrapper */ \"./src/Wrapper.tsx\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./types */ \"./src/types.ts\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, \"Types\", function() { return _types__WEBPACK_IMPORTED_MODULE_7__; });\n\n\n\nvar _jsxFileName = \"/Users/andreasfaust/web/react-strapi-img/src/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar ReactStrapiImg = function ReactStrapiImg(_ref) {\n  _s();\n\n  var url = _ref.url,\n      formats = _ref.formats,\n      _ref$objectFit = _ref.objectFit,\n      objectFit = _ref$objectFit === void 0 ? \"cover\" : _ref$objectFit,\n      _ref$objectPosition = _ref.objectPosition,\n      objectPosition = _ref$objectPosition === void 0 ? \"center\" : _ref$objectPosition,\n      width = _ref.width,\n      height = _ref.height,\n      proportionalHeight = _ref.proportionalHeight,\n      _ref$rootMargin = _ref.rootMargin,\n      rootMargin = _ref$rootMargin === void 0 ? \"50px\" : _ref$rootMargin,\n      _ref$threshold = _ref.threshold,\n      threshold = _ref$threshold === void 0 ? 0 : _ref$threshold,\n      _ref$alternativeText = _ref.alternativeText,\n      alternativeText = _ref$alternativeText === void 0 ? \"Alternative-Text\" : _ref$alternativeText,\n      _ref$className = _ref.className,\n      className = _ref$className === void 0 ? \"\" : _ref$className,\n      _ref$style = _ref.style,\n      style = _ref$style === void 0 ? null : _ref$style,\n      _ref$stylePlaceholder = _ref.stylePlaceholder,\n      stylePlaceholder = _ref$stylePlaceholder === void 0 ? null : _ref$stylePlaceholder,\n      _ref$styleImg = _ref.styleImg,\n      styleImg = _ref$styleImg === void 0 ? null : _ref$styleImg,\n      _ref$prefix = _ref.prefix,\n      prefix = _ref$prefix === void 0 ? \"\" : _ref$prefix,\n      _ref$cache = _ref.cache,\n      cache = _ref$cache === void 0 ? true : _ref$cache;\n  var ref = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(null);\n\n  var _useIntersectionObser = Object(_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n    elementRef: ref,\n    freezeOnceVisible: true,\n    rootMargin: rootMargin,\n    threshold: threshold\n  }),\n      _useIntersectionObser2 = Object(_Users_andreasfaust_web_react_strapi_img_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useIntersectionObser, 1),\n      isVisible = _useIntersectionObser2[0];\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),\n      _React$useState2 = Object(_Users_andreasfaust_web_react_strapi_img_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      imageLoaded = _React$useState2[0],\n      setImageLoaded = _React$useState2[1];\n\n  function onLoad() {\n    // if (cache) {\n    //   storage.set(url);\n    // }\n    setImageLoaded(true);\n  }\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),\n      _React$useState4 = Object(_Users_andreasfaust_web_react_strapi_img_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState3, 2),\n      show = _React$useState4[0],\n      setShow = _React$useState4[1]; // const [cached, setCached] = React.useState(false);\n  // React.useEffect(() => {\n  //   // call storage in useEffect, to ensure it happens on client\n  //   // if (cache && storage.get(url)) {\n  //     // setCached(true);\n  //     setShow(true);\n  //   }\n  // }, []);\n\n\n  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {\n    if (isVisible) {\n      setShow(true);\n    }\n  }, [isVisible]);\n  var srcSetWebp = react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(function () {\n    return getSrcSet({\n      formats: formats,\n      prefix: prefix,\n      webp: true\n    });\n  }, []);\n  var srcSet = react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(function () {\n    return getSrcSet({\n      formats: formats,\n      prefix: prefix\n    });\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Wrapper__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    ref: ref,\n    className: className,\n    style: style,\n    width: width,\n    height: height,\n    proportionalHeight: proportionalHeight,\n    children: [formats && formats.base64[0] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Placeholder__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      alternativeText: alternativeText,\n      base64: formats.base64[0].url,\n      objectFit: objectFit,\n      objectPosition: objectPosition,\n      imageLoaded: imageLoaded,\n      stylePlaceholder: stylePlaceholder\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 9\n    }, _this), show && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Image__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      onLoad: onLoad,\n      url: url,\n      formats: formats,\n      objectFit: objectFit,\n      objectPosition: objectPosition,\n      prefix: prefix,\n      alternativeText: alternativeText,\n      styleImg: styleImg\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 69,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ReactStrapiImg, \"bRrx03qS/MlYU5IQKYkToFMCD00=\", false, function () {\n  return [_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n});\n\n_c = ReactStrapiImg;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ReactStrapiImg);\n\n\nvar _c;\n\n$RefreshReg$(_c, \"ReactStrapiImg\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2luZGV4LnRzeD9kOTg2Il0sIm5hbWVzIjpbIlJlYWN0U3RyYXBpSW1nIiwidXJsIiwiZm9ybWF0cyIsIm9iamVjdEZpdCIsIm9iamVjdFBvc2l0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJwcm9wb3J0aW9uYWxIZWlnaHQiLCJyb290TWFyZ2luIiwidGhyZXNob2xkIiwiYWx0ZXJuYXRpdmVUZXh0IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJzdHlsZVBsYWNlaG9sZGVyIiwic3R5bGVJbWciLCJwcmVmaXgiLCJjYWNoZSIsInJlZiIsIlJlYWN0IiwidXNlUmVmIiwidXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbGVtZW50UmVmIiwiZnJlZXplT25jZVZpc2libGUiLCJpc1Zpc2libGUiLCJ1c2VTdGF0ZSIsImltYWdlTG9hZGVkIiwic2V0SW1hZ2VMb2FkZWQiLCJvbkxvYWQiLCJzaG93Iiwic2V0U2hvdyIsInVzZUVmZmVjdCIsInNyY1NldFdlYnAiLCJ1c2VNZW1vIiwiZ2V0U3JjU2V0Iiwid2VicCIsInNyY1NldCIsImJhc2U2NCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsY0FBMEMsR0FBRyxTQUE3Q0EsY0FBNkMsT0FpQjdDO0FBQUE7O0FBQUEsTUFoQkpDLEdBZ0JJLFFBaEJKQSxHQWdCSTtBQUFBLE1BZkpDLE9BZUksUUFmSkEsT0FlSTtBQUFBLDRCQWRKQyxTQWNJO0FBQUEsTUFkSkEsU0FjSSwrQkFkUSxPQWNSO0FBQUEsaUNBYkpDLGNBYUk7QUFBQSxNQWJKQSxjQWFJLG9DQWJhLFFBYWI7QUFBQSxNQVpKQyxLQVlJLFFBWkpBLEtBWUk7QUFBQSxNQVhKQyxNQVdJLFFBWEpBLE1BV0k7QUFBQSxNQVZKQyxrQkFVSSxRQVZKQSxrQkFVSTtBQUFBLDZCQVRKQyxVQVNJO0FBQUEsTUFUSkEsVUFTSSxnQ0FUUyxNQVNU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QUFPLEVBQUVDLE9BSFg7QUFJRSxlQUFTLEVBQUVDLFNBSmI7QUFLRSxvQkFBYyxFQUFFQyxjQUxsQjtBQU1FLFlBQU0sRUFBRVcsTUFOVjtBQU9FLHFCQUFlLEVBQUVMLGVBUG5CO0FBUUUsY0FBUSxFQUFFSTtBQVJaO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFuQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFpQ0QsQ0EzRkQ7O0dBQU1kLGM7VUFvQmdCb0IsZ0U7OztLQXBCaEJwQixjO0FBNkZTQSw2RUFBZjtBQUNBIiwiZmlsZSI6Ii4vc3JjL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1c2VJbnRlcnNlY3Rpb25PYnNlcnZlciBmcm9tIFwiLi91c2VJbnRlcnNlY3Rpb25PYnNlcnZlclwiO1xuXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIi4vSW1hZ2VcIjtcbmltcG9ydCBQbGFjZWhvbGRlciBmcm9tIFwiLi9QbGFjZWhvbGRlclwiO1xuaW1wb3J0IFdyYXBwZXIgZnJvbSBcIi4vV3JhcHBlclwiO1xuaW1wb3J0ICogYXMgc3RvcmFnZSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5pbXBvcnQgKiBhcyBUeXBlcyBmcm9tIFwiLi90eXBlc1wiO1xuXG5jb25zdCBSZWFjdFN0cmFwaUltZzogUmVhY3QuRkM8VHlwZXMuSW1hZ2VQcm9wcz4gPSAoe1xuICB1cmwsXG4gIGZvcm1hdHMsXG4gIG9iamVjdEZpdCA9IFwiY292ZXJcIixcbiAgb2JqZWN0UG9zaXRpb24gPSBcImNlbnRlclwiLFxuICB3aWR0aCxcbiAgaGVpZ2h0LFxuICBwcm9wb3J0aW9uYWxIZWlnaHQsXG4gIHJvb3RNYXJnaW4gPSBcIjUwcHhcIixcbiAgdGhyZXNob2xkID0gMCxcbiAgYWx0ZXJuYXRpdmVUZXh0ID0gXCJBbHRlcm5hdGl2ZS1UZXh0XCIsXG4gIGNsYXNzTmFtZSA9IFwiXCIsXG4gIHN0eWxlID0gbnVsbCxcbiAgc3R5bGVQbGFjZWhvbGRlciA9IG51bGwsXG4gIHN0eWxlSW1nID0gbnVsbCxcbiAgcHJlZml4ID0gXCJcIixcbiAgY2FjaGUgPSB0cnVlLFxufSkgPT4ge1xuICBjb25zdCByZWYgPSBSZWFjdC51c2VSZWY8SFRNTERpdkVsZW1lbnQgfCBudWxsPihudWxsKTtcblxuICBjb25zdCBbaXNWaXNpYmxlXSA9IHVzZUludGVyc2VjdGlvbk9ic2VydmVyKHtcbiAgICBlbGVtZW50UmVmOiByZWYsXG4gICAgZnJlZXplT25jZVZpc2libGU6IHRydWUsXG4gICAgcm9vdE1hcmdpbixcbiAgICB0aHJlc2hvbGQsXG4gIH0pO1xuXG4gIGNvbnN0IFtpbWFnZUxvYWRlZCwgc2V0SW1hZ2VMb2FkZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgLy8gaWYgKGNhY2hlKSB7XG4gICAgLy8gICBzdG9yYWdlLnNldCh1cmwpO1xuICAgIC8vIH1cbiAgICBzZXRJbWFnZUxvYWRlZCh0cnVlKTtcbiAgfVxuXG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgLy8gY29uc3QgW2NhY2hlZCwgc2V0Q2FjaGVkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICAvLyBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIC8vIGNhbGwgc3RvcmFnZSBpbiB1c2VFZmZlY3QsIHRvIGVuc3VyZSBpdCBoYXBwZW5zIG9uIGNsaWVudFxuICAvLyAgIC8vIGlmIChjYWNoZSAmJiBzdG9yYWdlLmdldCh1cmwpKSB7XG4gIC8vICAgICAvLyBzZXRDYWNoZWQodHJ1ZSk7XG4gIC8vICAgICBzZXRTaG93KHRydWUpO1xuICAvLyAgIH1cbiAgLy8gfSwgW10pO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzVmlzaWJsZSkge1xuICAgICAgc2V0U2hvdyh0cnVlKTtcbiAgICB9XG4gIH0sIFtpc1Zpc2libGVdKTtcblxuICBjb25zdCBzcmNTZXRXZWJwID0gUmVhY3QudXNlTWVtbyhcbiAgICAoKSA9PiBnZXRTcmNTZXQoeyBmb3JtYXRzLCBwcmVmaXgsIHdlYnA6IHRydWUgfSksXG4gICAgW11cbiAgKTtcbiAgY29uc3Qgc3JjU2V0ID0gUmVhY3QudXNlTWVtbygoKSA9PiBnZXRTcmNTZXQoeyBmb3JtYXRzLCBwcmVmaXggfSksIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxXcmFwcGVyXG4gICAgICByZWY9e3JlZn1cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICBwcm9wb3J0aW9uYWxIZWlnaHQ9e3Byb3BvcnRpb25hbEhlaWdodH1cbiAgICA+XG4gICAgICB7Zm9ybWF0cyAmJiBmb3JtYXRzLmJhc2U2NFswXSAmJiAoXG4gICAgICAgIDxQbGFjZWhvbGRlclxuICAgICAgICAgIGFsdGVybmF0aXZlVGV4dD17YWx0ZXJuYXRpdmVUZXh0fVxuICAgICAgICAgIGJhc2U2ND17Zm9ybWF0cy5iYXNlNjRbMF0udXJsfVxuICAgICAgICAgIG9iamVjdEZpdD17b2JqZWN0Rml0fVxuICAgICAgICAgIG9iamVjdFBvc2l0aW9uPXtvYmplY3RQb3NpdGlvbn1cbiAgICAgICAgICBpbWFnZUxvYWRlZD17aW1hZ2VMb2FkZWR9XG4gICAgICAgICAgc3R5bGVQbGFjZWhvbGRlcj17c3R5bGVQbGFjZWhvbGRlcn1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICB7c2hvdyAmJiAoXG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIG9uTG9hZD17b25Mb2FkfVxuICAgICAgICAgIHVybD17dXJsfVxuICAgICAgICAgIGZvcm1hdHM9e2Zvcm1hdHN9XG4gICAgICAgICAgb2JqZWN0Rml0PXtvYmplY3RGaXR9XG4gICAgICAgICAgb2JqZWN0UG9zaXRpb249e29iamVjdFBvc2l0aW9ufVxuICAgICAgICAgIHByZWZpeD17cHJlZml4fVxuICAgICAgICAgIGFsdGVybmF0aXZlVGV4dD17YWx0ZXJuYXRpdmVUZXh0fVxuICAgICAgICAgIHN0eWxlSW1nPXtzdHlsZUltZ31cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9XcmFwcGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3RTdHJhcGlJbWc7XG5leHBvcnQgeyBUeXBlcyB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.tsx\n");

/***/ })

})