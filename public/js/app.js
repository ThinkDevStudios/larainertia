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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/rovillesarate/recruitStart/wp-content/themes/recruitStart/resources/js/app.js: Support for the experimental syntax 'jsx' isn't currently enabled (14:3):\n\n  12 | \n  13 | render(\n> 14 |   <InertiaApp\n     |   ^\n  15 |     initialPage={JSON.parse(app.dataset.page)}\n  16 |     resolveComponent={name =>\n  17 |       import(`./Pages/${name}`).then(module => module.default)\n\nAdd @babel/preset-react (https://git.io/JfeDR) to the 'presets' section of your Babel config to enable transformation.\nIf you want to leave it as-is, add @babel/plugin-syntax-jsx (https://git.io/vb4yA) to the 'plugins' section to enable parsing.\n    at Parser._raise (/Users/rovillesarate/recruitStart/wp-content/themes/recruitStart/node_modules/@babel/parser/lib/index.js:763:17)\n    at Parser.raiseWithData (/Users/rovillesarate/recruitStart/wp-content/themes/recruitStart/node_modules/@babel/parser/lib/index.js:756:17)\n    at Parser.expectOnePlugin (/Users/rovillesarate/recruitStart/wp-content/themes/recruitStart/node_modules/@babel/parser/lib/index.js:8945:18)\n    at Parser.parseExprAtom (/Users/rovillesarate/recruitStart/wp-content/themes/recruitStart/node_modules/@babel/parser/lib/index.js:10224:22)\n    at Parser.parseExprSubscripts (/Users/rovillesarate/recruitStart/wp-content/themes/recruitStart/node_modules/@babel/parser/lib/index.js:9792:23)\n    at Parser.parseUpdate (/Users/rovillesarate/recruitStart/wp-content/themes/recruitStart/node_modules/@babel/parser/lib/index.js:9772:21)\n    at Parser.parseMaybeUnary (/Users/rovillesarate/recruitStart/wp-content/themes/recruitStart/node_modules/@babel/parser/lib/index.js:9761:17)\n    at Parser.parseExprOps (/Users/rovillesarate/recruitStart/wp-content/themes/recruitStart/node_modules/@babel/parser/lib/index.js:9631:23)\n    at Parser.parseMaybeConditional (/Users/rovillesarate/recruitStart/wp-content/themes/recruitStart/node_modules/@babel/parser/lib/index.js:9605:23)\n    at Parser.parseMaybeAssign (/Users/rovillesarate/recruitStart/wp-content/themes/recruitStart/node_modules/@babel/parser/lib/index.js:9568:21)\n    at Parser.parseExprListItem (/Users/rovillesarate/recruitStart/wp-content/themes/recruitStart/node_modules/@babel/parser/lib/index.js:10984:18)\n    at Parser.parseCallExpressionArguments (/Users/rovillesarate/recruitStart/wp-content/themes/recruitStart/node_modules/@babel/parser/lib/index.js:10001:22)\n    at Parser.parseCoverCallAndAsyncArrowHead (/Users/rovillesarate/recruitStart/wp-content/themes/recruitStart/node_modules/@babel/parser/lib/index.js:9908:29)\n    at Parser.parseSubscript (/Users/rovillesarate/recruitStart/wp-content/themes/recruitStart/node_modules/@babel/parser/lib/index.js:9844:19)\n    at Parser.parseSubscripts (/Users/rovillesarate/recruitStart/wp-content/themes/recruitStart/node_modules/@babel/parser/lib/index.js:9815:19)\n    at Parser.parseExprSubscripts (/Users/rovillesarate/recruitStart/wp-content/themes/recruitStart/node_modules/@babel/parser/lib/index.js:9798:17)\n    at Parser.parseUpdate (/Users/rovillesarate/recruitStart/wp-content/themes/recruitStart/node_modules/@babel/parser/lib/index.js:9772:21)\n    at Parser.parseMaybeUnary (/Users/rovillesarate/recruitStart/wp-content/themes/recruitStart/node_modules/@babel/parser/lib/index.js:9761:17)\n    at Parser.parseExprOps (/Users/rovillesarate/recruitStart/wp-content/themes/recruitStart/node_modules/@babel/parser/lib/index.js:9631:23)\n    at Parser.parseMaybeConditional (/Users/rovillesarate/recruitStart/wp-content/themes/recruitStart/node_modules/@babel/parser/lib/index.js:9605:23)\n    at Parser.parseMaybeAssign (/Users/rovillesarate/recruitStart/wp-content/themes/recruitStart/node_modules/@babel/parser/lib/index.js:9568:21)\n    at Parser.parseExpression (/Users/rovillesarate/recruitStart/wp-content/themes/recruitStart/node_modules/@babel/parser/lib/index.js:9520:23)\n    at Parser.parseStatementContent (/Users/rovillesarate/recruitStart/wp-content/themes/recruitStart/node_modules/@babel/parser/lib/index.js:11479:23)\n    at Parser.parseStatement (/Users/rovillesarate/recruitStart/wp-content/themes/recruitStart/node_modules/@babel/parser/lib/index.js:11348:17)\n    at Parser.parseBlockOrModuleBlockBody (/Users/rovillesarate/recruitStart/wp-content/themes/recruitStart/node_modules/@babel/parser/lib/index.js:11930:25)\n    at Parser.parseBlockBody (/Users/rovillesarate/recruitStart/wp-content/themes/recruitStart/node_modules/@babel/parser/lib/index.js:11916:10)\n    at Parser.parseTopLevel (/Users/rovillesarate/recruitStart/wp-content/themes/recruitStart/node_modules/@babel/parser/lib/index.js:11279:10)\n    at Parser.parse (/Users/rovillesarate/recruitStart/wp-content/themes/recruitStart/node_modules/@babel/parser/lib/index.js:12984:10)\n    at parse (/Users/rovillesarate/recruitStart/wp-content/themes/recruitStart/node_modules/@babel/parser/lib/index.js:13037:38)\n    at parser (/Users/rovillesarate/recruitStart/wp-content/themes/recruitStart/node_modules/@babel/core/lib/parser/index.js:54:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/Users/rovillesarate/recruitStart/wp-content/themes/recruitStart/node_modules/@babel/core/lib/transformation/normalize-file.js:99:38)\n    at normalizeFile.next (<anonymous>)\n    at run (/Users/rovillesarate/recruitStart/wp-content/themes/recruitStart/node_modules/@babel/core/lib/transformation/index.js:31:50)\n    at run.next (<anonymous>)\n    at Function.transform (/Users/rovillesarate/recruitStart/wp-content/themes/recruitStart/node_modules/@babel/core/lib/transform.js:27:41)");

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/css-loader/index.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nValidationError: Invalid options object. Sass Loader has been initialized using an options object that does not match the API schema.\n - options has an unknown property 'outputStyle'. These properties are valid:\n   object { implementation?, sassOptions?, prependData?, sourceMap?, webpackImporter? }\n    at validate (/Users/rovillesarate/recruitStart/wp-content/themes/recruitStart/node_modules/schema-utils/dist/validate.js:96:11)\n    at Object.loader (/Users/rovillesarate/recruitStart/wp-content/themes/recruitStart/node_modules/sass-loader/dist/index.js:36:28)\n    at /Users/rovillesarate/recruitStart/wp-content/themes/recruitStart/node_modules/webpack/lib/NormalModule.js:316:20\n    at /Users/rovillesarate/recruitStart/wp-content/themes/recruitStart/node_modules/loader-runner/lib/LoaderRunner.js:367:11\n    at /Users/rovillesarate/recruitStart/wp-content/themes/recruitStart/node_modules/loader-runner/lib/LoaderRunner.js:233:18\n    at runSyncOrAsync (/Users/rovillesarate/recruitStart/wp-content/themes/recruitStart/node_modules/loader-runner/lib/LoaderRunner.js:143:3)\n    at iterateNormalLoaders (/Users/rovillesarate/recruitStart/wp-content/themes/recruitStart/node_modules/loader-runner/lib/LoaderRunner.js:232:2)\n    at /Users/rovillesarate/recruitStart/wp-content/themes/recruitStart/node_modules/loader-runner/lib/LoaderRunner.js:205:4\n    at /Users/rovillesarate/recruitStart/wp-content/themes/recruitStart/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:85:15\n    at processTicksAndRejections (internal/process/task_queues.js:75:11)");

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/rovillesarate/recruitStart/wp-content/themes/recruitStart/resources/js/app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! /Users/rovillesarate/recruitStart/wp-content/themes/recruitStart/resources/sass/app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });