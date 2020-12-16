webpackHotUpdate_N_E("pages/index",{

/***/ "./utils/getImage.ts":
/*!***************************!*\
  !*** ./utils/getImage.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getImage; });\nfunction getFormats(url, base64) {\n  var formats = {};\n\n  for (var i = 500; i <= 3000; i += 250) {\n    formats[i] = [{\n      url: \"/\".concat(i, \"_\").concat(url)\n    }, {\n      url: \"/\".concat(i, \"_\").concat(url).replace(\".jpg\", \".webp\")\n    }];\n  }\n\n  formats[\"base64\"] = [{\n    url: base64\n  }];\n  return formats;\n}\n\nfunction getImage(url, base64) {\n  return {\n    url: url,\n    alternativeText: \"This is \".concat(url),\n    formats: getFormats(url, base64)\n  };\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvZ2V0SW1hZ2UudHM/NmRmMyJdLCJuYW1lcyI6WyJnZXRGb3JtYXRzIiwidXJsIiwiYmFzZTY0IiwiZm9ybWF0cyIsImkiLCJyZXBsYWNlIiwiZ2V0SW1hZ2UiLCJhbHRlcm5hdGl2ZVRleHQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQSxTQUFTQSxVQUFULENBQW9CQyxHQUFwQixFQUFpQ0MsTUFBakMsRUFBaUQ7QUFDL0MsTUFBTUMsT0FBTyxHQUFHLEVBQWhCOztBQUNBLE9BQUssSUFBSUMsQ0FBQyxHQUFHLEdBQWIsRUFBa0JBLENBQUMsSUFBSSxJQUF2QixFQUE2QkEsQ0FBQyxJQUFJLEdBQWxDLEVBQXVDO0FBQ3JDRCxXQUFPLENBQUNDLENBQUQsQ0FBUCxHQUFhLENBQ1g7QUFDRUgsU0FBRyxhQUFNRyxDQUFOLGNBQVdILEdBQVg7QUFETCxLQURXLEVBSVg7QUFDRUEsU0FBRyxFQUFFLFdBQUlHLENBQUosY0FBU0gsR0FBVCxFQUFlSSxPQUFmLENBQXVCLE1BQXZCLEVBQStCLE9BQS9CO0FBRFAsS0FKVyxDQUFiO0FBUUQ7O0FBQ0RGLFNBQU8sQ0FBQyxRQUFELENBQVAsR0FBb0IsQ0FDbEI7QUFDRUYsT0FBRyxFQUFFQztBQURQLEdBRGtCLENBQXBCO0FBS0EsU0FBT0MsT0FBUDtBQUNEOztBQUVjLFNBQVNHLFFBQVQsQ0FBa0JMLEdBQWxCLEVBQStCQyxNQUEvQixFQUErQztBQUM1RCxTQUFPO0FBQ0xELE9BQUcsRUFBSEEsR0FESztBQUVMTSxtQkFBZSxvQkFBYU4sR0FBYixDQUZWO0FBR0xFLFdBQU8sRUFBRUgsVUFBVSxDQUFDQyxHQUFELEVBQU1DLE1BQU47QUFIZCxHQUFQO0FBS0QiLCJmaWxlIjoiLi91dGlscy9nZXRJbWFnZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGdldEZvcm1hdHModXJsOiBzdHJpbmcsIGJhc2U2NDogc3RyaW5nKSB7XG4gIGNvbnN0IGZvcm1hdHMgPSB7fTtcbiAgZm9yIChsZXQgaSA9IDUwMDsgaSA8PSAzMDAwOyBpICs9IDI1MCkge1xuICAgIGZvcm1hdHNbaV0gPSBbXG4gICAgICB7XG4gICAgICAgIHVybDogYC8ke2l9XyR7dXJsfWAsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB1cmw6IGAvJHtpfV8ke3VybH1gLnJlcGxhY2UoXCIuanBnXCIsIFwiLndlYnBcIiksXG4gICAgICB9LFxuICAgIF07XG4gIH1cbiAgZm9ybWF0c1tcImJhc2U2NFwiXSA9IFtcbiAgICB7XG4gICAgICB1cmw6IGJhc2U2NCxcbiAgICB9LFxuICBdO1xuICByZXR1cm4gZm9ybWF0cztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0SW1hZ2UodXJsOiBzdHJpbmcsIGJhc2U2NDogc3RyaW5nKSB7XG4gIHJldHVybiB7XG4gICAgdXJsLFxuICAgIGFsdGVybmF0aXZlVGV4dDogYFRoaXMgaXMgJHt1cmx9YCxcbiAgICBmb3JtYXRzOiBnZXRGb3JtYXRzKHVybCwgYmFzZTY0KSxcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/getImage.ts\n");

/***/ })

})