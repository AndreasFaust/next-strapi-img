webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/Image.tsx":
/*!***********************!*\
  !*** ./src/Image.tsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_andreasfaust_web_react_strapi_img_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _useWebp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useWebp */ \"./src/useWebp.ts\");\n/* harmony import */ var _StyledImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StyledImage */ \"./src/StyledImage.tsx\");\n/* harmony import */ var _imageLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./imageLoader */ \"./src/imageLoader.ts\");\n\n\n\nvar _jsxFileName = \"/Users/andreasfaust/web/react-strapi-img/src/Image.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Image = function Image(_ref) {\n  _s();\n\n  var load = _ref.load,\n      src = _ref.src,\n      srcSet = _ref.srcSet,\n      srcSetWebp = _ref.srcSetWebp,\n      objectFit = _ref.objectFit,\n      objectPosition = _ref.objectPosition,\n      alternativeText = _ref.alternativeText,\n      className = _ref.className,\n      styleImg = _ref.styleImg,\n      onDecode = _ref.onDecode,\n      onLoad = _ref.onLoad,\n      onError = _ref.onError;\n  var context = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(Context);\n  var imageLoader = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(new _imageLoader__WEBPACK_IMPORTED_MODULE_5__[\"default\"]());\n  var webp = Object(_useWebp__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(\"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==\"),\n      _React$useState2 = Object(_Users_andreasfaust_web_react_strapi_img_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      source = _React$useState2[0],\n      setSource = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(null),\n      _React$useState4 = Object(_Users_andreasfaust_web_react_strapi_img_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState3, 2),\n      sourceSet = _React$useState4[0],\n      setSourceSet = _React$useState4[1];\n\n  var handleDecode = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(function () {\n    onDecode();\n  }, []);\n  var handleLoad = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(function (event) {\n    onLoad(event);\n  }, []);\n  var handleError = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(function (event) {\n    onError(event);\n  }, []);\n  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {\n    var ImageLoader = imageLoader.current;\n\n    if (load && typeof webp === \"boolean\") {\n      ImageLoader.load(src, webp ? srcSetWebp : srcSet, function () {\n        handleDecode();\n        setSourceSet(webp ? srcSetWebp : srcSet);\n        setSource(src);\n      });\n    }\n\n    return function () {\n      ImageLoader.unload();\n    };\n  }, [webp, load, src, srcSet]);\n  console.log(\"RENDER IMAGE\");\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_StyledImage__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    onLoad: handleLoad,\n    onError: handleError,\n    src: source,\n    srcSet: sourceSet,\n    alt: alternativeText,\n    objectFit: objectFit,\n    objectPosition: objectPosition,\n    styleImg: styleImg,\n    className: className\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 73,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Image, \"tbknulKjamJx/oJyPsFLGWfJ1Go=\", false, function () {\n  return [_useWebp__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n});\n\n_c = Image;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(Image));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Image\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0ltYWdlLnRzeD9mNDJhIl0sIm5hbWVzIjpbIkltYWdlIiwibG9hZCIsInNyYyIsInNyY1NldCIsInNyY1NldFdlYnAiLCJvYmplY3RGaXQiLCJvYmplY3RQb3NpdGlvbiIsImFsdGVybmF0aXZlVGV4dCIsImNsYXNzTmFtZSIsInN0eWxlSW1nIiwib25EZWNvZGUiLCJvbkxvYWQiLCJvbkVycm9yIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJDb250ZXh0IiwiaW1hZ2VMb2FkZXIiLCJSZWFjdCIsInVzZVJlZiIsIkltYWdlTG9hZGVyIiwid2VicCIsInVzZVdlYnAiLCJ1c2VTdGF0ZSIsInNvdXJjZSIsInNldFNvdXJjZSIsInNvdXJjZVNldCIsInNldFNvdXJjZVNldCIsImhhbmRsZURlY29kZSIsInVzZUNhbGxiYWNrIiwiaGFuZGxlTG9hZCIsImV2ZW50IiwiaGFuZGxlRXJyb3IiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwidW5sb2FkIiwiY29uc29sZSIsImxvZyIsIm1lbW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7QUFpQkEsSUFBTUEsS0FBc0IsR0FBRyxTQUF6QkEsS0FBeUIsT0FhekI7QUFBQTs7QUFBQSxNQVpKQyxJQVlJLFFBWkpBLElBWUk7QUFBQSxNQVhKQyxHQVdJLFFBWEpBLEdBV0k7QUFBQSxNQVZKQyxNQVVJLFFBVkpBLE1BVUk7QUFBQSxNQVRKQyxVQVNJLFFBVEpBLFVBU0k7QUFBQSxNQVJKQyxTQVFJLFFBUkpBLFNBUUk7QUFBQSxNQVBKQyxjQU9JLFFBUEpBLGNBT0k7QUFBQSxNQU5KQyxlQU1JLFFBTkpBLGVBTUk7QUFBQSxNQUxKQyxTQUtJLFFBTEpBLFNBS0k7QUFBQSxNQUpKQyxRQUlJLFFBSkpBLFFBSUk7QUFBQSxNQUhKQyxRQUdJLFFBSEpBLFFBR0k7QUFBQSxNQUZKQyxNQUVJLFFBRkpBLE1BRUk7QUFBQSxNQURKQyxPQUNJLFFBREpBLE9BQ0k7QUFDSixNQUFNQyxPQUFPLEdBQUdDLHdEQUFVLENBQUNDLE9BQUQsQ0FBMUI7QUFFQSxNQUFNQyxXQUFXLEdBQUdDLDRDQUFLLENBQUNDLE1BQU4sQ0FBMEIsSUFBSUMsb0RBQUosRUFBMUIsQ0FBcEI7QUFDQSxNQUFNQyxJQUFJLEdBQUdDLHdEQUFPLEVBQXBCOztBQUpJLHdCQUt3QkosNENBQUssQ0FBQ0ssUUFBTixDQUMxQixvRkFEMEIsQ0FMeEI7QUFBQTtBQUFBLE1BS0dDLE1BTEg7QUFBQSxNQUtXQyxTQUxYOztBQUFBLHlCQVE4QlAsNENBQUssQ0FBQ0ssUUFBTixDQUE4QixJQUE5QixDQVI5QjtBQUFBO0FBQUEsTUFRR0csU0FSSDtBQUFBLE1BUWNDLFlBUmQ7O0FBVUosTUFBTUMsWUFBWSxHQUFHViw0Q0FBSyxDQUFDVyxXQUFOLENBQWtCLFlBQU07QUFDM0NsQixZQUFRO0FBQ1QsR0FGb0IsRUFFbEIsRUFGa0IsQ0FBckI7QUFHQSxNQUFNbUIsVUFBVSxHQUFHWiw0Q0FBSyxDQUFDVyxXQUFOLENBQWtCLFVBQUNFLEtBQUQsRUFBVztBQUM5Q25CLFVBQU0sQ0FBQ21CLEtBQUQsQ0FBTjtBQUNELEdBRmtCLEVBRWhCLEVBRmdCLENBQW5CO0FBR0EsTUFBTUMsV0FBVyxHQUFHZCw0Q0FBSyxDQUFDVyxXQUFOLENBQWtCLFVBQUNFLEtBQUQsRUFBVztBQUMvQ2xCLFdBQU8sQ0FBQ2tCLEtBQUQsQ0FBUDtBQUNELEdBRm1CLEVBRWpCLEVBRmlCLENBQXBCO0FBSUFiLDhDQUFLLENBQUNlLFNBQU4sQ0FBZ0IsWUFBTTtBQUNwQixRQUFNYixXQUFXLEdBQUdILFdBQVcsQ0FBQ2lCLE9BQWhDOztBQUVBLFFBQUloQyxJQUFJLElBQUksT0FBT21CLElBQVAsS0FBZ0IsU0FBNUIsRUFBdUM7QUFDckNELGlCQUFXLENBQUNsQixJQUFaLENBQWlCQyxHQUFqQixFQUFzQmtCLElBQUksR0FBR2hCLFVBQUgsR0FBZ0JELE1BQTFDLEVBQWtELFlBQU07QUFDdER3QixvQkFBWTtBQUNaRCxvQkFBWSxDQUFDTixJQUFJLEdBQUdoQixVQUFILEdBQWdCRCxNQUFyQixDQUFaO0FBQ0FxQixpQkFBUyxDQUFDdEIsR0FBRCxDQUFUO0FBQ0QsT0FKRDtBQUtEOztBQUNELFdBQU8sWUFBTTtBQUNYaUIsaUJBQVcsQ0FBQ2UsTUFBWjtBQUNELEtBRkQ7QUFHRCxHQWJELEVBYUcsQ0FBQ2QsSUFBRCxFQUFPbkIsSUFBUCxFQUFhQyxHQUFiLEVBQWtCQyxNQUFsQixDQWJIO0FBZUFnQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaO0FBRUEsc0JBQ0UscUVBQUMsb0RBQUQ7QUFDRSxVQUFNLEVBQUVQLFVBRFY7QUFFRSxXQUFPLEVBQUVFLFdBRlg7QUFHRSxPQUFHLEVBQUVSLE1BSFA7QUFJRSxVQUFNLEVBQUVFLFNBSlY7QUFLRSxPQUFHLEVBQUVsQixlQUxQO0FBTUUsYUFBUyxFQUFFRixTQU5iO0FBT0Usa0JBQWMsRUFBRUMsY0FQbEI7QUFRRSxZQUFRLEVBQUVHLFFBUlo7QUFTRSxhQUFTLEVBQUVEO0FBVGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBYUQsQ0EvREQ7O0dBQU1SLEs7VUFpQlNxQixnRDs7O0tBakJUckIsSztBQWlFUyxrRkFBQWlCLDRDQUFLLENBQUNvQixJQUFOLENBQVdyQyxLQUFYLENBQWYiLCJmaWxlIjoiLi9zcmMvSW1hZ2UudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIFN5bnRoZXRpY0V2ZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBPYmplY3RGaXQgfSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IHVzZVdlYnAgZnJvbSBcIi4vdXNlV2VicFwiO1xuaW1wb3J0IFN0eWxlZEltYWdlIGZyb20gXCIuL1N0eWxlZEltYWdlXCI7XG5pbXBvcnQgSW1hZ2VMb2FkZXIgZnJvbSBcIi4vaW1hZ2VMb2FkZXJcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgbG9hZDogYm9vbGVhbjtcbiAgc3JjOiBzdHJpbmc7XG4gIGNsYXNzTmFtZTogc3RyaW5nO1xuICBzcmNTZXQ/OiBzdHJpbmc7XG4gIHNyY1NldFdlYnA/OiBzdHJpbmc7XG4gIG9iamVjdEZpdD86IE9iamVjdEZpdDtcbiAgb2JqZWN0UG9zaXRpb24/OiBzdHJpbmc7XG4gIGFsdGVybmF0aXZlVGV4dD86IHN0cmluZztcbiAgc3R5bGVJbWc/OiBzdHJpbmc7XG4gIG9uTG9hZD86IChldmVudDogU3ludGhldGljRXZlbnQ8SFRNTEltYWdlRWxlbWVudCwgRXZlbnQ+KSA9PiB2b2lkO1xuICBvbkVycm9yPzogKGV2ZW50OiBTeW50aGV0aWNFdmVudDxIVE1MSW1hZ2VFbGVtZW50LCBFdmVudD4pID0+IHZvaWQ7XG4gIG9uRGVjb2RlOiAoKSA9PiB2b2lkO1xufVxuXG5jb25zdCBJbWFnZTogUmVhY3QuRkM8UHJvcHM+ID0gKHtcbiAgbG9hZCxcbiAgc3JjLFxuICBzcmNTZXQsXG4gIHNyY1NldFdlYnAsXG4gIG9iamVjdEZpdCxcbiAgb2JqZWN0UG9zaXRpb24sXG4gIGFsdGVybmF0aXZlVGV4dCxcbiAgY2xhc3NOYW1lLFxuICBzdHlsZUltZyxcbiAgb25EZWNvZGUsXG4gIG9uTG9hZCxcbiAgb25FcnJvcixcbn0pID0+IHtcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQ29udGV4dCk7XG5cbiAgY29uc3QgaW1hZ2VMb2FkZXIgPSBSZWFjdC51c2VSZWY8SW1hZ2VMb2FkZXI+KG5ldyBJbWFnZUxvYWRlcigpKTtcbiAgY29uc3Qgd2VicCA9IHVzZVdlYnAoKTtcbiAgY29uc3QgW3NvdXJjZSwgc2V0U291cmNlXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oXG4gICAgXCJkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFQLy8vd0FBQUNINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQ1JBRUFPdz09XCJcbiAgKTtcbiAgY29uc3QgW3NvdXJjZVNldCwgc2V0U291cmNlU2V0XSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZURlY29kZSA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBvbkRlY29kZSgpO1xuICB9LCBbXSk7XG4gIGNvbnN0IGhhbmRsZUxvYWQgPSBSZWFjdC51c2VDYWxsYmFjaygoZXZlbnQpID0+IHtcbiAgICBvbkxvYWQoZXZlbnQpO1xuICB9LCBbXSk7XG4gIGNvbnN0IGhhbmRsZUVycm9yID0gUmVhY3QudXNlQ2FsbGJhY2soKGV2ZW50KSA9PiB7XG4gICAgb25FcnJvcihldmVudCk7XG4gIH0sIFtdKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IEltYWdlTG9hZGVyID0gaW1hZ2VMb2FkZXIuY3VycmVudDtcblxuICAgIGlmIChsb2FkICYmIHR5cGVvZiB3ZWJwID09PSBcImJvb2xlYW5cIikge1xuICAgICAgSW1hZ2VMb2FkZXIubG9hZChzcmMsIHdlYnAgPyBzcmNTZXRXZWJwIDogc3JjU2V0LCAoKSA9PiB7XG4gICAgICAgIGhhbmRsZURlY29kZSgpO1xuICAgICAgICBzZXRTb3VyY2VTZXQod2VicCA/IHNyY1NldFdlYnAgOiBzcmNTZXQpO1xuICAgICAgICBzZXRTb3VyY2Uoc3JjKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgSW1hZ2VMb2FkZXIudW5sb2FkKCk7XG4gICAgfTtcbiAgfSwgW3dlYnAsIGxvYWQsIHNyYywgc3JjU2V0XSk7XG5cbiAgY29uc29sZS5sb2coXCJSRU5ERVIgSU1BR0VcIik7XG5cbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkSW1hZ2VcbiAgICAgIG9uTG9hZD17aGFuZGxlTG9hZH1cbiAgICAgIG9uRXJyb3I9e2hhbmRsZUVycm9yfVxuICAgICAgc3JjPXtzb3VyY2V9XG4gICAgICBzcmNTZXQ9e3NvdXJjZVNldH1cbiAgICAgIGFsdD17YWx0ZXJuYXRpdmVUZXh0fVxuICAgICAgb2JqZWN0Rml0PXtvYmplY3RGaXR9XG4gICAgICBvYmplY3RQb3NpdGlvbj17b2JqZWN0UG9zaXRpb259XG4gICAgICBzdHlsZUltZz17c3R5bGVJbWd9XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhJbWFnZSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Image.tsx\n");

/***/ })

})