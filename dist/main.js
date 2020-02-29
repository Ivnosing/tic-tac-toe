/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/styles.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/styles.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"/** Helpers */\\n/** Colors */\\n/** Components */\\n#gameboard {\\n  display: grid;\\n  grid-template-columns: repeat(3, 1fr);\\n  width: 100%;\\n  margin-bottom: 1rem; }\\n  #gameboard .cell {\\n    position: relative;\\n    width: 100%;\\n    padding-bottom: 100%;\\n    background-color: #6d6d6d;\\n    border: 1px solid #424242;\\n    color: white;\\n    font-size: 6rem;\\n    user-select: none;\\n    overflow: hidden;\\n    outline: 0;\\n    cursor: pointer; }\\n    #gameboard .cell span {\\n      position: absolute;\\n      top: 0;\\n      bottom: 0;\\n      left: 0;\\n      right: 0;\\n      display: flex;\\n      align-items: center;\\n      justify-content: center;\\n      line-height: 0.775;\\n      text-align: center; }\\n    #gameboard .cell:nth-child(1) {\\n      border-radius: 1rem 0 0 0; }\\n    #gameboard .cell:nth-child(3) {\\n      border-radius: 0 1rem 0 0; }\\n    #gameboard .cell:nth-child(7) {\\n      border-radius: 0 0 0 1rem; }\\n    #gameboard .cell:nth-child(9) {\\n      border-radius: 0 0 1rem 0; }\\n    #gameboard .cell:focus, #gameboard .cell:active {\\n      background-color: #3a3a3a; }\\n\\n@media screen and (max-width: 500px) {\\n  #gameboard .cell {\\n    font-size: 3.5rem; } }\\n\\n.players {\\n  display: flex;\\n  font-size: 2rem; }\\n  .players .player-form {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: flex-start;\\n    position: relative;\\n    margin-bottom: 1rem; }\\n    .players .player-form label {\\n      position: absolute;\\n      left: 0;\\n      top: 0.25em;\\n      font-size: 0.75em;\\n      transition: transform 0.2s ease-in-out;\\n      user-select: none;\\n      cursor: text; }\\n    .players .player-form input {\\n      width: 100%;\\n      background: none;\\n      border: none;\\n      box-shadow: 0 1px 0 0 white;\\n      font-size: 1em;\\n      color: white; }\\n      .players .player-form input:focus {\\n        outline: 0;\\n        box-shadow: 0 2px 0 0 white; }\\n        .players .player-form input:focus ~ label {\\n          transform: scale(0.5) translate(-1.75em, -2.375em); }\\n      .players .player-form input:not([value=\\\"\\\"]) ~ label {\\n        transform: scale(0.5) translate(-1.75em, -2.375em); }\\n    .players .player-form:not(:first-child) {\\n      margin-left: 1rem; }\\n\\n* {\\n  box-sizing: border-box; }\\n\\nhtml {\\n  font-family: 'Roboto', Helvetica, sans-serif;\\n  font-size: 20px; }\\n\\nbody {\\n  margin: 0;\\n  background-color: #1b1b1b;\\n  color: white; }\\n\\nh1 {\\n  text-align: center;\\n  font-size: 3rem; }\\n\\n.container {\\n  max-width: 30rem;\\n  margin: 0 auto;\\n  padding: 1rem; }\\n\\n#announcement {\\n  text-align: center;\\n  font-size: 1.25em;\\n  font-weight: 500; }\\n\\n@media screen and (max-width: 500px) {\\n  h1 {\\n    margin: 0 0 1.5rem; } }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/scss/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/js/announcement.js":
/*!********************************!*\
  !*** ./src/js/announcement.js ***!
  \********************************/
/*! exports provided: setAnnouncement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setAnnouncement\", function() { return setAnnouncement; });\n/**\r\n *  Sets the announcement text\r\n *\r\n * @param {string} name Current player name\r\n * @param {(name: string) => string} [message] Function that takes current player's name as param to display an alternative message\r\n */\nvar setAnnouncement = function setAnnouncement(name, message) {\n  var announcement = document.getElementById('announcement');\n  announcement.innerText = message ? message(name) : \"\".concat(name, \" plays now\");\n};\n\n//# sourceURL=webpack:///./src/js/announcement.js?");

/***/ }),

/***/ "./src/js/display-controller.js":
/*!**************************************!*\
  !*** ./src/js/display-controller.js ***!
  \**************************************/
/*! exports provided: DisplayController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DisplayController\", function() { return DisplayController; });\nvar DisplayController = function () {\n  var gameboardElement = document.getElementById('gameboard');\n  var cells = gameboardElement.children;\n  /**\r\n   * Sets the symbol for each cell\r\n   * \r\n   * @param {string[]} board Array of each cell value\r\n   */\n\n  var setBoard = function setBoard(board) {\n    for (var i = 0; i < board.length; i++) {\n      setCell(cells[i], board[i]);\n    }\n  };\n  /**\r\n   * Sets the symbol of a cell\r\n   * \r\n   * @param {HTMLElement} cell Cell HTMLElement\r\n   * @param {string} value Cell value\r\n   * @returns {boolean} Returns true if the cell was set and false otherwise\r\n   */\n\n\n  var setCell = function setCell(cell, value) {\n    cell.querySelector('span').innerHTML = value;\n  };\n\n  return {\n    cells: cells,\n    setBoard: setBoard\n  };\n}();\n\n//# sourceURL=webpack:///./src/js/display-controller.js?");

/***/ }),

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/*! exports provided: initTicTacToe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initTicTacToe\", function() { return initTicTacToe; });\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ \"./src/js/gameboard.js\");\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player.js */ \"./src/js/player.js\");\n/* harmony import */ var _display_controller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display-controller.js */ \"./src/js/display-controller.js\");\n/* harmony import */ var _turn_controller_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./turn-controller.js */ \"./src/js/turn-controller.js\");\n/* harmony import */ var _announcement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./announcement.js */ \"./src/js/announcement.js\");\n\n\n\n\n\nvar initTicTacToe = function initTicTacToe() {\n  document.querySelectorAll('.players .player-form input').forEach(function (el) {\n    return el.style.transition = 'all 0.2s ease-in-out 0s';\n  }); // Update name of player 1\n\n  document.getElementById('player1').addEventListener('keyup', function (event) {\n    player1.setName(event.target.value);\n    announce();\n  }); // Update name of player 2\n\n  document.getElementById('player2').addEventListener('keyup', function (event) {\n    player2.setName(event.target.value);\n    announce();\n  }); // Set board\n\n  _display_controller_js__WEBPACK_IMPORTED_MODULE_2__[\"DisplayController\"].setBoard(_gameboard_js__WEBPACK_IMPORTED_MODULE_0__[\"Gameboard\"].getCells()); // Set players\n\n  var player1 = Object(_player_js__WEBPACK_IMPORTED_MODULE_1__[\"playerFactory\"])();\n  var player2 = Object(_player_js__WEBPACK_IMPORTED_MODULE_1__[\"playerFactory\"])(); // Announce turn\n\n  var announce = function announce(message) {\n    var currentPlayer = _turn_controller_js__WEBPACK_IMPORTED_MODULE_3__[\"TurnController\"].getPlayerTurn() === 1 ? player1 : player2;\n    var name = currentPlayer.getName() || \"Player \".concat(_turn_controller_js__WEBPACK_IMPORTED_MODULE_3__[\"TurnController\"].getPlayerTurn());\n    Object(_announcement_js__WEBPACK_IMPORTED_MODULE_4__[\"setAnnouncement\"])(name, message);\n  };\n\n  var a11yClick = function a11yClick(event) {\n    if (event.type === 'click') {\n      return true;\n    } else {\n      var code = event.charCode || event.keyCode;\n      return code === 32 || code === 13;\n    }\n  };\n\n  var cellClickLogic = function cellClickLogic(event, i) {\n    // Check event\n    if (a11yClick(event)) {\n      // Reset board if game is over and user clicks to start again\n      if (_gameboard_js__WEBPACK_IMPORTED_MODULE_0__[\"Gameboard\"].evaluateBoard() || _gameboard_js__WEBPACK_IMPORTED_MODULE_0__[\"Gameboard\"].tie()) {\n        _gameboard_js__WEBPACK_IMPORTED_MODULE_0__[\"Gameboard\"].resetBoard();\n        _display_controller_js__WEBPACK_IMPORTED_MODULE_2__[\"DisplayController\"].setBoard(_gameboard_js__WEBPACK_IMPORTED_MODULE_0__[\"Gameboard\"].getCells());\n      } // Update cell\n\n\n      var cellChanged = _gameboard_js__WEBPACK_IMPORTED_MODULE_0__[\"Gameboard\"].setCell(i, _turn_controller_js__WEBPACK_IMPORTED_MODULE_3__[\"TurnController\"].getPlayerSymbol());\n\n      if (cellChanged) {\n        // Update board with cell's new value\n        _display_controller_js__WEBPACK_IMPORTED_MODULE_2__[\"DisplayController\"].setBoard(_gameboard_js__WEBPACK_IMPORTED_MODULE_0__[\"Gameboard\"].getCells());\n\n        if (_gameboard_js__WEBPACK_IMPORTED_MODULE_0__[\"Gameboard\"].evaluateBoard()) {\n          // If user won\n          announce(function (name) {\n            return \"\\uD83C\\uDF89 \".concat(name, \" wins! Click a cell to start a new game\");\n          });\n        } else if (_gameboard_js__WEBPACK_IMPORTED_MODULE_0__[\"Gameboard\"].tie()) {\n          // If there is a tie\n          announce(function () {\n            return 'Tie! Click a cell to start a new game';\n          });\n        } else {\n          _turn_controller_js__WEBPACK_IMPORTED_MODULE_3__[\"TurnController\"].nextTurn();\n          announce();\n        }\n      }\n    }\n  }; // Add event listener to every cell\n\n\n  var _loop = function _loop(i) {\n    _display_controller_js__WEBPACK_IMPORTED_MODULE_2__[\"DisplayController\"].cells[i].addEventListener('click', function (event) {\n      return cellClickLogic(event, i);\n    });\n    _display_controller_js__WEBPACK_IMPORTED_MODULE_2__[\"DisplayController\"].cells[i].addEventListener('keyup', function (event) {\n      return cellClickLogic(event, i);\n    });\n  };\n\n  for (var i = 0; i < _display_controller_js__WEBPACK_IMPORTED_MODULE_2__[\"DisplayController\"].cells.length; i++) {\n    _loop(i);\n  }\n};\n\n//# sourceURL=webpack:///./src/js/game.js?");

/***/ }),

/***/ "./src/js/gameboard.js":
/*!*****************************!*\
  !*** ./src/js/gameboard.js ***!
  \*****************************/
/*! exports provided: Gameboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Gameboard\", function() { return Gameboard; });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar Gameboard = function (size) {\n  var board = [];\n  /**\r\n   * Resets all cell symbols\r\n   */\n\n  var resetBoard = function resetBoard() {\n    for (var i = 0; i < size; i++) {\n      for (var j = 0; j < size; j++) {\n        if (!board[i]) {\n          board[i] = [];\n        }\n\n        board[i][j] = '';\n      }\n    }\n  };\n\n  resetBoard();\n  /**\r\n   * Gets all cell symbols\r\n   *\r\n   * @returns {string[]} Array of cell symbols\r\n   */\n\n  var getCells = function getCells() {\n    return board.reduce(function (acc, val) {\n      return [].concat(_toConsumableArray(acc), _toConsumableArray(val));\n    }, []);\n  };\n  /**\r\n   * Sets the symbol of a cell\r\n   * @param {number} index One-dimensional cell index\r\n   * @param {string} symbol Cell symbol\r\n   * @returns {boolean} Returns true if the cell was set and false otherwise\r\n   */\n\n\n  var setCell = function setCell(index, symbol) {\n    // Gets the row\n    var i = Math.trunc(index / size); // Gets the column\n\n    var j = index % size;\n\n    if (!board[i][j]) {\n      board[i][j] = symbol;\n      return true;\n    }\n\n    return false;\n  };\n\n  var evaluateBoard = function evaluateBoard() {\n    var rows = board;\n    var columns = board.map(function (column, index) {\n      return board.map(function (row) {\n        return row[index];\n      });\n    });\n    var diagonals = [board.map(function (row, index) {\n      return row[index];\n    }), board.map(function (row, index) {\n      return row[size - 1 - index];\n    })];\n    var patterns = [].concat(_toConsumableArray(rows), _toConsumableArray(columns), diagonals);\n    return patterns.some(function (pattern) {\n      var unique = _toConsumableArray(new Set(pattern));\n\n      return unique.length === 1 && unique[0];\n    });\n  };\n\n  var tie = function tie() {\n    var cells = getCells();\n    return cells.length === cells.filter(function (c) {\n      return c;\n    }).length;\n  };\n\n  return {\n    getCells: getCells,\n    setCell: setCell,\n    resetBoard: resetBoard,\n    evaluateBoard: evaluateBoard,\n    tie: tie\n  };\n}(3);\n\n//# sourceURL=webpack:///./src/js/gameboard.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./src/js/game.js\");\n\nwindow.addEventListener('load', function () {\n  return Object(_game_js__WEBPACK_IMPORTED_MODULE_0__[\"initTicTacToe\"])();\n});\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/player.js":
/*!**************************!*\
  !*** ./src/js/player.js ***!
  \**************************/
/*! exports provided: playerFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"playerFactory\", function() { return playerFactory; });\n/**\r\n * Player function factory\r\n * \r\n * @todo move symbol here\r\n */\nvar Player = function Player() {\n  var name = '';\n  /**\r\n   * Sets the name of the player\r\n   *\r\n   * @param {string} newName New name of the player\r\n   */\n\n  var setName = function setName(newName) {\n    return name = newName;\n  };\n  /**\r\n   * Gets the name of the player\r\n   *\r\n   * @returns {string} Current name of the player\r\n   */\n\n\n  var getName = function getName() {\n    return name;\n  };\n\n  return {\n    setName: setName,\n    getName: getName\n  };\n};\n/**\r\n * Player function factory\r\n * \r\n * @returns { { setName: (newName: string) => void, getName: () => string } } Player object\r\n */\n\n\nvar playerFactory = function playerFactory() {\n  return Object.create(Player());\n};\n\n//# sourceURL=webpack:///./src/js/player.js?");

/***/ }),

/***/ "./src/js/turn-controller.js":
/*!***********************************!*\
  !*** ./src/js/turn-controller.js ***!
  \***********************************/
/*! exports provided: TurnController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TurnController\", function() { return TurnController; });\nvar TurnController = function () {\n  var playerTurn = 1;\n  var symbols = new Map([[1, '❌'], [2, '⭕']]);\n\n  var getPlayerTurn = function getPlayerTurn() {\n    return playerTurn;\n  };\n\n  var getPlayerSymbol = function getPlayerSymbol() {\n    return symbols.get(playerTurn);\n  };\n\n  var nextTurn = function nextTurn() {\n    if (playerTurn === symbols.size) {\n      return playerTurn = 1;\n    }\n\n    return ++playerTurn;\n  };\n\n  return {\n    getPlayerTurn: getPlayerTurn,\n    getPlayerSymbol: getPlayerSymbol,\n    nextTurn: nextTurn\n  };\n}();\n\n//# sourceURL=webpack:///./src/js/turn-controller.js?");

/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/styles.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/scss/styles.scss?");

/***/ }),

/***/ 0:
/*!******************************************************!*\
  !*** multi ./src/js/index.js ./src/scss/styles.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/js/index.js */\"./src/js/index.js\");\nmodule.exports = __webpack_require__(/*! ./src/scss/styles.scss */\"./src/scss/styles.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/js/index.js_./src/scss/styles.scss?");

/***/ })

/******/ });