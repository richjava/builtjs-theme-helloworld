"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./page.js":
/*!*****************!*\
  !*** ./page.js ***!
  \*****************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_richard_Desktop_Projects_BuiltJS_themes_builtjs_theme_hello_world_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_richard_Desktop_Projects_BuiltJS_themes_builtjs_theme_hello_world_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_richard_Desktop_Projects_BuiltJS_themes_builtjs_theme_hello_world_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_transform_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/transform-page */ \"./lib/transform-page.js\");\n/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/layout/layout */ \"./components/layout/layout.js\");\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Page = function(param) {\n    var config = param.config;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}), page1 = ref[0], setPage = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        init();\n    }, [\n        page1\n    ]);\n    function init() {\n        return _init.apply(this, arguments);\n    }\n    function _init() {\n        _init = _asyncToGenerator(_Users_richard_Desktop_Projects_BuiltJS_themes_builtjs_theme_hello_world_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var page;\n            return _Users_richard_Desktop_Projects_BuiltJS_themes_builtjs_theme_hello_world_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        console.log({\n                            config: config\n                        });\n                        debugger;\n                        _ctx.next = 4;\n                        return (0,_lib_transform_page__WEBPACK_IMPORTED_MODULE_3__.transformPage)(config);\n                    case 4:\n                        page = _ctx.sent;\n                        console.log({\n                            page: page\n                        });\n                        setPage(page);\n                    case 7:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _init.apply(this, arguments);\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_layout_layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            page: page1,\n            children: config && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                children: page1.sections && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                    children: page1.sections && page1.sections.length && page1.sections.map(function(section, i) {\n                        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(section.template, {\n                            content: section.content\n                        }, i, false, {\n                            fileName: \"/Users/richard/Desktop/Projects/BuiltJS/themes/builtjs-theme-hello-world/page.js\",\n                            lineNumber: 32,\n                            columnNumber: 23\n                        }, _this1));\n                    })\n                }, void 0, false)\n            }, void 0, false)\n        }, void 0, false, {\n            fileName: \"/Users/richard/Desktop/Projects/BuiltJS/themes/builtjs-theme-hello-world/page.js\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false));\n};\n_s(Page, \"bZvTV4UWTy+ePeavylPDvbKzupU=\");\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ0U7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0MsR0FBSyxDQUFDSyxJQUFJLEdBQUcsUUFBUSxRQUFRLENBQUM7UUFBZEMsTUFBTSxTQUFOQSxNQUFNOzs7SUFDcEIsR0FBSyxDQUFtQkosR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxHQUE1QkssS0FBSSxHQUFhTCxHQUFZLEtBQXZCTSxPQUFPLEdBQUlOLEdBQVk7SUFFcENELGdEQUFTLENBQUMsUUFDWixHQURrQixDQUFDO1FBQ2ZRLElBQUk7SUFDTixDQUFDLEVBQUUsQ0FBQ0Y7UUFBQUEsS0FBSTtJQUFBLENBQUM7YUFFTUUsSUFBSTtlQUFKQSxLQUFJOzthQUFKQSxLQUFJO1FBQUpBLEtBQUkseU1BQW5CLFFBQVEsV0FBYyxDQUFDO2dCQUdmRixJQUFJOzs7O3dCQUZWRyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFDOzRCQUFDTCxNQUFNLEVBQU5BLE1BQU07d0JBQUMsQ0FBQzt3QkFDdEIsUUFBUzs7K0JBQ1VILGtFQUFhLENBQUNHLE1BQU07O3dCQUFqQ0MsSUFBSTt3QkFDVkcsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBQzs0QkFBQ0osSUFBSSxFQUFKQSxJQUFJO3dCQUFDLENBQUM7d0JBQ3BCQyxPQUFPLENBQUNELElBQUk7Ozs7OztRQUNkLENBQUM7ZUFOY0UsS0FBSTs7SUFRbkIsTUFBTTs4RkFHREwsaUVBQU07WUFBQ0csSUFBSSxFQUFFQSxLQUFJO3NCQUNmRCxNQUFNOzBCQUVGQyxLQUFJLENBQUNLLFFBQVE7OEJBRVRMLEtBQUksQ0FBQ0ssUUFBUSxJQUNaTCxLQUFJLENBQUNLLFFBQVEsQ0FBQ0MsTUFBTSxJQUNwQk4sS0FBSSxDQUFDSyxRQUFRLENBQUNFLEdBQUcsQ0FBQyxRQUFRLENBQVBDLE9BQU8sRUFBRUMsQ0FBQyxFQUFLLENBQUM7d0JBQ2pDLE1BQU0sNkVBQ0hELE9BQU8sQ0FBQ0UsUUFBUTs0QkFBU0MsT0FBTyxFQUFFSCxPQUFPLENBQUNHLE9BQU87MkJBQTNCRixDQUFDOzs7OztvQkFFNUIsQ0FBQzs7Ozs7Ozs7O0FBUW5CLENBQUM7R0FyQ0tYLElBQUk7S0FBSkEsSUFBSTtBQXVDViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2UuanM/ZTZmYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdHJhbnNmb3JtUGFnZSB9IGZyb20gXCIuL2xpYi90cmFuc2Zvcm0tcGFnZVwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXRcIjtcblxuY29uc3QgUGFnZSA9ICh7IGNvbmZpZyB9KSA9PiB7XG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKHt9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGluaXQoKTtcbiAgfSwgW3BhZ2VdKTtcblxuICBhc3luYyBmdW5jdGlvbiBpbml0KCkge1xuICAgIGNvbnNvbGUubG9nKHsgY29uZmlnIH0pO1xuICAgIGRlYnVnZ2VyO1xuICAgIGNvbnN0IHBhZ2UgPSBhd2FpdCB0cmFuc2Zvcm1QYWdlKGNvbmZpZyk7XG4gICAgY29uc29sZS5sb2coeyBwYWdlIH0pO1xuICAgIHNldFBhZ2UocGFnZSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7Lyoge3BhZ2UgJiYgPExheW91dCBwYWdlPXtwYWdlfT48L0xheW91dD59ICovfVxuICAgICAgPExheW91dCBwYWdlPXtwYWdlfT5cbiAgICAgICAge2NvbmZpZyAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIHtwYWdlLnNlY3Rpb25zICYmIChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICB7cGFnZS5zZWN0aW9ucyAmJlxuICAgICAgICAgICAgICAgICAgcGFnZS5zZWN0aW9ucy5sZW5ndGggJiZcbiAgICAgICAgICAgICAgICAgIHBhZ2Uuc2VjdGlvbnMubWFwKChzZWN0aW9uLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24udGVtcGxhdGUga2V5PXtpfSBjb250ZW50PXtzZWN0aW9uLmNvbnRlbnR9IC8+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ0cmFuc2Zvcm1QYWdlIiwiTGF5b3V0IiwiUGFnZSIsImNvbmZpZyIsInBhZ2UiLCJzZXRQYWdlIiwiaW5pdCIsImNvbnNvbGUiLCJsb2ciLCJzZWN0aW9ucyIsImxlbmd0aCIsIm1hcCIsInNlY3Rpb24iLCJpIiwidGVtcGxhdGUiLCJjb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./page.js\n");

/***/ })

});