webpackHotUpdate_N_E("pages/index",{

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! exports provided: default, Types */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_andreasfaust_web_react_strapi_img_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _useIntersectionObserver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useIntersectionObserver */ \"./src/useIntersectionObserver.ts\");\n/* harmony import */ var _getSrcSet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getSrcSet */ \"./src/getSrcSet.ts\");\n/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Image */ \"./src/Image.tsx\");\n/* harmony import */ var _Placeholder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Placeholder */ \"./src/Placeholder.tsx\");\n/* harmony import */ var _Wrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Wrapper */ \"./src/Wrapper.tsx\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./storage */ \"./src/storage.ts\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./types */ \"./src/types.ts\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, \"Types\", function() { return _types__WEBPACK_IMPORTED_MODULE_9__; });\n\n\n\nvar _jsxFileName = \"/Users/andreasfaust/web/react-strapi-img/src/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar ReactStrapiImg = function ReactStrapiImg(_ref) {\n  _s();\n\n  var url = _ref.url,\n      formats = _ref.formats,\n      _ref$objectFit = _ref.objectFit,\n      objectFit = _ref$objectFit === void 0 ? \"cover\" : _ref$objectFit,\n      _ref$objectPosition = _ref.objectPosition,\n      objectPosition = _ref$objectPosition === void 0 ? \"center\" : _ref$objectPosition,\n      width = _ref.width,\n      height = _ref.height,\n      proportionalHeight = _ref.proportionalHeight,\n      _ref$rootMargin = _ref.rootMargin,\n      rootMargin = _ref$rootMargin === void 0 ? \"50px\" : _ref$rootMargin,\n      _ref$threshold = _ref.threshold,\n      threshold = _ref$threshold === void 0 ? 0 : _ref$threshold,\n      _ref$alternativeText = _ref.alternativeText,\n      alternativeText = _ref$alternativeText === void 0 ? \"Alternative-Text\" : _ref$alternativeText,\n      _ref$className = _ref.className,\n      className = _ref$className === void 0 ? \"\" : _ref$className,\n      _ref$style = _ref.style,\n      style = _ref$style === void 0 ? null : _ref$style,\n      _ref$stylePlaceholder = _ref.stylePlaceholder,\n      stylePlaceholder = _ref$stylePlaceholder === void 0 ? null : _ref$stylePlaceholder,\n      _ref$styleImg = _ref.styleImg,\n      styleImg = _ref$styleImg === void 0 ? null : _ref$styleImg,\n      _ref$prefix = _ref.prefix,\n      prefix = _ref$prefix === void 0 ? \"\" : _ref$prefix,\n      _ref$lazy = _ref.lazy,\n      lazy = _ref$lazy === void 0 ? true : _ref$lazy;\n  var ref = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(null);\n\n  var _useIntersectionObser = Object(_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n    elementRef: ref,\n    freezeOnceVisible: true,\n    rootMargin: rootMargin,\n    threshold: threshold,\n    disable: !lazy\n  }),\n      _useIntersectionObser2 = Object(_Users_andreasfaust_web_react_strapi_img_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useIntersectionObser, 1),\n      isVisible = _useIntersectionObser2[0];\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),\n      _React$useState2 = Object(_Users_andreasfaust_web_react_strapi_img_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      imageLoaded = _React$useState2[0],\n      setImageLoaded = _React$useState2[1];\n\n  var handleLoad = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(function () {\n    _storage__WEBPACK_IMPORTED_MODULE_8__[\"set\"](url);\n    setImageLoaded(true);\n  }, []);\n  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {\n    if (_storage__WEBPACK_IMPORTED_MODULE_8__[\"get\"](url)) {\n      setImageLoaded(true);\n    }\n  }, []);\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(!lazy),\n      _React$useState4 = Object(_Users_andreasfaust_web_react_strapi_img_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState3, 2),\n      show = _React$useState4[0],\n      setShow = _React$useState4[1];\n\n  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {\n    if (isVisible) {\n      setShow(true);\n    }\n  }, [isVisible]);\n  var srcSetWebp = react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(function () {\n    return Object(_getSrcSet__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n      formats: formats,\n      prefix: prefix,\n      webp: true\n    });\n  }, []);\n  var srcSet = react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(function () {\n    return Object(_getSrcSet__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n      formats: formats,\n      prefix: prefix\n    });\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Wrapper__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    ref: ref,\n    className: className,\n    style: style,\n    width: width,\n    height: height,\n    proportionalHeight: proportionalHeight,\n    children: [formats && formats.base64[0] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Placeholder__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      alternativeText: alternativeText,\n      base64: formats.base64[0].url,\n      objectFit: objectFit,\n      objectPosition: objectPosition,\n      imageLoaded: imageLoaded,\n      stylePlaceholder: stylePlaceholder\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 9\n    }, _this), show && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Image__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      onLoad: handleLoad,\n      url: url,\n      srcSetWebp: srcSetWebp,\n      srcSet: srcSet,\n      objectFit: objectFit,\n      objectPosition: objectPosition,\n      prefix: prefix,\n      alternativeText: alternativeText,\n      styleImg: styleImg\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 65,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ReactStrapiImg, \"Ye8wGrLYPi4mu8Zyw40d7Uc4wSw=\", false, function () {\n  return [_useIntersectionObserver__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n});\n\n_c = ReactStrapiImg;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ReactStrapiImg);\n\n\nvar _c;\n\n$RefreshReg$(_c, \"ReactStrapiImg\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2luZGV4LnRzeD9kOTg2Il0sIm5hbWVzIjpbIlJlYWN0U3RyYXBpSW1nIiwidXJsIiwiZm9ybWF0cyIsIm9iamVjdEZpdCIsIm9iamVjdFBvc2l0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJwcm9wb3J0aW9uYWxIZWlnaHQiLCJyb290TWFyZ2luIiwidGhyZXNob2xkIiwiYWx0ZXJuYXRpdmVUZXh0IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJzdHlsZVBsYWNlaG9sZGVyIiwic3R5bGVJbWciLCJwcmVmaXgiLCJsYXp5IiwicmVmIiwiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVsZW1lbnRSZWYiLCJmcmVlemVPbmNlVmlzaWJsZSIsImRpc2FibGUiLCJpc1Zpc2libGUiLCJ1c2VTdGF0ZSIsImltYWdlTG9hZGVkIiwic2V0SW1hZ2VMb2FkZWQiLCJoYW5kbGVMb2FkIiwidXNlQ2FsbGJhY2siLCJzdG9yYWdlIiwidXNlRWZmZWN0Iiwic2hvdyIsInNldFNob3ciLCJzcmNTZXRXZWJwIiwidXNlTWVtbyIsImdldFNyY1NldCIsIndlYnAiLCJzcmNTZXQiLCJiYXNlNjQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGNBQTBDLEdBQUcsU0FBN0NBLGNBQTZDLE9BaUI3QztBQUFBOztBQUFBLE1BaEJKQyxHQWdCSSxRQWhCSkEsR0FnQkk7QUFBQSxNQWZKQyxPQWVJLFFBZkpBLE9BZUk7QUFBQSw0QkFkSkMsU0FjSTtBQUFBLE1BZEpBLFNBY0ksK0JBZFEsT0FjUjtBQUFBLGlDQWJKQyxjQWFJO0FBQUEsTUFiSkEsY0FhSSxvQ0FiYSxRQWFiO0FBQUEsTUFaSkMsS0FZSSxRQVpKQSxLQVlJO0FBQUEsTUFYSkMsTUFXSSxRQVhKQSxNQVdJO0FBQUEsTUFWSkMsa0JBVUksUUFWSkEs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QUVSLE9BQU8sQ0FBQ3FDLE1BQVIsQ0FBZSxDQUFmLEVBQWtCdEMsR0FGNUI7QUFHRSxlQUFTLEVBQUVFLFNBSGI7QUFJRSxvQkFBYyxFQUFFQyxjQUpsQjtBQUtFLGlCQUFXLEVBQUVzQixXQUxmO0FBTUUsc0JBQWdCLEVBQUViO0FBTnBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFUSixFQWtCR21CLElBQUksaUJBQ0gscUVBQUMsOENBQUQ7QUFDRSxZQUFNLEVBQUVKLFVBRFY7QUFFRSxTQUFHLEVBQUUzQixHQUZQO0FBR0UsZ0JBQVUsRUFBRWlDLFVBSGQ7QUFJRSxZQUFNLEVBQUVJLE1BSlY7QUFLRSxlQUFTLEVBQUVuQyxTQUxiO0FBTUUsb0JBQWMsRUFBRUMsY0FObEI7QUFPRSxZQUFNLEVBQUVXLE1BUFY7QUFRRSxxQkFBZSxFQUFFTCxlQVJuQjtBQVNFLGNBQVEsRUFBRUk7QUFUWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbkJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBa0NELENBdkZEOztHQUFNZCxjO1VBb0JnQm9CLGdFOzs7S0FwQmhCcEIsYztBQXlGU0EsNkVBQWY7QUFDQSIsImZpbGUiOiIuL3NyYy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgZnJvbSBcIi4vdXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcIjtcbmltcG9ydCBnZXRTcmNTZXQgZnJvbSBcIi4vZ2V0U3JjU2V0XCI7XG5cbmltcG9ydCBJbWFnZSBmcm9tIFwiLi9JbWFnZVwiO1xuaW1wb3J0IFBsYWNlaG9sZGVyIGZyb20gXCIuL1BsYWNlaG9sZGVyXCI7XG5pbXBvcnQgV3JhcHBlciBmcm9tIFwiLi9XcmFwcGVyXCI7XG5pbXBvcnQgKiBhcyBzdG9yYWdlIGZyb20gXCIuL3N0b3JhZ2VcIjtcbmltcG9ydCAqIGFzIFR5cGVzIGZyb20gXCIuL3R5cGVzXCI7XG5cbmNvbnN0IFJlYWN0U3RyYXBpSW1nOiBSZWFjdC5GQzxUeXBlcy5JbWFnZVByb3BzPiA9ICh7XG4gIHVybCxcbiAgZm9ybWF0cyxcbiAgb2JqZWN0Rml0ID0gXCJjb3ZlclwiLFxuICBvYmplY3RQb3NpdGlvbiA9IFwiY2VudGVyXCIsXG4gIHdpZHRoLFxuICBoZWlnaHQsXG4gIHByb3BvcnRpb25hbEhlaWdodCxcbiAgcm9vdE1hcmdpbiA9IFwiNTBweFwiLFxuICB0aHJlc2hvbGQgPSAwLFxuICBhbHRlcm5hdGl2ZVRleHQgPSBcIkFsdGVybmF0aXZlLVRleHRcIixcbiAgY2xhc3NOYW1lID0gXCJcIixcbiAgc3R5bGUgPSBudWxsLFxuICBzdHlsZVBsYWNlaG9sZGVyID0gbnVsbCxcbiAgc3R5bGVJbWcgPSBudWxsLFxuICBwcmVmaXggPSBcIlwiLFxuICBsYXp5ID0gdHJ1ZSxcbn0pID0+IHtcbiAgY29uc3QgcmVmID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50IHwgbnVsbD4obnVsbCk7XG5cbiAgY29uc3QgW2lzVmlzaWJsZV0gPSB1c2VJbnRlcnNlY3Rpb25PYnNlcnZlcih7XG4gICAgZWxlbWVudFJlZjogcmVmLFxuICAgIGZyZWV6ZU9uY2VWaXNpYmxlOiB0cnVlLFxuICAgIHJvb3RNYXJnaW4sXG4gICAgdGhyZXNob2xkLFxuICAgIGRpc2FibGU6ICFsYXp5LFxuICB9KTtcblxuICBjb25zdCBbaW1hZ2VMb2FkZWQsIHNldEltYWdlTG9hZGVkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgaGFuZGxlTG9hZCA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzdG9yYWdlLnNldCh1cmwpO1xuICAgIHNldEltYWdlTG9hZGVkKHRydWUpO1xuICB9LCBbXSk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHN0b3JhZ2UuZ2V0KHVybCkpIHtcbiAgICAgIHNldEltYWdlTG9hZGVkKHRydWUpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IFJlYWN0LnVzZVN0YXRlKCFsYXp5KTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpc1Zpc2libGUpIHtcbiAgICAgIHNldFNob3codHJ1ZSk7XG4gICAgfVxuICB9LCBbaXNWaXNpYmxlXSk7XG5cbiAgY29uc3Qgc3JjU2V0V2VicCA9IFJlYWN0LnVzZU1lbW8oXG4gICAgKCkgPT4gZ2V0U3JjU2V0KHsgZm9ybWF0cywgcHJlZml4LCB3ZWJwOiB0cnVlIH0pLFxuICAgIFtdXG4gICk7XG4gIGNvbnN0IHNyY1NldCA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gZ2V0U3JjU2V0KHsgZm9ybWF0cywgcHJlZml4IH0pLCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlclxuICAgICAgcmVmPXtyZWZ9XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgcHJvcG9ydGlvbmFsSGVpZ2h0PXtwcm9wb3J0aW9uYWxIZWlnaHR9XG4gICAgPlxuICAgICAge2Zvcm1hdHMgJiYgZm9ybWF0cy5iYXNlNjRbMF0gJiYgKFxuICAgICAgICA8UGxhY2Vob2xkZXJcbiAgICAgICAgICBhbHRlcm5hdGl2ZVRleHQ9e2FsdGVybmF0aXZlVGV4dH1cbiAgICAgICAgICBiYXNlNjQ9e2Zvcm1hdHMuYmFzZTY0WzBdLnVybH1cbiAgICAgICAgICBvYmplY3RGaXQ9e29iamVjdEZpdH1cbiAgICAgICAgICBvYmplY3RQb3NpdGlvbj17b2JqZWN0UG9zaXRpb259XG4gICAgICAgICAgaW1hZ2VMb2FkZWQ9e2ltYWdlTG9hZGVkfVxuICAgICAgICAgIHN0eWxlUGxhY2Vob2xkZXI9e3N0eWxlUGxhY2Vob2xkZXJ9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAge3Nob3cgJiYgKFxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBvbkxvYWQ9e2hhbmRsZUxvYWR9XG4gICAgICAgICAgdXJsPXt1cmx9XG4gICAgICAgICAgc3JjU2V0V2VicD17c3JjU2V0V2VicH1cbiAgICAgICAgICBzcmNTZXQ9e3NyY1NldH1cbiAgICAgICAgICBvYmplY3RGaXQ9e29iamVjdEZpdH1cbiAgICAgICAgICBvYmplY3RQb3NpdGlvbj17b2JqZWN0UG9zaXRpb259XG4gICAgICAgICAgcHJlZml4PXtwcmVmaXh9XG4gICAgICAgICAgYWx0ZXJuYXRpdmVUZXh0PXthbHRlcm5hdGl2ZVRleHR9XG4gICAgICAgICAgc3R5bGVJbWc9e3N0eWxlSW1nfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8L1dyYXBwZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdFN0cmFwaUltZztcbmV4cG9ydCB7IFR5cGVzIH07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.tsx\n");

/***/ })

})