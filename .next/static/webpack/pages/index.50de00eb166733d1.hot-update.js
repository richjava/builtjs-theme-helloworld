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

/***/ "./lib/transform-page.js":
/*!*******************************!*\
  !*** ./lib/transform-page.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"transformPage\": function() { return /* binding */ transformPage; }\n/* harmony export */ });\n/* harmony import */ var _Users_richard_Desktop_Projects_BuiltJS_themes_builtjs_theme_hello_world_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_richard_Desktop_Projects_BuiltJS_themes_builtjs_theme_hello_world_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_richard_Desktop_Projects_BuiltJS_themes_builtjs_theme_hello_world_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/fetch */ \"./lib/fetch.js\");\n/* harmony import */ var _lib_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/models */ \"./lib/models/index.js\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar SectionModel = new _lib_models__WEBPACK_IMPORTED_MODULE_3__.Section();\nvar transformPage = function() {\n    var _ref1 = _asyncToGenerator(_Users_richard_Desktop_Projects_BuiltJS_themes_builtjs_theme_hello_world_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee1(pageDoc) {\n        return _Users_richard_Desktop_Projects_BuiltJS_themes_builtjs_theme_hello_world_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx1) {\n            while(1)switch(_ctx1.prev = _ctx1.next){\n                case 0:\n                    return _ctx1.abrupt(\"return\", new Promise(function() {\n                        var _ref = _asyncToGenerator(_Users_richard_Desktop_Projects_BuiltJS_themes_builtjs_theme_hello_world_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(resolve) {\n                            var page, fullPage, header, footer, i, section, transformedSection, footerSection, appData;\n                            return _Users_richard_Desktop_Projects_BuiltJS_themes_builtjs_theme_hello_world_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                                while(1)switch(_ctx.prev = _ctx.next){\n                                    case 0:\n                                        console.log('------>pageDoc', pageDoc);\n                                        page = new _lib_models__WEBPACK_IMPORTED_MODULE_3__.Page(pageDoc);\n                                        fullPage = {\n                                            layout: {},\n                                            sections: []\n                                        };\n                                        if (!(pageDoc && pageDoc.layout)) {\n                                            _ctx.next = 17;\n                                            break;\n                                        }\n                                        if (!pageDoc.layout.sections) {\n                                            _ctx.next = 17;\n                                            break;\n                                        }\n                                        _ctx.next = 7;\n                                        return getSection(pageDoc.layout.sections[0], pageDoc);\n                                    case 7:\n                                        header = _ctx.sent;\n                                        _ctx.next = 10;\n                                        return transformSection(header, pageDoc);\n                                    case 10:\n                                        fullPage.layout['_0'] = _ctx.sent;\n                                        _ctx.next = 13;\n                                        return getSection(pageDoc.layout.sections[1], pageDoc);\n                                    case 13:\n                                        footer = _ctx.sent;\n                                        _ctx.next = 16;\n                                        return transformSection(footer, pageDoc);\n                                    case 16:\n                                        fullPage.layout['_1'] = _ctx.sent;\n                                    case 17:\n                                        _ctx.next = 19;\n                                        return page.populate(\"sections\");\n                                    case 19:\n                                        i = 0;\n                                    case 20:\n                                        if (!(i < page.doc.sections.length)) {\n                                            _ctx.next = 30;\n                                            break;\n                                        }\n                                        section = page.doc.sections[i];\n                                        if (!section) {\n                                            _ctx.next = 27;\n                                            break;\n                                        }\n                                        _ctx.next = 25;\n                                        return transformSection(section, pageDoc);\n                                    case 25:\n                                        transformedSection = _ctx.sent;\n                                        if (transformedSection.template) {\n                                            fullPage.sections.push(transformedSection);\n                                        } else {\n                                            fullPage.sections.push(transformedSection);\n                                        }\n                                    case 27:\n                                        i++;\n                                        _ctx.next = 20;\n                                        break;\n                                    case 30:\n                                        if (!(pageDoc.layout && pageDoc.layout.footerSection)) {\n                                            _ctx.next = 37;\n                                            break;\n                                        }\n                                        _ctx.next = 33;\n                                        return getSection(pageDoc.layout.footerSection, pageDoc);\n                                    case 33:\n                                        footerSection = _ctx.sent;\n                                        _ctx.next = 36;\n                                        return transformSection(footerSection, pageDoc);\n                                    case 36:\n                                        fullPage.sections.layout.footer = _ctx.sent;\n                                    case 37:\n                                        _ctx.next = 39;\n                                        return fetchData(\"/data/app.json\");\n                                    case 39:\n                                        appData = _ctx.sent;\n                                        fullPage.app = appData.app;\n                                        console.log('fullpage--->', fullPage);\n                                        resolve(fullPage);\n                                    case 43:\n                                    case \"end\":\n                                        return _ctx.stop();\n                                }\n                            }, _callee);\n                        }));\n                        return function(resolve) {\n                            return _ref.apply(this, arguments);\n                        };\n                    }()));\n                case 1:\n                case \"end\":\n                    return _ctx1.stop();\n            }\n        }, _callee1);\n    }));\n    return function transformPage(pageDoc) {\n        return _ref1.apply(this, arguments);\n    };\n}();\nvar getSection = function(sectionDoc, pageDoc) {\n    return new Promise(function() {\n        var _ref = _asyncToGenerator(_Users_richard_Desktop_Projects_BuiltJS_themes_builtjs_theme_hello_world_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(resolve) {\n            var section, TemplateModel, template;\n            return _Users_richard_Desktop_Projects_BuiltJS_themes_builtjs_theme_hello_world_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return SectionModel.findOne(sectionDoc.slug);\n                    case 2:\n                        section = _ctx.sent;\n                        TemplateModel = new _lib_models__WEBPACK_IMPORTED_MODULE_3__.Template();\n                        _ctx.next = 6;\n                        return TemplateModel.findOne(sectionDoc.template.slug);\n                    case 6:\n                        template = _ctx.sent;\n                        section.template = template;\n                        resolve(section);\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function(resolve) {\n            return _ref.apply(this, arguments);\n        };\n    }());\n};\nvar transformSection = function() {\n    var _ref2 = _asyncToGenerator(_Users_richard_Desktop_Projects_BuiltJS_themes_builtjs_theme_hello_world_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(section, pageDoc) {\n        return _Users_richard_Desktop_Projects_BuiltJS_themes_builtjs_theme_hello_world_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx2) {\n            while(1)switch(_ctx2.prev = _ctx2.next){\n                case 0:\n                    return _ctx2.abrupt(\"return\", new Promise(function() {\n                        var _ref = _asyncToGenerator(_Users_richard_Desktop_Projects_BuiltJS_themes_builtjs_theme_hello_world_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(resolve) {\n                            var template, transformedSection, content, contentTypeSlug, item, j, populateSlug, populateItem, component, globalData;\n                            return _Users_richard_Desktop_Projects_BuiltJS_themes_builtjs_theme_hello_world_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                                while(1)switch(_ctx.prev = _ctx.next){\n                                    case 0:\n                                        template = section.template;\n                                        transformedSection = {};\n                                        content = {};\n                                        if (!(section.doc.item && pageDoc.params && pageDoc.params.slug && Object.keys(section.doc.item).length)) {\n                                            _ctx.next = 20;\n                                            break;\n                                        }\n                                        contentTypeSlug = Object.keys(section.doc.item)[0];\n                                        _ctx.next = 7;\n                                        return (0,_lib_fetch__WEBPACK_IMPORTED_MODULE_2__.fetchItem)(contentTypeSlug, pageDoc.params.slug);\n                                    case 7:\n                                        item = _ctx.sent;\n                                        if (!section.doc.item[contentTypeSlug].populate) {\n                                            _ctx.next = 19;\n                                            break;\n                                        }\n                                        j = 0;\n                                    case 10:\n                                        if (!(j < section.doc.item[contentTypeSlug].populate.length)) {\n                                            _ctx.next = 19;\n                                            break;\n                                        }\n                                        populateSlug = section.doc.item[contentTypeSlug].populate[j];\n                                        _ctx.next = 14;\n                                        return (0,_lib_fetch__WEBPACK_IMPORTED_MODULE_2__.fetchItemById)(populateSlug, item.attributes[populateSlug].id);\n                                    case 14:\n                                        populateItem = _ctx.sent;\n                                        item.attributes[populateSlug] = populateItem;\n                                    case 16:\n                                        j++;\n                                        _ctx.next = 10;\n                                        break;\n                                    case 19:\n                                        content.item = item;\n                                    case 20:\n                                        if (!section.doc.collections) {\n                                            _ctx.next = 24;\n                                            break;\n                                        }\n                                        _ctx.next = 23;\n                                        return (0,_lib_fetch__WEBPACK_IMPORTED_MODULE_2__.fetchCollections)(section.doc);\n                                    case 23:\n                                        content.collections = _ctx.sent;\n                                    case 24:\n                                        if (section.doc.variants) {\n                                            template.doc.variants = section.doc.variants;\n                                            transformedSection.variants = section.doc.variants;\n                                        }\n                                        component = null;\n                                        if (template) {\n                                            console.log({\n                                                template: template\n                                            });\n                                            component = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(function() {\n                                                return __webpack_require__(\"./components/templates lazy recursive ^\\\\.\\\\/.*$\")(\"./\".concat(template.doc.category, \"/\").concat(template.doc.slug, \"/\").concat(template.doc.slug));\n                                            });\n                                        }\n                                        if (section.doc.data) {\n                                            content.attributes = section.doc.data;\n                                        }\n                                        if (content) {\n                                            transformedSection.content = content;\n                                        }\n                                        console.log({\n                                            component: component\n                                        });\n                                        if (component) {\n                                            transformedSection.template = component;\n                                        }\n                                        if (!__webpack_require__.g) {\n                                            _ctx.next = 36;\n                                            break;\n                                        }\n                                        _ctx.next = 34;\n                                        return fetchData(\"/data/global.json\");\n                                    case 34:\n                                        globalData = _ctx.sent;\n                                        content.global = globalData.global;\n                                    case 36:\n                                        console.log({\n                                            transformedSection: transformedSection\n                                        });\n                                        resolve(transformedSection);\n                                    case 38:\n                                    case \"end\":\n                                        return _ctx.stop();\n                                }\n                            }, _callee);\n                        }));\n                        return function(resolve) {\n                            return _ref.apply(this, arguments);\n                        };\n                    }()));\n                case 1:\n                case \"end\":\n                    return _ctx2.stop();\n            }\n        }, _callee2);\n    }));\n    return function transformSection(section, pageDoc) {\n        return _ref2.apply(this, arguments);\n    };\n}();\nvar fetchData = function() {\n    var _ref3 = _asyncToGenerator(_Users_richard_Desktop_Projects_BuiltJS_themes_builtjs_theme_hello_world_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(path) {\n        var url;\n        return _Users_richard_Desktop_Projects_BuiltJS_themes_builtjs_theme_hello_world_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx3) {\n            while(1)switch(_ctx3.prev = _ctx3.next){\n                case 0:\n                    url = process.env.url || \"http://localhost:3000\";\n                    return _ctx3.abrupt(\"return\", new Promise(function() {\n                        var _ref = _asyncToGenerator(_Users_richard_Desktop_Projects_BuiltJS_themes_builtjs_theme_hello_world_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(resolve) {\n                            var res, data;\n                            return _Users_richard_Desktop_Projects_BuiltJS_themes_builtjs_theme_hello_world_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                                while(1)switch(_ctx.prev = _ctx.next){\n                                    case 0:\n                                        _ctx.next = 2;\n                                        return fetch(\"\".concat(url).concat(path));\n                                    case 2:\n                                        res = _ctx.sent;\n                                        data = res.json();\n                                        resolve(data);\n                                    case 5:\n                                    case \"end\":\n                                        return _ctx.stop();\n                                }\n                            }, _callee);\n                        }));\n                        return function(resolve) {\n                            return _ref.apply(this, arguments);\n                        };\n                    }()));\n                case 2:\n                case \"end\":\n                    return _ctx3.stop();\n            }\n        }, _callee3);\n    }));\n    return function fetchData(path) {\n        return _ref3.apply(this, arguments);\n    };\n}();\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ1UsTUFBTTs7d0NBRXhDbEMsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBQ0o7NENBQUFBLGtCQUFrQixFQUFsQkEsa0JBQWtCO3dDQUFBLENBQUM7d0NBQzVCUCxPQUFPLENBQUNPLGtCQUFrQjs7Ozs7O3dCQUM1QixDQUFDO3dDQTlEeUJQLE9BQU87Ozs7Ozs7OztJQStEbkMsQ0FBQztvQkFoRUdlLGdCQUFnQixDQUFVVCxPQUFPLEVBQUVSLE9BQU87Ozs7QUFrRTlDLEdBQUssQ0FBQ3VCLFNBQVM7c05BQUcsUUFBUSxVQUFEd0IsSUFBSSxFQUFLLENBQUM7WUFDM0JDLEdBQUc7Ozs7b0JBQUhBLEdBQUcsR0FBR0MsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEdBQUcsSUFBSSxDQUF1QjtrREFDL0MsR0FBRyxDQUFDL0MsT0FBTzt5T0FBQyxRQUFRLFNBQURDLE9BQU8sRUFBSyxDQUFDO2dDQUNqQ2lELEdBQUcsRUFDSE4sSUFBSTs7Ozs7K0NBRFFPLEtBQUssQ0FBRSxHQUFRTCxNQUFJLENBQVZDLEdBQUcsRUFBUSxPQUFMRCxJQUFJOzt3Q0FBL0JJLEdBQUc7d0NBQ0hOLElBQUksR0FBR00sR0FBRyxDQUFDRSxJQUFJO3dDQUNuQm5ELE9BQU8sQ0FBQzJDLElBQUk7Ozs7Ozt3QkFDZCxDQUFDO3dDQUp5QjNDLE9BQU87Ozs7Ozs7OztJQUtuQyxDQUFDO29CQVBLcUIsU0FBUyxDQUFVd0IsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWIvdHJhbnNmb3JtLXBhZ2UuanM/YjcwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XG5pbXBvcnQgeyBmZXRjaENvbGxlY3Rpb25zLCBmZXRjaEl0ZW0sIGZldGNoSXRlbUJ5SWQgfSBmcm9tIFwiLi4vbGliL2ZldGNoXCI7XG5pbXBvcnQgeyBQYWdlLCBTZWN0aW9uLCBUZW1wbGF0ZSB9IGZyb20gXCIuLi9saWIvbW9kZWxzXCI7XG5jb25zdCBTZWN0aW9uTW9kZWwgPSBuZXcgU2VjdGlvbigpO1xuXG5leHBvcnQgY29uc3QgdHJhbnNmb3JtUGFnZSA9IGFzeW5jIChwYWdlRG9jKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCctLS0tLS0+cGFnZURvYycsIHBhZ2VEb2MpO1xuICAgIGNvbnN0IHBhZ2UgPSBuZXcgUGFnZShwYWdlRG9jKTtcbiAgICBsZXQgZnVsbFBhZ2UgPSB7XG4gICAgICBsYXlvdXQ6IHt9LFxuICAgICAgc2VjdGlvbnM6IFtdLFxuICAgIH07XG4gICAgaWYgKHBhZ2VEb2MgJiYgcGFnZURvYy5sYXlvdXQpIHtcbiAgICAgIC8vVE9ETyBsb29wIHRob3VnaCBzZWN0aW9uc1xuICAgICAgaWYocGFnZURvYy5sYXlvdXQuc2VjdGlvbnMpe1xuICAgICAgICBsZXQgaGVhZGVyID0gYXdhaXQgZ2V0U2VjdGlvbihwYWdlRG9jLmxheW91dC5zZWN0aW9uc1swXSwgcGFnZURvYyk7XG4gICAgICAgIGZ1bGxQYWdlLmxheW91dFsnXzAnXSA9IGF3YWl0IHRyYW5zZm9ybVNlY3Rpb24oXG4gICAgICAgICAgaGVhZGVyLFxuICAgICAgICAgIHBhZ2VEb2NcbiAgICAgICAgKTtcbiAgICAgICAgbGV0IGZvb3RlciA9IGF3YWl0IGdldFNlY3Rpb24ocGFnZURvYy5sYXlvdXQuc2VjdGlvbnNbMV0sIHBhZ2VEb2MpO1xuICAgICAgICBmdWxsUGFnZS5sYXlvdXRbJ18xJ10gPSBhd2FpdCB0cmFuc2Zvcm1TZWN0aW9uKFxuICAgICAgICAgIGZvb3RlcixcbiAgICAgICAgICBwYWdlRG9jXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIGF3YWl0IHBhZ2UucG9wdWxhdGUoXCJzZWN0aW9uc1wiKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhZ2UuZG9jLnNlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBzZWN0aW9uID0gcGFnZS5kb2Muc2VjdGlvbnNbaV07XG4gICAgICBpZiAoc2VjdGlvbikge1xuICAgICAgICBsZXQgdHJhbnNmb3JtZWRTZWN0aW9uID0gYXdhaXQgdHJhbnNmb3JtU2VjdGlvbihzZWN0aW9uLCBwYWdlRG9jKTtcbiAgICAgICAgaWYgKHRyYW5zZm9ybWVkU2VjdGlvbi50ZW1wbGF0ZSkge1xuICAgICAgICAgIGZ1bGxQYWdlLnNlY3Rpb25zLnB1c2godHJhbnNmb3JtZWRTZWN0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmdWxsUGFnZS5zZWN0aW9ucy5wdXNoKHRyYW5zZm9ybWVkU2VjdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHBhZ2VEb2MubGF5b3V0ICYmIHBhZ2VEb2MubGF5b3V0LmZvb3RlclNlY3Rpb24pIHtcbiAgICAgIGxldCBmb290ZXJTZWN0aW9uID0gYXdhaXQgZ2V0U2VjdGlvbihcbiAgICAgICAgcGFnZURvYy5sYXlvdXQuZm9vdGVyU2VjdGlvbixcbiAgICAgICAgcGFnZURvY1xuICAgICAgKTtcbiAgICAgIGZ1bGxQYWdlLnNlY3Rpb25zLmxheW91dC5mb290ZXIgPSBhd2FpdCB0cmFuc2Zvcm1TZWN0aW9uKFxuICAgICAgICBmb290ZXJTZWN0aW9uLFxuICAgICAgICBwYWdlRG9jXG4gICAgICApO1xuICAgIH1cbiAgICBsZXQgYXBwRGF0YSA9IGF3YWl0IGZldGNoRGF0YShgL2RhdGEvYXBwLmpzb25gKTtcbiAgICBmdWxsUGFnZS5hcHAgPSBhcHBEYXRhLmFwcDtcbiAgICBjb25zb2xlLmxvZygnZnVsbHBhZ2UtLS0+JywgZnVsbFBhZ2UpO1xuICAgIHJlc29sdmUoZnVsbFBhZ2UpO1xuICB9KTtcbn07XG5cbmxldCBnZXRTZWN0aW9uID0gKHNlY3Rpb25Eb2MsIHBhZ2VEb2MpID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlKSA9PiB7XG4gICAgbGV0IHNlY3Rpb24gPSBhd2FpdCBTZWN0aW9uTW9kZWwuZmluZE9uZShzZWN0aW9uRG9jLnNsdWcpO1xuICAgIGNvbnN0IFRlbXBsYXRlTW9kZWwgPSBuZXcgVGVtcGxhdGUoKTtcbiAgICBsZXQgdGVtcGxhdGUgPSBhd2FpdCBUZW1wbGF0ZU1vZGVsLmZpbmRPbmUoc2VjdGlvbkRvYy50ZW1wbGF0ZS5zbHVnKTtcbiAgICBzZWN0aW9uLnRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgcmVzb2x2ZShzZWN0aW9uKTtcbiAgfSk7XG59O1xuXG5sZXQgdHJhbnNmb3JtU2VjdGlvbiA9IGFzeW5jIChzZWN0aW9uLCBwYWdlRG9jKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSkgPT4ge1xuICAgIGxldCB0ZW1wbGF0ZSA9IHNlY3Rpb24udGVtcGxhdGU7XG4gICAgbGV0IHRyYW5zZm9ybWVkU2VjdGlvbiA9IHt9O1xuICAgIGxldCBjb250ZW50ID0ge307XG4gICAgaWYgKFxuICAgICAgc2VjdGlvbi5kb2MuaXRlbSAmJlxuICAgICAgcGFnZURvYy5wYXJhbXMgJiZcbiAgICAgIHBhZ2VEb2MucGFyYW1zLnNsdWcgJiZcbiAgICAgIE9iamVjdC5rZXlzKHNlY3Rpb24uZG9jLml0ZW0pLmxlbmd0aFxuICAgICkge1xuICAgICAgLy9GSVhNRTogdGhpcyBpcyBhc3N1bWluZyBzbHVnIGlzIHRoZSBmaXJzdCBrZXlcbiAgICAgIGxldCBjb250ZW50VHlwZVNsdWcgPSBPYmplY3Qua2V5cyhzZWN0aW9uLmRvYy5pdGVtKVswXTtcbiAgICAgIGxldCBpdGVtID0gYXdhaXQgZmV0Y2hJdGVtKGNvbnRlbnRUeXBlU2x1ZywgcGFnZURvYy5wYXJhbXMuc2x1Zyk7XG4gICAgICBpZiAoc2VjdGlvbi5kb2MuaXRlbVtjb250ZW50VHlwZVNsdWddLnBvcHVsYXRlKSB7XG4gICAgICAgIGZvciAoXG4gICAgICAgICAgbGV0IGogPSAwO1xuICAgICAgICAgIGogPCBzZWN0aW9uLmRvYy5pdGVtW2NvbnRlbnRUeXBlU2x1Z10ucG9wdWxhdGUubGVuZ3RoO1xuICAgICAgICAgIGorK1xuICAgICAgICApIHtcbiAgICAgICAgICBjb25zdCBwb3B1bGF0ZVNsdWcgPSBzZWN0aW9uLmRvYy5pdGVtW2NvbnRlbnRUeXBlU2x1Z10ucG9wdWxhdGVbal07XG4gICAgICAgICAgbGV0IHBvcHVsYXRlSXRlbSA9IGF3YWl0IGZldGNoSXRlbUJ5SWQoXG4gICAgICAgICAgICBwb3B1bGF0ZVNsdWcsXG4gICAgICAgICAgICBpdGVtLmF0dHJpYnV0ZXNbcG9wdWxhdGVTbHVnXS5pZFxuICAgICAgICAgICk7XG4gICAgICAgICAgaXRlbS5hdHRyaWJ1dGVzW3BvcHVsYXRlU2x1Z10gPSBwb3B1bGF0ZUl0ZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnRlbnQuaXRlbSA9IGl0ZW07XG4gICAgfVxuICAgIFxuICAgIGlmIChzZWN0aW9uLmRvYy5jb2xsZWN0aW9ucykge1xuICAgICAgY29udGVudC5jb2xsZWN0aW9ucyA9IGF3YWl0IGZldGNoQ29sbGVjdGlvbnMoc2VjdGlvbi5kb2MpO1xuICAgIH1cbiAgICBpZiAoc2VjdGlvbi5kb2MudmFyaWFudHMpIHtcbiAgICAgIHRlbXBsYXRlLmRvYy52YXJpYW50cyA9IHNlY3Rpb24uZG9jLnZhcmlhbnRzO1xuICAgICAgdHJhbnNmb3JtZWRTZWN0aW9uLnZhcmlhbnRzID0gc2VjdGlvbi5kb2MudmFyaWFudHM7XG4gICAgfVxuICAgIGxldCBjb21wb25lbnQgPSBudWxsO1xuICAgIGlmICh0ZW1wbGF0ZSkge1xuICAgICAgY29uc29sZS5sb2coe3RlbXBsYXRlfSk7XG4gICAgICBjb21wb25lbnQgPSBkeW5hbWljKCgpID0+XG4gICAgICAgIGltcG9ydChcbiAgICAgICAgICBgLi4vY29tcG9uZW50cy90ZW1wbGF0ZXMvJHt0ZW1wbGF0ZS5kb2MuY2F0ZWdvcnl9LyR7dGVtcGxhdGUuZG9jLnNsdWd9LyR7dGVtcGxhdGUuZG9jLnNsdWd9YFxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoc2VjdGlvbi5kb2MuZGF0YSkge1xuICAgICAgY29udGVudC5hdHRyaWJ1dGVzID0gc2VjdGlvbi5kb2MuZGF0YTtcbiAgICB9XG4gICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgIHRyYW5zZm9ybWVkU2VjdGlvbi5jb250ZW50ID0gY29udGVudDtcbiAgICB9XG4gICAgY29uc29sZS5sb2coe2NvbXBvbmVudH0pO1xuICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgIHRyYW5zZm9ybWVkU2VjdGlvbi50ZW1wbGF0ZSA9IGNvbXBvbmVudDtcbiAgICB9XG4gICAgaWYoZ2xvYmFsKXtcbiAgICAgIGxldCBnbG9iYWxEYXRhID0gYXdhaXQgZmV0Y2hEYXRhKGAvZGF0YS9nbG9iYWwuanNvbmApO1xuICAgICAgY29udGVudC5nbG9iYWwgPSBnbG9iYWxEYXRhLmdsb2JhbDtcbiAgICB9XG5jb25zb2xlLmxvZyh7dHJhbnNmb3JtZWRTZWN0aW9ufSk7XG4gICAgcmVzb2x2ZSh0cmFuc2Zvcm1lZFNlY3Rpb24pO1xuICB9KTtcbn07XG5cbmNvbnN0IGZldGNoRGF0YSA9IGFzeW5jIChwYXRoKSA9PiB7XG4gIGNvbnN0IHVybCA9IHByb2Nlc3MuZW52LnVybCB8fCBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiO1xuICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUpID0+IHtcbiAgICBsZXQgcmVzID0gYXdhaXQgZmV0Y2goYCR7dXJsfSR7cGF0aH1gKTtcbiAgICBsZXQgZGF0YSA9IHJlcy5qc29uKCk7XG4gICAgcmVzb2x2ZShkYXRhKTtcbiAgfSk7XG59O1xuXG5cbiJdLCJuYW1lcyI6WyJkeW5hbWljIiwiZmV0Y2hDb2xsZWN0aW9ucyIsImZldGNoSXRlbSIsImZldGNoSXRlbUJ5SWQiLCJQYWdlIiwiU2VjdGlvbiIsIlRlbXBsYXRlIiwiU2VjdGlvbk1vZGVsIiwidHJhbnNmb3JtUGFnZSIsInBhZ2VEb2MiLCJQcm9taXNlIiwicmVzb2x2ZSIsInBhZ2UiLCJmdWxsUGFnZSIsImhlYWRlciIsImZvb3RlciIsImkiLCJzZWN0aW9uIiwidHJhbnNmb3JtZWRTZWN0aW9uIiwiZm9vdGVyU2VjdGlvbiIsImFwcERhdGEiLCJjb25zb2xlIiwibG9nIiwibGF5b3V0Iiwic2VjdGlvbnMiLCJnZXRTZWN0aW9uIiwidHJhbnNmb3JtU2VjdGlvbiIsInBvcHVsYXRlIiwiZG9jIiwibGVuZ3RoIiwidGVtcGxhdGUiLCJwdXNoIiwiZmV0Y2hEYXRhIiwiYXBwIiwic2VjdGlvbkRvYyIsIlRlbXBsYXRlTW9kZWwiLCJmaW5kT25lIiwic2x1ZyIsImNvbnRlbnQiLCJjb250ZW50VHlwZVNsdWciLCJpdGVtIiwiaiIsInBvcHVsYXRlU2x1ZyIsInBvcHVsYXRlSXRlbSIsImNvbXBvbmVudCIsImdsb2JhbERhdGEiLCJwYXJhbXMiLCJPYmplY3QiLCJrZXlzIiwiYXR0cmlidXRlcyIsImlkIiwiY29sbGVjdGlvbnMiLCJ2YXJpYW50cyIsImNhdGVnb3J5IiwiZGF0YSIsImdsb2JhbCIsInBhdGgiLCJ1cmwiLCJwcm9jZXNzIiwiZW52IiwicmVzIiwiZmV0Y2giLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/transform-page.js\n");

/***/ })

});