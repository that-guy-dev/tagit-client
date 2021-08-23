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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/helpers */ \"./util/helpers.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/bla/Desktop/tagit/tagit-client/components/Sidebar.js\",\n    _s2 = $RefreshSig$();\n\n\n\n\n\n\nconst SidebarItem = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div`\n  font-size: 0.9em;\n  color: white;\n  letter-spacing: 2px;\n  font-weight: 400;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  white-space: nowrap;\n  width: 90%;\n  ${props => props.bread && css`\n      font-weight: 100;\n    `}\n  ${props => props.edit && css`\n      display: none;\n      width: 10%;\n    `}\n`;\n\nconst Sidebar = () => {\n  _s2();\n\n  var _s = $RefreshSig$();\n\n  const {\n    0: tags,\n    1: setTags\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(_s(() => {\n    var _localStorage;\n\n    _s();\n\n    const {\n      data,\n      error\n    } = (0,swr__WEBPACK_IMPORTED_MODULE_4__.default)([`http://localhost:5000/tag`, (_localStorage = localStorage) === null || _localStorage === void 0 ? void 0 : _localStorage.getItem(\"token\")], _util_helpers__WEBPACK_IMPORTED_MODULE_3__.fetcher);\n    if (error) console.log(error);\n    if (data) console.log(data);\n    const token = localStorage.getItem(\"token\");\n    axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"http://localhost:5000/tag\", {\n      headers: {\n        Authorization: `Bearer ${token}`\n      }\n    }).then(response => {\n      const {\n        tags\n      } = response === null || response === void 0 ? void 0 : response.data;\n      setTags(tags);\n    }).catch(error => {\n      console.log(error);\n    });\n  }, \"r2QYs02BSrn+Eu/1uMGZi8N+HnQ=\", false, function () {\n    return [swr__WEBPACK_IMPORTED_MODULE_4__.default];\n  }), []);\n  console.log(tags);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    style: {\n      display: 'flex',\n      flexDirection: \"column\"\n    },\n    children: (tags === null || tags === void 0 ? void 0 : tags.length) > 1 && (tags === null || tags === void 0 ? void 0 : tags.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n      children: item === null || item === void 0 ? void 0 : item.tag\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 11\n    }, undefined)))\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 58,\n    columnNumber: 5\n  }, undefined);\n}; // export async function getServerSideProps() {\n//   const tags = await fetcher('http://localhost:5000/tag', localStorage.getItem(\"token\"))\n//   return { props: { t } }\n// }\n// export const getServerSideProps = async (context) => {\n//   const hero = await graphQlClient.request(HERO_IMAGES, {\n//     tag: \"frontpage\",\n//   });\n//   const services = await graphQlClient.request(SERVICE_TYPES);\n//   return {\n//     props: { hero, services },\n//   };\n// };\n\n\n_s2(Sidebar, \"ZmEQrtKm9+jAbKMHivpP9kKq7QI=\");\n\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\n\nvar _c;\n\n$RefreshReg$(_c, \"Sidebar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZGViYXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNTSxXQUFXLEdBQUdGLDBEQUFXO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUtJLEtBQUQsSUFDQUEsS0FBSyxDQUFDQyxLQUFOLElBQ0FDLEdBQUk7QUFDUjtBQUNBLEtBQU07QUFDTixJQUFLRixLQUFELElBQ0FBLEtBQUssQ0FBQ0csSUFBTixJQUNBRCxHQUFJO0FBQ1I7QUFDQTtBQUNBLEtBQU07QUFDTixDQXJCQTs7QUF1QkEsTUFBTUUsT0FBTyxHQUFHLE1BQU87QUFBQTs7QUFBQTs7QUFDckIsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCYiwrQ0FBUSxDQUFDLENBQUQsQ0FBaEM7QUFJQUQsRUFBQUEsZ0RBQVMsSUFBQyxNQUFNO0FBQUE7O0FBQUE7O0FBRWQsVUFBTTtBQUFFZSxNQUFBQSxJQUFGO0FBQVFDLE1BQUFBO0FBQVIsUUFBa0JYLDRDQUFNLENBQzVCLENBQUUsMkJBQUYsbUJBQThCWSxZQUE5QixrREFBOEIsY0FBY0MsT0FBZCxDQUFzQixPQUF0QixDQUE5QixDQUQ0QixFQUU1QmYsa0RBRjRCLENBQTlCO0FBSUEsUUFBSWEsS0FBSixFQUFXRyxPQUFPLENBQUNDLEdBQVIsQ0FBWUosS0FBWjtBQUNYLFFBQUlELElBQUosRUFBVUksT0FBTyxDQUFDQyxHQUFSLENBQVlMLElBQVo7QUFFVixVQUFNTSxLQUFLLEdBQUdKLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixDQUFkO0FBQ0FoQixJQUFBQSxnREFBQSxDQUNPLDJCQURQLEVBQ29DO0FBQUVxQixNQUFBQSxPQUFPLEVBQUU7QUFBRUMsUUFBQUEsYUFBYSxFQUFHLFVBQVNILEtBQU07QUFBakM7QUFBWCxLQURwQyxFQUVHSSxJQUZILENBRVNDLFFBQUQsSUFBYztBQUNsQixZQUFNO0FBQUViLFFBQUFBO0FBQUYsVUFBV2EsUUFBWCxhQUFXQSxRQUFYLHVCQUFXQSxRQUFRLENBQUVYLElBQTNCO0FBQ0FELE1BQUFBLE9BQU8sQ0FBQ0QsSUFBRCxDQUFQO0FBQ0QsS0FMSCxFQU1HYyxLQU5ILENBTVVYLEtBQUQsSUFBVztBQUNoQkcsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlKLEtBQVo7QUFDRCxLQVJIO0FBU0QsR0FuQlE7QUFBQSxZQUVpQlgsd0NBRmpCO0FBQUEsTUFtQk4sRUFuQk0sQ0FBVDtBQW9CQWMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlQLElBQVo7QUFDQSxzQkFDRTtBQUFLLFNBQUssRUFBRTtBQUFDZSxNQUFBQSxPQUFPLEVBQUUsTUFBVjtBQUFrQkMsTUFBQUEsYUFBYSxFQUFDO0FBQWhDLEtBQVo7QUFBQSxjQUNLLENBQUFoQixJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLFlBQUFBLElBQUksQ0FBRWlCLE1BQU4sSUFBZSxDQUFmLEtBQW9CakIsSUFBcEIsYUFBb0JBLElBQXBCLHVCQUFvQkEsSUFBSSxDQUFFa0IsR0FBTixDQUFXQyxJQUFELGlCQUM3QjtBQUFBLGdCQUFPQSxJQUFQLGFBQU9BLElBQVAsdUJBQU9BLElBQUksQ0FBRUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURtQixDQUFwQjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQU9ELENBakNELEVBbUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7SUFsRE1yQjs7S0FBQUE7QUFzRE4sK0RBQWVBLE9BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlYmFyLmpzPzg0MDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgZmV0Y2hlciB9IGZyb20gJy4uL3V0aWwvaGVscGVycydcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXG5cbmNvbnN0IFNpZGViYXJJdGVtID0gc3R5bGVkLmRpdmBcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgY29sb3I6IHdoaXRlO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdpZHRoOiA5MCU7XG4gICR7KHByb3BzKSA9PlxuICAgIHByb3BzLmJyZWFkICYmXG4gICAgY3NzYFxuICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBgfVxuICAkeyhwcm9wcykgPT5cbiAgICBwcm9wcy5lZGl0ICYmXG4gICAgY3NzYFxuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIHdpZHRoOiAxMCU7XG4gICAgYH1cbmA7XG5cbmNvbnN0IFNpZGViYXIgPSAoICkgPT4ge1xuICBjb25zdCBbdGFncywgc2V0VGFnc10gPSB1c2VTdGF0ZSgwKTtcblxuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcblxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcbiAgICAgIFtgaHR0cDovL2xvY2FsaG9zdDo1MDAwL3RhZ2AsIGxvY2FsU3RvcmFnZT8uZ2V0SXRlbShcInRva2VuXCIpXSxcbiAgICAgIGZldGNoZXJcbiAgICApO1xuICAgIGlmIChlcnJvcikgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIGlmIChkYXRhKSBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICBcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvdGFnXCIsIHsgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCB9IH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgY29uc3QgeyB0YWdzIH0gPSByZXNwb25zZT8uZGF0YTtcbiAgICAgICAgc2V0VGFncyh0YWdzKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcbiAgY29uc29sZS5sb2codGFncylcbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOlwiY29sdW1uXCJ9fT5cbiAgICAgICAge3RhZ3M/Lmxlbmd0aCA+IDEgJiYgdGFncz8ubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgPHNwYW4+e2l0ZW0/LnRhZ308L3NwYW4+XG4gICAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcbi8vICAgY29uc3QgdGFncyA9IGF3YWl0IGZldGNoZXIoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC90YWcnLCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpKVxuLy8gICByZXR1cm4geyBwcm9wczogeyB0IH0gfVxuLy8gfVxuXG4vLyBleHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcbi8vICAgY29uc3QgaGVybyA9IGF3YWl0IGdyYXBoUWxDbGllbnQucmVxdWVzdChIRVJPX0lNQUdFUywge1xuLy8gICAgIHRhZzogXCJmcm9udHBhZ2VcIixcbi8vICAgfSk7XG5cbi8vICAgY29uc3Qgc2VydmljZXMgPSBhd2FpdCBncmFwaFFsQ2xpZW50LnJlcXVlc3QoU0VSVklDRV9UWVBFUyk7XG5cbi8vICAgcmV0dXJuIHtcbi8vICAgICBwcm9wczogeyBoZXJvLCBzZXJ2aWNlcyB9LFxuLy8gICB9O1xuLy8gfTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJheGlvcyIsImZldGNoZXIiLCJzdHlsZWQiLCJ1c2VTV1IiLCJTaWRlYmFySXRlbSIsImRpdiIsInByb3BzIiwiYnJlYWQiLCJjc3MiLCJlZGl0IiwiU2lkZWJhciIsInRhZ3MiLCJzZXRUYWdzIiwiZGF0YSIsImVycm9yIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNvbnNvbGUiLCJsb2ciLCJ0b2tlbiIsImdldCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidGhlbiIsInJlc3BvbnNlIiwiY2F0Y2giLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJ0YWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Sidebar.js\n");

/***/ })

});