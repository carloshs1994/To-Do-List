/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  margin: 0;\\n  width: 100vw;\\n  height: 100vh;\\n  font-family: Arial, Helvetica, sans-serif;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\nul {\\n  list-style: none;\\n  padding: 0;\\n  width: 500px;\\n  height: auto;\\n  background-color: rgb(200, 200, 200);\\n  display: flex;\\n  flex-direction: column;\\n  gap: 0.5px;\\n  border: none;\\n  box-shadow: rgba(100, 100, 111, 0.2) 0.001px 7px 29px 0.001px;\\n}\\n\\nli,\\nform {\\n  background-color: #fff;\\n  width: calc(100% - 26px);\\n  height: 50px;\\n  display: flex;\\n  justify-content: flex-start;\\n  align-items: center;\\n  border: none;\\n  padding: 0 13px;\\n  gap: 5px;\\n}\\n\\nform {\\n  padding: 0;\\n  width: 100%;\\n  justify-content: space-between;\\n}\\n\\nli.hello p {\\n  opacity: 0.7;\\n}\\n\\nli button {\\n  height: 20%;\\n  background: none;\\n  border: none;\\n}\\n\\nli img,\\nli form button img,\\nli.hello img {\\n  height: 10px;\\n  margin-left: auto;\\n  opacity: 0.4;\\n}\\n\\ninput#enter-task {\\n  width: 90%;\\n  height: 35px;\\n  border: none;\\n  padding-left: 3px;\\n}\\n\\ninput::placeholder {\\n  font-style: italic;\\n}\\n\\ninput#task {\\n  outline: 2px solid #808080a8;\\n  outline-style: auto;\\n}\\n\\nli.hello input.task-text {\\n  width: 85%;\\n  height: 35px;\\n  border: none;\\n  padding-left: 3px;\\n  font-size: 18px;\\n}\\n\\n.clear {\\n  height: 60px;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  background-color: rgba(255, 255, 255, 0.85);\\n}\\n\\nli.clear a {\\n  text-decoration: none;\\n  color: #808080c7;\\n  font-weight: 100;\\n}\\n\\nli.clear a:hover {\\n  color: #000;\\n  text-decoration: underline;\\n}\\n\\n.checked-task {\\n  text-decoration: line-through;\\n  color: #808080a8;\\n}\\n\\n.dragging {\\n  border: 1px solid #000;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-template/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-template/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-template/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-template/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/add-and-remove.js":
/*!*******************************!*\
  !*** ./src/add-and-remove.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addToLocalStorage\": () => (/* binding */ addToLocalStorage),\n/* harmony export */   \"appendTasks\": () => (/* binding */ appendTasks),\n/* harmony export */   \"removeChildsFromList\": () => (/* binding */ removeChildsFromList),\n/* harmony export */   \"appendTaskToListAndUpdateLocalStorage\": () => (/* binding */ appendTaskToListAndUpdateLocalStorage),\n/* harmony export */   \"deleteSingleTask\": () => (/* binding */ deleteSingleTask)\n/* harmony export */ });\nfunction addToLocalStorage(listOfTasks) {\n  localStorage.setItem('To-Do-List', JSON.stringify(listOfTasks));\n}\n\nfunction removeChildsFromList() {\n  document.querySelectorAll('.hello').forEach((e) => e.remove());\n  document.querySelectorAll('.clear').forEach((e) => e.remove());\n}\n\nfunction appendTasks(listOfTasks, DotMenu, placeholder) {\n  listOfTasks.forEach((task) => {\n    const li = document.createElement('li');\n    li.innerHTML = `\n      <input type=\"checkbox\" id=\"task\">\n      <p id=\"${task.index}\" class=\"task-text\">${task.description}</p>\n      <img class=\"${task.index}\" src=\"${DotMenu}\" alt=\"Delete or Drag and drop\">\n    `;\n    li.classList.add('hello');\n    li.draggable = true;\n    placeholder.appendChild(li);\n    if (task.completed && (li.children[1].className !== 'task-text checked-task')) {\n      li.children[0].checked = true;\n      li.children[1].classList.add('checked-task');\n    }\n  });\n}\n\nfunction appendTaskToListAndUpdateLocalStorage(DotMenu, listOfTasks) {\n  const placeholder = document.querySelector('ul.placeholder');\n  const lastLi = document.createElement('li');\n  localStorage.clear();\n  addToLocalStorage(listOfTasks);\n  appendTasks(listOfTasks, DotMenu, placeholder);\n  lastLi.innerHTML = `\n    <a href=\"#\">Clear all completed</a>\n  `;\n  lastLi.className = 'clear';\n  placeholder.appendChild(lastLi);\n}\n\nfunction deleteSingleTask(indexToRemove, listOfTasks) {\n  for (let i = 0; i < listOfTasks.length; i += 1) {\n    if (indexToRemove === listOfTasks[i].index) {\n      listOfTasks.splice(i, 1);\n    }\n  }\n  listOfTasks.forEach((task, index) => {\n    task.index = index;\n  });\n  removeChildsFromList();\n}\n\n\n\n//# sourceURL=webpack://webpack-template/./src/add-and-remove.js?");

/***/ }),

/***/ "./src/checkbox-status.js":
/*!********************************!*\
  !*** ./src/checkbox-status.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearCheckedTasks\": () => (/* binding */ clearCheckedTasks),\n/* harmony export */   \"checkboxStatus\": () => (/* binding */ checkboxStatus),\n/* harmony export */   \"updateListArray\": () => (/* binding */ updateListArray)\n/* harmony export */ });\nfunction clearCheckedTasks(listOfTasks) {\n  listOfTasks = listOfTasks.filter((task) => task.completed === false);\n  listOfTasks.forEach((task, index) => {\n    task.index = index;\n  });\n  return listOfTasks;\n}\n\nfunction checkboxStatus(event, listOfTasks) {\n  if (event.target.checked) {\n    listOfTasks[event.target.parentNode.children[1].id].completed = true;\n  } else if (!event.target.checked) {\n    listOfTasks[event.target.parentNode.children[1].id].completed = false;\n  }\n  return listOfTasks;\n}\n\nfunction updateListArray(DotMenu, event, listOfTasks) {\n  if (event.keyCode === 13) {\n    event.target.parentElement.children[2].src = DotMenu;\n    const li = event.target.parentNode;\n    const p = document.createElement('p');\n    p.innerText = event.target.value;\n    p.className = 'task-text';\n    p.id = event.target.id;\n    event.target.remove();\n    li.insertBefore(p, li.children[1]);\n  }\n  listOfTasks[event.target.id].description = event.target.value;\n}\n\n\n\n//# sourceURL=webpack://webpack-template/./src/checkbox-status.js?");

/***/ }),

/***/ "./src/drag-and-drop.js":
/*!******************************!*\
  !*** ./src/drag-and-drop.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ dragAndDrop)\n/* harmony export */ });\nfunction dragAndDrop(Task, listOfTasks) {\n  const dragTask = document.querySelectorAll('.hello');\n  const placeholder = document.querySelector('.placeholder');\n\n  dragTask.forEach((task) => {\n    task.addEventListener('dragstart', () => {\n      task.classList.add('dragging');\n    });\n    task.addEventListener('dragend', () => {\n      task.classList.remove('dragging');\n      placeholder.querySelectorAll('.hello').forEach((newTask, index) => {\n        let completed = false;\n        if (newTask.children[1].className === 'task-text checked-task') {\n          completed = true;\n        }\n        const task = new Task(newTask.children[1].value, completed, index);\n        listOfTasks[index] = task;\n      });\n      localStorage.clear();\n      localStorage.setItem('To-Do-List', JSON.stringify(listOfTasks));\n    });\n  });\n\n  placeholder.addEventListener('dragover', (event) => {\n    event.preventDefault();\n    const draggableTask = document.querySelector('.dragging');\n    const tasksUnderDragging = [...placeholder.querySelectorAll('.hello:not(.dragging)')];\n    const clearButton = document.querySelector('.clear');\n    const underTask = tasksUnderDragging.reduce((closest, child) => {\n      const box = child.getBoundingClientRect();\n      const offset = (event.clientY - box.top - 25);\n      if (offset < 0 && offset > closest.offset) {\n        return {\n          offset,\n          element: child,\n        };\n      }\n      return closest;\n    }, { offset: Number.NEGATIVE_INFINITY }).element;\n    if (underTask == null) {\n      placeholder.insertBefore(draggableTask, clearButton);\n    } else {\n      placeholder.insertBefore(draggableTask, underTask);\n    }\n  });\n}\n\n//# sourceURL=webpack://webpack-template/./src/drag-and-drop.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _sync_solid_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sync-solid.svg */ \"./src/sync-solid.svg\");\n/* harmony import */ var _ellipsis_v_solid_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ellipsis-v-solid.svg */ \"./src/ellipsis-v-solid.svg\");\n/* harmony import */ var _trash_alt_regular_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trash-alt-regular.svg */ \"./src/trash-alt-regular.svg\");\n/* harmony import */ var _left_arrow_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./left-arrow.png */ \"./src/left-arrow.png\");\n/* harmony import */ var _checkbox_status_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkbox-status.js */ \"./src/checkbox-status.js\");\n/* harmony import */ var _add_and_remove_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-and-remove.js */ \"./src/add-and-remove.js\");\n/* harmony import */ var _drag_and_drop_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./drag-and-drop.js */ \"./src/drag-and-drop.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\nclass Task {\n  constructor(description, completed, index) {\n    this.description = description;\n    this.completed = completed;\n    this.index = index;\n  }\n}\nconst input = document.querySelector('#enter-task');\nlet listOfTasks = [];\n\ndocument.getElementById('sync-icon').src = _sync_solid_svg__WEBPACK_IMPORTED_MODULE_1__;\ndocument.getElementById('enter-icon').src = _left_arrow_png__WEBPACK_IMPORTED_MODULE_4__;\n\nfunction addEventsToTasks() {\n  (0,_drag_and_drop_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Task, listOfTasks);\n  document.querySelector('.clear').addEventListener('click', () => {\n    listOfTasks = (0,_checkbox_status_js__WEBPACK_IMPORTED_MODULE_5__.clearCheckedTasks)(listOfTasks);\n    (0,_add_and_remove_js__WEBPACK_IMPORTED_MODULE_6__.removeChildsFromList)();\n    (0,_add_and_remove_js__WEBPACK_IMPORTED_MODULE_6__.appendTaskToListAndUpdateLocalStorage)(_ellipsis_v_solid_svg__WEBPACK_IMPORTED_MODULE_2__, listOfTasks);\n    addEventsToTasks();\n  });\n  document.querySelectorAll('#task').forEach((task) => {\n    task.addEventListener('change', (event) => {\n      event.target.parentNode.children[1].classList.toggle('checked-task');\n      listOfTasks = (0,_checkbox_status_js__WEBPACK_IMPORTED_MODULE_5__.checkboxStatus)(event, listOfTasks);\n      localStorage.clear();\n      (0,_add_and_remove_js__WEBPACK_IMPORTED_MODULE_6__.addToLocalStorage)(listOfTasks);\n    });\n  });\n  document.querySelectorAll('.hello').forEach((e) => {\n    e.addEventListener('keyup', (event) => {\n      (0,_checkbox_status_js__WEBPACK_IMPORTED_MODULE_5__.updateListArray)(_ellipsis_v_solid_svg__WEBPACK_IMPORTED_MODULE_2__, event, listOfTasks);\n      localStorage.clear();\n      (0,_add_and_remove_js__WEBPACK_IMPORTED_MODULE_6__.addToLocalStorage)(listOfTasks);\n    });\n  });\n  document.querySelectorAll('li.hello img').forEach((task) => {\n    task.addEventListener('click', (event) => {\n      if (event.target.src === _trash_alt_regular_svg__WEBPACK_IMPORTED_MODULE_3__) {\n        (0,_add_and_remove_js__WEBPACK_IMPORTED_MODULE_6__.deleteSingleTask)(parseInt(event.target.className, 10), listOfTasks, _ellipsis_v_solid_svg__WEBPACK_IMPORTED_MODULE_2__);\n        (0,_add_and_remove_js__WEBPACK_IMPORTED_MODULE_6__.appendTaskToListAndUpdateLocalStorage)(_ellipsis_v_solid_svg__WEBPACK_IMPORTED_MODULE_2__, listOfTasks);\n        addEventsToTasks();\n      } else if (event.target.src === _ellipsis_v_solid_svg__WEBPACK_IMPORTED_MODULE_2__) {\n        const li = event.target.parentNode;\n        const input = document.createElement('input');\n        input.type = 'text';\n        input.value = event.target.parentNode.children[1].innerText;\n        input.className = 'task-text';\n        input.id = event.target.parentNode.children[1].id;\n        event.target.src = _trash_alt_regular_svg__WEBPACK_IMPORTED_MODULE_3__;\n        event.target.parentNode.children[1].remove();\n        li.insertBefore(input, event.target.parentNode.children[1]);\n      }\n    });\n  });\n}\n\nfunction getFromLocalStorage() {\n  if (localStorage.length !== 0) {\n    const tasksFromLocStg = JSON.parse(localStorage.getItem('To-Do-List'));\n    tasksFromLocStg.forEach((task) => {\n      listOfTasks.push(task);\n    });\n    (0,_add_and_remove_js__WEBPACK_IMPORTED_MODULE_6__.removeChildsFromList)();\n    (0,_add_and_remove_js__WEBPACK_IMPORTED_MODULE_6__.appendTaskToListAndUpdateLocalStorage)(_ellipsis_v_solid_svg__WEBPACK_IMPORTED_MODULE_2__, listOfTasks);\n    addEventsToTasks();\n  }\n}\n\nfunction createTask(input) {\n  const task = new Task(input, false, listOfTasks.length);\n  listOfTasks.push(task);\n  (0,_add_and_remove_js__WEBPACK_IMPORTED_MODULE_6__.removeChildsFromList)();\n  (0,_add_and_remove_js__WEBPACK_IMPORTED_MODULE_6__.appendTaskToListAndUpdateLocalStorage)(_ellipsis_v_solid_svg__WEBPACK_IMPORTED_MODULE_2__, listOfTasks);\n  addEventsToTasks();\n}\n\ndocument.querySelector('form').addEventListener('submit', (event) => {\n  event.preventDefault();\n  createTask(input.value);\n  input.value = '';\n});\n\ngetFromLocalStorage();\n\nmodule.exports = createTask;\n\n//# sourceURL=webpack://webpack-template/./src/index.js?");

/***/ }),

/***/ "./src/ellipsis-v-solid.svg":
/*!**********************************!*\
  !*** ./src/ellipsis-v-solid.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d529b620fd57a0e412bd.svg\";\n\n//# sourceURL=webpack://webpack-template/./src/ellipsis-v-solid.svg?");

/***/ }),

/***/ "./src/left-arrow.png":
/*!****************************!*\
  !*** ./src/left-arrow.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8fc369e9e780a8840c20.png\";\n\n//# sourceURL=webpack://webpack-template/./src/left-arrow.png?");

/***/ }),

/***/ "./src/sync-solid.svg":
/*!****************************!*\
  !*** ./src/sync-solid.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9dc210e856863a8dd9f0.svg\";\n\n//# sourceURL=webpack://webpack-template/./src/sync-solid.svg?");

/***/ }),

/***/ "./src/trash-alt-regular.svg":
/*!***********************************!*\
  !*** ./src/trash-alt-regular.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"96ae42b30b69a72a189a.svg\";\n\n//# sourceURL=webpack://webpack-template/./src/trash-alt-regular.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;