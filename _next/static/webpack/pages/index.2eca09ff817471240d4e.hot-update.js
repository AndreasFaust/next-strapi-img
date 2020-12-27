webpackHotUpdate_N_E("pages/index",{

/***/ "./src/Image.tsx":
/*!***********************!*\
  !*** ./src/Image.tsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_andreasfaust_web_react_strapi_img_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _useWebp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useWebp */ \"./src/useWebp.ts\");\n/* harmony import */ var _StyledImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StyledImage */ \"./src/StyledImage.tsx\");\n/* harmony import */ var _imageLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./imageLoader */ \"./src/imageLoader.ts\");\n\n\n\nvar _jsxFileName = \"/Users/andreasfaust/web/react-strapi-img/src/Image.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Image = function Image(_ref) {\n  _s();\n\n  var load = _ref.load,\n      src = _ref.src,\n      srcSet = _ref.srcSet,\n      srcSetWebp = _ref.srcSetWebp,\n      objectFit = _ref.objectFit,\n      objectPosition = _ref.objectPosition,\n      alternativeText = _ref.alternativeText,\n      className = _ref.className,\n      styleImg = _ref.styleImg,\n      sizes = _ref.sizes,\n      onDecode = _ref.onDecode,\n      onLoad = _ref.onLoad,\n      onError = _ref.onError;\n  var imageLoader = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(new _imageLoader__WEBPACK_IMPORTED_MODULE_5__[\"default\"]());\n  var webp = Object(_useWebp__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(\"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==\"),\n      _React$useState2 = Object(_Users_andreasfaust_web_react_strapi_img_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      source = _React$useState2[0],\n      setSource = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(null),\n      _React$useState4 = Object(_Users_andreasfaust_web_react_strapi_img_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState3, 2),\n      sourceSet = _React$useState4[0],\n      setSourceSet = _React$useState4[1];\n\n  var handleDecode = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(function () {\n    onDecode();\n  }, []);\n  var handleLoad = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(function (event) {\n    onLoad(event);\n  }, []);\n  var handleError = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(function (event) {\n    onError(event);\n  }, []);\n  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {\n    var ImageLoader = imageLoader.current;\n\n    if (load && typeof webp === \"boolean\") {\n      ImageLoader.load(src, webp ? srcSetWebp : srcSet, function () {\n        handleDecode();\n        setSourceSet(webp ? srcSetWebp : srcSet);\n        setSource(src);\n      });\n    }\n\n    return function () {\n      ImageLoader.unload();\n    };\n  }, [webp, load, src, srcSet]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_StyledImage__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    onLoad: handleLoad,\n    onError: handleError,\n    src: source,\n    srcSet: sourceSet,\n    sizes: sizes,\n    alt: alternativeText,\n    objectFit: objectFit,\n    objectPosition: objectPosition,\n    styleImg: styleImg,\n    className: className\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 71,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Image, \"8LtbBMyQ7nH9lx2x70E3xe9N/W8=\", false, function () {\n  return [_useWebp__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n});\n\n_c = Image;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(Image));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Image\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0ltYWdlLnRzeD9mNDJhIl0sIm5hbWVzIjpbIkltYWdlIiwibG9hZCIsInNyYyIsInNyY1NldCIsInNyY1NldFdlYnAiLCJvYmplY3RGaXQiLCJvYmplY3RQb3NpdGlvbiIsImFsdGVybmF0aXZlVGV4dCIsImNsYXNzTmFtZSIsInN0eWxlSW1nIiwic2l6ZXMiLCJvbkRlY29kZSIsIm9uTG9hZCIsIm9uRXJyb3IiLCJpbWFnZUxvYWRlciIsIlJlYWN0IiwidXNlUmVmIiwiSW1hZ2VMb2FkZXIiLCJ3ZWJwIiwidXNlV2VicCIsInVzZVN0YXRlIiwic291cmNlIiwic2V0U291cmNlIiwic291cmNlU2V0Iiwic2V0U291cmNlU2V0IiwiaGFuZGxlRGVjb2RlIiwidXNlQ2FsbGJhY2siLCJoYW5kbGVMb2FkIiwiZXZlbnQiLCJoYW5kbGVFcnJvciIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJ1bmxvYWQiLCJtZW1vIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7O0FBa0JBLElBQU1BLEtBQXNCLEdBQUcsU0FBekJBLEtBQXlCLE9BY3pCO0FBQUE7O0FBQUEsTUFiSkMsSUFhSSxRQWJKQSxJQWFJO0FBQUEsTUFaSkMsR0FZSSxRQVpKQSxHQVlJO0FBQUEsTUFYSkMsTUFXSSxRQVhKQSxNQVdJO0FBQUEsTUFWSkMsVUFVSSxRQVZKQSxVQVVJO0FBQUEsTUFUSkMsU0FTSSxRQVRKQSxTQVNJO0FBQUEsTUFSSkMsY0FRSSxRQVJKQSxjQVFJO0FBQUEsTUFQSkMsZUFPSSxRQVBKQSxlQU9JO0FBQUEsTUFOSkMsU0FNSSxRQU5KQSxTQU1JO0FBQUEsTUFMSkMsUUFLSSxRQUxKQSxRQUtJO0FBQUEsTUFKSkMsS0FJSSxRQUpKQSxLQUlJO0FBQUEsTUFISkMsUUFHSSxRQUhKQSxRQUdJO0FBQUEsTUFGSkMsTUFFSSxRQUZKQSxNQUVJO0FBQUEsTUFESkMsT0FDSSxRQURKQSxPQUNJO0FBQ0osTUFBTUMsV0FBVyxHQUFHQyw0Q0FBSyxDQUFDQyxNQUFOLENBQTBCLElBQUlDLG9EQUFKLEVBQTFCLENBQXBCO0FBQ0EsTUFBTUMsSUFBSSxHQUFHQyx3REFBTyxFQUFwQjs7QUFGSSx3QkFHd0JKLDRDQUFLLENBQUNLLFFBQU4sQ0FDMUIsb0ZBRDBCLENBSHhCO0FBQUE7QUFBQSxNQUdHQyxNQUhIO0FBQUEsTUFHV0MsU0FIWDs7QUFBQSx5QkFNOEJQLDRDQUFLLENBQUNLLFFBQU4sQ0FBOEIsSUFBOUIsQ0FOOUI7QUFBQTtBQUFBLE1BTUdHLFNBTkg7QUFBQSxNQU1jQyxZQU5kOztBQVFKLE1BQU1DLFlBQVksR0FBR1YsNENBQUssQ0FBQ1csV0FBTixDQUFrQixZQUFNO0FBQzNDZixZQUFRO0FBQ1QsR0FGb0IsRUFFbEIsRUFGa0IsQ0FBckI7QUFHQSxNQUFNZ0IsVUFBVSxHQUFHWiw0Q0FBSyxDQUFDVyxXQUFOLENBQWtCLFVBQUNFLEtBQUQsRUFBVztBQUM5Q2hCLFVBQU0sQ0FBQ2dCLEtBQUQsQ0FBTjtBQUNELEdBRmtCLEVBRWhCLEVBRmdCLENBQW5CO0FBR0EsTUFBTUMsV0FBVyxHQUFHZCw0Q0FBSyxDQUFDVyxXQUFOLENBQWtCLFVBQUNFLEtBQUQsRUFBVztBQUMvQ2YsV0FBTyxDQUFDZSxLQUFELENBQVA7QUFDRCxHQUZtQixFQUVqQixFQUZpQixDQUFwQjtBQUlBYiw4Q0FBSyxDQUFDZSxTQUFOLENBQWdCLFlBQU07QUFDcEIsUUFBTWIsV0FBVyxHQUFHSCxXQUFXLENBQUNpQixPQUFoQzs7QUFFQSxRQUFJOUIsSUFBSSxJQUFJLE9BQU9pQixJQUFQLEtBQWdCLFNBQTVCLEVBQXVDO0FBQ3JDRCxpQkFBVyxDQUFDaEIsSUFBWixDQUFpQkMsR0FBakIsRUFBc0JnQixJQUFJLEdBQUdkLFVBQUgsR0FBZ0JELE1BQTFDLEVBQWtELFlBQU07QUFDdERzQixvQkFBWTtBQUNaRCxvQkFBWSxDQUFDTixJQUFJLEdBQUdkLFVBQUgsR0FBZ0JELE1BQXJCLENBQVo7QUFDQW1CLGlCQUFTLENBQUNwQixHQUFELENBQVQ7QUFDRCxPQUpEO0FBS0Q7O0FBQ0QsV0FBTyxZQUFNO0FBQ1hlLGlCQUFXLENBQUNlLE1BQVo7QUFDRCxLQUZEO0FBR0QsR0FiRCxFQWFHLENBQUNkLElBQUQsRUFBT2pCLElBQVAsRUFBYUMsR0FBYixFQUFrQkMsTUFBbEIsQ0FiSDtBQWVBLHNCQUNFLHFFQUFDLG9EQUFEO0FBQ0UsVUFBTSxFQUFFd0IsVUFEVjtBQUVFLFdBQU8sRUFBRUUsV0FGWDtBQUdFLE9BQUcsRUFBRVIsTUFIUDtBQUlFLFVBQU0sRUFBRUUsU0FKVjtBQUtFLFNBQUssRUFBRWIsS0FMVDtBQU1FLE9BQUcsRUFBRUgsZUFOUDtBQU9FLGFBQVMsRUFBRUYsU0FQYjtBQVFFLGtCQUFjLEVBQUVDLGNBUmxCO0FBU0UsWUFBUSxFQUFFRyxRQVRaO0FBVUUsYUFBUyxFQUFFRDtBQVZiO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWNELENBN0REOztHQUFNUixLO1VBZ0JTbUIsZ0Q7OztLQWhCVG5CLEs7QUErRFMsa0ZBQUFlLDRDQUFLLENBQUNrQixJQUFOLENBQVdqQyxLQUFYLENBQWYiLCJmaWxlIjoiLi9zcmMvSW1hZ2UudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFN5bnRoZXRpY0V2ZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBPYmplY3RGaXQgfSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IHVzZVdlYnAgZnJvbSBcIi4vdXNlV2VicFwiO1xuaW1wb3J0IFN0eWxlZEltYWdlIGZyb20gXCIuL1N0eWxlZEltYWdlXCI7XG5pbXBvcnQgSW1hZ2VMb2FkZXIgZnJvbSBcIi4vaW1hZ2VMb2FkZXJcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgbG9hZDogYm9vbGVhbjtcbiAgc3JjOiBzdHJpbmc7XG4gIGNsYXNzTmFtZTogc3RyaW5nO1xuICBzcmNTZXQ/OiBzdHJpbmc7XG4gIHNyY1NldFdlYnA/OiBzdHJpbmc7XG4gIHNpemVzPzogc3RyaW5nO1xuICBvYmplY3RGaXQ/OiBPYmplY3RGaXQ7XG4gIG9iamVjdFBvc2l0aW9uPzogc3RyaW5nO1xuICBhbHRlcm5hdGl2ZVRleHQ/OiBzdHJpbmc7XG4gIHN0eWxlSW1nPzogc3RyaW5nO1xuICBvbkxvYWQ/OiAoZXZlbnQ6IFN5bnRoZXRpY0V2ZW50PEhUTUxJbWFnZUVsZW1lbnQsIEV2ZW50PikgPT4gdm9pZDtcbiAgb25FcnJvcj86IChldmVudDogU3ludGhldGljRXZlbnQ8SFRNTEltYWdlRWxlbWVudCwgRXZlbnQ+KSA9PiB2b2lkO1xuICBvbkRlY29kZTogKCkgPT4gdm9pZDtcbn1cblxuY29uc3QgSW1hZ2U6IFJlYWN0LkZDPFByb3BzPiA9ICh7XG4gIGxvYWQsXG4gIHNyYyxcbiAgc3JjU2V0LFxuICBzcmNTZXRXZWJwLFxuICBvYmplY3RGaXQsXG4gIG9iamVjdFBvc2l0aW9uLFxuICBhbHRlcm5hdGl2ZVRleHQsXG4gIGNsYXNzTmFtZSxcbiAgc3R5bGVJbWcsXG4gIHNpemVzLFxuICBvbkRlY29kZSxcbiAgb25Mb2FkLFxuICBvbkVycm9yLFxufSkgPT4ge1xuICBjb25zdCBpbWFnZUxvYWRlciA9IFJlYWN0LnVzZVJlZjxJbWFnZUxvYWRlcj4obmV3IEltYWdlTG9hZGVyKCkpO1xuICBjb25zdCB3ZWJwID0gdXNlV2VicCgpO1xuICBjb25zdCBbc291cmNlLCBzZXRTb3VyY2VdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPihcbiAgICBcImRhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFBQVAvLy93QUFBQ0g1QkFFQUFBQUFMQUFBQUFBQkFBRUFBQUlDUkFFQU93PT1cIlxuICApO1xuICBjb25zdCBbc291cmNlU2V0LCBzZXRTb3VyY2VTZXRdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG5cbiAgY29uc3QgaGFuZGxlRGVjb2RlID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIG9uRGVjb2RlKCk7XG4gIH0sIFtdKTtcbiAgY29uc3QgaGFuZGxlTG9hZCA9IFJlYWN0LnVzZUNhbGxiYWNrKChldmVudCkgPT4ge1xuICAgIG9uTG9hZChldmVudCk7XG4gIH0sIFtdKTtcbiAgY29uc3QgaGFuZGxlRXJyb3IgPSBSZWFjdC51c2VDYWxsYmFjaygoZXZlbnQpID0+IHtcbiAgICBvbkVycm9yKGV2ZW50KTtcbiAgfSwgW10pO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgSW1hZ2VMb2FkZXIgPSBpbWFnZUxvYWRlci5jdXJyZW50O1xuXG4gICAgaWYgKGxvYWQgJiYgdHlwZW9mIHdlYnAgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICBJbWFnZUxvYWRlci5sb2FkKHNyYywgd2VicCA/IHNyY1NldFdlYnAgOiBzcmNTZXQsICgpID0+IHtcbiAgICAgICAgaGFuZGxlRGVjb2RlKCk7XG4gICAgICAgIHNldFNvdXJjZVNldCh3ZWJwID8gc3JjU2V0V2VicCA6IHNyY1NldCk7XG4gICAgICAgIHNldFNvdXJjZShzcmMpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBJbWFnZUxvYWRlci51bmxvYWQoKTtcbiAgICB9O1xuICB9LCBbd2VicCwgbG9hZCwgc3JjLCBzcmNTZXRdKTtcblxuICByZXR1cm4gKFxuICAgIDxTdHlsZWRJbWFnZVxuICAgICAgb25Mb2FkPXtoYW5kbGVMb2FkfVxuICAgICAgb25FcnJvcj17aGFuZGxlRXJyb3J9XG4gICAgICBzcmM9e3NvdXJjZX1cbiAgICAgIHNyY1NldD17c291cmNlU2V0fVxuICAgICAgc2l6ZXM9e3NpemVzfVxuICAgICAgYWx0PXthbHRlcm5hdGl2ZVRleHR9XG4gICAgICBvYmplY3RGaXQ9e29iamVjdEZpdH1cbiAgICAgIG9iamVjdFBvc2l0aW9uPXtvYmplY3RQb3NpdGlvbn1cbiAgICAgIHN0eWxlSW1nPXtzdHlsZUltZ31cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgIC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKEltYWdlKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Image.tsx\n");

/***/ })

})