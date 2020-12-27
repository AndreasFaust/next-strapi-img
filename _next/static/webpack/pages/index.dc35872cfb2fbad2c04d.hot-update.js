webpackHotUpdate_N_E("pages/index",{

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! exports provided: default, Types */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_andreasfaust_web_react_strapi_img_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _useIntersectionObserver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useIntersectionObserver */ \"./src/useIntersectionObserver.ts\");\n/* harmony import */ var _getSrcSets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getSrcSets */ \"./src/getSrcSets.ts\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./context */ \"./src/context.ts\");\n/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Image */ \"./src/Image.tsx\");\n/* harmony import */ var _StyledImage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./StyledImage */ \"./src/StyledImage.tsx\");\n/* harmony import */ var _Placeholder__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Placeholder */ \"./src/Placeholder.tsx\");\n/* harmony import */ var _Wrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Wrapper */ \"./src/Wrapper.tsx\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./types */ \"./src/types.ts\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, \"Types\", function() { return _types__WEBPACK_IMPORTED_MODULE_10__; });\n\n\n\nvar _jsxFileName = \"/Users/andreasfaust/web/react-strapi-img/src/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar ReactStrapiImg = function ReactStrapiImg(_ref) {\n  _s();\n\n  var url = _ref.url,\n      formats = _ref.formats,\n      _ref$objectFit = _ref.objectFit,\n      objectFit = _ref$objectFit === void 0 ? \"cover\" : _ref$objectFit,\n      _ref$objectPosition = _ref.objectPosition,\n      objectPosition = _ref$objectPosition === void 0 ? \"center\" : _ref$objectPosition,\n      width = _ref.width,\n      height = _ref.height,\n      proportionalHeight = _ref.proportionalHeight,\n      _ref$rootMargin = _ref.rootMargin,\n      rootMargin = _ref$rootMargin === void 0 ? \"50px\" : _ref$rootMargin,\n      _ref$threshold = _ref.threshold,\n      threshold = _ref$threshold === void 0 ? 0 : _ref$threshold,\n      _ref$alternativeText = _ref.alternativeText,\n      alternativeText = _ref$alternativeText === void 0 ? \"Alternative-Text\" : _ref$alternativeText,\n      _ref$className = _ref.className,\n      className = _ref$className === void 0 ? \"\" : _ref$className,\n      _ref$style = _ref.style,\n      style = _ref$style === void 0 ? null : _ref$style,\n      _ref$stylePlaceholder = _ref.stylePlaceholder,\n      stylePlaceholder = _ref$stylePlaceholder === void 0 ? null : _ref$stylePlaceholder,\n      _ref$styleImg = _ref.styleImg,\n      styleImg = _ref$styleImg === void 0 ? null : _ref$styleImg,\n      _ref$prefix = _ref.prefix,\n      prefix = _ref$prefix === void 0 ? \"\" : _ref$prefix,\n      onLoad = _ref.onLoad,\n      onError = _ref.onError;\n  var context = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_context__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n  var isDecoded = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(false);\n  var srcSet = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useMemo\"])(function () {\n    return Object(_getSrcSets__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(formats, prefix);\n  }, []);\n  var filename = url ? url.replace(/^.*[\\\\/]/, \"\").split(\".\")[0] : \"\";\n  var ref = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n\n  var _useIntersectionObser = Object(_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n    elementRef: ref,\n    freezeOnceVisible: true,\n    rootMargin: rootMargin,\n    threshold: threshold\n  }),\n      _useIntersectionObser2 = Object(_Users_andreasfaust_web_react_strapi_img_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useIntersectionObser, 1),\n      isVisible = _useIntersectionObser2[0];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      imageLoaded = _useState[0],\n      setImageLoaded = _useState[1];\n\n  var handleDecode = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    isDecoded.current = true;\n  }, []);\n  var handleLoad = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function (event) {\n    if (isDecoded.current) {\n      setImageLoaded(true);\n      if (onLoad) onLoad(event);\n    }\n  }, []);\n  var handleError = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function (event) {\n    if (onError) onError(event);\n  }, []);\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      loadImage = _useState2[0],\n      setLoadImage = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (isVisible) {\n      setLoadImage(true);\n    }\n  }, [isVisible]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Wrapper__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    ref: ref,\n    className: className,\n    style: style,\n    width: width,\n    height: height,\n    proportionalHeight: proportionalHeight,\n    children: [formats && formats.base64 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Placeholder__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n      url: url,\n      base64: formats.base64.url,\n      objectFit: objectFit,\n      objectPosition: objectPosition,\n      imageLoaded: imageLoaded,\n      stylePlaceholder: stylePlaceholder\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Image__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      onLoad: handleLoad,\n      onError: handleError,\n      onDecode: handleDecode,\n      load: loadImage,\n      src: prefix + url,\n      srcSet: srcSet.regular,\n      srcSetWebp: srcSet.webp,\n      objectFit: objectFit,\n      objectPosition: objectPosition,\n      alternativeText: alternativeText,\n      styleImg: styleImg,\n      className: \"no-js-\".concat(filename)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"noscript\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"style\", {\n        children: \".no-js-\".concat(filename, \" { display: none !important; }\")\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 109,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_StyledImage__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        src: prefix + url,\n        alt: alternativeText,\n        objectFit: objectFit,\n        objectPosition: objectPosition,\n        styleImg: styleImg\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 110,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 76,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ReactStrapiImg, \"sfMiqRUz/r0d34B7UvKw/VSZI2M=\", false, function () {\n  return [_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n});\n\n_c = ReactStrapiImg;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ReactStrapiImg);\n\n\nvar _c;\n\n$RefreshReg$(_c, \"ReactStrapiImg\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2luZGV4LnRzeD9kOTg2Il0sIm5hbWVzIjpbIlJlYWN0U3RyYXBpSW1nIiwidXJsIiwiZm9ybWF0cyIsIm9iamVjdEZpdCIsIm9iamVjdFBvc2l0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJwcm9wb3J0aW9uYWxIZWlnaHQiLCJyb290TWFyZ2luIiwidGhyZXNob2xkIiwiYWx0ZXJuYXRpdmVUZXh0IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJzdHlsZVBsYWNlaG9sZGVyIiwic3R5bGVJbWciLCJwcmVmaXgiLCJvbkxvYWQiLCJvbkVycm9yIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJDb250ZXh0IiwiaXNEZWNvZGVkIiwidXNlUmVmIiwic3JjU2V0IiwidXNlTWVtbyIsImdldFNyY1NldHMiLCJmaWxlbmFtZSIsInJlcGxhY2UiLCJzcGxpdCIsInJlZiIsInVzZUludGVyc2VjdGlvbk9ic2VydmVyIiwiZWxlbWVudFJlZiIsImZyZWV6ZU9uY2VWaXNpYmxlIiwiaXNWaXNpYmxlIiwidXNlU3RhdGUiLCJpbWFnZUxvYWRlZCIsInNldEltYWdlTG9hZGVkIiwiaGFuZGxlRGVjb2RlIiwidXNlQ2FsbGJhY2siLCJjdXJyZW50IiwiaGFuZGxlTG9hZCIsImV2ZW50IiwiaGFuZGxlRXJyb3IiLCJsb2FkSW1hZ2UiLCJzZXRMb2FkSW1hZ2UiLCJ1c2VFZmZlY3QiLCJiYXNlNjQiLCJyZWd1bGFyIiwid2VicCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsY0FBMEMsR0FBRyxTQUE3Q0EsY0FBNkMsT0FrQjdDO0FBQUE7O0FBQUEsTUFqQkpDLEdBaUJJLFFBakJKQSxHQWlCSTtBQUFBLE1BaEJKQyxPQWdCSSxRQWhCSkEsT0FnQkk7QUFBQSw0QkFmSkMsU0FlSTtBQUFBLE1BZkpBLFNBZUksK0JBZlEsT0Fl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O0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBaENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNkNELENBcEdEOztHQUFNZCxjO1VBMEJnQjhCLGdFOzs7S0ExQmhCOUIsYztBQXNHU0EsNkVBQWY7QUFDQSIsImZpbGUiOiIuL3NyYy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICB1c2VDb250ZXh0LFxuICB1c2VNZW1vLFxuICB1c2VFZmZlY3QsXG4gIHVzZVJlZixcbiAgdXNlQ2FsbGJhY2ssXG4gIHVzZVN0YXRlLFxufSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1c2VJbnRlcnNlY3Rpb25PYnNlcnZlciBmcm9tIFwiLi91c2VJbnRlcnNlY3Rpb25PYnNlcnZlclwiO1xuaW1wb3J0IGdldFNyY1NldHMgZnJvbSBcIi4vZ2V0U3JjU2V0c1wiO1xuaW1wb3J0IENvbnRleHQgZnJvbSBcIi4vY29udGV4dFwiO1xuXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIi4vSW1hZ2VcIjtcbmltcG9ydCBTdHlsZWRJbWFnZSBmcm9tIFwiLi9TdHlsZWRJbWFnZVwiO1xuaW1wb3J0IFBsYWNlaG9sZGVyIGZyb20gXCIuL1BsYWNlaG9sZGVyXCI7XG5pbXBvcnQgV3JhcHBlciBmcm9tIFwiLi9XcmFwcGVyXCI7XG5pbXBvcnQgKiBhcyBUeXBlcyBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IEltYWdlUHJvdmlkZXIgZnJvbSBcIi4vSW1hZ2VQcm92aWRlclwiO1xuXG5jb25zdCBSZWFjdFN0cmFwaUltZzogUmVhY3QuRkM8VHlwZXMuSW1hZ2VQcm9wcz4gPSAoe1xuICB1cmwsXG4gIGZvcm1hdHMsXG4gIG9iamVjdEZpdCA9IFwiY292ZXJcIixcbiAgb2JqZWN0UG9zaXRpb24gPSBcImNlbnRlclwiLFxuICB3aWR0aCxcbiAgaGVpZ2h0LFxuICBwcm9wb3J0aW9uYWxIZWlnaHQsXG4gIHJvb3RNYXJnaW4gPSBcIjUwcHhcIixcbiAgdGhyZXNob2xkID0gMCxcbiAgYWx0ZXJuYXRpdmVUZXh0ID0gXCJBbHRlcm5hdGl2ZS1UZXh0XCIsXG4gIGNsYXNzTmFtZSA9IFwiXCIsXG4gIHN0eWxlID0gbnVsbCxcbiAgc3R5bGVQbGFjZWhvbGRlciA9IG51bGwsXG4gIHN0eWxlSW1nID0gbnVsbCxcbiAgcHJlZml4ID0gXCJcIixcbiAgb25Mb2FkLFxuICBvbkVycm9yLFxufSkgPT4ge1xuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChDb250ZXh0KTtcblxuICBjb25zdCBpc0RlY29kZWQgPSB1c2VSZWY8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBzcmNTZXQgPSB1c2VNZW1vKCgpID0+IGdldFNyY1NldHMoZm9ybWF0cywgcHJlZml4KSwgW10pO1xuICBjb25zdCBmaWxlbmFtZSA9IHVybCA/IHVybC5yZXBsYWNlKC9eLipbXFxcXC9dLywgXCJcIikuc3BsaXQoXCIuXCIpWzBdIDogXCJcIjtcblxuICBjb25zdCByZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2lzVmlzaWJsZV0gPSB1c2VJbnRlcnNlY3Rpb25PYnNlcnZlcih7XG4gICAgZWxlbWVudFJlZjogcmVmLFxuICAgIGZyZWV6ZU9uY2VWaXNpYmxlOiB0cnVlLFxuICAgIHJvb3RNYXJnaW4sXG4gICAgdGhyZXNob2xkLFxuICB9KTtcblxuICBjb25zdCBbaW1hZ2VMb2FkZWQsIHNldEltYWdlTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgaGFuZGxlRGVjb2RlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlzRGVjb2RlZC5jdXJyZW50ID0gdHJ1ZTtcbiAgfSwgW10pO1xuICBjb25zdCBoYW5kbGVMb2FkID0gdXNlQ2FsbGJhY2soKGV2ZW50KSA9PiB7XG4gICAgaWYgKGlzRGVjb2RlZC5jdXJyZW50KSB7XG4gICAgICBzZXRJbWFnZUxvYWRlZCh0cnVlKTtcbiAgICAgIGlmIChvbkxvYWQpIG9uTG9hZChldmVudCk7XG4gICAgfVxuICB9LCBbXSk7XG4gIGNvbnN0IGhhbmRsZUVycm9yID0gdXNlQ2FsbGJhY2soKGV2ZW50KSA9PiB7XG4gICAgaWYgKG9uRXJyb3IpIG9uRXJyb3IoZXZlbnQpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgW2xvYWRJbWFnZSwgc2V0TG9hZEltYWdlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpc1Zpc2libGUpIHtcbiAgICAgIHNldExvYWRJbWFnZSh0cnVlKTtcbiAgICB9XG4gIH0sIFtpc1Zpc2libGVdKTtcblxuICByZXR1cm4gKFxuICAgIDxXcmFwcGVyXG4gICAgICByZWY9e3JlZn1cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICBwcm9wb3J0aW9uYWxIZWlnaHQ9e3Byb3BvcnRpb25hbEhlaWdodH1cbiAgICA+XG4gICAgICB7Zm9ybWF0cyAmJiBmb3JtYXRzLmJhc2U2NCAmJiAoXG4gICAgICAgIDxQbGFjZWhvbGRlclxuICAgICAgICAgIHVybD17dXJsfVxuICAgICAgICAgIGJhc2U2ND17Zm9ybWF0cy5iYXNlNjQudXJsfVxuICAgICAgICAgIG9iamVjdEZpdD17b2JqZWN0Rml0fVxuICAgICAgICAgIG9iamVjdFBvc2l0aW9uPXtvYmplY3RQb3NpdGlvbn1cbiAgICAgICAgICBpbWFnZUxvYWRlZD17aW1hZ2VMb2FkZWR9XG4gICAgICAgICAgc3R5bGVQbGFjZWhvbGRlcj17c3R5bGVQbGFjZWhvbGRlcn1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICA8SW1hZ2VcbiAgICAgICAgb25Mb2FkPXtoYW5kbGVMb2FkfVxuICAgICAgICBvbkVycm9yPXtoYW5kbGVFcnJvcn1cbiAgICAgICAgb25EZWNvZGU9e2hhbmRsZURlY29kZX1cbiAgICAgICAgbG9hZD17bG9hZEltYWdlfVxuICAgICAgICBzcmM9e3ByZWZpeCArIHVybH1cbiAgICAgICAgc3JjU2V0PXtzcmNTZXQucmVndWxhcn1cbiAgICAgICAgc3JjU2V0V2VicD17c3JjU2V0LndlYnB9XG4gICAgICAgIG9iamVjdEZpdD17b2JqZWN0Rml0fVxuICAgICAgICBvYmplY3RQb3NpdGlvbj17b2JqZWN0UG9zaXRpb259XG4gICAgICAgIGFsdGVybmF0aXZlVGV4dD17YWx0ZXJuYXRpdmVUZXh0fVxuICAgICAgICBzdHlsZUltZz17c3R5bGVJbWd9XG4gICAgICAgIGNsYXNzTmFtZT17YG5vLWpzLSR7ZmlsZW5hbWV9YH1cbiAgICAgIC8+XG4gICAgICA8bm9zY3JpcHQ+XG4gICAgICAgIDxzdHlsZT57YC5uby1qcy0ke2ZpbGVuYW1lfSB7IGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfWB9PC9zdHlsZT5cbiAgICAgICAgPFN0eWxlZEltYWdlXG4gICAgICAgICAgc3JjPXtwcmVmaXggKyB1cmx9XG4gICAgICAgICAgYWx0PXthbHRlcm5hdGl2ZVRleHR9XG4gICAgICAgICAgb2JqZWN0Rml0PXtvYmplY3RGaXR9XG4gICAgICAgICAgb2JqZWN0UG9zaXRpb249e29iamVjdFBvc2l0aW9ufVxuICAgICAgICAgIHN0eWxlSW1nPXtzdHlsZUltZ31cbiAgICAgICAgLz5cbiAgICAgIDwvbm9zY3JpcHQ+XG4gICAgPC9XcmFwcGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3RTdHJhcGlJbWc7XG5leHBvcnQgeyBUeXBlcyB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.tsx\n");

/***/ })

})