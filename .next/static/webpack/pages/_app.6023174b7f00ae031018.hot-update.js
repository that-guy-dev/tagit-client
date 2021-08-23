"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Sidebar.js":
/*!*******************************!*\
  !*** ./components/Sidebar.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/helpers */ \"./util/helpers.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Sidebar = () => {\n  _s();\n\n  const {\n    0: tags,\n    1: setTags\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    const token = localStorage.getItem(\"token\");\n    axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"http://localhost:5000/tag\", {\n      headers: {\n        Authorization: `Bearer ${token}`\n      }\n    }).then(response => {\n      const {\n        tags\n      } = response === null || response === void 0 ? void 0 : response.data;\n      setTags(tags);\n    }).catch(error => {\n      console.log(error);\n    });\n  }, []);\n  console.log(tags);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: (tags === null || tags === void 0 ? void 0 : tags.length) > 1 && (tags === null || tags === void 0 ? void 0 : tags.map(item => item === null || item === void 0 ? void 0 : item.tag))\n  }, void 0, false);\n}; // export async function getServerSideProps() {\n//   const tags = await fetcher('http://localhost:5000/tag', localStorage.getItem(\"token\"))\n//   return { props: { t } }\n// }\n// export const getServerSideProps = async (context) => {\n//   const hero = await graphQlClient.request(HERO_IMAGES, {\n//     tag: \"frontpage\",\n//   });\n//   const services = await graphQlClient.request(SERVICE_TYPES);\n//   return {\n//     props: { hero, services },\n//   };\n// };\n\n\n_s(Sidebar, \"ZmEQrtKm9+jAbKMHivpP9kKq7QI=\");\n\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\n\nvar _c;\n\n$RefreshReg$(_c, \"Sidebar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZGViYXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUssT0FBTyxHQUFHLE1BQU87QUFBQTs7QUFDckIsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCTiwrQ0FBUSxDQUFDLENBQUQsQ0FBaEM7QUFFQUQsRUFBQUEsZ0RBQVMsQ0FBQyxNQUFNO0FBQ2QsVUFBTVEsS0FBSyxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsQ0FBZDtBQUNBUixJQUFBQSxnREFBQSxDQUNPLDJCQURQLEVBQ29DO0FBQUVVLE1BQUFBLE9BQU8sRUFBRTtBQUFFQyxRQUFBQSxhQUFhLEVBQUcsVUFBU0wsS0FBTTtBQUFqQztBQUFYLEtBRHBDLEVBRUdNLElBRkgsQ0FFU0MsUUFBRCxJQUFjO0FBQ2xCLFlBQU07QUFBRVQsUUFBQUE7QUFBRixVQUFXUyxRQUFYLGFBQVdBLFFBQVgsdUJBQVdBLFFBQVEsQ0FBRUMsSUFBM0I7QUFDQVQsTUFBQUEsT0FBTyxDQUFDRCxJQUFELENBQVA7QUFDRCxLQUxILEVBTUdXLEtBTkgsQ0FNVUMsS0FBRCxJQUFXO0FBQ2hCQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNELEtBUkg7QUFTRCxHQVhRLEVBV04sRUFYTSxDQUFUO0FBWUFDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZZCxJQUFaO0FBQ0Esc0JBQ0U7QUFBQSxjQUNLLENBQUFBLElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosWUFBQUEsSUFBSSxDQUFFZSxNQUFOLElBQWUsQ0FBZixLQUFvQmYsSUFBcEIsYUFBb0JBLElBQXBCLHVCQUFvQkEsSUFBSSxDQUFFZ0IsR0FBTixDQUFXQyxJQUFELElBQzdCQSxJQUQ2QixhQUM3QkEsSUFENkIsdUJBQzdCQSxJQUFJLENBQUVDLEdBRGEsQ0FBcEI7QUFETCxtQkFERjtBQU9ELENBdkJELEVBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7R0F4Q01uQjs7S0FBQUE7QUE0Q04sK0RBQWVBLE9BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlYmFyLmpzPzg0MDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgZmV0Y2hlciB9IGZyb20gJy4uL3V0aWwvaGVscGVycydcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xuXG5jb25zdCBTaWRlYmFyID0gKCApID0+IHtcbiAgY29uc3QgW3RhZ3MsIHNldFRhZ3NdID0gdXNlU3RhdGUoMCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvdGFnXCIsIHsgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCB9IH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgY29uc3QgeyB0YWdzIH0gPSByZXNwb25zZT8uZGF0YTtcbiAgICAgICAgc2V0VGFncyh0YWdzKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcbiAgY29uc29sZS5sb2codGFncylcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgICB7dGFncz8ubGVuZ3RoID4gMSAmJiB0YWdzPy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICBpdGVtPy50YWdcbiAgICAgICAgKSl9XG4gICAgPC8+XG4gICk7XG59O1xuXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuLy8gICBjb25zdCB0YWdzID0gYXdhaXQgZmV0Y2hlcignaHR0cDovL2xvY2FsaG9zdDo1MDAwL3RhZycsIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIikpXG4vLyAgIHJldHVybiB7IHByb3BzOiB7IHQgfSB9XG4vLyB9XG5cbi8vIGV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuLy8gICBjb25zdCBoZXJvID0gYXdhaXQgZ3JhcGhRbENsaWVudC5yZXF1ZXN0KEhFUk9fSU1BR0VTLCB7XG4vLyAgICAgdGFnOiBcImZyb250cGFnZVwiLFxuLy8gICB9KTtcblxuLy8gICBjb25zdCBzZXJ2aWNlcyA9IGF3YWl0IGdyYXBoUWxDbGllbnQucmVxdWVzdChTRVJWSUNFX1RZUEVTKTtcblxuLy8gICByZXR1cm4ge1xuLy8gICAgIHByb3BzOiB7IGhlcm8sIHNlcnZpY2VzIH0sXG4vLyAgIH07XG4vLyB9O1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiZmV0Y2hlciIsInVzZVNXUiIsIlNpZGViYXIiLCJ0YWdzIiwic2V0VGFncyIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImdldCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsInRhZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Sidebar.js\n");

/***/ })

});