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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/helpers */ \"./util/helpers.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/bla/Desktop/tagit/tagit-client/components/Sidebar.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nconst SidebarItem = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div`\n  font-size: 0.9em;\n  color: white;\n  letter-spacing: 2px;\n  font-weight: 400;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  white-space: nowrap;\n  width: 90%;\n  ${props => props.bread && css`\n      font-weight: 100;\n    `}\n  ${props => props.edit && css`\n      display: none;\n      width: 10%;\n    `}\n`;\n\nconst Sidebar = () => {\n  _s();\n\n  const {\n    0: tags,\n    1: setTags\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0); // const [parameters, setParameters] = useState({\n  //   revalidateOnFocus: false,\n  //   revalidateOnMount:false,\n  //   revalidateOnReconnect: false,\n  //   refreshWhenOffline: false,\n  //   refreshWhenHidden: false,\n  //   refreshInterval: 0\n  // });\n  //   const { data, error, isValidating, mutate  } = useSWR(\n  //   [`http://localhost:5000/tag`, localStorage?.getItem(\"token\")],\n  //   fetcher, parameters\n  // );\n  // if (error) console.log(error);\n  // if (data) console.log(data);\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    const token = localStorage.getItem(\"token\");\n    console.log(token);\n    axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"http://localhost:5000/tag\", {\n      headers: {\n        Authorization: `Bearer ${token}`\n      }\n    }).then(response => {\n      const {\n        tags\n      } = response === null || response === void 0 ? void 0 : response.data;\n      setTags(tags);\n    }).catch(error => {\n      console.log(error);\n    });\n  }, []);\n  console.log(tags);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    style: {\n      display: 'flex',\n      flexDirection: \"column\"\n    },\n    children: (tags === null || tags === void 0 ? void 0 : tags.length) > 1 && (tags === null || tags === void 0 ? void 0 : tags.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n      children: item === null || item === void 0 ? void 0 : item.tag\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 11\n    }, undefined)))\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 68,\n    columnNumber: 5\n  }, undefined);\n}; // export async function getServerSideProps() {\n//   const tags = await fetcher('http://localhost:5000/tag', localStorage.getItem(\"token\"))\n//   return { props: { t } }\n// }\n// export const getServerSideProps = async (context) => {\n//   const hero = await graphQlClient.request(HERO_IMAGES, {\n//     tag: \"frontpage\",\n//   });\n//   const services = await graphQlClient.request(SERVICE_TYPES);\n//   return {\n//     props: { hero, services },\n//   };\n// };\n\n\n_s(Sidebar, \"ZmEQrtKm9+jAbKMHivpP9kKq7QI=\");\n\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\n\nvar _c;\n\n$RefreshReg$(_c, \"Sidebar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZGViYXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNTSxXQUFXLEdBQUdGLDBEQUFXO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUtJLEtBQUQsSUFDQUEsS0FBSyxDQUFDQyxLQUFOLElBQ0FDLEdBQUk7QUFDUjtBQUNBLEtBQU07QUFDTixJQUFLRixLQUFELElBQ0FBLEtBQUssQ0FBQ0csSUFBTixJQUNBRCxHQUFJO0FBQ1I7QUFDQTtBQUNBLEtBQU07QUFDTixDQXJCQTs7QUF1QkEsTUFBTUUsT0FBTyxHQUFHLE1BQU87QUFBQTs7QUFDckIsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCYiwrQ0FBUSxDQUFDLENBQUQsQ0FBaEMsQ0FEcUIsQ0FHckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFLQUQsRUFBQUEsZ0RBQVMsQ0FBQyxNQUFNO0FBQ2QsVUFBTWUsS0FBSyxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsQ0FBZDtBQUNBQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUosS0FBWjtBQUNBYixJQUFBQSxnREFBQSxDQUNPLDJCQURQLEVBQ29DO0FBQUVtQixNQUFBQSxPQUFPLEVBQUU7QUFBRUMsUUFBQUEsYUFBYSxFQUFHLFVBQVNQLEtBQU07QUFBakM7QUFBWCxLQURwQyxFQUVHUSxJQUZILENBRVNDLFFBQUQsSUFBYztBQUNsQixZQUFNO0FBQUVYLFFBQUFBO0FBQUYsVUFBV1csUUFBWCxhQUFXQSxRQUFYLHVCQUFXQSxRQUFRLENBQUVDLElBQTNCO0FBQ0FYLE1BQUFBLE9BQU8sQ0FBQ0QsSUFBRCxDQUFQO0FBQ0QsS0FMSCxFQU1HYSxLQU5ILENBTVVDLEtBQUQsSUFBVztBQUNoQlQsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlRLEtBQVo7QUFDRCxLQVJIO0FBU0QsR0FaUSxFQVlOLEVBWk0sQ0FBVDtBQWFBVCxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWU4sSUFBWjtBQUNBLHNCQUNFO0FBQUssU0FBSyxFQUFFO0FBQUNlLE1BQUFBLE9BQU8sRUFBRSxNQUFWO0FBQWtCQyxNQUFBQSxhQUFhLEVBQUM7QUFBaEMsS0FBWjtBQUFBLGNBQ0ssQ0FBQWhCLElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosWUFBQUEsSUFBSSxDQUFFaUIsTUFBTixJQUFlLENBQWYsS0FBb0JqQixJQUFwQixhQUFvQkEsSUFBcEIsdUJBQW9CQSxJQUFJLENBQUVrQixHQUFOLENBQVdDLElBQUQsaUJBQzdCO0FBQUEsZ0JBQU9BLElBQVAsYUFBT0EsSUFBUCx1QkFBT0EsSUFBSSxDQUFFQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRG1CLENBQXBCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBT0QsQ0EzQ0QsRUE2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztHQTVETXJCOztLQUFBQTtBQWdFTiwrREFBZUEsT0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NpZGViYXIuanM/ODQwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBmZXRjaGVyIH0gZnJvbSAnLi4vdXRpbC9oZWxwZXJzJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcblxuY29uc3QgU2lkZWJhckl0ZW0gPSBzdHlsZWQuZGl2YFxuICBmb250LXNpemU6IDAuOWVtO1xuICBjb2xvcjogd2hpdGU7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd2lkdGg6IDkwJTtcbiAgJHsocHJvcHMpID0+XG4gICAgcHJvcHMuYnJlYWQgJiZcbiAgICBjc3NgXG4gICAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGB9XG4gICR7KHByb3BzKSA9PlxuICAgIHByb3BzLmVkaXQgJiZcbiAgICBjc3NgXG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgd2lkdGg6IDEwJTtcbiAgICBgfVxuYDtcblxuY29uc3QgU2lkZWJhciA9ICggKSA9PiB7XG4gIGNvbnN0IFt0YWdzLCBzZXRUYWdzXSA9IHVzZVN0YXRlKDApO1xuXG4gIC8vIGNvbnN0IFtwYXJhbWV0ZXJzLCBzZXRQYXJhbWV0ZXJzXSA9IHVzZVN0YXRlKHtcbiAgLy8gICByZXZhbGlkYXRlT25Gb2N1czogZmFsc2UsXG4gIC8vICAgcmV2YWxpZGF0ZU9uTW91bnQ6ZmFsc2UsXG4gIC8vICAgcmV2YWxpZGF0ZU9uUmVjb25uZWN0OiBmYWxzZSxcbiAgLy8gICByZWZyZXNoV2hlbk9mZmxpbmU6IGZhbHNlLFxuICAvLyAgIHJlZnJlc2hXaGVuSGlkZGVuOiBmYWxzZSxcbiAgLy8gICByZWZyZXNoSW50ZXJ2YWw6IDBcbiAgLy8gfSk7XG5cbiAgLy8gICBjb25zdCB7IGRhdGEsIGVycm9yLCBpc1ZhbGlkYXRpbmcsIG11dGF0ZSAgfSA9IHVzZVNXUihcbiAgLy8gICBbYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC90YWdgLCBsb2NhbFN0b3JhZ2U/LmdldEl0ZW0oXCJ0b2tlblwiKV0sXG4gIC8vICAgZmV0Y2hlciwgcGFyYW1ldGVyc1xuICAvLyApO1xuICAvLyBpZiAoZXJyb3IpIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgLy8gaWYgKGRhdGEpIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gICAgXG4gIFxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xuICAgIGNvbnNvbGUubG9nKHRva2VuKVxuICAgIGF4aW9zXG4gICAgICAuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL3RhZ1wiLCB7IGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAgfSB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdGFncyB9ID0gcmVzcG9uc2U/LmRhdGE7XG4gICAgICAgIHNldFRhZ3ModGFncylcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG4gIGNvbnNvbGUubG9nKHRhZ3MpXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjpcImNvbHVtblwifX0+XG4gICAgICAgIHt0YWdzPy5sZW5ndGggPiAxICYmIHRhZ3M/Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgIDxzcGFuPntpdGVtPy50YWd9PC9zcGFuPlxuICAgICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG4vLyAgIGNvbnN0IHRhZ3MgPSBhd2FpdCBmZXRjaGVyKCdodHRwOi8vbG9jYWxob3N0OjUwMDAvdGFnJywgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKSlcbi8vICAgcmV0dXJuIHsgcHJvcHM6IHsgdCB9IH1cbi8vIH1cblxuLy8gZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4vLyAgIGNvbnN0IGhlcm8gPSBhd2FpdCBncmFwaFFsQ2xpZW50LnJlcXVlc3QoSEVST19JTUFHRVMsIHtcbi8vICAgICB0YWc6IFwiZnJvbnRwYWdlXCIsXG4vLyAgIH0pO1xuXG4vLyAgIGNvbnN0IHNlcnZpY2VzID0gYXdhaXQgZ3JhcGhRbENsaWVudC5yZXF1ZXN0KFNFUlZJQ0VfVFlQRVMpO1xuXG4vLyAgIHJldHVybiB7XG4vLyAgICAgcHJvcHM6IHsgaGVybywgc2VydmljZXMgfSxcbi8vICAgfTtcbi8vIH07XG5cblxuXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJmZXRjaGVyIiwic3R5bGVkIiwidXNlU1dSIiwiU2lkZWJhckl0ZW0iLCJkaXYiLCJwcm9wcyIsImJyZWFkIiwiY3NzIiwiZWRpdCIsIlNpZGViYXIiLCJ0YWdzIiwic2V0VGFncyIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNvbnNvbGUiLCJsb2ciLCJnZXQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwidGFnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Sidebar.js\n");

/***/ })

});